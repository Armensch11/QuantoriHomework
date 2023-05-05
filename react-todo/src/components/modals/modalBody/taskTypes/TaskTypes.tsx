import React, { memo, useState } from "react";
import "./TaskTypes.css";
import { todoTypes } from "../../../utils/todoTypes";
import { typeSelector } from "../../../utils/typeSelector";
import { IBorders } from "../../../../Interfaces/Interfaces";

const types = ["health", "work", "home", "other"];

const TaskTypes = ({
  typeHandler,
  focusOutHandler,
}: {
  typeHandler: (type: string) => void;
  focusOutHandler: () => void;
}) => {
  const [selected, setSelected] = useState<IBorders>({
    work: "none",
    home: "none",
    health: "none",
    other: "none",
  });
  const onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const type = target.innerText;
    setSelected(typeSelector(type));
    typeHandler(type);
  };
  return (
    <React.Fragment>
      <div className="types-container">
        {types.map((type, index) => (
          <div
            key={index}
            className="type"
            style={{
              color: todoTypes[type].color,
              backgroundColor: todoTypes[type].background,
              border: selected[type],
            }}
            onClick={onClickHandler}
            onMouseLeave={focusOutHandler}
          >
            {type}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default memo(TaskTypes);
