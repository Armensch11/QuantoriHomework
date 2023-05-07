import React, { FC } from "react";
import ModalTitle from "../modalTitle/ModalTitle";
import AddTaskBody from "../modalBody/addTaskBody/AddTaskBody";
import ModalFooter from "../modalFooter/ModalFooter";

type EditModalProps = {
  [k: string]: string;
};

const EditTaskModal: FC<EditModalProps> = ({
  id,
  title,
  type,
  task,
  date,
  status,
}) => {
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-container">
          <ModalTitle title="Edit Task" />
          {/* <AddTaskBody checkEntries={checkEntries} />
          <ModalFooter
            buttonCancel="Cancel"
            buttonAdd="Save Changes"
            cancelHandler={modalHandler}
            addTodo={addTodoOnClick}
            buttonStatus={buttonDisabled}
          /> */}
        </div>
      </div>
    </>
  );
};

export default EditTaskModal;
