import { useDisclosure, useToast } from "@chakra-ui/react";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

export function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

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
                onChange={(e) => Postdetail(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Apply Now
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
