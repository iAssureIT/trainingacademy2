const mongoose = require("mongoose");
var ObjectId = require('mongodb').ObjectID;
const moment = require("moment");
const _ = require("underscore");
const Model = require('./model.js');
const User = require('../userManagementnew/ModelUsers.js');
const globalVariable = require("../../../nodemonConfig.js");
const MasterNotifications = require('../notificationManagement/ModelMasterNotification.js');
const { sendNotification } = require("../common/globalFunctions");
const multer = require("multer");


const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/images"); // Specify the destination folder for logos
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + "-" + file.originalname); // Rename the uploaded logo
	},
});
console.log("storage", storage)
const upload = multer({ storage: storage });

exports.insertCaseStudy = (req, res, next) => {
	console.log(" req body 25============>:", req.body);
	upload.fields([
        // { name: "bannerImage", maxCount: 1 },
        // { name: "rightImg1", maxCount: 1 },
		// { name: "bannerImg2", maxCount: 1 },
		// { name: "leftImg1", maxCount: 1 },
		// { name: "bannerImg3", maxCount: 1 },
		// { name: "leftImg2", maxCount: 1 },
		// { name: "rightImg2", maxCount: 1 },
		// { name: "leftImg4", maxCount: 1 },
		// { name: "bannerImg4", maxCount: 1 },

	{ name:"bannerImage", maxCount: 1 },
	{ name:"smallBannerImage", maxCount: 1 },
	{ name:"bannerImageRILC1", maxCount: 1 },
	{ name:"smallBannerImageRILC1", maxCount: 1 },
	{ name:"rightImg1", maxCount: 1 },
	{ name:"bannerImg2", maxCount: 1 },
	{ name:"smallBannerImg2", maxCount: 1 },
	{ name:"bannerImageLIRC1", maxCount: 1 },
	{ name:"smallBannerImageLIRC1", maxCount: 1 },
	{ name:"leftImg1", maxCount: 1 },
	{ name:"bannerImg3", maxCount: 1 },
	{ name:"smallBannerImg3", maxCount: 1 },
	{ name:"bannerImageLIRC2", maxCount: 1 },
	{ name:"smallBannerImageLIRC2", maxCount: 1 },
	{ name:"leftImg2", maxCount: 1 },
	{ name:"bannerImageRILC2", maxCount: 1 },
	{ name:"smallBannerImageRILC2", maxCount: 1 },
	{ name:"rightImg2", maxCount: 1 },
	{ name:"bannerImageLIRC3", maxCount: 1 },
	{ name:"smallBannerImageLIRC3", maxCount: 1 },
	{ name:"leftImg4", maxCount: 1 },
	{ name:"bannerImg4", maxCount: 1 },
	{ name:"smallBannerImg4", maxCount: 1 },
		
    ])(req, res, function (err) {
        console.log("err", err);

        if (err instanceof multer.MulterError) {
            console.log("MulterError code:", err.code);
            console.log("MulterError message:", err.message);
            console.log("MulterError field:", err.field);
            return res.status(400).json({ success: false, message: "File upload error" });
        } else if (err) {
            console.log(err, "err");
            return res.status(500).json({ success: false, message: "Internal server error" });
        }

        console.log("req.body40=====>", req.body);

        // const bannerImageFilePath = req.files["bannerImage"][0].path;
        // const rightImg1FilePath = req.files["rightImg1"][0].path;
		// const bannerImg2FilePath = req.files["bannerImg2"][0].path;
		// const leftImg1FilePath = req.files["leftImg1"][0].path;
		// const bannerImg3FilePath = req.files["bannerImg3"][0].path;
		// const leftImg2FilePath = req.files["leftImg2"][0].path;
		// const rightImg2FilePath = req.files["rightImg2"][0].path;
		// const leftImg4FilePath = req.files["leftImg4"][0].path;
		// const bannerImg4FilePath = req.files["bannerImg4"][0].path;
		
		
		const bannerImageFilePath = req.files["bannerImage"][0].path;
		const smallBannerImageFilePath = req.files["smallBannerImage"][0].path;
		const bannerImageRILC1FilePath = req.files["bannerImageRILC1"][0].path;
		const smallBannerImageRILC1FilePath = req.files["smallBannerImageRILC1"][0].path;
		const rightImg1FilePath = req.files["rightImg1"][0].path;
		const bannerImg2FilePath = req.files["bannerImg2"][0].path;
		const smallBannerImg2FilePath = req.files["smallBannerImg2"][0].path;
		const bannerImageLIRC1FilePath = req.files["bannerImageLIRC1"][0].path;
		const smallBannerImageLIRC1FilePath = req.files["smallBannerImageLIRC1"][0].path;
		const leftImg1FilePath = req.files["leftImg1"][0].path;
		const bannerImg3FilePath = req.files["bannerImg3"][0].path;
		const smallBannerImg3FilePath = req.files["smallBannerImg3"][0].path;
		const bannerImageLIRC2FilePath = req.files["bannerImageLIRC2"][0].path;
		const smallBannerImageLIRC2FilePath = req.files["smallBannerImageLIRC2"][0].path;
		const leftImg2FilePath = req.files["leftImg2"][0].path;
		const bannerImageRILC2FilePath = req.files["bannerImageRILC2"][0].path;
		const smallBannerImageRILC2FilePath = req.files["smallBannerImageRILC2"][0].path;
		const rightImg2FilePath = req.files["rightImg2"][0].path;
		const bannerImageLIRC3FilePath = req.files["bannerImageLIRC3"][0].path;
		const smallBannerImageLIRC3FilePath = req.files["smallBannerImageLIRC3"][0].path;
		const leftImg4FilePath = req.files["leftImg4"][0].path;
		const bannerImg4FilePath = req.files["bannerImg4"][0].path;
		const smallBannerImg4FilePath = req.files["smallBannerImg4"][0].path;

        console.log("bannerImageFilePath", bannerImageFilePath);
        console.log("rightImg1FilePath", rightImg1FilePath);

        // Continue processing for other fields and values
        console.log("req.body.image", req.body.image);
        console.log("insert req.body => ", req.body);
        var numOfWords = 0;
        var readingInMin = 0;

        if (req.body.projectDescription) {
            numOfWords = req.body.projectDescription.split(" ").length;
            readingInMin = Math.round(parseInt(numOfWords) / 200) + 1;
        }

		User.findOne({ _id: ObjectId(req.body.user_id.trim()) })
			.then(user => {
				var caseStudy = new Model({
					_id: new mongoose.Types.ObjectId(),
					user_id: req.body.user_id,
					projectName: req.body.projectName,
					service: req.body.service,
					pageURL: req.body.pageURL,
					projectDescription: req.body.projectDescription,
					leftContent1: req.body.leftContent1,
					rightContent1:req.body.rightContent1 ,
					rightContent2:req.body.rightContent2 ,
					leftContent2:req.body.leftContent2,
					rightContent3:req.body.rightContent3 ,	
					bannerImage : bannerImageFilePath,
					smallBannerImage : smallBannerImageFilePath,
					bannerImageRILC1 : bannerImageRILC1FilePath,
					smallBannerImageRILC1 : smallBannerImageRILC1FilePath,
					rightImg1 : rightImg1FilePath,
					bannerImg2 : bannerImg2FilePath,
					smallBannerImg2 : smallBannerImg2FilePath,
					bannerImageLIRC1 : bannerImageLIRC1FilePath,
					smallBannerImageLIRC1 : smallBannerImageLIRC1FilePath,
					leftImg1 : leftImg1FilePath,
					bannerImg3 : bannerImg3FilePath,
					smallBannerImg3 : smallBannerImg3FilePath,
					bannerImageLIRC2 : bannerImageLIRC2FilePath,
					smallBannerImageLIRC2 : smallBannerImageLIRC2FilePath,
					leftImg2 : leftImg2FilePath,
					bannerImageRILC2 : bannerImageRILC2FilePath,
					smallBannerImageRILC2 : smallBannerImageRILC2FilePath,
					rightImg2 : rightImg2FilePath,
					bannerImageLIRC3 : bannerImageLIRC3FilePath,
					smallBannerImageLIRC3 : smallBannerImageLIRC3FilePath,
					leftImg4 : leftImg4FilePath,
					bannerImg4 : bannerImg4FilePath,
					smallBannerImg4 : smallBannerImg4FilePath,
					numOfWords: numOfWords,
					readingInMin: readingInMin,
					createdBy: req.body.user_id,
					authorName: user.profile.firstname + " " + user.profile.lastname,
					createdAt: new Date(),
				});
				console.log("caseStudy",caseStudy)
				caseStudy.save()
					.then(insertedCaseStudy => {
						console.log("insertedCaseStudy => ", insertedCaseStudy);
						res.status(200).json({
							success: true,
							message: "Case Study inserted successfully",
							feedback: insertedCaseStudy
						});
					})
					.catch(error => {
						console.log("Error while inserting Case Study -> ",error);
						res.status(500).json({
							message: "Error while inserting Case Study",
							success: false,
							error: error
						});
					})
			})
			.catch(error => {
				console.log("Error while inserting Case Study -> ",error);
				res.status(500).json({
					message: "Error while finding Case Study author name",
					success: false,
					error: error
				});
			})
	});
};

