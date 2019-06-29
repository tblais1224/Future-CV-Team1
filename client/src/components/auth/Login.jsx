import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";


class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profile/resume")
    }
  }

  //find a way to switch this to getDerivedState or compdidupdate
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/profile/resume");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   // if (nextProps.auth.isAuthenticated) {
  //   //   this.props.history.push("/profile/resume")
  //   // }
  //   if (nextProps.errors) {
  //     return { errors: nextProps.errors }
  //   }
  // }

  // componentDidUpdate(prevProps, prevState){
    
  // }

  //radio button handler
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault()

    const userData = {
      email: this.state.email,
      password: this.state.password
    }

    //call the loginUser Action in the props
    this.props.loginUser(userData)
  }

  render() {

    const { errors } = this.state

    return (
      <div className="login-container">
        <form className="form-horizontal m-5" style={{ maxWidth: "800px" }} onSubmit={this.onSubmit}>
          <h2 style={{ textAlign: "center" }}>Login to your account!</h2>
          <div className="form-group">
            <label htmlFor="inputEmail" className="col-sm-2 control-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                name="email"
                autoComplete="email"
                className={classnames("form-control margin-auto", {
                  "is-invalid": errors.email
                })}
                id="inputEmail"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}

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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})


export default connect(mapStateToProps, { loginUser })(Login);
