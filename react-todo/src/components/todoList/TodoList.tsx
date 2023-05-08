import "./TodoList.css";
import TodoItem from "../todoItem/TodoItem";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchTodos } from "../../features/todos/todosSlice";
import { FC, useEffect } from "react";

type TodoListProps = {
  title?: string;
  status?: string;
  typeFilter?: string | null;
};

const TodoList: FC<TodoListProps> = ({
  title = "All Tasks",
  status = "pending",
  typeFilter,
}) => {
  const todosFromRedux = useAppSelector((state) => state.todos.todos);
  const searchTerm = useAppSelector((state) => state.search.searchTerm);
  const dispatch = useAppDispatch();

  let todoToRender = todosFromRedux.filter((todo) => todo.status === status);
  if (typeFilter) {
    todoToRender = [...todoToRender.filter((todo) => todo.type === typeFilter)];
  }
  if (searchTerm.length) {
    todoToRender = [
      ...todoToRender.filter((todo) =>
        todo.title.toLowerCase().startsWith(searchTerm)
      ),
    ];
  }

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <div className="list-container">
        <h2 className="list__title">{title}</h2>
        {todoToRender.map((todo) => (
          <TodoItem {...todo} key={todo.id} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
