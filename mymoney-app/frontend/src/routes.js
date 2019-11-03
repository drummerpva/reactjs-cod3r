import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import BillingCycle from './billingCycle/BillingCycle';
import Dashboard from './billingCycle/Dashboard';

export default props => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/billingcycles" exact component={BillingCycle} />
    <Redirect from="*" to="/" />
  </Switch>
);