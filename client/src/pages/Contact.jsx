import { Box } from "@chakra-ui/react";
import React from "react";
import HeadingSection from "../components/Heading";

export default function Contact() {
  return (
    <>
      <Box>
        <HeadingSection heading={"Welcome To Contact Page"} />
        <Box border={"1px solid black"}></Box>
      </Box>
    </>
  );
}
