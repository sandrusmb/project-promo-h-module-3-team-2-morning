import React from 'react';
import FillColllapsable from './FillCollapsable';
import FillForm from './FillForm';
import '../../stylesheets/Sass-components/Fill.scss'
function Fill() {
    return (
        <section className="collapsable-box fill hidden">
            <FillColllapsable />
            <FillForm />
        </section>
    );
}

export default Fill;