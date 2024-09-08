import baseURL from "@/helper/baseURL";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

const Joblisting = ({ data }) => {
  const router = useRouter();
  console.log(data.posts);
  return (
    <HStack
      backgroundColor={"white"}
      
      maxW={"100vw"}
      height="100%"
      p={5}
      wrap={"wrap"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {data.posts.map((post) => {
        return (
          <Box
            key={post._id}
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            margin="10px"
            borderRadius="5px"
            height={"10rem"}
            width={["20rem", "15rem", "20rem", "20rem"]}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            p={5}
            gap={2}
            bg={"cornslik"}
            color={"black"}
          >
            <Heading size="md">{post.title}</Heading>
            <Text>{post.company}</Text>
            <Heading size={"sm"}>PostBy:{post.postedBy.name}</Heading>
            <Button
              colorScheme={"blue"}
              p={2}
              variant={"solid"}
              outlineColor={"black"}
              onClick={() => router.push(`${baseURL}/jobdetail/${post._id}`)}
            >
              View Details
            </Button>
          </Box>
        );
      })}
      {/* </Box> */}
    </HStack>
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
