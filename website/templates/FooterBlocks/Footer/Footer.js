/*==========================================================
  Developer  :  Priyanka Bhanvase
  Date       :  12st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

import React from "react";

const Footer = (props) => {
  var largeImageURL = props?.inputData?.bgImage;
  var smallImageURL = props?.inputData?.smallBGImage;
  return (
    <section id="footer">
      <div
        className={
          props?.inputData?.bannerClass
            ? props?.inputData?.bannerClass
            : "relative bg-cover p-12 block shadow-lg  bg-no-repeat  max-w-full  sm:bg-cover bg-center  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]"
        }
        style={{
          "--largeImage-url": largeImageURL ? `url(${largeImageURL})` : 'none',
          "--smallImage-url": smallImageURL ? `url(${smallImageURL})` : largeImageURL ? `url(${largeImageURL})` : 'none',
        //  backgroundSize: "100% 100%",
      }}
      >
        <div className="mx-auto w-full max-w-screen-exLG  ">
          <div className="md:flex md:justify-between px-8 md:px-8 xl:px-20 2xl:px-32 pt-2 xs:pt-0 sm:pt-4 md:pt-4 lg:pt-2 md:pb-0 lg:pb-0">
            <div className="text-left lg:text-left grid grid-cols-1 md:grid-cols-1 lg:grid-cols-7 xl:grid-cols-7 2xl:grid-cols-7 lg:gap-8 2xl:gap-10 mt-10 lg:mt-0">
              <div className="pb-5  lg:pt-10 normal-case	">
                {props.inputData.title1 ? (
                  <h2
                    className={
                      "mb-6 text-md xxl:text-lg font-extrabold text-orangeColor decoration-white underline-offset-4 " +
                      props.inputData?.titleCss
                    }
                  >
                    {props.inputData.title1}
                  </h2>
                ) : null}
                <div className=" flex flex-wrap text-light dark:text-light-400 font-[500] lg:font-bold text-sm ">
                  {props?.inputData?.footerList?.length > 0
                    ? props?.inputData?.footerList?.map((data, index) => {
                      return (
                        <div key={index} className="mb-1 md:mb-1 w-full ">
                          <div className="mx-auto lg:mx-0">
                            <a
                              href={data.link}
                              target="_self"
                              className=" hover:underline text-sm lg:text-sm xl:text-lg "
                              aria-label="FooterIcon"
                              
                            >
                              {props.inputData?.icon ? (
                                <img
                                  className="h-3 first-line:flex lazyload"
                                  alt="icon"
                                  src={
                                    props.inputData?.icon
                                      ? props.inputData?.icon
                                      : ""
                                  }
                                  draggable="false"
                                />
                              ) : null}
                              {data.label}
                            </a>
                          </div>
                        </div>
                      );
                    })
                    : null}
                </div>
              </div>
              <div className="md:col-span-2 pt-0 lg:py-10">
                {props.inputData?.title2 ? (
                  <h2
                    className={
                      "mb-6 text-md xxl:text-lg font-extrabold  text-orangeColor decoration-white  underline-offset-4 " +
                      props.inputData?.titleCss
                    }
                  >
                    {props.inputData?.title2}
                  </h2>
                ) : null}
                {props.inputData?.sitemapList?.length > 0 ? (
                  <div className="flex flex-wrap text-light dark:text-light-400 font-normal text-sm poin">
                    {props.inputData?.sitemapList.map((data, index) => {
                      return (
                        <div key={index} className="mb-0 w-full mx-auto ">
                          <a
                            href={data.link}
                            target="_self"
                            className="hover:underline text-lg md:text-sm lg:text-sm xl:text-base mb-10 font-bold capitalize "
                            aria-label="FooterIcon"
                          >
                            <span className="font-bold  mb-4">
                              {data.label}
                            </span>
                          </a>
                          <div className="mt-3">
                            {data?.subItem?.map((subitem, index) => {
                              return (
                                <div key={index} className="mb-1">
                                  <a
                                    href={subitem?.link}
                                    target="_blank"
                                    className="flex hover:underline text-sm lg:text-sm xl:text-sm"
                                    aria-label="FooterIcon"
                                  >
                                    <span>
                                      <i className="fa-solid fa-angles-right mr-2 "></i>
                                    </span>
                                    <span>{subitem.label}</span>
                                  </a>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </div>
              <div className="md:col-span-2 py-0 lg:pt-10 lg:pl-10 xl:pl-10">
                {props.inputData?.title3 ? (
                  <h2
                    className={
                      "mb-6 text-md xxl:text-lg font-extrabold text-orangeColor decoration-white underline-offset-4 " +
                      props.inputData?.titleCss
                    }
                  >
                    {props.inputData?.title3}
                  </h2>
                )
                  : ""
                }
                <ul className="text-light text-sm lg:text-sm xl:text-base ">
                  {/* <hr className='bg-gray-50 mb-3 w-10/12'/> */}
                  <li className="mb-3 flex place-content-start sm:place-content-start">
                    <i className="fa-solid fa-location-dot mr-1 mt-1 text-orangeColor "></i>
                    <span className="">
                      <span className=" ">{props.inputData.addLine1},</span><br />
                      <span className="">
                        {props.inputData.addLine2
                          ? props.inputData.addLine2 + ","
                          : null}
                        {props.inputData.addLine3 &&
                          props.inputData.addLine2 ? (
                          <br />
                        ) : null}
                        {props.inputData.addLine3}
                      </span>
                    </span>
                  </li>
                  <li className="mb-5 flex  place-content-start lg:place-content-start">
                    <i className="fa-solid fa-mobile-screen mr-1 text-orangeColor my-auto"></i>
                    <div>
                      <div className="flex">
                        <div className=" left">Support</div>:&nbsp;
                        <div className="left"> {props.inputData?.phone1}</div>
                      </div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <i className="fa-regular fa-envelope mr-1 text-orangeColor"></i>
                    {props.inputData.email1}
                  </li>
                </ul></div>


              <div className="md:col-span-2 2xl:col-span-2 lg:mb-6 md:mb-0 place-start-left md:pt-10">
                <a
                  href="/"
                  className="hidden md:hidden  lg:block  items-center  md:items-start"
                  aria-label="Home"
                >
                  <img
                    src={props.inputData.logo}
                    className={
                      props?.inputData?.logoCss
                        ? props?.inputData?.logoCss + " lazyload"
                        : " lazyload mr-3 "
                    }
                    alt="Logo"
                    draggable="false"
                  />
                </a>
                <a
                  href="/"
                  className="block lg:hidden items-center"
                  aria-label="Home"
                >
                  <img
                    src={props.inputData.smallLogo}
                    className={
                      props?.inputData?.logoCss
                        ? props?.inputData?.logoCss + " lazyload"
                        : " mr-3 lazyload"
                    }
                    alt="Logo"
                    draggable="false"
                  />
                </a>

                <div
                  className={
                    " sm:justify-between py-5 text-md  " +
                    props.inputData?.iconColor
                  }
                >
                  <div className="flex  space-x-2 xl:space-x-5 place-content-start lg:place-content-center my-0 md:my-8">
                   
                    {props.inputData.twitterLink ? (
                      <a
                        href={props.inputData.twitterLink}
                        className=" text-light hover:text-gray-900 "
                        aria-label="Twitter"
                      >
                        <svg
                          className="p-2 mx-auto rounded-full border-2 w-10 h-10  hover:bg-white border-orangeColor  text-orangeColor"
                          fill="currentColor "
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                        <span className="sr-only">Twitter page</span>
                      </a>
                    ) : null}
                    {props.inputData.telegramLink ? (
                      <a
                        href={props.inputData.telegramLink}
                        className="text-light hover:text-gray-900 "
                        aria-label="Telegram"
                      >
                        <i className="fa-brands fa-telegram"></i>
                      </a>
                    ) : null}
                    <div className="flex justify-center">
  {props.inputData.fbLink ? (
    <a
      href={props.inputData.fbLink}
      className="flex items-center justify-center relative text-light hover:text-gray-900 w-10 h-10 mx-2 rounded-full border-2 hover:bg-white border-orangeColor"
      aria-label="Facebook Link"
    >
      <i className="absolute px-auto fa-brands fa-facebook-f text-orangeColor"></i>
      <span className="sr-only">Facebook page</span>
    </a>
  ) : null}
  {props.inputData.instagramLink ? (
    <a
      href={props.inputData.instagramLink}
      className="flex items-center justify-center text-light hover:text-gray-900 mx-2 w-10 h-10 relative rounded-full border-2 hover:bg-white border-orangeColor"
      aria-label="Instagram"
    >
      <i className="fa-brands fa-instagram absolute px-auto  text-orangeColor"></i>
      <span className="sr-only">Instagram page</span>
    </a>
  ) : null}
  {props.inputData.linkedIn ? (
    <a
      href={props.inputData.linkedIn}
      className="flex items-center justify-center w-10 h-10 text-light hover:text-gray-900 mx-2 rounded-full border-2 hover:bg-white border-orangeColor relative  "
      aria-label="LinkedIn"
    >
      <i className="fa-brands fa-linkedin absolute px-auto  text-orangeColor"></i>
    </a>
  ) : null}
  {props.inputData.youtubeLink ? (
    <a
      href={props.inputData.youtubeLink}
      className="flex items-center justify-center text-light hover:text-gray-900 mx-2 w-10 h-10 rounded-full border-2 hover:bg-white border-orangeColor relative "
      aria-label="Youtube"
    >
      <i className="fa-brands fa-youtube absolute px-auto text-orangeColor"></i>
      <span className="sr-only">Youtube page</span>
    </a>
  ) : null}
