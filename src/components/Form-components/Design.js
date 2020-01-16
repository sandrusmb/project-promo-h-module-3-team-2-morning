import React from "react";
import DesignPalettes from "./DesignPalettes";
import DesignPalette from "./DesignPalette";
import api from "../../api/data.json";
import PropTypes from 'prop-types';

class Design extends React.Component {
  constructor() {
    super();
    this.state = { data: api };
  }
  render() {

    return (
      <section>
        <DesignPalettes>


          {this.state.data.map((palette, key) => {
            return (
              <DesignPalette
                key={key}
                htmlFor={palette.htmlFor}
                id={palette.id}
                type={palette.type}
                value={palette.value}
                name={palette.name}
                checked={this.props.palettesData === palette.value}
                color1={palette.colors.color1}
                color2={palette.colors.color2}
                color3={palette.colors.color3}
                handlePalette={this.props.handlePalette}
                palettesData={this.props.palettesData}

              />
            );
          })}

        </DesignPalettes>
      </section>
    );
  }
}

Design.propTypes = {
  handlePalette: PropTypes.func,
  palettesData: PropTypes.string,
};

export default Design;
