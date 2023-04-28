import React from "react";
import "./AddTask.css";


const AddTask = () => {
  return (
    <React.Fragment>
      <div className="add-btn-container">
        <button className="add-btn" type="button">
          + Add Task
        </button>
      </div>
    </React.Fragment>
  );
};

export default AddTask;
