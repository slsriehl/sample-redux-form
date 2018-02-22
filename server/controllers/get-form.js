const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

const path = require('path');

const getForm = (req, res) => {
	return fs.readFileAsync(`${__dirname}/../data/${req.params.form}.json`, 'utf8')
	.then(result => {
		res.json(JSON.parse(result));
		return Promise.resolve(true);
	})
	.catch(err => {
		throw err;
		return Promise.reject(err);
	})
}

module.exports = getForm;
