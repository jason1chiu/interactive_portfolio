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
require("dotenv").config();

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password");
    
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
      const about = await About.find({});
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

    addInformation: async (parent, { information }, context) => {
      if (context.user) {
        const about = await About.create({ information });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { about: about._id }
        );

        return about;
      }

      throw new AuthenticationError("Not logged in");
    },

    addBackground: async (parent, { background }, context) => {
      if (context.user) {
        const about = await About.create({ background });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { about: about._id }
        );

        return about;
      }

      throw new AuthenticationError("Not logged in");
    },

    addEducation: async (parent, { education }, context) => {
      if (context.user) {
        const about = await About.create({ education });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { about: about._id }
        );

        return about;
      }

      throw new AuthenticationError("Not logged in");
    },

    addInterests: async (parent, { interests }, context) => {
      if (context.user) {
        const about = await About.create({ interests });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { about: about._id }
        );

        return about;
      }

      throw new AuthenticationError("Not logged in");
    },


  },
};

module.exports = resolvers;
