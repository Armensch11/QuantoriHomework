import React from "react";
import "./ModalFooter.css";

const ModalFooter = ({
  buttonCancel,
  buttonAdd,
  buttonOK,
  cancelHandler,
  addHandler,
  buttonStatus,
}: {
  buttonCancel?: string;
  buttonAdd?: string;
  buttonOK?: string;
  cancelHandler: () => void;
  addHandler: () => void;
  buttonStatus: boolean;
}) => {
  return (
    <>
      {buttonOK && (
        <div className="btn-container">
          <button className="btn-ok btn" onClick={cancelHandler}>
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
              cancelHandler();
            }}
          >
            {buttonCancel}
          </button>
          <button
            className="btn-add btn"
            disabled={buttonStatus}
            onClick={(e) => {
              e.preventDefault();
              addHandler();
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
