import React from "react";
import { ITodoItem } from "../../Interfaces/Interfaces";

const TodoItem = (
  { id, title, type, dueDate, status, task }: ITodoItem,
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
          <div className="type&date-container">
            <div className="todo__type">{type}</div>
            <div className="todo__date">{dueDate}</div>
          </div>
        </div>
        <div className="todo-delete">
          <img
            src=""
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
