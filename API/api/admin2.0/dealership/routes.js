const express 	= require("express");
const router 	= express.Router();
const Controller = require('./controller.js');

router.post('/post',Controller.insertDealership);

router.get('/get/list',Controller.getDealershipList);

module.exports = router;
