import Link from "next/link"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const moment = require('moment');
import AppplyJobForm from  './ApplyJobForm'

const JobDetailPage = props => {
    const [jobData, setJobData] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
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
    return (
        <section id={"Search"} className=''>
            {props?.inputData?.dash ?
                <div className="w-full mb-0 md:mb-4">
                    <ul className="place-content-center flex flex-wrap">
                        <li className={"dash1 " + props?.inputData?.dash}></li>
                        <li className={"dash2 " + props?.inputData?.dash}></li>
                        <li className={"dash3 " + props?.inputData?.dash}></li>
                    </ul>
                </div>
                :
                null
            }
            {
                props?.inputData?.blockTitle
                    ?
                    <h2 className={props?.inputData?.classForblockTitle ? props?.inputData?.classForblockTitle : 'blockTitle '}
                        dangerouslySetInnerHTML={{
                            __html: props?.inputData?.blockTitle,
                        }}
                    >
                    </h2>
                    :
                    null
            }
            {
                props?.inputData?.blockContent
                    ?
                    <div className={props?.inputData?.classForblockContent ? props?.inputData?.classForblockContent : 'content-wrapper'}
                        dangerouslySetInnerHTML={{
                            __html: props?.inputData?.blockContent,
                        }}>
                    </div>
                    :
                    null
            }

            <div className=" px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-40 xxl:!px-20 mt-10">
            {/* {isModalOpen && <EmpAppForm modalId={"empModal"} />} */}
                <div className="grid lg:grid-cols-3 gap-5 ">
                    <div className="lg:col-span-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg p-6">
                        <div className="font-bold  md:text-lg xl:text-4xl 2xl:text-4xl">{jobData?.jobTitle}</div>
                        <div className="text-gray-800 text-lg mb-10 font-bold mt-2">{jobData?.salary}</div>

                        {/* <div className="flex justify-end gap-7">                        
                            <div onClick={() => setModalOpen(!isModalOpen)}  className="cursor-pointer font-bold text-lg text-white bg-blue-700 rounded w-auto px-5 py-2  xl:px-6 xl:py-3" > Apply Now
                                <i className={"fa-solid  fa-angle-double-right ml-1"}></i>
                            </div>
                        </div> */}
                        <div className="flex justify-end gap-7">                        
                            <div className="cursor-pointer font-bold text-lg text-white bg-blue-700 rounded w-auto px-5 py-2  xl:px-6 xl:py-3" > 
                                <a href={"/career/emp-app-form/" + jobData?._id} >Apply Now <i className={props?.inputData?.linkIconCss ? props?.inputData?.linkIconCss : "fa-solid  fa-angle-double-right"}></i></a>
                            </div>
                        </div>

                        <div className="my-10">
                            <h2 className="mb-2 font-bold  md:text-lg xl:text-xl 2xl:text-2xl">Job Description</h2>
                            <p className="text-justify ">{jobData?.jobDescription}</p>
                        </div>
                        <div className="my-10">
                            <h3 className="mb-2 font-bold  md:text-lg xl:text-xl 2xl:text-2xl">Job Responsibilities</h3>
                            <div>{jobData?.jobResponsibilities}</div>
                        </div>
                        <div className="mt-10">
                            <h4 className="mb-2 font-bold  md:text-lg xl:text-xl 2xl:text-2xl">Background, Skills & Experience </h4>
                            <div>{jobData?.skills}</div>
                        </div>
                    </div>
                    <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg p-6">
                        <div className="font-bold  md:text-lg xl:text-xl 2xl:text-2xl ">Job Overview
                        </div>
                        <div className="grid grid-cols-2 my-6">
                            <div>Job Type</div>
                            <div className="font-bold">{jobData?.jobType}</div>
                        </div>
                        <div className="grid grid-cols-2 my-6 ">
                            <div>Category</div>
                            <div className="font-bold">{jobData?.jobCategory}</div>
                        </div>
                        <div className="grid grid-cols-2 my-6">
                            <div>Experience</div>
                            <div className="font-bold">{jobData?.experience}</div>
                        </div>
                        {/* <div className="grid grid-cols-2 my-6">
                            <div>Industry</div>
                            <div className="font-bold">{jobData?.industry}</div>
                        </div> */}
                        <div className="grid grid-cols-2 my-6">
                            <div>Gender</div>
                            <div className="font-bold">{jobData?.gender}</div>
                        </div>
                        <div className="grid grid-cols-2 my-6">
                            <div>Qualification</div>
                            <div className="font-bold">{jobData?.qualification}</div>
                        </div>
                        {jobData?.level
                            ?
                            <div className="grid grid-cols-2 my-6">
                                <div>Level</div>
                                <div className="font-bold">{jobData?.level}</div>
                            </div>
                            :
                            ""
                        }
                         <div className="grid grid-cols-2 my-6">
                                <div>Posted</div>
                                <div className="font-bold">{moment(jobData?.createdAt).fromNow()}</div>
                            </div>
                            <div className="grid grid-cols-2 my-6">
                                <div>Application ends</div>
                                <div className="font-bold">{jobData?.jobEndDate}</div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JobDetailPage

