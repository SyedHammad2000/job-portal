import baseURL from "@/helper/baseURL";
import axios from "axios";
import React from "react";

const Jobdetail = () => {
  return <div>hello</div>;
};

export default Jobdetail;

export async function getServerSideProps(ctx) {
  console.log(ctx.query);
  const { id } = ctx.query;
  const { data } = await axios.get(
    `${baseURL}/api/jobdetail/${id}`,
    {
      headers: {
        //! content type
        "Content-Type": "application/json",
      },
    }
  );
  console.log(data);
  return {
    props: {
      data: data,
    },
  };
}
