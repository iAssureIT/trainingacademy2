const express = require("express");
const morgan = require("morgan"); // morgan call next function if problem occure
const bodyParser = require("body-parser"); // this package use to formate json data
const mongoose = require("mongoose");
const fs = require("fs");
var nodeMailer = require("nodemailer");
const cron = require("node-cron");
const axios = require("axios");
// for performance
const compression = require('compression');
// for performance

const globalVariable = require("./nodemonConfig.js");

// Routes - CMSork/eComm3/eCommV3/WebApp/admin$
const blockRoutes = require("./api/cms/blocks/routes.js");
const repblockRoutes = require("./api/cms/repetedblocktemp/routes.js");
const pageRoutes = require("./api/cms/pages/routes.js");
const typeMasterRoutes = require("./api/cms/TypeMaster/Routes.js");
const blockTypeMasterRoutes = require("./api/cms/BlockTypeMaster/Routes.js");
const addNewBlockTempMasterRoutes = require("./api/cms/AddNewBlockTemplate/routes.js");
const menubarRoutes = require("./api/cms/routes/menubar.js");
const MyEmitter = require("events");
const sendEmail = require("./api/admin2.0/common/email-service.js");

mongoose.connect("mongodb://127.0.0.1/" + globalVariable.dbname, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.promise = global.Promise;

//=====  Create NodeJs App =====

const app = express();

// for performance
app.use(compression());
app.use(express.static('public'));
// for performance


app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));
// app.use("/static", express.static('./static/'));

const cors = require("cors");

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
  methods: ["OPTIONS", "GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  allowedHeaders: [
    "Content-Type",
    "x-requested-with",
    "Authorization",
    "Accept",
    "token",
  ],
  maxAge: 86400,
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

const myEmitter = new MyEmitter();
// increase the limit/users/post/signup/user
myEmitter.setMaxListeners(11);

myEmitter.emit("event");

const startupRoutes = require("./api/admin2.0/userManagementnew/startupRoutes.js");

// Routes which should handle requests
/*========== Core Admin ===================*/
const systemRoutes = require("./api/admin2.0/systemSecurity/Routes.js");
const usersRoutes = require("./api/admin2.0/userManagementnew/RoutesUsers.js");
const rolesRoutes = require("./api/admin2.0/rolesManagement/RoutesRoles.js");
const masternotificationRoutes = require("./api/admin2.0/notificationManagement/RoutesMasterNotification.js");
const notificationRoutes = require("./api/admin2.0/notificationManagement/RoutesNotification.js");
const consultantApprovalRoutes = require("./api/admin2.0/consultantApproval/routes");

