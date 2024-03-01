// CaseStudyView.js
"use client"
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BgImgLeftContentRtImg from "@/templates/ContentBlocks/BgImgLeftContent/BgImgLeftContentRtImg";
import BgImgRightContent from "@/templates//ContentBlocks/BgImgRightContent/BgImgRightContent";
import BigBannerImage from "@/templates/BannerBlocks/BigImageBanner/BigBannerImage"
import ProfileImages from "@/templates/ProfileImages/ProfileImages";
import BgImgLeftImgRtGrid from "@/templates/ContentBlocks/BgImgLeftImgRightGrid/BgImgLeftImgRightGrid";
import OurPortfolio from "@/templates/OurPortfolio/OurPortfolio";
import CenterContentRepeatableBlocks from "@/templates/RepeatableBlocks/CenterContentRepeatableBlocks/CenterContentRepeatableBlocks";
import CenterImgCenterContentRepBlk from "@/templates/RepeatableBlocks/CenterImgCenterContentRepeatableBlocks/CenterImgCenterContentRepeatableBlocks";
import LeftUserImageRightText from "@/templates/Carousel/LeftUserImageRightText/LeftUserImageRightText";
import CustomHead from "@/templates/CustomHead/CustomHead";

const BetterCottonInitiative = (props, data) => {
  const [pageData, setPageData] = useState(null);
  useEffect(() => {
    axios
      .get("/api/casestudy/get/single-case-study-page/" + props.page_id)
      .then(res => {
        console.log("data -> ", res.data);
        if (res?.data) {
          setPageData(res?.data);
        } else {
          // setBlogDetails(true);
        }
      })
      .catch((error) => {
        Swal.fire(
          "Data not found",
          error.message,
          "error"
        );
      });
  }, [])

 
  const content_bciBanner = {
    id: "Banner1",
    bgImage: pageData?.bannerImage ? `${process.env.NEXT_PUBLIC_BASE_URL}/${pageData?.bannerImage}`.replace(/\\/g, "/") : "",
    smallBGImage: pageData?.bannerImage ? `${process.env.NEXT_PUBLIC_BASE_URL}/${pageData?.bannerImage}`.replace(/\\/g, "/") : "",
    logo: "",
    // pageTitle: pageData?.projectName,
    pageTitleCss: "text-center text-dark w-full BlockTitle mb-10 ",
    h1Txt: "",
    // "<h1 class='leading-tight'>BETTER COTTON INITIATIVE</h1><br /><span>MOBILE APP</span> ",
    para: "",
    bgImgCss:
      "lazyload object-fit h-[700px] py-0 sm:py-10 md:py-10 2xl:py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    logoCss: "lazyload justify-left align-left  mb-5 ",
    h1TxtCss: " text-5xl md:text-4xl xl:text-7xl 2xl:text-8xl  font-extrabold text-center md:text-left content-left  place-content-left  justify-center content-left px-5 md:px-0 ",
    // " text-black text-xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-5xl leading-relaxed text-center lg:text-left pt-20 font-bold",
    paraCss:
      "text-black text-sm sm:text-lg md:text-2xl lg:text-2xl text-justify font-light mt-5 md:mt-10 lg:mt-20",
    gridCss:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 place-content-center lg:grid-cols-2 mb-5 md:mb-10  lg:h-full   xl:h-full h-full content-center  px-5 md:px-20 2xl:px-32 xxl:!px-48",
    gridSubDivCss:
      " mt-12 mx-auto text-white content-center  place-content-center  justify-center  ",
    image: "",
    imageCss: " mr-5 object-fit lazyload w-2/3 md:w-2/3 xl:w-2/3 2xl:w-2/3 xxl:!w-full mr-5 mb-10 pb-5 md:py-10 h-screen",
    imgTagcss: "mx-5 lazyload",
    borderColor:
      "border-darkBluobject-fit py-10 md:py-20 2xl:py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyloadede",
    linkCss:
      " mx-auto lg:mx-0 font-bold text-sm md:text-xl  p-3  2xl:px-2 text-center border w-2/3 md:w-1/2  lg:w-1/2 xl:w-1/3 2xl:w-1/3 rounded btn bg-light text-darkGray my-10 hover:bg-transparent hover:text-white hover:shadow-2xl",
  }

  const content_bci_2 = {
    id: "leftContent1RightImg1",
    bgImage:
      "",
    smallBGImage: "",
    logo: "",
    pageTitle: "",
    pageTitleCss: "text-center text-dark w-full BlockTitle mb-10 ",
    h1Txt:
      "<h1 class='leading-tight'>ABOUT CLIENT </h1><br /> ",
    para: pageData?.leftContent1 ? pageData?.leftContent1 : "",
    bgImgCss:
      "lazyload object-fit py-0 sm:py-10 md:py-10 2xl:py-20 bg-cover bg-no-repeat relative  h-screen w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    logoCss: "lazyload justify-left align-left  mb-5 ",
    h1TxtCss: " text-black text-xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-5xl leading-relaxed text-center lg:text-left pt-20 font-bold",
    paraCss:
      "text-black text-sm sm:text-lg md:text-2xl lg:text-2xl text-justify font-light mt-5 ",
    gridCss:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 place-content-center lg:grid-cols-2 mb-5 md:mb-10  lg:h-full   xl:h-full h-full content-center  px-5 md:px-20 2xl:px-32 xxl:!px-48",
    gridSubDivCss:
      "  mx-auto text-white content-center  place-content-center  justify-center  ",
    image: "",
    image: pageData?.rightImg1 ? `${process.env.NEXT_PUBLIC_BASE_URL}/${pageData?.rightImg1}` : "",
    imageCss: "  object-fit lazyload w-2/3 md:w-2/3 xl:w-2/3 2xl:w-2/3 xxl:!w-full mx-auto mb-10 pb-5 md:py-10 h-32",
    imgTagcss: "mx-auto lazyload",
    borderColor:
      "border-darkBluobject-fit py-10 md:py-20 2xl:py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyloadede",
    linkCss:
      " mx-auto lg:mx-0 font-bold text-sm md:text-xl  p-3  2xl:px-2 text-center border w-2/3 md:w-1/2  lg:w-1/2 xl:w-1/3 2xl:w-1/3 rounded btn bg-light text-darkGray my-10 hover:bg-transparent hover:text-white hover:shadow-2xl",
  };

  const content_bci_3 = {
    id: "Banner2",
    bgImage: pageData?.bannerImg2 ? `${process.env.NEXT_PUBLIC_BASE_URL}/${pageData?.bannerImg2}`.replace(/\\/g, "/") : "",
    smallBGImage: "",
    logo: "",
    pageTitle: "",
    pageTitleCss: " text-light  w-full text-center  text-3xl md:text-3xl xl:text-5xl",
    blockContent: "",
    classForblockContent:
      "px-5 md:px-1 lg:w-3/4 xl:w-4/5 2xl:w-2/3 xxl:!w-2/4 mx-auto text-center font-normal text-darkGray mb-10 text-lg md:text-2xl text-white mt-6",
    bgImgCss:
      "object-fit py-32 xl:py-52 2xl:py-48 bg-cover bg-no-repeat relative  h-screen w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload bg-[length:200%_100%] md:bg-[length:100%_100%] ",
    logoCss: " justify-left align-left  mb-5 lazyload",
    paraCss: "subTitle text-justify font-normal",
    gridCss:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  md:mx-20 lg:mx-10 xl:mx-20 place-content-center  lg:h-full   xl:h-full h-full content-center  ",
    gridSubDivCss:
      "my-auto w-full mx-auto text-white content-center  place-content-center  justify-center py-5 px-10 ",
    // fgImg: "",
    // imageCss: " w-auto mx-auto pt-20 md:pt-20 object-fit lazyload",
    // imgTagcss:"h-auto w-full ls-is-cached lazyloaded",
    // contentSubDiv: "w-full h-auto md:p-10 lg:p-2 xl:p-10",
    colorTxt: "",
    para: "",
    link: "",
    // color: "blackColor",
    // dash: "border-white  mb-5 md:mb-3 mt-12 md:mt-32 xl:mt-24 2xl:mt-32",
  };
  const content_bci_4 = {
    id: "leftImg1RightContent1",
    bgImage: "",
    smallBGImage: "",
    bgImgCss: "lazyload",
    paraTitle:pageData?.rightContent1 ?pageData?.rightContent1:"",
    // paraTitle: "<span class='text-light font-bold leading-relaxed'> GET READY FOR NEW CUSTOMER ACQUISITIONS BY CRAFTING,<br/> <span class='title text-orange-400 text-left' > </span>",
    paraTitleClass: "title text-left font-normal leading-tight",
    gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-16    lg:pl-20 xl:px-4 2xl:px-20 xxl:px-32",
    gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
    bannerClass: "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: pageData?.leftImg1 ? `${process.env.NEXT_PUBLIC_BASE_URL}/${pageData?.leftImg1}` : "",
    imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto lazyload pt-10 md:pt-32 xl:pt-28",
  }
  const content_Banner3 = {
    id: "Banner3",
    bgImage: pageData?.bannerImg3 ? `${process.env.NEXT_PUBLIC_BASE_URL}/${pageData?.bannerImg3}`.replace(/\\/g, "/") : "",
    smallBGImage: "",
    logo: "",
    pageTitle: "",
    pageTitleCss: " text-light  w-full text-center  text-3xl md:text-3xl xl:text-5xl",
    blockContent: "",
    classForblockContent:
      "px-5 md:px-1 lg:w-3/4 xl:w-4/5 2xl:w-2/3 xxl:!w-2/4 mx-auto text-center font-normal text-darkGray mb-10 text-lg md:text-2xl text-white mt-6",
    bgImgCss:
      "object-fit py-32 xl:py-52 2xl:py-48 bg-cover bg-no-repeat relative  h-screen w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload bg-[length:200%_100%] md:bg-[length:100%_100%] ",
    logoCss: " justify-left align-left  mb-5 lazyload",
    paraCss: "subTitle text-justify font-normal",
    gridCss:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  md:mx-20 lg:mx-10 xl:mx-20 place-content-center  lg:h-full   xl:h-full h-full content-center  ",
    gridSubDivCss:
      "my-auto w-full mx-auto text-white content-center  place-content-center  justify-center py-5 px-10 ",
    // fgImg: "",
    // imageCss: " w-auto mx-auto pt-20 md:pt-20 object-fit lazyload",
    // imgTagcss:"h-auto w-full ls-is-cached lazyloaded",
    // contentSubDiv: "w-full h-auto md:p-10 lg:p-2 xl:p-10",
    colorTxt: "",
    para: "",
    link: "",
    // color: "blackColor",
    // dash: "border-white  mb-5 md:mb-3 mt-12 md:mt-32 xl:mt-24 2xl:mt-32",
  };
  
  const content_bci_5 = {
    id: "leftContent2RightImg2",
    bgImage:
      "",
    smallBGImage: "",
    logo: "",
    pageTitle: "",
    pageTitleCss: "text-center text-dark w-full BlockTitle mb-10 ",
    h1Txt:
      "<h1 class='leading-tight'>SOLUTION </h1><br /> ",
    para: pageData?.leftContent2 ? pageData?.leftContent2 : "",
    bgImgCss:
      "lazyload object-fit py-0 sm:py-10 md:py-10 2xl:py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    logoCss: "lazyload justify-left align-left  mb-5 ",
    h1TxtCss: " text-black text-xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-5xl leading-relaxed text-center lg:text-left font-bold",
    paraCss:
      "text-black text-sm sm:text-lg md:text-2xl lg:text-2xl text-justify font-light mt-5 md:mt-10 lg:mt-20",
    gridCss:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 place-content-center lg:grid-cols-2 mb-5 md:mb-10  lg:h-full   xl:h-full h-full content-center  px-5 md:px-20 2xl:px-32 xxl:!px-48",
    gridSubDivCss:
      " mt-12 mx-auto text-white content-center  place-content-center  justify-center  ",
    image: pageData?.rightImg2 ? `${process.env.NEXT_PUBLIC_BASE_URL}/${pageData?.rightImg2}`.replace(/\\/g, "/") : "",
    imageCss: "  object-fit lazyload w-2/3 md:w-2/3 xl:w-2/3 2xl:w-2/3 xxl:!w-full mx-auto mb-10 pb-5 md:py-10",
    imgTagcss: "mx-auto lazyload",
    borderColor:
      "border-darkBluobject-fit py-10 md:py-20 2xl:py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyloadede",
    linkCss:
      " mx-auto lg:mx-0 font-bold text-sm md:text-xl  p-3  2xl:px-2 text-center border w-2/3 md:w-1/2  lg:w-1/2 xl:w-1/3 2xl:w-1/3 rounded btn bg-light text-darkGray my-10 hover:bg-transparent hover:text-white hover:shadow-2xl",
  };
  const content_bci_6 = {
    id: "leftImg2RightContent2",
    bgImage: "",
    smallBGImage: "",
    bgImgCss: "lazyload",
    paraTitle:pageData?.rightContent2 ? pageData?.rightContent2:"",
    // paraTitle: "<span class='text-light font-bold leading-relaxed'> GET READY FOR NEW CUSTOMER ACQUISITIONS BY CRAFTING,<br/> <span class='title text-orange-400 text-left' > </span>",
    paraTitleClass: "title text-left font-normal leading-tight",
    gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-16    lg:pl-20 xl:px-4 2xl:px-20 xxl:px-32",
    gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
    bannerClass: "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: pageData?.leftImg2 ? `${process.env.NEXT_PUBLIC_BASE_URL}/${pageData?.leftImg2}` : "",
    imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto lazyload pt-10 md:pt-32 xl:pt-28",
 
  };
  const content_bci_7 = {
    id: "Banner4",
    bgImage: pageData?.bannerImg4 ? `${process.env.NEXT_PUBLIC_BASE_URL}/${pageData?.bannerImg4}`.replace(/\\/g, "/") : "",
    smallBGImage: "",
    logo: "",
    pageTitle: "",
    pageTitleCss: " text-light  w-full text-center  text-3xl md:text-3xl xl:text-5xl",
    blockContent: "",
    classForblockContent:
      "px-5 md:px-1 lg:w-3/4 xl:w-4/5 2xl:w-2/3 xxl:!w-2/4 mx-auto text-center font-normal text-darkGray mb-10 text-lg md:text-2xl text-white mt-6",
    bgImgCss:
      "object-fit h-screen  py-32 xl:py-52 2xl:py-48 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload bg-[length:200%_100%] md:bg-[length:100%_100%] ",
    logoCss: " justify-left align-left  mb-5 lazyload",
    paraCss: "subTitle text-justify font-normal",
    gridCss:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  md:mx-20 lg:mx-10 xl:mx-20 place-content-center  lg:h-full   xl:h-full h-full content-center  ",
    gridSubDivCss:
      "my-auto w-full mx-auto text-white content-center  place-content-center  justify-center py-5 px-10 ",
    // fgImg: "",
    // imageCss: " w-auto mx-auto pt-20 md:pt-20 object-fit lazyload",
    // imgTagcss:"h-auto w-full ls-is-cached lazyloaded",
    // contentSubDiv: "w-full h-auto md:p-10 lg:p-2 xl:p-10",
    colorTxt: "",
    para: "",
    link: "",
    // color: "blackColor",
    // dash: "border-white  mb-5 md:mb-3 mt-12 md:mt-32 xl:mt-24 2xl:mt-32",
  };
  const content_leftImg3RTcontent3 = {
    id: "leftImg3RightContent3",
    bgImage: "",
    smallBGImage: "",
    bgImgCss: "lazyload",
    paraTitle:pageData?.rightContent3 ?pageData?.rightContent3:"",
    // paraTitle: "<span class='text-light font-bold leading-relaxed'> GET READY FOR NEW CUSTOMER ACQUISITIONS BY CRAFTING,<br/> <span class='title text-orange-400 text-left' > </span>",
    paraTitleClass: "title text-left font-normal leading-tight",
    gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-16    lg:pl-20 xl:px-4 2xl:px-20 xxl:px-32",
    gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
    bannerClass: "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: pageData?.leftImg4 ? `${process.env.NEXT_PUBLIC_BASE_URL}/${pageData?.leftImg4}` : "",
    imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto lazyload pt-10 md:pt-32 xl:pt-28",
 
  };
  
  const content_bci_8 = {
    id: "technologies",
    bgImage: "",
    smallBGImage: "",
    logo: "",
    pageTitle:
      "<span class='font-extrabold leading-relaxed text-3xl md:text-3xl xl:text-5xl'>TECHNOLOGIES & TOOLS USED</span> ",
    pageTitleCss: " text-black  w-full text-center   text-3xl md:text-3xl xl:text-5xl",
    para: "",
    blockContent: "All Technologies are Open Source GPL/MIT License.",
    classForblockContent:
      "px-5 md:px-1 lg:w-3/4 xl:w-4/5 2xl:w-2/3 xxl:!w-2/4 mx-auto text-center font-normal mb-10 text-lg md:text-2xl text-black mt-6",
    bgImgCss:
      "object-fit lg:-mt-28 py-32 xl:py-52 2xl:py-48 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload bg-[length:200%_100%] md:bg-[length:100%_100%]",
    logoCss: " justify-left align-left  mb-5 lazyload",
    paraCss: "subTitle text-justify font-normal",
    // gridCss:
    //   "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  md:mx-20 lg:mx-10 xl:mx-20 place-content-center  lg:h-full   xl:h-full h-full content-center  ",
    // gridSubDivCss:
    //   "my-auto w-full mx-auto text-white content-center  place-content-center  justify-center py-5 px-10 ",
    // fgImg: "",
    imageCss: " w-auto mx-auto pt-20 md:pt-20 object-fit lazyload",
    imgTagcss: "h-auto w-full ls-is-cached lazyloaded",
    contentSubDiv: "w-full h-auto md:p-10 lg:p-2 xl:p-10",
    colorTxt: "",
    para: "",
    link: "",
    color: "blackColor",
    // urlName: "Read More",
    // linkCss: "text-white underline font-bold text-lg md:text-2xl mt-5",
    // dash: "border-white  mb-5 md:mb-3 mt-12 md:mt-32 xl:mt-24 2xl:mt-32",
    colorArr: [
      {
        // bgcolor: "bg-red-800",
        color: "blackColor",
        colorTxt: "",
        para: "",
        bgImg: "/images/specific/BCI/11.webp",
        link: "",
        fgImg: "",
        // url: "/about-us",
        // urlName: "Read More",
      },
      {
        // bgcolor: "bg-green-800",
        color: "blackColor",
        colorTxt: "",
        bgImg: "/images/specific/BCI/12.webp",
        link: "",
        fgImg: "",
        // url: "/about-us",
      },
      {
        // bgcolor: "bg-yellow-800",
        color: "blackColor",
        colorTxt: "",
        para: "",
        bgImg: "/images/specific/BCI/13.webp",
        link: "",
        fgImg: "",
        // url: "/about-us",
      },
      {
        // bgcolor: "bg-blue-800",
        color: "blackColor",
        colorTxt: "",
        para: "",
        bgImg: "/images/specific/BCI/14.webp",
        link: "",
        fgImg: "",
        // url: "/about-us",
      },
    ],
  };
  const content_bci_9 = {
    bgImage: "",
    smallBGImage: "",
    bgImgCss:
      "py-48  h-screen lazyload object-fit bg-cover bg-no-repeat relative    lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    blockTitle: "<span class='font-extrabold'>TESTIMONIALS</span>",
    classForblockTitle: "text-white w-full text-center leading-10 text-3xl md:text-3xl xl:text-5xl mb-4 md:mb-16 ",
    blockImage:
    // Add the tesimonial image path here
    "/images/specific/about_us/18.webp",
    altImage: "",
    // "imageDescription",
    classForblockImage:
      "w-full rounded-md  mx-auto max-w-4xl xl:max-w-6xl py-10 md:p-10 lazyload",
    classForNoOfCards:
      "px-10 lg:px-20 mb-10 max-w-8xl text-center justify-evenly grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-6",
    classForCardTitle: "text-center font-semibold subTitle",
    classForCardTitle_2:
      "font-bold text-md text-primary  p-5",
    classForCardImage:
      "mx-auto h-40 sm:h-52 md:h-48 lg:h-48 xl:h-52 2xl:h-72 xxl:h-96 p-10 lazyload",
    // classForblockTitle  :" text-sky-500 w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl",

    classForblockContent:
      "px-5 lg:px-12 max-w-6xl mx-auto h-auto text-center  my-auto text-white justify-content text-md md:text-2xl font-semibold",
    blockContent: "",

    // dash: "border-white my-5 md:my-10 md:mb-5",
  };
  const content_TeamTestimonial = {
    block_id: "leftUserImageRightText",
    blockWrapperClasses:
      "bg-backgroundBlue w-full h-full p-5 xl:-mt-16 lg:px-10",
    pageTitle: "",
    pageTitleCss: "relative  w-full text-center leading-10 text-3xl md:text-3xl xl:text-5xl px-2 mb-10 ",
    blockSubWrapperClasses:
      "grid gap-4 lg:gap-10 p-5 pt-20 pb-5 md:py-32 lg:pt-20 lg:pb-5 grid-cols-1 ",
    blockContent: "",
    classForblockContent: "text-lg md:text-2xl text-center  font-normal w-full md:w-2/3 2xl:w-3/5  mx-auto  md:mb-5 ",

    blockContentClasses: "h-auto text-justify my-auto text-lg lg:text-xl",
    dash: "border-blue-700 mb-5 ",
    testimonial:
      "test  r sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "",
    name: "User Name",

    onlyBgImage: false,
    showChangeButtons: false,
    autoSlide: true,
    className: "relative",
    imgWrap:
      "relative flex items-center justify-center overflow-hidden mx-auto md:w-1/2 xl:w-1/2 2xl:w-2/5",
    imageCss: "object-fit-cover",

    testimonials: [
      {
        image: "/images/specific/Testimonials/Anuja-Kate.webp",
        name: "JOHN DOE",
        designation: "BCI Director",
        testimonial:
          "<span class='text-4xl font-extrabold'>“</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum ipsum nisi, at viverra lorem feugiat vel. Aenean id turpis id tortor hendrerit aliquet vitae sit amet risus. Mauris efficitur ante id augue ultricies, sed convallis ligula cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum ipsum<span class='text-4xl font-extrabold'> ”</span>",
      },
    ],
  };
  const content_bci_10 = {
    id: "bigImage",
    bgImage: pageData?.bannerImg4 ? `${process.env.NEXT_PUBLIC_BASE_URL}/${pageData?.bannerImg4}`.replace(/\\/g, "/") : "",
    smallBGImage: "",
    logo: "",
    pageTitle: "",
    pageTitleCss: " text-light  w-full text-center  text-3xl md:text-3xl xl:text-5xl",
    blockContent: "",
    classForblockContent:
      "px-5 md:px-1 lg:w-3/4 xl:w-4/5 2xl:w-2/3 xxl:!w-2/4 mx-auto text-center font-normal text-darkGray mb-10 text-lg md:text-2xl text-white mt-6",
    bgImgCss:
      "object-fit py-20 bg-cover bg-no-repeat relative  h-screen w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload bg-[length:200%_100%] md:bg-[length:100%_100%]",
    logoCss: " justify-left align-left  mb-5 lazyload",
    paraCss: "subTitle text-justify font-normal",
    gridCss:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  md:mx-20 lg:mx-10 xl:mx-20 place-content-center  lg:h-full   xl:h-full h-full content-center  ",
    gridSubDivCss:
      "my-auto w-full mx-auto text-white content-center  place-content-center  justify-center py-5 px-10 ",
    // fgImg: "",
    // imageCss: " w-auto mx-auto pt-20 md:pt-20 object-fit lazyload",
    // imgTagcss:"h-auto w-full ls-is-cached lazyloaded",
    // contentSubDiv: "w-full h-auto md:p-10 lg:p-2 xl:p-10",
    colorTxt: "",
    para: "",
    link: "",
    // color: "blackColor",
    // dash: "border-white  mb-5 md:mb-3 mt-12 md:mt-32 xl:mt-24 2xl:mt-32",
  };
  const content_bci_11 = {
    id: "contactUs",
    bgImage: "/images/specific/Services/MobileApp/Images/22.webp",
    smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/7.webp",

    bgImgCss: "lazyload ",
    pageTitle: "",
    pageTitleCss: " text-light w-full text-center font-extrabold text-3xl md:text-3xl xl:text-5xl",
    gridColCss: "my-auto w-full sm:w-2/3 md:w-3/5 rounded-4 lg:w-4/5 2xl:w-3/5  mx-auto lg:mx-0 text-darkGray content-center  place-content-center  justify-center  px-5  2xl:px-2 md:pl-6 md:pl-16 lg:px-0 xl:pl-4 xxl:pl-40 md:-mt-5",
    gridClass: "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 place-content-center  lg:h-full   xl:h-full h-full content-center md:py-10 ",
    gridCol1Css: "mt-6 md:mt-0",
    bannerClass: "object-fit pt-72 pb-72  md:pt-72 md:pb-48 md:bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/Services/MobileApp/Images/23.webp",
    imageCss: "mx-auto pt-2 pb-20 sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto lazyload",
    imgTpText: "<span class=''>CONTACT US </span><br /><span class='leading-loose'> Now why to wait? </span><br/> Contact Us immediately ",
    imgTpTextClass: "text-light w-full text-center font-extrabold text-xl md:text-3xl xl:text-4xl leading-tight",
    dash: "border-white  mb-5 md:mb-3 mt-12 lg:mt-2",
    showForm: "true",
    formCss: " p-6 -mt-16 md:-mt-16 lg:-mt-12 bg-white md:p-10 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
  }

//   console.log("`${process.env.NEXT_PUBLIC_BASE_URL}/${pageData?.bannerImage}`",`${process.env.NEXT_PUBLIC_BASE_URL}/${pageData?.bannerImage}`,`${process.env.NEXT_PUBLIC_BASE_URL}`,`${pageData?.bannerImage}`)

  return (
    <div>
      <BgImgLeftContentRtImg inputData={content_bciBanner} />
      <BgImgLeftContentRtImg inputData={content_bci_2} />
      <BgImgLeftContentRtImg inputData={content_bci_3} />
      <BgImgRightContent inputData={content_bci_4} />
      <BgImgLeftContentRtImg inputData={content_Banner3} /> 
      <BgImgRightContent inputData={content_bci_6} />
      <BgImgLeftContentRtImg inputData={content_bci_5} />
      <BgImgRightContent inputData={content_leftImg3RTcontent3} />
      <BgImgLeftContentRtImg inputData={content_bci_7} /> 
      <BgImgLeftImgRtGrid inputData={content_bci_8} />
      {/* <CenterImgCenterContentRepBlk inputData={content_bci_9} /> */}
      <LeftUserImageRightText inputData={content_TeamTestimonial} />
      <BgImgRightContent inputData={content_bci_11} />
    </div>
  );
};

export default BetterCottonInitiative;


