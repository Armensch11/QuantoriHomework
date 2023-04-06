export function modalCancelAction() {
  const cancelButton = document.getElementsByClassName(
    "modal__container__inside__buttons__cancel"
  )[0];

  let modalContainer = document.getElementsByClassName("modal__container")[0];

  cancelButton.onclick = (e) => {
    e.preventDefault();
    modalContainer.style.display = "none";
  };
  const modal = document.getElementsByClassName("modal__container__inside")[0];
  document.addEventListener("click", (e) => {
    if (!modal.contains(e.target)) {
      modalContainer.style.display = "none";
    }
  });
}
export function checkTodoType(check) {
  const allTypes = document.getElementsByClassName(
    "modal__container__input__options__type"
  );
  const todoTypes = [...allTypes];

  const color = check.target.style.color;
  const typeName = check.target.className.split(" ")[1];
  check.target.style.border = `1px solid ${color}`;
  todoTypes.forEach((type) => {
    if (!type.classList.contains(typeName)) {
      type.style.border = "none";
      type.setAttribute("selected", false);
    } else {
      type.setAttribute("selected", true);
    }
  });
  console.log(todoTypes);
}
