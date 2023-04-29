import { ITodoItem } from "../../Interfaces/Interfaces";
import "./TodoList.css";
import TodoItem from "../todoItem/TodoItem";
import { Dispatch, SetStateAction } from "react";

const TodoList = ({
  title = "All Tasks",
  status = "pending",
  todos,
  deleteHandler,
  markHandler,
}: {
  title?: string;
  status?: string;
  todos: ITodoItem[] | [];
  deleteHandler: (
    // setter: Dispatch<SetStateAction<ITodoItem[] | []>>,
    id: number
  ) => void;
  markHandler: (id: number, checked: boolean | null) => void;
}) => {
  const todoToRender = todos.filter((todo) => todo.status === status);
  return (
    <>
      {todoToRender.length && (
        <div className="list-container">
          <h2 className="list__title">{title}</h2>
          {todoToRender.map((todo) => (
            <TodoItem
              {...todo}
              key={todo.id}
              deleteHandler={deleteHandler}
              markHandler={markHandler}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default TodoList;
