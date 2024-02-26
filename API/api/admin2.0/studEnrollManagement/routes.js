const express = require("express");
const router = express.Router();
const Controller = require('./controller.js');

router.post('/post', Controller.insertStudentDetails);
router.get('/get/list', Controller.getStudentDetails);
router.get('/get/single-stud/:stud_id', Controller.fetch_stud_data_using_id);
// router.delete('/delete-job/:stud_id', Controller.addDeleteStatus);
router.patch('/update/stud-data', Controller.update_studData);
router.patch('/update/status/:stud_id', Controller.update_stud_status);
router.get('/get/list/status-wise/:status_value',Controller.getStatusWiseList)
router.delete('/delete-student/:stud_id', Controller.deleteSingleStudent);
module.exports = router;