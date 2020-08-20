export default class Tools {
	static queryToHash(name) {
		const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
		const r = window.location.search.substr(1).match(reg);
		if (r !== null) {
			return unescape(r[2]);
		}
		return null;
	}

	// 获取上传文件的base64
	static getBase64(img, height, width, callback) {
		const reader = new FileReader();
		reader.addEventListener('load', () => Tools.compressImg(reader.result, height, width, (data) => callback(data)));
		reader.readAsDataURL(img);
	}

	static convertToBase64(file, size = undefined) {
		const allowImageFileSize = size || 2 * 1024 * 1024;
		const reader = new FileReader();
		if (file) {
			return new Promise((resolve, reject) => {
				reader.readAsDataURL(file);
				reader.onload = (e) => {
					if (allowImageFileSize !== 0 && reader.result.length > allowImageFileSize) {
						const MBSize = Math.floor(allowImageFileSize / 1024 / 1024);
						reject({ allow: `${MBSize}MB`, obj: e });
					} else {
						resolve(reader.result);
					}
				};
			});
		}
		return null;
	}

	static compressImg(imgData, height, width, onCompress = () => null) {
		if (!imgData) return;

		const canvas = document.createElement('canvas');
		const img = new Image();
		img.onload = () => {
			img.width = width || img.width;
			img.height = height || img.height;
			const ctx = canvas.getContext('2d');
			ctx.clearRect(0, 0, canvas.width, canvas.height); // canvas清屏
			// 重置canvans宽高
			canvas.width = img.width;
			canvas.height = img.height;
			ctx.drawImage(img, 0, 0, img.width, img.height); // 将图像绘制到canvas上
			onCompress(canvas.toDataURL('image/png')); // 必须等压缩完才读取canvas值，否则canvas内容是黑帆布
		};

		// 记住必须先绑定事件，才能设置src属性，否则img没内容可以画到canvas

		img.src = imgData;
	}

	static joinObject(array, object) {
		const newArray = [];
		array = array.filter((item) => !!item);
		array.forEach((item, i) => {
			if (item) {
				newArray.push(item);
				if (i !== array.length - 1) newArray.push(object);
			}
		});
		return newArray;
	}

	static downloadFile(data) {
		const title = data.title || data.fileName || data.name || '';
		if (
			title.indexOf('png') >= 0 ||
			title.indexOf('jpeg') >= 0 ||
			title.indexOf('jpg') >= 0 ||
			title.indexOf('gif') >= 0 ||
			title.indexOf('bmp') >= 0 ||
			title.indexOf('svg') >= 0 ||
			title.indexOf('psd') >= 0
		) {
			Tools.downloadPicture(data);
		} else {
			// 创建a标签
			const a = document.createElement('a');
			const e = document.createEvent('MouseEvents');
			// 创建鼠标事件对象初始化事件对象
			e.initEvent('click', false, false);
			// 设置下载地址
			a.href = data.filePath || data.path || data.url;
			// 给指定的元素，执行事件click事件
			a.dispatchEvent(e);
		}
	}

	static downloadPicture(data) {
		// 下载图片
		const image = new Image();
		// 解决跨域 Canvas 污染问题
		image.setAttribute('crossOrigin', 'anonymous');
		image.onload = () => {
			// 创建一个canvas标签
			const canvas = document.createElement('canvas');
			// 设置canvas的宽高
			canvas.width = image.width;
			canvas.height = image.height;
			// 获取canvas的2d界面
			const context = canvas.getContext('2d');
			// 把图片画在canvas上，并设置图片的宽高
			context.drawImage(image, 0, 0, image.width, image.height);
			// 把canvas的内容转化为base64格式
			const url = canvas.toDataURL('image/png');
			// 生成一个a元素
			const a = document.createElement('a');
			// 创建一个单击事件
			const event = new MouseEvent('click');
			// 将a的download属性设置为我们想要下载的图片名称，若name不存在则使用‘下载图片名称’作为默认名称
			a.download = (data.title || data.fileName || data.name || '').split('.')[0] || '图片下载';
			// 将生成的URL设置为a.href属性
			a.href = url;
			// 触发a的单击事件
			a.dispatchEvent(event);
		};
		// 获取img上的src值，赋值之后，完成之后会调用onload事件
		image.src = data.filePath || data.path || data.url;
	}

	/**
	 * 删除对象中空属性
	 * @param obj 对象
	 * @returns {*} 结果
	 */
	static deleteEmptyOption(obj) {
		if (!(obj instanceof Object)) {
			return obj;
		}
		Object.keys(obj).forEach((key) => {
			if (!obj[key]) {
				delete obj[key];
			}
		});
		return obj;
	}
}
