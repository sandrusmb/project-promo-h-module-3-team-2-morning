import React from 'react';

function Fill() {
    return (
        <section className="collapsable-box fill hidden">
            <header className="collapsable-box__header js-trigger">
                <div> <i className="far fa-keyboard collapsable-box__icon"></i>

                    <h2 className="collapsable-box__title">
                        Rellena
            </h2>

                </div> <i className="fas fa-chevron-down arrow"></i>

            </header>
            <section className="collapsable-content js-content">
                <label className="form__label" for="name">Nombre completo</label>
                <input type="text" className="form__input js-form__input js-name" name="name" id="name"
                    placeholder="Ej: Sally Jill" required value="" />
                <label className="form__label" for="name">Puesto</label>
                <input type="text" className="form__input js-form__input js-role" name="job" id="role"
                    placeholder="Ej: Front-end unicorn" required value="" />
                <label className="form__label" for="img">Imagen de perfil</label>
                <div className="form__input--img">
                    <input type="file" className="js__profile-upload-btn form__file" name="photo" id="img-selector"
                        accept="image/*" />
                    <button for=" file" className="js__profile-trigger form__file--label">Añadir imagen</button>
                    <div className="js__profile-preview form__input--miniature"></div>
                </div>
                <label className="form__label" for="name">Email</label>
                <input type="email" className="form__input js-form__input js-email" name="email" id="email"
                    placeholder="Ej: sally-hill@gmail.com" required value="" />
                <label className="form__label" for="name">Teléfono</label>
                <input type="tel" className="form__input js-form__input js-phone" name="phone" id="phone"
                    placeholder="Ej: 555-55-55-55" required value="" />
                <label className="form__label" for="name">Linkedin</label>
                <input type="text" className="form__input js-form__input js-linkedin" name="linkedin" id="linkedin"
                    placeholder="Ej: sally.hill" required value="" />
                <label className="form__label" for="name">Github</label>
                <input type="text" className="form__input js-form__input js-github" name="github" id="github"
                    placeholder="Ej: sally-hill" required value="" />
            </section>
        </section>
    );
}

export default Fill;