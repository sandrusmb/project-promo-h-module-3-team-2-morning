import React from "react";
import Reset from "./Card-components/Reset";
import User from "./Card-components/User";
import Photo from "./Card-components/Photo";
import IconsCard from "./Card-components/Icons";
import "../stylesheets/Sass-components/Card.scss";
import iconsApi from "../api/iconsapi.json";
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <section className="card">
      <div className="card__wrapper">
        <Reset resetData={props.resetData} />
        <article className="card-container">
          <User formData={props.formData} palettesData={props.palettesData} />
          <Photo formData={props.formData} />
          <IconsCard icons={iconsApi} formData={props.formData} palettesData={props.palettesData} />
        </article>
      </div>
    </section>
  );
}

Card.propTypes = {
  resetData: PropTypes.func,
  formData: PropTypes.object,
  icons: PropTypes.string,
  palettesData: PropTypes.string
};

export default Card;
