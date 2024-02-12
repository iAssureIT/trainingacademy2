"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const CreateJob = (props) => {
    const [jobData, setJobData] = useState(null);
    useEffect(() => {
        axios
            .get("/api/jobs/get/single-job/" + props?.job_id)
            .then(res => {
                console.log("data -> ", res.data);
                if (res?.data) {
                    setJobData(res?.data);
                    // Assuming you want to populate the fields with job data
                    setFields(prevFields => ({
                        ...prevFields,
                        jobTitle: res.data.jobTitle,
                        skills: res.data.skills,
                        jobCategory: res.data.jobCategory,
                        position: res.data.position,
                        experience: res.data.experience,
                        jobType: res.data.jobType,
                        gender: res.data.gender,
                        qualification: res.data.qualification,
                        jobDescription: res.data.jobDescription,
                        jobResponsibilities: res.data.jobResponsibilities,
                        location: res.data.location,
                        // salary: res.data.salary,
                        // industry: res.data.industry,
                        
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
    }, [props.job_id]);
    const [fields, setFields] = useState({
        jobTitle: "",
        skills: "",
        jobCategory: "",
        position: "",
        experience: "",
        jobType: "",
        // industry: "",
        gender: "",
        qualification: "",
        jobDescription: "",
        jobResponsibilities: "",
        location: "",
        // salary: "",
        

    });
    const [categoryList] = useState([
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
    const [jobTypesList] = useState(["Full Time", "Part Time", "Internship"]);
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
    
    const onlyAlphabets = (event) => {
        if (
            (event.which >= 65 && event.which <= 90) ||
            (event.which >= 97 && event.which <= 122) ||
            event.which === 8 ||
            event.which === 46 ||
            event.which === 37 ||
            event.which === 39 ||
            event.which === 9
        ) {
            return true;
        } else {
            event.preventDefault();
        }
    }

    const alphaNumeric = (event) => {
        if (
            (event.which >= 65 && event.which <= 90) ||
            (event.which >= 97 && event.which <= 122) ||
            (event.which >= 48 && event.which <= 57) ||
            event.which === 8 ||
            event.which === 9 ||
            event.which === 46 ||
            event.which === 37 ||
            event.which === 39 ||
            event.which === 32
        ) {
            return true;
        } else {
            event.preventDefault();
        }
    }

    const handleChange = (event) => {
        setFields((prevFields) => ({
            ...prevFields,
            [event.target.name]: event.target.value,
        }));
    };

    const validateForm = () => {
        let errors = {};
        let formIsValid = true;

        if (!fields["jobTitle"]) {
            formIsValid = false;
            errors["jobTitle"] = "This field is required.";
        }
        if (!fields["jobCategory"]) {
            formIsValid = false;
            errors["jobCategory"] = "This field is required.";
        }
        if (!fields["qualification"]) {
            formIsValid = false;
            errors["qualification"] = "This field is required.";
        }
        if (!fields["gender"]) {
            formIsValid = false;
            errors["gender"] = "This field is required.";
        }
        if (!fields["skills"]) {
            formIsValid = false;
            errors["skills"] = "This field is required.";
        }
        if (!fields["jobDescription"]) {
            formIsValid = false;
            errors["jobDescription"] = "This field is required.";
        }
        if (!fields["jobResponsibilities"]) {
            formIsValid = false;
            errors["jobResponsibilities"] = "This field is required.";
        }

        setErrors(errors);

        if (Object.keys(errors).length !== 0) {
            Swal.fire("Validation Error", "One of the field needs some correction!", "error");
        }

        return formIsValid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (validateForm()) {
            setSubmitted(true);
            const string = fields?.jobTitle.replace(
                /[^a-zA-Z0-9 ]/g,
                ""
            );
            const url = encodeURIComponent(string.replace(/\s+/g, "-")).toLowerCase();
            var formValues = {
                job_id: props?.job_id,
                jobTitle: fields.jobTitle,
                jobUrl: url,
                jobCategory: fields.jobCategory.split(" ").join(""),
                skills: fields.skills,
                position: fields.position,
                experience: fields.experience,
                jobType: fields.jobType.split(" ").join(""),
                qualification: fields.qualification,
                gender: fields.gender,
                jobDescription: fields.jobDescription,
                jobResponsibilities: fields.jobResponsibilities,
                location: fields.location,
                // salary: fields?.salary,
                // industry: fields.industry,
                // level: fields.level,                
            };

            axios
                .patch("/api/jobs/patch/update/job", formValues)
                .then((data) => {
                    console.log("data", data)
                    setSubmitted(false);
                    Swal.fire("Job updated ", "success");
                    // setFields({
                    //     jobTitle: "",
                    //     skills: "",
                    //     jobCategory: "",
                    //     salary: "",
                    //     position: "",
                    //     experience: "",
                    //     jobType: "",
                    //     industry: "",
                    //     gender: "",
                    //     qualification: "",
                    //     level: "",
                    //     jobDescription: "",
                    //     jobResponsibilities: "",
                    //     location: "",
                    // });
                    window.location.href = `/user/jobs/my-job-list`;
                })
                .catch((error) => {
                    Swal.fire(
                        "Job could not be submitted successfully!",
                        error.message,
                        "error"
                    );
                });
        } else {
            Swal.fire("Validation Error", "Please insert data in required fields.", "error");
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
                    <div className="grid md:grid-cols-2 md:gap-8">
                        <div className="my-3 md:my-3 ">
                            <label className="label">
                                Job Title
                                <span className="asterik text-red-600">*</span>
                            </label>
                            <div className=" relative">
                                <input
                                    type="text"
                                    maxLength=""
                                    className=" stdInput2"
                                    id="jobTitle"
                                    name="jobTitle"
                                    placeholder="Job Title"
                                    onChange={handleChange}
                                    value={fields.jobTitle}
                                />
                                <div className="errorMsg col-12 text-left pl-0 mt-2">
                                    {errors.jobTitle}
                                </div>
                            </div>
                        </div>
                        <div className="my-3 md:my-3 ">
                            <label
                                className="label "
                                htmlFor="jobCategory"
                            >
                                job Category <span className="asterik text-red-600">*</span>
                            </label>
                            <select
                                className="w-full bg-gray-50 border border-exlightGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                id="jobCategory"
                                name="jobCategory"
                                onChange={handleChange}
                                autoComplete="off"
                                value={
                                    fields.jobCategory
                                        ? fields.jobCategory
                                        : ""
                                }
                            >
                                <option value="">--Select Job Category--</option>
                                {categoryList && categoryList.length > 0
                                    ? categoryList.map((data, i) => {
                                        return (
                                            <option key={i} value={data}>
                                                {data}
                                            </option>
                                        );
                                    })
                                    : "null"}
                            </select>
                            <div className="errorMsg col-12 text-left pl-0 mt-2">
                                {errors.jobCategory}
                            </div>
                        </div>

                    </div>
                    <div className="grid md:grid-cols-2 md:gap-8">
                        <div className="my-3 ">
                            <label htmlFor="Qualification" className="label ">
                                Qualification<span className="asterik text-red-600">*</span>
                            </label>
                            <div className="px-0">
                                <input
                                    type="text"                                    
                                    className=" stdInput2"
                                    id="qualification"
                                    name="qualification"
                                    placeholder="Qualification"
                                    onChange={handleChange}
                                    value={fields.qualification}
                                />
                                <div className="errorMsg col-12 text-left pl-0 mt-2">
                                    {errors.qualification}
                                </div>
                            </div>
                        </div>
                        <div className="my-3 md:my-3 ">
                            <label htmlFor="positions" className="label ">
                                Positions<span className="asterik text-red-600">*</span>
                            </label>
                            <div className="px-0">
                                <input
                                    type="text"                                    
                                    className=" stdInput2"
                                    id="position"
                                    name="position"
                                    placeholder="Position"
                                    onChange={handleChange}
                                    value={fields.position}
                                />
                                 <div className="errorMsg col-12 text-left pl-0 mt-2">
                                {errors.position}
                            </div>
                            </div>
                        </div>

                    </div>
                    <div className="grid md:grid-cols-2 md:gap-8">

                        <div className="my-3">
                            <label htmlFor="experience" className="label ">
                                Experience<span className="asterik text-red-600">*</span>
                            </label>
                            <div className="px-0">
                                <input
                                    type="text"                                    
                                    className=" stdInput2"
                                    id="experience"
                                    name="experience"
                                    placeholder=" 5+ years"
                                    onChange={handleChange}
                                    value={fields.experience}
                                />
                                 <div className="errorMsg col-12 text-left pl-0 mt-2">
                                {errors.experience}
                            </div>
                            </div>
                        </div>
                        <div className="my-3 md:my-3 ">
                            <label
                                className="label "
                                htmlFor="jobType"
                            >
                                Job Type<span className="asterik text-red-600">*</span>
                            </label>
                            <select
                                className="w-full bg-gray-50 border border-exlightGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                            <div className="errorMsg col-12 text-left pl-0 mt-2">
                                {errors.jobType}
                            </div>
                        </div>
                        
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-8">
                    <div className="my-3">
                            <label
                                className="label "
                                htmlFor="gender"
                            >
                                Gender <span className="asterik text-red-600">*</span>
                            </label>
                            <select
                                className="w-full bg-gray-50 border border-exlightGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                id="gender"
                                name="gender"
                                onChange={handleChange}
                                autoComplete="off"
                                value={
                                    fields.gender
                                        ? fields.gender
                                        : ""
                                }
                            >
                                <option value="">--Select Gender--</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Both">Male/Female</option>
                            </select>
                            <div className="errorMsg col-12 text-left pl-0 mt-2">
                                {errors.gender}
                            </div>
                        </div>
                        <div className="my-3 md:my-3 ">
                            <label htmlFor="location" className="label ">
                                Location<span className="asterik text-red-600">*</span>
                            </label>
                            <div className="px-0">
                                <input
                                    type="text"                                    
                                    className=" stdInput2"
                                    id="location"
                                    name="location"
                                    placeholder="Pune"
                                    onChange={handleChange}
                                    value={fields.location}
                                />
                                 <div className="errorMsg col-12 text-left pl-0 mt-2">
                                {errors.location}
                            </div>
                            </div>
                        </div>
                        {/* <div className="my-3 md:my-3 ">
                            <label htmlFor="Industry" className="label ">
                                Industry
                            </label>
                            <div className="px-0">
                                <input
                                    type="text"                                    
                                    className=" stdInput2"
                                    id="industry"
                                    name="industry"
                                    placeholder="Industry"
                                    onChange={handleChange}
                                    value={fields.industry}
                                />
                            </div>
                        </div> */}
                    </div>                    
                    <div className="my-3 md:my-5  w-full">
                        <label htmlFor="Skills" className="label ">
                            Skills<span className="asterik text-red-600">*</span>
                        </label>
                        <div className="px-0">
                            <textarea
                                type="text"                                
                                className=" stdInput2"
                                id="skills"
                                name="skills"
                                rows={6}
                                placeholder="Add key skill required for the job"
                                onChange={handleChange}
                                value={fields.skills}
                            />
                            <div className="errorMsg col-12 text-left pl-0 mt-2">
                                {errors.skills}
                            </div>
                        </div>
                    </div>
                    <div className="my-5 w-full">
                        <label htmlFor="jobDescription" className="label ">
                            Job Description <span className="asterik text-red-600">*</span>
                        </label>
                        <div className="px-0">
                            <textarea
                                type="text"                                
                                className=" stdInput2"
                                id="jobDescription"
                                name="jobDescription"
                                rows={6}
                                placeholder=" Job Description "
                                onChange={handleChange}
                                value={fields.jobDescription}
                            />
                            <div className="errorMsg col-12 text-left pl-0 mt-2">
                                {errors.jobDescription}
                            </div>
                        </div>
                    </div>
                    <div className="my-5 w-full">
                        <label htmlFor="jobDescription" className="label ">
                            Job Responsibilities<span className="asterik text-red-600">*</span>
                        </label>
                        <div className="px-0">
                            <textarea
                                type="text"
                                
                                className=" stdInput2"
                                id="jobResponsibilities"
                                name="jobResponsibilities"
                                rows={6}
                                placeholder=" Job Responsibilities "
                                onChange={handleChange}
                                value={fields.jobResponsibilities}
                            />
                            <div className="errorMsg col-12 text-left pl-0 mt-2">
                                {errors.jobResponsibilities}
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
                                onClick={handleSubmit}
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

export default CreateJob;
