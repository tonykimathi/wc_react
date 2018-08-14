import React, { Component, Fragment } from 'react';
import { Form, Label, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../history'
import { editBusiness } from '../actionCreators/Business';
import { getSingleBusiness } from '../actionCreators/Businesses';

/**
 * This component renders edit business page
 */
class EditBusiness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edited: {}
    };
  }

  /**
   * Protect the page from been accessed by users not logged in
   */
  componentDidMount() {
    if (!this.props.auth.loggedIn) {
      history.push('/login');
    }
    const business_id = this.props.match.params.id;
    this.props.getSingleBusiness(business_id);
  }

  handleChange = e => {
    const val = {};
    const edited = this.state.edited;
    edited[e.target.name] = true;
    val['edited'] = edited;
    val[e.target.name] = e.target.value;
    this.setState(val);
  };

  /**
   * Get the current value of a field from state
   */
  getValue = name => {
    if (this.state.edited[name]) {
      return this.state[name];
    }
    const business = this.props.business;
    return business.business[name] || '';
  };

  _editBusiness = e => {
    e.preventDefault();
    const business_id = this.props.business.business.business_id;
    const auth_token = this.props.auth.auth_token;
    const business_name = this.getValue('business_name');
    const description = this.getValue('description');
    const category = this.getValue('category');
    const location = this.getValue('location');
    this.props.editBusiness({
      business_id,
      business_name,
      description,
      category,
      location,
      auth_token
    });
    this.forceUpdate();
  };

  render() {
    return (
      <div className="addEditForm">
        <h4>Edit a business </h4>
        {!this.props.business.error ? (
          <Fragment>
            <p>Enter business details.</p>
            <hr />
            <Form onSubmit={this._editBusiness}>
              <div className="form-group">
                <Label for="title">
                  <b>Business Name</b>
                </Label>
                <Input
                  type="text"
                  name="business_name"
                  value={this.getValue('business_name')}
                  onChange={this.handleChange}
                  placeholder="Business name"
                  required
                />
              </div>
              <div className="form-group">
                <Label for="author">
                  <b>Description</b>
                </Label>
                <Input
                  type="text"
                  name="description"
                  value={this.getValue('description')}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <Label for="edition">
                  <b>Category</b>
                </Label>
                <Input
                  type="text"
                  name="category"
                  value={this.getValue('category')}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <Label for="description">
                  <b>Location</b>
                </Label>
                <Input
                  type="text"
                  name="location"
                  value={this.getValue('location')}
                  onChange={this.handleChange}
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
          </Fragment>
        ) : (
          history.push(`/businesses/${this.business_id}`)
        )}
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
    business: state.business
  };
};
const mapDispatchToProps = dispatch => ({
  editBusiness: data => dispatch(editBusiness(data)),
  getSingleBusiness: id => dispatch(getSingleBusiness(id))
});

/**
 * Validate props
 */
EditBusiness.propTypes = {
  params: PropTypes.object,
  business: PropTypes.object,
  auth: PropTypes.object,
  editBusiness: PropTypes.func,
  getSingleBusiness: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditBusiness);
