import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Root from '../components/Root'
import Business from './Business';
import { getAllBusinesses } from '../actionCreators/Businesses';
import PropTypes from 'prop-types';
import JwPagination from 'jw-react-pagination';
import { pageLoader } from './../config';

/**
 * This component render all books page
 */
class Businesses extends Component {
  constructor() {
    super();
    this.state = {
      pageOfItems: []
    };
  }

  /**
   * Makes a server request to get all available books
   */
  componentDidMount() {
    this.props.getAllBusinesses();
  }

  _onchangePage = pageOfItems => {
    this.setState({ pageOfItems });
  };

  render() {
    let business = this.state.pageOfItems.map(business => {
      return <Business key={business.business_id} business={business} />;
    });

    return (
      <Root>
      <div id="books">
        <div>
          <br />
          <h4>Businesses Available</h4>
          <hr />
        </div>

        <Fragment>
          {this.props.businesses.pageLoading ? (
            <div className="row">{pageLoader}</div>
          ) : (
            <Fragment>
              <div className="row">{business}</div>

              <JwPagination
                items={this.props.businesses.businesses}
                pageSize={8}
                onChangePage={this._onchangePage}
              />
              <Link
                  id="addBookbtn"
                  to={'/add'}
                  className="btn btn-success"
                  role="button"
                >
                  Add Business
              </Link>
            </Fragment>
          )}
        </Fragment>
      </div>
      </Root>
    );
  }
}

/**
 * Map store state to props
 */
const mapStateToProps = state => {
  return {
    auth: state.auth,
    businesses: state.businesses
  };
};

const mapDispatchToProps = dispatch => ({
  getAllBusinesses: () => dispatch(getAllBusinesses())
});

/**
 * Validate props
 */
Businesses.propTypes = {
  businesses: PropTypes.object,
  auth: PropTypes.object,
  getAllBusinesses: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Businesses);
