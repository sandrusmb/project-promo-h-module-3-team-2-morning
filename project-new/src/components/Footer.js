import React from 'react';
import logoFooter from "../images/logo-adalab-80px.png"
import '../stylesheets/Header.scss';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Awesome profile-cards @2018</p>
            <img src={logoFooter} className="footer__logo" alt="logo Adalab" />
        </footer>

    );

}
export default Footer;




