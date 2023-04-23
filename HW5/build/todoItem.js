var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { tasksRender } from "./app.js";
import { popup } from "./popup.js";
function todoItem(todo) {
    const todoContainer = document.createElement("div");
    todoContainer.setAttribute("class", "main__container__tasks__pending__list__item");
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("serial", `${todo === null || todo === void 0 ? void 0 : todo.id}`);
    if (todo.status === "completed") {
        checkBox.checked = true;
    }
    checkBox.addEventListener("change", function () {
        this.checked ? markCompleted(this) : notCompleted(this);
        // removeAllChildNodes();
    });
    const todoContent = document.createElement("div");
    todoContent.setAttribute("class", "main__container__tasks__pending__list__item__content");
    const todoDesc = document.createElement("div");
    todoDesc.setAttribute("class", "main__container__tasks__pending__list__item__content__title");
    todoDesc.setAttribute("status", todo === null || todo === void 0 ? void 0 : todo.status);
    todoDesc.innerHTML = todo === null || todo === void 0 ? void 0 : todo.task;
    const typeAndDate = document.createElement("div");
    typeAndDate.setAttribute("class", "main__container__tasks__pending__list__item__content__dateType");
    const type = document.createElement("div");
    type.setAttribute("class", "main__container__tasks__pending__list__item__content__type");
    type.setAttribute("class", `${todo.type}`);
    type.innerText = todo === null || todo === void 0 ? void 0 : todo.type;
    const date = document.createElement("div");
    date.setAttribute("class", "main__container__tasks__pending__list__item__content__date");
    date.innerText = todo === null || todo === void 0 ? void 0 : todo.date;
    [type, date].forEach((el) => typeAndDate.appendChild(el));
    [todoDesc, typeAndDate].forEach((el) => todoContent.appendChild(el));
    const deleteTodo = document.createElement("div");
    deleteTodo.setAttribute("class", "main__container__tasks__pending__list__item__removeIcon");
    deleteTodo.setAttribute("serial", `${todo === null || todo === void 0 ? void 0 : todo.id}`);
    deleteTodo.onclick = () => {
        const id = deleteTodo.getAttribute("serial");
        removeTodo(id);
        // removeAllChildNodes();
    };
    const deleteIcon = document.createElement("img");
    deleteIcon.setAttribute("src", "./images/trash_bin.svg");
    deleteIcon.setAttribute("alt", "trash bin icon");
    deleteTodo.appendChild(deleteIcon);
    [checkBox, todoContent, deleteTodo].forEach((el) => todoContainer.appendChild(el));
    return todoContainer;
}
export function renderTaskList(status) {
    return __awaiter(this, void 0, void 0, function* () {
        const getTodos = yield fetch("http://localhost:3005/tasks", {
            method: "GET",
        });
        const todos = yield getTodos.json();
        // console.log(todos);
        const filtered = todos.filter((todo) => todo.status === status);
        const listContainer = document.getElementsByClassName(`main__container__tasks__${status}`)[0];
        filtered.forEach((todo) => listContainer.appendChild(todoItem(todo)));
        return filtered;
    });
}
export function markCompleted(object) {
    return __awaiter(this, void 0, void 0, function* () {
        const idToMark = object.getAttribute("serial");
        const getTodos = yield fetch(`http://localhost:3005/tasks`);
        const todos = yield getTodos.json();
        // debugger;
        const todoToMark = todos.filter((el) => el.id.toString() === (idToMark === null || idToMark === void 0 ? void 0 : idToMark.toString()));
        const updatedTodo = Object.assign(Object.assign({}, todoToMark[0]), { status: "completed" });
        const configPut = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTodo),
        };
        try {
            yield fetch(`http://localhost:3005/tasks/${idToMark}`, configPut);
            // debugger;
            // tasksRender();
            popup("marked completed successfully");
        }
        catch (error) {
            let message;
            if (error instanceof Error)
                message = error.message;
            else
                message = String(error);
            popup(message, "error");
        }
        tasksRender();
    });
}
export function notCompleted(object) {
    return __awaiter(this, void 0, void 0, function* () {
        const idToMark = object.getAttribute("serial");
        console.log(idToMark === null || idToMark === void 0 ? void 0 : idToMark.trim());
        const getTodos = yield fetch(`http://localhost:3005/tasks`);
        const todos = yield getTodos.json();
        // debugger;
        const todoToMark = todos.filter((el) => el.id.toString() === (idToMark === null || idToMark === void 0 ? void 0 : idToMark.toString()));
        console.log(todoToMark);
        const updatedTodo = Object.assign(Object.assign({}, todoToMark[0]), { status: "pending" });
        const configPut = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTodo),
        };
        try {
            yield fetch(`http://localhost:3005/tasks/${idToMark}`, configPut);
            popup("marked pending");
        }
        catch (error) {
            let message;
            if (error instanceof Error)
                message = error.message;
            else
                message = String(error);
            popup(message, "error");
        }
        tasksRender();
    });
}
export function removeTodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const config = {
            method: "DELETE",
        };
        try {
            yield fetch(`http://localhost:3005/tasks/${id}`, config);
            popup("task deleted successfully");
        }
        catch (error) {
            let message;
            if (error instanceof Error)
                message = error.message;
            else
                message = String(error);
            popup(message, "error");
        }
        tasksRender();
    });
}
