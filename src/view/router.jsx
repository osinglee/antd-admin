import React from 'react';
import Loadable from 'react-loadable-s';
import { DollarOutlined, ClockCircleOutlined, SettingOutlined } from '@ant-design/icons';
import Loading from '../components/Loading';

const Error404 = Loadable({ loader: () => import('./error/404'), loading: Loading });
const Setting = Loadable({ loader: () => import('./setting'), loading: Loading });
const BasicForm = Loadable({ loader: () => import('./form/basic-form'), loading: Loading });
const TableList = Loadable({ loader: () => import('./list/table-list'), loading: Loading });

export default [
	{
		path: '/form',
		label: '表单页',
		roles: ['ADMIN'],
		icon: <ClockCircleOutlined />,
		children: [
			{
				path: '/form/basic-form',
				label: '基础表单',
				roles: ['ADMIN'],
				component: BasicForm,
				children: [
					{
						path: '/form/basic-form/1',
						label: '基础表单-1',
						roles: ['ADMIN'],
						component: BasicForm,
					},
					{
						path: '/form/basic-form/3',
						label: '基础表单-2',
						roles: ['ADMIN'],
						component: BasicForm,
					},
				],
			},
			{
				path: '/form/basic-form2',
				label: '基础表单',
				roles: ['ADMIN'],
				component: BasicForm,
			},
		],
	},
	{
		path: '/list',
		label: '列表页',
		roles: ['ADMIN'],
		icon: <DollarOutlined />,
		children: [
			{
				path: '/list/table-list',
				label: '查询表格',
				roles: ['ADMIN'],
				component: TableList,
			},
			{
				path: '/list/table-list2',
				label: '查询表格',
				roles: ['ADMIN'],
				component: TableList,
			},
		],
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
