var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { popup } from "../popup";
export function modalCancelAction() {
    const cancelButton = document.getElementsByClassName("modal__container__inside__buttons__cancel")[0];
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
    const todoTypes = document.getElementsByClassName("modal__container__input__options__type");
    console.log(todoTypes);
    const color = check.style.color;
    const typeName = check.className.split(" ")[1];
    check.style.border = `1px solid ${color}`;
    [...todoTypes].forEach((type) => {
        if (!type.classList.contains(typeName)) {
            type.style.border = "none";
            type.setAttribute("selected", "false");
        }
        else {
            type.setAttribute("selected", "true");
        }
    });
}
function getTodo() {
    const input = document.getElementsByClassName("modal__container__input__todo")[0].firstChild;
    if (input.value.trim().length > 0) {
        return input.value;
    }
    return null;
}
function getType() {
    var _a, _b;
    const todoTypes = document.getElementsByClassName("modal__container__input__options__type");
    const selectedType = (_a = [...todoTypes]) === null || _a === void 0 ? void 0 : _a.filter((type) => type.getAttribute("selected") === "true");
    return (_b = selectedType[0]) === null || _b === void 0 ? void 0 : _b.innerHTML;
}
function getDueDate() {
    const input = document.getElementsByClassName("modal__container__input__options__date")[0];
    // console.log(input.value);
    return formatDate(input.value);
}
export function validateEntries() {
    const todoItem = {
        task: "",
        date: "",
        type: "",
        status: "",
        id: "",
    };
    const todo = getTodo();
    const dueDate = getDueDate();
    const todoType = getType();
    const addButton = document.getElementsByClassName("modal__container__inside__buttons__add")[0];
    if (todo && dueDate && todoType) {
        // console.log("validating ");
        todoItem.task = todo;
        todoItem.date = dueDate;
        todoItem.type = todoType;
        todoItem.status = "pending";
        todoItem.id = new Date().valueOf().toString();
        addButton.disabled = false;
        addButton.style.backgroundColor = "#3C86F4";
        addButton.onclick = (e) => {
            e.preventDefault();
            addTask(todoItem);
            //closeModal();
        };
    }
    else
        console.log("some entries invalid");
    console.log(todoItem);
}
function addTask(todoItem) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch("http://localhost:3005/tasks", {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify(todoItem),
            });
            popup("Task added");
        }
        catch (error) {
            let message;
            if (error instanceof Error)
                message = error.message;
            else
                message = String(error);
            popup(message, "error");
            // console.error(error);
        }
    });
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
