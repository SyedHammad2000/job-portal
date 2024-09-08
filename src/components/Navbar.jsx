"use clien";
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Stack,
  useDisclosure,
  Menu,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "@chakra-ui/next-js";
import { useRouter } from "next/router";
import Menudrop from "./NavbarComp/Menudrop";
import { IoNotificationsSharp } from "react-icons/io5";
import { ApplicationContext } from "./appContext/ApplicationContext";

const Navbar = ({ onClose, onOpen, isOpen, onToggle }) => {
  const [users, setUser] = useState();
  const [token, settoken] = useState();
  const { postlength } = useContext(ApplicationContext);
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
        <Link
          style={{
            textDecoration: "none",
          }}
          href={"/joblisting"}
        >
          Job Feed
        </Link>

        {token ? (
          <>
            {users.role === "employer" && (
              <>
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  href={"/createjob"}
                >
                  Add Post
                </Link>
                <Link
                  href={"/applications"}
                  style={{
                    position: "relative",
                    width: "30px",
                    margin: "auto",
                  }}
                >
                  <Box>
                    {postlength > 0 ? (
                      <Text
                        position={"absolute"}
                        top={"-10px"}
                        right={"4px"}
                        bgColor={"green"}
                        w={"4"}
                        h={5}
                        textAlign={"center"}
                        rounded={"full"}
                      >
                        {postlength}
                      </Text>
                    ) : (
                      <></>
                    )}
                    <IoNotificationsSharp size={25} />
                  </Box>
                </Link>
              </>
            )}
          </>
        ) : (
          <>
            <Link
              style={{
                textDecoration: "none",
              }}
              href={"/login"}
            >
              Login
            </Link>

            <Link
              style={{
                textDecoration: "none",
              }}
              href={"/register"}
            >
              Register
            </Link>
          </>
        )}

        <>
          <Menu>
            {users ? (
              <Menudrop
                users={users}
                handleLogout={handleLogout}
                isOpen={isOpen}
                Router={Router}
                onClose={onClose}
              />
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
      >
        <Stack
          as="nav"
          p={4}
          gap={20}
          transform={isOpen ? "translateX(0px)" : "translateX(-250px)"}
          transition={"all 0.3s ease-in-out"}
        >
          <Link
            style={{
              textDecoration: "none",
            }}
            className="nvl"
            href={"/joblisting"}
            onClick={onClose}
          >
            Job Feed
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
                    onClick={onClose}
                  >
                    Add Post
                  </Link>
                  <Link
                    href={"/applications"}
                    style={{
                      position: "relative",
                      width: "30px",
                      margin: "auto",
                    }}
                  >
                    <Box>
                      {postlength > 0 ? (
                        <Text
                          position={"absolute"}
                          top={"-10px"}
                          right={"4px"}
                          bgColor={"green"}
                          w={"4"}
                          h={5}
                          textAlign={"center"}
                          rounded={"full"}
                        >
                          {postlength}
                        </Text>
                      ) : (
                        <></>
                      )}
                      <IoNotificationsSharp size={25} />
                    </Box>
                  </Link>
                </>
              )}
            </>
          ) : (
            <>
              <Link
                style={{
                  textDecoration: "none",
                }}
                className="nvl"
                href={"/login"}
                onClick={onClose}
              >
                Login
              </Link>

              <Link
                style={{
                  textDecoration: "none",
                }}
                className="nvl"
                href={"/register"}
                onClick={onClose}
              >
                Register
              </Link>
            </>
          )}

          <Menu className="nvl" m={"auto"}>
            {users ? (
              <Menudrop
                users={users}
                handleLogout={handleLogout}
                isOpen={isOpen}
                Router={Router}
                onClose={onClose}
              />
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
