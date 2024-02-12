const mongoose = require("mongoose");

const empApp = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  firstName: String,
  lastName: String,
  email: String,
  website: String,
  position: String,
  experience: String,
  salary: String,
  startDate: Date,
  phone: String,
  prevCompName:String,
  comments :String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  createdAt: Date,
  updatedAt: Date, 
});

module.exports = mongoose.model("empAppForm", empApp);
