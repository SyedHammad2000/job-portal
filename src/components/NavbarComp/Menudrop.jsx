import {
  Button,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Updatedrawer from "../UpdateComp/Updatedrawer";

const Menudrop = ({ handleLogout, users, Router }) => {
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
          _hover={{
            bg: "white",
            color: "black",
          }}
          onClick={() => Router.push("/profile")}
        >
          My Account
        </MenuItem>
        <MenuItem
          bg="black"
          color="white"
          _hover={{
            bg: "white",
            color: "black",
          }}
        >
          <Updatedrawer />
        </MenuItem>
        <MenuItem
          bg="black"
          color="white"
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
