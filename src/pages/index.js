import { Container } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Joblisting from "./joblisting";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container className={` ${inter.className}`}>
   
    </Container>
  );
}
