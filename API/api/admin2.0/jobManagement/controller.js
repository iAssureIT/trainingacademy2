const mongoose = require("mongoose");
const Jobs = require('./model.js');
const empModel = require('./empModel.js');

exports.insertJob = (req, res, next) => {
	console.log("insertJob req.body => ", req.body);

	var addJob = new Jobs({
		_id: new mongoose.Types.ObjectId(),
		jobTitle: req.body.jobTitle,
		jobUrl:req.body.jobUrl,
		skills: req.body.skills,
		jobCategory: req.body.jobCategory,
		salary: req.body.salary,
		position: req.body.position,
		experience: req.body.experience,
		jobType: req.body.jobType,
		industry: req.body.industry,
		gender: req.body.gender,
		qualification: req.body.qualification,
		level: req.body.level,
		jobDescription:req.body.jobDescription,
		jobResponsibilities:req.body.jobResponsibilities,
		jobQualification:req.body.jobQualification,
		createdAt: new Date(),
	});

	addJob.save()
		.then(data => {
			console.log("insertJob response => ", data);

			res.status(200).json({
				message: "Job added successfully",
				success: true,
				feedback: data
			});
		})
		.catch(error => {
			console.log("Error while adding job  -> ", error);
			res.status(500).json({
				message: "Error while adding job",
				success: false,
				error: error
			});
		})
};

exports.getJobList = (req, res, next) => {
	Jobs.find({})
		.sort({ "createdAt": -1 })
		.then(jobList => {
			res.status(200).json({
				jobList: jobList,
				messages: "job list !!"
			})
		})
		.catch(error => {
			res.status(500).json({
				error: error,
				message: "Some error occured while fetching job List"
			})
		});
}
exports.searchByTitle = (req, res, next) => {
	Jobs.find({ blogTitle: req.params.searchTxt, approvalStatus: "Approved" })
		.exec()
		.then(data => {
			res.status(200).json(data);
		})
		.catch(err => {
			res.status(500).json({ error: err });
		});
};

exports.fetch_job_using_id = (req, res, next) => {
	Jobs.findOne({ "_id": req.params.job_id })
		.populate("createdBy")
		.then(job => {
			res.status(200).json(job);
		})
		.catch(err => {
			// console.log(err);
			res.status(500).json({
				error: err
			});
		});
};
exports.insertEmpDetails = (req, res, next) => {
	console.log("insertJob req.body => ", req.body);

	var EmpDetails = new empModel({
		_id: new mongoose.Types.ObjectId(),
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		website: req.body.website,
		position: req.body.position,
		experience: req.body.experience,
		salary: req.body.salary,
		startDate: req.body.startDate,
		phone: req.body.phone,
		comments: req.body.comments,
		prevCompName:req.body.prevCompName,
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

