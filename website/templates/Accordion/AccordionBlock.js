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
    <div className="max-w-5xl px-10 mx-auto mb-10 lg:px-32 xl:px-32">
      {/* <label className="relative max-w-2xl mx-auto shadow-xl shadow-black-500/50">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="w-5 h-5 fill-slate-300" viewBox="0 0 20 20"></svg>
        </span>
        <input
          className="block w-full py-2 pr-3 mt-10 mb-4 overflow-visible bg-white border rounded-md shadow-lg placeholder:text-slate-400 lg:py-6 pl-9 focus:outline-none focus:ring-1 sm:text-sm border-1"
          placeholder=""
          type="text"
          name="search"
          onChange={handleChange}
          value={searchData}
        />
        <button
          type="submit"
          className="absolute top-0 right-0 py-1 text-sm font-medium text-white rounded-md rounded-r-lg xxl:py-6 lg:px-10 lg:py-3 px-7 focus:ring-4 focus:outline-none bg-blue dark:focus:ring-blue"
        >
          <svg
            aria-hidden="true"
            className="w-8 h-8 stroke-2 lg:h-11 xxl:10 xxl:16"
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
      <h2 className="text-2xl font-bold my-9">Purchase</h2> */}
      {props?.inputData?.dash ?
          <div className="w-full">
              <ul className="flex flex-wrap place-content-center">
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
              <div className={props?.inputData?.pageTitleCss ? props?.inputData?.pageTitleCss : "mt-5 block font-extrabold text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl"} 
              dangerouslySetInnerHTML={{ __html: props?.inputData?.pageTitle }} ></div>
              :
              null
      }
      {
          props?.inputData?.titleDescription ?
              <div className={props?.inputData?.titleDescriptionCss ? props?.inputData?.titleDescriptionCss : "block font-semibold text-md text-center md:text-md lg:text-lg xl:text-lg xxl:text-xl mt-5 mb-10"} 
              dangerouslySetInnerHTML={{ __html: props?.inputData?.titleDescription }} ></div>
              :
              null
      }
      {props?.inputData?.accordionData.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} />
      ))}
      
      {
          props?.inputData?.titleDescription_2 ?
              <div className={props?.inputData?.titleDescription_2Css ? props?.inputData?.titleDescription_2Css : "block font-semibold text-md text-center md:text-md lg:text-lg xl:text-lg xxl:text-xl my-10"} 
              dangerouslySetInnerHTML={{ __html: props?.inputData?.titleDescription_2 }} ></div>
              :
              null
      }
    </div>
  );
};

export default AccordionBlock;
