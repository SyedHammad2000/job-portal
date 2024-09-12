import baseURL from "@/helper/baseURL";
import axios from "axios";
import React, { createContext, useState, useEffect, useMemo } from "react";
import Cookies from "js-cookie";

const ApplicationContext = createContext();

const ApplicationProvider = ({ children }) => {
  const [post, setPost] = useState();
  const [app, setApp] = useState();
  const [postlength, setPostslength] = useState([]);
  const [applength, setApplength] = useState([]);
  const [users, Setuser] = useState();
  const [tokens, Settoken] = useState();
  const [totaluser, settotaluser] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token");
    Settoken(token);
    const user = localStorage.getItem("user");
    Setuser(JSON.parse(user));
    const FetchUsers = async () => {
      const { data } = await axios.get(`${baseURL}/api/register`);
      console.log(data, "data");
      settotaluser(data);
    };
    FetchUsers();
  }, []);
  useEffect(() => {
    const tok = Cookies.get("token");
    const FetchApp = async () => {
      const { data } = await axios.get(`${baseURL}/api/receiver/receiver`, {
        headers: {
          Authorization: `Bearer ${tok}`,
        },
      });
      setApp(data.receiver);
      setApplength(data.receiver.length);
      console.log(data.receiver);
    };

    const Fetchapp = async () => {
      const { data } = await axios.get(
        `${baseURL}/api/application/applications`,
        {
          headers: {
            Authorization: `Bearer ${tok}`,
          },
        }
      );
      setPost(data.applications);
      setPostslength(data.applications.length);
    };
    FetchApp();
    Fetchapp();
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
        totaluser,
        app,
        applength,
        setApplength,
        setPostslength,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export { ApplicationContext, ApplicationProvider };
