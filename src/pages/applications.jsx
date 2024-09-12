import Application from "@/components/ShowApplications/Application";
import baseURL from "@/helper/baseURL";
import {
  Box,
  Button,
  Heading,
  HStack,
  Link,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import nookies from "nookies";
import { motion } from "framer-motion";
import { ApplicationContext } from "@/components/appContext/ApplicationContext";

const Applications = () => {
  const toast = useToast();

  const { setPost, post, setPostslength, loading, setLoading } =
    useContext(ApplicationContext);

  useEffect(() => {
    const fetchApp = async () => {
      setLoading(true);
      const { data } = await axios.get(
        `${baseURL}/api/application/applications`,
        {
          headers: {
            Authorization: `Bearer ${nookies.get().token}`,
          },
        }
      );
      setPost(data.applications);
      setLoading(false);
      setPostslength(data.applications.length);
      console.log(data.applications);
    };

    fetchApp();
  }, []);

  const MotionBox = motion(Box);
  const handleDelete = async (id) => {
    const res = await axios.delete(`${baseURL}/api/application/${id}`, {
      headers: {
        Authorization: `Bearer ${nookies.get().token}`,
      },
    });
    console.log(res);
    setPost(post?.filter((item) => item._id !== id));
    window.location.reload();
  };

  return (
    <HStack
      backgroundColor={"#FFF4EA"}
      minH={"100vh"}
      height="100%"
      p={5}
      wrap={"wrap"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <>
        {post?.length > 0 ? (
          post?.map((post) => {
            return (
              <MotionBox
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
                bg={"#FFF4EA"}
              >
                <Heading size="md" textAlign={"center"}>
                  {post.JobPostId.title}
                </Heading>
                <Text>{post.ApplicantId.name}</Text>
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
                    colorScheme={"green"}
                    p={2}
                    mr="4"
                    onClick={async () => {
                      await Promise.all([
                        axios.post(
                          `${baseURL}/api/receiver/${post.JobPostId._id}`,
                          {
                            to: post.ApplicantId.email,
                            message: `Your application is accepted & Your interview has been scheduled for upcoming Saturday`,
                          },
                          {
                            headers: {
                              Authorization: `Bearer ${nookies.get().token}`,
                            },
                          }
                        ),
                      ]);
                      await handleDelete(post._id);
                    }}
                  >
                    Accept
                  </Button>
                  <Button
                    colorScheme={"red"}
                    p={2}
                    display={"inline"}
                    onClick={async () => {
                      axios.post(
                        `${baseURL}/api/receiver/${post.JobPostId._id}`,
                        {
                          to: post.ApplicantId.email,
                          message: `Your application is rejected`,
                        },
                        {
                          headers: {
                            Authorization: `Bearer ${nookies.get().token}`,
                          },
                        }
                      );

                      await handleDelete(post._id);
                    }}
                  >
                    Reject
                  </Button>
                </Box>
              </MotionBox>
            );
          })
        ) : (
          <Heading>{loading ? <Spinner /> : "No Applications"}</Heading>
        )}
      </>
    </HStack>
  );
};

export default Applications;

// export const getServerSideProps = async (context) => {
//   const cookies = await nookies.get(context);
//   console.log(cookies, "token");

//   if (!cookies.token) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   const data = await axios.get(`${baseURL}/api/application/applications`, {
//     headers: {
//       Authorization: `Bearer ${cookies.token}`,
//     },
//   });

//   console.log(data.data, "data");

//   return {
//     props: {
//       posts: data.data,
//     },
//   };
// };
