import React from 'react';
import "../../stylesheets/Sass-components/Icons.scss";

function Icons(props) {
  console.log(props.iconsApi)
  return (
    <footer className="card__social">
      {props.iconsApi.map((iconApi, index) => {
        return <div>
          <a
            key={index}
            className="card__icon js-card__icon js-card__icon--phone js-icon-deactivated"
            target="_blank"
            title={iconApi.title}
            href=""></a>
          <i className={props.iconApi.i}></i>
        </div>
      }
      )}
    </footer>

  );
}


export default Icons;
