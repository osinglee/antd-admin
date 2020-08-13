import { Breadcrumb, Layout, Button } from 'antd';
import { Link, Redirect, Switch } from 'react-router-dom';
import { getRouters, renderRouters } from '../route-component';
import React from 'react';

const layoutContent = ({ routes }) => {
	function getDefaultPath(childRoutes) {
		return childRoutes.length
			? childRoutes[0].children
				? childRoutes[0].children && childRoutes[0].children.length > 0
					? childRoutes[0].children[0].path
					: '/'
				: childRoutes[0].path
			: '/';
	}

	var inst = 1;

	const itemRender = (route, params, routes, paths) => {
		const first = routes.indexOf(route) === 0;
		return !first ? <span>{route.breadcrumbName}</span> : <Link to={{ pathname: '/' }}>{route.breadcrumbName}</Link>;
	};

	return (
		<Layout.Content className={'app_layout_count'}>
			<div className={'app_layout_content'}>
				<div className={'bread_div'}>
					<Breadcrumb className={'bread_color'} itemRender={itemRender} routes={routes} />
				</div>
				<Switch>
					<Redirect exact from="/" to={getRouters()[0].path} />
					{renderRouters(getRouters())}
					<Redirect path="/" to={getDefaultPath(getRouters())} />
					<Redirect to="/error/404" />
				</Switch>
			</div>
		</Layout.Content>
	);
};
export default layoutContent;
