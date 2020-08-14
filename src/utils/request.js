import axios from 'axios';
import NProgress from 'nprogress';
import qs from 'qs';
import State from './state';
import { version } from '../../package.json';
import Tools from './tools';

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
				return config;
			},
			(error) => {
				return Promise.reject(error || { code: 0, message: '网络繁忙，请稍候再试！' });
			}
		);
		this.servers.interceptors.response.use(
			(response) => {
				return response;
			},
			(error) => {
				return Promise.reject(error.response || { code: 0, message: '网络繁忙，请稍候再试！' });
			}
		);
	}

	/**
	 * fetch
	 * @param method
	 * @param url
	 * @param body
	 * @param fileList
	 * @param fileKey
	 * @returns {Promise<any>}
	 */
	connection(method = 'get', url, body, fileList, fileKey = 'files') {
		this.getStatusToken();
		if (typeof body !== 'object') body = {};
		method = method.toLocaleLowerCase();
		let headers = {};
		let data = Tools.deleteEmptyOption(body);
		if (method === 'get') {
			url += `${url.indexOf('?') >= 0 ? '&' : '?'}${qs.stringify(body)}`;
			body = {};
		} else {
			NProgress.start();
		}
		if (fileList && fileList instanceof Array) {
			headers = { 'Content-Type': 'multipart/form-data' };
			data = new window.FormData();
			this.setFormData(data, body);
			fileList.forEach((file) => data.append(fileKey, file));
		}
		return new Promise(async (resolve, reject) => {
			try {
				const result = await this.servers.request({ method, url, data, headers });
				NProgress.done();
				resolve(result.data);
			} catch (e) {
				NProgress.done();
				if (e.data) {
					const { message } = e.data;
					e.data.message = message instanceof Array ? message[0].message : message;
					reject(e.data);
				} else {
					reject(e);
				}
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

const request = new BaseApi(process.env.BASE_API);
export default request;
