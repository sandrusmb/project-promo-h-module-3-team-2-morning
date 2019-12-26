import React from 'react';
import Design from './Form-components/Design';
import Fill from './Form-components/Fill';
import Share from './Form-components/Share';
import '../stylesheets/Sass-components/Form.scss';
import collapsableApi from "./api/collapsableApi.json";
import Collapsable from './Form-components/Collapsable';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsable: collapsableApi
        }
    }

    render() {
        return (
            <form className="form">
                <Collapsable >
                    const data = {this.state.collapsable.map((collapsable, index) => {
                        return (
                            {
                                key: { index },
                                collapsable: { collapsable }
                            }

                        );
                    })};
                </Collapsable>
                <Design />
                <Fill />
                <Share />
            </form>
        );
    }
}

export default Form;