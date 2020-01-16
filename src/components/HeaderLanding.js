import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-cards.png";
import "../stylesheets/Landing.scss";

function HeaderLanding() {
  return (
    <header className="hero">
      <a href="index.html">
        <img className="hero__logo" src={logo} title="¡Crea tu propia tarjeta de visita!" alt="Awesome Profile Cards" />
      </a>

      <h2 className="hero__title">Crea tu tarjeta de visita</h2>
      <p className="hero__text">Crea mejores contactos profesionales de forma fácil y cómoda</p>
      <div className="hero__steps">
        <i className="far fa-object-ungroup"></i>
        <i className="far fa-keyboard"></i>
        <i className="fas fa-share-alt"></i>
        <p className="grid-text">Diseña</p>
        <p className="grid-text">Rellena</p>
        <p className="grid-text">Comparte</p>
      </div>
      <Link className="start-button" to="/card">
        <a href="card.html">
          comenzar
      </a>
      </Link>
    </header>
  );
}
export default HeaderLanding;
