
let counter = 0;

const logout = (req, res) => {
	return req.session.destroy(err => {
		if(!err) {
			counter = 0;
			req.logout();
			logger.info('logged out');
			res.redirect('/login');

		} else if (counter < 3) {
			logger.error(err);;
			counter++;
			return logout(req, res);

		} else {
			counter = 0;
			req.session.error = `Error logging you out.  Please contact support.`;
			res.render('pages/error.hbs', {
				message: {
					text: req.session.error,
					type: 'error'
				}
			});
		}
	});
}

module.exports = logout;
