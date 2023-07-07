const { User, Skill, Project, BlogPost, Testimonial, ContactMessage } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if(context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
      
        return userData;
      }

      throw new AuthenticationError('Not logged in');
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
    testimonials: async () => {
      return Testimonial.find({});
    },
    contactMessages: async () => {
      return ContactMessage.find({});
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addSkill: async (parent, args, context) => {
      if (context.user) {
        const skill = await Skill.create(args);
        await User.findByIdAndUpdate(context.user._id, { $push: { skills: skill._id } });
        return skill;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addProject: async (parent, args, context) => {
      if (context.user) {
        const project = await Project.create(args);
        await User.findByIdAndUpdate(context.user._id, { $push: { projects: project._id } });
        return project;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addBlogPost: async (parent, args, context) => {
      if (context.user) {
        const blogPost = await BlogPost.create(args);
        await User.findByIdAndUpdate(context.user._id, { $push: { blogPosts: blogPost._id } });
        return blogPost;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addTestimonial: async (parent, args, context) => {
      if (context.user) {
        const testimonial = await Testimonial.create(args);
        await User.findByIdAndUpdate(context.user._id, { $push: { testimonials: testimonial._id } });
        return testimonial;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addContactMessage: async (parent, args, context) => {
      if (context.user) {
        const contactMessage = await ContactMessage.create(args);
        await User.findByIdAndUpdate(context.user._id, { $push: { contactMessages: contactMessage._id } });
        return contactMessage;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  }
};

module.exports = resolvers;