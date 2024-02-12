const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;
const ThankYouNote = require("./model.js");
const CompanyInfo = require("../companyInfo/model.js");
const user = require("../userManagementnew/ModelUsers.js");

exports.insertThankYouNote = (req, res, next) => {
  console.log("Input Req => ", req.body);

  const thankYouNote = new ThankYouNote({
    // _id : new mongoose.Types.ObjectId(),
    // from : req.body.from,
    // to : req.body.to,
    // referralAmount : req.body.referralAmount,
    // createdAt : new Date(),
    // createdBy : "Developer"

    _id: new mongoose.Types.ObjectId(),
    company_id: req.body.company_id,
    thankYouNote: req.body.thankYouNote,
    createdBy: req.body.createdBy ? req.body.createdBy : null,
    firstName: req.body.firstName ? req.body.firstName : null,
    lastName: req.body.lastName ? req.body.lastName : null,
    createdAt: new Date(),
  });

  thankYouNote
    .save()
    .then((newDoc) => {
      if (newDoc) {
        res.status(200).json({
          success: true,
          message: "Data inserted successfully. ",
        });
      }
    })
    .catch((error) => {
      console.log("error => ", error);
      res.status(501).json({
        success: false,
        message: "Insert error! - " + error.message,
      });
    });
};

exports.deleteTYN = (req, res, next) => {
  console.log("deleteTYN Input Req => ", req.params._id);
  const doc_id = req.params._id;
  ThankYouNote.deleteOne({
    _id: doc_id,
  })
    .then((data) => {
      console.log("Delete data => ", data);
      if (data.deletedCount > 0) {
        res.status(200).json({
          success: true,
          message: "Record Deleted Successfully. ",
        });
      } else {
        res.status(200).json({
          success: false,
          message: "Something went wrong during delete.",
        });
      }
    })
    .catch((error) => {
      console.log("error => ", error);
      res.status(501).json({
        success: false,
        message: "Delete error! - " + error.message,
      });
    });
};

exports.getOneTYN = (req, res, next) => {
  console.log("getOneTYN Input Req.params => ", req.params);

  const tyn_id = req.params.tyn_id;
  ThankYouNote.findOne({ _id: tyn_id })
    .populate("company_id")
    .then((data) => {
      console.log("Get One data => ", data);
      if (data) {
        res.status(200).json({
          success: true,
          message: "Record Found Successfully.",
          data: data,
        });
      } else {
        res.status(200).json({
          success: false,
          message: "Data Not Found",
        });
      }
    })
    .catch((error) => {
      console.log("error => ", error);
      res.status(501).json({
        success: false,
        message: "Get One error! - " + error.message,
      });
    });
};

exports.getListofTYN = (req, res, next) => {
  // console.log("getListofTYN Input Req.params => ",req.params);

  // const tyn_id = req.params.tyn_id;
  ThankYouNote.find({})
    .populate("company_id")
    .then((data) => {
      console.log("Get One data => ", data);
      if (data) {
        res.status(200).json({
          success: true,
          message: "Record Found Successfully.",
          data: data,
        });
      } else {
        res.status(200).json({
          success: false,
          message: "Data Not Found",
        });
      }
    })
    .catch((error) => {
      console.log("error => ", error);
      res.status(501).json({
        success: false,
        message: "Get List error! - " + error.message,
      });
    });
};

exports.getListofTYNByCreatedUser = (req, res, next) => {
  console.log("getListofTYN Input Req.params => ", req.params);

  const createdBy = req.params.createdBy;
  ThankYouNote.find({ createdBy: createdBy })
    .populate("company_id")
    .then((data) => {
      console.log("Get One data => ", data);
      if (data) {
        res.status(200).json({
          success: true,
          message: "Record Found Successfully.",
          data: data,
        });
      } else {
        res.status(200).json({
          success: false,
          message: "Data Not Found",
        });
      }
    })
    .catch((error) => {
      console.log("error => ", error);
      res.status(501).json({
        success: false,
        message: "Get List error! - " + error.message,
      });
    });
};

// exports.getListofTYNToCompany = (req, res, next) => {
//   console.log("getListofTYN Input Req.params => ", req.params);

//   const company_id = req.params.company_id;
//   ThankYouNote.find({ company_id: company_id })
//     .populate("company_id")
//     .then((data) => {
//       console.log("Get One data => ", data);
//       if (data) {
//         res.status(200).json({
//           success: true,
//           message: "Record Found Successfully.",
//           data: data,
//         });
//       } else {
//         res.status(200).json({
//           success: false,
//           message: "Data Not Found",
//         });
//       }
//     })
//     .catch((error) => {
//       console.log("error => ", error);
//       res.status(501).json({
//         success: false,
//         message: "Get List error! - " + error.message,
//       });
//     });
// };

