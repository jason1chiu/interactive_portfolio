const {
  User,
  Information,
  Education,
  Interests,
  Background,
  Skill,
  Project,
  ContactMessage,
} = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const cloudinary = require("cloudinary").v2;
const sharp = require("sharp");
require("dotenv").config();

// Configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    information: async () => {
      return Information.findOne({});
    },
    education: async () => {
      return Education.find({});
    },
    interests: async () => {
      return Interests.find({});
    },
    background: async () => {
      return Background.find({});
    },
    skills: async () => {
      return Skill.find({});
    },
    projects: async () => {
      return Project.find({});
    },
    contactMessages: async () => {
      return ContactMessage.find({});
    },
    getPortfolio: async () => {
      const information = await Information.findOne({});
      const background = await Background.find({});
      const education = await Education.find({});
      const interests = await Interests.find({});
      const skills = await Skill.find({});
      const projects = await Project.find({});

      return {
        information,
        background,
        education,
        interests,
        skills,
        projects,
      };
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      if (
        email === process.env.PORTFOLIO_EMAIL &&
        password === process.env.PORTFOLIO_PASSWORD
      ) {
        const token = signToken({ email: process.env.PORTFOLIO_EMAIL });

        return { token, user: { email: process.env.PORTFOLIO_EMAIL } };
      } else {
        throw new AuthenticationError("Incorrect credentials");
      }
    },

    addInformation: async (
      parent,
      { name, title, location, avatar },
      context
    ) => {
      if (context.user) {
        // Convert the data URL to a Buffer
        const matches = avatar.match(/^data:.+\/(.+);base64,(.*)$/);
        const buffer = Buffer.from(matches[2], "base64");

        // Resize the avatar using sharp
        const outputPath = `resized_avatar.jpg`;
        await sharp(buffer).resize(500).toFile(outputPath);

        let result = await cloudinary.uploader.upload(outputPath);

        if (result.error) {
          return res.status(500).send(error.message);
        }

        const information = await Information.create({
          name,
          title,
          location,
          avatar: result.url,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { information: information._id } }
        );

        return information;
      }
    },

    updateInformation: async (
      parent,
      { name, title, location, avatar },
      context
    ) => {
      if (context.user) {
        let result = await cloudinary.uploader.upload(avatar);

        if (result.error) {
          return res.status(500).send(error.message);
        }

        const information = await Information.findOneAndUpdate(
          {},
          { name, title, location, avatar: result.url },
          { new: true }
        );

        return information;
      }

      throw new AuthenticationError("Not logged in");
    },

    addBackground: async (
      parent,
      { jobTitle, company, startYear, endYear, description },
      context
    ) => {
      if (context.user) {
        const background = await Background.create({
          jobTitle,
          company,
          startYear,
          endYear,
          description,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { background: background._id } }
        );

        return background;
      }
    },

    updateBackground: async (
      parent,
      { _id, jobTitle, company, startYear, endYear, description },
      context
    ) => {
      if (context.user) {
        const background = await Background.findOneAndUpdate(
          { _id },
          { jobTitle, company, startYear, endYear, description },
          { new: true }
        );

        return background;
      }

      throw new AuthenticationError("Not logged in");
    },

    addEducation: async (
      parent,
      { school, degree, fieldOfStudy, startYear, endYear },
      context
    ) => {
      if (context.user) {
        const education = await Education.create({
          school,
          degree,
          fieldOfStudy,
          startYear,
          endYear,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { education: education._id } }
        );

        return education;
      }
    },

    updateEducation: async (
      parent,
      { _id, school, degree, startYear, endYear, description },
      context
    ) => {
      if (context.user) {
        const education = await Education.findOneAndUpdate(
          { _id },
          { school, degree, startYear, endYear, description },
          { new: true }
        );

        return education;
      }

      throw new AuthenticationError("Not logged in");
    },

    addInterest: async (parent, { interest }, context) => {
      if (context.user) {
        const newInterest = await Interests.create({
          interest: interest,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { interests: newInterest._id } }
        );

        return newInterest;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    // updateInterests: async (parent, { interests }, context) => {
    //   if (context.user) {
    //     const interest = await Interests.findByIdAndUpdate(
    //       {},
    //       { interests },
    //       { new: true }
    //     );

    //     return interest;
    //   }

    //   throw new AuthenticationError("You need to be logged in!");
    // },

    addProject: async (
      parent,
      { name, description, image, liveLink, codeLink },
      context
    ) => {
      if (context.user) {
        let result = await cloudinary.uploader.upload(image);

        if (result.error) {
          return res.status(500).send(error.message);
        }

        const project = await Project.create({
          name,
          description,
          image: result.url,
          liveLink,
          codeLink,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { projects: project._id } }
        );

        return project;
      }
    },

    updateProject: async (
      parent,
      { _id, name, description, image, liveLink, codeLink },
      context
    ) => {
      if (context.user) {
        // Upload the image to Cloudinary and get the resulting URL
        let result = await cloudinary.uploader.upload(image);
        if (result.error) {
          throw new Error("Failed to upload image to Cloudinary");
        }

        // Update the project with the new data and image URL
        let project = await Project.findByIdAndUpdate(
          _id,
          {
            name,
            description,
            image: result.url,
            liveLink,
            codeLink,
          },
          { new: true }
        );

        return project;
      }
      throw new AuthenticationError("Not logged in");
    },

    deleteProject: async (parent, { _id }, context) => {
      if (context.user) {
        // Assuming you have a function in your controller to handle deleting a project
        let project = await Project.findByIdAndDelete(_id);
        return project;
      }
      throw new AuthenticationError("Not logged in");
    },

    addSkill: async (parent, { name, iconClassName }, context) => {
      if (context.user) {
        return Skill.create({ name, iconClassName });
      }
      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
