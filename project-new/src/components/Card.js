import React from 'react';
import Reset from './Card-components/Reset';
import User from './Card-components/User';
import Photo from './Card-components/Photo';
import Icons from './Card-components/Icons';

function Card() {
    return (
        <section className="card">
            <div className="card__wrapper">
                <Reset />
                <article className="card-container js-card-container">
                    <User />
                    <Photo />
                    <Icons />
                </article>
            </div>
        </section>
    );
}
export default Card;