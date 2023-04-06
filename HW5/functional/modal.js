const modal = () => {
  const body = document.querySelector("body");
  const modalContainer = document.createElement("div");
  modalContainer.setAttribute("class", "modal__container");
  body.appendChild(modalContainer);

  const containerInside = document.createElement("div");
  containerInside.setAttribute("class", "modal__container__inside");
  modalContainer.appendChild(containerInside);

  const title = document.createElement("div");
  title.setAttribute("class", "modal__container__inside__title");
  title.appendChild((document.createElement("h2").innerText = "Add New Task"));
  const todo = document.createElement("div");
  todo.setAttribute("class", "modal__container__input__todo");
  const input = document.createElement("input").setAttribute("type", "text");
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
  const optionsDate = document
    .createElement("input")
    .setAttribute("type", "date");
  optionsDate.setAttribute("class", "modal__container__input__options__date");
  options.appendChild(optionsTypes);
  options.appendChild(optionsDate);
  const buttons = document.createElement("div");
  buttons.setAttribute("class", "modal__container__input__buttons");
  const buttonCancel = document.createElement("button");
  const cancelText = document.createElement("h2");
  cancelText.innerText = "Cancel";
  buttonCancel.appendChild(cancelText);
  const buttonAdd = document.createElement("button");
  const addText = document.createElement("h2");
  addText.innerText = "Add task";
  buttonAdd.appendChild(addText);
  const insideNodes = [title, todo, options, buttons];
  insideNodes.forEach((child) => containerInside.appendChild(child));
};
