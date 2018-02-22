
//logger
const logger = require('../../logs/server/config');

// let redirectToReq = require('./redirect-to-req');

const isAuthenticated = {
	yes: (req, res, next) => {
		logger.info(req.originalUrl);
		logger.info('hitting req auth yes');
		if (req.isAuthenticated()) {
			//if the cookie matches a stored session, call the function from the route
			logger.info('is authenticated');
			if(req.session.loggedOutReq) {
				logger.info('redirecting to the page you requested before logging in...');
				redirectToReq(req, res);
			} else {
				next();
			}
		} else {
			//if the cookie doesn't match a stored session, create an error message and redirect the user to the login page
			req.session.error = 'You must log in to access that page';
			req.session.errorType = `must-log-in`;
			if(req.originalUrl != '/logout') {
				req.session.loggedOutReq = req.originalUrl;
			}
			res.redirect('/login');
		}
	},
	no: (req, res, next) => {
		logger.info(req.originalUrl);
		logger.info('hitting req auth no');
		if (!req.isAuthenticated()) {
			//if the the user isn't signed in, call the function from the route
			next();
		} else {
			//if the user is signed in, create an error message and redirect the user to the login page
			req.session.error = `You must log out to access that page.`;
			req.session.errorType = `must-log-out`;
			res.redirect('/');
		}
	},
	internal: (req, res, next) => {
		console.log(req.headers.cookie);
		if(req.headers.cookie === `${process.env.INTERNAL_COOKIE_NAME}=${process.env.INTERNAL_COOKIE_VALUE}`) {
			next();
		} else {
			//redirect to error pdf sending
			res.redirect('/api/pdf/error');
		}
	}
}

module.exports = isAuthenticated;
