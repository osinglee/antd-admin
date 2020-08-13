import { Button, Layout, Modal } from 'antd';
import { ExclamationCircleOutlined, PoweroffOutlined } from '@ant-design/icons';
import React from 'react';
import State from '../../../utils/state';
import { useHistory } from 'react-router-dom';

const layoutHeader = (_) => {
	const history = useHistory();

	const logout = () => {
		Modal.confirm({
			title: '提示?',
			icon: <ExclamationCircleOutlined />,
			content: '您确定要离开吗',
			okText: '确定',
			cancelText: '取消',
			onOk() {
				State.logout();
				history.push('/login');
			},
		});
	};

	return (
		<Layout.Header heme="light" className={'site_layout_background'} style={{ height: 50, lineHeight: 50 }}>
			<div className={'site_layout_header'}>
				<div className={'trigger'}>重庆市生源地助学贷款管理中心</div>
				<Button type={'link'} className={'logout_button'} icon={<PoweroffOutlined />} onClick={logout}>
					退出系统
				</Button>
			</div>
		</Layout.Header>
	);
};
export default layoutHeader;