function getUserProfile(user_id) {

	return new Promise((resolve, reject) => {
		User.findOne({ _id: ObjectId(user_id) }, { services: 0 })
			.populate("profile.company_id")
			.then(user => {
				// console.log(user_id, " | getUserProfile user => ",user);

				if (user) {
					resolve(user);
				} else {
					resolve(0);
				}
			})
			.catch(error => {
				// console.log("Error while finding User profile -> ",error);
				reject(0);
			})
	});
}


exports.getAppointmentSlots = (req, res, next) => {
	// console.log("req.body -> ",req.body);

	AppointmentSlots.findOne({ user_id: ObjectId(req.body.user_id) })
		.then(data => {
			// console.log("data -> ",data);
			if (data) {
				res.status(200).json(data);
			} else {
				res.status(200).json("Data Not Found");
			}
		})
		.catch(error => {
			// console.log("Error -> ",error);
			res.status(500).json({
				message: "Error while finding AppointmentSlots",
				error: error
			});
		})
}

exports.fetch_blog_url = (req, res, next) => {
	console.log("fetch_blog_url req.params.blogURL =>1144444 ", req.params.blogURL);

	// Model.findOne({"blogURL" : req.params.blogURL, approvalStatus : "Approved"})
	Model.findOne({ "blogURL": req.params.blogURL })
		.populate("createdBy")
		.exec()
		.then(blog => {
			// console.log("fetch_blog_url => ",blog);

			if (blog) {
				Model.updateOne(
					{ "blogURL": req.params.blogURL },
					{
						$inc: { noOfVisited: 1 }
					}
				)
					.exec()
					.then(data => {
						// console.log("fetch_blog_url data",data)
						res.status(200).json(blog);
					})
					.catch(err => {
						// console.log(err);
						res.status(500).json({
							error: err
						});
					});
			} else {
				res.status(200).json({ message: "DATA_NOT_FOUND" })
			}
		})
		.catch(err => {
			// console.log(err);
			res.status(500).json({
				error: err
			});
		});
};

