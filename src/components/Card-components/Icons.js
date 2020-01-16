import React from "react";
import "../../stylesheets/Sass-components/Icons.scss";
import PropTypes from 'prop-types';

function Icons(props) {
  const palettes = props.palettesData;

  return (
    <footer className="card__social">
      {props.icons.map((icon, index) => {
        return !props.formData[icon.name] ? (
          <span
            key={index}
            className="card__icon__deactivated"
            target="_blank"
            title={icon.title}
          >
            {" "}
            <i className={icon.i}></i>
          </span>
        ) : (
            <a
              key={index} /* className="icon__palette2"  */
              className={`icon__palette${palettes}`}
              target="_blank"
              rel="noopener noreferrer"
              title={icon.title}
              href={icon.prefix + props.formData[icon.name]}
            >
              <i className={icon.i}></i>
            </a>
          );
      })}
    </footer>
  );
}

Icons.propTypes = {
  palettes: PropTypes.string,
  title: PropTypes.string,
  icons: PropTypes.array,
  formData: PropTypes.object
};

export default Icons;
