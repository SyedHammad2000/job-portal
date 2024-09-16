import baseURL from "@/helper/baseURL";
import { Container, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React,{useEffect,useState} from "react";

const Chat = () => {
    const [user,setUser]=useState()

    useEffect(()=>{
       const fetchUser= async()=>{
            const {data}=await axios.get(`${baseURL}`)


       }
        
    },[])


    
  return (
    <Container minH={"100vh"} minW={"100%"} h={"100%"} p={1}>
      <Grid
        templateColumns={"repeat(2,1fr)"}
        gap={1}
        maxH={"80vh"}
        h={"80vh"}
        p={2}
      >
        <VStack spacing={4} align={"left"} bg={"red"} w={"40%"}>
          <Heading>User</Heading>
        </VStack>
        <VStack spacing={4} align={"right"} bg={"red"} w={"100%"}>
          <Text>Hello</Text>
        </VStack>
      </Grid>
    </Container>
  );
};

export default Chat;
