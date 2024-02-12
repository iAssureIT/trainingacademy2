const express 	= require("express");
const router 	= express.Router();

const seoDetails = require('./controller.js');

router.post('/post', seoDetails.insertSEODetails);

router.post('/get/list', seoDetails.fetchSEODetails);

router.get('/get/list', seoDetails.getSEODetails);

router.get('/get/count', seoDetails.countSEODetails);

router.get('/get/one/:fieldID', seoDetails.fetchSingleSEODetails);

router.get('/get/url/:url', seoDetails.fetchSEODetailsByURL);

router.patch('/patch/:fieldID', seoDetails.updateSEODetails);

router.delete('/delete/:fieldID', seoDetails.deleteSEODetails);

module.exports = router;