import React from "react";
import "../../stylesheets/Sass-components/Photo.scss";
import PropTypes from 'prop-types';


function Photo(props) {

  return <div className="card__img-container" style={{ backgroundImage: `url(${props.formData.file || '/static/media/photodefault.157001de.png'})` }} >
  </div>;
}

Photo.propTypes = {
  file: PropTypes.string,
};

export default Photo;
