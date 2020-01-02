import React from "react";

class DesignPalette extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="color-box__palettes">
          <div className="palette-container">
            <label
              htmlFor={this.props.htmlFor}
              className="palette-container__label"
            >
              <input
                id={this.props.id}
                type={this.props.type}
                value={this.props.value}
                name={this.props.name}
                className="palette-container__input"
                defaultChecked={this.props.defaultChecked}
              />
              <div className="palette">
                <div className="palette__box--darkGreen"></div>
                <div className="palette__box--medGreen"></div>
                <div className="palette__box--lightGreen"></div>
              </div>
            </label>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DesignPalette;
