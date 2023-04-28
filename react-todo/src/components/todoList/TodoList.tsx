import React from "react";
import { ITodoItem } from "../../Interfaces/Interfaces";
import "./TodoList.css";
import TodoItem from "../todoItem/TodoItem";

const TodoList = ({
  title = "All Tasks",
  status = "pending",
  todos,
}: {
  title?: string;
  status?: string;
  todos: ITodoItem[] | [];
}) => {
  const todoToRender = todos.filter((todo) => todo.status === status);
  return (
    <>
      {todoToRender.length && (
        <div className="list-container">
          <h2 className="list__title">{title}</h2>
          {todoToRender.map((todo) => (
            <TodoItem {...todo} />
          ))}
        </div>
      )}
    </>
  );
};

export default TodoList;
