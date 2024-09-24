import { gql } from "@apollo/client";

export const Get_Jobs = gql`
  query GetJobs {
    jobs {
      id
      title
      description
      location
      postedAt
      company
      postedBy {
        name
        email
      }
    }
  }
`;
