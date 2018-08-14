import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { logout } from '../actionCreators/Logout';
import PropTypes from 'prop-types';

/**
 * This component render navigation bar
 */
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  /**
   * Makes a server request to logout a user
   */
  _logout = e => {
    e.preventDefault();
    const email = this.props.auth.email;
    const auth_token = this.props.auth.auth_token;
    this.props.logout({ email, auth_token });
    this.forceUpdate();
  };

  _toggle = () =>
    this.setState({
      isOpen: !this.state.isOpen
    });

  render() {
    return (
      <div>
        <Navbar color="light" id="header" light expand="md">
          <Link to="/" className="navbar-brand">
            WeConnect
          </Link>
          <NavbarToggler onClick={this._toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/businesses" id="drop" className="nav-link">
                  Businesses
                </Link>
              </NavItem>
              {!this.props.auth.loggedIn ? (
                <Fragment>
                  <NavItem>
                    <Link to="/register" id="drop" className="nav-link">
                      Sign Up
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/login" id="drop" className="nav-link">
                      Login
                    </Link>
                  </NavItem>
                </Fragment>
              ) : (
                <Fragment>
                  <NavItem>
                    <Link to="/businesses" id="drop" className="nav-link">
                      Businesses
                    </Link>
                  </NavItem>
                  <UncontrolledDropdown>
                    <DropdownToggle id="drop" nav caret>
                      {this.props.auth.username}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={this._logout}>Logout</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Fragment>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

/**
 * Map store state to props
 */
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => ({
  logout: data => dispatch(logout(data))
});

/**
 * Validate props
 */
Header.propTypes = {
  auth: PropTypes.object,
  logout: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
