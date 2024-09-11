import withLoginAuth from "@/components/ProtectedRoute/withLoginAuth";
import baseURL from "@/helper/baseURL";
import Cookie from "js-cookie";
import {
  FormControl,
  FormLabel,
  VStack,
  Text,
  Input,
  Box,
  Button,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";

const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const [loader, setLoader] = useState(false);
  const toast = useToast();
  // const router = useRouter();

  const handleSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    try {
      if (!password || !email) {
        toast({
          title: "Error",
          description: "All fields are required",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        setLoader(false);
        return;
      }

      const { data } = await axios.post(
        `${baseURL}/api/login`,
        {
          email,
          password,
        },
        {
          headers: {
            // content type
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);

      if (data.success) {
        toast({
          title: "Welcome to Job Portal",
          description: "Succesfully logged in",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-left",
        });
        setLoader(false);
        localStorage.setItem("token", data.token);
        Cookie.set("token", data.token, { expires: 30 });
        const user = JSON.stringify(data.user);
        localStorage.setItem("user", user);
        window.location.href = "/";
      }

      if (!data.success) {
        setLoader(false);
        toast({
          title: "Error",
          description: data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      setLoader(false);
      toast({
        title: "Error",
        description: `${error}`,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-left",
      });
    }
  };

  return (
    <VStack
      spacing={5}
      height={"100%"}
      p="5"
      background="linear-gradient(30deg,lightblue,black,rgba(
        210,28,0,0.5
      ))"
    >
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
          {loader ? <Spinner /> : <IoIosLogIn size="30" />}
        </Button>
      </Box>
    </VStack>
  );
};

export default withLoginAuth(Login);
