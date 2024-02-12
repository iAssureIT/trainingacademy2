const mongoose = require("mongoose");
const Categories = require("../masterBusinessCategory/Model.js");
const SubCategories = require("../masterBusinessSubCategory/Model.js");
const CompanyInfo = require("../companyInfo/model.js");
const { ObjectId } = require('mongoose').Types;



exports.getSearchResults = (req,res,next)=>{
	console.log("getSearchResults req.body => ",req.body);
	var searchText = req.body.searchData;

	var selector = {};
	if (req.body.category !== "*") {
		selector["basicInfo.businessCategory"] = ObjectId(req.body.category);
	}
	if (req.body.subcategory !== "*") {
		selector["basicInfo.businessSubCategory"] = ObjectId(req.body.subcategory);
	}
	console.log("selector",selector)
	CompanyInfo.find(selector)
	.populate("basicInfo.businessCategory")
	.populate("basicInfo.businessSubCategory")
	.then(searchData =>{
		
		// console.log("searchData =========> ",searchData);

		var searchResults = [];
		if(searchText!=="" && searchData.length>0){
			var searchArray = searchData.filter(x=>{
			// console.log("aaaaa",x["basicInfo"]["businessCategory"]["businessCategory"]);
			var searchExists = 	x["basicInfo"]["companyName"]?.toLowerCase().includes(searchText.toLowerCase()) ||
								x["basicInfo"]["groupName"]?.toLowerCase().includes(searchText.toLowerCase()) ||
								x["basicInfo"]["website"]?.toLowerCase().includes(searchText.toLowerCase()) ||
								x["basicInfo"]["businessCategory"]["businessCategory"]?.toLowerCase().includes(searchText.toLowerCase()) ||
								x["basicInfo"]["businessSubCategory"]["businessSubCategory"]?.toLowerCase().includes(searchText.toLowerCase())
				if(searchExists){
					searchResults.push(x)
				}
			});
			// console.log("searchResults",searchResults);
				
			res.status(200).json({
				success : true,
				message : "Following Search Results Found!",
				data 	: searchResults
			})	
		}else{
			res.status(200).json({
				success : true,
				message : "Following Search Results Found!",
				data 	: searchData
			})	
		}
		
		
	})
	.catch(error => {
		console.log("error => ",error);
		res.status(500).json({
			success : false,
			message : "Error occured during search "+error.message
		})			
	})
}
// exports.getSearchResults = (req,res,next)=>{

// 	console.log("getSearchResults req.body => ",req.body);

// 	//Step 1. Find value of catg using _id 
// 	//Step 2. Find value of subCatg using _id 
// 	//Step 3. Using these catg & subCatg values, 
// 	// 		  find data from companyInfo collection
// 	var searchData = req.body.searchData;

// 	var selector = req.body.category === "*" ? {} : {_id : req.body.category} ;

// 	Categories.findOne(selector)
// 	.then(catg => {
// 		console.log("catg => ",catg);
// 		var ctg = catg.businessCategory;
// 		var selector1 = req.body.subcategory === "*" ? {} : {_id : req.body.subcategory} ;

// 		SubCategories.findOne(selector1)
// 		.then(subCatg => {
// 			console.log("subCatg => ",subCatg);
// 			var sctg = subCatg.businessSubCategory;

// 			CompanyInfo.find({
// 				$or : [
// 					{ "basicInfo.companyName" 		  : new RegExp(searchData,'i') },
// 					{ "basicInfo.groupName"			  : new RegExp(searchData,'i')  },
// 					// { "basicInfo.businessCategory"    : new RegExp(searchData,'i')  },
// 					// { "basicInfo.businessSubCategory" : new RegExp(searchData,'i')  },
// 				]

// 			})
// 			.then(searchData =>{
// 				console.log("searchData => ",searchData);
// 				res.status(200).json({
// 					success : true,
// 					message : "Following Search Results Found!",
// 					data 	: searchData
// 				})			
// 			})
// 			.catch(error3 => {
// 				console.log("error3 => ",error3);
// 				res.status(500).json({
// 					success : false,
// 					message : "Error occured during finding Category "+error3.message
// 				})			
// 			})
// 		})
// 		.catch(error2 => {
// 			console.log("error2 => ",error2);
// 			res.status(500).json({
// 				success : false,
// 				message : "Error occured during finding Category "+error2.message
// 			})			
// 		})

// 	})
// 	.catch(error1 => {
// 		console.log("error1 => ",error1);
// 		res.status(500).json({
// 			success : false,
// 			message : "Error occured during finding Category "+error1.message
// 		})			
// 	})



// }