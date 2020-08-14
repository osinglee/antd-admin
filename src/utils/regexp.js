// ## https://github.com/any86/any-rule

export default class Regexp {
	/**
	 * 身份证号码验证
	 * @type {RegExp}
	 */
	static idCard = new RegExp(
		/(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/
	);

	/**
	 * 手机号码验证
	 * @type {RegExp}
	 */
	static phone = new RegExp(/^1([3-9])\d{9}$/);

	/**
	 * 登录密码验证
	 * @type {RegExp}
	 */
	static password = new RegExp(/^([\w]{6,11})/);

	/**
	 * 汉字中文
	 * @type {RegExp}
	 */
	static chinese = new RegExp(/^[\u4e00-\u9fa5]*$/);

	/**
	 * 邮箱
	 * @type {RegExp}
	 */
	static email = new RegExp(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
}
