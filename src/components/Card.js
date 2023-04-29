import { useState, useEffect } from "react";
import heartIcon from "../images/heart-icon.svg";
import trash from "../images/trash.svg";

function Cards(props) {
  return (
    <>
      <li className="elements__cards" key={props._id}>
        <img
          src={props.link}
          alt={props.name}
          className="elements__place"
          onClick={() => props.onCardClick(props.card)}
        />
        <img src={trash} alt="basura" className="elements__trash" />
        <div className="elements__container-info">
          <p className="elements__description">{props.name}</p>
          <div className="elemnts__container-like">
            <img
              src={heartIcon}
              alt="icono de corazon"
              className="elements__icon"
            />
            <p className="elements__likes">{props.likes}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default Cards;
