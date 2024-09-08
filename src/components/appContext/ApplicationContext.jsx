import baseURL from "@/helper/baseURL";
import axios from "axios";
import React, { createContext, useState, useEffect, useMemo } from "react";

const ApplicationContext = createContext();

const ApplicationProvider = ({ children }) => {
  const [post, setPost] = useState();
  const [postlength, setPostslength] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
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

  return (
    <ApplicationContext.Provider value={{post, postlength}}>
      {children}
    </ApplicationContext.Provider>
  );
};

export { ApplicationContext, ApplicationProvider };
