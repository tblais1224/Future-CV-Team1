import React, { Component } from "react";
//Provides declarative, accessible navigation around your application.
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="col-xs-1" align="center">
          <h1>put a carousel here</h1>
          <h1>add login/register button</h1>
          <Link className="btn-info btn-lg m-5" to="/register">Register</Link>
          <Link className="btn-white bord btn-lg border border-success m-5" to="/login">Login</Link>
          </div>
      </div>
    );
  }
}

export default Landing;
