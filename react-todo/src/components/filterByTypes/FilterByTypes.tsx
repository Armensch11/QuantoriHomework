import React from "react";
import TodoList from "../todoList/TodoList";

const FilterByTypes = () => {
  return (
    <>
      <div className="filters-container">
        <span>health</span>
        <span>work</span>
        <span>home</span>
        <span>other</span>
      </div>
      <TodoList />
      <TodoList />
    </>
  );
};

export default FilterByTypes;
