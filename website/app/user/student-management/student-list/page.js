"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const moment = require('moment');

const StudentList = props => {
    const [studList, setStudList] = useState(null);
    useEffect(() => {
        axios
            .get("/api/students/get/list")
            .then(res => {
                console.log("data -> ", res?.data);
                // if (res?.data) {
                setStudList(res?.data);
                // }
            })
            .catch((error) => {
                Swal.fire(
                    "Data not found",
                    error.message,
                    "error"
                );
            });
    }, [])
    const handleDelete = (event) => {
        const job_id = event.target.id;
        axios.delete("/api/students/delete-job/" + job_id)
            .then(res => {
                Swal.fire("Job deleted Successfully")
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            })
            .catch((error) => {
                Swal.fire(
                    "Data not deleted",
                    error.message,
                    "error"
                );
            });
    }
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
            <h2 className="text-black mt-32 w-full text-center leading-10 text-3xl md:text-3xl xl:text-5xl px-2 mb-10"
            >
                Student Enrollment List
            </h2>

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

            <div className="px-32 ">
                <div className=" ">
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            fullName
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Phone Number
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            City
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {studList ?
                                        studList?.map((data, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">{data.fullName}</p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">{data.email}</p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">{data.phone}</p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p class="text-gray-900 whitespace-no-wrap">{data.city}</p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <a
                                                            title="Edit Student"
                                                            href={
                                                                "/user/student-management/" + data?._id
                                                            }
                                                        >
                                                            {" "}
                                                            <i
                                                                className={
                                                                    "fa fa-pencil float-right mr-3 right hover:cursor-pointer"
                                                                }
                                                                aria-hidden="true"
                                                            ></i>{" "}</a>
                                                        <div>
                                                            <i className="fa fa-trash cursor-pointer hover:text-red-500 " title="Delete" onClick={handleDelete} id={data._id}></i>
                                                        </div>
                                                    </td>
                                                </tr>)
                                        })
                                        :
                                        ""
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default StudentList
