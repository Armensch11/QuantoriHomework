import { useEffect, useState } from "react";
import "./App.css";
import { ITodoItem } from "./Interfaces/Interfaces";
import Header from "./components/header/";
import Search from "./components/search/Search";
import { getTodos } from "./components/utils/todosActions";
import TodoList from "./components/todoList/TodoList";
import { searchResult } from "./components/utils/searchResult";

function App() {
  const [todos, setTodos] = useState<ITodoItem[] | []>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTodos, setSearchTodos] = useState<ITodoItem[] | []>([]);
  const searchTermHandler = (value: string) => {
    setSearchTerm(value);
  };
  const fetchWrapper = async () => {
    await getTodos(setTodos);
  };
  useEffect(() => {
    fetchWrapper();
  }, []);
  useEffect(() => {
    const result = searchResult(searchTerm, todos);
    setSearchTodos([...result]);
  }, [searchTerm]);
  return (
    <div className="App">
      <Header />
      <Search searchTermHandler={searchTermHandler} />
      {todos.length && (
        <TodoList todos={searchTerm.length ? searchTodos : todos} />
      )}
      {todos.length && (
        <TodoList todos={todos} status="completed" title="Completed Tasks" />
      )}
    </div>
  );
}

export default App;
