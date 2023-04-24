import { modal } from "./Modals/modal";
import { showModal } from "./Modals/modalActions";
import { renderTaskList } from "./Todo/todoItem";
import { search } from "./Search/search";
import { weatherWidget } from "./Widgets/weatherWidget";
import { daylyTaskModal, isShownToday } from "./Modals/daylyTaskModal";

export function tasksRender() {
  const body = document.querySelector("body");

  const main = document.createElement("section");
  main.setAttribute("class", "main__container");
  body?.appendChild(main);

  const header = document.createElement("header");
  header.setAttribute("class", "header");
  const title = document.createElement("span");
  title.innerHTML = "To Do List";
  header.appendChild(title);

  const searchContainer = document.createElement("div");
  searchContainer.setAttribute("class", "main__container__searchbar");
  const searchField = document.createElement("input");
  searchField.setAttribute("type", "search");
  searchField.setAttribute("class", "main__container__searchfield");
  searchField.setAttribute("placeholder", "Search Task");

  searchField.addEventListener("keyup", (event: KeyboardEvent) => {
    search((event.target as HTMLInputElement).value);
  });

  const newTaskButton = document.createElement("button");
  newTaskButton.setAttribute("class", "main__container__newTask");
  newTaskButton.innerText = "+ New Task";
  newTaskButton.addEventListener("click", () => {
    modal();
    showModal();
  });

  [searchField, newTaskButton].forEach((el) => searchContainer.appendChild(el));

  const tasksContainer = document.createElement("div");
  tasksContainer.setAttribute("class", "main__container__tasks");

  const pendingTasks = document.createElement("div");
  pendingTasks.setAttribute("class", "main__container__tasks__pending");
  const pendingTitle = document.createElement("p");
  pendingTitle.innerText = "All Tasks";
  pendingTasks.appendChild(pendingTitle);
  // pendingTasks.appendChild(todoItem());

  const completedTasks = document.createElement("div");
  completedTasks.setAttribute("class", "main__container__tasks__completed");
  const completedTitle = document.createElement("p");
  completedTitle.innerText = "Completed Tasks";
  completedTasks.appendChild(completedTitle);
  [pendingTasks, completedTasks].forEach((el) =>
    tasksContainer.appendChild(el)
  );

  [header, searchContainer, tasksContainer].forEach((el) =>
    main.appendChild(el)
  );

  const pendingTodos = renderTaskList("pending");
  renderTaskList("completed");

  !isShownToday() ? setTimeout(() => daylyTaskModal(pendingTodos), 1500) : null;
}

tasksRender();

weatherWidget();