exports.getListofTYNToCompany = (req, res, next) => {
  console.log("getListofTYN Input Req.params => ", req.params);

  const user_id = req.params.createdBy;
  CompanyInfo.find({ createdBy: user_id })

    .then((data) => {
      var myCompanies = data.map((a, i) => {
        return {
          _id: a._id,
        };
      });
      getData();
      async function getData() {
        var allTestimonials = [];
        for (let i = 0; i < myCompanies.length; i++) {
          // console.log("187 myCompanies[i]._id", myCompanies[i]._id);
          var getTestimonialsAsPerCompany = await fetchTestimonialsAsPerCompany(
            myCompanies[i]._id
          );
          // console.log(
          //   "186 getTestimonialsAsPerCompany",
          //   getTestimonialsAsPerCompany
          // );
          //allTestimonials.push(...allTestimonials, getTestimonialsAsPerCompany);
          allTestimonials.push(...getTestimonialsAsPerCompany);
          //  mergedArray.push(...arrayOfArrays[i]);
          //  allTestimonials.concat(getTestimonialsAsPerCompany);
        }
        console.log("197 allTestimonials", allTestimonials);

        if (data) {
          res.status(200).json({
            success: true,
            message: "Record Found Successfully.",
            data: allTestimonials,
          });
        } else {
          res.status(200).json({
            success: false,
            message: "Data Not Found",
          });
        }
      }
    })
    .catch((error) => {
      console.log("error => ", error);
      res.status(501).json({
        success: false,
        message: "Get List error! - " + error.message,
      });
    });
};

function fetchTestimonialsAsPerCompany(company_id) {
  return new Promise((resolve, reject) => {
    ThankYouNote.find({ company_id: company_id })
      .populate("company_id")
      .then((data) => {
        resolve(data);
        //   console.log("221 fetchTestimonialsAsPerCompany data", data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

exports.updateTYN = (req, res, next) => {
  console.log("updateTYN Input Req.body => ", req.body);

  const tyn_id = req.params.tyn_id;
  ThankYouNote.updateOne(
    { _id: tyn_id },
    {
      $set: {
        //  to: req.body.to,
        //   thankYouNote: req.body.thankYouNote, from: req.body.from,

        company_id: req.body.company_id,
        thankYouNote: req.body.thankYouNote,
        createdBy: req.body.createdBy,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      },
    }
  )
    .then((data) => {
      console.log("231 updateTYN data => ", data);
      if (data.nModified == 1) {
        res.status(200).json({
          success: true,
          message: "Record Updated Successfully.",
          data: data,
        });
      } else {
        res.status(200).json({
          success: false,
          message: "Data Not Found",
        });
      }
    })
    .catch((error) => {
      console.log("error => ", error);
      res.status(501).json({
        success: false,
        message: "Update error! - " + error.message,
      });
    });
};

exports.post_list_TYN = (req, res, next) => {
  var startRange = req.body.startRange;
  var limitRange = req.body.limitRange;

  console.log("req.body => ", req.body);

  ThankYouNote.find()
    .populate("company_id")
    // .select("profile.firstname profile.lastname profile.status profile.companyID profile.companyName profile.fullName roles profile.email profile.mobile profile.clientId createdAt services.resume.loginTokens statusLog")
    .sort({ createdAt: -1 })
    .skip(startRange)
    .limit(limitRange)
    .exec()
    .then((data) => {
      if (data) {
        console.log("--------------data----------", data);
        var i = 0;
        var returnData = [];
        for (i = 0; i < data.length; i++) {
          returnData.push({
            _id: data[i]._id,
            company_id: data[i].company_id,
            company_id: data[i]?.company_id,
            thankYouNote: data[i].thankYouNote,
            createdBy: data[i].createdBy ? data[i].createdBy : null,
            firstName: data[i].firstName ? data[i].firstName : null,
            lastName: data[i].lastName ? data[i].lastName : null,
            createdAt: data[i].createdAt,
          });
        }
        if (i >= data.length) {
          console.log("returnData=============>", returnData);
          res.status(200).json(returnData);
        }
      } else {
        res.status(200).json({ message: "USER_NOT_FOUND" });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
  //end of if condition
};