exports.fetch_page_using_id = (req, res, next) => {
	// console.log("fetch_blog_url req.params.blogURL => ",req.params.blogURL);    
	Model.findOne({ "_id": req.params.page_id })
		.populate("createdBy")
		.then(pageData => {
			res.status(200).json(pageData);
		})
		.catch(err => {
			// console.log(err);
			res.status(500).json({
				error: err
			});
		});
};


exports.getBlogList = (req, res, next) => {
	var numOfBlogs = parseInt(req.params.numOfBlogs);
	// console.log("numOfBlogs",numOfBlogs);

	Model.find({ approvalStatus: "Approved" })
		.populate("createdBy")
		.sort({ "createdAt": -1 })
		.limit(numOfBlogs)
		.then((blogList) => {
			// console.log("blogList",blogList);
			var blogListArr = [];

			if (blogList.length > 0) {
				//console.log("blogList[i] 100",blogList[0]);
				for (var i = 0; i < blogList.length; i++) {
					var x = {
						_id: blogList[i]._id,
						blogTitle: blogList[i].blogTitle,
						blogURL: blogList[i].blogURL,
						blogCategory: blogList[i].blogCategory,
						blogHeaderImage: blogList[i].blogHeaderImage,
						blogSummary: blogList[i].blogSummary,
						blogContent: blogList[i].blogContent,
						createdBy: blogList[i].createdBy,
						createdAt: blogList[i].createdAt,
						userFullName: blogList[i].createdBy ? blogList[i].createdBy.profile.fullName : "-",
						// userPic 			: blogList[i].createdBy ? blogList[i].createdBy.documents && blogList[i].createdBy.documents.profilePhoto ? blogList[i].createdBy.documents.profilePhoto[0].url : "-" : "-",
					}
					blogListArr.push(x);
				}

				if (i >= blogList.length) {
					// console.log("blogListArr = ",blogListArr);

					res.status(200).json({
						success: true,
						data: blogListArr,
						message: "Data Found successfully"
					});
				}
			} else {
				res.status(200).json({
					success: false,
					data: [],
					message: "Data Not Found"
				});
			}

		})
		.catch(error => {
			console.log("Issue occured while getting blog list : error => ", error);
			res.status(500).json({
				error: error,
				success: false,
				message: "Issue occured while getting blog list"
			})
		});
}

exports.getBlogListByUserId = (req, res, next) => {
	Model.find({ user_id: req.params.user_id })
		.populate("createdBy")
		.sort({ "createdAt": -1 })
		.then((blogList) => {
			var blogListArr = [];
			if (blogList.length > 0) {
				for (var i = 0; i < blogList.length; i++) {
					var x = {
						_id: blogList[i]?._id,
						blogTitle: blogList[i]?.blogTitle,
						blogURL: blogList[i]?.blogURL,
						blogCategory: blogList[i]?.blogCategory,
						blogHeaderImage: blogList[i]?.blogHeaderImage,
						blogSummary: blogList[i]?.blogSummary,
						blogContent: blogList[i]?.blogContent,
						createdBy: blogList[i]?.createdBy,
						createdAt: blogList[i]?.createdAt,
						userFullName: blogList[i]?.createdBy.profile.fullName,
						userPic: blogList[i]?.createdBy?.documents && blogList[i]?.createdBy?.documents?.profilePhoto ? blogList[i]?.createdBy?.documents?.profilePhoto[0]?.url : "-",
						usersLiked: blogList[i]?.usersLiked ? blogList[i]?.usersLiked : "-"
					}
					blogListArr.push(x);
				}
				if (i >= blogList.length) {
					res.status(200).json({
						success: true,
						data: blogListArr,
						message: "Data Found successfully"
					});
				}
			} else {
				res.status(200).json({
					success: false,
					data: [],
					message: "Data Not Found"
				});
			}
		})
		.catch(error => {
			res.status(500).json({
				error: error,
				success: false,
				message: "Issue occured while getting blog list"
			})
		});
}

exports.getSavedItemsList = (req, res, next) => {
	Model.find({ usersLiked: req.params.user_id })
		.populate("createdBy")
		.sort({ "createdAt": -1 })
		.then((blogList) => {
			var blogListArr = [];
			if (blogList.length > 0) {
				for (var i = 0; i < blogList.length; i++) {
					var x = {
						_id: blogList[i]._id,
						blogTitle: blogList[i].blogTitle,
						blogURL: blogList[i].blogURL,
						blogCategory: blogList[i].blogCategory,
						blogHeaderImage: blogList[i].blogHeaderImage,
						blogSummary: blogList[i].blogSummary,
						blogContent: blogList[i].blogContent,
						createdBy: blogList[i].createdBy,
						createdAt: blogList[i].createdAt,
						userFullName: blogList[i].createdBy && blogList[i].createdBy.profile ? blogList[i].createdBy.profile.fullName : "-",
						userPic: blogList[i].createdBy && blogList[i].createdBy.documents && blogList[i].createdBy.documents.profilePhoto ? blogList[i].createdBy.documents.profilePhoto[0].url : "-",
						usersLiked: blogList[i].usersLiked ? blogList[i].usersLiked : "-"
					}

					// console.log("blogTitle => ",blogList[i].blogTitle);

					blogListArr.push(x);
				}

				if (i >= blogList.length) {
					res.status(200).json({
						success: true,
						data: blogListArr,
						message: "Data Found successfully"
					});
				}
			} else {
				res.status(200).json({
					success: false,
					data: [],
					message: "Data Not Found"
				});
			}
		})
		.catch(error => {
			console.log("getSavedItemsList error => ", error);
			res.status(500).json({
				error: error,
				success: false,
				message: "Issue occured while getting blog list"
			})
		});
}

