import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText, CardBody, CardFooter } from 'reactstrap';
import { getSingleBusiness } from '../actionCreators/Businesses';
import PropTypes from 'prop-types';

/**
 * This component render a business in all businesses page
 */
class Business extends Component {
  _getSingleBusiness = () => {
    const business_id = this.props.params.id;
    this.props.getSingleBusiness(business_id);
  };
  render() {
    return (
      <div className="col-lg-3 col-sm-6 col-md-4" id='bookCard'>
        <Card body outline color="info">
          <CardTitle>{this.props.business.business_name} </CardTitle>
          <CardBody>
            <CardText>Description : {this.props.business.description}</CardText>
          </CardBody>
          <CardFooter>Category : {this.props.business.category}</CardFooter>
          <CardFooter>Location : {this.props.business.location}</CardFooter>
          <Link
            to={`/businesses/${this.props.business.business_id}`}
            className="btn btn-success"
            role="button"
          >
            View Details
          </Link>
        </Card>
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
    businesses: state.businesses,
    onebusiness: state.business
  };
};

const mapDispatchToProps = dispatch => ({
  getSingleBusiness: id => getSingleBusiness(dispatch, id)
});

/**
 * Validate props
 */
Business.propTypes = {
  business: PropTypes.object,
  getSingleBusiness: PropTypes.func,
  params: PropTypes.number
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Business);
