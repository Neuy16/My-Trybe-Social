const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
    posts: [Post]!
    post(postId: ID!): Post
}

type Mutation {
    login(username: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    addPost(content: String): User
    removePost(postID: String!): User
    addFriend(userID: ID!): User
    removeFriend(userID: ID!): User
    updateUser(firstName: String, lastName: String, profilePicture: String): User
}

type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String 
    password: String   
    profilePicture: String 
    friends: [User]
    userPosts: [Post]
}

type Post {
    _id: ID!
    userID: String
    content: String
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