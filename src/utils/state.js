import { sessionDb } from './storage';

export default class State {
	static get isLogin() {
		return !!sessionDb.get('user.login');
	}

	static get userInfo() {
		return sessionDb.get('user.info') || {};
	}

	static login(userInfo) {
		sessionDb.set('user.login', true);
		sessionDb.set('user.info', userInfo);
	}

	static logout() {
		sessionDb.clear();
	}
}
