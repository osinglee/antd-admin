import React from 'react';
import Loadable from 'react-loadable';
import { DollarOutlined, ClockCircleOutlined, SettingOutlined } from '@ant-design/icons';
import Loading from '../components/Loading';

const Error404 = Loadable({
	loader: () => import(/*webpackChunkName:'Error404'*/ './error/404'),
	loading: Loading,
});
const Setting = Loadable({
	loader: () => import(/*webpackChunkName:'Error404'*/ './setting'),
	loading: Loading,
});
const Appointment = Loadable({
	loader: () => import(/*webpackChunkName:'Error404'*/ './appointment'),
	loading: Loading,
});
const Loan = Loadable({
	loader: () => import(/*webpackChunkName:'Error404'*/ './loan'),
	loading: Loading,
});

export default [
	{
		path: '/appointment',
		label: '预约管理',
		roles: ['ADMIN'],
		icon: <ClockCircleOutlined />,
		component: Appointment,
	},
	{
		path: '/loan',
		label: '贷款管理',
		roles: ['ADMIN'],
		icon: <DollarOutlined />,
		component: Loan,
	},
	{
		path: '/setting',
		label: '管理中心',
		roles: ['ADMIN'],
		icon: <SettingOutlined />,
		component: Setting,
	},
	{ path: '/error/404', hidden: true, component: Error404 },
	{ path: '*', hidden: true, component: Error404 },
];
