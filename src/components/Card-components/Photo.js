import React from "react";
import "../../stylesheets/Sass-components/Photo.scss";


function Photo(props) {
    console.log(props.formData.file);
  return <div className="js__profile-image card__img-container"  style={{backgroundImage: `url(${props.formData.file || '/static/media/photodefault.157001de.png'})`}} >
  </div>;
}
export default Photo;
