import React, { useRef, useState } from "react";
import "./AddTaskBody.css";
import TaskTypes from "../taskTypes/TaskTypes";

const AddTaskBody = ({
  checkEntries,
}: {
  checkEntries: (input: string, date: string, taskType: string) => void;
}) => {
  const taskInput = useRef<HTMLInputElement | null>(null);
  const taskDate = useRef<HTMLInputElement | null>(null);
  const [taskType, setTaskType] = useState("");
  const typeHandler = (type: string) => {
    setTaskType(type);
  };
  const focusOutHandler = () => {
    if (taskInput.current && taskDate.current) {
      checkEntries(
        taskInput.current?.value.trim(),
        taskDate.current?.value,
        taskType
      );
    }
  };
  return (
    <>
      <div className=" addTask-container">
        <input
          type="text"
          className="addTask__input"
          ref={taskInput}
          onMouseLeave={() => {
            if (taskInput.current && taskDate.current) {
              checkEntries(
                taskInput.current.value.trim(),
                taskDate.current.value,
                taskType
              );
            }
          }}
        />
        <div className="typeDate-container">
          <TaskTypes
            typeHandler={typeHandler}
            focusOutHandler={focusOutHandler}
          />
          <div className="addTask__date-container">
            <input
              type="date"
              className="addTask__date"
              ref={taskDate}
              onMouseLeave={() => {
                if (taskInput.current && taskDate.current) {
                  checkEntries(
                    taskInput.current.value.trim(),
                    taskDate.current.value,
                    taskType
                  );
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTaskBody;
