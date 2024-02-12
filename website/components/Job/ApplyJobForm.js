"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import AWS from "aws-sdk";
const ApplyJobForm = (props) => {
    const [btnLoading, setBtnLoading] = useState(false);
    const [file, setFile] = useState(null);
    const [jobData, setJobData] = useState(null);
    const handleFileChange = (e) => {

        const file = e.target.files[0];
        setFile(file);
        setFields((prevFields) => ({
            ...prevFields,
            [e.target.name]: file,
        }));
    };
    const handleCancelFile = () => {
        setFile(null);
    };
    const [fields, setFields] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        comments: "",
        file: "",
        currentLocation: "",
        jobType: "",
        totalExperience: "",
        relevantExperience: "",
        currentCTC: "",
        expectedCTC: "",
        noticePeriod: "",
        keySkills: "",
        // website: "",
        // position: "",
        // salary: "",
        // startDate: "",
        // prevCompName: "",

    });
    const [jobTypesList] = useState(["Full Time", "Part Time", "Intership"]);
    const [positionList] = useState([
        "UI/UX Designer",
        "Technical Support",
        "Web Developers",
        "Computer Systems Analyst ",
        "IT Security",
        "Network Engineer",
        "Project Manager",
        "HR",
        "Quality Assurance Tester ",
        "Director",
    ]);
    const [errors, setErrors] = useState({});
    useEffect(() => {
        axios
            .get("/api/jobs/get/single-job/" + props?.job_id)
            .then(res => {
                console.log("data -> ", res.data);
                if (res?.data) {
                    setJobData(res?.data);
                }
            })
            .catch((error) => {
                Swal.fire(
                    "Data not found",
                    error.message,
                    "error"
                );
            });
    }, [])
    // useEffect(() => {
    //     // Replace these values with your own AWS credentials and S3 bucket information
    //     const accessKeyId = "AKIA3AEHXOXRCLMGLNFB";
    //     const secretAccessKey = "beaRNgo85JQoL4qKtpp94MWNZciVuRjkWc+6TTlF";
    //     const region = 'ap-south-1';
    //     const bucketName = 'iassureitwebsitev5';
    //     const folderName = ''; // Optional: Add a folder in your bucket

    //     const s3 = new AWS.S3({
    //         accessKeyId,
    //         secretAccessKey,
    //         region,
    //     });

    //     const params = {
    //         Bucket: bucketName,
    //         Prefix: folderName, // Optional: List files inside a specific folder
    //     };

    //     s3.listObjectsV2(params, (err, data) => {
    //         if (err) {
    //             console.error('Error fetching file list from S3:', err);
    //             return;
    //         }

    //         const files = data.Contents.map((file) => ({
    //             key: file.Key,
    //             lastModified: file.LastModified,
    //             size: file.Size,
    //         }));
    //         console.log("files", files)
    //         setFileList(files);

    //     });
    // }, []);

    useEffect(() => {
        const userDetails = localStorage.getItem("userDetails");
        if (userDetails) {
            const userDetailsParse = JSON.parse(userDetails);
            setFields((prevFields) => ({ ...prevFields, user_id: userDetailsParse.user_id }));
        }
    }, []);


    const handleChange = (event) => {
        setFields((prevFields) => ({
            ...prevFields,
            [event.target.name]: event.target.value,
        }));
    };

    const validateForm = () => {
        // setBtnLoading(true)
        let errors = {};
        let formIsValid = true;
        var regSpaceName = /[a-zA-Z_]+$/;
        var tempEmail = fields.email.trim();
        var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
        var illegalChars = /[()<>,;:\\"[\]]/;
        // var phoneno = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
        var phoneno = /^(\+[0-9]{1,5})?([7-9][0-9]{9})$/;

        console.log(fields);

        if (!fields["firstName"]) {
            formIsValid = false;
            errors["firstName"] = "This field is required.";
        }
        if (!fields["firstName"].match(regSpaceName)) {
            errors["firstName"] = "Please enter correct Name ";
            formIsValid = false;
        }
        if (!fields["lastName"]) {
            formIsValid = false;
            errors["lastName"] = "This field is required.";
        }
        if (!fields["lastName"].match(regSpaceName)) {
            errors["lastName"] = "Please enter correct Name ";
            formIsValid = false;
        }

        if (fields["phone"].length <= 0) {
            errors["phone"] = "This field is required.";
            formIsValid = false;
        } else if (!fields["phone"].match(phoneno)) {
            formIsValid = false;
            errors["phone"] = "Please enter correct phone number";
        }

        if (!fields["email"].match(regSpaceName)) {
            errors["email"] = "Please enter correct Name ";
            formIsValid = false;
        }
        if (fields["email"].length <= 0) {
            errors["email"] = "Please enter your Email";
            formIsValid = false;
        } else if (!emailFilter.test(tempEmail)) {
            //test email for illegal characters
            errors["email"] = "Please enter a valid email address.";
            formIsValid = false;
        } else if (fields["email"].match(illegalChars)) {
            errors["email"] = "Email contains invalid characters.";
            formIsValid = false;
        }
        // if (!fields["position"]) {
        //     formIsValid = false;
        //     errors["position"] = "This field is required.";
        // }
        if (!fields["totalExperience"]) {
            formIsValid = false;
            errors["totalExperience"] = "This field is required.";
        }
        if (!fields["relevantExperience"]) {
            formIsValid = false;
            errors["relevantExperience"] = "This field is required.";
        }
        if (!fields["currentCTC"]) {
            formIsValid = false;
            errors["currentCTC"] = "This field is required.";
        }
        if (!fields["expectedCTC"]) {
            formIsValid = false;
            errors["expectedCTC"] = "This field is required.";
        }
        if (!fields["noticePeriod"]) {
            formIsValid = false;
            errors["noticePeriod"] = "This field is required.";
        }
        if (!fields["keySkills"]) {
            formIsValid = false;
            errors["keySkills"] = "This field is required.";
        }

        if (!fields["file"]) {
            formIsValid = false;
            errors["file"] = "This field is required.";
        } else {
            const type = fields["file"].type.toLowerCase()
            if (!(type == 'application/pdf' || type == 'application/docx' || type == 'application/doc')) {
                formIsValid = false;
                errors["file"] = "Unsupported file format.";
            }
        }


        setErrors(errors);

        if (Object.keys(errors).length !== 0) {
            // Swal.fire("Validation Error", "One of the field needs some correction!", "error");
        }

        return formIsValid;
    };
    const handleReset = () => {
        event.preventDefault();
        setFile(null);
        setFields({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            currentLocation: "",
            jobType: "",
            totalExperience: "",
            relevantExperience: "",
            currentCTC: "",
            expectedCTC: "",
            noticePeriod: "",
            keySkills: "",
            file: "",
        });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        var adminEmail = process.env.NEXT_PUBLIC_CAREERPAGE_EMAIL;
        console.log("inside file upload");

        try {
            if (validateForm()) {


                const s3 = new AWS.S3({
                    accessKeyId: process.env.ACCESSKEYID,
                    secretAccessKey: process.env.SECRETACCESSKEY,
                    region: process.env.REGION
                });

                const fileExt = (file.name).split('.').pop();
                const keyName = fields.firstName + '_' + fields.lastName + '_resume.' + fileExt;
                const params = {
                    Bucket: process.env.BUCKETNAME,
                    Key: keyName,
                    Body: file,
                    ACL: "public-read",
                };

                const fileData = await s3.upload(params).promise();

                var formValues = {
                    user_id: fields.user_id,
                    firstName: fields.firstName,
                    lastName: fields.lastName,
                    phone: fields.phone,
                    email: fields.email,
                    currentLocation: fields.currentLocation,
                    jobType: fields.jobType,
                    totalExperience: fields.totalExperience,
                    relevantExperience: fields.relevantExperience,
                    currentCTC: fields.currentCTC,
                    expectedCTC: fields.expectedCTC,
                    noticePeriod: fields.noticePeriod,
                    keySkills: fields.keySkills,
                    resume: fileData.Location,
                    jobTitle: jobData?.jobTitle,
                };

                console.log("formValues", formValues)
                axios
                    .post("/api/emp-job-apply/post/emp-details", formValues)
                    .then((data) => {
                        console.log("data", data)
                        event.preventDefault();
                        setBtnLoading(false)
                        Swal.fire({
                            title: 'Success',
                            text: 'Your application has been submitted successfully',
                            icon: 'success',
                            showConfirmButton: false,
                            showCloseButton: true,
                            customClass: {
                                popup: 'swal-success-popup', // Custom class for the popup container
                                title: 'swal-success-title', // Custom class for the title
                                content: 'swal-success-content', // Custom class for the content
                            },
                            header: '<div class="flex items-center justify-between p-2 bg-blue-700 text-white"><span class="custom-header">Custom Header</span></div>',

                            showCloseButton: true,
                            closeButtonHtml: '<span class="custom-close-button">&times;</span>', // Custom close button (HTML)
                        });

                        const formValues1 = {
                            toEmail: fields.email,
                            subject: "Your form submitted to  website Admin.",
                            mail:
                                "Dear " +
                                fields.firstName + " " + fields.lastName + "" +
                                ", <br/><br/>" +
                                'Thank you for submitting your application for the role of ' + jobData.jobTitle + '. If your resume meets the shortlisting criteria, our HR team will reach out to you.' + "<br/> <br/>" +

                                "<br/><br/> Thank You",
                        };
                        console.log("notification", formValues1);
                        axios
                            .post("/send-email", formValues1)
                            .then((res) => {
                                console.log("res 117", res);
                                if (res.status === 200) {
                                    // Swal.fire({
                                    //     html: "<span className='mt-5'><span>Thank you for contacting us.<span></br><span>We will get back to you shortly.</span></span>",
                                    //     showCloseButton: true,
                                    // });
                                    window.location.href = `/career/career1`
                                    setTimeout(() => {
                                        window.location.href = `/career/career2`
                                    }, 3000);
                                    setFields({
                                        firstName: "",
                                        lastName: "",
                                        email: "",
                                        phone: "",
                                        currentLocation: "",
                                        jobType: "",
                                        totalExperience: "",
                                        relevantExperience: "",
                                        currentCTC: "",
                                        expectedCTC: "",
                                        noticePeriod: "",
                                        keySkills: "",
                                        file: "",
                                    });
                                }
                            })
                            .catch((error) => {
                                console.log("error = ", error);
                            });
                        const formValues2 = {
                            toEmail: adminEmail,
                            subject: "Submission of Application for the"+ jobData.jobTitle +"Position",
                            text: "",
                            mail:
                                "Dear HR Department,<br/>" +
                                "I trust this message finds you well. we have received a new application for the vacant position of" +jobData.jobTitle+". Below, you will find the candidate's details:"+
                                "<b>Name: </b>" +
                                fields.firstName + fields.lastName +
                                "<br/>" +
                                "<b>Email: </b>" +
                                fields.email +
                                "<br/>" +
                                "<b>Mobile Number: </b>" +
                                fields.phone +
                                "<br/>" +
                                "<b>Location: </b>" +
                                fields.location +
                                "<br/>" +
                                "<b>Job Type: </b>" +
                                fields.jobType +
                                "<br/>" +
                                "<b>Total Experience : </b>" +
                                fields.totalExperience +
                                "<br/>" +
                                "<b>Relevant Experience    : </b>" +
                                fields.relevantExperience +
                                "<br/>" +
                                "<b>Current CTC (Current Compensation) : </b>" +
                                fields.currentCTC +
                                "<br/>" +
                                "<b>Expected CTC (Expected Compensation): </b>" +
                                fields.expectedCTC +
                                "<br/>" +
                                "<b>Notice Period : </b>" +
                                fields.noticePeriod +
                                "<br/>" +
                                "<b>Key Skills: </b>" +
                                fields.keySkills +
                                "<br/><br/> "+
                               " To download the Resume please click below link:"+"<br/>" +
                               fileData?.Location +
                               "<br/><br/> "+
                               "Thank you for your time and consideration!"
,
                        };
                        axios
                            .post("/send-email", formValues2)
                            .then((res) => {
                                if (res.status === 200) {
                                    Swal.fire({
                                        html: "<span className='mt-5 p-5'><span>Thank you for contacting us.<span></br><span>We will get back to you shortly.</span></span>",
                                        showConfirmButton: true,
                                        confirmButtonColor: "#376bff"
                                    });
                                    setBtnLoading(false)
                                    setFields({
                                        firstName: "",
                                        lastName: "",
                                        email: "",
                                        phone: "",
                                        currentLocation: "",
                                        jobType: "",
                                        totalExperience: "",
                                        relevantExperience: "",
                                        currentCTC: "",
                                        expectedCTC: "",
                                        noticePeriod: "",
                                        keySkills: "",
                                        file: "",

                                    });
                                }
                            })
                            .catch((error) => {
                                console.log("error = ", error);
                            });
                        setFields({
                            firstName: "",
                            lastName: "",
                            email: "",
                            phone: "",
                            currentLocation: "",
                            jobType: "",
                            totalExperience: "",
                            relevantExperience: "",
                            currentCTC: "",
                            expectedCTC: "",
                            noticePeriod: "",
                            keySkills: "",
                            file: "",
                        });
                        // window.location.href = `/career/career2`;
                    })
                    .catch((error) => {
                        Swal.fire(
                            "Data could not be submitted successfully!",
                            error.message,
                            "error"
                        );
                    });
            } else {
                Swal.fire("Validation Issue", "Please correct the errors in the form fields.", "error");
            }
        } catch (error) {
            console.error('Error uploading file to S3:', error);
        }




    };
    return (
        <div className=" md:w-4/5 lg:w-5/6 xl:w-1/2 mx-auto">
            <div className="relative bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6 ">
                <div className="flex items-center justify-between p-4 md:py-3 md:px-4 rounded-t dark:border-gray-600">
                    <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 dark:text-white">
                        {jobData?.jobTitle}
                    </h3>
                </div>
                <form id="jobForm" className="my-6 px-2 md:px-5 ">
                    <div className="grid md:grid-cols-2 md:gap-x-5 ">
                        <div className=" ">
                            <label className="label2">
                                First Name
                                <span className="asterik text-red-600">*</span>
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 focus:outline-slate-200 text-sm text-gray-900  border rounded-e-0 border-gray-300 rounded-s-md ">
                                    <i className="fa-regular fa-user "></i>
                                </span>
                                <input
                                    type="text"
                                    className="focus:outline-slate-300 rounded-none rounded-e-lg  border block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5   "
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Enter Your First Name"
                                    onChange={handleChange}
                                    value={fields.firstName}
                                />
                            </div>
                            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}

                            {/* <div className="flex">
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md ">
                                    <i className="fa-regular fa-user "></i>
                                </span>
                                <input type="text" id="website-admin" className=" rounded-none rounded-e-lg  border block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5   " placeholder="elonmusk" />
                            </div> */}
                        </div>
                        <div className="">
                            <label className="label2">
                                Last Name
                                <span className="asterik text-red-600">*</span>
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 focus:outline-slate-200 text-sm  border rounded-e-0 border-gray-300 rounded-s-md ">
                                    <i className="fa-regular fa-user "></i>
                                </span>
                                <input
                                    type="text"
                                    className=" focus:outline-slate-300 rounded-none rounded-e-lg  border block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 "
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Enter Your Last Name"
                                    onChange={handleChange}
                                    value={fields.lastName}
                                />
                            </div>
                            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2   md:gap-x-5">
                        <div className="my-2">
                            <label htmlFor="phone" className="label2 ">
                                Mobile Number<span className="text-red-600 asterik">*</span>
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 focus:outline-slate-200 text-sm text-gray-900  border rounded-e-0 border-gray-300 rounded-s-md ">
                                    <i className="fa fa-mobile-screen-button"></i>
                                </span>
                                <input
                                    type="text"
                                    className=" focus:outline-slate-300 rounded-none rounded-e-lg  border block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter Your Mobile Number"
                                    onChange={handleChange}
                                    value={fields.phone}
                                />
                            </div>
                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}

                        </div>
                        <div className="my-2">
                            <label htmlFor="email" className="label2 ">
                                Email <span className="text-red-600 asterik">*</span>
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 focus:outline-slate-200 text-sm text-gray-900  border rounded-e-0 border-gray-300 rounded-s-md ">
                                    <i className="fa-regular fa-envelope"></i>
                                </span>
                                <input
                                    type="text"
                                    className=" focus:outline-slate-300 rounded-none rounded-e-lg  border block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                                    id="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    onChange={handleChange}
                                    value={fields.email}
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2   md:gap-x-5">
                        <div className="my-2 ">
                            <label htmlFor="currentLocation" className="label2 ">
                                Current Location
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 focus:outline-slate-200 text-sm text-gray-900  border rounded-e-0 border-gray-300 rounded-s-md ">
                                    <i className="fa fa-location-dot"></i>
                                </span>
                                <input
                                    type="text"
                                    className=" focus:outline-slate-300 rounded-none rounded-e-lg  border block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                                    id="currentLocation"
                                    name="currentLocation"
                                    placeholder="Enter Your Current Location"
                                    onChange={handleChange}
                                    value={fields.currentLocation}
                                />
                            </div>
                        </div>
                        <div className="my-2 ">
                            <label
                                className="label2 "
                                htmlFor="jobType"
                            >
                                Job Type
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 focus:outline-slate-200 text-sm text-gray-900  border rounded-e-0 border-gray-300 rounded-s-md ">
                                    <i className="fa fa-briefcase"></i>
                                </span>
                                <select
                                    className="focus:outline-slate-300 rounded-none rounded-e-lg  border block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                                    id="jobType"
                                    name="jobType"
                                    onChange={handleChange}
                                    autoComplete="off"
                                    value={
                                        fields.jobType
                                            ? fields.jobType
                                            : ""
                                    }
                                >
                                    <option value="">--Select Job Type--</option>
                                    {jobTypesList && jobTypesList.length > 0
                                        ? jobTypesList.map((data, i) => {
                                            return (
                                                <option key={i} value={data}>
                                                    {data}
                                                </option>
                                            );
                                        })
                                        : "null"}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2   md:gap-x-5">
                        <div className="my-2 ">
                            <label htmlFor="totalExperience" className="label2 ">
                                Total Experience<span className="text-red-600 asterik">*</span>
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 focus:outline-slate-200 text-sm text-gray-900  border rounded-e-0 border-gray-300 rounded-s-md ">
                                    <i className="fa fa-chalkboard-user"></i>
                                </span>
                                <input
                                    type="text"
                                    className=" focus:outline-slate-300 rounded-none rounded-e-lg  border block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                                    id="totalExperience"
                                    name="totalExperience"
                                    placeholder="Enter Your Total Experience"
                                    onChange={handleChange}
                                    value={fields.totalExperience}
                                />
                            </div>
                            {errors.totalExperience && <p className="text-red-500 text-xs mt-1">{errors.totalExperience}</p>}
                        </div>
                        <div className="my-2 ">
                            <label htmlFor="relevantExperience" className="label2 ">
                                Relevant Experience<span className="text-red-600 asterik">*</span>
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 focus:outline-slate-200 text-sm text-gray-900  border rounded-e-0 border-gray-300 rounded-s-md ">
                                    <i className="fa-solid fa-chalkboard-user"></i>
                                </span>
                                <input
                                    type="text"
                                    className=" focus:outline-slate-300 rounded-none rounded-e-lg  border block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                                    id="relevantExperience"
                                    name="relevantExperience"
                                    placeholder="Enter Your Relevant Experience"
                                    onChange={handleChange}
                                    value={fields.relevantExperience}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2   md:gap-x-5">
                        <div className="my-2 ">
                            <label htmlFor="currentCTC" className="label2 ">
                                Current CTC<span className="text-red-600 asterik">*</span>
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 focus:outline-slate-200 text-sm text-gray-900  border rounded-e-0 border-gray-300 rounded-s-md ">
                                    <i className="fa-solid fa-indian-rupee-sign"></i>
                                </span>
                                <input
                                    type="text"
                                    className=" focus:outline-slate-300 rounded-none rounded-e-lg  border block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                                    id="currentCTC"
                                    name="currentCTC"
                                    placeholder="Enter Your Current CTC"
                                    onChange={handleChange}
                                    value={fields.currentCTC}
                                />
                            </div>
                            {errors.currentCTC && <p className="text-red-500 text-xs mt-1">{errors.currentCTC}</p>}
                        </div>
                        <div className="my-2 ">
                            <label htmlFor="expectedCTC" className="label2 ">
                                Expected CTC<span className="text-red-600 asterik">*</span>
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 focus:outline-slate-200 text-sm text-gray-900  border rounded-e-0 border-gray-300 rounded-s-md ">
                                    <i className="fa-solid fa-indian-rupee-sign"></i>
                                </span>
                                <input
                                    type="text"
                                    className=" focus:outline-slate-300 rounded-none rounded-e-lg  border block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                                    id="expectedCTC"
                                    name="expectedCTC"
                                    placeholder="Enter Your Expected CTC"
                                    onChange={handleChange}
                                    value={fields.expectedCTC}
                                />
                            </div>
                            {errors.expectedCTC && <p className="text-red-500 text-xs mt-1">{errors.expectedCTC}</p>}
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2   md:gap-x-5">
                        <div className="my-2 ">
                            <label htmlFor="noticePeriod" className="label2 ">
                                Notice Period<span className="text-red-600 asterik">*</span>
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 focus:outline-slate-200 text-sm text-gray-900  border rounded-e-0 border-gray-300 rounded-s-md ">
                                    <i className="fa-solid fa-calendar-days"></i>
                                </span>
                                <input
                                    type="text"
                                    className=" focus:outline-slate-300 rounded-none rounded-e-lg  border block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                                    id="noticePeriod"
                                    name="noticePeriod"
                                    placeholder="Enter Your Notice Period"
                                    onChange={handleChange}
                                    value={fields.noticePeriod}
                                />
                            </div>
                            {errors.noticePeriod && <p className="text-red-500 text-xs mt-1">{errors.noticePeriod}</p>}
                        </div>
                    </div>
                    {/* <div className="grid md:grid-cols-2  md:gap-x-5 ">
                        <div className="w-full my-2">
                            <label
                                className="label2 "
                                htmlFor="position"
                            >
                                Position  <span className="asterik text-red-600">*</span>
                            </label>
                            <select
                                className="w-full bg-gray-50 border border-exlightGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                id="position"
                                name="position"
                                onChange={handleChange}

                                autoComplete="off"
                                value={
                                    fields.position
                                        ? fields.position
                                        : ""
                                }
                            >
                                <option value="">--Select--</option>
                                {positionList && positionList.length > 0
                                    ? positionList.map((data, i) => {
                                        return (
                                            <option key={i} value={data}>
                                                {data}
                                            </option>
                                        );
                                    })
                                    : "null"}
                            </select>
                            {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position}</p>}
                        </div>
                        <div className="my-2">
                            <label htmlFor="salary" className="label2 ">
                                Salary Expectation
                            </label>
                            <div className="px-0">
                                <input
                                    type="number"
                                    maxLength="200"
                                    className=" stdInput3"
                                    id="salary"
                                    name="salary"
                                    placeholder="2,50,000"
                                    onChange={handleChange}
                                    value={fields.salary}
                                    style={{
                                        WebkitAppearance: 'none', // for webkit-based browsers
                                        MozAppearance: 'textfield', // for Firefox
                                    }}
                                />
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="grid md:grid-cols-2  md:gap-x-5">
                        <div className="my-2">
                            <label htmlFor="startDate" className="label2 ">
                                When can you start?

                            </label>
                            <div className="px-0">
                                <input
                                    type="date"
                                    maxLength="200"
                                    className=" stdInput3"
                                    id="startDate"
                                    name="startDate"
                                    placeholder="startDate"
                                    onChange={handleChange}
                                    value={fields.startDate}
                                />
                            </div>
                        </div>
                       
                    </div> */}
                    {/* <div className="grid   md:gap-x-5">
                        <div className="my-2">
                            <label htmlFor="prevCompName" className="label2 ">
                                Last company you worked for
                            </label>
                            <div className="px-0">
                                <input
                                    type="text"
                                    maxLength="200"
                                    className=" stdInput3"
                                    id="prevCompName"
                                    name="prevCompName"
                                    placeholder=""
                                    onChange={handleChange}
                                    value={fields.prevCompName}
                                />
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="my-2 ">
                            <label htmlFor="website" className="label2 ">
                                Portfolio website
                            </label>
                            <div className="px-0">
                                <input
                                    type="text"
                                    maxLength="200"
                                    className=" stdInput3"
                                    id="website"
                                    name="website"
                                    placeholder="website"
                                    onChange={handleChange}
                                    value={fields.website}
                                />
                            </div>
                        </div> */}
                    <div className=" gap-4">
                        <div className="my-2 w-full">
                            <label htmlFor="keySkills" className="label2 ">
                                Key Skills<span className="text-red-600 asterik">*</span>
                            </label>
                            <div className="px-0">
                                <textarea
                                    // type="text"
                                    className=" stdInput3"
                                    id="keySkills"
                                    name="keySkills"
                                    rows={3}
                                    placeholder=" Add your Skills Sets"
                                    onChange={handleChange}
                                    value={fields.keySkills}
                                />
                                {errors.keySkills && <p className="text-red-500 text-xs mt-1">{errors.keySkills}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="my-2">
                        <label className="label2 ">
                            Resume Upload  <span className="text-red-600 asterik">*</span>
                        </label>
                        <div className="px-0 border-dashed  border-2">
                            <input
                                type="file"
                                className="resumeUpload"
                                id="file"
                                name="file"
                                onChange={handleFileChange}
                                hidden
                            />
                            <div className="w-full">
                                <label className="newFile mx-auto mt-10 mb-4 rounded-full px-5 py-2 border-blue-500" for="file">Upload Resume</label>
                                <div className="text-center">Supported Formals: doc, docx, Pdf, upto 2MB</div>
                                {/* <div id="selectedFileName" className="w-full text-center">{file?.name}</div> */}
                                {file && (
                                    <div className="flex items-center justify-center mt-2">
                                        <div className="w-full text-right my-3">{file.name}</div>
                                        <button onClick={handleCancelFile} className="ml-2 -mt-4 text-red-500 mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M13.293 6.293a1 1 0 011.414 1.414L11.414 11l3.293 3.293a1 1 0 01-1.414 1.414L10 12.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 11 5.293 7.707a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                            </div>

                            {errors.file && <p className="text-red-500 text-xs mt-1">{errors.file}</p>}
                        </div>
                    </div>
                    <div className=" mt-8 flex justify-end  gap-x-5">
                        <button onClick={handleReset} className=" border font-medium rounded-lg text-lg px-9 py-2.5 text-center border-blue-700 text-blue-700 bg-transparent hover:bg-blue-700 hover:text-white">Cancel</button>
                        {
                            (btnLoading == true) ? (
                                <button type="submit" className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Submit &nbsp; <i className="fa fa-spinner fa-pulse"></i>{" "}
                                </button>
                            )
                                : (
                                    <button type="submit" onClick={handleSubmit} className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Submit <i className={"fa-solid  fa-angle-double-right ml-1"}></i>
                                    </button>
                                )
                        }
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ApplyJobForm;
