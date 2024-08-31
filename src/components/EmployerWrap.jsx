import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
const EmployerWrap = (Wrapper) => {
  return (props) => {
    const router = useRouter();
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        router.push("/login");
      }
      if (user) {
        if (user.role !== "employer") {
          router.push("/profile");
        }
      }
    }, [router]);

    return <Wrapper {...props} />;
  };
};

export default EmployerWrap;
