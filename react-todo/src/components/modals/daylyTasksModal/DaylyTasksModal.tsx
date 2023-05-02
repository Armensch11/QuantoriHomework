import React, { FC, useEffect, useLayoutEffect, useState } from "react";
import ModalFooter from "../modalFooter/ModalFooter";
import ModalTitle from "../modalTitle/ModalTitle";
import { ITodoItem } from "../../../Interfaces/Interfaces";
import { compareDate } from "../../utils/compareDate";
import { getTodos } from "../../utils/todosActions";
import "./DaylyTasksModal.css";
type DaylyModalProps = { modalHandler: () => void };

const DaylyTasksModal: FC<DaylyModalProps> = ({ modalHandler }) => {
  const [todos, setTodos] = useState<ITodoItem[] | []>([]);
  const fetchTodos = async () => {
    await getTodos(setTodos);
  };

  // const todaysTodos: ITodoItem[] | [] = todos.filter((todo) =>
  //   compareDate(todo)
  // );

  useEffect(() => {
    fetchTodos();
  }, []);
  useLayoutEffect(
    () =>
      setTodos(
        [...todos]
          .filter((todo) => compareDate(todo))
          .filter((todo) => todo.status === "pending")
      ),
    [todos.length]
  );

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
            addHandler={() => null}
          />
        </div>
      </div>
    </>
  );
};

export default DaylyTasksModal;
