import React from "react";
import "./ModalFooter.css";

const ModalFooter = ({
  buttonCancel,
  buttonAdd,
  buttonOK,
  cancelHandler,
  addHandler,
}: {
  buttonCancel?: string;
  buttonAdd?: string;
  buttonOK?: string;
  cancelHandler?: () => void;
  addHandler?: () => void;
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
          <button className="btn-cancel btn" onClick={cancelHandler}>
            {buttonCancel}
          </button>
          <button className="btn-add btn" disabled={true} onClick={addHandler}>
            {buttonAdd}
          </button>
        </div>
      )}
    </>
  );
};

export default ModalFooter;
