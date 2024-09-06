import {
  Button,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Updatedrawer from "../UpdateComp/Updatedrawer";

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
            onClose()
          }}
        >
          My Account
        </MenuItem>
        <MenuItem
          bg="black"
          onClick={() => {
            Router.push("/profile");
            onClose();
          }}
        >
          <Updatedrawer />
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
