import baseURL from "@/helper/baseURL";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import React from "react";

const Jobdetail = ({ data }) => {
  const { post } = data;
  let postdate = post.createdAt.slice(0, 10);
  console.log(post);
  return (
    <VStack
      height={"100vh"}
      width={"100%"}
      maxW={"100%"}
      p={5}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        height={"80%"}
        width={["100%", "70%", "60%", "60%"]}
        boxShadow={"4px 2px 7px"}
        rounded={"md"}
        p={5}
      >
        <Text fontFamily={"cursive"} fontSize={"1.2rem"}>
          <img
            ml={"10px"}
            className="rounded-full h-[40px] w-[45px] inline mr-2"
            src={post.postedBy.pic}
          />{" "}
          HR {post.postedBy.name}
        </Text>
        <Box
          position={"absolute"}
          top="21rem"
          width={["80%", "40%", "45%", "45%"]}
          flexWrap={"wrap"}
          fontSize={["12px", "md", "md", "lg"]}
          fontWeight={["bold", "normal"]}
        >
          <Text size={"md"}>Job Title: {post.title}</Text>
          <Text>Company: {post.company}</Text>
          <Text>Location: {post.location}</Text>
          Job Requirement:
          <Text maxHeight={"100px"} overflowY={"auto"}>
            {post.description}
          </Text>
          <Text>Posted on: {postdate}</Text>
        </Box>
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
