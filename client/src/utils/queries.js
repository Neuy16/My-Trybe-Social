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
      post {
        _id
        userId
        content
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
      post {
        _id
        userId
        content
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
      post {
        _id
        userId
        content
      }
    }
  }
`;

export const QUERY_POST = gql`
query post {
    _id
    userId
    content
}
`;

export const QUERY_POSTS = gql`
query getPosts {
 posts {
    _id
    content
    userId
  }
}
`;

// query getThoughts {
//   thoughts {
//     _id
//     thoughtText
//     thoughtAuthor
//     createdAt
//   }
// }
// `;
