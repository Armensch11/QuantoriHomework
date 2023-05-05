import { useEffect, useRef, useState } from "react";
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
import TodoAddModal from "./components/modals/todoAddModal/TodoAddModal";
import { dbPost } from "./components/utils/dbPost";
import DailyTasksModal from "./components/modals/dailyTasksModal/DailyTasksModal";
import { checkLocalStorage } from "./components/utils/checkLocalStorage";

function App() {
  const [todos, setTodos] = useState<ITodoItem[] | []>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTodos, setSearchTodos] = useState<ITodoItem[] | []>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDailyModal, setShowDailyModal] = useState(false);
  const addHandler = async (newItem: ITodoItem) => {
    setTodos((prevTodos) => [...prevTodos, newItem]);
    await dbPost(newItem);
  };
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

  const modalHandler = (type = "add") => {
    type === "add"
      ? setShowAddModal(!showAddModal)
      : setShowDailyModal(!showDailyModal);
    // console.log(type);
  };

  const localStorageVisited = useRef(false);
  const checkDate = () => {
    if (!localStorageVisited.current) {
      setShowDailyModal(!checkLocalStorage());
    }
    return (localStorageVisited.current = true);
  };
  // checkDate();
  useEffect(() => {
    checkDate();
  }, []);
  useEffect(() => {
    fetchWrapper();
  }, []);
  useEffect(() => {
    const result = searchResult(searchTerm, todos);
    setSearchTodos([...result]);
  }, [searchTerm, todos]);
  return (
    <div className="App">
      <Header />
      <Search
        searchTermHandler={searchTermHandler}
        modalHandler={modalHandler}
      />
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

      {showAddModal && (
        <TodoAddModal modalHandler={modalHandler} addHandler={addHandler} />
      )}
      {showDailyModal && <DailyTasksModal modalHandler={modalHandler} />}
    </div>
  );
}

export default App;
