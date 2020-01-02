import React from "react";
import "../../stylesheets/Sass-components/DesignPalettes.scss";

function DesignPalettes(props) {
  return (
    <div className="collapsable-content js-content color-box">
      <h3 className="color-box__title">Colores</h3>
      <div className="color-box__palettes">
        <p>{props.children}</p>
      </div>
    </div>
  );
}

export default DesignPalettes;

/* function DesignPalettes() {
  return (
    <div className="collapsable-content js-content color-box">
      <h3 className="color-box__title">Colores</h3>
      <div className="color-box__palettes">
        <div className="palette-container">
          <label htmlFor="palette1" className="palette-container__label">
            <input
              id="palette1"
              type="radio"
              value="1"
              name="palette"
              className="palette-container__input"
              defaultChecked="defaultChecked"
            />
            <div className="palette">
              <div className="palette__box--darkGreen"></div>
              <div className="palette__box--medGreen"></div>
              <div className="palette__box--lightGreen"></div>
            </div>
          </label>
        </div>
        <div className="palette-container">
          <label htmlFor="palette2" className="palette-container__label">
            <input
              id="palette2"
              type="radio"
              value="2"
              name="palette"
              className="palette-container__input"
            />
            <div className="palette">
              <div className="palette__box--darkRed"></div>
              <div className="palette__box--medRed"></div>
              <div className="palette__box--lightRed"></div>
            </div>
          </label>
        </div>
        <div className="palette-container">
          <label htmlFor="palette3" className="palette-container__label">
            <input
              id="palette3"
              type="radio"
              value="3"
              name="palette"
              className="palette-container__input"
            />
            <div className="palette">
              <div className="palette__box--darkGray"></div>
              <div className="palette__box--beige"></div>
              <div className="palette__box--lightGray"></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
} */
