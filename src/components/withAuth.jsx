import { useRouter } from "next/router";
import React, { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    useEffect(() => {
      if (!localStorage.getItem("token")) {
        router.push("/login");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
