import React from 'react';
import { Layout } from 'antd';
import { Redirect } from 'react-router-dom';
import State from '../../utils/state';
import './index.less';
import LayoutHeader from './layout-header';
import LayoutSider from './layout-sider';
import LayoutContent from './layout-content';
import { useEffectOnce, useList, useLocation } from 'react-use';
import { getRouters } from './route-component';

const AppLayout = (_) => {
	const state = useLocation();
	if (!State.isLogin) return <Redirect to={{ pathname: '/login' }} />;

	const [routes, { push, reset }] = useList([{ path: getRouters()[0].path, breadcrumbName: '首页' }]);

	useEffectOnce(() => {
		const initRoutes = (_) => {
			const path = state.hash.replace('#', '');
			if (path === '/') {
				push({ path: '/appointment', breadcrumbName: '预约管理' });
			}
			getRouters().forEach((v) => {
				if (v.children && v.children.length) {
					v.children.forEach((k) => {
						if (k.path === path) push({ path: '', breadcrumbName: v.label }, { path: '', breadcrumbName: k.label });
					});
				} else {
					if (v.path === path) push({ path: '', breadcrumbName: v.label });
				}
			});
		};
		initRoutes();
		return () => initRoutes;
	});

	const setBreadcrumb = ({ item, key, keyPath }) => {
		reset();
		if (key === getRouters()[0].path) return;
		if (keyPath.length === 2) {
			push({ path: '', breadcrumbName: item.node.parentNode.previousSibling.innerText });
		}
		push({ path: '', breadcrumbName: item.node.innerText });
	};

	return (
		<Layout style={{ minHeight: '100vh' }} className={'app_layout'}>
			<LayoutHeader />
			<Layout className={'site_layout'}>
				<LayoutSider setBreadcrumb={setBreadcrumb} />
				<LayoutContent routes={routes} />
			</Layout>
		</Layout>
	);
};

export default AppLayout;
