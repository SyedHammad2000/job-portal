import baseURL from "@/helper/baseURL";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Jobdetail = ({ data }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  const { post } = data;
  const pic =
    " https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
  const matchpic = pic === post.postedBy.pic;

  let postdate = post.createdAt.slice(0, 10);
  console.log(post);
  const checkuser = user?.role == "applicant";

  const scrol = {
    "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-track": {
      background: "lightblue",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
      borderRadius: "2px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "black",
    },
  };

  return (
    <VStack
      height={"100%"}
      width={"100%"}
      maxW={"100%"}
      p={2}
      justifyContent={"center"}
      alignItems={"center"}
      background={"linear-gradient(40deg,blue,lightblue,black)"}
    >
      <Grid
        height={["80vh"]}
        width={["100", "70%", "60%", "45%"]}
        boxShadow={"4px 2px 7px"}
        rounded={"md"}
        p={2}
        color='black'
        templateRows={"2, 1fr"}
        templateColumns={"1,1fr"}
      >
        <GridItem rowSpan={"1"} height={"100%"} p={1} mt={"2em"}>
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
        </GridItem>
        <GridItem rowSpan={1} mt={1} height={"100%"}>
          <Box
            flexWrap={"wrap"}
            fontSize={["sm", "md", "md", "lg"]}
            fontWeight={["bold", "bold"]}
          >
            <Text size={"md"}>Job Title: {post.title}</Text>
            <Text>Company: {post.company}</Text>
            <Text>Location: {post.location}</Text>
            Job Requirement:
            <Text
              maxHeight={["80px", "80px", "80px", "80px"]}
              maxW={["300px", "300px", "300px", "500px"]}
              sx={scrol}
              overflowY={"auto"}
              overflowWrap={"anywhere"}
              lineHeight={"20px"}
            >
              {post.description}
            </Text>
            <Text>Email me for query {post.postedBy.email}</Text>
            <Text>Posted on: {postdate}</Text>
          </Box>
        </GridItem>
        {checkuser ? (
          <Button
            display={"flex"}
            variant={"solid"}
            outline={"none"}
            colorScheme={"blue"}
            size={"sm"}
            width={"100px"}
            margin={"auto"}
          >
            Apply Now
          </Button>
        ) : (
          <></>
        )}
      </Grid>
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
