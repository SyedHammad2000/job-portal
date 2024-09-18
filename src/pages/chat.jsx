import baseURL from "@/helper/baseURL";
import {
  Badge,
  Box,
  Button,
  Container,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState, useContext } from "react";
import nookies from "nookies";
import { ApplicationContext } from "@/components/appContext/ApplicationContext";
const Chat = () => {
  const [user, setUser] = useState();
  const [data, setdata] = useState();
  const router = useRouter();
  const { loading, setLoading } = useContext(ApplicationContext);

  useEffect(() => {
    const userrr = JSON.parse(localStorage.getItem("user"));
    setdata(userrr);
    console.log(data, "user");
    const fetchUser = async () => {
      setLoading(true);
      const { data } = await axios.get(`${baseURL}/api/chat`, {
        headers: {
          Authorization: `Bearer ${nookies.get().token}`,
        },
      });

      await setUser(data);
      setLoading(false);
    };
    fetchUser();
  }, []);
  console.log(user, "messagessss ");

  return (
    <Container minH={"100vh"} minW={"100%"} h={"100%"} p={2}>
      <VStack spacing={4}>
        {user?.chats?.map((chat, index) => (
          <>
            {chat ? (
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
            ) : (
              <>{loading ? <Spinner /> : ""}</>
            )}
          </>
        ))}
      </VStack>
    </Container>
  );
};

export default Chat;
