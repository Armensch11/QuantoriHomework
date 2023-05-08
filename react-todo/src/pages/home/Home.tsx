import React from "react";
import TodoList from "../../components/todoList/TodoList";

const Home = () => {
  return (
    <>
      <TodoList />
      <TodoList status="completed" title="Completed Tasks" />
    </>
  );
};

export default Home;
