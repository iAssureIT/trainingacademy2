/*==========================================================
  Developer  :  Sarika Ghanwat
  Date       :  12st Dec 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

import React from "react";

const Footer2 = (props) => {
  var largeImageURL = props?.inputData?.bgImage;
  var smallImageURL = props?.inputData?.smallBGImage;
  return (
    <section>
      <div
        className={
          props?.inputData?.bgImgCss
            ? props?.inputData?.bgImgCss
            : "relative bg-cover p-12 block shadow-lg  bg-no-repeat  max-w-full  sm:bg-cover bg-center  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]"
        }
        style={{
          "--largeImage-url": largeImageURL ? `url(${largeImageURL})` : 'none',
          "--smallImage-url": smallImageURL ? `url(${smallImageURL})` : largeImageURL ? `url(${largeImageURL})` : 'none',
          backgroundSize: "100% 100%",
      }}
      >
        <div className="mx-auto w-full max-w-screen-exLG  ">
         <div className="sm:flex sm:items-center sm:justify-between bg-Blue py-3 xl:px-20 px-8">
            <span className="text-xs md:text-sm xxl:text-sm  sm:text-center ">
              <span
                dangerouslySetInnerHTML={{
                  __html: props.inputData.copyrightText,
                }}
              ></span>
            </span>
            <div className="flex mt-0 md:mt-4 space-x-6 sm:justify-center sm:mt-0">
              <h2
                className="text-xs md:text-sm xxl:text-sm sm:text-center md:flex"
                dangerouslySetInnerHTML={{
                  __html: props.inputData.footerText,
                }}
              ></h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer2;
