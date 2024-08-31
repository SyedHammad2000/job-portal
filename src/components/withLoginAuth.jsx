import { useRouter } from "next/router";
import React, { useEffect } from "react";

const withLoginAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      if (localStorage.getItem("token")) {
        router.push("/profile");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withLoginAuth;
