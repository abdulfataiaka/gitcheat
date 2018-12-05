import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Index';
import Category from './Category/Index';
import NotFound from './NotFound/Index';
import Search from './Search/Index';
import Header from './Partials/Header/Index';
import Footer from './Partials/Footer/Index';
import AuthBox from './AuthBox/Index';
import '../stylesheets/main.scss';

const App = () => (
  <Fragment>
    <AuthBox />
    <Header />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/category/:id" component={Category} />
      <Route exact path="/search" component={Search} />
      <Route component={NotFound} />
    </Switch>

    <Footer />
  </Fragment>
);

export default App;
