// src/stores/counter-store.tsx
import { observable, action } from 'mobx';

export class LoginStore {
	@observable
	isLogin = false;

	@action
	loginAction() {
		this.isLogin = true;
	}

	@action
	logoutAction() {
		this.isLogin = false;
	}
}
