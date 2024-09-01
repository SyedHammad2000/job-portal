"use clien";
import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Stack,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { BsFilePost } from "react-icons/bs";
import { HiLogout } from "react-icons/hi";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { Link } from "@chakra-ui/next-js";
import { useRouter } from "next/router";

const Navbar = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const [users, setUser] = useState();
  const [token, settoken] = useState();
  const Router = useRouter();
  useEffect(() => {
    const fetchToken = async () => {
      await settoken(localStorage.getItem("token"));
      setUser(JSON.parse(localStorage.getItem("user")));
    };
    fetchToken();
  }, [token]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload("/login");
  };
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      className="font-poppins sm:bg-black"
      p={"2"}
      bg="black"
      color={"white"}
    >
      <Heading ml={5}>Job Portal</Heading>
      <IconButton
        size="md"
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        display={{ lg: "none" }}
        onClick={onToggle}
      />
      <HStack
        display={{ base: "none", lg: "flex" }}
        gap={10}
        listStyleType={"none"}
        fontSize={20}
        mr={10}
      >
        <>
          <Link className="text-decoration-none" href={"/joblisting"}>
            <BsFilePost
              className="hover:text-blue-400 hover:animate-pulse"
              size={"40px"}
            />
          </Link>
        </>
        {token ? (
          <>
            {users.role === "employer" && (
              <>
                <Link href={"/createjob"}>
                  <MdOutlineCreateNewFolder
                    className="hover:text-blue-400 hover:animate-pulse"
                    size={40}
                  />
                </Link>
              </>
            )}
          </>
        ) : (
          <>
            <>
              <Link
                style={{
                  textDecoration: "none",
                }}
                href={"/login"}
              >
                Login
              </Link>
            </>
            <>
              <Link
                style={{
                  textDecoration: "none",
                }}
                href={"/register"}
              >
                Register
              </Link>
            </>
          </>
        )}

        <>
          <Menu>
            {users ? (
              <>
                <MenuButton as={Button} colorScheme="blue">
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
                    onClick={() => Router.push("/register-update/update")}
                  >
                    Modify Account
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
            ) : (
              <></>
            )}
          </Menu>
        </>
      </HStack>

      <Box
        pt={"50px"}
        display={{ lg: "none" }}
        pos={"fixed"}
        w={isOpen ? "250px" : "0px"}
        left={"0"}
        top={"0"}
        bg={"black"}
        h={"100%"}
        zIndex={10}
        transition={"all 0.3s ease-in-out"}
        // className="transition-transform transform ease-in-out duration-1000"
      >
        <Stack
          as="nav"
          p={4}
          gap={20}
          transform={isOpen ? "translateX(0px)" : "translateX(-200px)"}
          transition={"all 0.3s ease-in-out"}
        >
          <Link className="text-decoration-none nvl" href={"/joblisting"}>
            <BsFilePost
              className="hover:text-blue-400 hover:animate-pulse"
              size={"50px"}
            />
          </Link>

          {token ? (
            <>
              {users.role === "employer" && (
                <>
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    className="nvl"
                    href={"/createjob"}
                  >
                    <MdOutlineCreateNewFolder
                      className="hover:text-blue-400 hover:animate-pulse"
                      size={50}
                    />
                  </Link>
                </>
              )}
            </>
          ) : (
            <>
              <>
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  className="nvl"
                  href={"/login"}
                >
                  Login
                </Link>
              </>
              <>
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  className="nvl"
                  href={"/register"}
                >
                  Register
                </Link>
              </>
            </>
          )}

          <Menu className="nvl">
            {users ? (
              <>
                <MenuButton as={Button} colorScheme="blue">
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
                    onClick={() => Router.push("/register-update/update")}
                  >
                    Modify Account
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
            ) : (
              <></>
            )}
          </Menu>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
