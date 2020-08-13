import { Route } from 'react-router-dom';
import childRoutes from '../router';
import React from 'react';
import State from '../../utils/state';

export const RouteWithSubRoutes = (route) => (
	<Route
		path={route.path}
		exact={route.exact}
		render={(props) => <route.component {...props} routes={route.routes} />}
	/>
);

export function getRouters() {
	const user = State.userInfo;
	// 根据权限判断路由
	return childRoutes.filter((v) => (v.roles ? v.roles.includes(user.roles) || true : true));
}

export const renderRouters = (childRoutes) => {
	return childRoutes.map((route, index) => {
		if (route.children !== undefined && route.children.length > 0) {
			return renderRouters(route.children);
		}
		return <RouteWithSubRoutes key={index} {...route} />;
	});
};
