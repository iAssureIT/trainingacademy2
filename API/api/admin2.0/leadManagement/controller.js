const mongoose = require("mongoose");
const empModel = require('./model.js');

exports.insertEmpDetails = (req, res, next) => {

	var EmpDetails = new empModel({
		_id: new mongoose.Types.ObjectId(),
		fullName: req.body.fullName,
		companyName: req.body.companyName,
		email: req.body.email,
		phone: req.body.phone,
		city: req.body.city,
		comments: req.body.comments,
		createdAt: new Date(),
	});

	EmpDetails.save()
		.then(data => {
			res.status(200).json({
				message: "Data added successfully",
				success: true,
				feedback: data
			});
		})
		.catch(error => {
			res.status(500).json({
				message: "Error while inserting data",
				success: false,
				error: error
			});
		})
};

