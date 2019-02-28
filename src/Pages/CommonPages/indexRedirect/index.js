import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Frontpage extends Component {
  componentDidMount() {
    //this.RedirectPage();
  }

  render() {
    return (
      <div>
        {/* <Redirect to="/Login" /> */}
        <Redirect to="/Website/HomePage" />
      </div>
    );
  }
}

export default Frontpage;
