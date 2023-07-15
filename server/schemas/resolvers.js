const { User, Skill, Project, BlogPost, ContactMessage } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
require('dotenv').config();

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

    addSkill: async (parent, args, context) => {
      if (context.user) {
        const skill = await Skill.create(args);
        await User.findByIdAndUpdate(context.user._id, {
          $push: { skills: skill._id },
        });
        return skill;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addProject: async (parent, args, context) => {
      if (context.user) {
        const project = await Project.create(args);
        await User.findByIdAndUpdate(context.user._id, {
          $push: { projects: project._id },
        });
        return project;
      }
      throw new AuthenticationError("You need to be logged in!");
    },    

    addBlogPost: async (parent, args, context) => {
      if (context.user) {
        const blogPost = await BlogPost.create(args);
        await User.findByIdAndUpdate(context.user._id, {
          $push: { blogPosts: blogPost._id },
        });
        return blogPost;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addContactMessage: async (parent, args, context) => {
      if (context.user) {
        const contactMessage = await ContactMessage.create(args);
        await User.findByIdAndUpdate(context.user._id, {
          $push: { contactMessages: contactMessage._id },
        });
        return contactMessage;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
