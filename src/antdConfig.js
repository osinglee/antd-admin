import React from 'react';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import SmileOutlined from '@ant-design/icons/lib/icons/SmileOutlined';

moment.locale('zh-cn');

const validateMessages = {
	// eslint-disable-next-line no-template-curly-in-string
	required: '${label}不能为空!',
	types: {
		email: '邮箱格式不正确!',
		number: '请输入数字!',
	},
	number: {
		// eslint-disable-next-line no-template-curly-in-string
		range: '请输入${min}到${max}之间的数',
	},
};

const customizeRenderEmpty = () => (
	<div style={{ textAlign: 'center' }}>
		<SmileOutlined style={{ fontSize: 20 }} />
		<p className={'empty-p'}>暂无数据</p>
	</div>
);

export default {
	locale: zhCN,
	form: { validateMessages },
	renderEmpty: customizeRenderEmpty,
};
