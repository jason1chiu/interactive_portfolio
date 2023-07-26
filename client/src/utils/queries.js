import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      _id
      email
      about {
        information
        background
        education
        interests
        avatar
      }
      projects {
        _id
        name
        description
        image
        liveLink
        codeLink
      }
      blogPosts {
        title
        content
        date
      }
    }
  }
`;

export const GET_PORTFOLIO = gql`
  query getPortfolio {
    getPortfolio {
      about {
        information
        background
        education
        interests
        avatar
      }
      skills {
        name
        proficiency
      }
      projects {
        _id
        name
        description
        image
        liveLink
        codeLink
      }
      blogPosts {
        title
        content
        date
      }
    }
  }
`;

export const GET_PROJECT = gql`
  query {
    projects {
      _id
      name
      description
      image
      liveLink
      codeLink
    }
  }
`;

export const GET_CONTACT_INFO = gql`
  query getContactInfo {
    getContactInfo {
      email
      phoneNumber
      linkedIn
      github
    }
  }
`;

export const GET_SKILLS = gql`
  query getSkills {
    getSkills {
      skill
      level
    }
  }
`;

export const GET_ALL_BLOGS = gql`
  query getAllBlogs {
    getAllBlogs {
      _id
      title
      content
      date
    }
  }
`;