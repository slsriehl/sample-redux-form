//promise library
const Promise = require('bluebird');
//logger
const logger = require('../../logs/server/config');

const setDomain = (req, res, next) => {
	req.session.domain = req.get('host');
	next();
}

module.exports = setDomain;
