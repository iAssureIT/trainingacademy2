"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {
  Typography,
  IconButton,
} from "@material-tailwind/react";
import dynamic from "next/dynamic";
const Drawer = dynamic(() => import("@material-tailwind/react").then((module) => module.Drawer), { ssr: false });

export function LeadGenrationForm() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [btnLoading, setBtnLoading] = useState("false");
  const [fields, setFields] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    companyName: "",
    pageUrl: ""
  });
  useEffect(() => {
    console.log("window.location.href",window.location.href)
}, [])
  const handleChange = (event) => {
    setFields((prevFields) => ({
      ...prevFields,
      [event.target.name]: event.target.value,
    }));
    console.log("window.location.href", window.location.href)
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
    if (!fields["companyName"]) {
      formIsValid = false;
      errors["companyName"] = "This field is required.";
    }
    // if (!fields["comments"]) {
    //   formIsValid = false;
    //   errors["comments"] = "This field is required.";
    // }
    if (fields["phone"].length <= 0) {
      errors["phone"] = "This field is required.";
      formIsValid = false;
    } else if (!fields["phone"].match(phoneno)) {
      formIsValid = false;
      errors["phone"] = "Please enter correct phone number";
    }


    setErrors(errors);

    if (Object.keys(errors).length !== 0) {
      // Swal.fire("Validation Error", "One of the field needs some correction!", "error");
    }

    return formIsValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const linkUrl = window.location.href;
    const pathname = new URL(linkUrl).pathname.slice(1);
    console.log(pathname);

    var adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
    if (validateForm()) {
      setSubmitted(true);
      var url = window?.location?.href;   
     
      var formValues = {
        fullName: fields.fullName,
        email: fields.email,
        phone: fields.phone,
        companyName: fields.companyName,
        city: fields.city,
        comments: fields.comments,
        pageUrl: url
      };

      axios
        .post("/api/lead-genration-routes/post", formValues)
        .then((data) => {
          setSubmitted(false);
          const formValues1 = {
            toEmail: fields.email,
            subject: "Thank You for Your Inquiry - iAssureIT",
            text: fields.comments,
            mail:
              "Dear " +
              fields.fullName +
              ", <br/><br/>" +
              "Thank you for taking the time to fill out the contact form on our iAssure IT International Technologies website. We appreciate your interest in our services, and we are thrilled to have the opportunity to connect with you. <br/> <br/> " +
              "Our team is currently reviewing the information you provided, and we will get back to you as soon as possible to discuss your specific needs and how we can assist you. Your inquiry is important to us, and we are committed to delivering the highest level of service to meet your expectations. <br/><br/> " +
              "In the meantime, feel free to explore our website to learn more about our solutions and the range of services we offer. Thank you once again for considering iAssure IT as your trusted technology partner. We look forward to the opportunity to work together and address your IT needs." +
              "<br/><br/> Best Regards, <br/> Team iAssure IT International Technologies.",
          };
          axios
            .post("/send-email", formValues1)
            .then((res) => {
              if (res.status === 200) {
                Swal.fire({
                  html: "<span className='mt-5'><span>Thank you for contacting us.<span></br><span>We will get back to you shortly.</span></span>",
                  showConfirmButton: true,
                  confirmButtonColor: "#376bff"
                });
                setTimeout(() => {
                  window.location.href = "https://calendly.com/iassureit/discovery-call?back=1&month=2024-01";
                }, 2000);
                setBtnLoading(false)
                setFields({
                  fullName: "",
                  email: "",
                  phone: "",
                  comments: "",
                  companyName: "",
                  city: "",
                });
              }
            })
            .catch((error) => {
              console.log("error = ", error);
            });
          const formValues2 = {
            toEmail: adminEmail,
            subject: "New Lead Generated",
            text: "",
            mail:
              "Dear Admin, <br/>" +
              "We've recently received a New Lead from "+pathname+" page of the iAssure IT website. Please find the details of the prospect below:<br/> <br/> " +
              "<b>Full Name: </b>" +
              fields.fullName +
              "<br/>" +
              "<b>Business Name: </b>" +
              fields.companyName +
              "<br/>" +
              "<b>Business Email Address: </b>" +
              fields.email +
              "<br/>" +
              "<b>Phone Number: </b>" +
              fields.phone +
              "<br/>" +
              "<b>Message/Inquiry: </b>" +
              fields.comments +
              "<br/>" +
              "<b>City: </b>" +
              fields.city +
              "<br/><br/> Please take the necessary steps to reach out to the prospect promptly and address their inquiry. It's crucial to provide them with the information they need and showcase our commitment to excellent customer service.",
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
                setTimeout(() => {
                  window.location.href = "https://calendly.com/iassureit/discovery-call?back=1&month=2024-01";
                }, 2000);
                setBtnLoading(false)
                setFields({
                  fullName: "",
                  email: "",
                  phone: "",
                  comments: "",
                  companyName: "",
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
    <React.Fragment>
      {/* <Button onClick={openDrawer} className="relative top-10">Open Drawer</Button> */}
      <button
        className="verticlTxt shadow-[0_3px_10px_rgb(0,0,0,0.2)]  fixed z-10 top-32 right-7 text-white bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-1.5 mb-2  focus:outline-none "
        type="button"
        onClick={openDrawer}
      >
        Get a Quote
      </button>
      <Drawer open={open} onClose={closeDrawer} className="p-2" placement="right" size={400}>
        <div className="mb-2 my-3 flex items-center justify-between text-center">
          <div variant="h5" color="blue-gray" className="text-xl font-semibold text-gray-900 px-5">
            Connect with us
          </div>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="px-4 md:px-5 py-3">
          <form className="space-y-4" action="#">
            <div>
              <label for="fullName" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name <span className="text-red-600 my-auto">*</span></label>
              <input type="text" name="fullName" id="fullName" onChange={handleChange}
                value={fields.fullName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your Name" />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>
            <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Business Email <span className="text-red-600 my-auto">*</span></label>
              <input type="email" name="email" id="email" onChange={handleChange}
                value={fields.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label for="companyName" className="block mb-2 text-sm font-medium text-gray-900 ">Business Name <span className="text-red-600 my-auto">*</span></label>
              <input type="text" name="companyName" id="companyName" onChange={handleChange}
                value={fields.companyName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Business Name" />
              {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
            </div>

            <div className='grid grid-cols-2 gap-3'><div>
              <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Mobile <span className="text-red-600 my-auto">*</span></label>
              <input type="phone" name="phone" id="phone" onChange={handleChange}
                value={fields.phone} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
              <div>
                <label for="city" className="block mb-2 text-sm font-medium text-gray-900 ">City</label>
                <input type="text" name="city" id="city" onChange={handleChange}
                  value={fields.city} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" />

              </div>
            </div>
            <div>
              <label for="comments" className="block mb-2 text-sm font-medium text-gray-900 ">Comments </label>
              <input
                type="text"
                name="comments"
                id="comments"
                className="bg-gray-50 border  h-28 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Please share your requirement"
                maxLength="200"
                row={7}
                onChange={handleChange}
                value={fields.comments}
              />
              {/* {errors.comments && <p className="text-red-500 text-xs mt-1">{errors.comments}</p>} */}
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
      </Drawer>
    </React.Fragment>
  );
}