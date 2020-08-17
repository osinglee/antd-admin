import React from 'react';
import { Route } from 'react-router-dom';
import childRoutes from '../router';
import State from '../../utils/state';

export const RouteWithSubRoutes = (route) => (
	<Route
		path={route.path}
		exact={route.exact}
		render={(props) => <route.component {...props} routes={route.routes} />}
	/>
);

export const renderRouters = (childRoutes) => {
	return childRoutes.map((route, index) => {
		if (route.children !== undefined && route.children.length > 0) {
			return renderRouters(route.children);
		}
		return <RouteWithSubRoutes key={index.toString()} {...route} />;
	});
};

const routersAll = childRoutes.filter((v) => (v.roles ? v.roles.includes(State.userInfo.roles) || true : true));
export default routersAll;

export const getDefaultPath = (childRoutes) => {
	return childRoutes.length
		? childRoutes[0].children
			? childRoutes[0].children && childRoutes[0].children.length > 0
				? childRoutes[0].children[0].children && childRoutes[0].children[0].children.length > 0
					? childRoutes[0].children[0].children[0].path
					: childRoutes[0].children[0].path
				: childRoutes[0].path
			: childRoutes[0].path
		: '/';
};

export const defaultOpenKey = () => {
	return routersAll.length
		? routersAll[0].children
			? routersAll[0].children && routersAll[0].children.length > 0
				? routersAll[0].children[0].children && routersAll[0].children[0].children.length > 0
					? [routersAll[0].path, routersAll[0].children[0].path, routersAll[0].children[0].children[0].path]
					: [routersAll[0].path, routersAll[0].children[0].path]
				: [routersAll[0].path]
			: [routersAll[0].path]
		: '/';
};
