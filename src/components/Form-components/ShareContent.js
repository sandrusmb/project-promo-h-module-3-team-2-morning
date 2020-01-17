import React from 'react';
import '../../stylesheets/Sass-components/ShareContent.scss'
import PropTypes from 'prop-types';

function ShareContent(props) {
    const twitterText = '¡Échale un vistazo a mi tarjeta de visita zero-waste! ¿A qué esperas para hacer la tuya? ';
    const isValidated = props.isValidated;
    return (
        <section className="share__container collapsable-content">
            <button className={`${!isValidated === false ? "button-active" : "button"}`} onClick={props.generateUrl}>
                <i className="far fa-address-card"></i>
                <h2 className="button__title">Crear tarjeta</h2>
            </button>
            <div className={` ${!props.url ? "share__twitter hiddenButton" : "share__twitter -button"}`}>
                <span className="share__twitter-message"> Tu tarjeta ha sido
                    creada:
                </span>
                <a href={props.url} className={` ${!props.url ? "hiddenButton" : "share__twitter-url"}`} target="_blank" rel="noopener noreferrer">{props.url}</a>
                <a target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?text=${twitterText}${props.url}`} className="share__twitter-button">
                    <i className="fab fa-twitter"></i>Compartir en Twitter
                </a>
            </div>
        </section>
    );
}

ShareContent.propTypes = {
    isValidated: PropTypes.bool,
    generateUrl: PropTypes.func,
    url: PropTypes.string,
};

export default ShareContent;