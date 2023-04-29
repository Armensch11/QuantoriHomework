import React from "react";
import "./AddTaskBody.css";

const AddTaskBody = () => {
  return (
    <>
      <div className=" addTask-container">
        <input type="text" className="addTask__input" />
        <div className="typeDate-container">
          <div className="addTask__type-container"></div>
          <div className="addTask__date-container">
            <input type="date" className="addTask__date" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTaskBody;
