import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      _id
      email
      about {
        info
        background
        education
        interests
      }
      projects {
        title
        description
        technologies
        link
      }
      blogPosts {
        title
        content
        date
      }
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

export const GET_TESTIMONIALS = gql`
  query getTestimonials {
    testimonials {
      _id
      author
      content
    }
  }
`;