exports.getTrendingBlogList = (req, res, next) => {
	var numOfBlogs = parseInt(req.params.numOfBlogs);
	var pageNum = parseInt(req.params.pageNum) > 0 ? parseInt(req.params.pageNum) : 1;
	var skipItems = 0;
	if (pageNum > 0 & numOfBlogs > 0) {
		skipItems = (pageNum - 1) * numOfBlogs;
	}

	// console.log("numOfBlogs => ",numOfBlogs," | pageNum => ",pageNum," | skipItems => ",skipItems);

	Model.find({ approvalStatus: "Approved" })
		.populate("createdBy")
		.sort({ "createdAt": -1 })
		.limit(numOfBlogs)
		.skip(skipItems)
		.then((blogList) => {
			var blogListArr = [];
			// console.log("blogListArr length => ",blogList.length);

			if (blogList.length > 0) {
				for (var i = 0; i < blogList.length; i++) {
					// console.log("i => ",i);

					var x = {
						_id: blogList[i]._id,
						blogTitle: blogList[i].blogTitle,
						blogURL: blogList[i].blogURL,
						blogCategory: blogList[i].blogCategory,
						blogHeaderImage: blogList[i].blogHeaderImage,
						blogSummary: blogList[i].blogSummary,
						blogContent: blogList[i].blogContent,
						createdBy: blogList[i].createdBy,
						createdAt: blogList[i].createdAt,
						userFullName: blogList[i].createdBy && blogList[i].createdBy.profile && blogList[i].createdBy.profile.fullName ? blogList[i].createdBy.profile.fullName : "-NA-",
						userPic: blogList[i].createdBy && blogList[i].createdBy.documents && blogList[i].createdBy.documents.profilePhoto && blogList[i].createdBy.documents.profilePhoto[0].url ? blogList[i].createdBy.documents.profilePhoto[0].url : "-",
					}
					blogListArr.push(x);
				}

				// console.log("final i => ",i);
				if (i >= blogList.length) {

					Model.count()
						.then(blogCount => {
							// console.log("blogListArr count => ",blogListArr.length," | total count => ",blogCount);
							res.status(200).json({
								success: true,
								blogList: blogListArr,
								blogCount: blogCount,
								message: "Data Found successfully"
							});
						})
						.catch(error => {
							res.status(500).json({
								error: error,
								success: false,
								blogCount: blogCount,
								message: "Issue occured while getting blog count"
							})
						});
				}
			} else {
				res.status(200).json({
					success: false,
					blogCount: 0,
					blogList: [],
					message: "Data Not Found"
				});
			}

		})
		.catch(error => {
			res.status(500).json({
				error: error,
				success: false,
				message: "Issue occured while getting blog list"
			})
		});
}


exports.getMostVisitedBlog = (req, res, next) => {
	var numOfBlogs = parseInt(req.params.numOfBlogs);
	var pageNum = parseInt(req.params.pageNum) > 0 ? parseInt(req.params.pageNum) : 1;
	var skipItems = 0;
	if (pageNum > 0 & numOfBlogs > 0) {
		skipItems = (pageNum - 1) * numOfBlogs;
	}

	// console.log("numOfBlogs => ",numOfBlogs," | pageNum => ",pageNum," | skipItems => ",skipItems);

	Model.find({ approvalStatus: "Approved" })
		.populate("createdBy")
		.sort({ "createdAt": 1 })
		.limit(numOfBlogs)
		.skip(skipItems)
		.then((blogList) => {
			var blogListArr = [];
			// console.log("blogListArr length => ",blogList.length);

			if (blogList.length > 0) {
				for (var i = 0; i < blogList.length; i++) {
					// console.log("i => ",i);

					var x = {
						_id: blogList[i]._id,
						blogTitle: blogList[i].blogTitle,
						blogURL: blogList[i].blogURL,
						blogCategory: blogList[i].blogCategory,
						blogHeaderImage: blogList[i].blogHeaderImage,
						blogSummary: blogList[i].blogSummary,
						blogContent: blogList[i].blogContent,
						createdBy: blogList[i].createdBy,
						createdAt: blogList[i].createdAt,
						userFullName: blogList[i].createdBy && blogList[i].createdBy.profile && blogList[i].createdBy.profile.fullName ? blogList[i].createdBy.profile.fullName : "-NA-",
						userPic: blogList[i].createdBy && blogList[i].createdBy.documents && blogList[i].createdBy.documents.profilePhoto && blogList[i].createdBy.documents.profilePhoto[0].url ? blogList[i].createdBy.documents.profilePhoto[0].url : "-",
					}
					blogListArr.push(x);
				}

				// console.log("final i => ",i);
				if (i >= blogList.length) {

					Model.count()
						.then(blogCount => {
							// console.log("blogListArr count => ",blogListArr.length," | total count => ",blogCount);
							res.status(200).json({
								success: true,
								blogList: blogListArr,
								blogCount: blogCount,
								message: "Data Found successfully"
							});
						})
						.catch(error => {
							res.status(500).json({
								error: error,
								success: false,
								blogCount: blogCount,
								message: "Issue occured while getting blog count"
							})
						});
				}
			} else {
				res.status(200).json({
					success: false,
					blogCount: 0,
					blogList: [],
					message: "Data Not Found"
				});
			}

		})
		.catch(error => {
			res.status(500).json({
				error: error,
				success: false,
				message: "Issue occured while getting blog list"
			})
		});
}

