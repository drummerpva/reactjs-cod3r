import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
// import history from './history';

import Todo from './Todo';
import About from './About';
import Menu from './template/Menu';

export default props => (
  <Router /* history={history} */ >
    <Menu />
    <Switch>
      <Route path='/todos' component={Todo} />
      <Route path='/about' component={About} />
      <Redirect from='*' to='/todos' />
    </Switch>
  </Router>
);
