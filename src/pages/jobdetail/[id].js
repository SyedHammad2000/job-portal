import SubmitApplication from "@/components/Submitapplication/SubmitApplication";
import baseURL from "@/helper/baseURL";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Jobdetail = ({ data }) => {
 
  const toast = useToast();

  //!Modal integration
  // !Modal
  return (
    <>
      <SubmitApplication data={data}   />
    </>
  );
};

export default Jobdetail;

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  const { data } = await axios.get(`${baseURL}/api/jobdetail/${id}`, {
    headers: {
      //! content type
      "Content-Type": "application/json",
    },
  });
  console.log(data);
  return {
    props: {
      data: data,
    },
  };
}
