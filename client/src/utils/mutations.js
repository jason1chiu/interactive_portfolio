import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($aboutMe: String, $education: String, $skills: String) {
    updateUser(aboutMe: $aboutMe, education: $education, skills: $skills) {
      _id
      profile {
        aboutMe
        education
        skills
      }
    }
  }
`;

export const ADD_BLOG = gql`
  mutation addBlog($title: String!, $content: String!) {
    addBlog(title: $title, content: $content) {
      _id
      title
      content
      date
    }
  }
`;

export const UPDATE_BLOG = gql`
  mutation updateBlog($blogId: ID!, $title: String, $content: String) {
    updateBlog(blogId: $blogId, title: $title, content: $content) {
      _id
      title
      content
      date
    }
  }
`;

export const DELETE_BLOG = gql`
  mutation deleteBlog($blogId: ID!) {
    deleteBlog(blogId: $blogId) {
      _id
    }
  }
`;