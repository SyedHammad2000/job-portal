import React, { useState, useEffect } from "react";
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
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import baseURL from "@/helper/baseURL";
import useCloudinary from "../cloudinarycomponent/useCloudinary";

const ModalApplication = ({ postId, token }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, Postdetail, Pics, setPics } = useCloudinary();
  const toast = useToast();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleSubmit = async () => {
    const { data } = await axios.post(
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
    if (data.success) {
      toast({
        title: data.message,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-left",
      });
      onClose();
      setPics("");
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
                p={1}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleSubmit}
              isDisabled={!Pics}
              isLoading={loading}
            >
              Apply Now
            </Button>
            <Button
              onClick={() => {
                onClose();
                setPics("");
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalApplication;
