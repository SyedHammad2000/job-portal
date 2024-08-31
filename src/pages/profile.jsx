import withAuth from "@/components/withAuth";
import baseURL from "@/helper/baseURL";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Spinner,
  Stack,
  StackDivider,
  Text,
  VStack,
  Avatar,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get(`${baseURL}/api/register`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(data.data);
      setUser(data.data);
    };

    fetch();
  }, []);

  return (
    <VStack
      height="100%"
      p={2}
      sx={{
        // backgroundColor: "rgb(255, 245, 228)",
        background: "linear-gradient(11deg, white, black, maroon, transparent)",
      }}
    >
      <Card
        width={[
          "100%", // 0-30em
          "70%", // 30em-48em
          "50%", // 48em-62em
          "60%", // 62em+
        ]}
        shadow={"2px 4px 8px"}
      >
        <CardHeader>
          <Heading size="md">Profile</Heading>
        </CardHeader>
        {user ? (
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Image
                borderRadius="full"
                boxSize="150px"
                src={user.users.pic}
                alt="Dan Abramov"
              />
              <Box>
                <Heading size="sm" textTransform="uppercase">
                  Name
                </Heading>
                <Text pt="2" fontSize="md">
                  {user.users.name}
                </Text>
              </Box>
              <Box>
                <Heading size="sm" textTransform="uppercase">
                  Email
                </Heading>
                <Text pt="2" fontSize="md">
                  {user.users.email}
                </Text>
              </Box>
              <Box>
                <Heading size="sm" textTransform="uppercase">
                  Password
                </Heading>
                <Text pt="2" fontSize="md">
                  {user.users.password}
                </Text>
              </Box>
              <Box>
                <Heading size="sm" textTransform="uppercase">
                  Role
                </Heading>
                <Text pt="2" fontSize="md">
                  {user.users.role}
                </Text>
              </Box>
              <Box>
                <Heading size="sm" textTransform="uppercase">
                  Contact
                </Heading>
                <Text pt="2" fontSize="md">
                  {user.users.contact}
                </Text>
              </Box>
              <Box>
                <Heading size="sm" textTransform="uppercase">
                  Address
                </Heading>
                <Text pt="2" fontSize="md">
                  {user.users.address}
                </Text>
              </Box>
              <Box>
                <Button colorScheme={"blue"}>
                  <Link href={"/register-update/update"}>Update Profile</Link>
                </Button>
              </Box>
            </Stack>
          </CardBody>
        ) : (
          <Box textAlign={"center"} p={3} height={"70vh"}>
            <Heading>Please Login</Heading>
            <Spinner />
            <br />

            <Link href={"/login"}>
              <Button variant={"solid"} colorScheme={"blue"}>
                Login
              </Button>
            </Link>
          </Box>
        )}
      </Card>
    </VStack>
  );
};

export default withAuth(Profile);

// getServerSideProps
