import baseURL from "@/helper/baseURL";
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Chat = () => {
  const [user, setUser] = useState();
  const [data, setdata] = useState();
  const router = useRouter();

  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("user")));
    const fetchUser = async () => {
      const { data } = await axios.get(`${baseURL}/api/chat`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setUser(data);
    };

    fetchUser();
  }, []);
  console.log(data);

  return (
    <Container minH={"100vh"} minW={"100%"} h={"100%"} p={2}>
      <VStack spacing={4}>
        {user?.chats?.map((chat) => (
          <>
            <Box key={chat._id}>
              <Button
                onClick={() => {
                  router.push(
                    `/chat/${
                      chat.receiverId._id === data._id
                        ? chat.senderId._id
                        : chat.receiverId._id
                    }`
                  );
                }}
              >
                Message from
                <br />
                {chat.receiverId.name === data.name
                  ? chat.senderId.name
                  : chat.receiverId.name}
              </Button>
            </Box>
            {/* <Box>
              <Text>{chat.senderId.name}</Text>
            </Box> */}
          </>
        ))}
      </VStack>
    </Container>
  );
};

export default Chat;
