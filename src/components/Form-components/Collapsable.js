import React from 'react';


class Collapsable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="collapsable-box__header js-trigger">
                <div>
                    <i className={`${this.props.collapsable.icon} collapsable-box__icon`}></i>
                    <h2 className="collapsable-box__title">
                        {this.props.collapsable.name}
                    </h2>
                </div>
                <i className="fas fa-chevron-down arrow"></i>
            </header>
        );
    }
}

export default Collapsable;