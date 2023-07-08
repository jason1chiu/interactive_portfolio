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

export const ADD_PROJECT = gql`
  mutation addProject($title: String!, $description: String!, $technologies: String!, $link: String!) {
    addProject(title: $title, description: $description, technologies: $technologies, link: $link) {
      _id
      projects {
        title
        description
        technologies
        link
      }
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject($projectId: ID!, $title: String, $description: String, $technologies: String, $link: String) {
    updateProject(projectId: $projectId, title: $title, description: $description, technologies: $technologies, link: $link) {
      _id
      projects {
        title
        description
        technologies
        link
      }
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation deleteProject($projectId: ID!) {
    deleteProject(projectId: $projectId) {
      _id
      projects {
        title
        description
        technologies
        link
      }
    }
  }
`;

export const UPDATE_CONTACT_INFO = gql`
  mutation updateContactInfo($email: String!, $phoneNumber: String!, $linkedIn: String!, $github: String!) {
    updateContactInfo(email: $email, phoneNumber: $phoneNumber, linkedIn: $linkedIn, github: $github) {
      email
      phoneNumber
      linkedIn
      github
    }
  }
`;

export const ADD_SKILL = gql`
  mutation addSkill($skill: String!, $level: String!) {
    addSkill(skill: $skill, level: $level) {
      skill
      level
    }
  }
`;

export const UPDATE_SKILL = gql`
  mutation updateSkill($id: ID!, $skill: String!, $level: String!) {
    updateSkill(id: $id, skill: $skill, level: $level) {
      skill
      level
    }
  }
`;

export const DELETE_SKILL = gql`
  mutation deleteSkill($id: ID!) {
    deleteSkill(id: $id) {
      skill
      level
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

export const ADD_TESTIMONIAL = gql`
  mutation addTestimonial($author: String!, $content: String!) {
    addTestimonial(author: $author, content: $content) {
      _id
      author
      content
    }
  }
`;

export const UPDATE_TESTIMONIAL = gql`
  mutation updateTestimonial($id: ID!, $author: String!, $content: String!) {
    updateTestimonial(id: $id, author: $author, content: $content) {
      _id
      author
      content
    }
  }
`;

export const DELETE_TESTIMONIAL = gql`
  mutation deleteTestimonial($id: ID!) {
    deleteTestimonial(id: $id) {
      _id
    }
  }
`;