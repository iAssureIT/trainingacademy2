const mongoose = require("mongoose");
const Company = require("./model");
const { ObjectId } = require("mongodb");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/images"); // Specify the destination folder for logos
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Rename the uploaded logo
  },
});

const upload = multer({ storage: storage });

// exports.insertCompany = (req, res, next) => {
//   console.log("req.body====>", req.body);

//   Company.findOne({
//     "basicInfo.companyName": req.body.companyName,
//     "basicInfo.groupName": req.body.groupName,
//     "basicInfo.website": req.body.website,
//   })
//     .exec()
//     .then((data) => {
//       if (data) {
//         res.status(200).json({ duplicated: true, companyID: data._id });
//       } else {
//         const company = new Company({
//           _id: new mongoose.Types.ObjectId(),
//           "basicInfo.profileStatus": req.body.profileStatus,
//           "basicInfo.companyName": req.body.companyName,
//           "basicInfo.groupName": req.body.groupName,
//           "basicInfo.image": imageFilePath,
//           "basicInfo.website": req.body.website,
//           "basicInfo.employees": req.body.employees,
//           "basicInfo.foundedOn": req.body.foundedOn,
//           "basicInfo.businessCategory": req.body.businessCategory,
//           "basicInfo.businessSubCategory": req.body.businessSubCategory,
//           userID: req.body.userID,
//           createdBy: req.body.createdBy ? req.body.createdBy : null,
//           createdAt: new Date(),
//         });
//         company
//           .save()
//           .then((data) => {
//             // console.log("data===>", data);
//             res.status(200).json({ created: true, companyID: data._id });
//           })
//           .catch((err) => {
//             // console.log("Post error", err);
//             res.status(500).json({ error: err });
//           });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err });
//     });
// };

