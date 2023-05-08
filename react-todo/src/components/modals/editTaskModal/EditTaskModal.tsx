import React, { FC } from "react";
import ModalTitle from "../modalTitle/ModalTitle";
import AddTaskBody from "../modalBody/addTaskBody/AddTaskBody";
import ModalFooter from "../modalFooter/ModalFooter";

type EditModalProps = {
  [k: string]: string;
};

const EditTaskModal: FC<EditModalProps> = () => {
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-container">
          <ModalTitle title="Edit Task" />
          <form action="">
            <input type="button" value="health" />
            <input type="button" value="home" />
            <input type="button" value="work" />
            <input type="button" value="other" />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditTaskModal;
