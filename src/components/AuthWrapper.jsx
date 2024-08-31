import { useRouter } from "next/router";
import React, { useEffect } from "react";

const AuthWrapper = (Content) => {
  return (props) => {
    const router = useRouter();
    useEffect(() => {
      if (!localStorage.getItem("token")) {
        router.push("/login");
      }
    }, [router]);

    return <Content {...props} />;
  };
};

export default AuthWrapper;
