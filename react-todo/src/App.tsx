import { useEffect, useRef, useState } from "react";
import "./App.css";

import Header from "./components/header/";
import Search from "./components/search/Search";
import TodoList from "./components/todoList/TodoList";
import TodoAddModal from "./components/modals/todoAddModal/TodoAddModal";
import DailyTasksModal from "./components/modals/dailyTasksModal/DailyTasksModal";
import { checkLocalStorage } from "./components/utils/checkLocalStorage";

import FilterByTypes from "./components/filterByTypes/FilterByTypes";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDailyModal, setShowDailyModal] = useState(false);

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
      <Search modalHandler={modalHandler} />
      {/* <FilterByTypes /> */}
      <Outlet />
      {/* <TodoList />
      <TodoList status="completed" title="Completed Tasks" /> */}

      {showAddModal && <TodoAddModal modalHandler={modalHandler} />}
      {showDailyModal && <DailyTasksModal modalHandler={modalHandler} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks/:type" element={<FilterByTypes />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
