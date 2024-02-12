import Link from "next/link"
import React, { useState, useEffect } from "react";
import axios from "axios";

const JobList = props => {
    const [joblist, setjoblist] = useState(null);
    useEffect(() => {
        axios
            .get("/api/jobs/get/list")
            .then(res => {
                console.log("data -> ", res.data.jobList);
                if (res?.data) {
                    setjoblist(res?.data.jobList);
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
                <div className="grid md:grid-cols-3 gap-5 ">
                    {console.log("joblist", joblist)}
                    {joblist ?
                        joblist?.map((data, index) => {
                            return (
                                <div key={index} className="md:col-span-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg p-6">
                                    <div className="text-gray-400 font-semibold">Opening Position</div>
                                    <div className="font-bold  md:text-lg xl:text-xl 2xl:text-2xl">{data.jobTitle}</div>
                                    <div className="text-gray-400 text-lg mb-10">{data.skills}</div>

                                    <div className="flex flex-wrap gap-7">
                                        <div className="px-4 py-2 font-medium rounded bg-gray-200">Salary <span className="font-bold">: {data.salary}</span></div>
                                        <div className="px-4 py-2 font-medium rounded bg-gray-200">Openings Position <span className="font-bold">: {data.position}</span></div>
                                        <div className="px-4 py-2 font-medium rounded bg-gray-200">Experience <span className="font-bold">:{data.experience} years </span></div>
                                        <div className="font-medium text-sm text-white bg-blue-700 rounded w-auto px-5 py-2 " >
                                            <a href={"/career/" + data.jobUrl + "-" + data?._id} >View & Apply <i className={props?.inputData?.linkIconCss ? props?.inputData?.linkIconCss : "fa-solid  fa-angle-double-right"}></i></a>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                        :
                        ""
                    }
                    <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg p-6">
                        <div className="font-bold  md:text-lg xl:text-xl 2xl:text-2xl ">Category
                            <div className="flex justify-between items-center">
                                <div class="flex items-center ">
                                    <input id="vue-checkbox" type="checkbox" value="" class="w-5 h-5 text-blue-600 bg-gray-100 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="vue-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vue JS</label>
                                </div>
                                {/* <div className="bg-gray-200 text-gray-500 text-sm">16</div> */}
                                <div className="bg-gray-200 text-gray-800 text-sm font-medium me-2 px-2.5 text-center inline-block align-middle justify-center  rounded dark:bg-gray-700 dark:text-gray-300">16</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JobList

