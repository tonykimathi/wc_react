import React, { Component } from 'react';

/**
 * This component renders a footer in the application
 */
export default class Footer extends Component {
  render() {
    return (
      <footer className="signupFooter">
        <br />
        <div className="text-center text-muted">
          <small>
            <p>
              Developed by Tony Mputhia &copy; Copyright
              <script>document.write(new Date().getFullYear())</script> Terms &
              Conditions Apply
            </p>
          </small>
        </div>
        <br />
      </footer>
    );
  }
}
