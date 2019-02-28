import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import WebsiteLayout from "./WebsiteLayout";
import FrontPage from "./Pages/CommonPages/indexRedirect/index";
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

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
    //let loggedIn = this.state.loggedIn;
    return (
      <Router>
        <div>
          <Route path="/Website" name="Home" component={WebsiteLayout} />
          <Route exact={true} path="/" name="index" component={FrontPage} />
        </div>
      </Router>
    );
  }
}

export default App;
