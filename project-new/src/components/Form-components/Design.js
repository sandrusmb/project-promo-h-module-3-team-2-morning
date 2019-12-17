import React from 'react';
import DesignCollapsable from './DesignCollapsable';
import DesignPalettes from './DesignPalettes';

function Design() {
    return (
        <section className="collapsable-box design">
            <DesignCollapsable />
            <DesignPalettes />
        </section>
    );
}

export default Design;