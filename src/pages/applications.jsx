import Application from "@/components/ShowApplications/Application";
import baseURL from "@/helper/baseURL";
import { Box, Button, Heading, HStack, Link, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import nookies from "nookies";

const Applications = ({ posts }) => {
  const { applications } = posts;

  console.log(applications);

  return (
    <HStack
      backgroundColor={"white"}
      minH={"100vh"}
      height="100%"
      p={5}
      wrap={"wrap"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {/* <Application />{'clientside'} */}
      <>
        {applications.length > 0 ? (
          applications.map((post) => {
            return (
              <Box
                key={post._id}
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                margin="10px"
                borderRadius="5px"
                height={"100%"}
                width={["20rem", "15rem", "20rem", "20rem"]}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                p={5}
                gap={2}
                bg={""}
                color={"crimson"}
              >
                <Heading size="md">{post.JobPostId.title}</Heading>
                <Text>{post.ApplicantId.name}</Text>

                {/* <iframe src={post.resume} width="100%" height="100%">
                  Pdf{" "}
                </iframe> */}

                <Link
                  href={post.resume}
                  // download
                  target="_blank"
                  color="brown"
                  fontSize="14px"
                >
                  RESUME PDF
                </Link>

                <Box>
                  <Button
                    colorScheme={"blue"}
                    p={2}
                    variant={"solid"}
                    outlineColor={"black"}
                    mr="4"
                  >
                    Accept
                  </Button>
                  <Button
                    colorScheme={"blue"}
                    p={2}
                    variant={"solid"}
                    outlineColor={"black"}
                    display={"inline"}
                  >
                    Reject
                  </Button>
                </Box>
              </Box>
            );
          })
        ) : (
          <Heading>No Applications</Heading>
        )}
      </>
    </HStack>
  );
};

export default Applications;

export const getServerSideProps = async (context) => {
  const cookies = await nookies.get(context);
  console.log(cookies, "token");

  if (!cookies.token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const data = await axios.get(`${baseURL}/api/application/applications`, {
    headers: {
      Authorization: `Bearer ${cookies.token}`,
    },
  });

  console.log(data.data, "data");

  return {
    props: {
      posts: data.data,
    },
  };
};
