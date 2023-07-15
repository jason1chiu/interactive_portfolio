const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    skills: [Skill]
    projects: [Project]
    blogPosts: [BlogPost]
    contactMessages: [ContactMessage]
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

  type Query {
    me: User
    skills: [Skill]
    projects: [Project]
    blogPosts: [BlogPost]
    contactMessages: [ContactMessage]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
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