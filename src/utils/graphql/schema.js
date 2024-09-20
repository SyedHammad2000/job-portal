import { gql } from "apollo-server-micro";
export const typeDefs = gql`
  scalar Date
  type Chat {
    id: ID!
    senderId: User
    receiverId: User
    message: [Message]
    createdAt: Date
  }

  type User {
    id: ID!
    name: String
    email: String
  }

  type Message {
    text: String
    timestamp: Date
    sender: String
  }

  type Query {
    chats: [Chat]
  }
`;
