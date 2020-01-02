import React from 'react';
import '../../stylesheets/Sass-components/Collapsable.scss'
class Collapsable extends React.Component {

    render() {

        return (
            <header className="collapsable-box__header js-trigger">
                <div>
                    <i className={`${this.props.icons} collapsable-box__icon`}></i>
                    <h2 className="collapsable-box__title">
                        {this.props.names}
                    </h2>
                </div>
                <i className="fas fa-chevron-down arrow"></i>
            </header >
        );
    }
}

export default Collapsable;