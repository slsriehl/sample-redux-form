const express = require('express');

const router = new express.Router;

const util = require('util');

const logger = require('../../../logs/server/config');

const isAuthenticated = require('../../middleware/ensure-authentication');

const controller = {
	logout: require('../../controllers/logout')
}

router.use(isAuthenticated.no);

router.get('/login', (req, res) => {
	res.render('pages/login.hbs');
});

router.get('/logout', (req, res) => {
	controller.logout(req, res);
});


module.exports = router;
