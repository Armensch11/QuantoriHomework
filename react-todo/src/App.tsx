import { useEffect, useState } from "react";
import "./App.css";
import { ITodoItem } from "./Interfaces/Interfaces";
import Header from "./components/header/";
import Search from "./components/search/Search";
import {
  getTodos,
  deleteTodos,
  markTodos,
} from "./components/utils/todosActions";
import TodoList from "./components/todoList/TodoList";
import { searchResult } from "./components/utils/searchResult";

function App() {
  const [todos, setTodos] = useState<ITodoItem[] | []>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTodos, setSearchTodos] = useState<ITodoItem[] | []>([]);
  const deleteHandler = (id: number) => {
    deleteTodos(setTodos, id);
  };
  const markHandler = (id: number, checked: boolean | null) => {
    markTodos(setTodos, todos, id, checked);
  };
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
        <TodoList
          todos={searchTerm.length ? searchTodos : todos}
          deleteHandler={deleteHandler}
          markHandler={markHandler}
        />
      )}
      {todos.length && (
        <TodoList
          todos={todos}
          status="completed"
          title="Completed Tasks"
          deleteHandler={deleteHandler}
          markHandler={markHandler}
        />
      )}
    </div>
  );
}

export default App;
