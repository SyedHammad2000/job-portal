import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Box, useDisclosure } from "@chakra-ui/react";
// import { Container } from "@chakra-ui/react";
import React from "react";
import { ApplicationProvider } from "./appContext/ApplicationContext";

const Layout = ({ children }) => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const handleClick = (event) => {
    event.clientX;
    onClose();
  };

  return (
    <>
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
    </>
  );
};

export default Layout;
