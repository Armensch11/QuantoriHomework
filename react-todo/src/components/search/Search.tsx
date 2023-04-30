import React, { useState } from "react";
import "./Search.css";
import AddTask from "../addTask/AddTask";

const Search = ({
  searchTermHandler,
  modalHandler,
}: {
  searchTermHandler: (value: string) => void;
  modalHandler: () => void;
}) => {
  return (
    <React.Fragment>
      <div className="search-container">
        <input
          className="search__input"
          type="search"
          placeholder="Search Task"
          // value={searchTerm}
          onChange={(e) => searchTermHandler(e.target.value)}
        />
        <AddTask modalHandler={modalHandler} />
      </div>
    </React.Fragment>
  );
};

export default Search;
