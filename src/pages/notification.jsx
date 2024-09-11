import { Box, Heading, HStack, Stack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import nookies from "nookies";
import baseURL from "@/helper/baseURL";
import axios from "axios";

const Notifications = ({ data }) => {
  const [datas, setData] = useState([]);
  console.log(data);
  useEffect(() => {}, []);
  console.log(JSON.stringify(datas));
  return (
    <HStack gap={3} minH={"100vh"} h={"100%"} maxW={"100%"}>
      <Box></Box>
    </HStack>
  );
};

export default Notifications;

export const getServerSideProps = async (ctx) => {
  const cookies = await nookies.get(ctx);

  if (!cookies.token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const res = await axios.get(`${baseURL}/api/receiver/receiver`, {
    headers: {
      Authorization: `Bearer ${cookies.token}`,
      // content
      "Content-Type": "application/json",
    },
  });
  console.log(res.data);
  return {
    props: { data: res.data },
  };
};
