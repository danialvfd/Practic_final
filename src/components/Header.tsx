import React from "react";
import "../styles/header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img
          src="/logo.svg"
          alt="Logo"
          className="header__logo"
        />
        <input
          type="text"
          className="header__search"
          placeholder="جستجو"
        />
        <div className="header__actions">
          <button className="header__login">ورود</button>
          <button className="header__cart" >سبد خرید</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
