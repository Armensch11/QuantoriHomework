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
  checkBox.addEventListener("change", function () {
    if (this.checked) {
      console.log(this);
      markCompleted(this);
      renderTaskList("pending");
      renderTaskList("completed");
    }
  });
  const todoContent = document.createElement("div");
  todoContent.setAttribute(
    "class",
    "main__container__tasks__pending__list__item__content"
  );
  const todoDesc = document.createElement("p");
  todoDesc.innerHTML = todo?.task;
  const typeAndDate = document.createElement("div");
  const type = document.createElement("div");
  type.innerText = todo?.type;
  const date = document.createElement("div");
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
    renderTaskList("pending");
    renderTaskList("completed");
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
}
export function removeTodo(id) {
  const todos = JSON.parse(localStorage.getItem("todos"));
  const filtered = todos.filter((todo) => todo.id.toString() !== id);
  localStorage.setItem("todos", JSON.stringify(filtered));
}
