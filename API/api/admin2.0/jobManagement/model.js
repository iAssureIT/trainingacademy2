const mongoose = require("mongoose");

const jobs = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  jobTitle: String,
  jobUrl:String,
  skills: String,
  jobCategory: String,
  salary: String,
  position: Number,
  experience: String,
  jobType: String,
  industry: String,
  gender: String,
  qualification: String,
  jobResponsibilities:String,
  level :String,  
  jobDescription:String,
  location:String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  createdAt: Date,
  updatedAt: Date, 
});

module.exports = mongoose.model("jobs", jobs);
