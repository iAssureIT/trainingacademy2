const express 	= require("express");
const router 	= express.Router();
const Controller = require('./controller.js');

router.post('/post',Controller.insertTestRide);

router.get('/get/list',Controller.getTestRideList);

module.exports = router;
