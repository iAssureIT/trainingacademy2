"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
const StudentList = props => {
    const [studList, setStudList] = useState(null);
    useEffect(() => {
        axios
            .get("/api/students/get/list")
            .then(res => {
                console.log("data -> ", res?.data);               
                const filteredList = res?.data.filter(item => item.status !== "deleted");
            setStudList(filteredList);
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
            text: 'You are about to delete student data.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                var formValues = {
                    status: "deleted",
                };
                axios.patch("/api/students/update/status/" + stud_id, formValues)
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
                Swal.fire('Action Canceled', 'Your student data remains unchanged.', 'info');
            }
        });
    };
const handleSendNotification=(event)=>{
    const stud_id = event.target.id;

    axios.get("/api/students/send/notification/Email/" + stud_id)
                    .then(res => {
                      console.log(res)
                    })
                    .catch((error) => {
                        Swal.fire(
                            "Mail not sent",
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
            <h2 className="text-black md:mt-4 w-full text-center leading-10 text-xl md:text-3xl xl:text-5xl px-2 md:mb-10 "
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

            <div className="px-2 lg:px-32 ">
                <div className=" ">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <Table className="min-w-full leading-normal">
                                <Thead>
                                    <Tr>
                                        <Th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Full Name
                                        </Th>
                                        <Th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Email
                                        </Th>
                                        <Th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Phone Number
                                        </Th>
                                        <Th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            City
                                        </Th>
                                        <Th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Status
                                        </Th>
                                        <Th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Actions
                                        </Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {studList ?
                                        studList?.map((data, index) => {
                                            return (
                                                <Tr key={index}>
                                                    <Td className="px-5 py-5 border-b border-gray-200 bg-white text-sm" data-label="test">
                                                        <p className="text-gray-900 whitespace-no-wrap" >{data.fullName}</p>
                                                    </Td>
                                                    <Td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">{data.email}</p>
                                                    </Td>
                                                    <Td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">{data.phone}</p>
                                                    </Td>
                                                    <Td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">{data.city}</p>
                                                    </Td>
                                                    <Td id={data._id} value={data.status} className="px-5 py-5 border-b border-gray-200 bg-white text-sm" >
                                                        <select className="bg-white" name="studStatus" onChange={handleUpdateStatus}>
                                                            <option disabled="disabled" selected="true">{data.status}</option>
                                                            <option value="new" >New</option>
                                                            <option value="contacted">Contacted</option>
                                                            <option value="notInterested">Not Interested </option>
                                                            <option value="admitted">Admitted </option>
                                                            <option value="notReachable">Not Reachable </option>
                                                        </select>
                                                    </Td>
                                                    <Td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <a
                                                            title="Edit Student"
                                                            href={
                                                                "/admin/student-management/" + data?._id
                                                            }
                                                        >
                                                            {" "}
                                                            <i
                                                                className={
                                                                    "fa fa-pencil  mr-3 right hover:cursor-pointer"
                                                                }
                                                                aria-hidden="true"
                                                            ></i>{" "}</a>
                                                       
                                                            <i className="fa fa-trash cursor-pointer hover:text-red-500  mr-3" title="Delete" onClick={handleDeleteStatus} id={data._id}></i>
                                                            <i class="fa-regular fa-message mx-auto cursor-pointer text-lg mr-3"></i>
                                                            <i class="fa-regular fa-envelope mx-auto cursor-pointer text-lg mr-3" onClick={handleSendNotification} id={data._id}></i>
                                                             <i className="fa-brands fa-whatsapp   mx-auto cursor-pointer text-lg  "></i>
                                                            {/* <i className="fa-brands fa-ev   mx-auto cursor-pointer text-lg  "></i> */}

                                                    </Td>
                                                </Tr>)
                                        })
                                        :
                                        ""
                                    }
                                </Tbody>
                            </Table>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default StudentList

