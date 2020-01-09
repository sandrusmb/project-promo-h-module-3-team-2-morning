import React from "react";
import Reset from "./Card-components/Reset";
import User from "./Card-components/User";
import Photo from "./Card-components/Photo";
import IconsCard from "./Card-components/Icons";
import "../stylesheets/Sass-components/Card.scss";

import iconsApi from "../api/iconsapi.json";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: iconsApi
    };
  }

  render() {
    // console.log(this.props.palettesData);
    return (
      <section className="card">
        <div className="card__wrapper">
          <Reset />
          <article className="card-container">
            <User formData={this.props.formData} palettesData={this.props.palettesData} />
            <Photo formData={this.props.formData} />
            <IconsCard icons={this.state.icons} formData={this.props.formData} palettesData={this.props.palettesData} />
          </article>
        </div>
      </section>
    );
  }
}
export default Card;
