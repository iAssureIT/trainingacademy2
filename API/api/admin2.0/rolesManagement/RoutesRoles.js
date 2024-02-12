const express 	= require("express");
const router 	= express.Router();
const checkAuth     = require('../middlerware/check-auth.js');
const RoleController = require('./ControllerRoles.js');

router.post('/post', RoleController.create_role);
router.get('/get/list', RoleController.list_role);
router.post('/post/list', RoleController.list_role_with_limits);
router.get('/getdata/:currentpage/:pagesize', RoleController.list_role_with_pagesize);
router.get('/get/one/:ID', RoleController.detail_role);
router.patch('/patch',RoleController.update_role);
router.delete('/delete/all',RoleController.delete_all_role);
router.delete('/delete/:ID',RoleController.delete_role);

module.exports = router;
