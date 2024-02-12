const mongoose = require("mongoose");

const ThankYouNotes = mongoose.Schema({
  // _id 		: mongoose.Schema.Types.ObjectId,
  // from 		: String,
  // to 			:  String,
  // referralAmount :  Number,
  // createdAt 	: Date,
  // createdBy 	: String

  _id: mongoose.Schema.Types.ObjectId,
  company_id: { type: mongoose.Schema.Types.ObjectId, ref: "companyInfo" },
  thankYouNote: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  firstName: String,
  lastName: String,
  createdAt: Date,
});

module.exports = mongoose.model("thankYouNotes", ThankYouNotes);
