import React, { useImperativeHandle } from 'react';
import { useEffectOnce, useList, useLocation } from 'react-use';
import { Layout, Tooltip } from 'antd';
import { If } from 'babel-plugin-jsx-control-statements';
import classNames from 'classnames';
import { useBoolean } from 'ahooks';
import routersAll, { defaultOpenKey } from '../route-component';
import MenuComp from '../../../components/menu';
import defaultSettings from '../../../defaultSettings';
import css from '../index.scss';
import img from '../../../assets/images/logo.svg';
import { name } from '../../../../package.json';

const layoutSider = React.forwardRef(({ setBreadcrumb }, ref) => {
	const state = useLocation();
	const [collapsed, { toggle }] = useBoolean(false);

	const path = state.hash.replace(/\?.*/, '');
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
		const openKeys = selectedOpenKey(path);
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
		<Layout.Sider
			theme={defaultSettings.siderTheme}
			trigger={null}
			collapsed={collapsed}
			collapsible
			collapsedWidth={48}
			className={css.site_side_bar}
		>
			<If condition={defaultSettings.sideMode}>
				<div
					className={classNames(css.home_logo, {
						[css.home_header_logo_light]: defaultSettings.siderTheme === 'light',
					})}
				>
					<span className={css.home_logo_span}>
						<If condition={collapsed}>
							<Tooltip placement="right" title={name}>
								<img src={img} alt="logo" />
							</Tooltip>
						</If>
						<If condition={!collapsed}>
							<img src={img} alt="logo" />
							<h4>{name}</h4>
						</If>
					</span>
				</div>
			</If>
			<MenuComp
				menu={routersAll}
				defaultOpenKeys={selectedOpenKey(path)}
				setBreadcrumb={setBreadcrumb}
				selectedKeys={selectedOpenKey(path)}
				onOpenChange={onOpenChange}
				openKeys={openKeys}
				collapsed={collapsed}
				toggleCollapsed={toggle}
			/>
		</Layout.Sider>
	);
});

export default layoutSider;
