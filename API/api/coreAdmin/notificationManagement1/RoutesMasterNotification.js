const express 	= require("express");
const router 	= express.Router();
const checkAuth     = require('../middlerware/check-auth.js');
const MasternotificationController = require('./ControllerMasterNotifications.js');

router.post('/post', MasternotificationController.create_masternotification);
router.post('/post/sendNotification', MasternotificationController.send_notifications);
router.get('/get/list', MasternotificationController.list_masternotification);
router.post('/get/listByMode', MasternotificationController.list_mode_masternotification);
router.get('/get/:notificationmaster_ID', MasternotificationController.detail_masternotification);
router.put('/put/:ID', MasternotificationController.update_masternotification);
router.patch('/patch/status', MasternotificationController.update_status);
router.delete('/delete/all',MasternotificationController.deleteall_masternotification);
router.delete('/delete/:ID',MasternotificationController.delete_masternotification);
router.post('/get/filterTemplate',MasternotificationController.filterTemplate);


module.exports = router;