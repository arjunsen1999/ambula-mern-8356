import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import HeadingSection from "../components/Heading";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import notification from "../Toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    feedback: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    notification("success", "Thank you for your feedback")
    setFormData({
      name: "",
      feedback: "",
    });
  };
  return (
    <>
      <Box>
        <HeadingSection heading={"Welcome To Contact Page"} />
        <Box border={"1px solid black"} mb={"20px"}></Box>
        <Box p={"20px"} bg={"white"} borderWidth={"1px"}>
          <form action="">
            <FormControl isRequired mb={"30px"}>
              <FormLabel>Name</FormLabel>
              <Input
                value={formData.name}
                onChange={handleChange}
                name="name"
                placeholder="Enter name"
              />
            </FormControl>

            <FormControl isRequired mb={"30px"}>
              <FormLabel>Feedback</FormLabel>
              <Textarea
                value={formData.feedback}
                onChange={handleChange}
                name="feedback"
                placeholder="Enter Your Feedback"
              />
            </FormControl>

            <Button type="submit" colorScheme="teal" onClick={handleSubmit}>
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}
