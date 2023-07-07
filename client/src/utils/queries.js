import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      profile {
        aboutMe
        education
        skills
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