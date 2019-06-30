import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions"

class DefaultNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  onLogoutClick(e) {
    e.preventDefault()
    this.props.logoutUser()
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    const { isAuthenticated } = this.props.auth

    const authLinks = (
      <DropdownMenu right>
        <DropdownItem onClick={this.onLogoutClick.bind(this)}>Logout</DropdownItem>
        <DropdownItem divider />
        <DropdownItem href="/help">Get Help</DropdownItem>
      </DropdownMenu>
    )

    const guestLinks = (
      <DropdownMenu right>
        <DropdownItem href="/login">Login</DropdownItem>
        <DropdownItem href="/register">Register</DropdownItem>
        <DropdownItem divider />
        <DropdownItem href="/help">Get Help</DropdownItem>
      </DropdownMenu>
    )

    return (
      <div>
        <Navbar className="bg-info text-black font-weight-bold" light expand="md">
          <NavbarBrand href="/">Future CV</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://www.facebook.com/groups/CodeMentorCenter/">Code Mentor Center</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">
                  About Us
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                {isAuthenticated ? authLinks : guestLinks}
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

DefaultNavbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(DefaultNavbar);
