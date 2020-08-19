import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import { Link, Redirect, Switch } from 'react-router-dom';
import { If } from 'babel-plugin-jsx-control-statements';
import routersAll, { getDefaultPath, renderRouters } from '../route-component';
import defaultSettings from '../../../defaultSettings';
import css from '../index.scss';

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
		<Layout.Content className={css.app_layout_count}>
			<div className={css.app_layout_flex}>
				<If condition={defaultSettings.breadcrumb}>
					<div className={css.bread_div}>
						<Breadcrumb className={css.bread_color} itemRender={itemRender} routes={routes} />
					</div>
				</If>
				<div className={css.layout_switch}>
					<Switch>
						<Redirect exact from="/" to={getDefaultPath(routersAll)} />
						{renderRouters(routersAll)}
						<Redirect to="/error/404" />
					</Switch>
				</div>
			</div>
		</Layout.Content>
	);
};
export default layoutContent;
