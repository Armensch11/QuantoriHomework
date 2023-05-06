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
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTodos, setSearchTodos] = useState<ITodoItem[] | []>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDailyModal, setShowDailyModal] = useState(false);

  const searchTermHandler = (value: string) => {
    setSearchTerm(value);
  };

  const modalHandler = (type = "add") => {
    type === "add"
      ? setShowAddModal(!showAddModal)
      : setShowDailyModal(!showDailyModal);
  };

  const localStorageVisited = useRef(false);
  const checkDate = () => {
    if (!localStorageVisited.current) {
      setShowDailyModal(!checkLocalStorage());
    }
    return (localStorageVisited.current = true);
  };

  useEffect(() => {
    checkDate();
  }, []);

  return (
    <div className="App">
      <Header />
      <Search
        searchTermHandler={searchTermHandler}
        modalHandler={modalHandler}
      />
      <TodoList searchTerm={searchTerm} />

      <TodoList
        searchTerm={searchTerm}
        status="completed"
        title="Completed Tasks"
      />

      {showAddModal && (
        <TodoAddModal modalHandler={modalHandler}  />
      )}
      {showDailyModal && <DailyTasksModal modalHandler={modalHandler} />}
    </div>
  );
}

export default App;
