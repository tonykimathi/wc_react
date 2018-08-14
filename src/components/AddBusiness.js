import React, { Component } from 'react';
import { Form, Label, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../history'
import { addBusiness } from '../actionCreators/Business';

/**
 * This component render add book page
 */
class AddBusiness extends Component {
  constructor() {
    super();
    this.state = {
      visible: true
    };
  }

  /**
   * Protect the page from been assessed by normal users
   * and users not logged in
   */
  componentDidMount() {
    if (!this.props.auth.loggedIn) {
      history.push('/login');
    }
    // if (!this.props.auth.isAdmin) {
    //   history.push('/businesses');
    // }
  }

  _onDismiss = () => {
    this.setState({
      visible: false
    });
  };

  /**
   * Makes a server request to add a book
   */
  _addBusiness = e => {
    e.preventDefault();
    const auth_token = this.props.auth.auth_token;
    const business_name = e.target.elements.business_name.value;
    const description = e.target.elements.description.value;
    const location = e.target.elements.location.value;
    const category = e.target.elements.category.value;
    this.props.addBusiness({ business_name, description, location, category, auth_token });
    this.forceUpdate();
  };

  render() {
    return (
      <div className="addEditForm">
        <h4>Add a business</h4>
        <p>Enter business details.</p>
        <hr />
        {/* {this.props.admin.error ? (
          <Alert
            isOpen={this.state.visible}
            color="danger"
            toggle={this._onDismiss}
          >
            {this.props.admin.Message}
          </Alert>
        ) : null} */}
        <Form onSubmit={this._addBusiness}>
          <div className="form-group">
            <Label for="title">
              <b>Business Name</b>
            </Label>
            <Input type="text" name="business_name" placeholder="Business title" required />
          </div>
          <div className="form-group">
            <Label for="author">
              <b>Description</b>
            </Label>
            <Input
              type="text"
              name="description"
              placeholder="Business Description"
              required
            />
          </div>
          <div className="form-group">
            <Label for="edition">
              <b>Location</b>
            </Label>
            <Input
              type="text"
              name="location"
              placeholder="Business Location"
              required
            />
          </div>
          <div className="form-group">
            <Label for="description">
              <b>Category</b>
            </Label>
            <Input
              type="text"
              name="category"
              placeholder="Business Category"
              required
            />
          </div>
          <div className="form-group">
            <Button type="submit" id="submit" className="btn btn-success">
              Save
            </Button>
          </div>
          <br />
        </Form>
      </div>
    );
  }
}

/**
 * Map store state to props
 */
const mapStateToProps = state => {
  return {
    auth: state.auth,
    // admin: state.admin,
    businesses: state.businesses
  };
};

const mapDispatchToProps = dispatch => ({
  addBusiness: data => dispatch(addBusiness(data))
});

/**
 * Validate props
 */
AddBusiness.propTypes = {
  businesses: PropTypes.object,
  auth: PropTypes.object,
  // admin: PropTypes.object,
  addBusiness: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBusiness);
