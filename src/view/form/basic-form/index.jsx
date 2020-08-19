import React, { useState } from 'react';
import { Form, Input, Tooltip, Cascader, Select, Row, Col, Button, AutoComplete, DatePicker } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import FormItemLabel from '../../../components/FormItemLabel';

const { Option } = Select;

const residences = [
	{
		value: 'zhejiang',
		label: 'Zhejiang',
		children: [
			{
				value: 'hangzhou',
				label: 'Hangzhou',
				children: [
					{
						value: 'xihu',
						label: 'West Lake',
					},
				],
			},
		],
	},
	{
		value: 'jiangsu',
		label: 'Jiangsu',
		children: [
			{
				value: 'nanjing',
				label: 'Nanjing',
				children: [
					{
						value: 'zhonghuamen',
						label: 'Zhong Hua Men',
					},
				],
			},
		],
	},
];

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 4 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 16 },
	},
};
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
	},
};

const basicForm = () => {
	const [form] = Form.useForm();

	const onFinish = (values) => {
		console.log('Received values of form: ', values);
	};

	const prefixSelector = (
		<Form.Item name="prefix" noStyle>
			<Select style={{ width: 70 }}>
				<Option value="86">+86</Option>
				<Option value="87">+87</Option>
			</Select>
		</Form.Item>
	);

	const [autoCompleteResult, setAutoCompleteResult] = useState([]);

	const onWebsiteChange = (value) => {
		if (!value) {
			setAutoCompleteResult([]);
		} else {
			setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
		}
	};

	const websiteOptions = autoCompleteResult.map((website) => ({
		label: website,
		value: website,
	}));

	const initialValues = {
		residence: ['zhejiang', 'hangzhou', 'xihu'],
		prefix: '86',
	};

	return (
		<Form
			{...formItemLayout}
			form={form}
			hideRequiredMark
			onFinish={onFinish}
			initialValues={initialValues}
			scrollToFirstError
		>
			<Form.Item
				name="email"
				label={<FormItemLabel label="邮箱" require />}
				rules={[
					{
						type: 'email',
						message: '输入的电子邮件无效!',
					},
					{
						required: true,
						message: '邮箱不能为空',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				name="password"
				label={
					<FormItemLabel label="密码" require>
						<Tooltip title="密码长度为6-11为字符?">
							<QuestionCircleOutlined />
						</Tooltip>
					</FormItemLabel>
				}
				rules={[{ required: true, message: '密码不能为空' }]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item
				name="confirm"
				label={<FormItemLabel label="确认密码" require />}
				dependencies={['password']}
				rules={[
					{ required: true, message: '确认密码不能为空' },
					({ getFieldValue }) => ({
						validator(rule, value) {
							if (!value || getFieldValue('password') === value) {
								return Promise.resolve();
							}
							return Promise.reject('您输入的两个密码不匹配！');
						},
					}),
				]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item name="nickname" label="姓名" rules={[{ required: true, whitespace: true }]}>
				<Input />
			</Form.Item>

			<Form.Item
				name="residence"
				label="Habitual Residence"
				rules={[{ type: 'array', required: true, message: 'Please select your habitual residence!' }]}
			>
				<Cascader options={residences} />
			</Form.Item>

			<Form.Item
				name="phone"
				label="Phone Number"
				rules={[{ required: true, message: 'Please input your phone number!' }]}
			>
				<Input addonBefore={prefixSelector} style={{ width: '100%' }} />
			</Form.Item>

			<Form.Item name="website" label="Website" rules={[{ required: true, message: 'Please input website!' }]}>
				<AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
					<Input />
				</AutoComplete>
			</Form.Item>

			<Form.Item label="inline" style={{ marginBottom: 0 }}>
				<Form.Item style={{ display: 'inline-block', width: 200 }}>
					<DatePicker style={{ width: '100%' }} />
				</Form.Item>
				<span style={{ display: 'inline-block', width: '24px', lineHeight: '32px', textAlign: 'center' }}>-</span>
				<Form.Item style={{ display: 'inline-block', width: 200 }}>
					<DatePicker style={{ width: '100%' }} />
				</Form.Item>
			</Form.Item>

			<Form.Item label="Captcha" extra="We must make sure that your are a human.">
				<Row gutter={8}>
					<Col span={12}>
						<Form.Item
							name="captcha"
							noStyle
							rules={[{ required: true, message: 'Please input the captcha you got!' }]}
						>
							<Input />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Button>Get captcha</Button>
					</Col>
				</Row>
			</Form.Item>

			<Form.Item {...tailFormItemLayout}>
				<Button type="primary" htmlType="submit">
					Register
				</Button>
			</Form.Item>
			<br />
		</Form>
	);
};

export default basicForm;
