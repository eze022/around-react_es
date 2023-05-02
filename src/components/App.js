import React, { useState } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name="popup"
          title="Editar Perfil"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input
              className="popup__input popup__input_name"
              id="name-input"
              type="text"
              name="name"
              placeholder="Nombre"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__input-error name-input-error"></span>
          </label>
          <label className="popup__field">
            <input
              className="popup__input popup__input_job"
              id="job-input"
              type="text"
              name="job"
              placeholder="Profesión"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__input-error job-input-error"></span>

            <button
              type="submit"
              className="popup__save-btn popup__button popup__button_inactive"
            >
              Guardar
            </button>
          </label>
        </PopupWithForm>
        <PopupWithForm
          title="Nuevo Lugar"
          name="popup popup_content_new-place"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input
              className="popup__input popup__input_title"
              id="title-input"
              type="text"
              name="title"
              placeholder="Título"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__input-error title-input-error"></span>
          </label>
          <label className="popup__field">
            <input
              className="popup__input popup__input_url-image"
              id="url-input"
              type="url"
              name="url-image"
              placeholder="Enlace a la imagen"
              required
            />
            <span className="popup__input-error url-input-error"></span>
            <button
              type="submit"
              className="popup__create-btn popup__button popup__button_inactive"
            >
              Crear
            </button>
          </label>
        </PopupWithForm>
        <PopupWithForm
          title="Cambiar foto de perfil"
          name="popup_profile"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input
              className="popup__input popup__input_url-image"
              id="avatar-input"
              type="url"
              name="avatar"
              placeholder="Enlace a la imagen"
              required
            />
            <span className="popup__input-error avatar-input-error"></span>
          </label>
          <button
            type="button"
            className="popup__button popup__button_inactive popup__button-avatar"
          >
            Guarda
          </button>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </>
  );
}

export default App;