exports.insertCompany1 = (req, res, next) => {
  upload.single("image")(req, res, function (err) {
    console.log("req.body", req.body); // Check other form fields
    if (err instanceof multer.MulterError) {
      console.log("MulterError code:", err.code);
      console.log("MulterError message:", err.message);
      console.log("MulterError field:", err.field);
      return res
        .status(400)
        .json({ success: false, message: "File upload error" });
    } else if (err) {
      console.log(err, "err");
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
    console.log("req.body", req.body);
    console.log("req.body.image", req.body.image);
    const imageFilePath = req.file.path;
    Company.findOne({
      "basicInfo.companyName": req.body.companyName,
      "basicInfo.groupName": req.body.groupName,
      "basicInfo.website": req.body.website,
    })
      .exec()
      .then((data) => {
        console.log("find data", data);
        if (data) {
          res.status(200).json({ duplicated: true, companyID: data._id });
        } else {
          const company = new Company({
            _id: new mongoose.Types.ObjectId(),
            "basicInfo.profileStatus": req.body.profileStatus,
            "basicInfo.companyName": req.body.companyName,
            "basicInfo.groupName": req.body.groupName,
            "basicInfo.image": imageFilePath,
            "basicInfo.website": req.body.website,
            "basicInfo.employees": req.body.employees,
            "basicInfo.foundedOn": req.body.foundedOn,
            "basicInfo.businessCategory": req.body.businessCategory,
            "basicInfo.businessSubCategory": req.body.businessSubCategory,
            userID: req.body.userID,
            createdBy: req.body.createdBy || null,
            createdAt: new Date(),
          });
          company
            .save()
            .then((data) => {
              console.log("add data", data);
              res.status(200).json({ created: true, companyID: data._id });
            })
            .catch((err) => {
              console.log("add catch", err);
              res.status(500).json({ error: err });
            });
        }
      })
      .catch((err) => {
        console.log("find catch", err);
        res.status(500).json({ error: err });
      });
  });
};

// exports.insertCompany1 = (req, res, next) => {
//   upload.single("image")(req, res, function (err) {
//     // Use the upload middleware here
//     if (err instanceof multer.MulterError) {
//       return res
//         .status(400)
//         .json({ success: false, message: "File upload error" });
//     } else if (err) {
//       console.log(err, "err");
//       return res
//         .status(500)
//         .json({ success: false, message: "Internal server error" });
//     }

//     console.log("76 req.body", req.body);
//     console.log(" 77 req.body====>", req.body.image);
//     // The uploaded image file can be accessed using req.file
//     const imageFilePath = req.file.path;

//     Company.findOne({
//       "basicInfo.companyName": req.body.companyName,
//       "basicInfo.groupName": req.body.groupName,
//       "basicInfo.website": req.body.website,
//     })
//       .exec()
//       .then((data) => {
//         if (data) {
//           res.status(200).json({ duplicated: true, companyID: data._id });
//         } else {
//           const company = new Company({
//             _id: new mongoose.Types.ObjectId(),
//             "basicInfo.profileStatus": req.body.profileStatus,
//             "basicInfo.companyName": req.body.companyName,
//             "basicInfo.groupName": req.body.groupName,
//             "basicInfo.companyLogo": imageFilePath,
//             "basicInfo.website": req.body.website,
//             "basicInfo.employees": req.body.employees,
//             "basicInfo.foundedOn": req.body.foundedOn,
//             "basicInfo.businessCategory": req.body.businessCategory,
//             "basicInfo.businessSubCategory": req.body.businessSubCategory,
//             userID: req.body.userID,
//             createdBy: req.body.createdBy ? req.body.createdBy : null,
//             createdAt: new Date(),
//           });
//           company
//             .save()
//             .then((data) => {
//               // console.log("data===>", data);
//               res.status(200).json({ created: true, companyID: data._id });
//             })
//             .catch((err) => {
//               // console.log("Post error", err);
//               res.status(500).json({ error: err });
//             });
//         }
//       })
//       .catch((err) => {
//         res.status(500).json({ error: err });
//       });
//   });
// };

exports.updateBasicInfo = (req, res, next) => {
  console.log("req", req.body, req.params._id);

  Company.updateOne(
    { _id: req.params._id },
    {
      $set: {
        "basicInfo.companyName": req.body.companyName,
        "basicInfo.groupName": req.body.groupName,
        "basicInfo.companyLogo": req.body.companyLogo,
        "basicInfo.website": req.body.website,
        "basicInfo.employees": req.body.employees,
        "basicInfo.foundedOn": req.body.foundedOn,
        "basicInfo.businessCategory": req.body.businessCategory,
        "basicInfo.businessSubCategory": req.body.businessSubCategory,
      },
    }
  )
    .exec()
    .then((data) => {
      // console.log("data", data);
      res.status(200).json({ created: true, companyID: data._id });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.patchBasicInfo = async (req, res) => {
  upload.single("image")(req, res, function (err) {
    console.log("req.body", req.body); // Check other form fields
    if (err instanceof multer.MulterError) {
      console.log("MulterError code:", err.code);
      console.log("MulterError message:", err.message);
      console.log("MulterError field:", err.field);
      return res
        .status(400)
        .json({ success: false, message: "File upload error" });
    } else if (err) {
      console.log(err, "err");
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
    console.log("req.body", req.body);
    console.log("req.body.image", req.body.image);
    const imageFilePath = req.file.path;
    console.log("imagefilepath", imageFilePath);
    try {
      const companyID = req.params._id;
      console.log("219 companyID", companyID);
      const updateData = req.body; // Assuming your request body contains the fields to update

      // Check if the image property is present and a string
      if (updateData.image && typeof updateData.image === "string") {
        // Extract the filename from the image path
        const filename = updateData.image.substring(
          updateData.image.lastIndexOf("\\") + 1
        );
        updateData.image = imageFilePath; // Update the image field with the extracted filename
      }
      console.log("230", req.body, updateData);
      console.log("updateData.image", updateData.image);
      //   const patchedProduct = await Company.findOneAndUpdate(
      //     { _id: productId },
      //     { $set: updateData }, // Use $set to update only the specified fields in updateData
      //     { new: true } // This option returns the updated document
      //   );

      //   if (!patchedProduct) {
      //     return res.status(404).json({ message: "Product not found" });
      //   }

      //   res.status(200).json(patchedProduct);
      // } catch (err) {
      //   res.status(500).json({ error: err.message });
      // }
      Company.updateOne(
        { _id: req.params._id },
        {
          $set: {
            "basicInfo.companyName": req.body.companyName,
            "basicInfo.groupName": req.body.groupName,
            "basicInfo.companyLogo": req.body.companyLogo,
            "basicInfo.website": req.body.website,
            "basicInfo.employees": req.body.employees,
            "basicInfo.foundedOn": req.body.foundedOn,
            "basicInfo.businessCategory": req.body.businessCategory,
            "basicInfo.businessSubCategory": req.body.businessSubCategory,
            "basicInfo.image": imageFilePath,
          },
        }
      )
        .exec()
        .then((data) => {
          if (data.nModified === 1) {
            console.log("data", data);
            res.status(200).json({ created: true, companyID: data._id });
          } else {
            res.status(200).json({ created: false, companyID: data._id });
          }
        })
        .catch((err) => {
          console.log("260 reeor", err);
          res.status(500).json({ error: err });
        });
    } catch (err) {
      console.log("264 reeor", err);
      res.status(500).json({ error: err.message });
    }
  });
};
exports.getCompany = (req, res, next) => {
  Company.findOne({ _id: req.params._id })
    .populate("basicInfo.businessCategory")
    .populate("basicInfo.businessSubCategory")
    .exec()
    .then((data) => {
      // console.log("data", data)
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.getAllCompanies = (req, res, next) => {
  Company.find({})
    .exec()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.deleteCompany = (req, res, next) => {
  Company.deleteOne({ _id: req.params._id })
    .exec()
    .then((data) => {
      res.status(200).json({ deleted: true });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.fetchCompany = (req, res, next) => {
  Company.findOne({ _id: req.body._id })
    .sort({ createdAt: -1 })
    .skip(req.body.startRange)
    .limit(req.body.limitRange)
    .exec()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.addLocation = (req, res, next) => {
  // console.log("req.body", req.body);
  var locationdetails = req.body.locationDetails;

  insertLocationdetails();
  async function insertLocationdetails() {
    var getData = await fetchLocData(req.body._id, locationdetails);
    // console.log("getData", getData);
    if (getData.length > 0) {
      res.status(200).json({ duplicated: true });
    } else {
      Company.updateOne(
        { _id: req.body._id },
        {
          $push: { locations: locationdetails },
        }
      )
        .exec()
        .then((data) => {
          // console.log("data", data);
          if (data.nModified == 1) {
            res.status(200).json({ created: true });
          } else {
            res.status(200).json({ created: false });
          }
        })
        .catch((err) => {
          res.status(500).json({ error: err });
        });
    }
  }
};

function fetchLocData(_id, locationdetails) {
  return new Promise((resolve, reject) => {
    Company.find(
      {
        _id: _id,
        // "locations.locationType": locationdetails.locationType,
        "locations.addressLine1": locationdetails.addressLine1,
        "locations.addressLine2": locationdetails.addressLine2,
      },
      { "locations.$": 1 }
    )
      .exec()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(0);
      });
  });
}

exports.singleLocation = (req, res, next) => {
  // console.log("req.body", req.body)
  Company.findOne(
    { _id: req.body._id, "locations._id": req.body.locationID },
    { "locations.$": 1 }
  )
    .exec()
    .then((data) => {
      res.status(200).json(data.locations[0]);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.updateSingleLocation = (req, res, next) => {
  // console.log("req.body", req.body)
  var locationdetails = req.body.locationDetails;

  Company.updateOne(
    { _id: req.body._id, "locations._id": req.body.locationID },
    {
      $set: {
        // "locations.$.locationType": locationdetails.locationType,
        "locations.$.branchCode": locationdetails.branchCode,
        "locations.$.addressLine1": locationdetails.addressLine1,
        "locations.$.addressLine2": locationdetails.addressLine2,
        "locations.$.countryCode": locationdetails.countryCode,
        "locations.$.country": locationdetails.country,
        "locations.$.stateCode": locationdetails.stateCode,
        "locations.$.state": locationdetails.state,
        "locations.$.district": locationdetails.district,
        "locations.$.city": locationdetails.city,
        "locations.$.area": locationdetails.area,
        "locations.$.pincode": locationdetails.pincode,
        "locations.$.latitude": locationdetails.latitude,
        "locations.$.longitude": locationdetails.longitude,
      },
    }
  )
    .exec()
    .then((data) => {
      if (data.nModified == 1) {
        res.status(200).json({ updated: true });
      } else {
        res.status(200).json({ updated: false });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.deleteLocation = (req, res, next) => {
  Company.updateOne(
    { _id: req.params._id },
    {
      $pull: { locations: { _id: req.params.locationID } },
    }
  )
    .exec()
    .then((data) => {
      if (data.nModified == 1) {
        res.status(200).json({ deleted: true });
      } else {
        res.status(200).json({ deleted: false });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.addContact = (req, res, next) => {
  console.log("req.body", req.body);
  var contactdetails = req.body.contactDetails;
  Company.find({
    "contactPersons.email": contactdetails.email,
    "contactPersons._id": { $ne: req.body._id },
  })
    .then((datas) => {
      // console.log("datas", datas);
      if (datas.length > 0) {
        res.status(200).json({ duplicated: true });
      } else {
        // console.log("contactdetails", contactdetails);
        Company.updateOne(
          { _id: req.body._id },
          {
            $push: { contactPersons: contactdetails },
          }
        )
          .sort({ createdAt: -1 })
          .exec()
          .then((data) => {
            // console.log("data patch", data);
            if (data.nModified == 1) {
              res.status(200).json({ created: true });
            } else {
              res.status(200).json({ created: false });
            }
          })
          .catch((err) => {
            console.log("err-/;", err);
            res.status(500).json({
              error: err,
            });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.singleContact = (req, res, next) => {
  console.log("req.body", req.body);
  Company.findOne(
    { _id: req.body._id, "contactPersons._id": req.body.contactID },
    { "contactPersons.$": 1 }
  )
    .exec()
    .then((data) => {
      console.log("data", data.contactPersons);
      res.status(200).json(data.contactPersons[0]);
    })
    .catch((err) => {
      // console.log("err", err)
      res.status(500).json({
        error: err,
      });
    });
};

exports.updateSingleContact = (req, res, next) => {
  var contactdetails = req.body.contactDetails;
  // console.log("contactdetails", contactdetails);
  Company.find({
    "contactPersons.email": contactdetails.email,
    _id: { $ne: req.body._id },
    "contactPersons._id": { $ne: req.body.contactID },
  })
    .then((datas) => {
      if (datas.length > 0) {
        res.status(200).json({ duplicated: true });
      } else {
        Company.updateOne(
          { _id: req.body._id, "contactPersons._id": req.body.contactID },
          {
            $set: {
              "contactPersons.$.firstName": contactdetails.firstName,
              "contactPersons.$.lastName": contactdetails.lastName,
              "contactPersons.$.phone": contactdetails.phone,
              "contactPersons.$.whatsappNo": contactdetails.whatsappNo,
              "contactPersons.$.email": contactdetails.email,
              "contactPersons.$.designation": contactdetails.designation,
            },
          }
        )
          .exec()
          .then((data) => {
            if (data.nModified == 1) {
              res.status(200).json({ updated: true });
            } else {
              res.status(200).json({ updated: false });
            }
          })
          .catch((err) => {
            res.status(500).json({ error: err });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.deleteContact = (req, res, next) => {
  // console.log("deleteContact req.params", req.params)
  Company.updateOne(
    { _id: req.params._id },
    {
      $pull: { contactPersons: { _id: req.params.contactID } },
    }
  )
    .exec()
    .then((data) => {
      // console.log("deleteContact data", data)
      if (data.nModified == 1) {
        res.status(200).json({ deleted: true });
      } else {
        res.status(200).json({ deleted: false });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};
exports.deleteService = (req, res, next) => {
  Company.updateOne(
    { _id: req.params._id },
    {
      $pull: { contactPersons: { _id: req.params.contactID } },
    }
  )
    .exec()
    .then((data) => {
      if (data.nModified == 1) {
        res.status(200).json({ deleted: true });
      } else {
        res.status(200).json({ deleted: false });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.addSocialMedia = (req, res, next) => {
  // console.log("req", req.body, req.params._id);
  Company.updateOne(
    { _id: req.params._id },
    {
      $set: {
        "socialMedia.facebook": req.body.facebook,
        "socialMedia.instagram": req.body.instagram,
        "socialMedia.twitter": req.body.twitter,
        "socialMedia.linkedIn": req.body.linkedIn,
        "socialMedia.youTube": req.body.youTube,
      },
    }
  )
    .exec()
    .then((data) => {
      // console.log("data", data);
      res.status(200).json({ created: true, companyID: data._id });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.addAbout = (req, res, next) => {
  // console.log("req", req.body);
  Company.updateOne(
    { _id: req.params._id },
    {
      $set: {
        "about.info": req.body.about,
      },
    }
  )
    .exec()
    .then((data) => {
      res.status(200).json({ created: true, companyID: data._id });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
exports.addServices = (req, res, next) => {
  console.log("req.body", req.body);
  var services = req.body.services;
  Company.updateOne(
    { _id: req.body._id },
    {
      $set: { services: services },
    }
  )
    .exec()
    .then((data) => {
      console.log("data", data);

      if (data.nModified == 1) {
        res.status(200).json({ created: true });
      } else {
        res.status(200).json({ created: false });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
function fetchServicesData(_id, services) {
  return new Promise((resolve, reject) => {
    Company.findOne({ _id: _id })
      .exec()
      .then((data) => {
        resolve(data.services);
      })
      .catch((err) => {
        reject(0);
      });
  });
}

const storage1 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/photos"); // Specify the destination folder for logos
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Rename the uploaded logo
  },
});

const upload1 = multer({ storage: storage });

exports.addPhotos = (req, res, next) => {
  console.log("inside addPhotos");
  upload1array("images", 5)(req, res, function (err) {
    console.log("req.body", req.body); // Check other form fields
    if (err instanceof multer.MulterError) {
      console.log("MulterError code:", err.code);
      console.log("MulterError message:", err.message);
      console.log("MulterError field:", err.field);
      return res
        .status(400)
        .json({ success: false, message: "File upload error" });
    } else if (err) {
      console.log(err, "err");
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }

    const files = req.files; // Access the uploaded files
    if (!files) {
      return res.status(400).send("No files were uploaded.");
    }

    // Process the uploaded files (e.g., save file paths to a database)
    const filePaths = files.map((file) => file.path);
    console.log("filepaths", filepaths);
    Company.updateOne(
      { _id: req.params._id },
      {
        $set: { photos: filePaths },
      }
    )
      .exec()
      .then((data) => {
        console.log("data", data);

        if (data.nModified == 1) {
          res.status(200).json({ created: true });
        } else {
          res.status(200).json({ created: false });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });

    res.send("Files uploaded successfully.");
  });
};
