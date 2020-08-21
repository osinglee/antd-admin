const fs = require('fs');
const {resolveApp}  = require('./paths')

const theme = {};
const data = fs.readFileSync(resolveApp('src/styles/var.scss'));

const source = data.toString().split(/\n/);
source.forEach(v => {
	if (v) {
		const target = v.split(':');
		theme[target[0].replace(/\$/, '')] = target[1].replace(/;/, '').trim();
	}
});

module.exports = {
	...theme,
};
