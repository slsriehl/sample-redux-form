//logger
const logger = require('../../logs/server/config');


const clearMessages = (req, res, next) => {

		//set the session status messages equal to temporary variables
		const err = req.session.error;
		const msg = req.session.notice;
		const success = req.session.success;
		const errType = req.session.errorType;

		//clear the session status messages
		delete req.session.error;
		delete req.session.success;
		delete req.session.notice;
		delete req.session.errorType;

		//if the temp variables have values, set res.locals equal to them
		if (err) res.locals.error = err;
		if (msg) res.locals.notice = msg;
		if (success) res.locals.success = success;
		if (errType) res.locals.errorType = errType;

		//call the next middleware or router function
		next();
}

module.exports = clearMessages;
