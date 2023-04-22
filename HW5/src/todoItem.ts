import { tasksRender } from "./app.js";
import { popup } from "./popup.js";
import { ITodoItem } from "./Interfaces/Interfaces.js";

export function todoItem(todo: ITodoItem) {
  const todoContainer = document.createElement("div");
  todoContainer.setAttribute(
    "class",
    "main__container__tasks__pending__list__item"
  );
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("serial", `${todo?.id}`);
  if (todo.status === "completed") {
    checkBox.checked = true;
  }
  checkBox.addEventListener(
    "change",

    function () {
      this.checked ? markCompleted(this) : notCompleted(this);
      // removeAllChildNodes();
    }
  );

  const todoContent = document.createElement("div");
  todoContent.setAttribute(
    "class",
    "main__container__tasks__pending__list__item__content"
  );

  const todoDesc = document.createElement("div");
  todoDesc.setAttribute(
    "class",
    "main__container__tasks__pending__list__item__content__title"
  );
  todoDesc.setAttribute("status", todo?.status);
  todoDesc.innerHTML = todo?.task;

  const typeAndDate = document.createElement("div");
  typeAndDate.setAttribute(
    "class",
    "main__container__tasks__pending__list__item__content__dateType"
  );

  const type = document.createElement("div");
  type.setAttribute(
    "class",
    "main__container__tasks__pending__list__item__content__type"
  );
  type.setAttribute("class", `${todo.type}`);
  type.innerText = todo?.type;

  const date = document.createElement("div");
  date.setAttribute(
    "class",
    "main__container__tasks__pending__list__item__content__date"
  );
  date.innerText = todo?.date;

  [type, date].forEach((el) => typeAndDate.appendChild(el));

  [todoDesc, typeAndDate].forEach((el) => todoContent.appendChild(el));

  const deleteTodo = document.createElement("div");
  deleteTodo.setAttribute(
    "class",
    "main__container__tasks__pending__list__item__removeIcon"
  );
  deleteTodo.setAttribute("serial", `${todo?.id}`);
  deleteTodo.onclick = () => {
    const id = deleteTodo.getAttribute("serial")!;

    removeTodo(id);

    // removeAllChildNodes();
  };
  const deleteIcon = document.createElement("img");
  deleteIcon.setAttribute("src", "./images/trash_bin.svg");
  deleteIcon.setAttribute("alt", "trash bin icon");
  deleteTodo.appendChild(deleteIcon);
  [checkBox, todoContent, deleteTodo].forEach((el) =>
    todoContainer.appendChild(el)
  );
  return todoContainer;
}

export async function renderTaskList(status: string) {
  const getTodos = await fetch("http://localhost:3005/tasks", {
    method: "GET",
  });
  const todos: ITodoItem[] = await getTodos.json();
  // console.log(todos);
  const filtered = todos.filter((todo: ITodoItem) => todo.status === status);
  const listContainer = document.getElementsByClassName(
    `main__container__tasks__${status}`
  )[0];
  filtered.forEach((todo) => listContainer.appendChild(todoItem(todo)));
  return filtered;
}

export async function markCompleted(object: HTMLDivElement) {
  const idToMark = object.getAttribute("serial");

  const getTodos = await fetch(`http://localhost:3005/tasks`);
  const todos: ITodoItem[] = await getTodos.json();

  // debugger;
  const todoToMark = todos.filter(
    (el) => el.id.toString() === idToMark?.toString()
  );

  const updatedTodo = { ...todoToMark[0], status: "completed" };
  const configPut = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTodo),
  };
  try {
    await fetch(`http://localhost:3005/tasks/${idToMark}`, configPut);
    // debugger;
    // tasksRender();
    popup("marked completed successfully");
  } catch (error) {
    popup(error.message, "error");
  }

  tasksRender();
}

export async function notCompleted(object: HTMLDivElement) {
  const idToMark = object.getAttribute("serial");
  console.log(idToMark?.trim());
  const getTodos = await fetch(`http://localhost:3005/tasks`);
  const todos: ITodoItem[] = await getTodos.json();

  // debugger;
  const todoToMark = todos.filter(
    (el) => el.id.toString() === idToMark?.toString()
  );
  console.log(todoToMark);
  const updatedTodo = { ...todoToMark[0], status: "pending" };
  const configPut = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTodo),
  };
  try {
    await fetch(`http://localhost:3005/tasks/${idToMark}`, configPut);

    popup("marked pending");
  } catch (error) {
    popup(error.message, "error");
  }

  tasksRender();
}
export async function removeTodo(id: string) {
  const config = {
    method: "DELETE",
  };
  try {
    await fetch(`http://localhost:3005/tasks/${id}`, config);
    popup("task deleted successfully");
  } catch (error) {
    popup(error.message, "does not matter");
  }

  tasksRender();
}
