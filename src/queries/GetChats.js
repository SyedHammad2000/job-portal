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
      message {
        text
        timestamp
        sender
      }
      createdAt
    }
  }
`;
