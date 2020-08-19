import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Layout, Modal } from 'antd';
import { If } from 'babel-plugin-jsx-control-statements';
import { ExclamationCircleOutlined, PoweroffOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import State from '../../../utils/state';
import defaultSetting from '../../../defaultSettings';
import css from '../index.scss';

const layoutHeader = () => {
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

	const light = defaultSetting.siderTheme !== 'light';

	return (
		<Layout.Header className={classNames(css.site_layout_background, { [css.header_light]: light })}>
			<div className={css.site_layout_header}>
				<If condition={!defaultSetting.sideMode}>
					<div className={classNames(css.home_header_logo, { [css.home_header_logo_light]: light })}>
						<span className={css.home_logo_span}>
							<h1>react后台管理系统</h1>
						</span>
					</div>
				</If>
				<Button
					type="link"
					className={classNames(css.logout_button, { [css.logout_button_light]: light })}
					icon={<PoweroffOutlined />}
					onClick={logout}
				>
					退出系统
				</Button>
			</div>
		</Layout.Header>
	);
};
export default layoutHeader;
