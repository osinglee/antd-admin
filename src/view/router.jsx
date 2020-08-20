import React from 'react';
import { DollarOutlined, ClockCircleOutlined, SettingOutlined } from '@ant-design/icons';
import lazy from '../components/lazy';

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
				component: lazy(import('./form/basic-form')),
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
				component: lazy(import('./list/table-list')),
			},
			{
				path: '/list/descriptions',
				label: '描述列表',
				roles: ['ADMIN'],
				component: lazy(import('./list/descriptions')),
			},
		],
	},
	{
		path: '/excel',
		label: 'Excel',
		roles: ['ADMIN'],
		icon: <DollarOutlined />,
		children: [
			{
				path: '/excel/import',
				label: 'Excel导入',
				roles: ['ADMIN'],
				component: lazy(import('./excel/excel-import')),
			},
		],
	},
	{
		path: '/braft-editor',
		label: '编辑器',
		roles: ['ADMIN'],
		icon: <SettingOutlined />,
		component: lazy(import('./braft-editor')),
	},
	{ path: '/error/404', hidden: true, component: lazy(import('../components/error/404')) },
	{ path: '*', hidden: true, component: lazy(import('../components/error/404')) },
];