exports.getMostLikedBlogList = (req, res, next) => {
	var numOfBlogs = parseInt(req.params.numOfBlogs);
	var pageNum = parseInt(req.params.pageNum) > 0 ? parseInt(req.params.pageNum) : 1;
	var skipItems = 0;
	if (pageNum > 0 & numOfBlogs > 0) {
		skipItems = (pageNum - 1) * numOfBlogs;
	}

	// console.log("numOfBlogs => ",numOfBlogs," | pageNum => ",pageNum," | skipItems => ",skipItems);

	Model.find({ approvalStatus: "Approved" })
		.populate("createdBy")
		.sort({ "createdAt": 1 })
		.limit(numOfBlogs)
		.skip(skipItems)
		.then((blogList) => {
			var blogListArr = [];
			// console.log("blogListArr length => ",blogList.length);

			if (blogList.length > 0) {
				for (var i = 0; i < blogList.length; i++) {
					// console.log("i => ",i);

					var x = {
						_id: blogList[i]._id,
						blogTitle: blogList[i].blogTitle,
						blogURL: blogList[i].blogURL,
						blogCategory: blogList[i].blogCategory,
						blogHeaderImage: blogList[i].blogHeaderImage,
						blogSummary: blogList[i].blogSummary,
						blogContent: blogList[i].blogContent,
						createdBy: blogList[i].createdBy,
						createdAt: blogList[i].createdAt,
						userFullName: blogList[i].createdBy && blogList[i].createdBy.profile && blogList[i].createdBy.profile.fullName ? blogList[i].createdBy.profile.fullName : "-NA-",
						userPic: blogList[i].createdBy && blogList[i].createdBy.documents && blogList[i].createdBy.documents.profilePhoto && blogList[i].createdBy.documents.profilePhoto[0].url ? blogList[i].createdBy.documents.profilePhoto[0].url : "-",
					}
					blogListArr.push(x);
				}

				// console.log("final i => ",i);
				if (i >= blogList.length) {

					Model.count()
						.then(blogCount => {
							// console.log("blogListArr count => ",blogListArr.length," | total count => ",blogCount);
							res.status(200).json({
								success: true,
								blogList: blogListArr,
								blogCount: blogCount,
								message: "Data Found successfully"
							});
						})
						.catch(error => {
							res.status(500).json({
								error: error,
								success: false,
								blogCount: blogCount,
								message: "Issue occured while getting blog count"
							})
						});
				}
			} else {
				res.status(200).json({
					success: false,
					blogCount: 0,
					blogList: [],
					message: "Data Not Found"
				});
			}

		})
		.catch(error => {
			res.status(500).json({
				error: error,
				success: false,
				message: "Issue occured while getting blog list"
			})
		});
}



exports.searchByTitle = (req, res, next) => {
	Model.find({ blogTitle: req.params.searchTxt, approvalStatus: "Approved" })
		.exec()
		.then(data => {
			res.status(200).json(data);
		})
		.catch(err => {
			res.status(500).json({ error: err });
		});
};

exports.getListCategoryWise = (req, res, next) => {
	Model.find({ blogCategory: req.params.category, approvalStatus: "Approved" })
		.exec()
		.then(blogListArr => {
			if (blogListArr.length > 0) {
				res.status(200).json({
					success: true,
					blogList: blogListArr,
					message: "Data Found successfully"
				});
			} else {
				res.status(200).json({
					success: false,
					blogList: [],
					message: "Data Not Found"
				});
			}
		})
		.catch(err => {
			res.status(500).json({
				error: error,
				success: false,
				message: "Issue occured while getting Categorywise blog list"
			})
		});
};


