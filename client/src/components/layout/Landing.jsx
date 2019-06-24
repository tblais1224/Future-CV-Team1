import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div>
          <h1>put a carousel here</h1>
          <h1>add login/register button</h1>
          <Link to="/login" className="loginButton"/>
        </div>
      </div>
    );
  }
}

export default Landing;
