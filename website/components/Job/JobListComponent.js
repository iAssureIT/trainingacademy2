/*==========================================================
  Developer  :  Sarika Ghanwat
  Date       :  1st Feb 2024
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/


"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";

const JobListComponent = (props) => {
    const [joblist, setJoblist] = useState(null);
    useEffect(() => {
        axios
            .get("/api/jobs/get/list")
            .then(res => {
                console.log("data -> ", res.data.jobList);
                if (res?.data) {
                    setJoblist(res?.data.jobList.slice(0, 3));
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
    var classForNoOfCards = props.inputData.classForNoOfCards
        ?
        props.inputData.classForNoOfCards
        :
        "grid  grid-cols-3 gap-x-6 md:grid-cols-3 md:gap-x-6 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6"
    return (
        <section className={"md:my-5 lg:my-0 "}>
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
            <div className="flex flex-wrap lg:flex-nowrap relative">
                <div className={classForNoOfCards}>
                    {
                        joblist?.map((data, index) => {
                            return (
                                <div key={index} className="mb-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg p-6">
                                    {/* <div className="text-gray-400 font-semibold">Opening Position</div> */}
                                    <div className="font-bold  md:text-lg xl:text-xl 2xl:text-2xl text-left">{data.jobTitle}</div>
                                    <div className="font-medium text-[17px] mb-4 mt-4 text-left line-clamp-3">{data.skills}</div>
                                    <div className="flex flex-wrap gap-3 mb-4">
                                        {/* <div className="px-4 py-2 font-medium rounded bg-gray-200">Salary <span className="font-bold">: {data.salary}</span></div> */}
                                        {data.location ?
                                            <div className="flex px-2 py-2 font-medium rounded bg-gray-200">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1 text-gray-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                                </svg>
                                                {data.location}
                                            </div>
                                            :
                                            ""
                                        }
                                        {data.jobType ?
                                            <div className="flex px-2 py-2 font-medium rounded bg-gray-200 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1 text-gray-500" >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                                {data.jobType}  
                                            </div>
                                            :
                                            ""
                                        }
                                    </div>
                                    <div className="flex flex-wrap gap-3 mb-4">
                                        {/* <div className="px-4 py-2 font-medium rounded bg-gray-200">Salary <span className="font-bold">: {data.salary}</span></div> */}
                                        <div className="px-4 py-2 font-medium rounded bg-gray-200">Openings Positions <span className="font-bold">: {data.position}</span></div>
                                        <div className="px-4 py-2 font-medium rounded bg-gray-200">Experience <span className="font-bold">: {data.experience} years </span></div>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="font-medium text-sm text-white bg-blue-700 rounded w-auto px-2 py-2 " >
                                            <a href={"/career/" + data.jobUrl + "-" + data?._id} >View & Apply <i className={props?.inputData?.linkIconCss ? props?.inputData?.linkIconCss : "fa-solid  fa-angle-double-right"}></i></a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className=" mb-10 mx-auto lg:absolute right-8 lg:right-6 xl:right-20 md:top-1/3 lg:top-1/2 xl:top-1/3 " title="View More Jobs">
                <a href="/career/career2">
                    <div className=" text-white mx-auto text-center font-bold text-lg md:text-lg p-3 px-4 md:px-4 lg:px-3 2xl:px-4  mt-3 xl:mt-8 2xl:mt-10 border  rounded btn hover:text-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                        <i class="fa-solid fa-angle-right text-blue-700"></i>
                    </div></a>
                </div>
            </div>
        </section >
    )
}

export default JobListComponent