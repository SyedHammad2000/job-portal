import { ApplicationContext } from "@/components/appContext/ApplicationContext";
import baseURL from "@/helper/baseURL";
import { Box, Button, Heading, HStack, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

const Joblisting = () => {
  const router = useRouter();
  const { jobs, setjobs, loading, setLoading } = useContext(ApplicationContext);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const data = await axios.get(`${baseURL}/api/job`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setjobs(data.data);
      setLoading(false);
    };
    fetch();
  }, []);

  console.log(jobs);
  const MotionBox = motion(Box);
  return (
    <HStack
      backgroundColor={"white"}
      maxW={"100vw"}
      height="100%"
      minH={"100vh"}
      p={5}
      wrap={"wrap"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {jobs?.posts ? (
        <>
          {jobs?.posts.map((post) => {
            return (
              <MotionBox
                initial={{
                  x: -100,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{ duration: 0.5 }}
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
                bg={"cornslik"}
                color={"black"}
              >
                <Heading size="md" textAlign={"center"}>
                  {post.title}
                </Heading>
                <Text>{post.company}</Text>
                <Heading size={"sm"}>PostBy:{post.postedBy.name}</Heading>
                <Button
                  colorScheme={"blue"}
                  p={2}
                  variant={"solid"}
                  outlineColor={"black"}
                  onClick={() =>
                    router.push(`${baseURL}/jobdetail/${post._id}`)
                  }
                >
                  View Details
                </Button>
              </MotionBox>
            );
          })}
        </>
      ) : (
        <>
          {loading ? (
            <Spinner size={"lg"} />
          ) : (
            <Heading>No Jobs Available</Heading>
          )}
        </>
      )}
    </HStack>
  );
};

export default Joblisting;

// get serverside props

// export async function getServerSideProps() {
//   // console.log(ctx);
//   const data = await axios.get(`${baseURL}/api/job`);

//   console.log(data.data);
//   console.log(data);

//   return {
//     props: {
//       data: data.data,
//     },
//   };
// }
