import React from "react";
import { NavLink } from "react-router-dom";
import "./TypeNav.css";
import { todoTypes } from "../utils/todoTypes";

const TypeNav = () => {
  return (
    <>
      <div className="typeNav-container">
        <div className="typeNav-container-left">
          <NavLink
            to="/tasks/health"
            className="typeNav__item health"
            style={todoTypes.health}
          >
            Health
          </NavLink>
          <NavLink
            to="/tasks/home"
            className="typeNav__item home"
            style={todoTypes.home}
          >
            Home
          </NavLink>
          <NavLink
            to="/tasks/work"
            className="typeNav__item work"
            style={todoTypes.work}
          >
            Work
          </NavLink>
          <NavLink
            to="/tasks/other"
            className="typeNav__item other"
            style={todoTypes.other}
          >
            Other
          </NavLink>
        </div>
        <div className="typeNav-container-right">
          <NavLink to="/tasks/" className="typeNav__item all">
            All
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default TypeNav;
