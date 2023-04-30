import React from "react";
import "./AddTask.css";

const AddTask = ({ modalHandler }: { modalHandler: () => void }) => {
  return (
    <React.Fragment>
      <div className="add-btn-container">
        <button
          className="add-btn"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            modalHandler();
          }}
        >
          + Add Task
        </button>
      </div>
    </React.Fragment>
  );
};

export default AddTask;
