import React from 'react';

function Icons() {
    return (
        <footer className="card__social">
            <a className="card__icon js-card__icon js-card__icon--phone js-icon-deactivated" target="_blank"
                title="Contacta por teléfono" href=""><i className="fas fa-mobile-alt"></i></a>

            <a className="card__icon js-card__icon js-card__icon--email js-icon-deactivated" target="_blank"
                title="Escríbeme por email" href=""><i className="far fa-envelope"></i>
            </a> <a
                className="card__icon js-card__icon js-card__icon--linkedin icon-deactivated js-icon-deactivated"
                target="_blank" title="Añádeme a tu red de Linkedin" href=""><i
                    className="fab fa-linkedin-in"></i></a>

            <a className="card__icon js-card__icon js-card__icon--github js-icon-deactivated" target="_blank"
                title="Visita mi portfolio de Github" href=""><i className="fab fa-github-alt"></i>
            </a>
        </footer>
    );
}
export default Icons;