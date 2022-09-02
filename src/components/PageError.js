import React, { Component } from "react";

import "./styles/PageError.css";

export default class PageError extends Component {
  render() {
    return (
      <div className="PageError">
        <h3>{this.props.error.message} 🤒</h3>
      </div>
    );
  }
}
