import React from 'react';
import { Button, Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import errImg from '../../../assets/images/404.png';
import css from './index.scss';

const NotFound = () => {
	const history = useHistory();
	const goHome = () => history.replace('/');
	return (
		<Row className={css.not_found}>
			<Col span={12}>
				<img src={errImg} alt="404" />
			</Col>
			<Col span={12} className={css.not_found_right}>
				<h1>404</h1>
				<h2>抱歉，你访问的页面不存在</h2>
				<div>
					<Button type="primary" onClick={goHome}>
						回到首页
					</Button>
				</div>
			</Col>
		</Row>
	);
};

export default NotFound;
