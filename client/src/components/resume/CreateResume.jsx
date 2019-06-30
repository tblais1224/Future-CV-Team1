import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { connect } from "react-redux";
import { createResume } from "../../actions/resumeActions";
import { FormGroup, Label, Input } from "reactstrap";

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
      cellphone: "",
      email: "",
      githubURL: "",
      linkedInURL: "",
      twitterURL: "",
      peronalWebsiteURL: "",
      aboutMe: "",
      roles: "",
      devSkillsAcquiredVia: "",
      educationCount: 1,
      schoolNames: [],
      diplomasAttained: [],
      diplomaTitles: [],
      projectCount: 1,
      projectGithubURLs: [],
      pojectDescriptions: [],
      projectPrimaryLanguages: [],
      languagesCount: 1,
      programmingLanguages: [],
      frameworksCount: 1,
      frameworks: [],
      techSkillsCount: 1,
      techSkills: [],
      jobCount: 1,
      jobTitles: [],
      companyNames: [],
      startDates: [],
      endDates: [],
      jobDescriptions: [],
      jobExperienceTime: 0,
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onChangeStateArray = this.onChangeStateArray.bind(this);
    this.addToCounter = this.addToCounter.bind(this);
    this.removeFromCounter = this.removeFromCounter.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangeStateArray(e) {
    this.setState(prevState => ({
      [e.target.id]: [...prevState[e.target.id], e.target.value]
    }));
  }

  addToCounter(e) {
    let count = this.state[e.target.name];
    count++;
    this.setState({ [e.target.name]: count });
  }
  removeFromCounter(e) {
    let count = this.state[e.target.name];
    if (count > 1) {
      count--;
      this.setState({ [e.target.name]: count });
    }
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
      cellphone: this.state.cellphone,
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
      techSkills: this.state.techSkills,
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

    const newEducation = [];

    for (let i = 0; i < this.state.educationCount; i++) {
      let id = `${i}`
      newEducation.push(
        <div className="newEducation-container border border-info p-2">
          <div className="form-group">
            <label htmlFor="inputSchoolName" className="col-sm-4 control-label">
              School Name
            </label>
            <div className="col-sm-10 ">
              <input
                type="string"
                className={classnames("form-control", {
                  "is-invalid": errors.schoolName
                })}
                id={id}
                name="schoolName"
                value={this.state.schoolName}
                onChange={this.onChange}
                placeholder="School Name"
              />
              {errors.schoolName && (
                <div className="invalid-feedback">{errors.schoolName}</div>
              )}
            </div>
          </div>
          <div className="form-group">
            <label
              htmlFor="inputDiplomaAttained"
              className="col-sm-6 control-label"
            >
              Diploma or Degree Attained I.e. "Bachelore's"
            </label>
            <div className="col-sm-10 ">
              <input
                type="string"
                className={classnames("form-control", {
                  "is-invalid": errors.diplomaAttained
                })}
                id={id}
                name="diplomaAttained"
                value={this.state.diplomaAttained}
                onChange={this.onChange}
                placeholder="First Name"
              />
              {errors.diplomaAttained && (
                <div className="invalid-feedback">{errors.diplomaAttained}</div>
              )}
            </div>
          </div>
          <div className="form-group">
            <label
              htmlFor="inputDiplomaTitle"
              className="col-sm-10 control-label"
            >
              Diploma / Degree Title
            </label>
            <div className="col-sm-10 ">
              <input
                type="string"
                className={classnames("form-control", {
                  "is-invalid": errors.diplomaTitle
                })}
                id={id}
                name="diplomaTitle"
                value={this.state.diplomaTitle}
                onChange={this.onChange}
                placeholder="Diploma Title"
              />
              {errors.diplomaTitle && (
                <div className="invalid-feedback">{errors.diplomaTitle}</div>
              )}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="register-container m-5" style={{ bottom: "25px" }}>
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
          <div className="form-group">
            <label htmlFor="inputCellphone" className="col-sm-4 control-label">
              Cell Phone Number
            </label>
            <div className="col-sm-10">
              <input
                type="string"
                autoComplete="tel"
                className={classnames("form-control", {
                  "is-invalid": errors.cellphone
                })}
                id="inputCellphone"
                name="cellphone"
                value={this.state.cellphone}
                onChange={this.onChange}
                placeholder="Zip Code"
              />
              {errors.cellphone && (
                <div className="invalid-feedback">{errors.cellphone}</div>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail" className="col-sm-4 control-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                autoComplete="email"
                className={classnames("form-control", {
                  "is-invalid": errors.email
                })}
                id="inputEmail"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                placeholder="Zip Code"
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputGithubURL" className="col-sm-8 control-label">
              Github Account URL
            </label>
            <div className="col-sm-10">
              <input
                type="url"
                className={classnames("form-control", {
                  "is-invalid": errors.githubURL
                })}
                id="inputGithubURL"
                name="githubURL"
                value={this.state.githubURL}
                onChange={this.onChange}
                placeholder="Github URL"
              />
              {errors.githubURL && (
                <div className="invalid-feedback">{errors.githubURL}</div>
              )}
            </div>
          </div>
          <div className="form-group">
            <label
              htmlFor="inputLinkedInURL"
              className="col-sm-8 control-label"
            >
              LinkedIn Account URL
            </label>
            <div className="col-sm-10">
              <input
                type="url"
                className={classnames("form-control", {
                  "is-invalid": errors.linkedInURL
                })}
                id="inputLinkedInURL"
                name="linkedInURL"
                value={this.state.linkedInURL}
                onChange={this.onChange}
                placeholder="LinkedIn URL"
              />
              {errors.linkedInURL && (
                <div className="invalid-feedback">{errors.linkedInURL}</div>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputTwitterURL" className="col-sm-8 control-label">
              Twitter Account URL
            </label>
            <div className="col-sm-10">
              <input
                type="url"
                className={classnames("form-control", {
                  "is-invalid": errors.twitterURL
                })}
                id="inputTwitterURL"
                name="twitterURL"
                value={this.state.twitterURL}
                onChange={this.onChange}
                placeholder="Twitter URL"
              />
              {errors.twitterURL && (
                <div className="invalid-feedback">{errors.twitterURL}</div>
              )}
            </div>
          </div>
          <div className="form-group">
            <label
              htmlFor="inputPersonalWebsiteURL"
              className="col-sm-8 control-label"
            >
              Personal Website URL
            </label>
            <div className="col-sm-10">
              <input
                type="url"
                className={classnames("form-control", {
                  "is-invalid": errors.personalWebsiteURL
                })}
                id="inputPersonalWebsiteURL"
                name="personalWebsiteURL"
                value={this.state.personalWebsiteURL}
                onChange={this.onChange}
                placeholder="Personal Website URL"
              />
              {errors.personalWebsiteURL && (
                <div className="invalid-feedback">
                  {errors.personalWebsiteURL}
                </div>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAboutMe" className="col-sm-4 control-label">
              About Me / Bio
            </label>
            <div className="col-sm-10">
              <textarea
                rows="4"
                cols="50"
                type="string"
                className={classnames("form-control", {
                  "is-invalid": errors.aboutMe
                })}
                id="inputAboutMe"
                name="aboutMe"
                value={this.state.aboutMe}
                onChange={this.onChange}
                placeholder="Bio"
              />
              {errors.aboutMe && (
                <div className="invalid-feedback">{errors.aboutMe}</div>
              )}
            </div>
          </div>
          <div className="form-group">
            <FormGroup>
              <Label htmlFor="inputAboutMe" className="col-sm-8 control-label">
                Developer Role / Skill Level
              </Label>
              <a
                href="http://morethancoding.com/2013/08/20/understanding-software-engineering-job-titles"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-info rounded p-1"
              >
                More info on roles
              </a>
              <Input
                rows="4"
                cols="50"
                type="select"
                className={classnames("form-control", {
                  "is-invalid": errors.aboutMe
                })}
                id="inputAboutMe"
                name="aboutMe"
                value={this.state.aboutMe}
                onChange={this.onChange}
                placeholder="Bio"
              >
                <option>
                  Associate Engineer / Junior Engineer / Intern / Software
                  Engineer I
                </option>
                <option>Software Engineer / Software Engineer II</option>
                <option>Senior Engineer / Software Engineer III</option>
                <option>Principal Engineer / Software Engineer IV</option>
                <option>Fellow / Software Engineer V</option>
              </Input>
              {errors.aboutMe && (
                <div className="invalid-feedback">{errors.aboutMe}</div>
              )}
            </FormGroup>
          </div>
          <div>
            <Label htmlFor="inputAboutMe" className="col-sm-8 control-label">
              Education:
            </Label>
            {newEducation}
            <button
              className="btn-sm btn-success m-3"
              name="educationCount"
              type="button"
              onClick={this.addToCounter}
            >
              Add Another Education
            </button>
            <button
              className="btn-sm btn-danger m-3"
              name="educationCount"
              type="button"
              onClick={this.removeFromCounter}
            >
              Delete an Education
            </button>
          </div>
          <div className="form-groupcol-xs-1" align="center">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-info mt-4 mb-5">
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
