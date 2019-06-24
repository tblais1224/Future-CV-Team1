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
            <div classname="col s6">
              <Link
                to="/register"
                style={{ width: "140px", borderRadius: "3px" }}
                className="btn"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px"
                }}
                className="btn"
              >
                login
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
