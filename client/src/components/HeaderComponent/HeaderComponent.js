import React from "react";
import { Link } from "react-router-dom";
import "./HeaderComponent.scss";
import logo from "../../assets/images/logo.png";

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo}></img>
      </div>
      <nav className="header__navbar">
        <Link to="/" className="header__link">
          Home
        </Link>
        <Link to="/events" className="header__link">
          Reservations
        </Link>
        <Link to="/contact" className="header__link">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default HeaderComponent;
