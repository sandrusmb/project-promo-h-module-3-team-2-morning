import React from 'react';
import Design from './Form-components/Design';
import Fill from './Form-components/Fill';
import Share from './Form-components/Share';
import '../stylesheets/Sass-components/Form.scss';

function Form() {
    return (
        <form className="form">
            <Design />
            <Fill />
            <Share />
        </form>
    );
}

export default Form;