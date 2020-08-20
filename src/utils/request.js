import axios from 'axios';
import NProgress from 'nprogress';
import qs from 'qs';
import State from './state';
import { version } from '../../package.json';
import Tools from './tools';

const codeMessage = {
	200: '服务器成功返回请求的数据。',
	201: '新建或修改数据成功。',
	202: '一个请求已经进入后台排队（异步任务）。',
	204: '删除数据成功。',
	400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
	401: '用户没有权限（令牌、用户名、密码错误）。',
	403: '用户得到授权，但是访问是被禁止的。',
	404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
	406: '请求的格式不可得。',
	410: '请求的资源被永久删除，且不会再得到的。',
	422: '当创建一个对象时，发生一个验证错误。',
	500: '服务器发生错误，请检查服务器。',
	502: '网关错误。',
	503: '服务不可用，服务器暂时过载或维护。',
	504: '网关超时。',
};

/**
 * 请求类
 */
export class BaseApi {
	servers;

	/**
	 * 初始化servers
	 */
	constructor(hot) {
		/**
		 * 初始化servers
		 */
		this.servers = axios.create({
			baseURL: hot,
			headers: {
				'App-Version': version,
			},
			timeout: 600000,
			withCredentials: true,
		});
		this.servers.interceptors.request.use(
			(config) => {
				if (config.data instanceof window.FormData) {
					config.headers = { ...config.headers, 'Content-Type': 'multipart/form-data' };
				}
				return config;
			},
			(error) => Promise.reject(error)
		);
		this.servers.interceptors.response.use(
			(response) => {
				NProgress.done();
				return response;
			},
			({ response }) => {
				NProgress.done();
				let errorText = response ? codeMessage[response.status] : '网络繁忙，请稍候再试！';
				if (response && response.data && response.data instanceof Object) {
					const { message } = response.data;
					errorText = message instanceof Array ? message[0].message : message || '请求参数错误！';
				}
				return Promise.reject(errorText);
			}
		);
	}

	/**
	 * fetch
	 * @param method
	 * @param url
	 * @param body
	 * @returns {Promise<any>}
	 */
	connection(method = 'get', url, body) {
		this.getStatusToken();
		if (typeof body !== 'object') body = {};
		method = method.toLocaleLowerCase();
		body = Tools.deleteEmptyOption(body);
		if (method === 'get') {
			url += `${url.indexOf('?') >= 0 ? '&' : '?'}${qs.stringify(body)}`;
			body = {};
		} else {
			NProgress.start();
		}
		return new Promise(async (resolve, reject) => {
			try {
				const result = await this.servers.request({ method, url, data: body });
				resolve(result.data);
			} catch (e) {
				// 这里弹出错误消息不做统一处理
				reject(e);
			}
		});
	}

	/**
	 * 设置token
	 */
	getStatusToken() {
		const user = State.userInfo;
		if (State.isLogin && user) {
			this.servers.defaults.headers.common.Authorization = `Bearer ${user.token}`;
		}
	}

	/**
	 * 设置嵌套formData
	 */
	setFormData(formData, params, prefix = '') {
		prefix = prefix ? `${prefix}.` : '';
		// eslint-disable-next-line no-restricted-syntax
		for (const key in params) {
			if ({}.hasOwnProperty.call(params, key)) {
				if (params[key] && params[key] instanceof Array) {
					params[key].forEach((item, index) => {
						if (typeof item === 'object') {
							this.setFormData(formData, item, `${prefix}${key}[${index}]`);
						} else formData.append(`${prefix}${key}[${index}]`, item);
					});
				} else if (typeof params[key] === 'object') {
					this.setFormData(formData, params[key], `${prefix}${key}`);
				} else formData.append(`${prefix}${key}`, params[key]);
			}
		}
	}
}

const request = new BaseApi(process.env.BASE_API || 'https://admin.xl.singularitychina.com/server/');
export default request;
