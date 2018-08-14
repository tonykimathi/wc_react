import React, { Component } from 'react';
import history from '../history'

/**
 * This component renders page not found component
 */
export default class PageNotFound extends Component {
  render() {
    return (
      <div className="hero-unit pageNotFound">
        <h1>
          Page Not Found{' '}
          <small>
            <font face="Tahoma" color="red">
              Error 404
            </font>
          </small>
        </h1>
        <br />
        <p>
          The page you requested could not be found, either contact your
          site admin or try again.
        </p>
        <p>
          <b>You could also press the button below to go back:</b>
        </p>
        <button
          onClick={history.goBack}
          className="btn btn-sm btn-info"
        >
          <i className="icon-home icon-white" /> Go Back
        </button>
      </div>
    );
  }
}
