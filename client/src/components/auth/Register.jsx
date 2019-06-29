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
      <div className="register-container">
        <form class="form-horizontal m-5">
          <h2 style={{ textAlign: "center" }}>
            Create a new FutureCV account!
          </h2>
          <div class="form-group">
            <label for="inputEmail" class="col-sm-2 control-label">
              Email
            </label>
            <div class="col-sm-10 ">
              <input
                type="email"
                autoComplete="email"
                class="form-control"
                id="inputEmail"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword" class="col-sm-2 control-label">
              Password
            </label>
            <div class="col-sm-10">
              <input
                type="password"
                autoComplete="new-password"
                class="form-control"
                id="inputPassword"
                placeholder="Password"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword2" class="col-sm-2 control-label">
              Confirm Password
            </label>
            <div class="col-sm-10">
              <input
                type="password"
                autoComplete="new-password"
                class="form-control"
                id="inputPassword2"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="radioUserType" class="col-sm-2 control-label">
              Account Type
            </label>
            <div class="col-sm-offset-2 col-sm-10">
              <div class="radio">
                <label>
                  <input
                    type="radio"
                    name="resumeUser"
                    value="resumeUser"
                    checked={this.state.type === "resumeUser"}
                    onChange={this.handleChange}
                  />{" "}
                  Check this to build a resume
                </label>
              </div>
            </div>
            <div class="col-sm-offset-2 col-sm-10">
              <div class="radio">
                <label>
                  <input
                    type="radio"
                    name="employer"
                    value="employerUser"
                    checked={this.state.type === "employerUser"}
                    onChange={this.handleChange}
                  />{" "}
                  Check this if you are an employer
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-info">
                Create Account
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
