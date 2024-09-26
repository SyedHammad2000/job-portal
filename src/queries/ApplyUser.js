import { gql } from "@apollo/client";

export const ApplyUser = gql`
  mutation ApplyUser($JobPostId: ID!, $resume: String!, $postBy: ID!) {
    applyUser(JobPostId: $JobPostId, resume: $resume, postBy: $postBy) {
      id
      JobPostId {
        id
        title
      }
      resume
      postBy {
        id
        name
      }
    }
  }
`;
