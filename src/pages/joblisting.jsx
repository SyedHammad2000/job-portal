import { ApplicationContext } from "@/components/appContext/ApplicationContext";
import baseURL from "@/helper/baseURL";
import { Search2Icon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/react";

const Joblisting = () => {
  const router = useRouter();
  const { jobs, setjobs, loading, setLoading } = useContext(ApplicationContext);
  const [filters, setFilter] = useState();
  const [searchTerm, setsearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const data = await axios.get(`${baseURL}/api/job`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setjobs(data.data);
      setLoading(false);
    };
    fetch();
  }, []);
  const filterData = (e) => {
    const filtereddata = jobs?.posts.filter((item) => {
      const itemDate = new Date(item.createdAt.slice("0", "10"));

      const matchsearch = item?.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchDate =
        (!startDate || itemDate >= new Date(startDate)) &&
        (!endDate || itemDate <= new Date(endDate));

      return matchsearch && matchDate;
    });

    setFilter(filtereddata);
  };

  useEffect(() => {
    filterData();
  }, [searchTerm, jobs, endDate, startDate]);

  console.log(jobs);
  const MotionBox = motion(Box);
  return (
    <>
      <Box pt={2} pl={2} pr={2} gap={3} display={["","", "flex"]}>
        <FormControl display={"flex"}>
          <IconButton
            icon={<SearchIcon />}
            onClick={onToggle}
            bg="lightblue"
            rounded="none"
            size="md"
          />
          <Input
            rounded={"none"}
            width={isOpen ? ["100%", "15rem"] : "0"}
            transition="all 0.5s ease-in"
            border="none"
            type="text"
            placeholder={"Search Jobs"}
            value={searchTerm}
            onChange={(e) => setsearch(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Start Date</FormLabel>
          <Input
            width={"12rem"}
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>End Date</FormLabel>
          <Input
            width={"12rem"}
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </FormControl>
      </Box>
      <HStack
        backgroundColor={"white"}
        maxW={"100vw"}
        height="100%"
        minH={"100vh"}
        p={5}
        wrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {jobs?.posts ? (
          <>
            {filters?.map((post) => {
              return (
                <MotionBox
                  initial={{
                    x: -100,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  key={post._id}
                  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  margin="10px"
                  borderRadius="5px"
                  height={"100%"}
                  width={["20rem", "15rem", "20rem", "20rem"]}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  p={5}
                  gap={2}
                  bg={"cornslik"}
                  color={"black"}
                >
                  <Heading size="md" textAlign={"center"}>
                    {post.title}
                  </Heading>
                  <Text>{post.company}</Text>
                  <Heading size={"sm"}>PostBy:{post.postedBy.name}</Heading>
                  <Button
                    colorScheme={"blue"}
                    p={2}
                    variant={"solid"}
                    outlineColor={"black"}
                    onClick={() =>
                      router.push(`${baseURL}/jobdetail/${post._id}`)
                    }
                  >
                    View Details
                  </Button>
                  <Text
                    fontSize={"10px"}
                    color={"black"}
                    textAlign={"center"}
                    fontWeight={"bold"}
                  >
                    {post.createdAt.slice("0", "10")}
                  </Text>
                </MotionBox>
              );
            })}
          </>
        ) : (
          <Heading
            size={"lg"}
            background={"darkcyan"}
            color={"white"}
            p={3}
            borderRadius={"5px"}
            boxShadow={
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            }
            _hover={{
              background: "red",
            }}
          >
            {loading ? <Spinner /> : "No Jobs Available"}
          </Heading>
        )}
      </HStack>
    </>
  );
};

export default Joblisting;
