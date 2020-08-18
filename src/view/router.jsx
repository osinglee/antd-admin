import React from 'react';
import Loadable from 'react-loadable-s';
import { DollarOutlined, ClockCircleOutlined, SettingOutlined } from '@ant-design/icons';
import Loading from '../components/Loading';

const Error404 = Loadable({ loader: () => import('./error/404'), loading: Loading });
const BraftEditor = Loadable({ loader: () => import('./braft-editor'), loading: Loading });
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
		],
	},
	{
		path: '/braft-editor',
		label: '编辑器',
		roles: ['ADMIN'],
		icon: <SettingOutlined />,
		component: BraftEditor,
	},
	{ path: '/error/404', hidden: true, component: Error404 },
	{ path: '*', hidden: true, component: Error404 },
];
