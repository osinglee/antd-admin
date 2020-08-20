import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import lazy from './components/lazy';
import State from './utils/state';

const Layout = lazy(import('./view/layout'));

export default () => {
	return (
		<HashRouter>
			<Switch>
				<Route exact path="/login" component={lazy(import('./view/login'))} />
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
