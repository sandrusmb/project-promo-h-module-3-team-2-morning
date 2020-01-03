import React from "react";
import "../../stylesheets/Sass-components/User.scss";

class User extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    const name = this.props.formData.name;
    const job = this.props.formData.job;

    return (
      <div className="user-details">
        <header className="card__header js-card__header">
          <h1 className="card__name js-card__name">{!name ? "Nombre Apellido" : name}</h1>
          <h2 className="card__role js-card__role">{!job ? "Front-end Developer" : job}</h2>
        </header>
      </div>
    );
  }
}
export default User;
