import React from 'react';
import Design from './Form-components/Design';
import Fill from './Form-components/Fill';
import Share from './Form-components/Share';
import Collapsable from './Form-components/Collapsable';
import collapsableApi from '../api/collapsableApi.json';
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
        console.log(this.props.palettesData)
        return (
            <form className="form">

                <Collapsable icons={data[0].icon} names={data[0].name}>
                    <Design
                        palettesData={this.props.palettesData}
                        handlePalette={this.props.handlePalette} />
                </Collapsable>

                <Collapsable icons={data[1].icon} names={data[1].name} >
                    <Fill
                        handleInput={this.props.handleInput} file={this.props.file}
                        formData={this.props.formData} />
                </Collapsable>

                <Collapsable icons={data[2].icon} names={data[2].name} >
                    <Share />
                </Collapsable>
            </form >
        );
    }
}

export default Form;