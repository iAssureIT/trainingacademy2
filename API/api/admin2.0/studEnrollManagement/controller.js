const mongoose = require("mongoose");
const studModel = require('./model.js');

exports.insertStudentDetails = (req, res, next) => {

	var StudDetails = new studModel({
		_id: new mongoose.Types.ObjectId(),
		fullName: req.body.fullName,
		email: req.body.email,
		phone: req.body.phone,
		city: req.body.city,
		status:req.body.status,
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


exports.fetch_stud_data_using_id = (req, res, next) => {
	studModel.findOne({ "_id": req.params.stud_id })
		.populate("createdBy")
		.then(data => {
			res.status(200).json(data);
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
};

exports.update_studData = (req, res, next) => {

	console.log("update_studData req.body => ",req.body);

	studModel.updateOne(
		{ _id: req.body.stud_id },
		{
			$set: {
				fullName: req.body.fullName,
				email: req.body.email,
				phone: req.body.phone,
				city: req.body.city,
				status:req.body.status,
			}
		},
	)
		.then(result => {
			console.log("update student -> ",result);			
			if (result.nModified === 1) {				
					res.status(200).json({
						message: "Student data updated successfully",
						success: true,
					});
				
			} else {
				res.status(404).json({ message: "No changes were made", success: false });
			}		

		})
		.catch(error => {
			console.log("update stud  error -> ", error);
			res.status(500).json({ message: "Error occured while updating Student Data" });
		})
};

exports.update_stud_status = (req, res) => {
	// console.log("req.body => ",req.body);
	studModel.updateOne(
		{ _id: req.params.stud_id },
		{
			$set: {				
				status:req.body.status,
			}
		},
	)
		.then(result => {
			console.log("update student status -> ",result);			
			if (result.nModified === 1) {				
					res.status(200).json({
						message: "Status updated successfully",
						success: true,
					});				
			} else {
				res.status(404).json({ message: "No changes were made", success: false });
			}
		})
		.catch(error => {
			res.status(500).json({ message: "Error occured while updating Student Status" });
		})
};

exports.getStatusWiseList = (req, res, next) => {
	console.log("req.params.status_value",req.params.status_value)
	studModel.find({"status":req.params.status_value})
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
