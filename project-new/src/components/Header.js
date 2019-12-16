import React from 'react';
import logoHeader from "../images/logo-header.png"

function Header() {
    return (
        <header className="header">
            <div> <a href="index.html"><img className="header__img" src={logoHeader}
                title="Font Awesome Card" alt="Logo de Font Awesome Card" /></a>

            </div>
        </header>

    );

}
export default Header;