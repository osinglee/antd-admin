import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import { Link, Redirect, Switch } from 'react-router-dom';
import { If } from 'babel-plugin-jsx-control-statements';
import { getRouters, renderRouters } from '../route-component';
import defaultSettings from '../../../defaultSettings';

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

	const itemRender = (route, params, routes) => {
		const first = routes.indexOf(route) === 0;
		return !first ? <span>{route.breadcrumbName}</span> : <Link to={{ pathname: '/' }}>{route.breadcrumbName}</Link>;
	};

	return (
		<Layout.Content className="app_layout_count">
			<div className="app_layout_content">
				<If condition={defaultSettings.breadcrumb}>
					<div className="bread_div">
						<Breadcrumb className="bread_color" itemRender={itemRender} routes={routes} />
					</div>
				</If>
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
