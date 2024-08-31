import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
const withEmployerAuth = (WrappedComponent) => {
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

    return <WrappedComponent {...props} />;
  };
};

export default withEmployerAuth;
