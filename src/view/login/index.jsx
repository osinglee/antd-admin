import React from 'react';
import { Form, Button, Spin, Layout } from 'antd';
import { Redirect, useHistory } from 'react-router-dom';
import { useBoolean } from 'ahooks';
import State from '../../utils/state';
import css from './index.scss';

export default () => {
	const [loading, { setTrue, setFalse }] = useBoolean(false);
	const history = useHistory();

	if (State.isLogin) return <Redirect to={{ pathname: '/' }} />;

	const handleSubmit = (value) => {
		console.log(value);
		setTrue();
		// RequireApi.WebLogin({ account: '123', password: '234' })
		// 	.then((res) => {
		// 		console.log(res);
		setFalse();
		State.login({ name: 'admin' });
		history.push('/');
		// })
		// .catch((e) => {
		// 	message.error(e);
		// 	setFalse();
		// });
	};

	return (
		<Layout className={css.login_layout}>
			<Layout.Content className={css.login_content}>
				<Form onFinish={handleSubmit} className={css.form_content}>
					<div className="title">
						<h2 className={css.h2}>用户登录</h2>
					</div>
					<Spin spinning={loading} tip="登录中...">
						<Form.Item>
							<Button type="primary" htmlType="submit" className={css.login_form_button}>
								登录
							</Button>
						</Form.Item>
					</Spin>
				</Form>
			</Layout.Content>
			<Layout.Footer className={css.login_footer}>Footer</Layout.Footer>
		</Layout>
	);
};
