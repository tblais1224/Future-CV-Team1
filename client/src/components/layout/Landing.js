import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="landing-title">
            <h4>Welcome to FutureCV!</h4>
            <br />
            <div classname="col">
              <Link
                to="/register"
                style={{ width: "140px", borderRadius: "3px" }}
                className="btn"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
