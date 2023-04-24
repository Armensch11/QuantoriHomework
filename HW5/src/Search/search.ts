export function search(searchTerm: string, status = "pending") {
  const todos = document.getElementsByClassName(
    "main__container__tasks__pending__list__item__content__title"
  ) as HTMLCollectionOf<HTMLDivElement>;
  const pendingTodos = [...todos]?.filter(
    (task) => task.getAttribute("status") === status
  );
  // console.log(pendingTodos);
  pendingTodos.forEach((el) => {
    // const parent: HTMLElement | null = el.parentElement;
    let grantParent: HTMLElement | null = el.closest(
      ".main__container__tasks__pending__list__item"
    );

    if (
      grantParent &&
      el.innerText.substring(0, searchTerm.length) !== searchTerm
    ) {
      grantParent.style.display = "none";
    } else if (grantParent) {
      grantParent.style.display = "flex";
    }
  });
  // console.log(filteredTodos);
}
