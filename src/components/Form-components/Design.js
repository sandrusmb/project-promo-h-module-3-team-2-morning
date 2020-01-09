import React from "react";
import DesignPalettes from "./DesignPalettes";
import "../../stylesheets/Sass-components/Design.scss";
import DesignPalette from "./DesignPalette";
import api from "../../api/data.json";

class Design extends React.Component {
  constructor() {
    super();
    this.state = { data: api };
  }
  render() {
    console.log(this.props.palettesData)
    return (
      <section className="collapsable-box design">

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
                defaultChecked={palette.defaultChecked}
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

export default Design;
