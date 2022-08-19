import React from "react";

import "./styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="home__element">Welcome to Platzi</h1>
      <div className="home__element">
        <Link to="/badges" className="btn btn-primary">
          New Badge
        </Link>
        {/* <button className="btn btn-primary">Go to Badges</button> */}
      </div>
    </div>
  );
}

export default Home;
