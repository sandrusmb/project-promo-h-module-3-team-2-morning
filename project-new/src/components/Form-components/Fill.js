import React from 'react';
import FillColllapsable from './FillCollapsable';
import FillForm from './FillForm';

function Fill() {
    return (
        <section className="collapsable-box fill hidden">
            <FillColllapsable />
            <FillForm />
        </section>
    );
}

export default Fill;