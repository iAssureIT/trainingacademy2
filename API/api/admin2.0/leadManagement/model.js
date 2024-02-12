const mongoose = require("mongoose");

const empContactForm = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  fullName: String,
  email: String,  
  phone: Number,
  city :String,
  companyName:String,
  comments:String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  createdAt: Date,
  updatedAt: Date, 
});

module.exports = mongoose.model("empContactForm", empContactForm);
