import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../history'
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { getSingleBusiness } from '../actionCreators/Businesses';
import PropTypes from 'prop-types';
import { deleteBusiness } from '../actionCreators/Business';
import { addReview } from '../actionCreators/Reviews';

/**
 * This component renders single business component
 */
class SingleBusiness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      borrowedStatus: false
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  /**
   * Makes a server request to get a single business
   */
  _getSingleBusiness = (business_id) => {
    this.props.getSingleBusiness(business_id);
  };

  /**
   * Makes a server request to delete a business
   */
  _deleteBusiness = () => {
    const auth_token = this.props.auth.auth_token;
    const business_id = this.props.match.params.id;
    this.props.deleteBusiness({ auth_token, business_id });
  };

  /**
   * Makes a server request to borrow a book
   */
  _addReview = e => {
    e.preventDefault();
    const auth_token = this.props.auth.auth_token;
    const business_id = this.props.match.params.id;
    const review_name = e.target.elements.review_name.value;
    const body = e.target.elements.body.value;
    this.props.addReview({ auth_token, business_id, review_name, body });
    this.forceUpdate();
  };

  componentDidMount() {
    const business_id = this.props.match.params.id;
    this._getSingleBusiness(business_id);
  }

  render() {
    const {business} = this.props.business;
    
    return (
      <div align="center">
        <br />
        <Card body outline color="info" align="justify" className="col-sm-6">
          <div>
            <div className="bookHeader">
              <CardTitle className="content-center">Business Details</CardTitle>
            </div>
            {this.props.auth.loggedIn && !this.props.business.error ? (
              <div className="action">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret>Actions</DropdownToggle>
                  <DropdownMenu>
                      <div className="admin">
                        <DropdownItem divider />
                        <DropdownItem >
                          <Link to={`/edit/${business.business_id}`}> Edit </Link>
                        </DropdownItem>
                        <DropdownItem onClick={this._deleteBusiness}>
                          Delete
                        </DropdownItem>
                        <DropdownItem onClick={this._addReview}>
                          Review Business
                        </DropdownItem>
                      </div>
                  </DropdownMenu>
                </Dropdown>
              </div>
            ) : null}
          </div>
          <hr />
          {!this.props.business.error ? (
            <Fragment>
              <CardBody>
                <CardText>Name: {business.business_name} </CardText>
                <CardText>Description : {business.description}</CardText>
                <CardText>Location : {business.location}</CardText>
                <CardText>Category : {business.category}</CardText>
              </CardBody>
            </Fragment>
          ) : (
            <CardBody>
              <CardText>{this.props.business.Message}</CardText>
            </CardBody>
          )}
          <Link
          to='/'
            onClick={history.goBack}
            className="btn btn-success"
            role="button"
          >
            Back
          </Link>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    business: state.business
  };
};

const mapDispatchToProps = dispatch => ({
  getSingleBusiness: data => dispatch(getSingleBusiness(data)),
  deleteBusiness: data => dispatch(deleteBusiness(data)),
  addReview: data => dispatch(addReview(data))
});

/**
 * Validate props
 */
SingleBusiness.propTypes = {
  business: PropTypes.object,
  auth: PropTypes.object,
  params: PropTypes.object,
  getSingleBusiness: PropTypes.func,
  deleteBusiness: PropTypes.func,
  addReview: PropTypes.func

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleBusiness);
