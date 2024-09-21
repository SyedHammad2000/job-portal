import { gql } from "@apollo/client";

export const GET_CHATS = gql`
  query GetChats {
    chats {
      id
      senderId {
        name
        email
      }
      receiverId {
        name
        email
      }
      messages {
        text
        sender
        timestamp
      }
      createdAt
    }
  }
`;
