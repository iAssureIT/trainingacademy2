const mongoose				= require("mongoose");
const TestRide	 			= require('./model.js');

exports.insertTestRide = (req,res,next)=>{
	console.log("insertTestRide req.body => ", req.body);

	var testRide = new TestRide({
  						_id  			:new mongoose.Types.ObjectId(),
					  	fullName      	:req.body.fullName,
					    mobile    		:req.body.mobile,
					    city           	:req.body.city,
						createdAt 		:new Date(),
					});

		testRide.save()
			.then(insertedTestRide =>{
				console.log("insertedTestRide response => ", insertedTestRide);

				res.status(200).json({
					message 	: "TestRide added successfully",
					success 	: true,
					feedback 	: insertedTestRide
				});					
			})
			.catch(error=>{
				console.log("Error while adding TestRide form -> ",error);
				res.status(500).json({
					message 	: "Error while adding TestRide form",
					success 	: false,
					error 		: error
				});
			})

};

exports.getTestRideList = (req,res,next)=>{
	TestRide.find({})
		.sort({"createdAt" : -1})
		.then(testRideList=>{
			res.status(200).json({
				testRideList: testRideList,
				messages 	 : "TestRide  List Generated !!"
			})
		})
		.catch(error=>{
			res.status(500).json({
				error:error,
				message:"Some error occured while generating TestRide List"
			})
		});
}