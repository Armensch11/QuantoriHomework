export function closeModal() {
  const modalContainer = document.getElementsByClassName("modal__container")[0];
  modalContainer.style.display = "none";
  console.log("modal window closed");
}
export function modalCancelAction() {
  const cancelButton = document.getElementsByClassName(
    "modal__container__inside__buttons__cancel"
  )[0];

  let modalContainer = document.getElementsByClassName("modal__container")[0];

  // cancelButton.onclick = (e) => {
  //   e.preventDefault();
  //   modalContainer.style.display = "none";
  // };
  cancelButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });
  // const modal = document.getElementsByClassName("modal__container__inside")[0];
  // document.addEventListener("click", (e) => {
  //   if (!modal.contains(e.target)) {
  //     modalContainer.style.display = "none";
  //   }
  // });
}
export function showModal() {
  let modalContainer = document.getElementsByClassName("modal__container")[0];
  modalContainer.style.display = "flex";
}
export function hideModal() {
  let modalContainer = document.getElementsByClassName("modal__container")[0];
  modalContainer.style.display = "none";
}
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

export function getTodo() {
  const input = document.getElementsByClassName(
    "modal__container__input__todo"
  )[0].firstChild;

  if (input.value.trim().length > 0) {
    return input.value;
  }
  return null;
}
export function getType() {
  const todoTypes = document.getElementsByClassName(
    "modal__container__input__options__type"
  );
  const selectedType = [...todoTypes].filter(
    (type) => type.getAttribute("selected") === "true"
  );

  return selectedType[0].innerHTML;
}
export function getDueDate() {
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
    console.log("validating ");
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
      document.location.reload(true);
    };
  } else console.log("some entries invalid");
  console.log(todoItem);
}
export async function addTask(todoItem) {
  await fetch("http://localhost:3004/tasks", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(todoItem),
  });

  // console.log(existingTodos);
}

function formatDate(dateString) {
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
  if (monthNow === month) {
    if (monthDate === monthDateNow) {
      return "Today";
    }
    if (monthDate - monthDateNow === 1) {
      return "Tomorrow";
    }
  }
  const formatedDate = `${day}, ${monthDate}  ${month}`;
  return formatedDate;
}
