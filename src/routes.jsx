import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Chart from './pages/Chart';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Chart} path="/chart" />
    </BrowserRouter>
  );
};

export default Routes;
