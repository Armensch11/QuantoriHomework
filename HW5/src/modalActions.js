import { popup } from "./popup.js";

export function modalCancelAction() {
  const cancelButton = document.getElementsByClassName(
    "modal__container__inside__buttons__cancel"
  )[0];

  let modalContainer = document.getElementsByClassName("modal__container")[0];

  cancelButton.addEventListener("click", () => {
    modalContainer.remove();
  });
}
export function showModal() {
  let modalContainer = document.getElementsByClassName("modal__container")[0];
  modalContainer.style.display = "flex";
}
// export function hideModal() {
//   let modalContainer = document.getElementsByClassName("modal__container")[0];
//   modalContainer.style.display = "none";
// }
export function checkTodoType(check) {
  const todoTypes = document.getElementsByClassName(
    "modal__container__input__options__type"
  );
  console.log(todoTypes);

  const color = check.target.style.color;
  const typeName = check.target.className.split(" ")[1];
  check.target.style.border = `1px solid ${color}`;
  [...todoTypes].forEach((type) => {
    if (!type.classList.contains(typeName)) {
      type.style.border = "none";
      type.setAttribute("selected", false);
    } else {
      type.setAttribute("selected", true);
    }
  });
}

function getTodo() {
  const input = document.getElementsByClassName(
    "modal__container__input__todo"
  )[0].firstChild;

  if (input.value.trim().length > 0) {
    return input.value;
  }
  return null;
}
function getType() {
  const todoTypes = document.getElementsByClassName(
    "modal__container__input__options__type"
  );
  const selectedType = [...todoTypes]?.filter(
    (type) => type.getAttribute("selected") === "true"
  );

  return selectedType[0]?.innerHTML;
}
function getDueDate() {
  const input = document.getElementsByClassName(
    "modal__container__input__options__date"
  )[0];
  // console.log(input.value);
  return formatDate(input.value);
}
export function validateEntries() {
  const todoItem = {};
  const todo = getTodo();
  const dueDate = getDueDate();
  const todoType = getType();
  const addButton = document.getElementsByClassName(
    "modal__container__inside__buttons__add"
  )[0];

  if (todo && dueDate && todoType) {
    // console.log("validating ");
    todoItem.task = todo;
    todoItem.date = dueDate;
    todoItem.type = todoType;
    todoItem.status = "pending";
    todoItem.id = Math.floor(Math.random() * 10000).toString();
    addButton.disabled = false;
    addButton.style.backgroundColor = "#3C86F4";
    addButton.onclick = (e) => {
      e.preventDefault();

      addTask(todoItem);
      closeModal();
    };
  } else console.log("some entries invalid");
  console.log(todoItem);
}
async function addTask(todoItem) {
  try {
    const saveToRemote = await fetch("http://localhost:3005/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(todoItem),
    });
    popup("Task added");
  } catch (error) {
    popup(error, "error");
    // console.error(error);
  }
}

function formatDate(dateString) {
  if (!dateString) {
    return null;
  }
  const date = new Date(dateString);
  const now = new Date();
  const day = date.toLocaleString(window.navigator.language, {
    weekday: "long",
  });
  const month = date.toLocaleString(window.navigator.language, {
    month: "long",
  });

  const monthNow = now.toLocaleString(window.navigator.language, {
    month: "long",
  });
  const monthDate = date.getDate();
  const monthDateNow = now.getDate();

  const formatedDate = `${day}, ${monthDate}  ${month}`;
  return formatedDate;
}
