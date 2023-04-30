import React from "react";
import "./AddTaskBody.css";
import TaskTypes from "../taskTypes/TaskTypes";

const AddTaskBody = () => {
  return (
    <>
      <div className=" addTask-container">
        <input type="text" className="addTask__input" />
        <div className="typeDate-container">
          <TaskTypes  />
          <div className="addTask__date-container">
            <input type="date" className="addTask__date" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTaskBody;
