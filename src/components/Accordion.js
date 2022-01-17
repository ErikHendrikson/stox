import React from 'react'
import { useState } from 'react';
import "./Accordion.scss";

export const Accordion = ({title, listItems}) => {

  const [isOpen, setIsOpen] = useState(false);
  console.log(listItems)

  return (
      <div className="c-accordion">
      <div className="c-accordion__title" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <div className='c-accordion__arrow'>
        {isOpen? <span><big><big><big>&#x2303;</big></big></big></span> : <span><big><big><big>&#x2304;</big></big></big></span>}
        </div>
        </div>
       {isOpen ? <ul className="c-accordion__list">{listItems.map((item, i) => {
        return <li className="c-accordion__item" key={i}>{item}</li>
      })}</ul> : "" }
    </div>
  )
}
