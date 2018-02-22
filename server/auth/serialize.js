const Promise = require('bluebird');

const logger = require('../../logs/server/config');

const util = require('util');

const fs = Promise.promisifyAll(require('fs'));

const path = require('path');

let user = {
	serialize: (user, done) => {
		logger.info(`writing user auth data to session for user ${user}`);
		done(null, user);
	},
	deserialize: (id, done) => {
		logger.info(`reading user auth data from session for user ${util.inspect(id)}`);
		return fs.readFileAsync(`${__dirname}/../data/user.json`, 'utf8')
		.then(result => {
			let user = JSON.parse(result);
			return Promise.resolve(done(null, user));
		})
		.catch((err) => {
			logger.error(err);
			return Promise.resolve(done(err, null));
		});
	},

}

module.exports = user;
