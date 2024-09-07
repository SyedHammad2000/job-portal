import baseURL from "@/helper/baseURL";
import { Box, Button, Heading, HStack, Link, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Applications = () => {
  const [post, setPost] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    const FetchApp = async () => {
      const { data } = await axios.get(
        `${baseURL}/api/application/applications`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPost(data.applications);

      console.log(data.applications);
    };

    FetchApp();
  }, []);

  return (
    <HStack
      backgroundColor={"#FFDFD6"}
      minH={"100vh"}
      height="100%"
      p={5}
      wrap={"wrap"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {post ? (
        post.map((post) => {
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
              bg={"cornsilk"}
              color={"crimson"}
            >
              <Heading size="md">{post.status}</Heading>
              <Text>{post.ApplicantId.name}</Text>

              <iframe src={post.resume} width="100%" height="100%">
                Pdf{" "}
              </iframe>

              <Link
                href={post.resume}
                download
                target="_blank"
                rel="noopener noreferrer"
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
    </HStack>
  );
};

export default Applications;
