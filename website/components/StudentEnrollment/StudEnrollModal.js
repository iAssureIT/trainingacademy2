"use client";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const StudEnrollModal = (props) => {
    const [errors, setErrors] = useState({});
    const [btnLoading, setBtnLoading] = useState("false");
    const [submitted, setSubmitted] = useState(false);
    const closeModal = () => {
        console.log("test")
        const modal = document.getElementById(props.modalId);
        modal.classList.add('hidden'); // You might need to adjust this based on your modal library or styling
    };
    const [fields, setFields] = useState({
        fullName: "",
        email: "",
        phone: "",
        city: "",
    });
    const handleChange = (event) => {
        setFields((prevFields) => ({
            ...prevFields,
            [event.target.name]: event.target.value,
        }));
    };

    const validateForm = () => {
        setBtnLoading(true)

        let errors = {};
        let formIsValid = true;
        var regSpaceName = /[a-zA-Z_]+$/;
        var tempEmail = fields.email.trim();
        var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
        var illegalChars = /[()<>,;:\\"[\]]/;
        var phoneno = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;

        if (!fields["fullName"]) {
            formIsValid = false;
            errors["fullName"] = "This field is required.";
        }
        if (!fields["fullName"].match(regSpaceName)) {
            errors["fullName"] = "Please enter correct Name ";
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
        if (!fields["phone"].match(phoneno)) {
            errors["phone"] = "Please enter valid Mobile Number";
            formIsValid = false;
        }
        // if (!fields["companyName"]) {
        //     formIsValid = false;
        //     errors["companyName"] = "This field is required.";
        // }
        // if (!fields["comments"]) {
        //     formIsValid = false;
        //     errors["comments"] = "This field is required.";
        // }


        setErrors(errors);

        if (Object.keys(errors).length !== 0) {
            // Swal.fire("Validation Error", "One of the field needs some correction!", "error");
        }

        return formIsValid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        var adminEmail = process.env.CONTACT_EMAIL
        if (validateForm()) {
            setSubmitted(true);
            var formValues = {
                fullName: fields.fullName,
                email: fields.email,
                phone: fields.phone,
                city: fields.city,
                status: "new"
            };
            axios
                .post("/api/students/post", formValues)
                .then((data) => {
                    setSubmitted(false);
                    const formValues1 = {
                        toEmail: fields.email,
                        subject: "Thank You for Your Enrollment in Training Academy",
                        text: "",
                        mail:
                            "Dear " +
                            fields.fullName +
                            ", <br/><br/>" +
                            "In the meantime, feel free to explore our website to learn more about our solutions and the range of services we offer. Thank you once again for considering iAspireIT as your trusted technology partner. We look forward to the opportunity to work together and address your IT needs." +
                            "<br/><br/> Best Regards, <br/> Team iAspireIT Training Academy.",
                    };
                    axios
                        .post("/send-email", formValues1)
                        .then((res) => {

                            if (res.status === 200) {
                                console.log("props.inputData.downloadBrochure", props?.downloadBrochure)
                                if (props?.downloadBrochure) {
                                    const link = document.createElement('a');
                                    link.href = "https://iaspireit.s3.ap-south-1.amazonaws.com/iAspireIT-Executive+-Learning-Brochure-2.pdf";
                                    link.setAttribute('download', 'Brochure.pdf');
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                }
                                Swal.fire({
                                    html: "<span className='mt-5'><span>Thanks for Enrollement<span></span>",
                                    showConfirmButton: true,
                                    confirmButtonColor: "#376bff"
                                });
                                // setTimeout(() => {
                                //     window.location.href = "/";
                                // }, 2000);
                                setBtnLoading(false)
                                setCloseModal(true)
                                props.modalId.close()
                                setFields({
                                    fullName: "",
                                    email: "",
                                    phone: "",
                                    city: "",
                                });
                            }
                        })
                        .catch((error) => {
                            console.log("error = ", error);
                        });
                    const formValues2 = {
                        toEmail: adminEmail,
                        subject: "New Enrollment from Training Academy Website",
                        text: "",
                        mail:
                            "Dear Admin, <br/>" +
                            "This is to inform you that we have received a new Enrollment form submission on the Training Academy  website. Below are the details of the student:<br/> <br/> " +
                            "<b>Full Name: </b>" +
                            fields.fullName +
                            "<br/>" +
                            "<b>Email Address: </b>" +
                            fields.email +
                            "<br/>" +
                            "<b>Phone Number: </b>" +
                            fields.phone +
                            "<br/>" +
                            "<b>City: </b>" +
                            fields.city +
                            "<br/><br/>You can access the database of candidates by clicking the link below<br/>" + process.env.WEBSITE_NAME + "/stud-enrollment-list/<br/><br/> Please take the necessary steps to reach out to the prospect promptly and address their inquiry.",
                    };
                    axios
                        .post("/send-email", formValues2)
                        .then((res) => {
                            if (res.status === 200) {

                                setBtnLoading(false)
                                setFields({
                                    fullName: "",
                                    email: "",
                                    phone: "",
                                    city: "",
                                });
                            }
                        })
                        .catch((error) => {
                            console.log("error = ", error);
                        });
                })
                .catch((error) => {
                    Swal.fire(
                        "Data could not be submitted successfully!",
                        error.message,
                        "error"
                    );
                });
        } else {
            setBtnLoading(false)
            // Swal.fire("Validation Issue", "Please correct the errors in the form fields.", "error");
        }
    };
    return (
        <div id={props.modalId} tabIndex="-1" aria-hidden="true" className="block overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative w-full max-w-md max-h-full p-4 mx-auto mt-24">

                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Connect with us
                        </h3>
                        <button onClick={closeModal} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="authentication-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="p-4 md:p-5">
                        <form className="space-y-4" action="#">
                            <div>
                                <label for="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name <span className="my-auto text-red-600">*</span></label>
                                <input type="text" name="fullName" id="fullName" onChange={handleChange}
                                    value={fields.fullName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your Name" />
                                {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
                            </div>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email <span className="my-auto text-red-600">*</span></label>
                                <input type="email" name="email" id="email" onChange={handleChange}
                                    value={fields.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="example@email.com" />
                                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                            </div>
                            <div className='grid grid-cols-2 gap-3'><div>
                                <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number <span className="my-auto text-red-600">*</span></label>
                                <input type="phone" name="phone" id="phone" onChange={handleChange}
                                    value={fields.phone} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />
                                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                            </div>
                                <div>
                                    <label for="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                                    <input type="text" name="city" id="city" onChange={handleChange}
                                        value={fields.city} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />
                                </div>
                            </div>
                            {(btnLoading == true) ? (
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Submit &nbsp; <i className="fa fa-spinner fa-pulse"></i>{" "}
                                </button>)
                                : (
                                    <button type="submit" onClick={handleSubmit} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Submit
                                    </button>
                                )
                            }

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StudEnrollModal;