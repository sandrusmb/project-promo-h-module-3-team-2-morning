import React from 'react';
import Design from './Form-components/Design';
import Fill from './Form-components/Fill';
import Share from './Form-components/Share';
import Collapsable from './Form-components/Collapsable';
import collapsableApi from './api/collapsableApi.json';
import '../stylesheets/Sass-components/Form.scss';

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
                <section className="collapsable-box design">
                    <Collapsable icons={data[0].icon} names={data[0].name} />
                    <Design />
                </section>


                <section className="collapsable-box fill hidden">
                    <Collapsable icons={data[1].icon} names={data[1].name} />
                    <Fill />
                </section>

                <section className="collapsable-box hidden">
                    <Collapsable icons={data[2].icon} names={data[2].name} />
                    <Share />
                </section>
            </form>
        );
    }
}

export default Form;