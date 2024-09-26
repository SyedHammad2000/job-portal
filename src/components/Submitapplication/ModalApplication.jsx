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
import { useMutation } from "@apollo/client";
import { ApplyUser } from "@/queries/ApplyUser";

const ModalApplication = ({ postId, token, postBy }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, Postdetail, Pics, setPics, setloading } = useCloudinary();
  const [user, setuser] = useState();
  const toast = useToast();
  const [loader, setLoader] = useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [applyUser, { error, data }] = useMutation(ApplyUser);
  useEffect(() => {
    setuser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleSubmit = async () => {
    setLoader(true);
    // const { data } = await axios.post(
    //   `${baseURL}/api/application/applications`,
    //   {
    //     ApplicantId: user._id,
    //     JobPostId: postId,
    //     resume: Pics,
    //     postById: postBy._id,
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }
    // );
    const res = applyUser({
      variables: {
        JobPostId: postId,
        resume: Pics,
        postBy: postBy._id,
      },
    });

    console.log(res);
    console.log(data);
    if (res.then) {
      toast({
        title: "applied",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-left",
      });
      onClose();
      setPics("");
      setLoader(false);
      // window.location.reload();
    } else {
      toast({
        title: data.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-left",
      });
      setLoader(false);
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
                onChange={(e) => Postdetail(e.target.files[0], "raw")}
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
              {loader ? <Spinner /> : "Apply Now"}
            </Button>
            <Button
              onClick={() => {
                onClose();
                setLoader(false);
                setloading(false);
                setPics(null);
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
