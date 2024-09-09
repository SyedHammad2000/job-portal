import { Container, Heading } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Profile from "./profile";
import Layout from "@/components/Layout";
import React, { useContext } from "react";
import { ApplicationContext } from "@/components/appContext/ApplicationContext";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <>
      <Container minH={"100vh"}>
        <Heading size={"xl"} fontFamily={"sans-serif"}>
          Welcome to Our Job Portal
        </Heading>
      </Container>
    </>
  );
}
