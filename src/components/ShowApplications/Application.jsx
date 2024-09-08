import { Box, Button, Heading, Link, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { ApplicationContext } from "../appContext/ApplicationContext";

const Application = () => {
  const { post } = useContext(ApplicationContext);
  console.log(post);

  return (
    <>
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
                // download
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
    </>
  );
};

export default Application;
