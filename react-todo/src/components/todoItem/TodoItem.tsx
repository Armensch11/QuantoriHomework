import React, { useRef } from "react";

import "./TodoItem.css";
import trashBin from "../../assets/trash_bin.svg";
import { todoTypes } from "../utils/todoTypes";
import { formatDate } from "../utils/formatDate";

const TodoItem = ({
  id,
  title,
  type,
  date,
  status,
  task,

  deleteHandler,
  markHandler,
}: {
  id: string;
  title: string;
  type: string;
  date: string;
  status: string;
  task: string;

  deleteHandler: (id: number) => void;
  markHandler: (id: number, checked: boolean | null) => void;
}) => {
  const checkbox = useRef<HTMLInputElement>(null);
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
              markHandler(+id, checkbox.current?.checked);
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
        <div className="todo-delete">
          <img
            src={trashBin}
            alt="todo delete icon"
            onClick={() => {
              deleteHandler(+id);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default TodoItem;
