import { Button, Td, Tr } from "@chakra-ui/react";
import React, { useContext } from "react";
import DeleteToDoButton from "./DeleteToDoButton";
import { ToDoContext } from "../../features/ToDoContext";

export default function ToDoItems({ id, title, status }) {
  let { updateTodo } = useContext(ToDoContext);
  return (
    <>
      <Tr>
        <Td>{id}</Td>
        <Td>{title}</Td>
        <Td
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"10px"}
        >
          {status}{" "}
          <Button onClick={() => updateTodo(id)}>
            Make {status == "In Progress" ? "Completed" : "In Progress"}
          </Button>
        </Td>
        <Td>
          <DeleteToDoButton id={id} />
        </Td>
      </Tr>
    </>
  );
}
