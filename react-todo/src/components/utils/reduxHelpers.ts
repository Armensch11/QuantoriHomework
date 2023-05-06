import { ITodoItem } from "../../Interfaces/Interfaces";

export const fetchTodosFromServer = async () => {
  const fetchTodos = await fetch("http://localhost:3005/tasks", {
    method: "GET",
  });
  const todos: ITodoItem[] = await fetchTodos.json();
  return todos;
};

export const postTodo = async (todo: ITodoItem) => {
  const postConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  };

  try {
    const response = await fetch(`http://localhost:3005/tasks/`, postConfig);
    const postedTodo: ITodoItem = await response.json();
    return postedTodo;
  } catch (error: any) {
    console.error(error.message);
  }
};

export const updateTodo = async (id: string, todo: ITodoItem) => {
  const patchConfig = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  };
  try {
    const response = await fetch(
      `http://localhost:3005/tasks/${id}`,
      patchConfig
    );
    return response.json();
  } catch (error: any) {
    console.error(error.message);
  }
};
