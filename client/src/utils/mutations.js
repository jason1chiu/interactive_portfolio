import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_ABOUT = gql`
  mutation addAbout($information: String!, $background: String!, $education: String!, $interests: String!, $avatar: String!) {
    addAbout(information: $information, background: $background, education: $education, interests: $interests, avatar: $avatar) {
      information
      background
      education
      interests
      avatar
    }
  }
`;

export const UPDATE_ABOUT = gql`
  mutation updateAbout($information: String!, $background: String!, $education: String!, $interests: String!, $avatar: String!) {
    updateAbout(information: $information, background: $background, education: $education, interests: $interests, avatar: $avatar) {
      information
      background
      education
      interests
      avatar
    }
  }
`;

export const UPLOAD_AVATAR = gql`
  mutation uploadAvatar($avatar: String!) {
    uploadAvatar(avatar: $avatar) {
      _id
      avatar
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation addProject(
    $name: String!
    $description: String!
    $image: String!
    $liveLink: String
    $codeLink: String
  ) {
    addProject(
      name: $name
      description: $description
      image: $image
      liveLink: $liveLink
      codeLink: $codeLink
    ) {
      _id
      name
      description
      image
      liveLink
      codeLink
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject(
    $projectId: ID!
    $name: String
    $description: String
    $technologies: String
    $link: String
  ) {
    updateProject(
      projectId: $projectId
      name: $name
      description: $description
      technologies: $technologies
      link: $link
    ) {
      _id
      projects {
        name
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
        name
        description
        technologies
        link
      }
    }
  }
`;

export const UPDATE_CONTACT_INFO = gql`
  mutation updateContactInfo(
    $email: String!
    $phoneNumber: String!
    $linkedIn: String!
    $github: String!
  ) {
    updateContactInfo(
      email: $email
      phoneNumber: $phoneNumber
      linkedIn: $linkedIn
      github: $github
    ) {
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
