import React, { Component } from 'react';
import Root from '../components/Root'

/**
 * This component renders the home page
 */
class Home extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true
    };
  }
  _handleClick = () =>
    this.setState({
      loggedIn: !this.state.loggedIn
    });

  render() {
    return (
      <Root>
      <div id="homecontent">
        <div className="row" id="section">
          <div className="col-sm-6">
            <br />
            <br />
            <br />
            <h5>Connecting businesses and individuals</h5>
            <p>
            WeConnect provides a platform that brings businesses and individuals together.
            This platform creates awareness for businesses and gives the users the ability
             to write reviews about the businesses they have interacted with.<br />
            </p>
          </div>
          <div className="col-sm-2" />
          <div className="col-sm-3" >
          </div>
        </div>
      </div>
      </Root>
    );
  }
}

export default Home;
