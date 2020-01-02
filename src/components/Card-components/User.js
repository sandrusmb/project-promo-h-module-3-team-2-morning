import React from "react";
import "../../stylesheets/Sass-components/User.scss";

class User extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);

    return (
      <div className="user-details">
        <header className="card__header js-card__header">
          <h1 className="card__name js-card__name">{this.props.formData.name !== "" ? this.props.formData.name : "Nombre Apellido"}</h1>
          <h2 className="card__role js-card__role">{this.props.formData.job}</h2>
        </header>
      </div>
    );
  }
}
export default User;
