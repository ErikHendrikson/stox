import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Accordion } from "./Accordion";

import "./Navigation.scss";
import 'swiper/css';
import logo from "../images/logo.svg";
import search from "../images/search.svg";
import cart from "../images/cart.svg";
import { slides } from "../content/content";
import { navLabels } from "../content/content";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="c-navigation">
      <div className="c-navigation__top">
        <div className="c-navigation__left">
          <input type="checkbox" id="toggle" />
          <label className="c-navigation__label" htmlFor="toggle" onClick={()=> {setIsOpen(!isOpen)}}>
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
      </div>

      {isOpen ? <div className="c-navigation__bottom">
       <Swiper
        spaceBetween={20}
        slidesOffsetBefore={20}
        slidesPerView={2.5}
        >
      {slides.map(slide =>
        <SwiperSlide key={slide.id}><div><img className="c-swiper__image" src={slide.img} alt="afbeelding"/>
          <h1 className="c-swiper__text">{slide.title}</h1>
          </div></SwiperSlide>)}
      </Swiper>
        <nav>
        {navLabels.map((item, i) => (
          <Accordion key={i} title={item.title} listItems={item.listItems} />
        ))}
        </nav>
      </div> : ""}
    </header>
  );
};

export default Navigation;
