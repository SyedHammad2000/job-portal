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
  Badge,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "@chakra-ui/next-js";
import { useRouter } from "next/router";
import Menudrop from "./NavbarComp/Menudrop";
import { IoNotificationsSharp } from "react-icons/io5";
import { ApplicationContext } from "./appContext/ApplicationContext";
import Image from "next/image";
import picss from "@/assets/LOGO_MAKER.jpeg";
import { FaFacebookMessenger, FaMailchimp } from "react-icons/fa";

const Navbar = ({ onClose, onOpen, isOpen, onToggle }) => {
  const { postlength, users, tokens, handleLogout, applength } =
    useContext(ApplicationContext);
  const Router = useRouter();

  console.log(users);
  return (
    <Box
      height={"100px"}
      display={"flex"}
      justifyContent={"space-between"}
      className="font-poppins sm:bg-black"
      p={"2"}
      bg="black"
      color={"white"}
    >
      <Link href={"/"}>
        <Image
          src={picss}
          alt="logo"
          width={100}
          height={100}
          style={{ cursor: "pointer", height: "80px", width: "150px" }}
        />
      </Link>

      <Box display={"flex"}>
        {users?.role === "employer" && (
          <Link
            onClick={onClose}
            display={{ lg: "none" }}
            href={"/applications"}
            style={{
              position: "relative",
              width: "30px",
              margin: "auto",
            }}
          >
            <Box>
              {postlength > 0 ? (
                <>
                  <Badge
                    colorScheme="green"
                    size={"sm"}
                    position={"absolute"}
                    top={"-10px"}
                    right={"4px"}
                    w={"18px"}
                    h={5}
                    textAlign={"center"}
                    rounded={"full"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    {postlength}
                  </Badge>
                </>
              ) : (
                <></>
              )}
              <IoNotificationsSharp size={20} color="red" />
            </Box>
          </Link>
        )}
        {users?.role === "applicant" && (
          <Link
            href={"/notification"}
            display={{ lg: "none" }}
            style={{
              position: "relative",
              width: "30px",
              margin: "auto",
            }}
          >
            <Box>
              {applength > 0 ? (
                <Badge
                  colorScheme="green"
                  size={"sm"}
                  position={"absolute"}
                  top={"-10px"}
                  right={"4px"}
                  w={"18px"}
                  h={5}
                  textAlign={"center"}
                  rounded={"full"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  className="animate-pulse"
                >
                  {applength}
                </Badge>
              ) : (
                <></>
              )}
              <IoNotificationsSharp size={25} color="red" />
            </Box>
          </Link>
        )}
        <IconButton
          marginY="auto"
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ lg: "none" }}
          onClick={onToggle}
        />
      </Box>
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
        <Link href={"/chat"} m={"auto"}>
          <FaFacebookMessenger size={"30px"} />
        </Link>

        {tokens ? (
          <>
            {users?.role === "employer" && (
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
                      <Badge
                        colorScheme="green"
                        size={"sm"}
                        position={"absolute"}
                        top={"-10px"}
                        right={"4px"}
                        w={"18px"}
                        h={5}
                        textAlign={"center"}
                        rounded={"full"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        {postlength}
                      </Badge>
                    ) : (
                      <></>
                    )}
                    <IoNotificationsSharp size={25} color="red" />
                  </Box>
                </Link>
              </>
            )}
            {users?.role === "applicant" ? (
              <Link
                href={"/notification"}
                display={{}}
                style={{
                  position: "relative",
                  width: "30px",
                  margin: "auto",
                }}
              >
                <Box>
                  {applength > 0 ? (
                    <Badge
                      colorScheme="green"
                      size={"sm"}
                      position={"absolute"}
                      top={"-10px"}
                      right={"4px"}
                      w={"18px"}
                      h={5}
                      textAlign={"center"}
                      rounded={"full"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      {applength}
                    </Badge>
                  ) : (
                    <></>
                  )}
                  <IoNotificationsSharp size={25} color="red" />
                </Box>
              </Link>
            ) : (
              <></>
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
        transition={"all 0.5s ease-in-out"}
      >
        <Stack
          as="nav"
          p={4}
          gap={20}
          transform={isOpen ? "translateX(0px)" : "translateX(-250px)"}
          transition={"all 0.5s ease-in-out"}
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
          <Link href={"/chat"} m={"auto"}>
            <FaFacebookMessenger size={"30px"} />
          </Link>

          {tokens ? (
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
