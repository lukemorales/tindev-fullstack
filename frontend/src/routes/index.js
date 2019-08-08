import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '~/pages/Login';
import Main from '~/pages/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dev/:ID" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
