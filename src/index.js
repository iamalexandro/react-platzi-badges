import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import Badge from "./components/Badge";

const container = document.getElementById("app");

ReactDOM.render(
  <Badge
    avatarUrl="https://avatars.githubusercontent.com/u/79062545?v=4"
    firstName="Nicola"
    lastName="Di Candia"
    jobTitle="Front End Developer"
    twitter="iamalexandro"
  />,
  container
);
