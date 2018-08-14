import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
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