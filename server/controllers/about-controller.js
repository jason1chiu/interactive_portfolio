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

module.exports = { getAbout, addAbout, updateAbout, deleteAbout };
