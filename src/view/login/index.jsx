import React, { useState } from 'react';
import { Form, Button, Spin } from 'antd';
import { Redirect, useHistory } from 'react-router-dom';
import State from '../../utils/state';

const Login = (_) => {
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	if (State.isLogin) return <Redirect to={{ pathname: '/' }} />;

	const handleSubmit = (value) => {
		console.log(value);
		// 阻止事件的默认行为
		setLoading(true);
		State.login({});
		history.push('/');

		setLoading(false);
	};

	return (
		<div className="login-container">
			<Form onFinish={handleSubmit} className="content">
				<div className="title">
					<h2>用户登录</h2>
				</div>
				<Spin spinning={loading} tip="登录中...">
					<Form.Item>
						<Button type="primary" htmlType="submit" className="login-form-button">
							登录
						</Button>
					</Form.Item>
				</Spin>
			</Form>
		</div>
	);
};

export default Login;