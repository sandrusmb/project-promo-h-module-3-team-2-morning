import React from "react";
import DesignPalettes from "./DesignPalettes";
import "../../stylesheets/Sass-components/Design.scss";
import DesignPalette from "./DesignPalette";
import api from "../api/data";

// No sabemos porque existe ese design

class Design extends React.Component {
  constructor() {
    super();
    this.state = { data: api };
  }
  render() {
    return (
      <section className="collapsable-box design">
        <DesignPalettes>
          {this.state.data.map((paleta, key) => {
            return (
              <DesignPalette
                key={key}
                htmlFor={paleta.htmlFor}
                id={paleta.id}
                type={paleta.type}
                value={paleta.value}
                name={paleta.name}
                defaultChecked={paleta.defaultChecked}
              />
            );
          })}
        </DesignPalettes>
      </section>
    );
  }
}

export default Design;
