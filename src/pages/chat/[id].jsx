import baseURL from "@/helper/baseURL";
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import nookies from "nookies";
import Pusher from "pusher-js";
const Message = ({ id }) => {
  const [messages, SetMessages] = useState([]);
  const [message, SetMessage] = useState();
  const [user, setUser] = useState();
  let [socket, setSocket] = useState();
  const token = nookies.get().token;

  const fetchUser = async () => {
    if (!nookies.get().token || !id) {
      return console.log("erroe");
    }
    const res = await axios.get(`${baseURL}/api/chat/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("res", res?.data);
    SetMessages(res?.data?.chat?.messages || []);
  };

  useEffect(() => {
    fetchUser();
    const userId = JSON.parse(localStorage.getItem("user"));
    setUser(userId);
    if (!id || !userId._id) {
      return console.log("erroe");
    }
    const Channelname = `abc`;

    const pusher = new Pusher("4d4ed87c336a296d9617", {
      cluster: "ap1",
      authEndpoint: "api/pusher/auth",
      useTLS: true,
    });

    const channel = pusher.subscribe(Channelname);
    channel.bind("newMessage", (data) => {
      SetMessages((prev) => [...prev, data]);
      console.log("message", data);
    });

    return () => {
      pusher.unbind_all();
      pusher.unsubscribe(Channelname);
    };
  }, [id]);
  console.log(user, "user");
  const handleClick = async (e) => {
    // !socket
    e.preventDefault();
    if (message) {
      const { data } = await axios.post(
        `${baseURL}/api/chat/${id}`,
        {
          text: message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      SetMessages(data?.chat?.messages);
      SetMessage("");
    }
  };
  console.log(messages, "mesg");

  const scrol = {
    "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-track": {
      background: "lightblue",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
      borderRadius: "2px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "black",
    },
  };
  return (
    <Container
      minW={"100%"}
      p={"2"}
      gap={2}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      m={2}
    >
      <Heading>Messenger</Heading>
      <Grid
        templateColumns={"repeat(1,1fr)"}
        gap={1}
        maxH={"80vh"}
        h={"80vh"}
        p={2}
        overflowY={"scroll"}
        w={["100%", "70%", "50%", "40%"]}
        borderRadius={"10px"}
        sx={scrol}
        border={"2px solid wheat"}
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
        // bg="grey"
        opacity={messages.length > 0 ? "1" : "0.5"}
      >
        <VStack spacing={4} align={""} justifyContent={"center"} w={""}>
          {messages?.map((msg, index) => {
            return (
              <Box key={index}>
                <Text textAlign={msg.sender === user.name ? "right" : "left"}>
                  {msg.text}
                </Text>
                <Text textAlign={msg.sender === user.name ? "right" : "left"}>
                  {msg.timestamp.slice("0", "10")}
                </Text>
                <Text
                  color={msg.sender === user.name ? "green" : "red"}
                  textAlign={msg.sender === user.name ? "right" : "left"}
                >
                  {msg.sender}
                </Text>
              </Box>
            );
          })}
        </VStack>
      </Grid>
      <Input
        mt="5"
        type="text"
        value={message}
        onChange={(e) => SetMessage(e.target.value)}
        placeholder="Enter Message"
        w={["100%", "70%", "50%", "40%"]}
      />
      <Button mt="4" onClick={handleClick}>
        Send
      </Button>
    </Container>
  );
};

export default Message;

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  return {
    props: {
      id,
    },
  };
};
