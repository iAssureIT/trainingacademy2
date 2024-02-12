const express = require("express");
const router = express.Router();

const Controller = require("./controller.js");

router.post("/post", Controller.insertThankYouNote);

router.delete("/delete/:_id", Controller.deleteTYN);

router.get("/get/one/:tyn_id", Controller.getOneTYN);

router.get("/get/list", Controller.getListofTYN);

router.get(
  "/get/my-given-TYN-list/:createdBy",
  Controller.getListofTYNByCreatedUser
);

router.get(
  "/get/my-received-TYN-list/:createdBy",
  Controller.getListofTYNToCompany
);

router.patch("/patch/:tyn_id", Controller.updateTYN);

router.post("/post/list", Controller.post_list_TYN);

module.exports = router;
