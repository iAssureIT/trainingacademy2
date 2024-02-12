const express 	= require("express");
const router 	= express.Router();
const Controller = require('./empFormController.js');

router.post('/post/emp-details',Controller.insertEmpDetails);
router.get('/get/list/emp-applications',Controller.getEmpApplicatonList);
module.exports = router;