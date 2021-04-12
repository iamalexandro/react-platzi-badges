import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";
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
            <div className="col">
              <Badge
                avatarUrl="https://media-exp1.licdn.com/dms/image/C5603AQGaZYXT3lye2A/profile-displayphoto-shrink_200_200/0/1614566026990?e=1623888000&v=beta&t=VXYRat638GJJRVuhgV5DRR-2AaTUYo7H4GwPf7aqT-E"
                firstName="Nicola"
                lastName="Di Candia"
                jobTitle="Front End Developer"
                twitter="iamalexandro"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
