import { useRouter } from "next/router";
import React, { useEffect } from "react";

const LoginProtectedRoute = (Content) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      if (localStorage.getItem("token")) {
        router.push("/profile");
      }
    }, []);

    return <Content {...props} />;
  };
};

export default LoginProtectedRoute;
