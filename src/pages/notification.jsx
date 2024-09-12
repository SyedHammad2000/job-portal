"use-client";
import { Box, Button, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import React, { useState, useEffect, useContext } from "react";
import nookies from "nookies";
import baseURL from "@/helper/baseURL";
import axios from "axios";
import { motion } from "framer-motion";
const Notifications = () => {
  const [app, setdata] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const FetchApp = async () => {
      setLoading(true);
      const { data } = await axios.get(`${baseURL}/api/receiver/receiver`, {
        headers: {
          Authorization: `Bearer ${nookies.get().token}`,
        },
      });

      setdata(data.receiver);
      console.log(data.receiver);
      if (setdata) {
        setLoading(false);
      }
    };
    FetchApp();
  }, []);

  const handleClick = async (id) => {
    const data = await axios.delete(`${baseURL}/api/receiver/${id}`);
    console.log(data);
    setdata(app?.filter((item) => item._id !== id));
  };

  const MotionBox = motion(Box);
  // console.log(data);
  return (
    <HStack
      gap={3}
      minH={"100vh"}
      h={"100%"}
      maxW={"100%"}
      bg={"#FFF4EA"}
      p={5}
      flexWrap={"wrap"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {app?.length > 0 ? (
        app?.map((item) => {
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
              height={"100%"}
              key={item._id}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              width={["100%", "40%", "30%", "30%"]}
              bgColor={"blue"}
              p={4}
              bg={"#FFF4EA"}
              borderRadius={"5px"}
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              gap={2}
              textAlign={"center"}
            >
              <Heading size={"md"}>{item.AppliedFor.title}</Heading>
              <Heading size={"md"}>
                {item.AppliedFor.company}
                <br />
              </Heading>
              <Text textAlign={"center"}>{item.message}</Text>
              <Button colorScheme={"red"} onClick={() => handleClick(item._id)}>
                Delete
              </Button>
            </MotionBox>
          );
        })
      ) : (
        <Heading>{loading ? "" : "No Notifications"}</Heading>
      )}
    </HStack>
  );
};

export default Notifications;

// export const getServerSideProps = async (ctx) => {
//   const cookies = await nookies.get(ctx);

//   if (!cookies.token) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   const res = await axios.get(`${baseURL}/api/receiver/receiver`, {
//     headers: {
//       Authorization: `Bearer ${cookies.token}`,
//       // content
//       "Content-Type": "application/json",
//     },
//   });
//   console.log(res.data);
//   return {
//     props: { data: res.data },
//   };
// };
