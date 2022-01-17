import React from "react";
import "./Navigation.scss";
import logo from "../images/logo.svg";
import search from "../images/search.svg";
import cart from "../images/cart.svg";

const Navigation = () => {
  return (
    <header className="c-navigation">

      <div className="c-navigation__left">
        <input type="checkbox" id="toggle" />
        <label className="c-navigation__label" htmlFor="toggle">
          <div className="c-navigation__hamburger">
            <div className="c-navigation__hamburger__center" />
          </div>
        </label>


          <img className="c-navigation__logo" src={logo} alt="logo" />


      </div>

      <div className="c-navigation__right">
        <img className="c-navigation__image" src={search} alt="search" />
        <img className="c-navigation__image" src={cart} alt="cart" />
      </div>

    </header>
  );
};

export default Navigation;
