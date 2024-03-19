/*==========================================================
  Developer  :  Priyanka Bhanwase
  Date       :  1st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/
"use client";
import React, { useState } from "react";
import Accordion from "@/templates/Accordion/accordion.js";
import LPStudEnrollModal from '@/components/StudentEnrollment/LandingPageStudEnrollModal';

const AccordionBlock = ({ inputData }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const { dash, pageTitle, pageTitleCss, accordionData, titleDescriptionCss, titleDescription, titleDescription_2, titleDescription_2Css, modalUrlName, modalDisplay,modalBtnCss} = inputData;
  return (
    <div className=" px-10 mx-auto mb-10 lg:px-10 xl:px-20 2xl:px-40 mt-20">
        {isModalOpen && <LPStudEnrollModal modalId="stud_enroll_modal"/>}
      {dash && (
        <div className="w-full mb-4">
          <ul className="place-content-center flex flex-wrap">
            {[...Array(3)].map((_, index) => (
              <li key={index} className={`dash${index + 1} ${dash}`} />
            ))}
          </ul>
        </div>
      )}
      {pageTitle && (
        <div
          className={
            pageTitleCss
              ? pageTitleCss
              : "block font-extrabold uppercase text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl"
          }
          dangerouslySetInnerHTML={{ __html: pageTitle }}
        />
      )}
      {
        titleDescription && (
          <div className={titleDescriptionCss ? titleDescriptionCss : "block font-semibold text-md text-center md:text-md lg:text-lg xl:text-lg xxl:text-xl mt-5 mb-10"}
            dangerouslySetInnerHTML={{ __html: titleDescription }} ></div>
        )}
      {accordionData.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} />
      ))}
      {
        titleDescription_2 && (
          <div className={titleDescription_2Css ? titleDescription_2Css : "block font-semibold text-md text-center md:text-md lg:text-lg xl:text-lg xxl:text-xl my-10"}
            dangerouslySetInnerHTML={{ __html: titleDescription_2 }} ></div>
        )
      }
       {
                      modalDisplay
                                ?
                                <div onClick={() => setModalOpen(!isModalOpen)} className={modalBtnCss ? modalBtnCss : "text-white hidden"} type="button">
                                    {modalUrlName}{" "}
                                        {/* <i className="fa-solid fa-angle-double-right"></i> */}
                                </div>
                                :
                                ""
                        }
    </div>
  );
};

export default AccordionBlock;
