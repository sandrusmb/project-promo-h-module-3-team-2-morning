import React from 'react';

function FillColllapsable() {
    return (
        <header className="collapsable-box__header js-trigger">
            <div> <i className="far fa-keyboard collapsable-box__icon"></i>
                <h2 className="collapsable-box__title">
                    Rellena
                    </h2>
            </div> <i className="fas fa-chevron-down arrow"></i>
        </header>
    );
}

export default FillColllapsable;