exports.searchBlogs = (req, res, next) => {

	console.log("searchBlogs req.body => ", req.body);

	var category = req.body.category;
	var searchPhrase = req.body.searchPhrase;
	var pageNum = parseInt(req.body.pageNum) > 0 ? parseInt(req.body.pageNum) : 1;
	var sendItems = parseInt(req.body.sendItems) > 0 ? parseInt(req.body.sendItems) : 8;
	var selector = {};
	var skipItems = 0;

	if (pageNum > 0 & sendItems > 0) {
		skipItems = (pageNum - 1) * sendItems;
	}

	if (category === "*" & searchPhrase !== "*") {
		selector = {
			$or: [
				{ "blogTitle": new RegExp(searchPhrase, 'i') },
				{ "blogCategory": new RegExp(searchPhrase, 'i') },
				{ "blogSummary": new RegExp(searchPhrase, 'i') },
				{ "blogContent": new RegExp(searchPhrase, 'i') },
				{ "authorName": new RegExp(searchPhrase, 'i') },
			],
			approvalStatus: "Approved"
		};
	}

	if (category !== "*" & searchPhrase === "*") {
		selector = { blogCategory: category, approvalStatus: "Approved" };
	}

	if (category !== "*" & searchPhrase !== "*") {
		selector = {
			blogCategory: category, approvalStatus: "Approved",
			$or: [
				{ "blogTitle": new RegExp(searchPhrase, 'i') },
				{ "blogCategory": new RegExp(searchPhrase, 'i') },
				{ "blogSummary": new RegExp(searchPhrase, 'i') },
				{ "blogContent": new RegExp(searchPhrase, 'i') },
				{ "authorName": new RegExp(searchPhrase, 'i') },
			]
		};
	}

	console.log("searchBlogs selector => ", selector);

	Model.find(selector)
		.populate('createdBy')
		.sort({ createdAt: -1 })
		.limit(sendItems)
		.skip(skipItems)
		.then(blogListArr => {
			console.log("searchBlogs blogListArr => ", blogListArr);


			Model.find(selector)
				.count()
				.then(blogListCount => {
					if (blogListArr.length > 0) {
						res.status(200).json({
							success: true,
							blogList: blogListArr,
							blogCount: blogListCount,
							message: "Data Found successfully",
						});
					} else {
						res.status(200).json({
							success: false,
							blogList: [],
							blogCount: blogListCount,
							message: "Data Not Found"
						});
					}
				})
				.catch(err => {
					res.status(500).json({
						error: error,
						success: false,
						message: "Issue occured while getting blog list count"
					})
				});
		})
		.catch(err => {
			res.status(500).json({
				error: error,
				success: false,
				message: "Issue occured while getting Categorywise blog list"
			})
		});
};


exports.addNumberOfWords = (req, res, next) => {

	Model.find({ approvalStatus: "Approved" })
		.then(async (blogList) => {
			// console.log("blogList = ",blogList.length);

			if (blogList.length > 0) {
				for (var i = 0; i < blogList.length; i++) {
					var updateBlogVar = await updateBlog(blogList[i]._id, blogList[i].blogContent);
					// console.log("updateBlogVar output = ",updateBlogVar);
				}
				if (i >= blogList.length) {
					res.status(200).json({ message: "All blogs updated successfully!" });
				}
			} else {
				res.status(500).json({ message: "No Blogs Found" });
			}
		})
		.catch(err => {
			console.log("updateBlog err = ", err);
			res.status(500).json({
				error: err,
				success: false,
				message: "addNumberOfWords Issue occured while getting blog list"
			})
		});

}

function updateBlog(_id, content) {

	if (content) {
		var numOfWords = content.split(" ").length;
		var readingInMin = Math.round(parseInt(numOfWords) / 200) + 1;
		// console.log("numOfWords => ",numOfWords," | readingInMin = ",readingInMin);
	}

	return new Promise((resolve, reject) => {
		Model.updateOne(
			{ "_id": _id },
			{
				$set: {
					numOfWords: numOfWords,
					readingInMin: readingInMin,
				}
			}
		)
			.then(updatedBlog => {
				// console.log(_id," | updatedBlog => ",updatedBlog);
				resolve(updatedBlog);
			})
			.catch(error => {
				reject(error);
			})
	})
}

exports.update_blog = (req, res, next) => {

	// console.log("update_blog req.body => ",req.body);

	Model.updateOne(
		{ _id: req.body.blog_id },
		{
			$set: {
				user_id: req.body.user_id,
				blogTitle: req.body.blogTitle,
				blogURL: req.body.blogURL,
				blogCategory: req.body.blogCategory,
				blogSummary: req.body.blogSummary,
				blogHeaderImage: req.body.blogHeaderImage,
				blogContent: req.body.blogContent,
				updatedAt: new Date(),
			}
		},
	)
		.then(updatedBlog => {
			// console.log("update blog Msg -> ",updatedBlog);

			Model.findOne({ _id: req.body.blog_id })
				.then(blogDoc => {
					res.status(200).json({
						message: "Blog updated Successfully",
						success: true,
						data: updatedBlog,
						blogDoc: blogDoc
					})
				})
				.catch(error => {
					console.log("update blog error -> ", error);
					res.status(500).json({ message: "Error occured while getting blogdoc", success: false, error: error });
				})

		})
		.catch(error => {
			console.log("update blog error -> ", error);
			res.status(500).json({ message: "Error occured while updating blog" });
		})
};

