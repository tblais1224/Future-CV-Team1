import React, { Component } from "react";
import PropTypes from "prop-types"

class Register extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            password2: "",
            type: "",
        }
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
                <form class="form-horizontal m-5" style={{ maxWidth: "800px" }}>
                    <h2 style={{ textAlign: "center" }}>Login to your account!</h2>
                    <div class="form-group">
                        <label for="inputEmail" class="col-sm-2 control-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control margin-auto" id="inputEmail" placeholder="Email" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword" class="col-sm-2 control-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-info">Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


export default Register;

