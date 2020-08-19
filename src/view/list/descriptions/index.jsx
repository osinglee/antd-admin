import React from 'react';
import { Avatar, Button, Descriptions, Spin, Drawer } from 'antd';
import { useBoolean, useRequest } from 'ahooks';
import { If } from 'babel-plugin-jsx-control-statements';

export default () => {
	const [drawerOpen, { setTrue, setFalse }] = useBoolean(false);

	const getTableData = () => {
		return fetch(`https://randomuser.me/api?`)
			.then((res) => res.json())
			.then((res) => res);
	};

	const { data, loading } = useRequest(getTableData, {
		initialData: {},
		formatResult: (response) => response.results[0],
	});
	return (
		<Spin spinning={loading}>
			<Descriptions title="User Info">
				<Descriptions.Item label="姓名">{data.name && data.name.first}</Descriptions.Item>
				<Descriptions.Item label="手机号码">{data.phone}</Descriptions.Item>
				<Descriptions.Item label="邮箱">{data.email}</Descriptions.Item>
				<Descriptions.Item label="头像">
					<If condition={data.picture}>
						<Avatar src={data.picture.large} />
					</If>
				</Descriptions.Item>
				<Descriptions.Item>
					<Button type="link" onClick={setTrue}>
						更多信息
					</Button>
				</Descriptions.Item>
			</Descriptions>

			<Drawer
				className="descriptions-drawer"
				width={640}
				placement="right"
				closable
				mask={false}
				onClose={setFalse}
				visible={drawerOpen}
			>
				<Descriptions title="User Info" column={2}>
					<Descriptions.Item label="姓名">{data.name && data.name.first}</Descriptions.Item>
					<Descriptions.Item label="手机号码">{data.phone}</Descriptions.Item>
					<Descriptions.Item label="邮箱">{data.email}</Descriptions.Item>
					<Descriptions.Item label="头像">
						<If condition={data.picture}>
							<Avatar src={data.picture.large} />
						</If>
					</Descriptions.Item>
				</Descriptions>

				<Descriptions title="User Info" column={2}>
					<Descriptions.Item label="姓名">{data.name && data.name.first}</Descriptions.Item>
					<Descriptions.Item label="手机号码">{data.phone}</Descriptions.Item>
					<Descriptions.Item label="邮箱">{data.email}</Descriptions.Item>
					<Descriptions.Item label="头像">
						<If condition={data.picture}>
							<Avatar src={data.picture.large} />
						</If>
					</Descriptions.Item>
				</Descriptions>
			</Drawer>
		</Spin>
	);
};
