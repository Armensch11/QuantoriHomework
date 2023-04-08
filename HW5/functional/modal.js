import {
  modalCancelAction,
  checkTodoType,
  getTodo,
  getDueDate,
  validateEntries,
  addTask,
} from "./modalActions.js";

export const modal = () => {
  const body = document.querySelector("body");
  const modalContainer = document.createElement("div");
  modalContainer.setAttribute("class", "modal__container");
  body.appendChild(modalContainer);
  modalContainer.style.display = "flex";
  const containerInside = document.createElement("div");
  containerInside.setAttribute("class", "modal__container__inside");
  modalContainer.appendChild(containerInside);

  const title = document.createElement("div");
  title.setAttribute("class", "modal__container__inside__title");
  const titleText = document.createElement("h2");
  titleText.innerText = "Add New Task";
  title.appendChild(titleText);
  const todo = document.createElement("div");
  todo.setAttribute("class", "modal__container__input__todo");
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.addEventListener("click", () => (input.value = ""));
  input.addEventListener("blur", getTodo);
  todo.appendChild(input);
  const options = document.createElement("div");
  options.setAttribute("class", "modal__container__input__options");
  const optionsTypes = document.createElement("div");
  optionsTypes.setAttribute("class", "modal__container__input__options__type");
  const health = document.createElement("div");
  health.setAttribute("class", "modal__container__input__options__type health");
  health.innerText = "health";
  const work = document.createElement("div");
  work.setAttribute("class", "modal__container__input__options__type work");
  work.innerText = "work";
  const home = document.createElement("div");
  home.setAttribute("class", "modal__container__input__options__type home");
  home.innerText = "home";
  const other = document.createElement("div");
  other.setAttribute("class", "modal__container__input__options__type other");
  other.innerText = "other";
  const optionTypesArr = [health, work, home, other];
  optionTypesArr.forEach((type) => optionsTypes.appendChild(type));
  optionTypesArr.forEach((type) =>
    type.addEventListener("click", (event) => {
      event.preventDefault();
      checkTodoType(event);
    })
  );
  const optionsDate = document.createElement("input");
  optionsDate.setAttribute("type", "date");
  optionsDate.setAttribute("class", "modal__container__input__options__date");
  optionsDate.addEventListener("blur", () => {
    getDueDate();
    validateEntries();
  });
  options.appendChild(optionsTypes);
  options.appendChild(optionsDate);
  const buttons = document.createElement("div");
  buttons.setAttribute("class", "modal__container__inside__buttons");
  const buttonCancel = document.createElement("button");
  buttonCancel.setAttribute(
    "class",
    "modal__container__inside__buttons__cancel"
  );
  const cancelText = document.createElement("h3");
  cancelText.innerText = "Cancel";
  buttonCancel.appendChild(cancelText);
  const buttonAdd = document.createElement("button");
  buttonAdd.setAttribute("class", "modal__container__inside__buttons__add");
  buttonAdd.disabled = true;

  const addText = document.createElement("h3");
  addText.innerText = "Add task";
  buttonAdd.appendChild(addText);
  buttons.appendChild(buttonCancel);
  buttons.appendChild(buttonAdd);
  const insideNodes = [title, todo, options, buttons];
  insideNodes.forEach((child) => containerInside.appendChild(child));

  modalCancelAction();
};

// modal();
