import { useEffect, useState } from "react";
import "./App.css";
import { ITodoItem } from "./Interfaces/Interfaces";
import Header from "./components/header/";
import Search from "./components/search/Search";
import { getTodos } from "./components/utils/todosActions";

import TodoList from "./components/todoList/TodoList";

function App() {
  const [todos, setTodos] = useState<ITodoItem[] | []>([]);
  const fetchWrapper = async () => {
    await getTodos(setTodos);
  };
  useEffect(() => {
    fetchWrapper();
  }, []);
  return (
    <div className="App">
      <Header />
      <Search />
      {todos.length && <TodoList todos={todos} />}
      {todos.length && (
        <TodoList todos={todos} status="completed" title="Completed Tasks" />
      )}
    </div>
  );
}

export default App;
