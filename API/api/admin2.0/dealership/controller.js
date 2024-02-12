const mongoose				= require("mongoose");
const Dealership 			= require('./model.js');

exports.insertDealership = (req,res,next)=>{
	console.log("insertDealership req.body => ", req.body);

	var dealership = new Dealership({
  						_id  			:new mongoose.Types.ObjectId(),
					  	fullName        :req.body.fullName,
					    mobile    		:req.body.mobile,
					    email           :req.body.email,
					    city  	   		:req.body.city,
						createdAt 		:new Date(),
					});

		dealership.save()
			.then(insertedDealership =>{
				console.log("insertedDealership response => ", insertedDealership);

				res.status(200).json({
					message 	: "Dealership  added successfully",
					success 	: true,
					feedback 	: insertedDealership
				});					
			})
			.catch(error=>{
				console.log("Error while adding Dealership  -> ",error);
				res.status(500).json({
					message 	: "Error while adding Dealership ",
					success 	: false,
					error 		: error
				});
			})

};

exports.getDealershipList = (req,res,next)=>{
	Dealership.find({})
		.sort({"createdAt" : -1})
		.then(dealershipList=>{
			res.status(200).json({
				dealershipList: dealershipList,
				messages 	 : "Dealership List Generated !!"
			})
		})
		.catch(error=>{
			res.status(500).json({
				error:error,
				message:"Some error occured while generating Dealership List"
			})
		});
}