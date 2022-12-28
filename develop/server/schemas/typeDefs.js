const { gql } = require('apollo-server-express');
const typeDefs = gql`

type Query {
    me: User
}

type Mutation {
    login(username: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    addPost(content: String, likes: int, dislikes: int): User
    removePost(postID: String!): User
    addFriend(userID: ID!): User
    removeFriend(userID: ID!): User
    updateUser(firstName: String, lastName: String, profilePicture: String): User
}

type User {
    _id: ID!
    firstName: String
    lastName: String
    username: String
    email: String 
    password: String   
    profilePicture: String 
    friends: [User]
}

type Post {
    _id: ID!
    postID: String
    content: String
    likes: Int
    dislikes: Int
    postComments: [Comment]
}
type Comment {
    _id: ID!
    content: String
    likes: Int
    dislikes: Int
}

type Auth {
    token: ID!
    user: User
    }
    `;
    
    module.exports = typeDefs;