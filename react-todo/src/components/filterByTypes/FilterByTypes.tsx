import React, { useEffect, useState } from "react";
import TodoList from "../todoList/TodoList";
import { useParams } from "react-router-dom";
import "./FilterByTypes.css";

const FilterByTypes = () => {
  const [filter, setFilter] = useState<string | null>("");
  const { type } = useParams();

  useEffect(() => {
    if (type) {
      setFilter(type);
    }
  }, [type]);

  return (
    <>
      <TodoList title={`${filter} tasks`} typeFilter={filter} />
    </>
  );
};

export default FilterByTypes;
