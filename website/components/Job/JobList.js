import Link from "next/link"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import ReactPaginate from 'react-paginate';

const JobList = props => {
    const [joblist, setjoblist] = useState(null);
    const [jobListCount, setJobListCounts] =useState(null)
    const [page, setPage] = useState(1);
    const [categoryCounts, setCategoryCounts] = useState({});
    const [jobTypeCounts, setJobTypeCounts] = useState({});
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedJobTypes, setSelectedJobTypes] = useState([]);
    const itemsPerPage = 3; // Number of items to show per page
    const [categoryList] = useState([
        "UIUX Designer",
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
    const [jobTypeList] = useState([
        "Full Time",
        "Part Time",
        "Internship",
    ]);
    useEffect(() => {
        axios
            .get("/api/jobs/get/list")
            // .get(`/api/jobs/get/list?page=${page + 1}`)
            .then(res => {
                console.log("data -> ", res.data.jobList);
                if (res?.data) {
                    setjoblist(res?.data.jobList);
                    setJobListCounts(res?.data.jobList.length)
                }
            })
            .catch((error) => {
                Swal.fire(
                    "Data not found",
                    error.message,
                    "error"
                );
            });
    }, [page])
    useEffect(() => {
        const fetchCategoryCounts = async () => {
            const counts = {};
            for (const category of categoryList) {
                try {
                    const response = await axios.get(`/api/jobs/search/${category.split(" ").join("")}`);
                    counts[category] = response.data.length;
                } catch (error) {
                    counts[category] = 0;
                    Swal.fire(
                        "Data not found",
                        error.message,
                        "error"
                    );
                }
            }
            setCategoryCounts(counts);
        };

        fetchCategoryCounts();
    }, [categoryList]);
    useEffect(() => {
        const fetchJobTypeCounts = async () => {
            const counts = {};
            for (const jobType of jobTypeList) {
                try {
                    const response = await axios.get(`/api/jobs/searchby/job-type/${jobType.split(" ").join("")}`);
                    counts[jobType] = response.data.length;
                } catch (error) {
                    counts[jobType] = 0;
                    Swal.fire(
                        "Data not found",
                        error.message,
                        "error"
                    );
                }
            }
            setJobTypeCounts(counts);
        };

        fetchJobTypeCounts();
    }, [jobTypeList]);
    
    const handleCheckboxChange = (category) => {
        console.log("category",category)
        console.log("selectedCategories",selectedCategories);
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(selectedCategory => selectedCategory !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };
    const handleJobTypeCheckboxChange = (jobType) => {
       
        if (selectedJobTypes.includes(jobType)) {
            setSelectedJobTypes(selectedJobTypes.filter(selectedJobTypes => selectedJobTypes !== jobType));
        } else {
            setSelectedJobTypes([...selectedJobTypes, jobType]);
        }
    }
    const filteredJobs = () => {
        let apiUrl = "/api/jobs/get/list";
    
        if (selectedCategories.length > 0 || selectedJobTypes.length > 0) {
          const filters = [];
    
          if (selectedCategories.length > 0) {
            const categoriesWithoutSpaces = selectedCategories.map(category => category.split(" ").join(""));
            filters.push(`category=${categoriesWithoutSpaces.join(",")}`);
        }
    
          if (selectedJobTypes.length > 0) {
            const jobTypesWithoutSpaces = selectedJobTypes.map(jobType => jobType.split(" ").join(""));
            filters.push(`jobType=${jobTypesWithoutSpaces.join(",")}`);
          }
    
          apiUrl = `/api/jobs/filter?${filters.join("&")}`;
        }
    
        return apiUrl;
      };
   
    //     let apiUrl = "/api/jobs/get/list";
    
    //     if (selectedCategories.length > 0 || selectedJobTypes.length > 0) {
    //         const filters = [];
    
    //         if (selectedCategories.length > 0) {
    //             // Remove spaces from selectedCategories
    //             const categoriesWithoutSpaces = selectedCategories.map(category => category.trim());
    //             filters.push(`category=${categoriesWithoutSpaces.join(",")}`);
    //         }
    
    //         if (selectedJobTypes.length > 0) {
    //             // Remove spaces from selectedJobTypes
    //             const jobTypesWithoutSpaces = selectedJobTypes.map(jobType => jobType.trim());
    //             filters.push(`jobType=${jobTypesWithoutSpaces.join(",")}`);
    //         }
    
    //         apiUrl = `/api/jobs/filter?${filters.join("&")}`;
    //     }
    
    //     return apiUrl;
    // };
      useEffect(() => {
        const fetchFilteredJobs = async () => {
          try {
            const res = await axios.get(filteredJobs());
            
            if (res?.data) {
              setjoblist(res?.data.jobList);
            }
          } catch (error) {
            Swal.fire("Data not found", error.message, "error");
          }
        };
    
        fetchFilteredJobs();
      }, [selectedCategories, selectedJobTypes]);
    //   const handlePageChange = ({ selected }) => {
    //     setPage(selected);
    //   };
    //   const pageCount = Math.ceil(jobListCount / itemsPerPage); // Replace totalJobsCount with the actual total number of jobs

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

            <div className=" px-5 md:px-10 lg:px-20 xl:px-20 2xl:px-28 xxl:!px-20 mt-10">
                <div className="grid md:grid-cols-3 gap-5 ">
                    {/* {console.log("joblist", joblist)} */}
                    <div className="md:col-span-2">
                        {joblist ?
                            joblist?.map((data, index) => {
                                return (
                                    <div key={index} className="mb-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg p-6">
                                        {/* <div className="text-gray-400 font-semibold">Opening Position</div> */}
                                        <div className="font-bold  md:text-lg xl:text-xl 2xl:text-2xl">{data.jobTitle}</div>
                                        <div className="text-gray-500 text-lg mb-5 line-clamp-2">{data.skills}</div>

                                        <div className="flex flex-wrap gap-4">
                                            {/* <div className="px-4 py-2 font-medium rounded bg-gray-200">Salary <span className="font-bold">: {data.salary}</span></div> */}
                                            {data.location ?
                                                <div className="flex px-2 py-2 font-medium rounded bg-gray-200 text-sm">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1 text-gray-500">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                                    </svg>
                                                    {data.location}
                                                </div>
                                                :
                                                ""
                                            }
                                            {data.jobType ?
                                                <div className="flex px-2 py-2 font-medium rounded bg-gray-200 text-sm" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1 text-gray-500">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    </svg>
                                                    {data.jobType}
                                                </div>
                                                :
                                                ""
                                            }
                                            <div className="px-4 py-2 font-medium rounded bg-gray-200 text-sm">Openings Positions <span className="font-bold">: {data.position}</span></div>
                                            <div className="px-4 py-2 font-medium rounded bg-gray-200 text-sm">Experience <span className="font-bold">: {data.experience} years </span></div>
                                            <div className="font-medium text-sm text-white bg-blue-700 rounded w-auto px-3 py-2 " >
                                                <a href={"/career/" + data.jobUrl + "-" + data?._id} >View & Apply <i className={props?.inputData?.linkIconCss ? props?.inputData?.linkIconCss : "fa-solid  fa-angle-double-right"}></i></a>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                            :
                            ""
                        }
                         {/* <div className="flex justify-between items-center mt-4">
                         <ReactPaginate
          pageCount={pageCount} 
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          previousLabel={"Previous"}
          nextLabel={"Next"}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
        </div> */}
                    </div>
                    <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg p-6">
                        <div className="font-bold  md:text-lg xl:text-xl 2xl:text-2xl ">Category
                            {categoryList && categoryList.length > 0
                                ? categoryList.map((category, i) => {
                                    return (
                                        <div key={i} className="flex justify-between items-center">
                                            <div className="flex items-center ">
                                                <input id={`category-checkbox-${category}`}
                                                        type="checkbox"
                                                        checked={selectedCategories.includes(category)}
                                                        onChange={() => handleCheckboxChange(category)}  
                                                        value=""
                                                         className="w-5 h-5 text-blue-600 bg-gray-100  focus:ring-2" />
                                                <label for="vue-checkbox" className="py-3 ms-2 text-sm font-medium text-gray-900">
                                                  {category == "UIUX Designer" ? "UI/UX Designer":`${category}`}</label>
                                            </div>
                                            <div className="bg-gray-200 text-gray-800 text-xs font-medium me-2 px-2.5 py-1 text-center inline-block align-middle justify-center  rounded"> {categoryCounts[category] || 0}</div>
                                        </div>
                                    )
                                }
                                )
                                :
                                ""
                            }
                        </div>
                        <div className="font-bold  md:text-lg xl:text-xl 2xl:text-2xl mt-4">Job Type
                            {jobTypeList && jobTypeList.length > 0
                                ? jobTypeList.map((jobType, i) => {
                                    return (
                                        <div key={i} className="flex justify-between items-center">
                                            <div className="flex items-center ">
                                                <input type="checkbox"
                                                        checked={selectedJobTypes.includes(jobType)}
                                                        onChange={() => handleJobTypeCheckboxChange(jobType)}  
                                                         value="" className="w-5 h-5 text-blue-600 bg-gray-100 focus:ring-blue-500 focus:ring-2" />
                                                <label for="vue-checkbox" className=" py-3 ms-2 text-sm font-medium text-gray-900">{`${jobType}`}</label>
                                            </div>
                                            <div className="bg-gray-200 text-gray-800 text-xs font-medium me-2 px-2.5 py-1 text-center inline-block align-middle justify-center  rounded">{jobTypeCounts[jobType] || 0}</div>
                                        </div>
                                    )
                                }
                                )
                                :
                                ""
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JobList

