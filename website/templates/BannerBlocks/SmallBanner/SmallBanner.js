/*==========================================================
  Developer  :  Sarika Ghanwat
  Date       :  12st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

"use client";
import React from "react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import LandingPageModal from '@/components/Modal/landingPageModal';

const SmallBanner = (props) => {
  const { inputData } = props;
  const { id, bgImgCss, singlebgImage, bgImage, smallBGImage, gridCss, gridCol1Class, title, titleClass, subHeading, subHeadingCss, logo, logoClassName, currentPage, btnText, btnClass, link, image, imageCss, imgTagcss, para, paraCss, urlName, linkCss, modalDisplay } = inputData;

  return (
    <section id={id}>
      {!singlebgImage ? (
        <div
          className={bgImgCss || "bg-cover p-12 block shadow-lg bg-no-repeat max-w-full sm:bg-cover bg-center lg:h-72 xl:h-96 h-96 lg:bg-[image:var(--largeImage-url)] bg-[image:var(--smallImage-url)]"}
          style={{
            "--largeImage-url": bgImage ? `url(${bgImage})` : 'none',
            "--smallImage-url": smallBGImage ? `url(${smallBGImage})` : bgImage ? `url(${bgImage})` : 'none',
            backgroundSize: "100% 100%",
          }}
        >
          <div className={gridCss || "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 h-full w-full content-center"}>
            <div className={gridCol1Class || "my-auto sm:w-auto text-white ml-5 md:ml-10 lg:ml-10 xl:ml-32 xxl:ml-52 sm:ml-5 py-7"}>
              {title && <h2 className={titleClass || "mb-4 text-xl sm:text-4xl xxl:text-4xl font-bold text-white"}>{title}</h2>}
              {subHeading && <h4 className={subHeadingCss || "mb-6 text-xl font-normal text-justify lg:w-auto"}>{subHeading}</h4>}
              {logo && <div className={logoClassName || 'flex'}><img src={logo} data-src={logo} className="lazyload" /></div>}
              {currentPage && <Breadcrumb currentPage={currentPage} />}
              {btnText && <button className={btnClass}><a href={link}>{btnText}</a></button>}
            </div>
            {image && (
              <div className={imageCss || 'object-fit'}>
                <img
                  className={imgTagcss || 'h-full w-full lazyload'}
                  src={image}
                  alt="Picture of the author"
                />
              </div>
            )}
            {para && <div className={paraCss} dangerouslySetInnerHTML={{ __html: para }}></div>}
            {urlName && <div className={linkCss || "text-white hidden"}><a href={link}>{urlName}</a></div>}
            {modalDisplay && (
              <div className="mx-auto">
                <LandingPageModal modalId="contactFormModal" modalcss="w-48 p-2 float-left mt-3 text-lg font-bold text-center bg-white text-darkGray border rounded cursor-pointer md:text-xl 2xl:px-2 xl:mt-8 2xl:mt-10 md:w-48 lg:w-64 xl:w-48 2xl:w-48 btn hover:bg-blue-800 hover:text-white" />
              </div>
            )}
          </div>
        </div>
      ) : (
        <section className="w-full bg-cover">
          <img className={props?.inputData?.className || "h-96 w-auto mx-auto mt-10 xxl:my-16 pb-10 lazyload"} data-src={singlebgImage} alt={props?.inputData?.alt} />
        </section>
      )}
    </section>
  );
};

export default SmallBanner;
