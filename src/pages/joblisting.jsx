import baseURL from "@/helper/baseURL";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const Joblisting = ({ data }) => {
  console.log(data.posts);
  return (
    <Container height="100vh">
      {data.posts.map((post) => {
        return (
          <Box
            key={post._id}
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            padding="10px"
            margin="10px"
            borderRadius="5px"
          >
            <Heading size="md">{post.title}</Heading>
            <Text>{post.company}</Text>
            <Heading size={"sm"}>PostBy:{post.postedBy.name}</Heading>
          </Box>
        );
      })}
    </Container>
  );
};

export default Joblisting;

// get serverside props

export async function getServerSideProps() {
  // console.log(ctx);
  const data = await axios.get(`${baseURL}/api/job`);

  console.log(data.data);
  console.log(data);

  return {
    props: {
      data: data.data,
    },
  };
}
