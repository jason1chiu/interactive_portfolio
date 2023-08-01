import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      _id
      email
      information {
        _id
        name
        title
        location
        avatar
      }
      background {
        _id
        jobTitle
        company
        startYear
        endYear
        description
      }
      education {
        _id
        school
        degree
        fieldOfStudy
        startYear
        endYear
      }
      interests {
        _id
        interest
      }
      skills {
        _id
        name
        iconClassName
      }
      projects {
        _id
        name
        description
        image
        liveLink
        codeLink
      }
    }
  }
`;

export const GET_PORTFOLIO = gql`
  query getPortfolio {
    getPortfolio {
      information {
        _id
        name
        title
        location
        avatar
      }
      background {
        _id
        jobTitle
        company
        startYear
        endYear
        description
      }
      education {
        _id
        school
        degree
        fieldOfStudy
        startYear
        endYear
      }
      interests {
        _id
        interest
      }
      skills {
        _id
        name
        iconClassName
      }
      projects {
        _id
        name
        description
        image
        liveLink
        codeLink
      }
    }
  }
`;

export const GET_INFORMATION = gql`
  query getInformation {
    information {
      _id
      name
      title
      location
      avatar
    }
  }
`;

export const GET_EDUCATION = gql`
  query getEducation {
    education {
      _id
      school
      degree
      fieldOfStudy
      startYear
      endYear
    }
  }
`;

export const GET_BACKGROUND = gql`
  query getBackground {
    background {
      _id
      jobTitle
      company
      startYear
      endYear
      description
    }
  }
`;

export const GET_INTERESTS = gql`
  query getInterests {
    interests {
      _id
      interest
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
    skills {
      _id
      name
      iconClassName
    }
  }
`;