import React from 'react';
import {connect} from 'react-redux';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { register } from '../actionCreators/register';
import '../styles/index.css';

class Register extends React.Component {
  constructor() {
      super();
      this.state = {}
  }

  _register = (e) => {
      e.preventDefault();
      const username = e.target.elements.username.value;
      const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;
      const confirmPassword = e.target.elements.confirmPassword.value;
      this.props.register({email, username, password, confirmPassword})
  };
    render() {
    return (
      <Container>
        <Row>
          <Col xs="6" sm="4"></Col>
          <Col xs="6" sm="4">
           <div className="container">
            <Form onSubmit={this._register}>
                <FormGroup>
                <Label for="Email">Username</Label>
                <Input type="text" name="username" id="Username" placeholder="Enter Username" />
                </FormGroup>  
                <FormGroup>
                <Label for="Email">Email</Label>
                <Input type="email" name="email" id="Email" placeholder="Enter Email Address" />
                </FormGroup>
                <FormGroup>
                <Label for="Password">Password</Label>
                <Input type="password" name="password" id="Password" placeholder="Enter Password" />
                </FormGroup>
                <FormGroup>
                <Label for="CPassword">Confirm Password</Label>
                <Input type="password" name="cpassword" id="CPassword" placeholder="Confirm Password" />
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
register: (data) => register(dispatch,data)
})

export default connect(mapStateToProps,mapDispatchToProps)(Register);