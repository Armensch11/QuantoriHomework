import React, { useState } from "react";
import "./Search.css";
import AddTask from "../addTask/AddTask";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <React.Fragment>
      <div className="search-container">
        <input
          className="search__input"
          type="search"
          placeholder="Search Task"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <AddTask />
      </div>
    </React.Fragment>
  );
};

export default Search;
