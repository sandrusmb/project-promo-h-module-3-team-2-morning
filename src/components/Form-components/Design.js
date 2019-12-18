import React from 'react';
import DesignCollapsable from './DesignCollapsable';
import DesignPalettes from './DesignPalettes';
import '../../stylesheets/Sass-components/Design.scss'

// No sabemos porque existe ese design

function Design() {
    return (
        <section className="collapsable-box design">
            <DesignCollapsable />
            <DesignPalettes />
        </section>
    );
}

export default Design;