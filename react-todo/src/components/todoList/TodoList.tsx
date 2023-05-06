import { ITodoItem } from "../../Interfaces/Interfaces";
import "./TodoList.css";
import TodoItem from "../todoItem/TodoItem";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchTodos } from "../../features/todos/todosSlice";
import { useEffect } from "react";

const TodoList = ({
  title = "All Tasks",
  status = "pending",
  searchTerm,
}: {
  title?: string;
  status?: string;
  searchTerm?: string;
}) => {
  const todosFromRedux = useAppSelector((state) => state.todos.todos);
  const todoToRender = todosFromRedux.filter((todo) => todo.status === status);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      {todoToRender.length && (
        <div className="list-container">
          <h2 className="list__title">{title}</h2>
          {todoToRender.map((todo) => (
            <TodoItem {...todo} key={todo.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default TodoList;
