import React, { useImperativeHandle } from 'react';
import { useEffectOnce, useList, useLocation } from 'react-use';
import { Layout } from 'antd';
import { If } from 'babel-plugin-jsx-control-statements';
import classNames from 'classnames';
import routersAll, { defaultOpenKey } from '../route-component';
import MenuComp from '../../../components/menu';
import defaultSettings from '../../../defaultSettings';

const layoutSider = React.forwardRef(({ setBreadcrumb }, ref) => {
	const state = useLocation();

	const [openKeys, { set }] = useList([]);

	const selectedOpenKey = (hash) => {
		hash = hash.replace('#', '');
		if (hash === '/') return defaultOpenKey();
		const pathList = hash.split('/');
		const result = [];
		if (pathList.length >= 2) {
			pathList
				.filter((v) => !!v)
				.reduce((value, next) => {
					result.push(value ? `${value}/${next}` : `/${next}`);
					return [value, next].join('/');
				}, '');
		}
		return result;
	};

	useEffectOnce(() => {
		const openKeys = selectedOpenKey(state.hash);
		openKeys.pop();
		set(openKeys);
		return () => set(openKeys);
	});

	useImperativeHandle(ref, () => ({
		openKey: (hash) => {
			const openKeys = selectedOpenKey(hash);
			openKeys.pop();
			set(openKeys);
		},
	}));

	const onOpenChange = (openKeys) => {
		set(openKeys);
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
				menu={routersAll}
				defaultOpenKeys={selectedOpenKey(state.hash)}
				setBreadcrumb={setBreadcrumb}
				selectedKeys={selectedOpenKey(state.hash)}
				onOpenChange={onOpenChange}
				openKeys={openKeys}
			/>
		</Layout.Sider>
	);
});

export default layoutSider;
