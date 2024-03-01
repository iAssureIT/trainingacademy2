/*==========================================================
  Developer  :  Prachi Kadam
  Date       :  1st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/
"use client";

import { useState, useEffect } from "react";
import React from "react";

export const LeftUserImageRightText = (props) => {
  // console.log(props.inputData?.testimonials[0].image);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlideInterval, setAutoSlideInterval] = useState(null);

  const handleNextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % props.inputData?.testimonials.length
    );
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? props.inputData?.testimonials.length - 1 : prevIndex - 1
    );
  };

  const startAutoSlide = () => {
    setAutoSlideInterval(setInterval(handleNextSlide, 3000)); // Change slide every 3 seconds
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
  };

  useEffect(() => {
    if (props.inputData?.autoSlide) {
      startAutoSlide();
      return () => {
        stopAutoSlide();
      };
    }
  }, []);
  return (
    <section
      id={props?.inputData?.block_id}
      className={props?.inputData?.blockWrapperClasses}
    >
      {
        <div>
          {props?.inputData?.dash ? (
            <div className="w-full mb-4">
              <ul className="place-content-center flex flex-wrap">
                <li className={"dash1 " + props.inputData.dash}></li>
                <li className={"dash2 " + props.inputData.dash}></li>
                <li className={"dash3 " + props.inputData.dash}></li>
              </ul>
            </div>
          ) : null}
          {props?.inputData?.pageTitle ? (
            <div
              className={
                props?.inputData?.pageTitleCss
                  ? props?.inputData?.pageTitleCss
                  : "block font-extrabold uppercase text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl"
              }
              dangerouslySetInnerHTML={{ __html: props?.inputData?.pageTitle }}
            ></div>
          ) : null}
        </div>

      }
      {props.inputData?.blockContent && (
        <div className={props.inputData?.classForblockContent}>{props.inputData?.blockContent}</div>
      )}
      <div
        className={
          props?.inputData?.imgWrap
            ? props?.inputData?.imgWrap
            : "relative flex items-center justify-center overflow-hidden p-20"
        }
      >
        {props.inputData?.showChangeButtons ? (
          <button
            className="absolute left-0  lg:ml-20 ml-5  bg-white rounded-md lg:rounded-lg shadow-md px-2 lg:px-5 py-1 lg:py-3"
            onClick={handlePrevSlide}
          >
            <i className="fa-solid fa-chevron-left text-xs"></i>
          </button>
        ) : null}

        <div className={props?.inputData?.blockSubWrapperClasses}>
          <div className="  flex bg-titleBlue rounded-lg flex-grow flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border border-gray-200  relative">
            <div className="grid grid-cols-1 container">
              <div className=" w-full    ">
                <div className="p-5 mx-auto mb-2">
                  {props?.inputData ? (
                    <img
                      className={"h-36 w-36 object-cover  rounded-full object-center mx-auto -mt-20"}
                      // src="/images/generic/logo1.png"
                      src={props?.inputData?.testimonials[currentIndex].image}
                      alt={props?.inputData?.testimonials[currentIndex].image ? "logo-iassureit" : ""}
                    />
                  ) : (
                    <img
                      className="h-36 w-36 object-cover rounded-full object-center "
                      src="/images/generic/noImage.jpg"
                      alt="logo-iassureit"
                    />
                  )}

                  <h5 className="my-2 text-lg text-center font-bold">
                    {props?.inputData?.testimonials[currentIndex].name
                      ? props?.inputData?.testimonials[currentIndex].name
                      : ""}
                  </h5>
                  {
                    props?.inputData?.testimonials
                      ?
                      <h6 className="my-2 text-sm text-center font-bold text-lightGray">
                        {props?.inputData?.testimonials[currentIndex].designation
                          ? props?.inputData?.testimonials[currentIndex].designation
                          : ""}

                      </h6>
                      :
                      null
                  }
                </div>
              </div>
              <div className=" w-full p-5 ">
                <p className="text-gray-600  w-full  m-auto text-center "
                  dangerouslySetInnerHTML={{ __html: props?.inputData?.testimonials[currentIndex].testimonial }} >

                </p>
              </div>
              {props.inputData?.autoSlide ? (
                <div className="flex justify-center mt-4 mb-10 md:mb-10">
                  {props.inputData?.testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-4 h-4 rounded-full mx-1 ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"
                        }`}
                      onClick={() => setCurrentIndex(index)}
                    ></button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {props.inputData?.showChangeButtons ? (
          <button
            className="absolute right-0  lg:mr-20 mr-5 bg-white rounded-md lg:rounded-lg shadow-md px-2 lg:px-5 py-1 lg:py-3 "
            onClick={handleNextSlide}
          >
            <i className="fa-solid fa-chevron-right text-xs"></i>
          </button>
        ) : null}
      </div>

    </section>
  );
};
export default LeftUserImageRightText;
