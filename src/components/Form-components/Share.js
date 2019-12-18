import React from 'react';
import ShareCollapsable from './ShareCollapsable';
import ShareContent from './ShareContent';
import '../../stylesheets/Sass-components/Share.scss'


function Share() {
    return (
        <section className="collapsable-box hidden">
            <ShareCollapsable />
            <ShareContent />
        </section>
    );
}
export default Share;