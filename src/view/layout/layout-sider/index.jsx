import React from 'react';
import { useLocation } from 'react-use';
import { Layout } from 'antd';
import { If } from 'babel-plugin-jsx-control-statements';
import classNames from 'classnames';
import MenuComp from '../../../components/menu';
import { getRouters } from '../route-component';
import defaultSettings from '../../../defaultSettings';

const layoutSider = ({ setBreadcrumb }) => {
	const state = useLocation();

	const defaultOpenKey = () => {
		if (state.hash === '#/') return ['/basics'];
		const pathList = state.hash.replace('#', '').split('/');
		const result = [];
		if (pathList.length >= 2) {
			pathList.pop();
			pathList
				.filter((v) => !!v)
				.reduce((value, next) => {
					result.push(value ? `/${value}/${next}` : `/${next}`);
					return value + next;
				}, '');
		}
		return result;
	};

	const defaultPath = (childRoutes) => {
		return childRoutes.length
			? childRoutes[0].children
				? childRoutes[0].children && childRoutes[0].children.length > 0
					? childRoutes[0].children[0].path
					: '/'
				: childRoutes[0].path
			: '/';
	};

	return (
		<Layout.Sider theme={defaultSettings.siderTheme} trigger={null} collapsible className="site_side_bar">
			<If condition={defaultSettings.sideMode}>
				<div className={classNames('home_logo', { 'home_header_logo-light': defaultSettings.siderTheme === 'light' })}>
					<span className="home_logo_span">
						<h1>react后台管理系统</h1>
					</span>
				</div>
			</If>
			<MenuComp
				menu={getRouters()}
				defaultOpenKeys={defaultOpenKey()}
				setBreadcrumb={setBreadcrumb}
				selectedKeys={[state.hash === '#/' ? defaultPath(getRouters()) : state.hash.replace('#', '')]}
			/>
		</Layout.Sider>
	);
};

export default layoutSider;
