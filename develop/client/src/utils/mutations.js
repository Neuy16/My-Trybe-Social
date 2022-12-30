import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!) {
        addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password){
            token
            user {
                _id
                username
            }
        }
    }
`;

// export const ADD_POST = gql`
//     mutation addPost(content: $String, likes: $Int, dislikes: $Int) {
//         addPost(content: $content, likes: $likes, dislikes: $dislikes) {
//             _id
//             username
//         }
//     }
// `;