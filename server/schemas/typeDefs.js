const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    information: Information
    education: [Education]
    interests: [Interest]
    background: [Background]
    skills: [Skill]
    projects: [Project]
    contactMessages: [ContactMessage]
  }

  type Information {
    _id: ID
    name: String
    title: String
    location: String
    avatar: String
  }

  type Education {
    _id: ID
    school: String
    degree: String
    fieldOfStudy: String
    startYear: Float
    endYear: Float
  }

  type Interest {
    _id: ID
    interest: String
  }

  type Background {
    _id: ID
    jobTitle: String
    company: String
    startYear: Int
    endYear: Int
    description: String
  }

  type Skill {
    _id: ID
    name: String
    iconClassName: String
  }

  type Project {
    _id: ID
    name: String
    description: String
    image: String
    liveLink: String
    codeLink: String
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
    information: Information
    education: [Education]
    interests: [Interest]
    background: [Background]
    skills: [Skill]
    projects: [Project]
  }

  type Query {
    me: User
    getPortfolio: Portfolio
    information: Information
    education: [Education]
    interests: [Interest]
    background: [Background]
    skills: [Skill]
    projects: [Project]
    contactMessages: [ContactMessage]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addInformation(
      name: String!
      title: String!
      location: String!
      avatar: String!
    ): Information
    updateInformation(
      name: String!
      title: String!
      location: String!
      avatar: String!
    ): Information
    addEducation(
      school: String!
      degree: String!
      fieldOfStudy: String!
      startYear: Int!
      endYear: Int!
    ): Education
    updateEducation(
      _id: ID!
      school: String!
      degree: String!
      fieldOfStudy: String!
      startYear: Int!
      endYear: Int!
    ): Education
    deleteEducation(_id: ID!): Education
    addInterest(interest: String!): Interest
    updateInterest(_id: ID!, interest: String!): Interest
    deleteInterest(_id: ID!): Interest
    addBackground(
      jobTitle: String!
      company: String!
      startYear: Int!
      endYear: Int!
      description: String!
    ): Background
    updateBackground(
      _id: ID!
      jobTitle: String!
      company: String!
      startYear: Int!
      endYear: Int!
      description: String!
    ): Background
    deleteBackground( _id: ID!): Background
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
    addContactMessage(
      name: String!
      email: String!
      message: String!
    ): ContactMessage
  }
`;

module.exports = typeDefs;
