import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import baseURL from "@/helper/baseURL";

const ModalApplication = ({ postId, token }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [Pics, setPics] = useState();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleSubmit = async () => {
    const data = await axios.post(
      `${baseURL}/api/application/${postId}`,
      {
        JobPostId: postId,
        resume: Pics,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    if (data.data.success) {
      toast({
        title: data.data.message,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };
  const Postdetail = async (pics) => {
    if (pics === "") {
      return toast({
        title: "Please Select an Image",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
    }
    if (pics.type === "application/pdf") {
      const formdata = new FormData();
      formdata.append("file", pics);
      formdata.append("upload_preset", "ecommerce");
      formdata.append("cloud_name", "dn3tasa5d");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dn3tasa5d/image/upload",
        formdata
      );
      console.log(pics);
      setPics(res.data.url);
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

  return (
    <>
      <Button onClick={onOpen}>Apply</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload Resume Pdf </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                type="file"
                accept="application/pdf"
                onChange={(e) => Postdetail(e.target.files[0])}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Apply Now
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalApplication;
