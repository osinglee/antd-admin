const fs = require('fs');
const axios = require('axios');
const {resolveApp} = require('./paths')

const types = {
	'string': 'string',
	'integer': 'number',
	'int': 'number',
	'array': 'any[]',
	'object': 'any',
	'boolean': 'boolean',
	'file': 'any',
};

let _api = [];
let _info;

function pathPwd(paths='') {
	return resolveApp(`src/utils/api/lib${paths}`);
}

function taskStart(baseUrl) {
	const apiUrl = `${baseUrl}${baseUrl.endsWith('/') ? 'v2/api-docs' : '/v2/api-docs'}`;
	_api = [];
	_info = {};

	return new Promise((resolve, reject) => {
		try {
			if (!fs.existsSync(pathPwd())) {
				fs.mkdirSync(pathPwd());
			}
			axios.get(apiUrl).then((res) => {
				_info = res.data.info;
				genEntity(res.data.definitions);
				genDto(res.data.paths);
				genApi();
				resolve();
			});
		} catch (e) {
			console.log(e);
			reject(e);
		}
	});
}

function genEntity(definitions) {
	const def = [];
	Object.keys(definitions).forEach((v) => {
		def.push({
			name: definitions[v].title.replace(/[«»]/g, ''),
			value: definitions[v].properties,
		});
	});
	let list = '';
	def.forEach((k) => {
		let attr = '';
		let flag = false;
		k.value && Object.keys(k.value).forEach(s => {
			if (k.value[s].type === 'object') {
				flag = true;
				attr += `  ${s}?: T;\n`;
			} else if (k.value[s].type === 'array') {
				if (k.value[s].items.type) {
					attr += `  ${s}?: ${types[k.value[s].type] || k.value[s].type};\n`;
				} else {
					const ref = (k.value[s].items.$ref).split('/');
					attr += `  ${s}?: ${ref[ref.length - 1]}[];\n`;
				}
			} else if (k.value[s].type) {
				attr += `  ${s}?: ${types[k.value[s].type] || k.value[s].type};\n`;
			} else {
				const ref = (k.value[s].$ref).split('/');
				attr += `  ${s}?: ${ref[ref.length - 1]};\n`;
			}
		});
		list += `export interface ${k.name} ${flag ? '<T = any>' : ''}{
${attr}}\n\n`;
	});
	fs.writeFileSync(pathPwd('/entity.ts'), list);
}

/**
 * 生成调用方法参数dto
 * dts.d.ts
 */
function genDto(paths) {
	const def = [];
	Object.keys(paths).forEach((v) => {
		Object.keys(paths[v]).forEach((s) => {
			const rs = paths[v][s].responses['200'].schema && paths[v][s].responses['200'].schema['$ref'];
			if (!!rs) {
				def.push({
					methods: s,
					path: v,
					parameters: paths[v][s].parameters,
					operationId: paths[v][s].operationId
						.replace(/([a-z])/, (_a, b) => b.toLocaleUpperCase())
						.replace(/_/, ''),
					responses200: rs,
					summary: paths[v][s].summary,
					description: paths[v][s].description,
				});
			}
		});
	});

	let list = '';
	_api = def;
	def.forEach((k) => {
		let attr = '';
		(k.parameters || []).forEach((s) => {
			attr += `  ${s.name}?: ${types[s.type] || s.type};\n`;
		});
		if (['get', 'header'].indexOf(k.methods) >= 0) {
			list += `export interface ${k.operationId
			} {
${attr}}\n\n`;
		}
	});
	fs.writeFileSync(pathPwd('/dto.ts'), list);
}

function genApi() {
	let list = '';
	let entity = [];
	let dto = [];

	_api.forEach((k) => {
		let params;
		let postParam;
		if (['get', 'header'].indexOf(k.methods) >= 0) {
			params = 'query';
			postParam = k.operationId;
			dto.push(postParam);
		} else {
			params = 'body';
			if (k.parameters && k.parameters[0].schema) {
				const p = (k.parameters[0].schema['$ref'] || '').split('/');
				postParam = p[p.length - 1];
				entity.push(postParam);
			} else {
				let queryParam = [];
				if (k.parameters) {
					k.parameters.forEach((v) => {
						if (v.name !== 'token') {
							queryParam.push(`${v.name}?: ${types[v.type]}`);
						}
					});
				}
				postParam = `{${queryParam.join(', ')}}`;
			}
		}
		postParam = postParam || 'any';
		const ref = (k.responses200).split('/');
		let rt = `<${ref[ref.length - 1].replace(/«/g, '<').replace(/»/g, '>')}>`;
		if (/<List/.test(rt)) {
			rt.replace(/List<(\w+)>/, (a, b) => {
				entity.push(b);
				return b + '[]';
			});
		} else {
			const rtSp = rt.split('<');
			rtSp.filter(v => !!v).forEach(v => {
				entity.push(v.replace(/>/g, ''));
			});
		}
		rt = `<any>`;
		list += `  /**
   * ${k.summary}
   * ${k.description}
   */
  static ${k.path
			.replace(/\/([a-z])/g, (_a, b) => b.toLocaleUpperCase())
			.replace(/\/({\w+})/g, '')
			.replace(/_([a-z])/g, (_a, b) => b.toLocaleUpperCase())
			.replace(/\//g, '')
		}(${params}: ${postParam}): Promise${rt}{
    return services.connection('${k.methods}', '${k.path}', ${params})\n  }\n\n`;
	});

	let obj = {};
	entity.forEach((v) => {
		if (['any', 'object'].indexOf(v) < 0) obj[v] = 1;
	});
	entity = Object.keys(obj).filter(v => !!v);

	const className = `// @ts-ignore
import services from '../request'
import {${entity.join(',\n    ')} \n} from "./entity"\n
import {${dto.join(',\n    ')} \n} from "./dto"
\n
/**
 * ${_info.title}
 * ${_info.description}
 * ${new Date()}
 */
export default class RequireApi {\n${list}}\n`;
	fs.writeFileSync(pathPwd('/index.ts'), className);
}

module.exports = taskStart;
