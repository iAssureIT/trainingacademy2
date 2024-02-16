const express 	= require("express");
const router 	= express.Router();
const Controller = require('./controller.js');

router.post('/post',Controller.insertStudentDetails);
router.get('/get/list',Controller.getStudentDetails);
module.exports = router;