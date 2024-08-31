import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
const EmployerWrap = (Wrapper) => {
  return (props) => {
    const router = useRouter();
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        router.push("/login");
        return;
      }
      if (user.role !== "employer") {
        router.push("/profile");
      }
    }, []);

    return <Wrapper {...props} />;
  };
};

export default EmployerWrap;
