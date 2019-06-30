import React, { Component } from "react";
import PropTypes from "prop-types";
//You can get access to the history object’s properties and the closest <Route>'s match via the withRouter higher-order component. withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
//withRouter is for redirect to login using history
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      password2: "",
      type: "",
      type1: "",
      type2: "",
      newErrors: {},
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //useful lifecycle diagram of react componenets
  //http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  //if the user is already logged in then redirect them from the page
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  //the below two lifecycle methods are to replace componenetWillRecieveProps
  //good sources below
  //https://egghead.io/lessons/react-refactor-componentwillreceiveprops-to-getderivedstatefromprops-in-react-16-3
  // https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#migrating-from-legacy-lifecycles
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors) {
      return { errors: nextProps.errors };
    }
  }

  //radio button handler
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    //this is to make sure the radio buttons work properly
    if (event.target.name === "type1" || event.target.name === "type2") {
      this.setState({ type: event.target.value });
    }
  }

  onSubmit (event) {
    event.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      type: this.state.type
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="register-container">
        <form className="form-horizontal m-5" onSubmit={this.onSubmit}>
          <h2 style={{ textAlign: "center" }}>
            Create a new FutureCV account!
          </h2>
          <div className="form-groupcol-xs-1 m-3" align="center">
            <label htmlFor="inputEmail" className="col-sm-2 control-label float-left">
              Email
            </label>
            <div className="col-sm-10 ">
              <input
                type="email"
                autoComplete="email"
                className={classnames("form-control", {
                  "is-invalid": errors.email
                })}
                id="inputEmail"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
          </div>
          <div className="form-groupcol-xs-1 m-3" align="center">
            <label htmlFor="inputPassword" className="col-sm-2 control-label float-left">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                autoComplete="new-password"
                className={classnames("form-control", {
                  "is-invalid": errors.password
                })}
                id="inputPassword"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Password"
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
          </div>
          <div className="form-groupcol-xs-1 m-3" align="center">
            <label htmlFor="inputPassword2" className="float-left col-sm-24control-label">
              Confirm Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                autoComplete="new-password"
                className={classnames("form-control", {
                  "is-invalid": errors.password2
                })}
                id="inputPassword2"
                name="password2"
                value={this.state.password2}
                onChange={this.handleChange}
                placeholder="Confirm Password"
              />
              {errors.password2 && <div className="invalid-feedback">{errors.password2}</div>}
            </div>
          </div>
          <div className={classnames("form-group m-3", {
                      "is-invalid": errors.type
                    })}>
            <label htmlFor="radioUserType" className="col-sm-2 control-label">
              Account Type
            </label>
            {/* the bellow error display for the type of account errors is not working */}
            {errors.type && <div className="invalid-feedback">{errors.type}</div>}
            <div className="col-sm-offset-2 col-sm-10 col-xs-1" align="center">
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    checked={this.state.type === "resumeUser"}
                    name="type1"
                    value="resumeUser"
                    onChange={this.handleChange}
                  />{" "}
                  Check this to build a resume
                </label>
              </div>
            </div>
            <div className="col-sm-offset-2 col-sm-10 col-xs-1" align="center">
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
                    onChange={this.handleChange}
                  />{" "}
                  Check this if you are an employer
                </label>
              </div>
            </div>
          </div>
          <div className="form-groupcol-xs-1" align="center">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-info">
                Create Account
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

//create the props
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

//state is from the redux store
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
