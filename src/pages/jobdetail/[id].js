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
  const pic =
    " https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
  const matchpic = pic === post.postedBy.pic;

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
      background={"linear-gradient(40deg,blue,lightblue,black)"}
    >
      <Box
        height={"80%"}
        width={["100%", "70%", "60%", "60%"]}
        boxShadow={"4px 2px 7px"}
        rounded={"md"}
        p={5}
        bg={"lightblue"}
      >
        <Text fontFamily={"cursive"} fontSize={"1.2rem"}>
          {matchpic ? (
            <Avatar size={"sm"} name={post.postedBy.name} mr={"10px"} />
          ) : (
            <img
              ml={"10px"}
              className="rounded-full h-[40px] w-[45px] inline mr-2"
              src={post.postedBy.pic}
            />
          )}
          HR {post.postedBy.name}
        </Text>
        <Box
          position={"absolute"}
          top="21rem"
          width={["80%", "50%", "45%", "45%"]}
          flexWrap={"wrap"}
          fontSize={["sm", "md", "md", "lg"]}
          fontWeight={["bold", "bold"]}
        >
          <Text size={"md"}>Job Title: {post.title}</Text>
          <Text>Company: {post.company}</Text>
          <Text>Location: {post.location}</Text>
          Job Requirement:
          <Text maxHeight={"40px"} overflowY={"auto"} px={2}>
            {post.description}
          </Text>
          <Text>Email me for query {post.postedBy.email}</Text>
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
