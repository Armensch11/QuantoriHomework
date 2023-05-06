import React, { FC, useEffect, useLayoutEffect, useState } from "react";
import ModalFooter from "../modalFooter/ModalFooter";
import ModalTitle from "../modalTitle/ModalTitle";
import { ITodoItem } from "../../../Interfaces/Interfaces";
import { compareDate } from "../../utils/compareDate";
import { getTodos } from "../../utils/todosActions";
import "./DailyTasksModal.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { fetchTodos } from "../../../features/todos/todosSlice";
type DailyModalProps = { modalHandler: () => void };

const DaylyTasksModal: FC<DailyModalProps> = ({ modalHandler }) => {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-container">
          <ModalTitle title="Good Morning" />
          <ul className="dayly-list">
            {todos
              .filter((todo) => compareDate(todo))
              .filter((todo) => todo.status === "pending")
              .map((todo) => (
                <li key={todo.id} className="dayly__item">
                  {todo.title}
                </li>
              ))}
          </ul>
          <ModalFooter
            buttonOK="Ok"
            cancelHandler={modalHandler}
            addTodo={() => null}
          />
        </div>
      </div>
    </>
  );
};

export default DaylyTasksModal;
