const express 	= require("express");
const router 	= express.Router();
const Controller = require('./controller.js');

router.post('/post',Controller.insertEmpDetails);
router.get('/get/list',Controller.getLeadGenratedList);

module.exports = router;