const express 	= require("express");
const router 	= express.Router();
const Controller = require('./controller.js');

router.post('/post',Controller.insertEmpDetails);

module.exports = router;