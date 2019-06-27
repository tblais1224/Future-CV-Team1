import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class Register extends Component {
  render() {
    return (
      <div className="register-container">
        <Form className="m-5 p-5">
          <FormGroup>
            <Label for="exampleEmail">Email:</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter email here"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password:</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter a secure password"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password2">Confirm Password:</Label>
            <Input
              type="password"
              name="password2"
              id="password2"
              placeholder="Please re-enter your password"
            />
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend>Account Type:</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="resumeUser" /> Create a resume for employers to see
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="employer" /> Employers select this option
              </Label>
            </FormGroup>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Register;
