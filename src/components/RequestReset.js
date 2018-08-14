import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Label, Input, Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import { requestReset } from '../actionCreators/ResetPassword';
import { loader } from './../config';

/**
 * This component render page for users to request password reset
 */
class RequestReset extends Component {
  constructor() {
    super();
    this.state = {
      visible: true
    };
  }

  /**
   * The function closes the alert box
   */
  _onDismiss = () => {
    this.setState({
      visible: false
    });
  };

  /**
   * Makes a server request to send an password reset link into user email
   * @param {string} email
   * @return {string} message
   */
  _requestReset = e => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    this.props.requestReset({ email });
    this.forceUpdate();
  };

  render() {
    return (
      <div className="loginform">
        <h5>Request Password Reset</h5>
        <p>Enter your email.</p>
        <hr />
        {this.props.passwordReset.error ? (
          <Alert
            isOpen={this.state.visible}
            color="danger"
            toggle={this._onDismiss}
          >
            {this.props.passwordReset.Message}
          </Alert>
        ) : null}
        <Form onSubmit={this._requestReset}>
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
          <div className="form-group" id="submit">
            {!this.props.passwordReset.loading ? (
              <Button type="submit">
                Submit
              </Button>
            ) : (
              loader
            )}
          </div>
          <br />
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
    passwordReset: state.passwordReset
  };
};

const mapDispatchToProps = dispatch => ({
  requestReset: data => dispatch(requestReset(data))
});

/**
 * Validate props
 */
RequestReset.propTypes = {
  passwordReset: PropTypes.object,
  requestReset: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestReset);
