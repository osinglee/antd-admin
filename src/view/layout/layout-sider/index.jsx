import React, { useImperativeHandle } from 'react';
import { useEffectOnce, useList, useLocation } from 'react-use';
import { Layout } from 'antd';
import { If } from 'babel-plugin-jsx-control-statements';
import classNames from 'classnames';
import routersAll, { defaultOpenKey } from '../route-component';
import MenuComp from '../../../components/menu';
import defaultSettings from '../../../defaultSettings';

const layoutSider = React.forwardRef((props, ref) => {
	const state = useLocation();

	const [openKeys, { set }] = useList([]);

	const selectedOpenKey = () => {
		if (state.hash === '#/') return defaultOpenKey();
		const pathList = state.hash.replace('#', '').split('/');
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
		set(defaultOpenKey());
		return () => set(defaultOpenKey());
	});

	useImperativeHandle(ref, () => ({
		openKey: () => set(defaultOpenKey()),
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
				defaultOpenKeys={selectedOpenKey()}
				setBreadcrumb={props.setBreadcrumb}
				selectedKeys={selectedOpenKey()}
				onOpenChange={onOpenChange}
				openKeys={openKeys}
			/>
		</Layout.Sider>
	);
});

export default layoutSider;
