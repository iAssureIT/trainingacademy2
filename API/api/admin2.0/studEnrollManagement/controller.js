const mongoose = require("mongoose");
const studModel = require('./model.js');

exports.insertStudentDetails = (req, res, next) => {

	var StudDetails = new studModel({
		_id: new mongoose.Types.ObjectId(),
		fullName: req.body.fullName,
		email: req.body.email,
		phone: req.body.phone,
		city: req.body.city,
		createdAt: new Date(),
	});

	StudDetails.save()
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

exports.getStudentDetails = (req, res, next) => {
	studModel.find({})
		.sort({ "createdAt": -1 })		
		.then(List => {
			// console.log("list",List)			
			res.status(200).json(List);
		})
		.catch(error => {
			res.status(500).json({
				error: error,
				message: "Some error occured while fetching  List"
			})
		});
}