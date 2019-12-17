import React from "react";
import photoDefault from "../../images/photodefault.png";

function Photo() {
  return (
    <div className="js__profile-image card__img-container">
      <img src={photoDefault} alt="default photo" title="photo" />
    </div>
  );
}
export default Photo;
