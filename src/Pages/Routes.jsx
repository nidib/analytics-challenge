import React from 'react';
import Home from 'Pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route component={Home} path="/" exact />
			</Switch>
		</Router>
	);
};

export default Routes;