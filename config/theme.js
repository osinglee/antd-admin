const fs = require('fs');

const theme = {};
const data = fs.readFileSync(`${process.cwd()}/src/styles/var.less`);

const source = data.toString().split(/\n/);
source.forEach(v => {
	if (v) {
		const target = v.split(':');
		theme[target[0].replace(/@/, '')] = target[1].replace(/;/, '').trim();
	}
});

module.exports = {
	...theme,
};
