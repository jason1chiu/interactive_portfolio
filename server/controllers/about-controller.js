const multer = require('multer');
const sharp = require('sharp');
const upload = multer({ dest: 'uploads/' });
const cloudinary = require('cloudinary').v2;
const { About } = require("../models");

const getAbout = async (req, res) => {
  const about = await About.findOne();
  res.json(about);
};

const addAbout = async (req, res) => {
  const newAbout = new About(req.body);
  const savedAbout = await newAbout.save();
  res.json(savedAbout);
};

const updateAbout = async (req, res) => {
  const updatedAbout = await About.findOneAndUpdate({}, req.body, {
    new: true,
  });
  res.json(updatedAbout);
};

const deleteAbout = async (req, res) => {
  const deletedAbout = await About.findOneAndDelete({});
  res.json(deletedAbout);
};

// Configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadAvatar = (req, res, next) => {
  upload.single('avatar')(req, res, async (err) => {
    if (err) {
      return res.status(500).send("Error uploading file");
    }

    // Resize the avatar using sharp
    const outputPath = `resized_${req.file.path}`;
    await sharp(req.file.path)
      .resize(200, 200)  // Resize to 200x200 pixels
      .toFile(outputPath);

    // Upload the resized avatar to cloudinary
    cloudinary.uploader.upload(outputPath, function(error, result) {
      if (error) {
        return res.status(500).send(error.message);
      }
      
      // Update the avatar field of the About document
      About.findOneAndUpdate({}, { avatar: result.url }, function(err, about) {
        if (err) {
          return res.status(500).send(err.message);
        }
        
        res.send("Uploaded!");
      });
    });
  });
};


module.exports = { getAbout, addAbout, updateAbout, deleteAbout, uploadAvatar };
