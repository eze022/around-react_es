import { useState, useEffect } from "react";
import avatar from "../images/avatar.svg";
import pencilPhoto from "../images/pencil-photo.svg";
import pencil from "../images/pencil.svg";
import plus from "../images/plus.svg";
import closeIcon from "../images/Close-Icon.svg";
import Yosemite from "../images/Yosemite.svg";
import { api, card } from "../utils/api.js";
import PopupWithForm from "./PopupWithForm.js";
import Cards from "./Card.js";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    card
      .getUserInfo()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <main className="main">
        <section className="profile">
          <div className="profile-info">
            <img
              src={userAvatar}
              alt="persona"
              className="profile-info__avatar-img"
              onClick={props.onEditAvatarClick}
            />

            <img
              src={pencilPhoto}
              alt="lapiz"
              className="profile-info__pencil-img"
            />

            <div className="profile-info__container">
              <div className="profile-info__container-info">
                <p className="profile-info__fullname">{userName}</p>
                <div className="edit-btn">
                  <img
                    src={pencil}
                    alt="lapiz"
                    className="edit-btn__pencil"
                    onClick={props.onEditProfileClick}
                  />
                </div>
              </div>
              <p className="profile-info__job">{userDescription}</p>
            </div>
          </div>
          <button
            type="submit"
            className="add-btn"
            value="submit"
            onClick={props.onAddPlaceClick}
          >
            <img src={plus} alt="signo '+'" className="add-btn__plus" />
          </button>
        </section>

        <div className="overlay"></div>
        <div className="elements">
          <ul className="elements__table">
            {cards.map((card) => {
              return (
                <Cards
                  key={card._id}
                  card={card}
                  name={card.name}
                  link={card.link}
                  likes={card.likes.length}
                  onCardClick={props.onCardClick}
                />
              );
            })}
          </ul>
        </div>
        <div className="popup popup_delete">
          <div className="popup__container">
            <a className="close-btn">
              <img src={closeIcon} alt="Cruz" className="close-btn__img" />
            </a>
            <p className="popup__question">¿Estás seguro/a?</p>
            <button className="popup__confirm">Sí</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
