import { gql } from "apollo-server-micro";
export const typeDefs = gql`
  scalar Date
  type Chat {
    id: ID!
    senderId: User
    receiverId: User
    messages: [Message]
    createdAt: Date
  }

  type User {
    id: ID!
    name: String
    email: String
    password: String
    contact: String
    address: String
  }

  type Message {
    text: String!
    timestamp: Date!
    sender: String!
  }
  type Job {
    id: ID!
    title: String
    description: String
    location: String
    postedAt: Date
    company: String
    postedBy: User
  }

  type Query {
    chats: [Chat]
    users: [User]
    jobs: [Job]
    job(id: ID!): Job
  }
  type Mutation {
    createUser(
      name: String!
      email: String!
      password: String!
      contact: String!
      address: String!
    ): User
  }
`;
