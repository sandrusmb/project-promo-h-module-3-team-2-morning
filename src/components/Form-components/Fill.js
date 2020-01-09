import React from "react";
import "../../stylesheets/Sass-components/Fill.scss";
// Esta clase de scss se debe de poner en Fill scss
import "../../stylesheets/Sass-components/FillForm.scss";

// function Fill (props) {
//   function handleInput(ev) {
//     props.handleInput(...)
//   }
//   return (
//     <div onClick={handleInput}>hola mundo</div>
//   )
// }

class Fill extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(ev) {
    this.props.handleInput({
      id: ev.target.id,
      inputValue: ev.target.value
    });
  }

  render() {
    console.log(this.props.formData.job)
    const name = this.props.formData.name;
    const job = this.props.formData.job;
    const email = this.props.formData.email;
    const phone = this.props.formData.phone;
    const linkedin = this.props.formData.linkedin;
    const github = this.props.formData.github;



    return (
      <section className="collapsable-content js-content">
        <label className="form__label" htmlFor="name">
          Nombre completo
        </label>
        <input type="text" className="form__input js-form__input" name="name" id="name" placeholder="Ej: Sally Jill" required defaultValue="" onChange={this.handleInput} />
        <label className="form__label" htmlFor="job">
          Puesto
        </label>
        <input type="text" className="form__input js-form__input" name="job" id="job" placeholder="Ej: Front-end unicorn" required defaultValue="" onChange={this.handleInput} />
        <label className="form__label" htmlFor="photo">
          Imagen de perfil
        </label>
        <div className="form__input--img">
          <input type="file" className="js__profile-upload-btn form__file" name="photo" id="img-selector" accept="image/*" />
          <button htmlFor=" file" className="js__profile-trigger form__file--label">
            Añadir imagen
          </button>
          <div className="js__profile-preview form__input--miniature"></div>
        </div>
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input type="email" className="form__input" name="email" id="email" placeholder="Ej: sally-hill@gmail.com" required defaultValue="" onChange={this.handleInput} />
        <label className="form__label" htmlFor="phone">
          Teléfono
        </label>
        <input type="tel" className="form__input" name="phone" id="phone" placeholder="Ej: 555-55-55-55" required defaultValue="" onChange={this.handleInput} />
        <label className="form__label" htmlFor="linkedin">
          Linkedin
        </label>
        <input type="text" className="form__input" name="linkedin" id="linkedin" placeholder="Ej: sally.hill" required defaultValue="" onChange={this.handleInput} />
        <label className="form__label" htmlFor="github">
          Github
        </label>
        <input type="text" className="form__input" name="github" id="github" placeholder="Ej: sally-hill" required defaultValue="" onChange={this.handleInput} />
      </section>
    );
  }
}

export default Fill;
