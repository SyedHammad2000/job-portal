import baseURL from "@/helper/baseURL";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Stack,
  FormLabel,
  Box,
  InputGroup,
  Select,
  Textarea,
  Input,
  FormControl,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";

const Updatedrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [role, setrole] = useState();
  const [contact, setcontact] = useState();
  const [address, setaddress] = useState();
  const [token, setToken] = useState();
  const toast = useToast();

  const router = useRouter();

  console.log(token);
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
      `${baseURL}/api/register`,
      {
        name,
        email,
        password,
        role,
        address,
        contact,
      },
      {
        headers: {
          "Content-Type": "application/json",
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
    window.location.reload();
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    const fetch = async () => {
      const data = await axios.get(`${baseURL}/api/register`, {
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

  return (
    <>
      {token ? (
        <>
          <Button
            variant={"ghost"}
            fontSize={"20px"}
            padding={0}
            onClick={onOpen}
            fontFamily={"sans-serif"}
            fontWeight={"none"}
            _hover={{
              color: "black",
            }}
          >
            Update Profile
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            initialFocusRef={firstField}
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">
                Modify Profile
              </DrawerHeader>

              <DrawerBody>
                <Stack spacing="24px">
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
                </Stack>
              </DrawerBody>

              <DrawerFooter borderTopWidth="1px">
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue" onClick={handleSubmit}>
                  Update
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <>
          <Button colorScheme="teal" onClick={onOpen}>
            Update Profile
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            initialFocusRef={firstField}
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">Login</DrawerHeader>

              <DrawerBody>
                <Stack spacing="24px">
                  <Spinner />

                  <Button onClick={() => router.push("/login")}>Login</Button>
                </Stack>
              </DrawerBody>

              <DrawerFooter borderTopWidth="1px">
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </>
  );
};
export default Updatedrawer;
