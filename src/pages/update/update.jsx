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
  Select,
  Textarea,
  Input,
  FormControl,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import nookies from "nookies";

import React, { useState, useEffect } from "react";
import useCloudinary from "@/components/cloudinarycomponent/useCloudinary";

const Updatedrawer = ({ user, token }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, Postdetail, Pics, setPics } = useCloudinary();
  const firstField = React.useRef();
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [role, setrole] = useState();
  const [contact, setcontact] = useState();
  const [address, setaddress] = useState();
  const [image, setImage] = useState();
  const [loader, setloader] = useState(false);
  const toast = useToast();
  console.log(token);

  console.log(user, "user");
  useEffect(() => {
    setname(user?.users.name);
    setemail(user?.users.email);
    setpassword(user?.users.password);
    setrole(user?.users.role);
    setcontact(user?.users.contact);
    setaddress(user?.users.address);
    setImage(user?.users.pic);
  }, []);
  const handleSubmit = async (e) => {
    setloader(true);
    e.preventDefault();

    const { data } = await axios.put(
      `${baseURL}/api/register`,
      {
        name,
        password,
        role,
        address,
        contact,
        pic: Pics ? Pics : image,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data);
    
    toast({
      title: "Welcome",
      description: "Succesfully updated",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    localStorage.setItem("user", JSON.stringify(data?.user));
    window.location.reload();

    setloader(false);
  };

  return (
    <>
      <Button variant={"ghost"} onClick={onOpen} colorScheme={"blue"}>
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
          <DrawerHeader borderBottomWidth="1px">Modify Profile</DrawerHeader>

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
                  isDisabled
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
                <FormLabel>Picture</FormLabel>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => Postdetail(e.target.files[0])}
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
            <Button
              colorScheme="blue"
              onClick={handleSubmit}
              isLoading={loading}
            >
              {loader ? <Spinner /> : "Update Profile"}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Updatedrawer;

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
      Authorization: `Bearer ${cookies.token}`,
    },
  });

  console.log(data.data);

  return {
    props: {
      user: data.data,
      token: cookies.token,
    },
  };
};
