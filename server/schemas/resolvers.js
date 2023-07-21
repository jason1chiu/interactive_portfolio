const {
  User,
  About,
  Skill,
  Project,
  BlogPost,
  ContactMessage,
} = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const cloudinary = require('cloudinary').v2;
require("dotenv").config();

// Configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
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

    about: async () => {
      return About.find({});
    },
    skills: async () => {
      return Skill.find({});
    },
    projects: async () => {
      return Project.find({});
    },
    blogPosts: async () => {
      return BlogPost.find({});
    },
    contactMessages: async () => {
      return ContactMessage.find({});
    },
    getPortfolio: async () => {
      const about = await About.findOne();
      const skills = await Skill.find({});
      const projects = await Project.find({});
      const blogPosts = await BlogPost.find({});

      return { about, skills, projects, blogPosts };
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      if (
        email === process.env.PORTFOLIO_EMAIL &&
        password === process.env.PORTFOLIO_PASSWORD
      ) {
        // create a simple token (you can use a library for this)
        const token = signToken({ email: process.env.PORTFOLIO_EMAIL });

        // return an object that includes the token and user details
        return { token, user: { email: process.env.PORTFOLIO_EMAIL } };
      } else {
        throw new AuthenticationError("Incorrect credentials");
      }
    },

    addAbout: async (
      parent,
      { information, background, education, interests, avatar }, context
    ) => {
      if (context.user) {
        let result = await cloudinary.uploader.upload(avatar)
        
        if (result.error) {
          return res.status(500).send(error.message);
        }
        
        const about = await About.create({
          information,
          background,
          education,
          interests,
          avatar: result.url,
        })

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { about: about._id }
        );

        return about; 
      }
    },

    updateAbout: async (
      parent,
      { information, background, education, interests, avatar },
      context
    ) => {
      if (context.user) {
        let result = await cloudinary.uploader.upload(avatar)

        if (result.error) {
          return res.status(500).send(error.message);
        }

        const about = await About.findOneAndUpdate(
          {},
          { information, background, education, interests, avatar: result.url },
          { new: true }
        );

        return about;
      }

      throw new AuthenticationError("Not logged in");
    },

  },
};

module.exports = resolvers;
