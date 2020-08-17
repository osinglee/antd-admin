import React from 'react';
import { Breadcrumb, Card, Layout } from 'antd';
import { Link, Redirect, Switch } from 'react-router-dom';
import { If } from 'babel-plugin-jsx-control-statements';
import routersAll, { getDefaultPath, renderRouters } from '../route-component';
import defaultSettings from '../../../defaultSettings';

const layoutContent = ({ routes, goHome }) => {
	const itemRender = (route, params, routes) => {
		const first = routes.indexOf(route) === 0;
		return !first ? (
			<span>{route.breadcrumbName}</span>
		) : (
			<Link to={{ pathname: '/' }} onClick={goHome}>
				{route.breadcrumbName}
			</Link>
		);
	};

	return (
		<Layout.Content className="app_layout_count">
			<div className="app_layout_content">
				<If condition={defaultSettings.breadcrumb}>
					<div className="bread_div">
						<Breadcrumb className="bread_color" itemRender={itemRender} routes={routes} />
					</div>
				</If>
				<Card bordered={false}>
					<Switch>
						<Redirect exact from="/" to={getDefaultPath(routersAll)} />
						{renderRouters(routersAll)}
						<Redirect to="/error/404" />
					</Switch>
				</Card>
			</div>
		</Layout.Content>
	);
};
export default layoutContent;
