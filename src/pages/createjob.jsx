import withEmployerAuth from "@/components/withEmployerAuth";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
const Createjob = () => {
  const [title, setTitle] = useState();
  const [company, setCompany] = useState();
  const [location, setLocation] = useState();
  const [description, setDescription] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <FormLabel>Title</FormLabel>
          <Input
            placeholder={"Job Title"}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Company</FormLabel>
          <Input
            placeholder="Company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Location</FormLabel>
          <Input
            placeholder="Company Location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder="Job Description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
        <Button mt={2} variant={"solid"} onClick={handleSubmit}>
          Add
        </Button>
      </Box>
    </VStack>
  );
};

export default withEmployerAuth(Createjob);
