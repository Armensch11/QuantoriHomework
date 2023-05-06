import React, { FC, useState } from "react";
import "./TodoAddModal.css";
import ModalTitle from "../modalTitle";
import ModalFooter from "../modalFooter";
import AddTaskBody from "../modalBody/addTaskBody/AddTaskBody";
import { ITodoItem } from "../../../Interfaces/Interfaces";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { addTodo, post } from "../../../features/todos/todosSlice";

type TodoModalProps = {
  modalHandler: (type: string) => void;
};

const TodoAddModal: FC<TodoModalProps> = ({ modalHandler }) => {
  const [newTask, setNewTask] = useState<ITodoItem>();
  const dispatch = useAppDispatch();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const checkEntries = (input: string, date: string, taskType: string) => {
    if (input.length && date.length && taskType.length) {
      setButtonDisabled(false);
      setNewTask({
        title: input,
        task: input,
        date: date,
        type: taskType,
        status: "pending",
        id: new Date().valueOf().toString(),
      });
    } else {
      setButtonDisabled(true);
    }
  };

  const addTodoOnClick = () => {
    if (newTask) {
      dispatch(post(newTask));
    }
  };
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-container">
          <ModalTitle title="Add New Task" />
          <AddTaskBody checkEntries={checkEntries} />
          <ModalFooter
            buttonCancel="Cancel"
            buttonAdd="Add Task"
            cancelHandler={modalHandler}
            addTodo={addTodoOnClick}
            buttonStatus={buttonDisabled}
          />
        </div>
      </div>
    </>
  );
};

export default TodoAddModal;
