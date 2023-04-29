import React from "react";
import "./TodoAddModal.css";
import ModalTitle from "../modalTitle";
import ModalFooter from "../modalFooter";

const TodoAddModal = ({ showModal }: { showModal?: () => void }) => {
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-container">
          <ModalTitle title="Add New Task" />
          <ModalFooter buttonCancel="Cancel" buttonAdd="Add Task" />
        </div>
      </div>
    </>
  );
};

export default TodoAddModal;
