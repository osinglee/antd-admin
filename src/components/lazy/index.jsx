import Loadable from 'react-loadable-s';
import React, { useEffect } from 'react';
import { Spin } from 'antd';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import css from './index.scss';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

export const Loading = () => {
	useEffect(() => {
		NProgress.start();
		return () => NProgress.done();
	}, []);

	return (
		<div className={css.app_container}>
			<Spin />
		</div>
	);
};

export default (resolve) => {
	return Loadable({ loader: () => resolve, loading: Loading });
};
