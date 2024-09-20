import { useQuery } from "@apollo/client";
import { GET_CHATS } from "@/queries/GetChats";

import React from "react";
import { VStack } from "@chakra-ui/react";

const getchats = () => {
  const { loading, error, data } = useQuery(GET_CHATS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error{error.message}</p>;
  console.log(data, "chats");

  return (
    <VStack>
      {data?.chats?.map((item) => (
        <p>{item?.receiverId?.name}</p>
      ))}
    </VStack>
  );
};

export default getchats;
