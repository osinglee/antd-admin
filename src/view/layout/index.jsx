import React, { useRef } from 'react';
import { Layout } from 'antd';
import { useEffectOnce, useList, useLocation } from 'react-use';
import { Choose, When } from 'babel-plugin-jsx-control-statements';
import { Redirect } from 'react-router-dom';
import State from '../../utils/state';
import css from './index.scss';
import LayoutHeader from './layout-header';
import LayoutSider from './layout-sider';
import LayoutContent from './layout-content';
import routersAll, { getDefaultPath } from './route-component';
import defaultSettings from '../../defaultSettings';

const AppLayout = () => {
	const state = useLocation();

	const siderRef = useRef(null);
	if (!State.isLogin) return <Redirect to={{ pathname: '/login' }} />;

	const [routes, { push, reset }] = useList([{ path: routersAll[0].path, breadcrumbName: '首页' }]);

	const initRoutes = (target, hash, paths = []) => {
		target.forEach((v) => {
			if (v.children && v.children.length > 0) {
				initRoutes(v.children, hash, [
					...paths,
					{
						paths: v.path,
						breadcrumbName: v.label,
					},
				]);
			} else if (v.path === hash) {
				push(...paths, {
					paths: v.path,
					breadcrumbName: v.label,
				});
			}
		});
	};

	useEffectOnce(() => {
		const path = state.hash.replace(/\?.*/, '');
		const hash = path === '#/' ? getDefaultPath(routersAll) : path.replace('#', '');
		initRoutes(routersAll, hash);
		return () => initRoutes;
	});

	const setBreadcrumb = async ({ key }) => {
		await reset();
		initRoutes(routersAll, key);
	};

	const goHome = () => {
		setBreadcrumb({ key: getDefaultPath(routersAll) });
		siderRef.current.openKey(getDefaultPath(routersAll));
	};

	return (
		<Layout className={css.app_layout}>
			<Choose>
				<When condition={defaultSettings.sideMode}>
					<LayoutSider setBreadcrumb={setBreadcrumb} />
				</When>
				<When condition={!defaultSettings.sideMode}>
					<LayoutHeader />
				</When>
			</Choose>
			<Layout className={css.site_layout}>
				<Choose>
					<When condition={defaultSettings.sideMode}>
						<LayoutHeader />
					</When>
					<When condition={!defaultSettings.sideMode}>
						<LayoutSider ref={siderRef} setBreadcrumb={setBreadcrumb} />
					</When>
				</Choose>
				<LayoutContent routes={routes} goHome={goHome} />
			</Layout>
		</Layout>
	);
};

export default AppLayout;
