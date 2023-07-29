const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    about: About
    skills: [Skill]
    projects: [Project]
    blogPosts: [BlogPost]
    contactMessages: [ContactMessage]
  }

  type About {
    information: String
    background: String
    education: String
    interests: String
    avatar: String
  }

  type Skill {
    _id: ID
    name: String
    iconClassName: String
  }

  type Project {
    _id: ID
    name: String!
    description: String!
    image: String!
    liveLink: String
    codeLink: String
  }

  type BlogPost {
    _id: ID
    title: String
    content: String
    date: String
  }

  type ContactMessage {
    _id: ID
    name: String
    email: String
    message: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Portfolio {
    about: About
    skills: [Skill]
    projects: [Project]
    blogPosts: [BlogPost]
  }

  type Query {
    me: User
    getPortfolio: Portfolio
    about: About
    skills: [Skill]
    projects: [Project]
    blogPosts: [BlogPost]
    contactMessages: [ContactMessage]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addAbout(
      information: String!
      background: String!
      education: String!
      interests: String!
      avatar: String!
    ): About
    updateAbout(
      information: String!
      background: String!
      education: String!
      interests: String!
      avatar: String!
    ): About
    addSkill(name: String!, iconClassName: String!): Skill
    addProject(
      name: String!
      description: String!
      image: String!
      liveLink: String
      codeLink: String
    ): Project
    updateProject(
      _id: ID!
      name: String!
      description: String!
      image: String!
      liveLink: String
      codeLink: String
    ): Project
    deleteProject(_id: ID!): Project
    addBlogPost(title: String!, content: String!, date: String!): BlogPost
    addContactMessage(
      name: String!
      email: String!
      message: String!
    ): ContactMessage
  }
`;

module.exports = typeDefs;
