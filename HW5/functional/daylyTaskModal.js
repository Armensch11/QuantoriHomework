export const daylyTaskModal = () => {
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
  titleText.innerText = "Good Morning";
  title.appendChild(titleText);
  const todo = document.createElement("div");
  todo.setAttribute("class", "modal__container__input__todo");

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
  [title, buttonContainer].forEach((child) =>
    containerInside.appendChild(child)
  );
  isShownToday();
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

  const lastShow = JSON.parse(localStorage.getItem("lastShow"));

  lastShow === today
    ? (isShown = true)
    : localStorage.setItem("lastShow", JSON.stringify(today));

  return isShown;
}
