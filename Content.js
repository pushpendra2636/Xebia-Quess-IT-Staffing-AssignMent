import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import Login from './Login';
import Dashbord from './Dashbord';
import ErrorFound from './ErrorFound'

class Content extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashbord" component={Dashbord} />
          <Route component={ErrorFound} />
        </Switch>
      </Router>
    );
  }
}

export default Content;
