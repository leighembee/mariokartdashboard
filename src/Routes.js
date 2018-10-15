import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Main from './components/Main';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/main" component={Main} />
    </Switch>
  </div>
);

export default Routes;
