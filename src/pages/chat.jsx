import baseURL from "@/helper/baseURL";
import { Badge, Box, Button, Container, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import nookies from "nookies";

const Chat = () => {
  const [user, setUser] = useState();
  const [data, setdata] = useState();
  const router = useRouter();

  const fetchUser = async () => {
    const { data } = await axios.get(`${baseURL}/api/chat`, {
      headers: {
        Authorization: `Bearer ${nookies.get().token}`,
      },
    });

    await setUser(data);
  };

  useEffect(() => {
    fetchUser();
    const userrr = JSON.parse(localStorage.getItem("user"));
    setdata(userrr);
    console.log(data, "user");
  }, []);

  return (
    <Container minH={"100vh"} minW={"100%"} h={"100%"} p={2}>
      <VStack spacing={4}>
        {user?.chats?.map((chat, index) => (
          <>
            <Box key={index}>
              <Button
                key={index}
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
                <Badge
                  colorScheme={chat.messages?.length > 0 ? "green" : "red"}
                  fontSize={"lg"}
                  fontWeight={"bold"}
                  pos={"absolute"}
                  top={-2}
                  right={0}
                  zIndex={1}
                  borderRadius={"full"}
                  key={index}
                >
                  {chat.messages?.length}
                </Badge>
                Message from
                <br />
                {chat.receiverId.name === data.name
                  ? chat.senderId.name
                  : chat.receiverId.name}
              </Button>
            </Box>
          </>
        ))}
      </VStack>
    </Container>
  );
};

export default Chat;
