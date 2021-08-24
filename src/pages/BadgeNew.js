import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                avatarUrl="https://media-exp1.licdn.com/dms/image/C5603AQGaZYXT3lye2A/profile-displayphoto-shrink_400_400/0/1614566026990?e=1635379200&v=beta&t=JR-FXr4jd4v8byBjRydvGk5VM4Wlybf0KJwDWH8ifOQ"
                firstName="Nicola"
                lastName="Di Candia"
                jobTitle="Front End Developer"
                twitter="iamalexandro"
              />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
