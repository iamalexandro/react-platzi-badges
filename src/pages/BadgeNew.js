import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    console.log("Submit button was clicked");
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 mt-4">
              <Badge
                avatarUrl="https://media-exp1.licdn.com/dms/image/C5603AQGaZYXT3lye2A/profile-displayphoto-shrink_400_400/0/1614566026990?e=1666224000&v=beta&t=9F6COVKCPGemvamjHLZBpSWa9qJG9je4f698KVTZEOY"
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                twitter={this.state.form.twitter}
              />
            </div>
            <div className="col-sm-12 col-md-6 mt-4">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
