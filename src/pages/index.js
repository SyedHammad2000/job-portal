import { Container } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Joblisting from "./joblisting";
import Profile from "./profile";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Profile />
    </>
  );
}
