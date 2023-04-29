import tittle from "../images/tittle.svg";

function Header() {
  return (
    <>
      <header className="header">
        <h1 className="header__title">
          <img src={tittle} alt="Around the U.S" className="header__logo" />
        </h1>
        <div className="header__line"></div>
      </header>
    </>
  );
}

export default Header;
