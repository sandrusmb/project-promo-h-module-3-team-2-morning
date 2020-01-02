import React from 'react';


function ShareCollapsable() {
    return (
        <header className="collapsable-box__header js-trigger">
            <div>
                <i className="fas fa-share-alt collapsable-box__icon"></i>

                <h2 className="collapsable-box__title">Comparte</h2>

            </div> <i className="fas fa-chevron-down arrow"></i>

        </header>
    );
}

export default ShareCollapsable;