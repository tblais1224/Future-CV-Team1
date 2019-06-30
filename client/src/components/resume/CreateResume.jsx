import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { connect } from "react-redux";
import { createResume } from "../../actions/resumeActions";

class Resume extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      cellPhone: "",
      email: "",
      githubURL: "",
      linkedInURL: "",
      twitterURL: "",
      peronalWebsiteURL: "",
      roles: [],
      devSkillsAcquiredVia: "",
      schoolNames: [],
      diplomasAttained: [],
      diplomaTitles: [],
      projectGithubURLs: [],
      pojectDescriptions: [],
      projectPrimaryLanguages: [],
      programmingLanguages: [],
      frameworks: [],
      jobTitles: [],
      companyNames: [],
      startDates: [],
      endDates: [],
      jobDescriptions: [],
      jobExperienceTime: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newResume = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode,
      cellPhone: this.state.cellPhone,
      email: this.state.email,
      githubURL: this.state.githubURL,
      linkedInURL: this.state.linkedInURL,
      twitterURL: this.state.twitterURL,
      peronalWebsiteURL: this.state.personalWebsiteURL,
      roles: this.state.roles,
      devSkillsAcquiredVia: this.state.devSkillsAcquiredVia,
      schoolNames: this.state.schoolNames,
      diplomasAttained: this.state.diplomasAttained,
      diplomaTitles: this.state.diplomaTitles,
      projectGithubURLs: this.state.projectGithubURLs,
      pojectDescriptions: this.state.projectDescriptions,
      projectPrimaryLanguages: this.state.projectPrimaryLanguages,
      programmingLanguages: this.state.programmingLanguages,
      frameworks: this.state.frameworks,
      jobTitles: this.state.jobTitles,
      companyNames: this.state.companyNames,
      startDates: this.state.startDates,
      endDates: this.state.endDates,
      jobDescription: this.state.jobDescriptions,
      jobExperienceTime: this.state.jobExperienceTime
    };
    this.props.createResume(newResume, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="register-container">
        <form className="form-horizontal m-5" onSubmit={this.onSubmit}>
          <h2 style={{ textAlign: "center" }}>Create a new resume!</h2>
          <div className="form-group">
            <label htmlFor="inputFirstName" className="col-sm-4 control-label">
              First Name
            </label>
            <div className="col-sm-10 ">
              <input
                type="string"
                autoComplete="given-name"
                className={classnames("form-control", {
                  "is-invalid": errors.firstName
                })}
                id="inputFirstName"
                name="firstName"
                value={this.state.firstName}
                onChange={this.onChange}
                placeholder="First Name"
              />
              {errors.firstName && (
                <div className="invalid-feedback">{errors.firstName}</div>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputlastName" className="col-sm-4 control-label">
              Last Name
            </label>
            <div className="col-sm-10">
              <input
                type="string"
                autoComplete="family-name"
                className={classnames("form-control", {
                  "is-invalid": errors.lastName
                })}
                id="inputlastName"
                name="lastName"
                value={this.state.lastName}
                onChange={this.onChange}
                placeholder="Last Name"
              />
              {errors.lastName && (
                <div className="invalid-feedback">{errors.lastName}</div>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress" className="col-sm-2 control-label">
              Address
            </label>
            <div className="col-sm-10">
              <input
                type="string"
                autoComplete="street-address"
                className={classnames("form-control", {
                  "is-invalid": errors.address
                })}
                id="inputAddress"
                name="address"
                value={this.state.address}
                onChange={this.onChange}
                placeholder="Street Address"
              />
              {errors.address && (
                <div className="invalid-feedback">{errors.address}</div>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputCity" className="col-sm-2 control-label">
              City
            </label>
            <div className="col-sm-10">
              <input
                type="string"
                autoComplete="address-level2"
                className={classnames("form-control", {
                  "is-invalid": errors.city
                })}
                id="inputCity"
                name="city"
                value={this.state.city}
                onChange={this.onChange}
                placeholder="City"
              />
              {errors.city && (
                <div className="invalid-feedback">{errors.city}</div>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputState" className="col-sm-2 control-label">
              State
            </label>
            <div className="col-sm-10">
              <input
                type="string"
                autoComplete="region"
                className={classnames("form-control", {
                  "is-invalid": errors.state
                })}
                id="inputState"
                name="state"
                value={this.state.state}
                onChange={this.onChange}
                placeholder="State"
              />
              {errors.state && (
                <div className="invalid-feedback">{errors.state}</div>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputZip Code" className="col-sm-4 control-label">
              Zip Code
            </label>
            <div className="col-sm-10">
              <input
                type="string"
                autoComplete="postal-code"
                className={classnames("form-control", {
                  "is-invalid": errors.zipCode
                })}
                id="inputZipCode"
                name="zipCode"
                value={this.state.zipCode}
                onChange={this.onChange}
                placeholder="Zip Code"
              />
              {errors.zipCode && (
                <div className="invalid-feedback">{errors.zipCode}</div>
              )}
            </div>
          </div>
          <div
            className={classnames("form-group", {
              "is-invalid": errors.type
            })}
          >
            <label htmlFor="radioUserType" className="col-sm-2 control-label">
              Account Type
            </label>
            {/* the bellow error display for the type of account errors is not working */}
            {errors.type && (
              <div className="invalid-feedback">{errors.type}</div>
            )}
            <div className="col-sm-offset-2 col-sm-10">
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    checked={this.state.type === "resumeUser"}
                    name="type1"
                    value="resumeUser"
                    onChange={this.onChange}
                  />{" "}
                  Check this to build a resume
                </label>
              </div>
            </div>
            <div className="col-sm-offset-2 col-sm-10">
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="employerUser"
                    className={classnames("radiobuttons", {
                      "is-invalid": errors.type
                    })}
                    checked={this.state.type === "employerUser"}
                    name="type2"
                    onChange={this.onChange}
                  />{" "}
                  Check this if you are an employer
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-info">
                Create Resume
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Resume.propTypes = {
  createResume: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createResume }
)(Resume);
