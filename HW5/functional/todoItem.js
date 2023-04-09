import { tasksRender } from "./app.js";
export function todoItem(todo) {
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
      // if (this.checked) {
      //   markCompleted(this);
      // } else {
      //   notCompleted(this);
      // }
      this.checked ? markCompleted(this) : notCompleted(this);
      removeAllChildNodes();
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
    const id = deleteTodo.getAttribute("serial");
    removeTodo(id);

    removeAllChildNodes();
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

export function renderTaskList(status) {
  const todos = JSON.parse(localStorage.getItem("todos"));
  const filtered = todos.filter((todo) => todo.status === status);
  const listContainer = document.getElementsByClassName(
    `main__container__tasks__${status}`
  )[0];
  filtered.forEach((todo) => listContainer.appendChild(todoItem(todo)));
}
export function markCompleted(object) {
  const idToMark = object.getAttribute("serial");
  console.log(idToMark.trim());

  const todos = JSON.parse(localStorage.getItem("todos"));
  todos.forEach((todo) => {
    console.log(todo.id);
    if (todo.id.toString() === idToMark) {
      todo.status = "completed";
      console.log(todo);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
  removeBodyChildren();

  tasksRender();
  document.location.reload(true);
}
export function notCompleted(object) {
  const idToMark = object.getAttribute("serial");
  console.log(idToMark.trim());

  const todos = JSON.parse(localStorage.getItem("todos"));
  todos.forEach((todo) => {
    console.log(todo.id);
    if (todo.id.toString() === idToMark) {
      todo.status = "pending";
      console.log(todo);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
  removeBodyChildren();

  tasksRender();
  document.location.reload(true);
}
export function removeTodo(id) {
  const todos = JSON.parse(localStorage.getItem("todos"));
  const filtered = todos.filter((todo) => todo.id.toString() !== id);
  localStorage.setItem("todos", JSON.stringify(filtered));
  removeBodyChildren();

  tasksRender();
  document.location.reload(true);
}
export function removeAllChildNodes() {
  const pendingContainer = document.getElementsByClassName(
    "main__container__tasks__pending"
  )[0];
  const completedContainer = document.getElementsByClassName(
    "main__container__tasks__completed"
  )[0];
  while (pendingContainer.firstChild) {
    pendingContainer.removeChild(pendingContainer.lastChild);
  }
  while (completedContainer.firstChild) {
    completedContainer.removeChild(completedContainer.lastChild);
  }
}
export function removeBodyChildren() {
  const body = document.getElementsByTagName("body");
  // console.log(body);
  // const main = document.getElementsByClassName("main__container")[0];
  // const modal = document.getElementsByClassName("modal__container")[0];
  // [main, modal].forEach((el) => body.removeChild(el));
  while (body.firstChild) {
    body.removeChild(body.lastChild);
  }
}