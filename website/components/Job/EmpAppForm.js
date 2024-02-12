"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const EmpAppForm = (props) => {
    const [btnLoading, setBtnLoading] = useState(false);
    const closeModal = () => {
        console.log("test")
        const modal = document.getElementById("empModal");
        modal.classList.add('hidden'); // You might need to adjust this based on your modal library or styling
    };
    const [fields, setFields] = useState({
        firstName: "",
        lastName: "",
        email: "",
        website: "",
        position: "",
        salary: "",
        startDate: "",
        phone: "",
        prevCompName: "",
        comments: "",
    });
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
    const [btnTxt, setBtnTxt] = useState("Submit");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (process.browser) {
            var pageHeight =
                document.body.scrollHeight > 1780 ? document.body.scrollHeight : 1780;
            // setPageHeight(pageHeight); // Assuming setPageHeight is a function passed as a prop
        }

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
        var phoneno = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;

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
        if (!fields["position"]) {
            formIsValid = false;
            errors["position"] = "This field is required.";
        }
        // if (!fields["phone"].match(phoneno)) {
        //     document.getElementById("mobileError1").innerHTML =
        //         "Please enter valid Mobile Number";
        //     formIsValid = false;
        // }

        setErrors(errors);

        if (Object.keys(errors).length !== 0) {
            // Swal.fire("Validation Error", "One of the field needs some correction!", "error");
        }

        return formIsValid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (validateForm()) {
            setSubmitted(true);

            var formValues = {
                user_id: fields.user_id,
                firstName: fields.firstName,
                lastName: fields.lastName,
                email: fields.email,
                website: fields.website,
                position: fields.position,
                experience: fields.experience,
                salary: fields.salary,
                startDate: fields.startDate,
                phone: fields.phone,
                comments: fields.comments,
            };


            axios
                .post("/api/jobs/post/emp-details", formValues)
                .then((data) => {
                    console.log("data", data)
                    setBtnLoading(false)
                    Swal.fire("Data inserted ", "success");
                    const formValues1 = {
                        toEmail: fields.email,
                        subject: "Your form submitted to  website Admin.",

                        mail:
                            "Dear " +
                            fields.firstName + " " + fields.lastName + "" +
                            ", <br/><br/>" +
                            "<b>Your Email: </b>" +
                            fields.email +
                            "<br/><br/>" +
                            "Your data has been successfully delivered to the admin! We will get back to you shortly. <br/> <br/> " +

                            "<br/><br/> Thank You, <br/> Support Team, <br/> iAssureIT website Admin.",
                    };
                    console.log("notification", formValues1);
                    axios
                        .post("/send-email", formValues1)
                        .then((res) => {
                            console.log("res 117", res);
                            if (res.status === 200) {
                                Swal.fire({
                                    html: "<span className='mt-5'><span>Thank you for contacting us.<span></br><span>We will get back to you shortly.</span></span>",
                                    showCloseButton: true,
                                });
                                window.location.href = `/career/career1`
                                setFields({
                                    firstName: "",
                                    lastName: "",
                                    email: "",
                                    website: "",
                                    position: "",
                                    experience: "",
                                    salary: "",
                                    startDate: "",
                                    phone: "",
                                    comments: "",
                                });
                            }
                        })
                        .catch((error) => {
                            console.log("error = ", error);
                        });
                    const formValues2 = {
                        toEmail: adminEmail,
                        subject: "New Contact Form Submission on iAssureIT Website",
                        text: "",
                        mail:
                            "Dear Admin, <br/>" +
                            "This is to inform you that we have received a new candidate details<br/> <br/> " +
                            "<b>Full Name: </b>" +
                            fields.firstName + fields.lastName +
                            "<br/>" +
                            "<b>Email: </b>" +
                            fields.email +
                            "<br/>" +
                            "<b>Phone Number: </b>" +
                            fields.phone +
                            "<br/><br/> ",
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
                                    website: "",
                                    position: "",
                                    experience: "",
                                    salary: "",
                                    startDate: "",
                                    phone: "",
                                    comments: "",
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
                        website: "",
                        position: "",
                        experience: "",
                        salary: "",
                        startDate: "",
                        phone: "",
                        comments: "",
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
            // Swal.fire("Validation Issue", "Please correct the errors in the form fields.", "error");
        }
    };
    return (
        <div id={"empModal"} tabIndex="-1" aria-hidden="true" className="my-10 block overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full mx-auto my-auto">

                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                           Employee Form
                        </h3>
                        <button onClick={closeModal} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <form id="jobForm" className="my-6 px-10 md:px-5 ">
                        <div className="grid md:grid-cols-2 md:gap-x-5 ">
                            <div className=" ">
                                <label className="label2">
                                    First Name
                                    <span className="asterik text-red-600">*</span>
                                </label>
                                <div className=" relative">
                                    <input
                                        type="text"
                                        maxLength=""
                                        className=" stdInput2"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                        onChange={handleChange}
                                        value={fields.firstName}
                                    />

{errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                                </div>
                            </div>
                            <div className="">
                                <label className="label2">
                                    Last Name
                                    <span className="asterik text-red-600">*</span>
                                </label>
                                <div className=" relative">
                                    <input
                                        type="text"
                                        maxLength=""
                                        className=" stdInput2 bg-gray-50"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                        onChange={handleChange}
                                        value={fields.lastName}
                                    />
                                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                                </div>
                            </div>

                        </div>
                        <div className="grid md:grid-cols-2   md:gap-x-5">
                            <div className="my-3">
                                <label htmlFor="Email" className="label2 ">
                                    Email <span className="text-red-600 asterik">*</span>
                                </label>
                                <div className="px-0">
                                    <input
                                        type="text"
                                        maxLength="200"
                                        className=" stdInput2"
                                        id="email"
                                        name="email"
                                        placeholder="email"
                                        onChange={handleChange}
                                        value={fields.email}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>
                            </div>
                            <div className="my-3 ">
                                <label htmlFor="website" className="label2 ">
                                    Portfolio website
                                </label>
                                <div className="px-0">
                                    <input
                                        type="text"
                                        maxLength="200"
                                        className=" stdInput2"
                                        id="website"
                                        name="website"
                                        placeholder="website"
                                        onChange={handleChange}
                                        value={fields.website}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2  md:gap-x-5 ">
                            <div className="w-full my-3">
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
                            <div className="my-3">
                                <label htmlFor="salary" className="label2 ">
                                    Salary requirements
                                </label>
                                <div className="px-0">
                                    <input
                                        type="text"
                                        maxLength="200"
                                        className=" stdInput2"
                                        id="salary"
                                        name="salary"
                                        placeholder="salary"
                                        onChange={handleChange}
                                        value={fields.salary}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2  md:gap-x-5">
                            <div className="my-3">
                                <label htmlFor="startDate" className="label2 ">
                                    When can you start?

                                </label>
                                <div className="px-0">
                                    <input
                                        type="date"
                                        maxLength="200"
                                        className=" stdInput2"
                                        id="startDate"
                                        name="startDate"
                                        placeholder="startDate"
                                        onChange={handleChange}
                                        value={fields.startDate}
                                    />
                                </div>
                            </div>
                            <div className="my-3">
                                <label htmlFor="phone" className="label2 ">
                                    Phone
                                </label>
                                <div className="px-0">
                                    <input
                                        type="number"
                                        maxLength="12"
                                        className=" stdInput2"
                                        id="phone"
                                        name="phone"
                                        placeholder="Phone"
                                        onChange={handleChange}
                                        value={fields.phone}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2  md:gap-x-5">
                            <div className="my-3">
                                <label htmlFor="prevCompName" className="label2 ">
                                    Last company you worked for
                                </label>
                                <div className="px-0">
                                    <input
                                        type="text"
                                        maxLength="200"
                                        className=" stdInput2"
                                        id="prevCompName"
                                        name="prevCompName"
                                        placeholder=""
                                        onChange={handleChange}
                                        value={fields.prevCompName}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=" gap-4">
                            <div className="my-3 w-full">
                                <label htmlFor="comments" className="label2 ">
                                    Reference / Comments / Questions
                                </label>
                                <div className="px-0">
                                    <textarea
                                        type="text"
                                        maxLength="200"
                                        className=" stdInput2"
                                        id="comments"
                                        name="comments"
                                        rows={4}
                                        placeholder=" Reference / Comments / Questions"
                                        onChange={handleChange}
                                        value={fields.comments}
                                    />
                                </div>
                            </div>
                        </div>
                        {(btnLoading == true) ? (
                            <button type="submit" className="mb-5 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Submit &nbsp; <i className="fa fa-spinner fa-pulse"></i>{" "}
                            </button>)
                            : (
                                <button type="submit" onClick={handleSubmit} className="mb-5 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Submit
                                </button>
                            )
                        }

                    </form>
                </div>
            </div>
        </div>

    );
}

export default EmpAppForm;
