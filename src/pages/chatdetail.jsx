import baseURL from "@/helper/baseURL";
import {
  Badge,
  Box,
  Button,
  Container,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState, useContext } from "react";
import nookies from "nookies";
import { ApplicationContext } from "@/components/appContext/ApplicationContext";
const Chat = ({ alluser }) => {
  // const [user, setUser] = useState();
  const [data, setdata] = useState();
  const [filter, setFilter] = useState([]);
  const router = useRouter();
  const { loading, setLoading } = useContext(ApplicationContext);
  console.log(alluser, "ALL");
  console.log(data, "Data");

  useEffect(() => {
    const userrr = JSON.parse(localStorage.getItem("user"));
    setdata(userrr);

    const filterDta = alluser?.chats?.filter((item) => {
      return (
        item?.receiverId?._id === data?._id || item?.senderId?._id === data?._id
      );
    });

    setFilter(filterDta);

    console.log(filter, "filter");
  }, [alluser, data?._id]);

  return (
    <Container minH={"100vh"} minW={"100%"} h={"100%"} p={2}>
      <VStack spacing={4}>
        {filter?.map((chat, index) => (
          <>
            {chat ? (
              <Box key={index}>
                <Button
                  key={index}
                  onClick={() => {
                    router.push(
                      `/chat/${
                        chat.receiverId._id === data?._id
                          ? chat.senderId._id
                          : chat.receiverId._id
                      }`
                    );
                  }}
                >
                  <Badge
                    colorScheme={chat.messages?.length > 0 ? "green" : "red"}
                    fontSize={"lg"}
                    fontWeight={"bold"}
                    pos={"absolute"}
                    top={-2}
                    right={0}
                    zIndex={1}
                    borderRadius={"full"}
                    key={index}
                  >
                    {chat.messages?.length}
                  </Badge>
                  Message from
                  <br />
                  {chat.receiverId.name === data?.name
                    ? chat.senderId.name
                    : chat.receiverId.name}
                </Button>
              </Box>
            ) : (
              <></>
            )}
          </>
        ))}
      </VStack>
    </Container>
  );
};

export default Chat;

export const getServerSideProps = async (ctx) => {
  const cookies = await nookies.get(ctx);
  if (!cookies.token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const res = await axios.get(`${baseURL}/api/recei`, {
    headers: {
      Authorization: `Bearer ${cookies.token}`,
    },
  });

  if (!res?.data) {
    return {
      notFound: true,
    };
  }

  console.log(res?.data, "data");

  console.log(res?.data, "data");
  return {
    props: {
      alluser: res?.data,
    },
  };
};
