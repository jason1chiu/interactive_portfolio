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

export const ADD_INFORMATION = gql`
  mutation addInformation(
    $name: String!
    $title: String!
    $location: String!
    $avatar: String!
  ) {
    addInformation(
      name: $name
      title: $title
      location: $location
      avatar: $avatar
    ) {
      name
      title
      location
      avatar
    }
  }
`;

export const UPDATE_INFORMATION = gql`
  mutation updateInformation(
    $name: String!
    $title: String!
    $location: String!
    $avatar: String!
  ) {
    updateInformation(
      name: $name
      title: $title
      location: $location
      avatar: $avatar
    ) {
      name
      title
      location
      avatar
    }
  }
`;
export const ADD_BACKGROUND = gql`
  mutation addBackground(
    $jobTitle: String!
    $company: String!
    $startYear: Int!
    $endYear: Int!
  ) {
    addBackground(
      jobTitle: $jobTitle
      company: $company
      startYear: $startYear
      endYear: $endYear
    ) {
      jobTitle
      company
      startYear
      endYear
    }
  }
`;

export const UPDATE_BACKGROUND = gql`
  mutation updateBackground(
    $_id: ID!
    $jobTitle: String!
    $company: String!
    $startYear: Int!
    $endYear: Int!
  ) {
    updateBackground(
      _id: $_id
      jobTitle: $jobTitle
      company: $company
      startYear: $startYear
      endYear: $endYear
    ) {
      jobTitle
      company
      startYear
      endYear
    }
  }
`;

export const DELETE_BACKGROUND = gql`
  mutation deleteBackground($_id: ID!) {
    deleteBackground(_id: $_id) {
      _id
    }
  }
`;

export const ADD_EDUCATION = gql`
  mutation addEducation(
    $school: String!
    $degree: String!
    $fieldOfStudy: String!
    $startYear: Int!
    $endYear: Int!
  ) {
    addEducation(
      school: $school
      degree: $degree
      fieldOfStudy: $fieldOfStudy
      startYear: $startYear
      endYear: $endYear
    ) {
      school
      degree
      fieldOfStudy
      startYear
      endYear
    }
  }
`;

export const UPDATE_EDUCATION = gql`
  mutation updateEducation(
    $_id: ID!
    $school: String!
    $degree: String!
    $fieldOfStudy: String!
    $startYear: Int!
    $endYear: Int!
  ) {
    updateEducation(
      _id: $_id
      school: $school
      degree: $degree
      fieldOfStudy: $fieldOfStudy
      startYear: $startYear
      endYear: $endYear
    ) {
      school
      degree
      fieldOfStudy
      startYear
      endYear
    }
  }
`;

export const DELETE_EDUCATION = gql`
  mutation deleteEducation($_id: ID!) {
    deleteEducation(_id: $_id) {
      _id
    }
  }
`;

export const ADD_INTEREST = gql`
  mutation addInterest($interest: String!) {
    addInterest(interest: $interest) {
      interest
    }
  }
`;


export const UPDATE_INTEREST = gql`
  mutation updateInterest($_id: ID!, $interest: String!) {
    updateInterest(_id: $_id, interest: $interest) {
      interest
    }
  }
`;

export const DELETE_INTEREST = gql`
  mutation deleteInterest($_id: ID!) {
    deleteInterest(_id: $_id) {
      _id
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
    $technologies: String!
  ) {
    addProject(
      name: $name
      description: $description
      image: $image
      liveLink: $liveLink
      codeLink: $codeLink
      technologies: $technologies
    ) {
      name
      description
      image
      liveLink
      codeLink
      technologies
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject(
    $_id: ID!
    $name: String!
    $description: String!
    $image: String!
    $liveLink: String
    $codeLink: String
    $technologies: String!
  ) {
    updateProject(
      _id: $_id
      name: $name
      description: $description
      image: $image
      liveLink: $liveLink
      codeLink: $codeLink
      technologies: $technologies
    ) {
      _id
      name
      description
      image
      liveLink
      codeLink
      technologies
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation deleteProject($_id: ID!) {
    deleteProject(_id: $_id) {
      _id
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
  mutation addSkill($name: String!, $iconClassName: String!) {
    addSkill(name: $name, iconClassName: $iconClassName) {
      iconClassName
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
