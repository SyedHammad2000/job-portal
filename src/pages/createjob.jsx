import withEmployerAuth from "@/components/ProtectedRoute/withEmployerAuth";
import baseURL from "@/helper/baseURL";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Createjob = () => {
  const [title, setTitle] = useState();
  const [company, setCompany] = useState();
  const [location, setLocation] = useState();
  const [description, setDescription] = useState();
  const toast = useToast();
  const [token, setToken] = useState();
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !company || !location || !description) {
      toast({
        title: "Error",
        description: "All fields are required",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const { data } = await axios.post(
      `${baseURL}/api/job`,
      {
        title,
        company,
        location,
        description,
      },
      {
        headers: {
          // content type
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (data.success) {
      console.log(data, token);
      toast({
        title: "Success",
        description: "Job added successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <VStack
      height={"100%"}
      background="linear-gradient(37deg, white, lightblue,lightgrey)"
      spacing={5}
      p={5}
    >
      <Heading size={"md"}>Add Job Post</Heading>
      <Box
        width={["100%", "50%", "60%", "60%"]}
        p={10}
        background={"linear-gradient(20deg,white,wheat)"}
        boxShadow={"lg"}
        rounded={"md"}
      >
        <FormControl>
          <FormLabel color={"black"}>Title</FormLabel>
          <Input
            placeholder={"Job Title"}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel color={"black"}>Company</FormLabel>
          <Input
            placeholder="Company Name"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel color={"black"}>Location</FormLabel>
          <Input
            placeholder="Company Location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel color={"black"}>Description</FormLabel>
          <Textarea
            placeholder="Job Description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
        <Button
          mt={2}
          variant={"solid"}
          colorScheme={"blue"}
          onClick={handleSubmit}
        >
          Add
        </Button>
      </Box>
    </VStack>
  );
};

export default withEmployerAuth(Createjob);
