import React from "react";
import "./TodoAddModal.css";
import ModalTitle from "../modalTitle";
import ModalFooter from "../modalFooter";
import AddTaskBody from "../modalBody/addTaskBody/AddTaskBody";

const TodoAddModal = ({ showModal }: { showModal?: () => void }) => {
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-container">
          <ModalTitle title="Add New Task" />
          <AddTaskBody />
          <ModalFooter buttonCancel="Cancel" buttonAdd="Add Task" />
        </div>
      </div>
    </>
  );
};

export default TodoAddModal;
