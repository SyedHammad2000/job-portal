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
  const [loaders, setLoaders] = useState(false);

  const {
    setPost,
    post,
    setPostslength,
    loading,
    setLoading,
    setLoader,
    loader,
  } = useContext(ApplicationContext);

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
  useEffect(() => {
    fetchApp();
  }, []);

  const MotionBox = motion(Box);
  const handleDeleteAccept = async (id) => {
    setLoader(true);
    const res = await axios.delete(`${baseURL}/api/application/${id}`, {
      headers: {
        Authorization: `Bearer ${nookies.get().token}`,
      },
    });
    console.log(res);
    setPost(post?.filter((item) => item._id !== id));
    window.location.reload();
    setLoader(false);
  };
  const handleDeleteReject = async (id) => {
    setLoaders(true);
    const res = await axios.delete(`${baseURL}/api/application/${id}`, {
      headers: {
        Authorization: `Bearer ${nookies.get().token}`,
      },
    });
    console.log(res);
    setPost(post?.filter((item) => item._id !== id));
    window.location.reload();
    setLoaders(false);
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
                      await handleDeleteAccept(post._id);
                    }}
                    isLoading={loader}
                  >
                    Accept
                  </Button>
                  <Button
                    colorScheme={"red"}
                    p={2}
                    display={"inline"}
                    onClick={async () => {
                      await Promise.all([
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
                        ),
                      ]);
                      await handleDeleteReject(post._id);
                    }}
                    isLoading={loaders}
                  >
                    Reject
                  </Button>
                </Box>
              </MotionBox>
            );
          })
        ) : (
          <Heading
            size={"lg"}
            background={"darkcyan"}
            color={"white"}
            p={3}
            borderRadius={"5px"}
            boxShadow={
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            }
            _hover={{
              background: "red",
            }}
          >
            {loading ? (
              <Spinner size={"xl"} colorScheme="white" />
            ) : (
              "No Applications"
            )}
          </Heading>
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
