/**
 * title: Form and Table data binding
 * desc: useAntdTable returns a search object after receiving a form instance.
 *
 * title.zh-CN: Form 与 Table 联动
 * desc.zh-CN: useAntdTable 接收 form 实例后，会返回 search 对象。
 */

import React from 'react';
import { Form, Input, Table, Select, Button, Space } from 'antd';
import { useAntdTable } from 'ahooks';
import qs from 'qs';
import { Link } from 'react-router-dom';
import css from './index.scss';

const getTableData = ({ current, pageSize }, formData) => {
	let query = `page=${current}&size=${pageSize}`;
	Object.entries(formData).forEach(([key, value]) => {
		if (value) {
			query += `&${key}=${value}`;
		}
	});

	return fetch(`https://randomuser.me/api?results=100&${query}`)
		.then((res) => res.json())
		.then((res) => res);
};

export default () => {
	const [form] = Form.useForm();

	const { tableProps, search } = useAntdTable(getTableData, {
		defaultPageSize: 20,
		paginated: true,
		formatResult: (response) => ({
			total: response.info.results,
			list: response.results,
		}),
		form,
	});

	const { submit, reset } = search;

	const columns = [
		{
			title: '姓名',
			dataIndex: 'name',
			render: (text, record) => {
				return (
					<Link to={{ pathname: `/list/descriptions`, search: qs.stringify({ phone: record.phone }) }}>
						{text.first}
					</Link>
				);
			},
		},
		{
			title: '邮箱',
			dataIndex: 'email',
		},
		{
			title: '电话',
			dataIndex: 'phone',
		},
		{
			title: '性别',
			dataIndex: 'gender',
			render: (text) => {
				return <span>{text === 'male' ? '男' : '女'}</span>;
			},
		},
	];

	return (
		<>
			<Form form={form} className={css.table_list_form}>
				<Space>
					<Form.Item name="gender" placeholder="请选择性别" noStyle>
						<Select style={{ width: 120 }}>
							<Select.Option value="">全部</Select.Option>
							<Select.Option value="male">男</Select.Option>
							<Select.Option value="female">女</Select.Option>
						</Select>
					</Form.Item>
					<Form.Item name="name" noStyle>
						<Input placeholder="请输入姓名" style={{ width: 200 }} allowClear />
					</Form.Item>
					<Button type="primary" onClick={submit}>
						查询
					</Button>
					<Button type="primary" onClick={reset}>
						重置
					</Button>
				</Space>
			</Form>
			<Table
				size="small"
				bordered
				columns={columns}
				scroll={{ y: 'calc(100vh - 290px)' }}
				rowKey="email"
				{...tableProps}
			/>
		</>
	);
};