exports.update_blog1 = (req, res, next) => {

	upload.single("blogHeaderImage")(req, res, function (err) {
		// console.log("err 843", err)
		if (err instanceof multer.MulterError) {
			console.log(" req body 29============>:", req.body);

			return res
				.status(400)
				.json({ success: false, message: "File upload error" });
		} else if (err) {
			console.log(err, "err 851");
			return res
				.status(500)
				.json({ success: false, message: "Internal server error" });
		}
		// console.log("req.body40=====>", req.body);
		// console.log("req.body.image", req.body.image);
		const imageFilePath = req.file?.path;
		console.log("imageFilePath", imageFilePath);



		Model.updateOne(
			{ _id: req.body?.blog_id },
			{
				$set: {
					user_id: req.body?.user_id,
					blogTitle: req.body?.blogTitle,
					blogURL: req.body?.blogURL,
					blogSummary: req.body?.blogSummary,
					blogHeaderImage: imageFilePath,
					blogContent: req.body.blogContent,
					updatedAt: new Date(),
				}
			},
		)
			.then(updatedBlog => {
				console.log("update blog Msg -> ", updatedBlog);

				Model.findOne({ _id: req.body?.blog_id })
					.then(blogDoc => {
						console.log("blogDoc", blogDoc)
						res.status(200).json({
							message: "Blog updated Successfully",
							success: true,
							data: updatedBlog,
							blogDoc: blogDoc
						})
					})
					.catch(error => {
						// console.log("update blog error -> ", error);
						res.status(500).json({ message: "Error occured while getting blogdoc", success: false, error: error });
					})

			})
			.catch(error => {
				console.log("update blog error -> ", error);
				res.status(500).json({ message: "Error occured while updating blog" });
			})
	});


};
exports.update_blog_author_names = (req, res, next) => {

	Model.find({ approvalStatus: "Approved" })
		.then(async (blogs) => {
			if (blogs && blogs.length > 0) {
				// console.log("blogs.length => ",blogs.length);

				for (var i = 0; i < blogs.length; i++) {
					if (blogs[i].createdBy) {
						// console.log("blogs[i].createdBy => ",blogs[i].createdBy);
						var authorNameUpdate = await updateAuthorNames(blogs[i]._id, blogs[i].createdBy);
						if (!authorNameUpdate) {
							console.log("Error for blog ", blogs[i]._id);
						}
					}
				}
				if (i >= blogs.length) {
					res.status(200).json({ message: "All Blogs successfully updated" })
				}
			} else {
				res.status(200).json({ message: "No Blog Found" });
			}
		})
		.catch(error => {
			console.log("update blog error -> ", error);
			res.status(500).json({ message: "Error occured while finding blogs" });
		})
};

function updateAuthorNames(blog_id, user_id) {
	// console.log("blog_id -> ",blog_id,' | user_id => ',user_id);

	return new Promise((resolve, reject) => {
		User.findOne({ _id: user_id })
			.then(user => {
				if (user) {
					// console.log("user => ",user.profile.firstname);
					var authorName = user.profile.firstname + " " + user.profile.lastname;
					Model.updateOne(
						{ _id: blog_id },
						{ $set: { authorName: authorName } }
					)
						.then(updatedBlog => {
							// console.log("updatedBlog => ",updatedBlog);
							resolve(true);
						})
						.catch(error => {
							console.log("blog update error -> ", error);
							reject(false);
						})
				} else {
					// console.log("user_id not found -> ",user_id);
					resolve(false);
				}
			})
			.catch(error => {
				console.log("blog find author error -> ", error);
				reject(false)
			})
	})

}


exports.update_for_userLikes = (req, res, next) => {
	var ready = false;
	var added = false;
	Model.findOne({ _id: req.body.blog_id })
		.then(blogData => {
			console.log("blogData", blogData);
			var usersLiked = blogData.usersLiked;
			var index = usersLiked.indexOf(req.body.user_id);
			console.log("usersLiked 662", usersLiked);
			// console.log("index",index);
			if (index > -1) {
				usersLiked.splice(index, 1);
				ready = true;
			} else {
				usersLiked.push(req.body.user_id);
				ready = true;
				added = true;
			}
			// console.log("usersLiked 672",usersLiked);
			if (ready) {
				Model.updateOne(
					{ _id: req.body.blog_id },
					{ $set: { usersLiked: usersLiked } }
				)
					.then(updatedblogLikes => {
						// console.log("updatedblogLikes => ",updatedblogLikes," | added = ",added);

						Model.findOne({ _id: req.body.blog_id })
							.populate("createdBy")
							.then(blogDetails => {
								res.status(200).json({
									message: "Update Successful!",
									data: updatedblogLikes,
									blogDetails: blogDetails,
									success: true,
								})
							})
							.catch(error => {
								console.log("update blog error -> ", error);
								res.status(500).json({
									message: "Error occured while getting blogDetails",
									success: false,
									error: error
								});
							})

					})
					.catch(error => {
						console.log("Error while update for likes", error);
						res.status(500).json({ message: "Error while update for likes", error: error });
					})
			}
		})
		.catch(error => {
			console.log("Error while find user", error);
			res.status(500).json({ message: "Error while find user", error: error });
		})
}
exports.deleteBlog = (req, res, next) => {
	Model.deleteOne({ "_id": req.params.blog_id })
		.then((deletedBata) => {
			res.status(200).json({
				message: "Blog deleted Successfully",
				data: deletedBata
			});

		})
		.catch(error => {
			res.status(500).json({
				error: error,
				message: "Some issue occurred during deleting blog!"
			});
		});
}

