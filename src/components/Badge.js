import React from "react";

import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://avatars.githubusercontent.com/u/79062545?v=4"
            alt="Avatar"
          />
          <h1>
            Nicola <br />
            Di Candia
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Front End Developer</h3>
          <div>@iamalexandro98</div>
        </div>

        <div className="Badge__footer">#PlatziConf</div>
      </div>
    );
  }
}

export default Badge;
