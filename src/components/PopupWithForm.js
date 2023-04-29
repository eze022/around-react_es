import closeIcon from "../images/Close-Icon.svg";

function PopupWithForm(props) {
  return (
    <>
      <div
        className={`popup ${props.name} ${props.isOpen ? "popup_visible" : ""}`}
      >
        <a className="close-btn">
          <img
            src={closeIcon}
            alt="Cruz"
            className="close-btn__img"
            onClick={props.onClose}
          />
        </a>
        <div className="popup__container">
          <h3 className="popup__title">{props.title}</h3>
          <form className="popup__form" name={props.name} noValidate>
            <fieldset className="popup__set">{props.children}</fieldset>
          </form>
        </div>
      </div>
      <div
        className={`overlay ${props.isOpen ? "overlay_visible" : ""}`}
        onClick={props.onClose}
      ></div>
    </>
  );
}

export default PopupWithForm;
