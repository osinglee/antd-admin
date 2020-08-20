const { series, src, dest } = require('gulp');
const taskStart = require('./config/task');
const ts = require('gulp-typescript');
const del = require('del');

// 后台地址 启用swagger
const swaggerUrl = 'https://admin.xl.singularitychina.com/server';

function clean(cb) {
	del.sync(['src/utils/api/lib'], { force: true });
	cb();
}

async function fetch(cb) {
	await taskStart(swaggerUrl);
	cb();
}

async function build(cb) {
	console.log(22);
	src(['src/utils/api/lib/entity.ts', 'src/utils/api/lib/dto.ts', 'src/utils/api/lib/index.ts'], {
		allowEmpty: true,
	})
		.pipe(
			ts({
				declaration: true,
				target: 'es5',
				rootDir: __dirname,
				types: ['node'],
				lib: ['es2017', 'dom'],
				noResolve: false,
			})
		)
		.pipe(
			dest((file) => {
				return 'src/utils/api/js';
			})
		);
}

exports.build = build;
exports.fetch = fetch;
exports.clean = clean;
exports.default = series(fetch, build);
