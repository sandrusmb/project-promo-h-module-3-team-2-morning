import React from 'react';
import '../../stylesheets/Sass-components/Collapsable.scss'

class Collapsable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsable: "hidden"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => {
            let collapsDisplay;
            if (prevState.collapsable === "hidden") {
                collapsDisplay = "open";
            } else {
                collapsDisplay = "hidden";
            }
            return {
                collapsable: collapsDisplay
            };
        });
    }

    render() {
        return (
            <section className={`${this.state.collapsable} collapsable-box`}>
                <header className="collapsable-box__header" onClick={this.handleClick}>
                    <div>
                        <i className={`${this.props.icons} collapsable-box__icon`}></i>
                        <h2 className="collapsable-box__title">
                            {this.props.names}
                        </h2>
                    </div>
                    <i className="fas fa-chevron-down collapsible--arrow"></i>
                </header>
                <div className={`${this.state.collapsable} collapsable-content`}>
                    {this.props.children}
                </div>
            </section>
        );
    }
}

export default Collapsable;