"use clien";
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Stack,
  useDisclosure,
  Menu,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { BsFilePost } from "react-icons/bs";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { Link } from "@chakra-ui/next-js";
import { useRouter } from "next/router";
import Menudrop from "./NavbarComp/Menudrop";

const Navbar = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure(false);
  const [users, setUser] = useState();
  const [token, settoken] = useState();
  const [loading, setLoading] = useState(false);
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
              <Link
                style={{
                  textDecoration: "none",
                }}
                href={"/createjob"}
              >
                Add Post
              </Link>
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
          transform={isOpen ? "translateX(0px)" : "translateX(-200px)"}
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

          <Menu className="nvl">
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
