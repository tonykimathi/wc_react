import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../history';
import { Button, Form, Label, Input, Alert } from 'reactstrap';
import { login } from '../actionCreators/login';
import { loader } from './../config';
import PropTypes from 'prop-types';

/**
 * This component render login page
 */
class Login extends Component {
  constructor() {
    super();
    this.state = {
      visible: true
    };
  }
  /**
   * redirect a user to businesses page after logging in
   */
  componentDidMount() {
    if (this.props.auth.loggedIn) {
      history.push('/businesses');
    }
  }

  _onDismiss = () => {
    this.setState({
      visible: false
    });
  };

  /**
   * Makes a server request to log in a user
   */
  _login = e => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    this.props.login({ email, password });
    this.forceUpdate();
  };

  render() {
    return (
      <div className="loginform">
        <h1>Login</h1>
        <p>Enter you credentials to login.</p>
        <hr />
        {this.props.auth.error ? (
          <Alert
            isOpen={this.state.visible}
            color="danger"
            toggle={this._onDismiss}
          >
            {this.props.auth.Message}
          </Alert>
        ) : null}
        <Form onSubmit={this._login}>
          <div className="form-group">
            <Label for="exampleEmail">
              <b>Email</b>
            </Label>
            <Input
              type="email"
              name="email"
              placeholder="name@email.com"
              required
              autoComplete="email"
            />
          </div>
          <div className="form-group">
            <Label for="examplePassword">
              <b>Password</b>
            </Label>
            <Input type="password" name="password" placeholder="password" />
          </div>
          <div className="form-group" id="submit">
            {!this.props.auth.loading ? (
              <Button type="submit">
                Login
              </Button>
            ) : (
              loader
            )}
          </div>
          <br />
          <br />
          <div>
            <span className="psw">
              <Link to="/requestreset">Forgot password?</Link>
            </span>
          </div>
        </Form>
      </div>
    );
  }

  _handleSubmit(event) {
    event.preventDefault();
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
  login: data => dispatch(login(data))
});

/**
 * Validate props
 */
Login.propTypes = {
  auth: PropTypes.object,
  login: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
