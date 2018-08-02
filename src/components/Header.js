import React from 'react';
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
 } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">WeConnect</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/register" className="nav-link">
                    <Button color="secondary" size="sm" className="sign-btn">Sign Up</Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/login" className="nav-link">
                    <Button color="secondary" size="sm" className="sign-btn">Login</Button>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}