import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import MainPage from './components/MainPage';
import SecondPage from './components/SecondPage';
import ComponentsCenter from './components/ComponentsCenter';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/SecondPage" exact component={SecondPage} />
        <Route path="/ComponentsCenter" exact component={ComponentsCenter} />
        <Route path="/ComponentsCenter/:pageName" exact component={ComponentsCenter} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
