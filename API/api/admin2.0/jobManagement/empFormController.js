const mongoose = require("mongoose");
const Model = require('./empModel.js');
exports.insertEmpDetails = (req, res, next) => {
	console.log("insertJob req.body => ", req.body);

	var EmpDetails = new Model({
		_id: new mongoose.Types.ObjectId(),
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		phone: req.body.phone,
		email: req.body.email,		
		currentLocation: req.body.currentLocation,
		jobType: req.body.jobType,
		totalExperience: req.body.totalExperience,
		relevantExperience: req.body.relevantExperience,
		currentCTC: req.body.currentCTC,
		expectedCTC: req.body.expectedCTC,
		noticePeriod: req.body.noticePeriod,
		keySkills: req.body.keySkills,		
		resume:req.body.resume,
        jobTitle:req.body.jobTitle,
		createdAt: new Date(),
	});

	EmpDetails.save()
		.then(data => {
			console.log(" response => ", data);

			res.status(200).json({
				message: "Data added successfully",
				success: true,
				feedback: data
			});
		})
		.catch(error => {
			console.log("Error while inserting data  -> ", error);
			res.status(500).json({
				message: "Error while inserting data",
				success: false,
				error: error
			});
		})
};
  exports.getEmpApplicatonList = (req, res, next) => {
	Model.find({})
		.sort({ "createdAt": -1 })
		.then(data => {
			console.log("appList",data)
			res.status(200).json({
				data: data,
				messages: "Application list !!"
			})
		})
		.catch(error => {
			res.status(500).json({
				error: error,
				message: "Some error occured while fetching Applications"
			})
		});
}