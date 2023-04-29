import React from "react";
import closeIcon from "../images/Close-Icon.svg";

function ImagePopup(props) {
  return (
    <div className={`elements__popup ${props.card ? "popup_visible" : ""}`}>
      <div className="elements__popup-container">
        <a className="close-btn close-btn_show-image" onClick={props.onClose}>
          <img src={closeIcon} alt="Cruz" className="close-btn__img" />
        </a>
        <img
          className="elements__place-popup"
          src={props.card ? props.card.link : ""}
          alt={props.card ? props.card.name : ""}
        />
        <p className="elements__description-popup">
          {props.card ? props.card.name : ""}
        </p>
      </div>
      <div
        className={`overlay ${props.card ? "overlay_visible" : ""}`}
        onClick={props.onClose}
      ></div>
    </div>
  );
}

export default ImagePopup;
