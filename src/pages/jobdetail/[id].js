import baseURL from "@/helper/baseURL";
import { Box, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const Jobdetail = ({ data }) => {
  const { post } = data;
  console.log(post);
  return (
    <VStack height={"100vh"} width={"100%"} maxW={"100%"} p={10}>
      <Box
        height={"90%"}
        width={"80%"}
        boxShadow={"4px 2px 7px"}
        rounded={"md"}
        p={10}
      >
        <Text size={"md"}>Job Title: {post.title}</Text>
        <Text>Company: {post.company}</Text>
        <Text>Job Requirement: {post.description}</Text>
        <Text>HR Manager: {post.postedBy.name}</Text>
      </Box>
    </VStack>
  );
};

export default Jobdetail;

export async function getServerSideProps(ctx) {

  const { id } = ctx.query;
  const { data } = await axios.get(`${baseURL}/api/jobdetail/${id}`, {
    headers: {
      //! content type
      "Content-Type": "application/json",
    },
  });
  console.log(data);
  return {
    props: {
      data: data,
    },
  };
}
