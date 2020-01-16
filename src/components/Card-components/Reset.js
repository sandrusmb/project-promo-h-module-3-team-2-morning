import React from "react";
import "../../stylesheets/Sass-components/Reset.scss";
import PropTypes from 'prop-types';

function Reset(props) {
  console.log(props.resetData)
  return (
    <div className="card__reset" onClick={props.resetData} title="Resetea los cambios">
      <i className="far fa-trash-alt"></i>
      <p className="reset-title">Reset</p>
    </div>
  );
}

Reset.propTypes = {
  resetData: PropTypes.func,
};

export default Reset;
