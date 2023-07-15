import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export default function HeadingSection({heading}) {
  return (
    <>
      <Box mb={"20px"}>
        <Heading fontSize={"4rem"} textAlign={"center"} color={"#0BC5EA"} >{heading}</Heading>
      </Box>
    </>
  );
}