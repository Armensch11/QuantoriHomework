import React from "react";
import "./Search.css";
import AddTask from "../addTask/AddTask";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { updateSearchTerm } from "../../features/search/searchSlice";
import { useSearchParams } from "react-router-dom";

const Search = ({ modalHandler }: { modalHandler: () => void }) => {
  //in order to avoid having warning in terminal, dont use searchParams
  const setSearchParams = useSearchParams()[1];

  const dispatch = useAppDispatch();

  return (
    <React.Fragment>
      <div className="search-container">
        <input
          className="search__input"
          type="search"
          placeholder="Search Task"
          onChange={(e) => {
            setSearchParams({ query: e.target.value });

            dispatch(updateSearchTerm(e.target.value));
          }}
        />
        <AddTask modalHandler={modalHandler} />
      </div>
    </React.Fragment>
  );
};

export default Search;
