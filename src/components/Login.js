import React from 'react';
import {connect} from 'react-redux';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { login } from '../actionCreators/login';
import '../styles/index.css';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor() {
      super();
      this.state = {}
  }
  _onDismiss = () => {
    this.setState({
      visible: false
    });
  };

  _login = (e) => {
      e.preventDefault();
      const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;
      this.props.login({ email, password });
      this.forceUpdate();
  };
    render() {
    return (
      <Container>
        <Row>
          <Col xs="6" sm="4"></Col>
          <Col xs="6" sm="4">
           <div className="container">
           <h1>Login</h1>
            <Form onSubmit={this._login}>
                <FormGroup>
                <Label for="Email">Email</Label>
                <Input type="email" name="email" id="Email" placeholder="Enter Email Address" />
                </FormGroup>
                <FormGroup>
                <Label for="Password">Password</Label>
                <Input type="password" name="password" id="Password" placeholder="Enter Password" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
          </div>
          </Col>
          <Col sm="4"></Col>
        </Row>
      </Container>    
    );
    }
  
  _handleSubmit(event) {
    event.preventDefault();
};
}

const mapStateToProps = (state) => {
return {
    auth : state.auth
}
}

const mapDispatchToProps = (dispatch) => ({
login: (data) => login(dispatch,data)
})

Login.propTypes = {
  auth: PropTypes.object,
  login: PropTypes.func
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);