import React from "react";
import "../../stylesheets/Sass-components/Fill.scss";
import "../../stylesheets/Sass-components/FillForm.scss";

function Fill() {
    return (
        <section className="collapsable-content js-content">
            <label className="form__label" htmlFor="name">
                Nombre completo
      </label>
            <input
                type="text"
                className="form__input js-form__input js-name"
                name="name"
                id="name"
                placeholder="Ej: Sally Jill"
                required
                defaultValue=""
            />
            <label className="form__label" htmlFor="name">
                Puesto
      </label>
            <input
                type="text"
                className="form__input js-form__input js-role"
                name="job"
                id="role"
                placeholder="Ej: Front-end unicorn"
                required
                defaultValue=""
            />
            <label className="form__label" htmlFor="img">
                Imagen de perfil
      </label>
            <div className="form__input--img">
                <input
                    type="file"
                    className="js__profile-upload-btn form__file"
                    name="photo"
                    id="img-selector"
                    accept="image/*"
                />
                <button
                    htmlFor=" file"
                    className="js__profile-trigger form__file--label"
                >
                    Añadir imagen
        </button>
                <div className="js__profile-preview form__input--miniature"></div>
            </div>
            <label className="form__label" htmlFor="name">
                Email
      </label>
            <input
                type="email"
                className="form__input js-form__input js-email"
                name="email"
                id="email"
                placeholder="Ej: sally-hill@gmail.com"
                required
                defaultValue=""
            />
            <label className="form__label" htmlFor="name">
                Teléfono
      </label>
            <input
                type="tel"
                className="form__input js-form__input js-phone"
                name="phone"
                id="phone"
                placeholder="Ej: 555-55-55-55"
                required
                defaultValue=""
            />
            <label className="form__label" htmlFor="name">
                Linkedin
      </label>
            <input
                type="text"
                className="form__input js-form__input js-linkedin"
                name="linkedin"
                id="linkedin"
                placeholder="Ej: sally.hill"
                required
                defaultValue=""
            />
            <label className="form__label" htmlFor="name">
                Github
      </label>
            <input
                type="text"
                className="form__input js-form__input js-github"
                name="github"
                id="github"
                placeholder="Ej: sally-hill"
                required
                defaultValue=""
            />
        </section>
    );
}

export default Fill;
