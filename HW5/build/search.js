export function search(searchTerm, status = "pending") {
    var _a;
    const todos = document.getElementsByClassName("main__container__tasks__pending__list__item__content__title");
    const pendingTodos = (_a = [...todos]) === null || _a === void 0 ? void 0 : _a.filter((task) => task.getAttribute("status") === status);
    // console.log(pendingTodos);
    pendingTodos.forEach((el) => {
        // const parent: HTMLElement | null = el.parentElement;
        let grantParent = el.closest(".main__container__tasks__pending__list__item");
        if (grantParent &&
            el.innerText.substring(0, searchTerm.length) !== searchTerm) {
            grantParent.style.display = "none";
        }
        else if (grantParent) {
            grantParent.style.display = "flex";
        }
    });
    // console.log(filteredTodos);
}
