import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import Home from "./home";
import Works from "./Works";
import About from "./About";
import Contact from "./Contact";
import Header from "./header";
class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route activeClassName="active" path="/" exact component={Home} />
              <Route path="/Works" exact component={Works} />
              <Route path="/About" exact component={About} />
              <Route path="/Contact" exact component={Contact} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
