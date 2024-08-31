import { useRouter } from "next/router";
import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const AuthWrapper = (Content) => {
  return (props) => {
    // const navigate = useNavigate();
    const router = useRouter();
    useEffect(() => {
      if (!localStorage.getItem("token")) {
        // redirect to /login
        // navigate("/login");
        router.push("/login");
      }
    }, []);

    return <Content {...props} />;
  };
};

export default AuthWrapper;