app.use("/startup", startupRoutes);
app.use("/api/auth", systemRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/roles", rolesRoutes);
app.use("/api/masternotifications", masternotificationRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/consultant-approval", consultantApprovalRoutes);
app.use("/api/pages", pageRoutes);
app.use("/api/blocks", blockRoutes);

/*=========== admin2.0 API ===============*/
const MasterBusinessCategory = require("./api/admin2.0/masterBusinessCategory/Routes.js");
const MasterBusinessExpertise = require("./api/admin2.0/masterBusinessCategory/RoutesExpertise.js");
const MasterBusinessSubCategory = require("./api/admin2.0/masterBusinessSubCategory/Routes.js");
const myProfileRoutes = require("./api/admin2.0/myProfile/routes.js");
const EnterpriseProfileRoutes = require("./api/admin2.0/enterprise/routes.js");
const AppointmentSlotsRoutes = require("./api/admin2.0/appointmentSlots/routes.js");
const SearchRoutes = require("./api/admin2.0/search/routes.js");
const AppointmentRoutes = require("./api/admin2.0/appointments/routes.js");
const MyConsultants = require("./api/admin2.0/myconsultants/routes.js");
const MyClients = require("./api/admin2.0/myclients/routes.js");
const Feedback = require("./api/admin2.0/feedback/routes.js");
const Query = require("./api/admin2.0/queries/routes.js");
const Review = require("./api/admin2.0/review/routes.js");
const Orders = require("./api/admin2.0/orders/routes.js");
const Contact = require("./api/admin2.0/contactManagement/routes.js");
const Blogs2 = require("./api/admin2.0/blogManagement/routes.js");
const Dashboard = require("./api/admin2.0/dashboard/routes.js");
const ReportsRoute = require("./api/admin2.0/reports/routes");
const CaseStudyRoutes = require("./api/admin2.0/caseStudyManagement/routes.js");
const JobRoutes = require("./api/admin2.0/jobManagement/routes.js");
const landingPageRoutes = require("./api/admin2.0/leadManagement/routes.js");
// //Payment/Wallet routes
const PaymentRoutes = require("./api/admin2.0/payment/routes.js");
const WalletRoutes = require("./api/admin2.0/mywallet/routes.js");
const JobRun = require("./api/admin2.0/jobrun/routes.js");
// =======
const WebsiteData = require("./api/websiteData/routes.js");

const SearchResults = require("./api/admin2.0/searchResults/routes.js");

const companyInfoRoutes = require("./api/admin2.0/companyInfo/routes.js");
const thankYouNotes = require("./api/admin2.0/thankYouNotes/routes.js");
const testimonials = require("./api/admin2.0/testimonials/routes.js");
const bikeBooking = require("./api/admin2.0/bikeBooking/routes.js");
const testRide = require("./api/admin2.0/testRide/routes.js");
const dealership = require("./api/admin2.0/dealership/routes.js");
const seodetails = require('./api/admin2.0/seodetails/routes.js')

app.use("/api/company-info", companyInfoRoutes);
app.use("/api/thank-you-notes", thankYouNotes);
app.use("/api/testimonials", testimonials);

app.use("/api/bikebooking", bikeBooking);
app.use("/api/testride", testRide);
app.use("/api/dealership", dealership);

//================ admin2.0 ==================
app.use("/api/businesscategory", MasterBusinessCategory);
app.use("/api/business-expertise", MasterBusinessExpertise);
app.use("/api/business-subcategory", MasterBusinessSubCategory);
app.use("/api/myprofile", myProfileRoutes);
app.use("/api/entprofile", EnterpriseProfileRoutes);
app.use("/api/appointmentslots", AppointmentSlotsRoutes);
app.use("/api/search", SearchRoutes);
app.use("/api/appointments", AppointmentRoutes);
app.use("/api/myconsultants", MyConsultants);
app.use("/api/myclients", MyClients);
app.use("/api/feedback", Feedback);
app.use("/api/queries", Query);
app.use("/api/reviews", Review);
app.use("/api/orders", Orders);
app.use("/api/contacts", Contact);
app.use("/api/blogs2", Blogs2);
app.use("/api/dashboard", Dashboard);
app.use("/api/reports", ReportsRoute);
app.use("/api/jobrun", JobRun);
app.use("/api/seodetails", seodetails); //for meta tags
app.use("/api/casestudy",CaseStudyRoutes);
app.use("/api/jobs",JobRoutes)
app.use("/api/contact-page-routes",landingPageRoutes)

app.use("/api/website-data", WebsiteData);
// //================Payment/Wallet===========
app.use("/api/payment", PaymentRoutes);
app.use("/api/wallet", WalletRoutes);

// app.use("/api/sections", SectionRoutes);
// app.use("/api/unitofmeasurmentmaster",unitOfMeasurment);
// app.use("/api/blocktemplate",addNewBlockTempMasterRoutes);
// app.use('/api/blocktemplatebyblocktype',addNewBlockTempMasterRoutes);
// app.use("/api/masternotifications",notificationRoutes);
// app.use("/api/preference",preferenceurl);
// app.use("/api/notifications",notificationRoutes);
app.use(addNewBlockTempMasterRoutes);
app.use(pageRoutes);
app.use(blockRoutes);
app.use(repblockRoutes);
app.use(SearchResults);

app.post("/send-email-ses", async (req, res) => {
  const sendmailVar = await sendEmail(
    [req.body.adminEmail],
    globalVariable.projectName + " Admin <" + globalVariable.SES_EMAIL + ">",
    req.body.subject,
    req.body.content
  );

  console.log("sendmailVar => ", sendmailVar);
  if (sendmailVar) {
    res.status(200).json({ sendmailVar: sendmailVar });
  }
});

app.post("/send-email", (req, res) => {
  console.log("/send-email req => ", req.body);

  let nodemailerValues = {
    host: globalVariable.emailHost,
    port: globalVariable.emailPort,
    auth: {
      user: globalVariable.user,
      pass: globalVariable.pass,
    },
  };

  console.log("nodemailerValues => ", nodemailerValues);

  let transporter = nodeMailer.createTransport(nodemailerValues);

  let mailOptions = {
    from: globalVariable.projectName + "<" + globalVariable.user + ">", // sender address
    to: req.body.email ? req.body.email : req.body.toEmail, // list of receivers
    subject: req.body.subject, // Subject line
    text: req.body.text, // plain text body
    html: req.body.mail, // html body
  };

  console.log("211 mailoptions", mailOptions);

  if (req.body.AddToContacts) {
    var url = "http://localhost:" + globalVariable.port + "/api/contacts/post";
    console.log("url => ", url);
    axios
      .post(url, req.body)
      .then((contactResponse) => {
        console.log("contactResponse => ", contactResponse);

        if (contactResponse.data.success) {
          //now send email to admin

          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log("sendMail error => ", error);
              res.status(500).json({
                message: "Failed",
                data: error,
              });
            }
            if (info) {
              console.log("sendMail info => ", info);
              res.status(200).json({
                message: "Success",
                data: info,
              });
            }
            // res.render('index');
          });
        } else {
          console.log("catch error 242", contactResponse);
          res.status(500).json({
            message: "Error in Contact Insert",
            success: false,
            contactResponse: contactResponse,
          });
        }
      })
      .catch((error) => {
        console.log("catch error 249", error);
        res.status(500).json({
          message: "Error in Contact Insert",
          success: false,
          error: error,
        });
      });
  } else {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("259 sendMail error => ", error);
        return "Failed";
      }
      if (info) {
        console.log("263 sendMail info => ", info);
        res.status(200).json({
          message: "Success",
        });
      }
      res.render("index");
    });
  }
});

app.post("/send-email-mobile", (req, res) => {
  console.log("inside app.js req:", req.body);
  let transporter = nodeMailer.createTransport({
    host: globalVariable.emailHost,
    port: globalVariable.emailPort,
    auth: {
      user: globalVariable.user,
      pass: globalVariable.pass,
    },
  });

  let mailOptions = {
    from: req.body.email, // list of receivers
    to: globalVariable.project + "<" + globalVariable.user + ">", // sender address
    subject: req.body.subject, // Subject line
    text: req.body.text, // plain text body
    html: req.body.mail, // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return "Failed";
    }
    if (info) {
      res.status(200).json({
        message: "Success",
      });
    } else {
      res.status(200).json({
        message: "Failed",
      });
    }
    res.render("index");
  });
});

app.use((req, res, next) => {
  const error = new Error("This Page Is Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  fs.readFile("./index.html", function (err, html) {
    if (err) {
      throw err;
    }
    // res.writeHeader(200, {"Content-Type": "text/html"});
    // res.write(html);

    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
    res.end();
  });
});

module.exports = app;
