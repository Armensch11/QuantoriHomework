import { useEffect, useRef, useState } from "react";
import "./App.css";

import Header from "./components/header/";
import Search from "./components/search/Search";

import TodoAddModal from "./components/modals/todoAddModal/TodoAddModal";
import DailyTasksModal from "./components/modals/dailyTasksModal/DailyTasksModal";
import { checkLocalStorage } from "./components/utils/checkLocalStorage";

import FilterByTypes from "./pages/filterByTypes/FilterByTypes";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import TypeNav from "./components/typeNav/TypeNav";
import EditTaskModal from "./components/modals/editTaskModal/EditTaskModal";

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
      <TypeNav />
      {/* <EditTaskModal /> */}
      <Outlet />

      {showAddModal && <TodoAddModal modalHandler={modalHandler} />}
      {showDailyModal && <DailyTasksModal modalHandler={modalHandler} />}

      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<Home />} />
        <Route path="/tasks/:type" element={<FilterByTypes />} />
      </Routes>
    </div>
  );
}

export default App;
