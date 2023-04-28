import { useEffect, useState } from "react";
import "./App.css";
import { ITodoItem } from "./Interfaces/Interfaces";
import Header from "./components/header/";
import Search from "./components/search/Search";
import { getTodos } from "./components/utils/todosActions";

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
    </div>
  );
}

export default App;
