import React, { useState } from "react";
import "./TodoAddModal.css";
import ModalTitle from "../modalTitle";
import ModalFooter from "../modalFooter";
import AddTaskBody from "../modalBody/addTaskBody/AddTaskBody";
import { ITodoItem } from "../../../Interfaces/Interfaces";
import { dbPost } from "../../utils/dbPost";

const TodoAddModal = ({
  modalHandler,
  addHandler,
}: {
  modalHandler: () => void;
  addHandler: (newTodo: ITodoItem) => void;
}) => {
  const [newTask, setNewTask] = useState<ITodoItem>();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const checkEntries = (input: string, date: string, taskType: string) => {
    if (input.length && date.length && taskType.length) {
      console.log("entries are ok");
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
      console.log("some entries are invalid");
    }
  };
  // const addHandler = async () => {
  //   if (newTask) await dbPost(newTask);

  //   console.log("add something");
  //   console.log(newTask);
  // };
  const addButtonClickHandler = async () => {
    if (newTask) addHandler(newTask);
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
            addHandler={addButtonClickHandler}
            buttonStatus={buttonDisabled}
          />
        </div>
      </div>
    </>
  );
};

export default TodoAddModal;
