import React from "react";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <header className="c-navigation">
      <input type="checkbox" id="toggle" />
      <label className="c-navigation__label" htmlFor="toggle">
        <div className="c-navigation__hamburger">
          <div className="c-navigation__hamburger__center"></div>
        </div>
      </label>
      <nav></nav>
    </header>
  );
};

export default Navigation;
