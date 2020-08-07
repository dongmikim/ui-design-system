import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Colors, NotFound, Components, InputExample } from './index';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/styles/colors" component={Colors} />
      <Route exact path="/styles/Icons" component={NotFound} />
      <Route exact path="/components" component={Components} />
      <Route exact path="/components/input" component={InputExample} />
    </Switch>
  )
}

export default Router;