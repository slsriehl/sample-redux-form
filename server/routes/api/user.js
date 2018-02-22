const express = require('express');

const router = new express.Router;

const controller = require('../../controllers/user')
//
router.get('/', (req, res) => {
	return controller(req, res);
});



module.exports = router;
