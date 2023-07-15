import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import HeadingSection from "../components/Heading";
import AddToDoButton from "../components/ToDo/AddToDoButton";
import TodoListing from "../components/ToDo/TodoListing";
import TodoDetails from "../components/ToDo/TodoDetails";
import { ToDoContext } from "../features/ToDoContext";

export default function ToDo() {
  let { totalProject, totalProgress, totalCompleted } = useContext(ToDoContext);
  return (
    <>
      <Box>
        <HeadingSection heading={"Welcome To ToDo Page"} />
        <Box border={"1px solid black"} mb={"20px"}></Box>
        <Box mb={"20px"}>
          <AddToDoButton />
        </Box>
        <Box display={"grid"} gridTemplateColumns={"3fr 1fr"} gap={"20px"}>
          <Box
            bg={"white"}
            borderWidth={"1px"}
            p={"20px"}
            borderRadius={"10px"}
          >
            <TodoListing />
          </Box>
          <Box display={"grid"} gridTemplateColumns={"1fr"} gap={"20px"}>
            <TodoDetails value={totalProject} section={"Total Project"}/>
            <TodoDetails value={totalProgress} section={"Total Progress"}/>
            <TodoDetails value={totalCompleted} section={"Total Completed"}/>
          </Box>
        </Box>
      </Box>
    </>
  );
}
