import React, { Component } from "react";
import PropTypes from "prop-types";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      password2: "",
      type: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  //radio button handler
  handleChange(event) {
    this.setState({
      type: event.target.value
    });
  }

  render() {
    return (
      <div className="login-container">
        <form className="form-horizontal m-5" style={{ maxWidth: "800px" }}>
          <h2 style={{ textAlign: "center" }}>Login to your account!</h2>
          <div className="form-group">
            <label htmlFor="inputEmail" className="col-sm-2 control-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                autoComplete="email"
                className="form-control margin-auto"
                id="inputEmail"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword" className="col-sm-2 control-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                autoComplete="current-password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-info">
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
