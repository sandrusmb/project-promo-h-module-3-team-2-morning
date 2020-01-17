import React from "react";
import "../../stylesheets/Sass-components/Photo.scss";
import PropTypes from 'prop-types';
import photoDefault from '../../images/photodefault.png';


function Photo(props) {

  return <div className="card__img-container" style={{ backgroundImage: `url(${props.formData.file || photoDefault})` }} >
  </div>;
}

Photo.propTypes = {
  file: PropTypes.string,
};

export default Photo;
