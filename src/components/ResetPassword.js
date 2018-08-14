import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Label, Input, Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import { resetPassword } from '../actionCreators/ResetPassword';
import history from '../history'
import { loader } from './../config';

/**
 * This component render password reset page
 */
class Resetpassword extends Component {
  constructor() {
    super();
    this.state = {
      visible: true
    };
  }

  /**
   * This get password resetToken and email for the user
   */
  componentDidMount() {
    if (this.props.params.token) {
      localStorage.setItem('resetToken', this.props.params.token);
      localStorage.setItem('resetEmail', this.props.params.email);
      history.push('/resetPassword');
    }
  }

  _onDismiss = () => {
    this.setState({
      visible: false
    });
  };

  /**
   * Makes a server request to change email
   * @param {Password} new_password
   * @param {Password} confrim_new_password
   * @return {string} message
   */
  _resetPassword = e => {
    e.preventDefault();
    const token = localStorage.getItem('resetToken');
    const email = localStorage.getItem('resetEmail');
    const new_password = e.target.elements.new_password.value;
    const confirm_new_password = e.target.elements.confirm_new_password.value;
    this.props.resetPassword({
      email,
      token,
      new_password,
      confirm_new_password
    });
    this.forceUpdate();
  };

  render() {
    return (
      <div className="loginform">
        <h1>Reset Password</h1>
        <p>Enter your new password.</p>
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
        <Form onSubmit={this._resetPassword}>
          <div className="form-group">
            <Label for="new_password">
              <b>New Password</b>
            </Label>
            <Input type="password" name="new_password" required />
          </div>

          <div className="form-group">
            <Label for="confirm_new_password">
              <b>Confirm Password</b>
            </Label>
            <Input type="password" name="confirm_new_password" required />
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
  resetPassword: data => dispatch(resetPassword(data))
});

/**
 * Validate props
 */
Resetpassword.propTypes = {
  passwordReset: PropTypes.object,
  resetPassword: PropTypes.func,
  params: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Resetpassword);
