import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import history from './history';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './styles/index.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Businesses from './components/Businesses';
import AddBusiness from './components/AddBusiness';
import EditBusiness from './components/EditBusiness';
import SingleBusiness from './components/SingleBusiness';
import RequestReset from './components/RequestReset';
import ResetPassword from './components/ResetPassword';
import PageNotFound from './components/PageNotFound';
import registerServiceWorker from './registerServiceWorker';
import { store } from './store/configureStore';


/**
 * Define application routes
 */
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/requestreset" component={RequestReset} />
            <Route exact path="/resetpassword/:token/:email" component={ResetPassword} />
            <Route exact path="/resetpassword" component={ResetPassword} />
            <Route exact path="/businesses" component={Businesses}/>
            <Route exact path="/businesses/:id" component={SingleBusiness} />
            <Route exact path="/add" component={AddBusiness} />
            <Route exact path="/edit/:id" component={EditBusiness} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
