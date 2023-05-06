import React from "react";
import "./ModalFooter.css";

const ModalFooter = ({
  buttonCancel,
  buttonAdd,
  buttonOK,
  cancelHandler,
  addTodo,
  buttonStatus,
}: {
  buttonCancel?: string;
  buttonAdd?: string;
  buttonOK?: string;
  cancelHandler: (type: string) => void;
  addTodo: () => void;
  buttonStatus?: boolean;
}) => {
  return (
    <>
      {buttonOK && (
        <div className="btn-container">
          <button className="btn-ok btn" onClick={() => cancelHandler("ok")}>
            {buttonOK}
          </button>
        </div>
      )}
      {!buttonOK && (
        <div className="btn-container">
          <button
            className="btn-cancel btn"
            onClick={(e) => {
              e.preventDefault();
              cancelHandler("add");
            }}
          >
            {buttonCancel}
          </button>
          <button
            className="btn-add btn"
            disabled={buttonStatus}
            onClick={(e) => {
              e.preventDefault();
              addTodo();
              cancelHandler("add");
            }}
          >
            {buttonAdd}
          </button>
        </div>
      )}
    </>
  );
};

export default ModalFooter;
