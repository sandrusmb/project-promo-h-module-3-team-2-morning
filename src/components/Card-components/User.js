import React from "react";
import "../../stylesheets/Sass-components/User.scss";
import PropTypes from 'prop-types';

class User extends React.Component {
  render(props) {
    const name = this.props.formData.name;
    const job = this.props.formData.job;
    const palettes = this.props.palettesData;
    return (
      <div className="user-details">
        <header className={`user__palette${palettes || 1}`}>
          <h1 className="card__name">{!name ? "Nombre Apellido" : name}</h1>
          <h2 className="card__role">{!job ? "Front-end Developer" : job}</h2>
        </header>
      </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
  palettes: PropTypes.string,
};

export default User;
