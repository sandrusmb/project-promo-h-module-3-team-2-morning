import React from "react";
import "../../stylesheets/Sass-components/DesignPalettes.scss";
import PropTypes from 'prop-types';

function DesignPalettes(props) {
  return (
    <div className="collapsable-content color-box">
      <h3 className="color-box__title">Colores</h3>
      <div className="color-box__palettes">
        <div>{props.children}</div>
      </div>
    </div>
  );
}

DesignPalettes.propTypes = {
  children: PropTypes.array,
};

export default DesignPalettes;