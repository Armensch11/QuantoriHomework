import { Dispatch, SetStateAction } from "react";
import { ITodoItem } from "../../Interfaces/Interfaces";
import { dbPut } from "./dbPut";
export const getTodos = async (
  todoSetter: Dispatch<SetStateAction<ITodoItem[] | []>>
) => {
  const fetchTodos = await fetch("http://localhost:3005/tasks", {
    method: "GET",
  });
  const todos: ITodoItem[] = await fetchTodos.json();

  todos.length ? todoSetter([...todos]) : todoSetter([]);
};

export const addTodos = async (
  todoSetter: Dispatch<SetStateAction<ITodoItem[] | []>>,
  newTodo: ITodoItem
) => {
  const fetchConfig = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  };
  try {
    await fetch("http://localhost:3005/tasks", fetchConfig);
  } catch (error: any) {
    console.error(error.message);
  }

  todoSetter((prevState) => [...prevState, newTodo]);
};

export const deleteTodos = async (
  todoSetter: Dispatch<SetStateAction<ITodoItem[] | []>>,
  id: number
) => {
  const fetchConfig = { method: "DELETE" };
  try {
    await fetch(`http://localhost:3005/tasks/${id}`, fetchConfig);
  } catch (error: any) {
    console.error(error.message);
  }
  todoSetter((prevState) => [...prevState.filter((el) => +el.id !== id)]);
};

export const markTodos = async (
  todoSetter: Dispatch<SetStateAction<ITodoItem[] | []>>,
  todos: ITodoItem[] | [],
  id: number,
  checked: boolean | null
) => {
  const updatedTodos = [...todos];
  let updatedTodo = <ITodoItem>{};
  updatedTodos.forEach((todo) => {
    if (todo.id === id.toString()) {
      checked ? (todo.status = "completed") : (todo.status = "pending");
      updatedTodo = todo;
    }
  });

  todoSetter(updatedTodos);

  await dbPut(id.toString(), updatedTodo);

  return updatedTodos;
};
