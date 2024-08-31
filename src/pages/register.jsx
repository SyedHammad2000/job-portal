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

const Register = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [role, setrole] = useState();
  const [address, setaddress] = useState();
  const [contact, setcontact] = useState();
  const [pic, setpic] = useState();
  const toast = useToast();
  const router = useRouter();

  const Postdetail = async (pics) => {
    if (pics === undefined) {
      return toast({
        title: "Please Select an Image",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const formdata = new FormData();
      formdata.append("file", pics);
      formdata.append("upload_preset", "ecommerce");
      formdata.append("cloud_name", "dn3tasa5d");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dn3tasa5d/image/upload",
        formdata
      );
      console.log(pics);
      setpic(res.data.url);
      console.log(res);

    
    } else {
      toast({
        title: "error in image uploading",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

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

    const data = await axios.post("http://localhost:3000/api/register", {
      name,
      email,
      password,
      role,
      address,
      contact,
      pic,
    });
    console.log(data.data);
    router.push("/login");

    setname("");
    setemail("");
    setpassword("");
    setrole("");
    setaddress("");
    setcontact("");
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
            <option className="text-black" value="employer">Employer</option>
            <option className="text-black" value="applicant">Applicant</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Upload Your Picture</FormLabel>
          <Input
            type="file"
            p={1.5}
            accept="image/*"
            placeholder="Choose a file"
            onChange={(e) => Postdetail(e.target.files[0])}
          />
        </FormControl>
        <Button variant={"solid"} type="submit" onClick={handleSubmit}>
          Sign In
        </Button>
      </Box>
    </VStack>
  );
};
export default Register;
