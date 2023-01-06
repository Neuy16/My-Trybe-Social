import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      firstName
      lastName
      username
      email
      profilePicture
      friends {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      firstName
      lastName
      username
      email
      profilePicture
      friends {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      username
      email
      profilePicture
      friends {
        _id
        firstName
        lastName
      }
    }
  }
`;
