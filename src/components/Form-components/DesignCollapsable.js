import React from 'react';
import '../../stylesheets/Sass-components/DesignCollapsable.scss'

function DesignCollapsable() {
    return (
        <header className="collapsable-box__header js-trigger">
            <div>
                <i className="far fa-object-ungroup collapsable-box__icon"></i>
                <h2 className="collapsable-box__title">
                    Diseña
                </h2>
            </div>
            <i className="fas fa-chevron-down arrow"></i>
        </header>
    );
}

export default DesignCollapsable;