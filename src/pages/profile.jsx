import withAuth from "@/components/ProtectedRoute/withAuth";
// import Updatedrawer from "@/components/UpdateComp/Updatedrawer";

import baseURL from "@/helper/baseURL";
import nookies from "nookies";
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
import { motion } from "framer-motion";
import Updatedrawer from "./update/update";
import { useRouter } from "next/router";

const Profile = ({ user, token }) => {
  const router = useRouter();
  const MotionCard = motion(Card);
  console.log(user, "usering");

  return (
    <VStack
      height="100%"
      p={2}
      sx={{
        // backgroundColor: "rgb(255, 245, 228)",
        background: "linear-gradient(11deg, white, black, maroon, transparent)",
      }}
    >
      <MotionCard
        initial={{
          x: -100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
        width={[
          "100%", // 0-30em
          "70%", // 30em-48em
          "50%", // 48em-62em
          "60%", // 62em+
        ]}
        // background="linear-gradient(11deg,  black, maroon, transparent)"
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
                src={user?.users.pic}
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
                <Text pt="2" fontSize="md" disabled>
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
              <Box
                fontSize={"20px"}
                padding={0}
                fontFamily={"sans-serif"}
                fontWeight={"none"}
                color={"white"}
                _hover={{
                  color: "black",
                }}
              >
                <Updatedrawer user={user} token={token} />
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
      </MotionCard>
    </VStack>
  );
};

export default withAuth(Profile);

// getServerSideProps

export const getServerSideProps = async (context) => {
  const cookies = nookies.get(context);
  console.log(cookies);

  if (!cookies.token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const data = await axios.get(`${baseURL}/api/register`, {
    headers: {
      Authorization: `Bearer ${cookies?.token}`,
    },
  });

  console.log(data.data);

  return {
    props: {
      user: data?.data,
      token: cookies.token,
    },
  };
};
