import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import HeadingSection from "../components/Heading";

export default function About() {
  return (
    <>
      <Box>
        <HeadingSection heading={"Welcome To About Page"} />
        <Box
          // border={"1px solid black"}
          w={"90%"}
          m={"auto"}
        >
          <Text color={"#50A7D9"} fontSize={"2rem"} fontWeight={"bold"}>
            Project Name: Ambula - Seamless Organization and Shopping
          </Text>
          <Heading color={"#0BC5EA"} mt={"1.2rem"} textDecoration={"underline"}>
            Project Description:
          </Heading>
          <Text color={"#50A7D9"} fontSize={"1.5rem"}>
            Ambula is an ambitious project that aims to revolutionize the way
            people manage tasks and shop for their everyday needs. The project
            focuses on developing an intuitive and user-friendly platform that
            seamlessly integrates a comprehensive To-Do List feature with a
            diverse range of products for shopping.
          </Text>

          <Heading color={"#0BC5EA"} mt={"1.2rem"} textDecoration={"underline"}>
            Key Features:
          </Heading>
          <Text color={"#50A7D9"} fontSize={"1.5rem"}>
            1. Intuitive To-Do List: A user-friendly interface allows users to
            effortlessly create, prioritize, and track tasks, enabling efficient
            task management.
          </Text>
          <Text color={"#50A7D9"} fontSize={"1.5rem"}>
            2. Seamless Shopping Experience: The platform offers a wide range of
            products, allowing users to explore and add items to their cart with
            ease.
          </Text>
          <Text color={"#50A7D9"} fontSize={"1.5rem"}>
            3. Secure checkout and swift delivery ensure a hassle-free shopping
            experience.
          </Text>
          <Text color={"#50A7D9"} fontSize={"1.5rem"}>
            4. Simplicity and Efficiency: The project prioritizes simplicity and
            efficiency, saving users valuable time and effort in organizing
            tasks and completing their shopping needs.
          </Text>
          <Text color={"#50A7D9"} fontSize={"1.5rem"}>
            5. Community Engagement: The platform fosters a community of
            like-minded individuals, enabling users to connect, share insights,
            and optimize productivity through exchange of tips, ideas, and
            strategies.
          </Text>

          <Heading color={"#0BC5EA"} mt={"1.2rem"} textDecoration={"underline"}>
            Project Goals:
          </Heading>
          <Text color={"#50A7D9"} fontSize={"1.5rem"}>
            1. Develop a user-friendly interface with an intuitive To-Do List
            feature that simplifies task management.
          </Text>
          <Text color={"#50A7D9"} fontSize={"1.5rem"}>
            2. Curate a diverse product range and establish secure checkout and
            delivery mechanisms for a seamless shopping experience.
          </Text>
          <Text color={"#50A7D9"} fontSize={"1.5rem"}>
            3. Ensure simplicity and efficiency in the platform's design,
            allowing users to save time and effort.
          </Text>
          <Text color={"#50A7D9"} fontSize={"1.5rem"}>
            4. Build an engaged community of users who can connect, learn from
            each other, and enhance their productivity.
          </Text>
        </Box>
      </Box>
    </>
  );
}