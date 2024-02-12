const express 	= require("express");
const router 	= express.Router();
const Controller = require('./controller.js');

router.post('/post',Controller.insertBikeBooking);

router.get('/get/list',Controller.getBikeBookingList);

module.exports = router;
