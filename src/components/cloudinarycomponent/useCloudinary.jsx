import { FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";
import axios from "axios";
// import { Input } from "postcss";
import React, { useState } from "react";

const useCloudinary = () => {
  const toast = useToast();
  const [Pics, setPics] = useState("");
  const [loading, setloading] = useState(false);
  const Postdetail = async (pics, type) => {
    setloading(true);
    if (pics === undefined) {
      setPics("");
      setloading(false);
      return toast({
        title: "Please Select an Image",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top-left",
      });
    }

    if (pics.type === "application/pdf") {
      const formdata = new FormData();
      formdata.append("file", pics);
      formdata.append("upload_preset", "ecommerce");
      // formdata.append("cloud_name", "dn3tasa5d");
      formdata.append("resource_type", type);
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/dn3tasa5d/${type}/upload`,
        formdata
      );
      await setPics(res.data.url);
      if (res.data) {
        console.log(res.data.url, res.data);
        setloading(false);
        toast({
          title: "Image is Selected",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-left",
        });
        return;
      }
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const formdata = new FormData();
      formdata.append("file", pics);
      formdata.append("upload_preset", "ecommerce");
      formdata.append("cloud_name", "dn3tasa5d");
      // formdata.append("resource_type", type);
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dn3tasa5d/image/upload",
        formdata
      );
      await setPics(res.data.url);
      if (res.data) {
        console.log(res.data.url, res.data);
        toast({
          title: "Image is Selected",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-left",
        });
        setloading(false);
        console.log(Pics, "pics");
      }

      return;
    } else {
      setloading(false);
      setPics("");
      toast({
        title: "error in image uploading",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top-left",
      });
    }
  };
  return {
    Postdetail,
    Pics,
    loading,
    setPics,
    setloading,
  };
};

export default useCloudinary;
