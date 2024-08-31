import {
  FormControl,
  FormLabel,
  VStack,
  Text,
  Input,
  Box,
  Button,
  Select,
  Textarea,
  Spinner,
  Heading,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Update = () => {
  const toast = useToast();
  const router = useRouter();
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [role, setrole] = useState();
  const [token, settoken] = useState();
  const [contact, setcontact] = useState();
  const [address, setaddress] = useState();

  useEffect(() => {
    settoken(localStorage.getItem("token"));
    const fetch = async () => {
      const data = await axios.get("http://localhost:3000/api/register", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(data.data);
      setname(data.data.users.name);
      setemail(data.data.users.email);
      setpassword(data.data.users.password);
      setrole(data.data.users.role);
      setcontact(data.data.users.contact);
      setaddress(data.data.users.address);
    };
    fetch();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast({
        title: "Error",
        description: "All fields are required",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    const { data } = await axios.put(
      "http://localhost:3000/api/register",
      {
        name,
        email,
        password,
        role,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    if (token) {
      localStorage.removeItem("user");
    }
    toast({
      title: "Welcome",
      description: "Succesfully updated",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    localStorage.setItem("user", JSON.stringify(data.user));
  };

  return (
    <VStack
      height="100%"
      p={5}
      background={"linear-gradient(11deg, white, black, maroon, transparent)"}
    >
      <Box
        width={[
          "100%", // 0-30em
          "70%", // 30em-48em
          "50%", // 48em-62em
          "60%", // 62em+
        ]}
        mt="1em"
        height={token ? "100%" : "100vh"}
        display={"flex"}
        flexDirection={"column"}
        gap={5}
        p={5}
        textAlign={"center"}
        rounded={"8px 8px 8px 8px"}
        shadow={"2px 4px 6px"}
        bg={"rgb(254, 250, 224,0.5)"}
      >
        {token ? (
          <>
            <Text fontSize={"2rem"}>Update</Text>

            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="text"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Contact</FormLabel>
              <Input
                type="number"
                value={contact}
                onChange={(e) => setcontact(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Textarea
                value={address}
                onChange={(e) => setaddress(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="text"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Role</FormLabel>
              <Select
                placeholder="Select Type"
                value={role}
                onChange={(e) => setrole(e.target.value)}
                required
              >
                <option value="employer">Employer</option>
                <option value="applicant">Applicant</option>
              </Select>
            </FormControl>
            <Button variant={"solid"} type="submit" onClick={handleSubmit}>
              Update
            </Button>
          </>
        ) : (
          <Box>
            <Heading>Please Login</Heading>
            <Spinner />
            <br />
            <Button onClick={() => router.push("/login")}>Login</Button>
          </Box>
        )}
      </Box>
    </VStack>
  );
};
export default Update;
