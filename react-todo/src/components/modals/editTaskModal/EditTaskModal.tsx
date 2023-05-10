import { FC, useEffect, useState } from "react";
import ModalTitle from "../modalTitle/ModalTitle";

import ModalFooter from "../modalFooter/ModalFooter";
import "./EditTaskModal.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { showEditModal } from "../../../features/showModal/showModalSlice";

import Form from "./Form";
import { editTodo, markTodo } from "../../../features/todos/todosSlice";
import { ITodoItem } from "../../../Interfaces/Interfaces";

type EditModalObject = {
  [k: string]: string;
};
interface EditModalAllProps {
  todos: EditModalObject;
  modalHandler: (type: string) => void;
}

const EditTaskModal: FC<EditModalAllProps> = ({ modalHandler }) => {
  const dispatch = useAppDispatch();
  const todoId = useAppSelector((state) => state.modal.todoId);
  const todos = useAppSelector((state) => state.todos.todos);
  const todo = todos.find((todo) => todo.id === todoId);

  const [editedTodo, setEditedTodo] = useState<ITodoItem | null>(null);

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const isDisabled = (status: boolean) => {
    setButtonDisabled(!status);
  };

  const getEditedData = (title: string, date: string, type: string) => {
    setEditedTodo((prev) => {
      if (!prev) {
        return null;
      }

      const newTodo = { ...prev, title, date, type };

      return newTodo;
    });
  };

  const closeEditModal = () => {
    dispatch(showEditModal({ show: false, todoId: "" }));
  };

  useEffect(() => {
    if (todo) {
      setEditedTodo({ ...todo });
    }
  }, [todo]);
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-container">
          <ModalTitle title="Edit Task" />
          <Form
            title={todo ? todo.title : null}
            type={todo ? todo.type : null}
            dataSetter={getEditedData}
            buttonStatus={isDisabled}
          />
          <ModalFooter
            buttonCancel="Cancel"
            buttonAdd="Save Changes"
            cancelHandler={closeEditModal}
            addTodo={() => {
              if (editedTodo) {
                dispatch(editTodo(editedTodo));

                closeEditModal();
              }
            }}
            buttonStatus={buttonDisabled}
          />
        </div>
      </div>
    </>
  );
};

export default EditTaskModal;
