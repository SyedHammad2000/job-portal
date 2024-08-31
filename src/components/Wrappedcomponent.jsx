import { useRouter } from "next/router";
import React, { useEffect } from "react";

const withLoginAuth = (Wrappedcomponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      if (localStorage.getItem("token")) {
        router.push("/profile");
      }
    }, [router]);

    return <Wrappedcomponent {...props} />;
  };
};

export default withLoginAuth;
