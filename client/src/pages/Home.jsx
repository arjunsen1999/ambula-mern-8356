import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import HeadingSection from "../components/Heading";
import Type from "../components/Type";

export default function Home() {
  return (
    <>
      <Box>
        <HeadingSection heading={<Type />} />
        <Box
          // border={"1px solid black"}
          w={"80%"}
          m={"auto"}
        >
          <Text color={"#50A7D9"} fontSize={"1.9rem"}>
            Stay organized effortlessly with our intuitive To-Do List feature,
            managing tasks with ease. Our user-friendly interface ensures a
            seamless shopping experience with a wide range of products to
            explore. Add items to your cart, securely check out, and enjoy swift
            delivery. Our platform is designed for simplicity and efficiency,
            saving you time and effort. Join our community of users, connect
            with like-minded individuals, and optimize your productivity.
            Discover the convenience of our To-Do List and the joy of
            hassle-free shopping. Welcome to Ambula, where organization and
            shopping meet seamlessly !!!
          </Text>
          
           </Box>
      </Box>
    </>
  );
}