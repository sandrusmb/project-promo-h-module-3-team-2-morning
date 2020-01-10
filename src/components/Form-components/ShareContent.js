import React from 'react';
import '../../stylesheets/Sass-components/ShareContent.scss'


function ShareContent(props) {
    const isValidated = props.isValidated;
    return (
        <section className="share__container collapsable-content js-content">
            <button className={`${isValidated === true ? "button-active" : "button"}`}>
                <i className="far fa-address-card collapsable-box__icon"></i>
                <h2 className="button__title">Crear tarjeta</h2>
            </button>
            <div className="share__twitter hiddenButton">
                <span className="share__twitter-message"> Tu tarjeta ha sido
                    creada:
                </span>
                <p className='share__twitter-url js-response'></p>
                <a target="_blank" href=""
                    className="js-share__twitter share__twitter-button">
                    <i className="fab fa-twitter"></i>
                    Compartir en Twitter
                </a>
            </div>
        </section>
    );
}

export default ShareContent;