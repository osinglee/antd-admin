import React from 'react';
import { Button, Form, Space, Spin, Table } from 'antd';
import { useBoolean } from 'ahooks';
import { If } from 'babel-plugin-jsx-control-statements';
import { useList } from 'react-use';
import XlsxImport from '../../../components/XlsxImport';
import css from './index.scss';

export default () => {
	const [form] = Form.useForm();
	const [loading] = useBoolean(false);
	const [dataSource, { set }] = useList([]);
	const [selectedRowKeys, { set: setSelectedRowKeys }] = useList([]);

	const columns = [
		{
			title: '序号',
			dataIndex: '序号',
			width: 50,
			align: 'center',
		},
		{
			title: '功能模块',
			dataIndex: '功能模块',
			width: 150,
		},
		{
			title: '功能简述',
			dataIndex: '功能简述',
		},
	];

	const importSuccess = (_header, body) => {
		set(body);
	};

	const onSelectChange = (selectedRowKeys) => {
		setSelectedRowKeys(selectedRowKeys);
	};

	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	};

	const exportsData = () => {
		import('../../../utils/Export2Excel').then((excel) => {
			const tHeader = columns.map((v) => v.title);
			const filterVal = columns.map((v) => v.dataIndex);
			excel.export_json_to_excel({
				header: tHeader,
				data: dataSource.map((v) => filterVal.map((j) => v[j])),
				filename: 'excel导出',
				autoWidth: true,
				bookType: 'xlsx',
			});
		});
	};

	return (
		<Spin spinning={loading}>
			<Form form={form} className={css.table_list_form}>
				<Space>
					<XlsxImport onSuccess={importSuccess} />
					<Button type="params" onClick={exportsData}>
						导出
					</Button>
				</Space>
			</Form>
			<br />
			<If condition={dataSource.length}>
				<Table
					size="small"
					bordered
					columns={columns}
					scroll={{ y: 'calc(100vh - 290px)' }}
					rowKey="序号"
					dataSource={dataSource}
					rowSelection={{
						...rowSelection,
					}}
				/>
			</If>
		</Spin>
	);
};
