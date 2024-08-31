import LoginProtectedRoute from "@/components/LoginProtectedRoute";
import {
  FormControl,
  FormLabel,
  VStack,
  Text,
  Input,
  Box,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";

const login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const toast = useToast();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password || !email) {
      toast({
        title: "Error",
        description: "All fields are required",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    const { data } = await axios.post("http://localhost:3000/api/login", {
      email,
      password,
    });
    console.log(data);
    if (data.token) {
      toast({
        title: "Welcome",
        description: "Succesfully logged in",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      localStorage.setItem("token", data.token);
      const user = JSON.stringify(data.user);
      localStorage.setItem("user", user);
      window.location.href = "/profile";
    }
  };

  return (
    <VStack spacing={5} height={"100%"} p="5">
      <Box
        width={["100%", "50%", "70%", "80%"]}
        mt="2em"
        height={"30em"}
        display={"flex"}
        flexDirection={"column"}
        gap={5}
        p={5}
        textAlign={"center"}
        background="linear-gradient(37deg, black, lightblue)"
        color={"white"}
        rounded={"8px 8px 8px 8px"}
        shadow={"2px 4px 6px"}
        alignItems={"center"}
      >
        <Text fontSize={"2rem"}>
          <FaUserCircle />
        </Text>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder={``}
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="text"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </FormControl>
        <Button variant={"solid"} onClick={handleSubmit}>
          <IoIosLogIn size={"md"} />
        </Button>
      </Box>
    </VStack>
  );
};

export default LoginProtectedRoute(login);
