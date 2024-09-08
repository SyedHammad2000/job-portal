import Application from "@/components/ShowApplications/Application";
import baseURL from "@/helper/baseURL";
import { Box, Button, Heading, HStack, Link, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Applications = () => {

  
  return (
    <HStack
      backgroundColor={"#FFDFD6"}
      minH={"100vh"}
      height="100%"
      p={5}
      wrap={"wrap"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Application />
    </HStack>
  );
};

export default Applications;
