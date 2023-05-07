import React from "react";
import "./Search.css";
import AddTask from "../addTask/AddTask";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { updateSearchTerm } from "../../features/search/searchSlice";

const Search = ({ modalHandler }: { modalHandler: () => void }) => {
  const dispatch = useAppDispatch();

  return (
    <React.Fragment>
      <div className="search-container">
        <input
          className="search__input"
          type="search"
          placeholder="Search Task"
          onChange={(e) => dispatch(updateSearchTerm(e.target.value))}
        />
        <AddTask modalHandler={modalHandler} />
      </div>
    </React.Fragment>
  );
};

export default Search;
