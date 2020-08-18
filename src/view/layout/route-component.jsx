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

const getRecursionFindPath = (child) => {
	if (child.children && child.children.length) {
		const [first] = child.children;
		return getRecursionFindPath(first);
	}
	return child.path;
};

export const getDefaultPath = (childRoutes) => {
	const [first] = childRoutes;
	return getRecursionFindPath(first);
};

const getRecursionFindOpenKey = (child, openKeys) => {
	if (child.children && child.children.length) {
		const [first] = child.children;
		openKeys.push(child.path);
		getRecursionFindOpenKey(first, openKeys);
	} else {
		openKeys.push(child.path);
	}
};

export const defaultOpenKey = () => {
	const openKeys = [];
	const [first] = childRoutes;
	getRecursionFindOpenKey(first, openKeys);
	return openKeys;
};
