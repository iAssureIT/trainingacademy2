"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const DeletedStudentList = props => {
    const [studList, setStudList] = useState(null);
    useEffect(() => {
        axios
            .get("/api/students/get/list/status-wise/deleted")
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
    const handleUpdateStatus = (event) => {
        const initialStatus = event.target.parentNode.getAttribute("value"); // Get the initial status from the 'value' attribute of the td element
        console.log("initialStatus", initialStatus)
        const stud_id = event.target.parentNode.id;
        var formValues = {
            status: event.target.value,
        }
        Swal.fire({
            text: "Are you sure you want to update selected student status ?",
            icon: "warning",
            cancelButtonColor: "#DD6B55",
            confirmButtonColor: "#0f0",
            showCancelButton: true,
            confirmButtonText: "Confirm",
            cancelButtonText: "Cancel",
            dangerMode: true,
        }).then((result) => {
            console.log(result)
            if (result.isConfirmed) {
                axios.patch("/api/students/update/status/" + stud_id, formValues)
                    .then(res => {
                        Swal.fire("Status updated successfully");
                        setTimeout(() => {
                            window.location.reload();
                        }, 3000);
                    })
                    .catch((error) => {
                        Swal.fire(
                            "Data not updated",
                            error.message,
                            "error"
                        );
                    });
            } else {
                document.getElementById(stud_id).querySelector('select[name="studStatus"]').value = initialStatus;
                Swal.fire("Update canceled");
            }
        });



    }

    const handleDeleteStatus = (event) => {
        const stud_id = event.target.id;

        Swal.fire({
            title: 'Are you sure?',
            text: 'You are about to Permanant delete student data.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {               
                axios.patch("/api/students/update/status/" + stud_id)
                    .then(res => {
                        Swal.fire("Student data deleted Successfully");
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
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Action Canceled', 'Student not deleted', 'info');
            }
        });
    };

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
                Deleted Students List
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
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            fullName
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Phone Number
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            City
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2  border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {studList ?
                                        studList?.map((data, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">{data.fullName}</p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">{data.email}</p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">{data.phone}</p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">{data.city}</p>
                                                    </td>
                                                    <td id={data._id} value={data.status} className="px-5 py-5 border-b border-gray-200 bg-white text-sm" >
                                                        <select className="bg-white" name="studStatus" onChange={handleUpdateStatus}>
                                                            <option disabled="disabled" selected="true">{data.status}</option>
                                                            <option value="new" >New</option>
                                                            <option value="contacted">Contacted</option>
                                                            <option value="notInterested">Not Interested </option>
                                                            <option value="admitted">Admitted </option>
                                                            <option value="notReachable">Not Reachable </option>
                                                        </select>
                                                    </td>
                                                    <td className="px-5 py-5 border-b text-center border-gray-200 bg-white text-sm">
                                                       
                                                        <div>
                                                            <i className="fa fa-trash cursor-pointer hover:text-red-500 " title="Delete" onClick={handleDeleteStatus} id={data._id}></i>
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

export default DeletedStudentList

