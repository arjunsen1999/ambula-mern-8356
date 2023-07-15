import { createContext, useState } from "react";
import notification from "../Toast";

export const ToDoContext = createContext();

export function ToDoContextProvider({ children }) {
  const ToDoData = JSON.parse(localStorage.getItem("ToDo")) || [];
  const [todo, setToDo] = useState(ToDoData);
  const initialProject = todo?.length || 0;
  const initialProgress =
    todo?.filter((ele) => {
      return ele.status == "In Progress";
    })?.length || 0;
  const initialCompleted =
    todo?.filter((ele) => {
      return ele.status == "Completed";
    })?.length || 0;

  const [totalProject, setTotalProject] = useState(initialProject);
  const [totalProgress, setTotalProgress] = useState(initialProgress);
  const [totalCompleted, setTotalCompleted] = useState(initialCompleted);

  const updateProjectDetails = () => {
    const todo = JSON.parse(localStorage.getItem("ToDo")) || [];
    const initialProject = todo?.length || 0;
    const initialProgress =
      todo?.filter((ele) => {
        return ele.status == "In Progress";
      })?.length || 0;
    const initialCompleted =
      todo?.filter((ele) => {
        return ele.status == "Completed";
      })?.length || 0;
    setTotalProject(initialProject);
    setTotalProgress(initialProgress);
    setTotalCompleted(initialCompleted);
  };

  const addTodo = (data) => {
    let ToDoData = JSON.parse(localStorage.getItem("ToDo")) || [];
    ToDoData.push(data);
    localStorage.setItem("ToDo", JSON.stringify(ToDoData));
    let newData = JSON.parse(localStorage.getItem("ToDo")) || [];
    setToDo(newData);
    updateProjectDetails();
    notification("success", "Added Successfully")
  };

  const updateTodo = (id) => {
    let ToDoData = JSON.parse(localStorage.getItem("ToDo")) || [];
    ToDoData?.forEach((ele) => {
      if (ele.id == id) {
        if (ele.status === "In Progress") {
          ele.status = "Completed";
        } else {
          ele.status = "In Progress";
        }
      }
    });
    localStorage.setItem("ToDo", JSON.stringify(ToDoData));
    let newData = JSON.parse(localStorage.getItem("ToDo")) || [];
    setToDo(newData);
    updateProjectDetails();
  };

  const deleteTodo = (id) => {
    let ToDoData = JSON.parse(localStorage.getItem("ToDo")) || [];
    let newData = ToDoData.filter((ele) => {
      return ele.id !== id;
    });
    localStorage.setItem("ToDo", JSON.stringify(newData));
    setToDo(newData);
    updateProjectDetails();
    notification("success", "Deleted Successfully")
  };

  return (
    <ToDoContext.Provider
      value={{
        todo,
        addTodo,
        updateTodo,
        deleteTodo,
        totalProject,
        totalProgress,
        totalCompleted,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}
