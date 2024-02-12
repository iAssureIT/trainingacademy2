/*==========================================================
  Developer  :  Prachi Kadam
  Date       :  23rd Dec 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

import React from "react";
import Image from "next/image";
import InquiryForm from "@/widgets/InquiryForm/InquiryForm";
const CaseStudyContactUs = (props) => {
  var largeImageURL = props?.inputData?.leftBgImage;
  var smallImageURL = props?.inputData?.leftSmallBgImage;

  return (
    <section className=" bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className=" w-full p-20">
          <div>
            <div className="w-full mb-4">
              <ul className="place-content-left flex flex-wrap">
                <li className="dash1 border-blue-700 mb-5"></li>
                <li className="dash2 border-blue-700 mb-5"></li>
                <li className="dash3 border-blue-700 mb-5"></li>
              </ul>
            </div>

            <div className="w-full">
              <div
                className="w-full text-2xl lg:text-3xl xl:text-4xl xxl:text-6xl font-semibold text-blackHeading mb-5 "
                dangerouslySetInnerHTML={{ __html: props?.inputData?.title }}
              ></div>
              <div
                className="w-full text-lg lg:text-xl xl:text-2xl xxl:text-4xl font-normal text-blackHeading mb-5 "
                dangerouslySetInnerHTML={{ __html: props?.inputData?.subTitle }}
              ></div>
              <div>
                <img src={props?.inputData?.image} className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  h-full items-center">
          <div
            className={
              props?.inputData?.bgImgCss
                ? props?.inputData?.bgImgCss
                : "bg-cover p-5 md:p-12  block shadow-lg  bg-no-repeat  max-w-full  sm:bg-cover bg-center h-auto min-h-80  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]"
            }
            style={{
              "--largeImage-url": `url(${largeImageURL})`,
              "--smallImage-url": `url(${
                smallImageURL ? smallImageURL : largeImageURL
              })`,
              backgroundSize: "100% 100%",
            }}
          >
            <div className="my-auto w-full   mx-auto lg:mx-0 text-darkGray content-center  place-content-center  justify-center  px-5  2xl:px-2 md:pl-6 md:pl-16 lg:px-0 xl:pl-4 xxl:pl-40 md:-mt-5 ">
              <InquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyContactUs;
