import React from 'react';
import Design from './Form-components/Design';
import Fill from './Form-components/Fill';
import Share from './Form-components/Share';
import '../stylesheets/Sass-components/Form.scss';
import collapsableApi from './api/collapsableApi.json';
import Collapsable from './Form-components/Collapsable';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsable: collapsableApi
        };

    }

    render() {
        const data = this.state.collapsable;

        return (
            <form className="form">

                <Collapsable
                    icons={data[0].icon} names={data[0].name}
                />
                <Design />
                <Collapsable
                    icons={data[1].icon} names={data[1].name}
                />
                <Fill />
                <Collapsable
                    icons={data[2].icon} names={data[2].name}
                />
                <Share />
            </form>
        );
    }
}

export default Form;