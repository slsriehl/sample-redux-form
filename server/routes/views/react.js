const express = require('express');

const router = new express.Router;

const util = require('util');

const logger = require('../../../logs/server/config');

const isAuthenticated = require('../../middleware/ensure-authentication');

//router.use(isAuthenticated.yes);

//root
router.get('/', (req, res) => {
	res.render('react/index.html');
});

router.get('/form/:name', (req, res) => {
	res.render('react/index.html');
});



module.exports = router;
