import State from './state';
import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

/**
 * 请求类
 */
export class BaseApi {
	host;

	constructor(host) {
		this.host = host;
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
		return new Promise(async (resolve, reject) => {
			try {
				const headers = this.getStatusToken();
				NProgress.start();
				if (method === 'get') {
					const { data } = await axios.get(`${this.host}${url}`, {
						headers,
						params: body,
					});
					NProgress.done();
					resolve(data);
				} else {
					const { data } = await axios.post(`${this.host}${url}`, body, {
						headers,
					});
					NProgress.done();
					resolve(data);
				}
			} catch (e) {
				NProgress.done();
				reject(e.response ? e.response.data : { message: '网络连接失败' });
			}
		});
	}

	/**
	 * 设置token
	 */
	getStatusToken() {
		let header = {};
		const user = State.userInfo;
		if (State.isLogin && user) {
			header = { token: user.token };
		}
		return header;
	}
}

// https://loan-booking.singularitychina.com
const services = new BaseApi(process.env.BASE_API);
export default services;
