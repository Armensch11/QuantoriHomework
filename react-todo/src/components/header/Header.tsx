import React from "react";
import Weather from "../widgets/weather/";
import "./Header.css";
import loader from "../../assets/gpsAnimated.gif";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header-container">
        <div className="header__title">To Do List</div>

        <Weather />
      </div>
    </React.Fragment>
  );
};

export default Header;
