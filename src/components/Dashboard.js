import React, { Component } from 'react';
import '../styles/Dashboard.css';
import '../styles/index.css';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { greeting: 'Welcome to WeConnect' };
      }

    render() {
        return (
            <div className="hero">
                <div className="Dashboard">
                <header className="Dashboard-header">
                    <h1 className="Dashboard-title">{ this.state.greeting }</h1>
                </header>
                </div>
            </div>
            
        );
    }
}
export default Dashboard;