</div>

                    {props.inputData.whatsup ? (
                      <a
                        href={props.inputData.whatsup}
                        className="m-auto  w-[38px] h-[38px]  text-light hover:text-gray-900 "
                        aria-label="Youtube"
                      >
                        <i className="fa-brands fa-whatsapp p-3 mx-auto  hover:bg-white  rounded-full border-2 border-orangeColor  text-orangeColor"></i>
                      </a>
                    ) : null}
                  </div>
                  {props.inputData.website ? (
                    <div className="flex mt-4 space-x-2 sm:mt-0">
                      <i className="fa-solid fa-globe"></i>
                      <span
                        className="text-sm xxl:text-sm sm:text-center "
                        dangerouslySetInnerHTML={{
                          __html: props.inputData.website,
                        }}
                      ></span>
                    </div>
                  ) : null}
                  {props.inputData?.btnName ? (
                    <div className="flex place-content-start lg:place-content-start">
                      <a href={props.inputData?.btnUrl}>
                        <div className={props?.inputData?.btnClass}>
                          {props.inputData?.btnName}
                        </div>
                      </a>
                    </div>
                  ) : null}


                </div>
              </div>
            </div>
          </div>
          {props.inputData?.copyrightText ? (
            <div className="sm:flex sm:items-center sm:justify-between bg-Blue py-5 xl:px-20 px-8">
              <span className="text-xs md:text-sm xxl:text-sm  sm:text-center ">
                <span
                  dangerouslySetInnerHTML={{
                    __html: props.inputData.copyrightText,
                  }}
                ></span>
              </span>
              <div className="flex mt-3 md:mt-4 space-x-6 sm:justify-center sm:mt-0">
                <span
                  className="text-xs md:text-sm xxl:text-sm sm:text-center md:flex"
                  dangerouslySetInnerHTML={{
                    __html: props.inputData.footerText,
                  }}
                ></span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Footer;
