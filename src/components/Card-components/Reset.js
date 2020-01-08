import React from "react";
import "../../stylesheets/Sass-components/Reset.scss";

function Reset(props) {
  return (
    <div className="card__reset js-card-reset" onClick={props.resetData} title="Resetea los cambios">
      <i className="far fa-trash-alt"></i>
      Reset
    </div>
  );
}
export default Reset;
