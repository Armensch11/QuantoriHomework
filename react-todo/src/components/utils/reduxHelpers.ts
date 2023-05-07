import { ITodoItem } from "../../Interfaces/Interfaces";

export const fetchTodosFromServer = async () => {
  const fetchTodos = await fetch("http://localhost:3005/tasks", {
    method: "GET",
  });
  const todos: ITodoItem[] = await fetchTodos.json();
  return todos;
};

export const postTodoToServer = async (todo: ITodoItem) => {
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

export const changeTodoStatus = async (todo: ITodoItem) => {
  todo.status === "pending"
    ? (todo.status = "completed")
    : (todo.status = "pending");

  const patchConfig = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  };
  try {
    const response = await fetch(
      `http://localhost:3005/tasks/${todo.id}`,
      patchConfig
    );
    const markedTodo: ITodoItem = await response.json();
    return markedTodo;
  } catch (error: any) {
    console.error(error.message);
  }
};

export const deleteTodoInServer = async (id: string) => {
  const deleteConfig = { method: "DELETE" };
  try {
    await fetch(`http://localhost:3005/tasks/${id}`, deleteConfig);

    return id;
  } catch (error: any) {
    console.error(error.message);
  }
};
