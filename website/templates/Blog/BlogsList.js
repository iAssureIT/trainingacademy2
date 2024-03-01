/*==========================================================
  Developer  :  Sarika Ghanwat
  Date       :  5st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

"use client";
import React from 'react'
import moment from 'moment';
const BlogsList = (props) => {
    return(
    <section>
        <div className={props.inputData?.secCss?props.inputData?.secCss:"main p-5 lg:px-20 bg-white"} id="mainblk" >
            <div className={props.inputData?.classForblockTitle?props.inputData?.classForblockTitle:"md:col-span-4 text-center text-2xl font-bold my-auto "}>
            {props.inputData.dash?
              <div className="w-full mb-4">
              <ul className="place-content-center flex flex-wrap">
                  <li className={"dash1 "+props.inputData.dash}></li>
                  <li className={"dash2 "+props.inputData.dash}></li>
                  <li className={"dash3 "+props.inputData.dash}></li>
              </ul>
          </div>
          : null}
          {props?.inputData?.blockTitle}</div>
            <div className={props.inputData?.gridDivCss?props.inputData?.gridDivCss:"grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10"}>
                    {props?.inputData?.blogData && props?.inputData?.blogData.length > 0
                        ?
                        props?.inputData?.blogData.map((data, index) => {
                            return (

                                <div className={" rounded-lg "} key={index}>
                                    <div className={"px-0 shadow-lg rounded-xl pb-10 "}>
                                        <div className={" mb-3 "}>
                                            <a className={"text-sm"} href={"/blogs/" + data?.blogURL + "-" + data?._id} target="_blank">
                                                <img className={"  mb-2 mt-1 w-full h-60 "} src={data?.blogHeaderImage ? data?.blogHeaderImage : "/images/generic/noImage.jpg"} alt={"blogHeaderImg"}/>
                                            </a>
                                        </div>
                                        <div className={"grid grid-cols-1 px-5"}>
                                            <div className={"text-left "}><i className="fa fa-clock mr-2" aria-hidden="true"></i>{moment(data.createdAt).format("DD MMM YYYY")}</div>
                                            <div className={" text-right "}>{data.duration ? data.duration : null}</div>
                                        </div>
                                        <div className={"px-3 mb-3 mt-3 text-left "}>
                                            <a className={""} href={"/consultant-profile/" + props.inputData?.user_id} target="_blank">{data.userFullName}</a>
                                        </div>
                                        <div className="px-3 mt-2">
                                            <h6 className={"truncate text-left mb-2 text-2xl tracking-tight text-gray-900 "}>
                                                <b>{data.blogTitle}</b>
                                            </h6>
                                        </div>
                                        <p className={"  w-full h-32 text-md p-4 overflow-hidden"} dangerouslySetInnerHTML={{ __html: data.blogSummary }}></p>
                                        <div className={"text-right px-3 mt-5"}>
                                            <a className={"font-medium text-blue-600  hover:underline"} href={"/blogs/" + data.blogTitle + "-" + data?._id} target="_blank">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                        :
                        null
                    }
            </div>
        </div>
    </section>
    );
};
export default BlogsList;