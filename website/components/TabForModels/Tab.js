'use client'

import React, {useState} from "react"
import Link from "next/link";

const openInNewTab = (url) => {
  window.location.href = url;
};

const Tabs = (props) => {

  console.log("props",props)
  const [openTab, setOpenTab] = useState(props.tab);
  const handleClick = (service) => {

    // Trigger the callback function from the parent component
    props.onTabClick(service);
  };

  // const handleTabClick = (tabIndex, url) => {
  //   setOpenTab(tabIndex);
  //   props.company_id
  //   ? 
  //     openInNewTab(url+props.company_id)
  //   :
  //     openInNewTab(url);
  // };
  return (
    <section className="bg-white w-full">
        <div className="lg:mx-auto max-w-7xl mx-5">
          <ul
            className=" mb-0 list-none  pb-10 grid grid-cols-3 lg:grid-cols-8"
            // className="flex mb-0 list-none flex-wrap pb-10 flex-row"
            role="tablist"
          >
            <li className="mb-3 mr-2 last:mr-0 text-center">
            <Link 
                className={
                  "text-xs font-bold uppercase block leading-normal h-16 py-6 " +
                  (openTab === "All"
                    ? " shadow-[[0_3px_10px_rgba(97,143,237,0.8)] bg-skyBlue rounded-md text-white"
                    : " bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab("All")
                  handleClick("All")
                  // handleTabClick(1, "#All");
                }}
                data-toggle="tab"
                href="/"
                role="tablist"
              >
                  &nbsp; All Services
              </Link>
            </li>
            <li className="mb-3 mr-2 last:mr-0 text-center">
            <Link 
                className={
                  "text-xs font-bold uppercase block leading-normal h-16 py-4 " +
                  (openTab === "Application Development"
                    ? " shadow-[0_3px_10px_#376bff] bg-skyBlue rounded-md text-white"
                    : " bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab("Application Development")
                  handleClick("Application Development")
                  // handleTabClick(1, "#Application_Development");
                }}
                data-toggle="tab"
                href="/"
                role="tablist"
              >
                  &nbsp; Application Development
              </Link>
            </li>
            <li className="mb-3 mr-2 last:mr-0 text-center">
              <a
                className={
                  "text-xs font-bold uppercase block leading-normal h-16 py-4 " +
                  (openTab === "Digital Transformation"
                    ? " shadow-[0_3px_10px_#376bff] bg-skyBlue rounded-md text-white"
                    : " bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab("Digital Transformation");
                  handleClick("Digital Transformation")
                  // handleTabClick(2, "#Digital_Transformation")
                }}
                data-toggle="tab"
                href="/"
                role="tablist"
              >
                 &nbsp; Digital Transformation
              </a>
            </li>
            <li className="mb-3 mr-2 last:mr-0 text-center">
              <a
                className={
                  "text-xs font-bold uppercase block leading-normal h-16 py-4 " +
                  (openTab === "Robotic Process Automation"
                    ? " shadow-[0_3px_10px_#376bff] bg-skyBlue rounded-md text-white"
                    : " bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab("Robotic Process Automation");
                  handleClick("Robotic Process Automation")
                  // handleTabClick(3,"#Robotic_Process_Automation")
                }}
                data-toggle="tab"
                href="/"
                role="tablist"
              >
                &nbsp; Robotic Process Automation
              </a>
            </li>
            <li className="mb-3 mr-2 last:mr-0 text-center">
              <a
                className={
                  "text-xs font-bold uppercase block leading-normal h-16 py-4 " +
                  (openTab === "IT Infrastructure Management"
                    ? " shadow-[0_3px_10px_#376bff] bg-skyBlue rounded-md text-white"
                    : " bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab("IT Infrastructure Management");
                  handleClick("IT Infrastructure Management")
                  // handleTabClick(3,"#Robotic_Process_Automation")
                }}
                data-toggle="tab"
                href="/"
                role="tablist"
              >
                &nbsp; IT Infrastructure Management
              </a>
            </li>
            
            <li className="mb-3 mr-2 last:mr-0 text-center">
              <a
                className={
                  "text-xs font-bold uppercase block leading-normal h-16 py-6 " +
                  (openTab === "Cyber Security"
                    ? " shadow-[0_3px_10px_#376bff] bg-skyBlue rounded-md text-white"
                    : " bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab("Cyber Security");
                  handleClick("Cyber Security")
                  // handleTabClick(3,"#Robotic_Process_Automation")
                }}
                data-toggle="tab"
                href="/"
                role="tablist"
              >
                &nbsp; Cyber Security
              </a>
            </li>
            
            <li className="mb-3 mr-2 last:mr-0 text-center">
              <a
                className={
                  "text-xs font-bold uppercase block leading-normal h-16 py-4 " +
                  (openTab === "Software Testing & QA"
                    ? " shadow-[0_3px_10px_#376bff] bg-skyBlue rounded-md text-white"
                    : " bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab("Software Testing & QA");
                  handleClick("Software Testing & QA")
                }}
                data-toggle="tab"
                href="/"
                role="tablist"
              >
                &nbsp; Software Testing & QA
              </a>
            </li>
            <li className="mb-3 mr-2 last:mr-0 text-center">
              <a
                className={
                  "text-xs font-bold uppercase block leading-normal h-16 py-4 " +
                  (openTab === "Scalable Application"
                    ? " shadow-[0_3px_10px_#376bff] bg-skyBlue rounded-md text-white"
                    : " bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab("Scalable Application");
                  handleClick("Scalable Application")
                }}
                data-toggle="tab"
                href="/"
                role="tablist"
              >
                &nbsp; Scalable Application
              </a>
            </li>
            
          </ul>
        </div>
    </section>

  );
};
export default Tabs
