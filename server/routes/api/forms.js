const express = require('express');

const router = new express.Router;


const util = require('util');


const controller = require('../../controllers/get-form')

//
router.get('/:form', (req, res) => {
	return controller(req, res);
});



module.exports = router;
