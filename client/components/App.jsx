import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Index';
import NotFound from './NotFound/Index';

import '../stylesheets/app.scss';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
