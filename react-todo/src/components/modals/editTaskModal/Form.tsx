import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import "./Form.css";
import { todoTypes } from "../../utils/todoTypes";

type FormProps = {
  title: string | null;
  type: string | null;
  dataSetter?: (title: string, date: string, type: string) => void;
  buttonStatus?: (status: boolean) => void;
};

const Form: FC<FormProps> = ({ title, type, buttonStatus, dataSetter }) => {
  const [todoTitle, setTodoTitle] = useState(title ? title : null);
  const [selectedType, setSelectedType] = useState(type);
  const [isEntriesValid, setIsEntriesValid] = useState(false);
  const dateRef = useRef<HTMLInputElement>(null);

  const selectTypeOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setSelectedType(event.currentTarget.innerText);
  };

  useEffect(() => {
    if (buttonStatus) buttonStatus(isEntriesValid);
    if (dataSetter)
      dataSetter(
        todoTitle ? todoTitle : "",
        dateRef.current ? dateRef.current.value : "",
        selectedType ? selectedType : ""
      );
  }, [todoTitle, selectedType, dateRef.current?.value]);

  const validateForm = useCallback(() => {
    const title = todoTitle;
    const type = selectedType;
    const date = dateRef.current?.value;
    return Boolean(title && type && date);
  }, [todoTitle, selectedType]);

  return (
    <>
      <div className="form-wrapper">
        <div className="form__textarea">
          <textarea
            className="textarea"
            rows={3}
            value={todoTitle ? todoTitle : ""}
            onChange={(e) => {
              setTodoTitle(e.target.value);
              setIsEntriesValid(validateForm());
            }}
          />
        </div>

        <div className="type-and-date-wrapper">
          <div className="form__types">
            <div
              className={`type  ${
                selectedType === "health" ? "health-selected" : ""
              }`}
              style={{ ...todoTypes.health }}
              onClick={(e) => {
                selectTypeOnClick(e);
                setIsEntriesValid(validateForm());
              }}
            >
              health
            </div>
            <div
              className={`type  ${
                selectedType === "home" ? "home-selected" : ""
              }`}
              style={{ ...todoTypes.home }}
              onClick={(e) => {
                selectTypeOnClick(e);
                setIsEntriesValid(validateForm());
              }}
            >
              home
            </div>
            <div
              className={`type  ${
                selectedType === "work" ? "work-selected" : ""
              }`}
              style={{ ...todoTypes.work }}
              onClick={(e) => {
                selectTypeOnClick(e);
                setIsEntriesValid(validateForm());
              }}
            >
              work
            </div>
            <div
              className={`type  ${
                selectedType === "other" ? "other-selected" : ""
              }`}
              style={{ ...todoTypes.other }}
              onClick={(e) => {
                selectTypeOnClick(e);
                setIsEntriesValid(validateForm());
              }}
            >
              other
            </div>
          </div>

          <div className="form__date">
            <input
              type="date"
              className="date"
              ref={dateRef}
              onChange={() => setIsEntriesValid(validateForm())}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
