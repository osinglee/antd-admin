import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './view/layout';
import Login from './view/login';
import State from './utils/state';

const App = (_) => {
	return (
		<HashRouter>
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route
					path="/"
					render={() => {
						if (!State.isLogin) return <Redirect to="/login" />;
						return <Layout />;
					}}
				/>
			</Switch>
		</HashRouter>
	);
};

export default App;
