import React, { useContext } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import ToDoItems from "./ToDoItems";
import { ToDoContext } from "../../features/ToDoContext";
export default function TodoListing() {
  let { todo } = useContext(ToDoContext);
  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Title</Th>
              <Th>Status</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {todo?.map((ele) => {
              return <ToDoItems {...ele} />;
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
