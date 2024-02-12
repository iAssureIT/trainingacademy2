/*==========================================================
  Developer  :  Priyanka Bhanwase
  Date       :  1st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

import Accordion from "@/templates/Accordion/accordion.js";
import { useState, useEffect } from "react";

const AccordionBlock = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchData, setSearchData] = useState("");

  const handleChange = (event) => {
    setSearchData(event.target.value);
  };
  return (
    <div className="container mx-auto px-5  lg:px-32 xl:px-32 mb-10">
      {/* <label className="mx-auto  max-w-2xl relative   shadow-xl shadow-black-500/50">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
        </span>
        <input
          className="mt-10 overflow-visible  placeholder:text-slate-400 block bg-white w-full shadow-lg rounded-md lg:py-6 py-2 pl-9 pr-3 focus:outline-none focus:ring-1 sm:text-sm border border-1 mb-4"
          placeholder=""
          type="text"
          name="search"
          onChange={handleChange}
          value={searchData}
        />
        <button
          type="submit"
          className="absolute top-0 right-0 xxl:py-6 rounded-md lg:px-10 lg:py-3 py-1 px-7  text-sm font-medium text-white rounded-r-lg  focus:ring-4 focus:outline-none bg-blue dark:focus:ring-blue"
        >
          <svg
            aria-hidden="true"
            className="stroke-2 w-8 lg:h-11 h-8 xxl:10 xxl:16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </label>
      <h2 className="text-2xl my-9 font-bold">Purchase</h2> */}
      {props?.inputData?.dash ?
          <div className="w-full mb-4">
              <ul className="place-content-center flex flex-wrap">
                  <li className={"dash1 " + props.inputData.dash}></li>
                  <li className={"dash2 " + props.inputData.dash}></li>
                  <li className={"dash3 " + props.inputData.dash}></li>
              </ul>
          </div>
          :
          null
      }
      {
          props?.inputData?.pageTitle ?
              <div className={props?.inputData?.pageTitleCss ? props?.inputData?.pageTitleCss : "block font-extrabold uppercase text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl"} 
              dangerouslySetInnerHTML={{ __html: props?.inputData?.pageTitle }} ></div>
              :
              null
      }
      {props?.inputData?.accordionData.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default AccordionBlock;
