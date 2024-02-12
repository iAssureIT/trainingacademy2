const express 	= require("express");
const router 	= express.Router();
const Controller = require('./controller.js');

router.post('/post',Controller.insertJob);
router.get('/get/list',Controller.getJobList);
router.get('/search/:searchTxt', Controller.searchByTitle);
router.get('/get/single-job/:job_id', Controller.fetch_job_using_id);
router.post('/post/emp-details',Controller.insertEmpDetails);

module.exports = router;