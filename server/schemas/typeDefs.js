const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    about: [About]
    skills: [Skill]
    projects: [Project]
    blogPosts: [BlogPost]
    contactMessages: [ContactMessage]
  }

  type About {
    _id: ID
    information: String
    background: String
    education: String
    interests: String
  }

  type Skill {
    _id: ID
    name: String
    proficiency: String
  }

  type Project {
    _id: ID!
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
    about: [About]
    skills: [Skill]
    projects: [Project]
    blogPosts: [BlogPost]
  }

  type Query {
    me: User
    getPortfolio: Portfolio
    about: [About]
    skills: [Skill]
    projects: [Project]
    blogPosts: [BlogPost]
    contactMessages: [ContactMessage]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addInformation(information: String!): About
    addBackground(background: String!): About
    addEducation(education: String!): About
    addInterests(interests: String!): About
    addSkill(name: String!, proficiency: String!): Skill
    addProject(name: String!, description: String!, image: String!, liveLink: String, codeLink: String): Project
    addBlogPost(title: String!, content: String!, date: String!): BlogPost
    addContactMessage(
      name: String!
      email: String!
      message: String!
    ): ContactMessage
  }
`;

module.exports = typeDefs;
