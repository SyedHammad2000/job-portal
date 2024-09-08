import baseURL from "@/helper/baseURL";
import axios from "axios";
import React, { createContext, useState, useEffect, useMemo } from "react";
import Cookies from "js-cookie";

const ApplicationContext = createContext();

const ApplicationProvider = ({ children }) => {
  const [post, setPost] = useState();
  const [postlength, setPostslength] = useState([]);
  const [users, Setuser] = useState();
  const [tokens, Settoken] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token");
    Settoken(token);
    const user = localStorage.getItem("user");
    Setuser(JSON.parse(user));
    const FetchApp = async () => {
      const { data } = await axios.get(
        `${baseURL}/api/application/applications`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPost(data.applications);
      setPostslength(data.applications.length);
      console.log(data.applications);
    };
    FetchApp();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    Cookies.remove("token");
    Settoken(null);
    Setuser(null);
    window.location.reload("/login");
  };

  return (
    <ApplicationContext.Provider
      value={{
        post,
        postlength,
        users,
        tokens,
        Settoken,
        Setuser,
        handleLogout,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export { ApplicationContext, ApplicationProvider };
