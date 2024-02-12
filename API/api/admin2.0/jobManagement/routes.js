const express 	= require("express");
const router 	= express.Router();
const Controller = require('./controller.js');

router.post('/post',Controller.insertJob);
router.get('/get/list',Controller.getJobList);
router.get('/search/:searchTxt', Controller.searchByCategory);
router.get('/searchby/job-type/:searchTxt', Controller.searchByJobType);
router.get('/get/single-job/:job_id', Controller.fetch_job_using_id);
// router.get('/get/filter-by-category/')
router.get('/filter', Controller.filterJobs);
router.delete('/delete-job/:job_id', Controller.deleteJob);
router.patch('/patch/update/job',Controller.update_job);
router.get('/get/list/pagewise', Controller.getPaginationJobsList);

// router.post('/post/emp-details',Controller.insertEmpDetails);
// router.get('/get/list/emp-applications',Controller.getEmpApplicatonList);
module.exports = router;