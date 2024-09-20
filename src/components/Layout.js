import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Box, ChakraProvider, useDisclosure } from "@chakra-ui/react";
// import { Container } from "@chakra-ui/react";
import React from "react";
import { ApplicationProvider } from "./appContext/ApplicationContext";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/utils/apollo-client";

const Layout = ({ children }) => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const handleClick = (event) => {
    event.clientX;
    onClose();
  };

  return (
    <>
      <ChakraProvider>
        <ApolloProvider client={client}>
          <ApplicationProvider>
            <Navbar
              onClose={onClose}
              onOpen={onOpen}
              isOpen={isOpen}
              onToggle={onToggle}
            />
            <Box onClick={handleClick}>{children}</Box>
            <Footer />
          </ApplicationProvider>
        </ApolloProvider>
      </ChakraProvider>
    </>
  );
};

export default Layout;
