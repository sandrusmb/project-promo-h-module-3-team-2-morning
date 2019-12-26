import React from 'react';
import Design from './Form-components/Design';
import Fill from './Form-components/Fill';
import Share from './Form-components/Share';
import '../stylesheets/Sass-components/Form.scss';
import iconsApi from '../api/IconsApi.json';
import IconsCard from './Card-components/Icons';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconsApi: iconsApi
        }
    }
    render() {
        return (
            <form className="form">
                <IconsCard iconsApi={this.state.iconsApi} />
                <Design />
                <Fill />
                <Share />
            </form>
        );
    }
}

export default Form;