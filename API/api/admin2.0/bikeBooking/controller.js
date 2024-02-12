const mongoose				= require("mongoose");
const Bikebooking 			= require('./model.js');

// -----------------------Bike Booking-------------------------------------

exports.insertBikeBooking = (req,res,next)=>{
	console.log("insertBikeBooking req.body => ", req.body);

	var bikeBooking = new Bikebooking({
  						_id  			:new mongoose.Types.ObjectId(),
					  	fullName      	:req.body.fullName,
					    mobile    		:req.body.mobile,
					    city           	:req.body.city,
					    email           :req.body.email,
					    state       	:req.body.state,
					    vehicle         :req.body.vehicle,
					    color         	:req.body.color,
						createdAt 		:new Date(),
					});

		bikeBooking.save()
			.then(insertedBikeBooking =>{
				console.log("insertedBikeBooking response => ", insertedBikeBooking);

				res.status(200).json({
					message 	: "BikeBooking added successfully",
					success 	: true,
					feedback 	: insertedBikeBooking
				});					
			})
			.catch(error=>{
				console.log("Error while adding BikeBooking form -> ",error);
				res.status(500).json({
					message 	: "Error while adding BikeBooking form",
					success 	: false,
					error 		: error
				});
			})
};


exports.getBikeBookingList = (req,res,next)=>{
	Bikebooking.find({})
		.sort({"createdAt" : -1})
		.then(bikebookingList=>{
			res.status(200).json({
				bikebookingList: bikebookingList,
				messages 	 : "Bike Booking List Generated !!"
			})
		})
		.catch(error=>{
			res.status(500).json({
				error:error,
				message:"Some error occured while generating Bikebooking List"
			})
		});
}
// -----------------------Contact Us-------------------------------------

exports.insertContact = (req,res,next)=>{
	console.log("insertContact req.body => ", req.body);

	var contact = new Contact({
  						_id  			:new mongoose.Types.ObjectId(),
					  	firstName       :req.body.firstName,
					  	lastName        :req.body.lastName,
					    mobile    		:req.body.mobile,
					    email           :req.body.email,
					    pincode  	    :req.body.pincode,
					    message         :req.body.message,
						createdAt 		:new Date(),
					});

		contact.save()
			.then(insertedContact =>{
				console.log("insertedContact response => ", insertedContact);

				res.status(200).json({
					message 	: "Contact Us added successfully",
					success 	: true,
					feedback 	: insertedContact
				});					
			})
			.catch(error=>{
				console.log("Error while adding Contact Us form -> ",error);
				res.status(500).json({
					message 	: "Error while adding Contact Us form",
					success 	: false,
					error 		: error
				});
			})

};

exports.getContactUsList = (req,res,next)=>{
	Contact.find({})
		.sort({"createdAt" : -1})
		.then(contactUsList=>{
			res.status(200).json({
				contactUsList: contactUsList,
				messages 	 : "Contact Us List Generated !!"
			})
		})
		.catch(error=>{
			res.status(500).json({
				error:error,
				message:"Some error occured while generating contact us List"
			})
		});
}