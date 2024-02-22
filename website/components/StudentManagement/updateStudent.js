"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateStudent = (props) => {
    const [errors, setErrors] = useState({});
    const [btnLoading, setBtnLoading] = useState("false");
    const [submitted, setSubmitted] = useState(false);
    const [studList, setStudData] = useState(false);

    useEffect(() => {
        axios
            .get("/api/students/get/single-stud/" + props?.stud_id)
            .then(res => {
                console.log("data -> ", res.data);
                if (res?.data) {
                    setStudData(res?.data);
                    setFields(prevFields => ({
                        ...prevFields,
                        fullName: res.data.fullName,
                        email: res.data.email,
                        phone: res.data.phone,
                        city: res.data.city,
                    }));
                }
            })
            .catch(error => {
                Swal.fire(
                    "Data not found",
                    error.message,
                    "error"
                );
            });
    }, [props.stud_id]);
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
        // if (!fields["phone"].match(phoneno)) {
        //     errors["phone"] = "Please enter valid Mobile Number";
        //     formIsValid = false;
        // }       
        setErrors(errors);

        if (Object.keys(errors).length !== 0) {
            // Swal.fire("Validation Error", "One of the field needs some correction!", "error");
        }
        return formIsValid;
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        var adminEmail = process.env.TRAINING_EMAIL
        if (validateForm()) {
            setSubmitted(true);
            var formValues = {
                stud_id: props?.stud_id,
                fullName: fields.fullName,
                email: fields.email,
                phone: fields.phone,                
                city: fields.city,
               
            };


            axios
                .patch("/api/students/update/stud-data", formValues)
                .then((data) => {
                    setSubmitted(false);  
                    Swal.fire("Student data updated ", "success");
                    window.location.href = `/user/student-management/student-list`;
               })
                .catch((error) => {
                    setSubmitted(false);
                    Swal.fire(
                        "Data could not be Updated successfully!",
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
            <section
                className="xl:w-2/3  mx-auto md:flex-row h-auto items-center my-12  md:my-10 "
                id="mainblk"
            >
                <div className={"w-full"}>
                    <div className="text-center md:text-left block mt-32 mb-10 text-2xl text-lightBlue sm:text-2xl lg:text-3xl xxl:text-4xls lg:leading-tight font-extrabold">
                        Update Job
                    </div>
                </div>
    
                <div
                    className={
                        "w-full mx-auto h-100 border border-exlightGray bg-white rounded  pb-20 xl:px-10 xl:pb-20 "
                    }
                >
                    <form id="jobForm" className="my-6 px-5 ">
                       <div>

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
                                <input type="number" name="phone" id="phone" onChange={handleChange}
                                    value={fields.phone} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />
                                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                            </div>
                                <div>
                                    <label for="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                                    <input type="text" name="city" id="city" onChange={handleChange}
                                        value={fields.city} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />
                                </div>
                            </div>
                        </div>
    
                        <div className=" my-12 mb-10 xl:my-3">
                            {/*{console.log("this.state.submitted",this.state.submitted)}*/}
                            {submitted ? (
                                <button className="stdBtn pull-right  w-1/4">
                                    Update &nbsp; <i className="fa fa-spinner fa-pulse"></i>{" "}
                                </button>
                            ) : (
                                <button
                                    onClick={handleUpdate}
                                    className="mx-auto float-right  w-1/3 md:w-1/3 xl:w-1/4 stdBtn"
                                >
                                    Update
                                </button>
                            )}
                        </div>
    
                    </form>
                </div>
            </section>
        );

    
}
export default UpdateStudent;