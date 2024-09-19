import baseURL from "@/helper/baseURL";
import {
  Badge,
  Box,
  Button,
  Container,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState, useContext } from "react";
import nookies from "nookies";
import { ApplicationContext } from "@/components/appContext/ApplicationContext";
const Chat = ({ alluser }) => {
  const [user, setUser] = useState();
  const [data, setdata] = useState();
  const router = useRouter();
  const { loading, setLoading } = useContext(ApplicationContext);
  console.log(alluser, "ALL");

  useEffect(() => {
    const userrr = JSON.parse(localStorage.getItem("user"));
    setdata(userrr);
    console.log(data, "user");
  }, [alluser]);
  console.log(user, "messagessss ");

  console.log(data, "Data");

  return (
    <Container minH={"100vh"} minW={"100%"} h={"100%"} p={2}>
      <VStack spacing={4}>
        {alluser?.chats?.map((chat, index) => (
          <>
            {chat ? (
              <Box key={index}>
                <Button
                  key={index}
                  onClick={() => {
                    router.push(
                      `/chat/${
                        chat.receiverId._id === data?._id
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
                  {chat.receiverId.name === data?.name
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

export const getServerSideProps = async (ctx) => {
  const cookies = await nookies.get(ctx);
  const res = await axios.get(`${baseURL}/api/chat/chats`, {
    headers: {
      Authorization: `Bearer ${cookies?.token}`,
      "Content-Type": "application/json",
    },
  });

  console.log(res?.data, "data");
  return {
    props: {
      alluser: res?.data,
    },
  };
};
