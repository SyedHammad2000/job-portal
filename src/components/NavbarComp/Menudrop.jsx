import {
  Button,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const Menudrop = ({ handleLogout, users, Router, onClose }) => {
  return (
    <>
      <MenuButton as={Button} colorScheme="blue" textTransform={"uppercase"}>
        {users.name}
        <br />
        {users.role}
      </MenuButton>
      <MenuList bg={"black"}>
        <MenuItem
          bg="black"
          color="white"
          fontFamily={"sans-serif"}
          _hover={{
            bg: "white",
            color: "black",
          }}
          onClick={() => {
            Router.push("/profile");
            onClose();
          }}
        >
          My Account
        </MenuItem>
        <MenuItem
          bg="black"
          color="white"
          fontFamily={"sans-serif"}
          _hover={{
            bg: "white",
            color: "black",
          }}
          onClick={handleLogout}
        >
          Logout
        </MenuItem>
      </MenuList>
    </>
  );
};

export default Menudrop;
