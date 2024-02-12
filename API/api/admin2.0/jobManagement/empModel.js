const mongoose = require("mongoose");

const empApp = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  currentLocation: String,
  jobType: String,
  totalExperience: String,
  relevantExperience: String,
  currentCTC: String,
  expectedCTC: String,
  noticePeriod: String,
  keySkills: String,
  resume: String,  
  jobTitle:String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  createdAt: Date,
  updatedAt: Date,
});

module.exports = mongoose.model("empAppForm", empApp);
