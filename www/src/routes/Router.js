import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Styles, Components, InputExample } from './index';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/styles" component={Styles} />
      <Route exact path="/components" component={Components} />
      <Route exact path="/components/input" component={InputExample} />
    </Switch>
  )
}

export default Router;