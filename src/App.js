import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Welcome from "./Pages/CommonPages/Login/Welcome";

class App extends Component {
  state = {
    loggedIn: false
  };

  //Check if auth is present in the localstorage
  componentWillMount() {
    if (!localStorage.getItem("auth")) {
      this.setState({
        loggedIn: true
      });
    } else {
      this.setState({
        loggedIn: false
      });
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" name="Welcome" component={Welcome} />
        </div>
      </Router>
    );
  }
}

export default App;
