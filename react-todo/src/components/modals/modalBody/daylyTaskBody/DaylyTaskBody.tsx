import React from "react";
import "./DaylyTaskBody.css";

const DaylyTaskBody = ({ todoTitles }: { todoTitles: string[] | null }) => {
  return (
    <>
      <div className="daylyTasks">
        {todoTitles?.length && todoTitles.map((title) => <div>{title}</div>)}
      </div>
    </>
  );
};

export default DaylyTaskBody;
