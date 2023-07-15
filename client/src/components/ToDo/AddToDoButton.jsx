import React, { useContext, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Text
} from "@chakra-ui/react";
import { ToDoContext } from "../../features/ToDoContext";

export default function AddToDoButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [title, setTitle] = useState("");
  let { addTodo } = useContext(ToDoContext);

  const handleClick = () =>{
    if(!title){
      return;
    }
    const data = {
      title,
      id : Date.now(),
      status : "In Progress",
    }
    addTodo(data)
  }
  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Add ToDo
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add ToDo</DrawerHeader>

          <DrawerBody>
            <Text>Title</Text>
            <Input placeholder="Type here..." value={title} onChange={(event) => setTitle(event.target.value)} />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="teal" onClick={handleClick}>Add</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
