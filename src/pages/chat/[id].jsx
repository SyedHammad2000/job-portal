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

const Message = ({ id }) => {
  const [messages, SetMessages] = useState([]);
  const [message, SetMessage] = useState();
  const [user, setUser] = useState();
  let [socket, setSocket] = useState();
  const token = nookies.get().token;
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    const sockets = io({
      path: "/api/socket",
    });
    setSocket(sockets);

    sockets.on("newMessage", (msg) => {
      console.log("New message received:", msg);
      SetMessages((prev) => [...prev, msg]);
    });
    // Unique room for the chat
    sockets.emit("joinRoom", { room: "abc" });

    // Listen for new messages

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
      socket.disconnect();
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

      socket.emit("sendMessage", {
        room: "abc", // The room id or chat id
        message: {
          text: message,
          timestamp: new Date(),
          sender: user._id, // Ensure you include sender id or user info
        },
      });
      SetMessages(data?.chat?.messages);
    }
  };
  console.log(messages, "mesg");
  return (
    <Container minW={"100%"} p={1} gap={2}>
      <Grid
        templateColumns={"repeat(1,1fr)"}
        gap={1}
        maxH={"80vh"}
        h={"80vh"}
        p={2}
        overflow={"scroll"}
      >
        <VStack spacing={4} align={"right"} w={"100%"}>
          <Heading>User</Heading>
          {messages?.map((msg, index) => {
            return (
              <Box key={index}>
                <Text textAlign={msg.sender === user._id ? "right" : "left"}>
                  {msg.text}
                </Text>
                <Text textAlign={msg.sender === user._id ? "right" : "left"}>
                  {msg.timestamp.slice("0", "10")}
                </Text>
                <Text
                  color={msg.sender === user._id ? "green" : "red"}
                  textAlign={msg.sender === user._id ? "right" : "left"}
                >
                  {msg.sender}
                </Text>
              </Box>
            );
          })}
        </VStack>
      </Grid>
      <Input
      mt='5'
        type="text"
        value={message}
        onChange={(e) => SetMessage(e.target.value)}
      />
      <Button mt='4' onClick={handleClick}>Send</Button>
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
