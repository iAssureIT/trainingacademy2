const mongoose = require("mongoose");

const Testimonials = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  company_id: { type: mongoose.Schema.Types.ObjectId, ref: "companyInfo" },
  testimonial: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  firstName: String,
  lastName: String,
  createdAt: Date,
});

// const Testimonials = mongoose.Schema({
//   _id: mongoose.Schema.Types.ObjectId,
//   received_company_name: String,
//   received_company_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "companyInfo",
//   },
//   given_company_name: String,
//   given_company_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "companyInfo",
//   },
//   testimonial: String,
//   createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
//   createdAt: Date,
// });

module.exports = mongoose.model("Testimonials", Testimonials);
