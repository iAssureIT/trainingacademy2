const express = require("express");
const router = express.Router();

const Controller = require("./controller.js");

router.post("/post", Controller.insertTestimonial);

router.delete("/delete/:_id", Controller.deleteTestimonial);

router.get("/get/one/:testimonial_id", Controller.getOneTestimonial);

router.get("/get/list", Controller.getListofTestimonial);

router.get(
  "/get/my-given-testimonials-list/:createdBy",
  Controller.getListofTestimonialByCreatedUser
);

router.get(
  "/get/my-received-testimonials-list/:createdBy",
  Controller.getListofTestimonialToCompany
);

router.patch("/patch/:testimonial_id", Controller.updateTestimonial);

router.post("/post/list", Controller.post_list_testimonials);

module.exports = router;

console.log("routes");
