import React from "react";
import { ITodoItem } from "../../Interfaces/Interfaces";
import "./TodoItem.css";
import trashBin from "../../assets/trash_bin.svg";
import { todoTypes } from "../utils/todoTypes";

const TodoItem = (
  { id, title, type, date, status, task }: ITodoItem,
  statusHandler: (id: string) => void,
  deleteHandler: (id: string) => void
) => {
  return (
    <>
      <div className="todo-container">
        <input
          type="checkbox"
          checked={status === "completed" ? true : false}
          onChange={(e) => {
            e.preventDefault();
            statusHandler(id);
          }}
        />
        <div className="todo-desc">
          <div className="todo__title">{task}</div>
          <div className="typeDate-container">
            <div
              className="todo__type"
              style={{
                color: todoTypes[type].color,
                backgroundColor: todoTypes[type].background,
              }}
            >
              {type}
            </div>
            <div className="todo__date">{date}</div>
          </div>
        </div>
        <div className="todo-delete">
          <img
            src={trashBin}
            alt="todo delete icon"
            onClick={() => {
              deleteHandler(id);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default TodoItem;
