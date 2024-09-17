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
import io from "socket.io-client";
import Pusher from "pusher-js";
const Message = ({ id }) => {
  const [messages, SetMessages] = useState([]);
  const [message, SetMessage] = useState();
  const [user, setUser] = useState();
  let [socket, setSocket] = useState();
  const token = nookies.get().token;
  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem("user")));
  //   const sockets = io({
  //     path: "/api/socket",
  //   });
  //   setSocket(sockets);

  //   sockets.on("newMessage", (msg) => {
  //     console.log("New message received:", msg);
  //     SetMessages((prev) => [...prev, msg]);
  //   });
  //   // Unique room for the chat
  //   sockets.emit("joinRoom", { room: "abc" });

  //   // Listen for new messages

  //   const fetchUser = async () => {
  //     if (!nookies.get().token || !id) {
  //       return console.log("erroe");
  //     }
  //     const res = await axios.get(`${baseURL}/api/chat/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     SetMessages(res?.data?.chat?.messages || []);
  //   };
  //   fetchUser();

  //   return () => {
  //     sockets.disconnect();
  //   };
  // }, [id]);
  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user"));
    setUser(userId._id);
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
    const fetchUser = async () => {
      if (!nookies.get().token || !id) {
        return console.log("erroe");
      }
      const res = await axios.get(`${baseURL}/api/chat/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      SetMessages(res?.data?.chat?.messages || []);
    };
    fetchUser();

    return () => {
      pusher.unbind_all();
      pusher.unsubscribe(Channelname);
    };
  }, [id]);
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

      // socket.emit("sendMessage", {
      //   room: "abc", // The room id or chat id
      //   message: {
      //     text: message,
      //     timestamp: new Date(),
      //     sender: user._id, // Ensure you include sender id or user info
      //   },
      // });
      // trigerr pusher
      
      SetMessages(data?.chat?.messages);
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
        bg={"wheat"}
        borderRadius={"10px"}
        sx={scrol}
        border={"2px solid wheat"}
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      >
        <VStack spacing={4} align={""} justifyContent={"center"} w={""}>
          {messages?.map((msg, index) => {
            return (
              <Box key={index}>
                <Text textAlign={msg.sender === user ? "right" : "left"}>
                  {msg.text}
                </Text>
                <Text textAlign={msg.sender === user ? "right" : "left"}>
                  {msg.timestamp.slice("0", "10")}
                </Text>
                <Text
                  color={msg.sender === user ? "green" : "red"}
                  textAlign={msg.sender === user ? "right" : "left"}
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
