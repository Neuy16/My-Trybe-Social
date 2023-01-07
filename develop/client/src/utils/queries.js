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

export const QUERY_POST = gql`
query post {
    _id
    userID
    content
}
`;

export const QUERY_POSTS = gql`
query posts {
  query post {
    _id
    userID
    content
  }
}
`;
