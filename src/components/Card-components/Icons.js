import React from "react";
import "../../stylesheets/Sass-components/Icons.scss";

function Icons(props) {
  console.log(props.palettesData);
  const palette = props.palettesData;

  return (
    <footer className="card__social">
      {props.icons.map((icon, index) => {
        return (
          !props.formData[icon.name]
            ? <span key={index} className="icon__palette1 card__icon js-icon-deactivated" target="_blank" title={icon.title}><i className={icon.i}></i></span>
            :
            <a key={index} className="card__icon" target="_blank" title={icon.title} href={icon.prefix + props.formData[icon.name]}>
              <i className={icon.i}></i>
            </a>
        );
      })}
    </footer>
  );
}

export default Icons;
