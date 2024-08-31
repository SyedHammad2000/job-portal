import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import { Container } from "@chakra-ui/react";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
