import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Vehicles from 'pages/Vehicles';

export default function Routes() {
  return (
    <Switch>
      <Route key={1} path="/" exact component={Home} />
      <Route key={2} path="/carros" exact component={Vehicles} />
      <Route key={3} path="/motos" exact component={Vehicles} />
    </Switch>
  );
}
