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
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { SiGnuprivacyguard } from "react-icons/si";
import baseURL from "@/helper/baseURL";
import useCloudinary from "@/components/cloudinarycomponent/useCloudinary";

const Register = () => {
  const { Postdetail, Pics, loading, setPics } = useCloudinary();
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [role, setrole] = useState();
  const [address, setaddress] = useState();
  const [contact, setcontact] = useState();

  const toast = useToast();
  const router = useRouter();

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

    const { data } = await axios.post(
      `${baseURL}/api/register`,
      {
        name,
        email,
        password,
        role,
        address,
        contact,
        pic: Pics,
      },
      {
        headers: {
          // content type
          "Content-Type": "application/json",
        },
      }
    );

    if (data.success) {
      toast({
        title: "Success",
        description: "Registered Successfully",
        position: "top-left",
        duration: 3000,
        isClosable: true,
      });
      router.push("/login");
      setname("");
      setemail("");
      setpassword("");
      setrole("");
      setaddress("");
      setcontact("");
      setPics("");
    }
  };

  return (
    <VStack
      height="100%"
      background="linear-gradient(37deg, black, lightblue)"
      p={2}
    >
      <Box
        width={["100%", "50%", "70%", "80%"]}
        mt="1em"
        display={"flex"}
        flexDirection={"column"}
        gap={5}
        p={10}
        textAlign={"center"}
        background="linear-gradient(37deg, black, lightblue)"
        rounded={"8px 8px 8px 8px"}
        shadow={"2px 4px 6px"}
        color={"white"}
      >
        <Text fontSize={"2rem"}>
          <SiGnuprivacyguard />{" "}
        </Text>

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
            <option className="text-black" value="employer">
              Employer
            </option>
            <option className="text-black" value="applicant">
              Applicant
            </option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Upload Your Picture</FormLabel>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => Postdetail(e.target.files[0])}
            p={1}
          />
        </FormControl>
        <Button
          variant={"solid"}
          type="submit"
          onClick={handleSubmit}
          isLoading={loading}
        >
          Sign In
        </Button>
      </Box>
    </VStack>
  );
};
export default Register;
