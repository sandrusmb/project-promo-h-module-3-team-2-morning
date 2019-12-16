import React from 'react';
import Reset from './Card-components/Reset';

function Card() {
    return (
        <section className="card">
            <div className="card__wrapper">
                {/* RESET */}
                <Reset />

                <article class="card-container js-card-container">
                    {/* USER DETAILS */}
                    <div class="user-details">
                        <header class="card__header js-card__header">
                            <h1 class="card__name js-card__name">
                                Nombre Apellido
                            </h1>

                            <h2 class="card__role js-card__role">
                                Front-end developer
                            </h2>

                        </header>
                    </div>
                    {/* FOTO */}
                    <div class="js__profile-image card__img-container"></div>
                    {/* ICONOS */}
                    <footer class="card__social">
                        <a class="card__icon js-card__icon js-card__icon--phone js-icon-deactivated" target="_blank"
                            title="Contacta por teléfono" href=""><i class="fas fa-mobile-alt"></i></a>

                        <a class="card__icon js-card__icon js-card__icon--email js-icon-deactivated" target="_blank"
                            title="Escríbeme por email" href=""><i class="far fa-envelope"></i>
                        </a> <a
                            class="card__icon js-card__icon js-card__icon--linkedin icon-deactivated js-icon-deactivated"
                            target="_blank" title="Añádeme a tu red de Linkedin" href=""><i
                                class="fab fa-linkedin-in"></i></a>

                        <a class="card__icon js-card__icon js-card__icon--github js-icon-deactivated" target="_blank"
                            title="Visita mi portfolio de Github" href=""><i class="fab fa-github-alt"></i>
                        </a>
                    </footer>
                </article>
            </div>
        </section>
    );
}
export default Card;