exports.getCaseStudyList = (req, res, next) => {

	Model.find()
		.populate("createdBy")
		.sort({ "createdAt": -1 })
		.then((caseStudyList) => {
			console.log("caseStudyList", caseStudyList);
			var caseStudyListArr = [];

			if (caseStudyList.length > 0) {
				console.log("caseStudyList[i] 100", caseStudyList[0]);
				for (var i = 0; i < caseStudyList.length; i++) {
					var x = {
						_id: caseStudyList[i]._id,
						projectName: caseStudyList[i].projectName,
						pageURL: caseStudyList[i].pageURL,
						projectDescription: caseStudyList[i].projectDescription,
						bannerImage: caseStudyList[i].bannerImage,
						createdBy: caseStudyList[i].createdBy,
						createdAt: caseStudyList[i].createdAt,
						userFullName: caseStudyList[i].createdBy ? caseStudyList[i].createdBy.profile.fullName : "-",
						email: caseStudyList[i].createdBy ? caseStudyList[i].createdBy.profile.email : "-",
						mobile: caseStudyList[i].createdBy ? caseStudyList[i].createdBy.profile.mobile : "-",
						// userPic: caseStudyList[i].createdBy ? caseStudyList[i].createdBy.documents && caseStudyList[i].createdBy.documents?.profilePhoto ? caseStudyList[i].createdBy.documents.profilePhoto[0].url : "-" : "-",
						usersLiked: caseStudyList[i].usersLiked ? caseStudyList[i].usersLiked : "-",
						approvalStatus: caseStudyList[i].approvalStatus ? caseStudyList[i].approvalStatus : "-",
						approvalDate: caseStudyList[i]?.approvalLog.slice(-1)[0]?.updatedAt
							? moment(caseStudyList[i]?.approvalLog.slice(-1)[0]?.updatedAt).format(
								"DD/MM/YYYY"
							)
							: "Not available",
						remark: caseStudyList[i]?.approvalLog.slice(-1)[0]?.remark ?? "None",

					}

					caseStudyListArr.push(x);
				}

				if (i >= caseStudyList.length) {
					// console.log("caseStudyListArr = ",caseStudyListArr);

					res.status(200).json({
						success: true,
						data: caseStudyListArr,
						message: "Data Found successfully"
					});
				}
			} else {
				res.status(200).json({
					success: false,
					data: [],
					message: "Data Not Found"
				});
			}

		})
		.catch(error => {
			console.log("Issue occured while getting blog list : error => ", error);
			res.status(500).json({
				error: error,
				success: false,
				message: "Issue occured while getting blog list"
			})
		});
}


exports.getCaseStudyListByService = (req, res, next) => {
	if(req.params.service==="All"){
		var selector ={}
	}else{
		var selector ={service:req.params.service}
	}
	Model.find(selector)
		.populate("createdBy")
		.sort({ "createdAt": -1 })
		.then((caseStudyList) => {
			console.log("caseStudyList", caseStudyList);
			var caseStudyListArr = [];

			if (caseStudyList.length > 0) {
				console.log("caseStudyList[i] 100", caseStudyList[0]);
				for (var i = 0; i < caseStudyList.length; i++) {
					var x = {
						_id: caseStudyList[i]._id,
						projectName: caseStudyList[i].projectName,
						pageURL: caseStudyList[i].pageURL,
						projectDescription: caseStudyList[i].projectDescription,
						bannerImage: caseStudyList[i].bannerImage,
						createdBy: caseStudyList[i].createdBy,
						createdAt: caseStudyList[i].createdAt,
						userFullName: caseStudyList[i].createdBy ? caseStudyList[i].createdBy.profile.fullName : "-",
						email: caseStudyList[i].createdBy ? caseStudyList[i].createdBy.profile.email : "-",
						mobile: caseStudyList[i].createdBy ? caseStudyList[i].createdBy.profile.mobile : "-",
						// userPic: caseStudyList[i].createdBy ? caseStudyList[i].createdBy.documents && caseStudyList[i].createdBy.documents?.profilePhoto ? caseStudyList[i].createdBy.documents.profilePhoto[0].url : "-" : "-",
						usersLiked: caseStudyList[i].usersLiked ? caseStudyList[i].usersLiked : "-",
						approvalStatus: caseStudyList[i].approvalStatus ? caseStudyList[i].approvalStatus : "-",
						approvalDate: caseStudyList[i]?.approvalLog.slice(-1)[0]?.updatedAt
							? moment(caseStudyList[i]?.approvalLog.slice(-1)[0]?.updatedAt).format(
								"DD/MM/YYYY"
							)
							: "Not available",
						remark: caseStudyList[i]?.approvalLog.slice(-1)[0]?.remark ?? "None",

					}

					caseStudyListArr.push(x);
				}

				if (i >= caseStudyList.length) {
					// console.log("caseStudyListArr = ",caseStudyListArr);

					res.status(200).json({
						success: true,
						data: caseStudyListArr,
						message: "Data Found successfully"
					});
				}
			} else {
				res.status(200).json({
					success: false,
					data: [],
					message: "Data Not Found"
				});
			}

		})
		.catch(error => {
			console.log("Issue occured while getting blog list : error => ", error);
			res.status(500).json({
				error: error,
				success: false,
				message: "Issue occured while getting blog list"
			})
		});
}
exports.approveBlog = (req, res, next) => {
	// console.log("req.body",req.body)
	Model.update(
		{ _id: ObjectId(req.body.blog_id) },
		{
			$set: {
				approvalStatus: req.body.status,
			},
			$push: {
				approvalLog: {
					status: req.body.status,
					updatedAt: Date.now(),
					updatedBy: "Admin",
					remark: req.body.remark,
				},
			},
		}
	)
		.exec()
		.then((updateLog) => {
			console.log("updateLog", updateLog)
			if (updateLog.nModified === 1) {
				res.status(200).json({ updateData: updateLog, success: true, status: req.body.status, blogTitle: req.body.blogTitle });
				sendNotification({
					toEmail: req.body.email,
					toMobileNumber: req.body.phoneNumber,
					event: "Blog Approval",
					toUserRole: "consultant",
					variables: {
						consultant_name: req.body.consultantName,
						status: req.body.status,
						remark: req.body.remark ?? 'None'
					},
				});
			} else {
				res.status(200).json({ message: "Status update didn't happen", success: false });
			}

		})
		.catch((error) => {
			console.log("error=", error)
		})
};
