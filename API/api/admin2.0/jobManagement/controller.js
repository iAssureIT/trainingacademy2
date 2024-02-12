const mongoose = require("mongoose");
const Jobs = require('./model.js');

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
		location:req.body.location,
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
exports.searchByCategory = (req, res, next) => {
	Jobs.find({ jobCategory: req.params.searchTxt })
		.exec()
		.then(data => {
			res.status(200).json(data);
		})
		.catch(err => {
			res.status(500).json({ error: err });
		});
};

exports.searchByJobType = (req, res, next) => {
	Jobs.find({ jobType: req.params.searchTxt })
		.exec()
		.then(data => {
			res.status(200).json(data);
		})
		.catch(err => {
			res.status(500).json({ error: err });
		});
};

exports.filterJobs = (req, res, next) => {
    let query = {};

    // Check if category filter is provided
	console.log("req.query",req.query)
    if (req.query.category) {
        const categories = req.query.category.split(',');
		console.log("categories",categories)
        query.jobCategory = { $in: categories };
    }

    // Check if jobType filter is provided
    if (req.query.jobType) {
        const jobTypes = req.query.jobType.split(',');
        query.jobType = { $in: jobTypes };
    }

    Jobs.find(query)
        .sort({ "createdAt": -1 })
        .then(jobList => {
			console.log("filtered jobList",jobList)
            res.status(200).json({
                jobList: jobList,
                message: "Filtered job list fetched successfully"
            });
        })
        .catch(error => {
            res.status(500).json({
                error: error,
                message: "An error occurred while fetching filtered job list"
            });
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
exports.deleteJob = (req, res, next)=>{
    Jobs.deleteOne({_id: req.params.job_id})
        .exec()
        .then(data=>{
            if(data.deletedCount === 1){
                res.status(200).json({ deleted : true });
            }else{
                res.status(200).json({ deleted : false });
            }
        })
        .catch(err =>{
            res.status(500).json({ error: err });
        });           
};

exports.update_job = (req, res, next) => {

	console.log("update_job req.body => ",req.body);

	Jobs.updateOne(
		{ _id: req.body.job_id },
		{
			$set: {
				// user_id: req.body.user_id,
				// _id: req.body.job_id,
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
				jobDescription:req.body.jobDescription,
				jobResponsibilities:req.body.jobResponsibilities,
				location:req.body.location,
				updatedAt: new Date(),
			}
		},
	)
		.then(result => {
			console.log("update job -> ",result);			
			if (result.nModified === 1) {				
					res.status(200).json({
						message: "Job updated successfully",
						success: true,
					});
				
			} else {
				res.status(404).json({ message: "Job not found or no changes were made", success: false });
			}		

		})
		.catch(error => {
			console.log("update job error -> ", error);
			res.status(500).json({ message: "Error occured while updating job" });
		})
};

exports.getPaginationJobsList = async (req, res) => {
	const itemsPerPage = 4;
	try {
	  // Parse the page number from the request query or default to page 1
	  const page = parseInt(req.query.page) || 1;
  
	  // Calculate the skip count based on the page number and items per page
	  const skip = (page - 1) * itemsPerPage;
  
	  // Query the database for a subset of jobs based on pagination
	  const jobs = await Job.find().skip(skip).limit(itemsPerPage);
  
	  res.json({ jobList: jobs });
	} catch (error) {
	  console.error('Error fetching job listings:', error);
	  res.status(500).json({ error: 'Internal server error' });
	}
  };


 
// exports.getEntBasicProfile = (req,res,next)=>{
	
// 	console.log("req.params.enterprise_id -> ",req.params.enterprise_id);

// 	if(req.params.enterprise_id && req.params.enterprise_id !== 'undefined'){
// 		var enterprise_id = req.params.enterprise_id;

// 		Enterprise.findOne({_id : enterprise_id})
// 					.then(data=>{
// 						// console.log("data -> ",data);
// 						res.status(200).json({enterprise: data});
// 					})
// 					.catch(error =>{
// 						console.log("Error -> ",error);
// 						res.status(500).json({
// 							message: "Error while finding Enterprise",
// 							error : error
// 						});
// 					})		
// 	}else{
// 		res.status(200).json({enterprise: {}});
// 	}
// }