import { Box } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      background={"black"}
      color={"white"}
      p={5}
      textAlign={["left", "center"]}
    >
      All Right Reserved
      <br />
      Copyright © 2024
    </Box>
  );
};

export default Footer;
