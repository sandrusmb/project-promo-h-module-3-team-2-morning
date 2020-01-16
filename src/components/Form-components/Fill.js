import React from "react";
import "../../stylesheets/Sass-components/FillForm.scss";
import PropTypes from 'prop-types';


class Fill extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleImage = this.handleImage.bind(this);

  }
  handleImage(ev) {
    const fr = new FileReader();
    const myFile = ev.target.files[0];
    fr.onload = () => {
      this.props.handleInput({
        id: 'file',
        inputValue: fr.result
      })
    };
    fr.readAsDataURL(myFile);
  }

  handleInput(ev) {
    this.props.handleInput({
      id: ev.target.id,
      inputValue: ev.target.value
    });
  }
  handleClick(event) {
    event.preventDefault();
    this.fileInput.current.click();
  }

  render() {
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
        <input type="text" className="form__input" name="name" id="name" value={name} placeholder="Ej: Sally Jill" required onChange={this.handleInput} />
        <label className="form__label" htmlFor="job">
          Puesto
        </label>
        <input type="text" className="form__input" name="job" id="job" value={job} placeholder="Ej: Front-end unicorn" required onChange={this.handleInput} />
        <label className="form__label" htmlFor="photo">
          Imagen de perfil
        </label>
        <div className="form__input--img">
          <input type="file" className="form__file" name="file" id="file" accept="image/*" ref={this.fileInput} onChange={this.handleImage} value={this.props.value} />
          <button type="button" htmlFor=" file" className="form__file--label" onClick={this.handleClick}>
            Añadir imagen
          </button>
          <div className="form__input--miniature" style={{ backgroundImage: `url(${this.props.file})` }}></div>
        </div>
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input type="email" className="form__input" name="email" id="email" value={email} placeholder="Ej: sally-hill@gmail.com" required onChange={this.handleInput} />
        <label className="form__label" htmlFor="phone">
          Teléfono
        </label>
        <input type="tel" className="form__input" name="phone" id="phone" value={phone} placeholder="Ej: 555-55-55-55" required onChange={this.handleInput} />
        <label className="form__label" htmlFor="linkedin">
          Linkedin
        </label>
        <input type="text" className="form__input" name="linkedin" id="linkedin" value={linkedin} placeholder="Ej: sally.hill" required onChange={this.handleInput} />
        <label className="form__label" htmlFor="github">
          Github
        </label>
        <input type="text" className="form__input" name="github" id="github" value={github} placeholder="Ej: sally-hill" required onChange={this.handleInput} />
      </section>
    );
  }
}

Fill.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.number,
  linkedin: PropTypes.string,
  github: PropTypes.string
};


export default Fill;
