import React, { Dispatch, SetStateAction } from "react";
import { ITodoItem } from "../../Interfaces/Interfaces";
import "./TodoItem.css";
import trashBin from "../../assets/trash_bin.svg";
import { todoTypes } from "../utils/todoTypes";

const TodoItem = ({
  id,
  title,
  type,
  date,
  status,
  task,
  //statusHandler?: (id: string) => void,
  deleteHandler,
}: {
  id: string;
  title: string;
  type: string;
  date: string;
  status: string;
  task: string;
  //statusHandler?: (id: string) => void,
  deleteHandler: (
    // setter: Dispatch<SetStateAction<ITodoItem[] | []>>,
    id: number
  ) => void;
}) => {
  return (
    <>
      <div className="todo-container">
        <input
          type="checkbox"
          checked={status === "completed" ? true : false}
          onChange={(e) => {
            e.preventDefault();
            // statusHandler(id);
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
            <div className="todo__date">{date}</div>
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
