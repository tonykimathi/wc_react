import React, { Component } from 'react';
import Header from './Navigation';
import Footer from './Footer';
import PropTypes from 'prop-types';

/*
* This component render header and footer in all pages.
*/
class Root extends Component {
  render() {
    return (
      <div className="App Site">
        <div className="Site-content">
          <div className="App-header">
            <Header />
          </div>
          <div className="main-content">{this.props.children}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

Root.propTypes = {
  children: PropTypes.object
};

export default Root;
