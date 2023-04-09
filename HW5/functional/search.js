export function search(searchTerm, status = "pending") {
  const todos = document.getElementsByClassName(
    "main__container__tasks__pending__list__item__content__title"
  );
  const pendingTodos = [...todos].filter(
    (task) => task.getAttribute("status") === status
  );
  // console.log(pendingTodos);
  const filteredTodos = pendingTodos.filter((el) => {
    if (el.innerText.substring(0, searchTerm.length) !== searchTerm) {
      el.parentElement.parentElement.style.display = "none";
    } else {
      el.parentElement.parentElement.style.display = "flex";
    }
  });
  // console.log(filteredTodos);
}
