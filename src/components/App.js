import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/Home";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import NotFound from "../pages/NotFound"

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/badges" component={Badges} />
            <Route exact path="/badges/new" component={BadgeNew} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
