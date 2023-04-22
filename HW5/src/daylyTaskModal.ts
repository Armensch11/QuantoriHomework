import { ITodoItem } from "./Interfaces/Interfaces";

export const daylyTaskModal = async (todos: ITodoItem[]) => {
  const body = document.querySelector("body");
  const modalContainer = document.createElement("div");
  modalContainer.setAttribute("class", "modal__container");
  body?.appendChild(modalContainer);
  modalContainer.style.display = "flex";
  const containerInside = document.createElement("div");
  containerInside.setAttribute("class", "modal__container__inside dayly-modal");
  modalContainer.appendChild(containerInside);

  const title = document.createElement("div");
  title.setAttribute("class", "modal__container__inside__title");
  const titleText = document.createElement("h2");
  titleText.innerText = "Good Morning";
  title.appendChild(titleText);
  const todo = document.createElement("div");
  todo.setAttribute("class", "modal__container__input__todo");

  const taskTitlesContainer = document.createElement("div");
  taskTitlesContainer.setAttribute("class", "daylyTask-modal-container");
  getTodaysTasks("daylyTask-modal-container", todos);

  const buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("class", "modal__container__inside__buttons");
  const buttonOk = document.createElement("button");
  buttonOk.setAttribute("class", "modal__container__inside__buttons__add");
  buttonOk.disabled = false;
  buttonOk.style.width = "100%";
  buttonOk.style.backgroundColor = " #3C86F4";

  const addText = document.createElement("h3");
  addText.innerText = "Ok";
  buttonOk.appendChild(addText);
  buttonContainer.appendChild(buttonOk);
  buttonOk.addEventListener("click", (e) => {
    e.preventDefault();
    closeDaylyTaskModal();
  });
  [title, taskTitlesContainer, buttonContainer].forEach((child) =>
    containerInside.appendChild(child)
  );
};

function closeDaylyTaskModal() {
  const daylyTaskModal = document.getElementsByClassName("modal__container")[0];

  daylyTaskModal.remove();
}
export function isShownToday() {
  let isShown = false;
  const now = new Date();
  const date = now.getDate().toString();
  const month = now.toLocaleString(window.navigator.language, {
    month: "long",
  });
  const today = date + month;

  const lastShow: string | null = JSON.parse(
    localStorage.getItem("lastShow") ?? "null"
  );

  lastShow === today
    ? (isShown = true)
    : localStorage.setItem("lastShow", JSON.stringify(today));

  return isShown;
}

async function getTodaysTasks(className: string, todos: ITodoItem[]) {
  const now = new Date();
  const date = now.getDate().toString();
  const month = now.toLocaleString(window.navigator.language, {
    month: "long",
  });
  const today = date + month;
  const todosArr = await todos;
  // const getTodos = await fetch("http://localhost:3004/tasks");
  // const todos = await getTodos.json();
  // const pendingTodos = todos.filter((todo) => todo.status === "pending");

  const todaysTodos = todosArr.filter((todo) => {
    const tododate = todo.date.split(", ")[1]?.split(" ").join("");
    return tododate === today;
  });

  const container = document.getElementsByClassName(className)[0];
  if (todaysTodos.length) {
    const subTitle = document.createElement("span");
    subTitle.innerHTML = "You have the next planned tasks for today: ";
    subTitle.setAttribute("class", "daylyTask-modal__subtitle");
    container.appendChild(subTitle);
    container.insertAdjacentHTML(
      "beforeend",
      todaysTodos
        .map((todo) => `<p class="daylyTask__titles">${todo.task}<p>`)
        .join("\n")
    );
  } else {
    const title = document.createElement("p");
    title.innerHTML = "No Tasks for Today";
    container.appendChild(title);
  }
  // return todaysTodos;
}
