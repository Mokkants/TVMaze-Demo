import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import SearchView from './views/SearchView';
import DetailsView from './views/DetailsView';
import NotFoundView from './views/NotFoundView';

import history from './history';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/">
        <Redirect to="/search" />
      </Route>
      <Route exact path="/search">
        <SearchView></SearchView>
      </Route>
      <Route path="/details/:id" component={DetailsView} />
      <Route path="/*" component={NotFoundView} />
    </Switch>
  </Router>
);

export default Routes;
