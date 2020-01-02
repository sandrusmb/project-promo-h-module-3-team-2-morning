import React from "react";
import Reset from "./Card-components/Reset";
import User from "./Card-components/User";
import Photo from "./Card-components/Photo";
import IconsCard from "./Card-components/Icons";
import '../stylesheets/Sass-components/Card.scss';
import iconsApi from '../api/IconsApi.json';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: iconsApi
    }
  }

  render() {
    return (
      <section className="card">
        <div className="card__wrapper">
          <Reset />
          <article className="card-container js-card-container">
            <User />
            <Photo />
            <IconsCard icons={this.state.icons} />
          </article>
        </div>
      </section>
    );
  }
}
export default Card;
