import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/badges" component={Badges} />
          <Route path="/badges/new" component={BadgeNew} />
        </Router>
      </div>
    );
  }
}

export default App;
