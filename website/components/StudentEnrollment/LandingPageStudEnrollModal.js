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
        const modal = document.getElementById(props?.modalId);
        console.log("modal",modal)
       
        
             
        modal.classList.add('hidden'); // You might need to adjust this based on your modal library or styling
    };
    const [fields, setFields] = useState({
        fullName: "",
        email: "",
        phone: "",
        city: "",
    });
    const handleChange = (event) => {
        let errorMessage = '';
        if (event.target.name === 'phone') {
            // Check if the value is a number and has exactly 10 digits
            const isValidPhone = /^\d{10}$/.test(event.target.value);
            errorMessage = isValidPhone ? '' : 'Please enter a 10-digit number';
        }
        setFields((prevFields) => ({
            ...prevFields,
            [event.target.name]: event.target.value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [event.target.name]: errorMessage,
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
        // var phoneno = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
        var phoneno = /^[7-9][0-9]{9}$/;


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
        if (fields["phone"].length > 10) {
            errors["phone"] = "Please enter 10 digit mobile number";
            formIsValid = false;
        }
        if (!fields["phone"].match(phoneno)) {
            errors["phone"] = "Please enter valid Mobile Number";
            formIsValid = false;
        }

        if (!fields["city"]) {
            formIsValid = false;
            errors["city"] = "This field is required.";
        }
        if (!fields["city"].match(regSpaceName)) {
            errors["city"] = "Please valid city name ";
            formIsValid = false;
        }
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
        var adminEmailSubject = process.env.LP_STUD_ENROLL_FORM_SUBJECT
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
                        subject: "Confirmation: Registration for March 17th Workshop Successful!",
                        text: "",
                        mail:
                            "Dear " +
                            fields.fullName +
                            ", <br/><br/>" +
                            "Congratulations! You've successfully registered for our workshop on HOW TO GET ENTRY & HIGH SALARY JOB IN IT INDUSTRY!" +
                            `<div style="color: #333; background: #f2f2f2; padding: 20px; margin: 25px 0 25px 0" ><b>HOW TO GET ENTRY & HIGH SALARY JOB IN IT INDUSTRY | 17th March, Sunday | Hindi/English</b>
                            <div style="margin-top:15px"> Date & Time <span style="margin-left:10px">Mar 17, 2024; 4:00 PM to 7:00 PM India</span> </div>
                            </div>`+
                            "Please Click the Link below to Join our WhatsApp Group"+
                            "<br/>" 
                            +`https://chat.whatsapp.com/K7AZJRAkRWm17FwLDXflqu`+
                            "<br/> <br/>"+
                            "WAYS TO JOIN THIS WEBINAR:	"+
                            "<br/> Join from PC, Mac, iPad, or Android "+
                            "<br/><br/> Thanks & Regards, <br/> iAspireIT Training Academy<br/> Office #1B, 2nd Floor, B3, Cerebrum IT Park, Kalyani Nagar, Pune, 411014 <br/> Phone: +91- 7770003690 | www.iaspireit.com | info@iaspireit.com     ",
                           
                        };
                    axios
                        .post("/send-email", formValues1)
                        .then((res) => {

                            if (res.status === 200) {
                                console.log("props.inputData.downloadBrochure", props?.downloadBrochure)
                                // if (props?.downloadBrochure) {
                                //     const link = document.createElement('a');
                                //     link.href = "https://iaspireit.s3.ap-south-1.amazonaws.com/iAspireIT-Executive+-Learning-Brochure-2.pdf";
                                //     link.setAttribute('download', 'Brochure.pdf');
                                //     document.body.appendChild(link);
                                //     link.click();
                                //     document.body.removeChild(link);
                                // }
                                // Swal.fire({
                                //     html: "<span className='mt-5'><span>Thanks for Enrollement<span></span>",
                                //     showConfirmButton: true,
                                //     confirmButtonColor: "#376bff"
                                // });
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
                        subject: adminEmailSubject ,
                        text: "",
                        mail:
                            "Dear Admin, <br/>" +
                            "This is to inform you that we have received a new Registration for 17 March '24 Workshop.<br/>Below are the details of the student:<br/> <br/> " +
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
                                window.location.href = "/lp-thank-you-page"
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

                <div className="relative bg-white rounded-lg shadow">

                    <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5">
                        <h3 className="text-center  text-xl font-semibold text-gray-900">
                        Register for 17th march 2024
                        </h3>
                        <button onClick={closeModal} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-toggle="authentication-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="p-4 md:p-5">
                        <form className="space-y-4" action="#">
                            <div>
                                <label for="fullName" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name <span className="my-auto text-red-600">*</span></label>
                                <input type="text" name="fullName" id="fullName" onChange={handleChange}
                                    value={fields.fullName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Write your full name" />
                                {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
                            </div>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email <span className="my-auto text-red-600">*</span></label>
                                <input type="email" name="email" id="email" onChange={handleChange}
                                    value={fields.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="example@email.com" />
                                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                            </div>
                            <div className='grid grid-cols-2 gap-3'><div>
                                <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Mobile Number <span className="my-auto text-red-600">*</span></label>
                                <input type="phone" name="phone" id="phone" onChange={handleChange}   maxLength={10}
                                    value={fields.phone} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="10 digit number" />
                                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                            </div>
                                <div>
                                    <label for="city" className="block mb-2 text-sm font-medium text-gray-900 ">City<span className="my-auto text-red-600">*</span></label>
                                    <input type="text" name="city" id="city" onChange={handleChange}
                                        value={fields.city} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="" />
                                    {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
                                </div>
                            </div>
                            {(btnLoading == true) ? (
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    Submit &nbsp; <i className="fa fa-spinner fa-pulse"></i>{" "}
                                </button>)
                                : (
                                    <button type="submit" onClick={handleSubmit} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
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