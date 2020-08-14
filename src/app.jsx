import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable-s';
import Loading from './components/Loading';
import State from './utils/state';

const Login = Loadable({ loader: () => import('./view/login'), loading: Loading });
const Layout = Loadable({ loader: () => import('./view/layout'), loading: Loading });

const App = () => {
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
