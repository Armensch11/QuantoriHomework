import React, { useRef } from "react";

import "./TodoItem.css";
import trashBin from "./assets/trash_bin.svg";
import editIcon from "./assets/edit-icon.svg";
import { todoTypes } from "../utils/todoTypes";
import { formatDate } from "../utils/formatDate";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { markTodo, deleteTodo } from "../../features/todos/todosSlice";

const TodoItem = ({
  id,
  title,
  type,
  date,
  status,
  task,

  
}: {
  id: string;
  title: string;
  type: string;
  date: string;
  status: string;
  task: string;

 
}) => {
  const checkbox = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="todo-container">
        <input
          className="todo__checkbox"
          type="checkbox"
          checked={status === "completed" ? true : false}
          ref={checkbox}
          onChange={() => {
            if (checkbox.current) {
              // markHandler(+id, checkbox.current?.checked);
              dispatch(markTodo(id));
            }
          }}
        />
        <div className="todo-desc">
          <div
            className="todo__title"
            style={{ color: status === "completed" ? "#838383" : "#1D1D1D" }}
          >
            {task}
          </div>
          <div className="typeDate-container">
            <div
              className="todo__type"
              style={{
                color:
                  status === "completed" ? "#838383" : todoTypes[type].color,
                backgroundColor:
                  status === "completed"
                    ? "#F5F5F5"
                    : todoTypes[type].background,
              }}
            >
              {type}
            </div>
            <div className="todo__date">{formatDate(date)}</div>
          </div>
        </div>
        <div className="todo-edit">
          <img
            src={editIcon}
            alt="todo edit icon"
            onClick={() => {
              // editHandler(+id);
            }}
          />
        </div>
        <div className="todo-delete">
          <img
            src={trashBin}
            alt="todo delete icon"
            onClick={() => {
              dispatch(deleteTodo(id));
            }}
          />
        </div>
      </div>
    </>
  );
};

export default TodoItem;
