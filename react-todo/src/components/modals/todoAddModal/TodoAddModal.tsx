import React, { useState } from "react";
import "./TodoAddModal.css";
import ModalTitle from "../modalTitle";
import ModalFooter from "../modalFooter";
import AddTaskBody from "../modalBody/addTaskBody/AddTaskBody";
import { ITodoItem } from "../../../Interfaces/Interfaces";

const TodoAddModal = ({ modalHandler }: { modalHandler: () => void }) => {
  const [newTask, setNewTask] = useState<ITodoItem>();
  const modalEntriesHandler = (title: string, type: string, date: string) => {};
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-container">
          <ModalTitle title="Add New Task" />
          <AddTaskBody />
          <ModalFooter
            buttonCancel="Cancel"
            buttonAdd="Add Task"
            cancelHandler={modalHandler}
          />
        </div>
      </div>
    </>
  );
};

export default TodoAddModal;
