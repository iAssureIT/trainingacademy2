const mongoose = require("mongoose");
const empModel = require('./model.js');

exports.insertStudentDetails = (req, res, next) => {

	var EmpDetails = new empModel({
		_id: new mongoose.Types.ObjectId(),
		fullName: req.body.fullName,
		email: req.body.email,
		phone: req.body.phone,
		city: req.body.city,
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

