import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { GoProjectRoadmap } from "react-icons/go";

export default function TodoDetails({value, section}) {
  return (
    <>
      <Box
        borderWidth={"1px"}
        bg={"white"}
        h={"100px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={"10px 20px"}
      >
        <Box>
          <Heading>{value}</Heading>
          <Text fontSize={"20px"} color={"gray"} fontWeight={"bold"}>
           {section}
          </Text>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <GoProjectRoadmap fontSize={"45px"} color="gray"/>
        </Box>
      </Box>
    </>
  );
}
