import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export default function HeadingSection({heading}) {
  return (
    <>
      <Box mb={"20px"}>
        <Heading as={"h1"}>{heading}</Heading>
      </Box>
    </>
  );
}
