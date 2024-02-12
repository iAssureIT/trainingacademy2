"use client";
import React from "react";
import axios from "axios";
import CustomHead from "@/templates/CustomHead/CustomHead";
import BgImgLeftContentRtImg from "@/templates/ContentBlocks/BgImgLeftContent/BgImgLeftContentRtImg";
import BgImgRightContent from "@/templates/ContentBlocks/BgImgRightContent/BgImgRightContent";
import ImgCarousel from '@/templates/Carousel/AllTypeCarousel/Carousel';
import AutoScroll from '@/templates/Carousel/AutoScroll';
import LeftImgRightRepeatableBlk from "@/templates/RepeatableBlocks/LeftImgRightRepeatableBlk/LeftImgRightRepeatableBlk";
import MultipleImagesCarousel from "@/templates/Carousel/MultipleImgCarouselWithTopImg/MultipleImagesCarousel";
import CenterContentRepeatableBlocks from "@/templates/RepeatableBlocks/CenterContentRepeatableBlocks/CenterContentRepeatableBlocks";

import BgImgLeftImgRtGrid from "@/templates/ContentBlocks/BgImgLeftImgRightGrid/BgImgLeftImgRightGrid";
import OurPortfolio from "@/templates/OurPortfolio/OurPortfolio";
import DummyBlk from "@/templates/DummyBlock/DummyBlk";
import AccordionBlock from "@/templates/Accordion/AccordionBlock";
import BlogsList from "@/templates/Blog/BlogsList";
import CenterImgLeftRightRepeatableBlocks from "@/templates/RepeatableBlocks/CenterImgLeftRightRepeatableBlocks/page"
import SmallBanner from "@/templates/BannerBlocks/SmallBanner/SmallBanner";
import ProblemSolutionBlk from "@/templates/ContentBlocks/ProblemSolutionBlk/ProblemSolutionBlk";
import Autocarousel from "@/components/Autocarousel";

const MobileAppDevelopment = ({ data }) => {
  const content_leftContentBgImg = {
    id: "mobileBanner",
    bgImage: "/images/specific/Services/MobileApp/Images/1.webp",
    smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/1.webp",
    logo: "",
    h1TxtLine1: "<h1>MOBILE APP</h1>",
    h1TxtLine1Css: " font-DrukText text-5xl md:text-5xl  lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-center md:text-left   place-content-left  justify-center content-left mb-5 ",
    h1TxtLine2: "DEVELOPMENT",
    h1TxtLine2Css: "outline-title  font-DrukText text-5xl  md:text-5xl  lg:text-6xl xl:text-7xl 2xl:text-8xl text-center md:text-left   place-content-left  justify-center content-left mb-5 font-[500] ",
    bgImgCss: "  py-20 h-auto  xl:h-auto md:py-32 xl:py-48 2xl:py-10 lazyload object-fit bg-cover bg-no-repeat relative  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    para: "Redefine Mobile App <br/> Development With Precision,<br/> Innovation, And <br/> User-Centric Design",
    paraCss: " font-DrukText lcamelcase text-normal text-center md:text-left text-2xl md:text-3xl xl:text-4xl  2xl:text-5xl  md:!leading-[3.1rem]",
    // gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  md:grid-cols-2  lg:h-screen  xl:h-screen h-screen  ",
    gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2   md:grid-cols-2  py-10  md:py-20 xl:py-0 2xl:py-20 h-auto md:h-full lg:h-full   xl:h-full 2xl:h-full  ",
    gridSubDivCss: " pb-32 md:pb-10 lg:pb-16 2xl:pb-48 my-auto text-white   md:pl-32 lg:pl-20 xl:pl-32 2xl:pl-60",
    image: "/images/specific/Services/MobileApp/Images/2.webp",
    imageCss: '  w-2/3 xl:w-4/5 2xl:w-auto mx-auto my-auto object-fit lazyload place-content-center object-center ',
    imgTagcss: "lazyload  -mt-20    ",
    borderColor: "border-darkBlue",
  }
  // h1TxtCss: " -mt-20 2xl:-mt-32  text-xl md:text-3xl xl:text-7xl font-extrabold text-center md:text-left content-center  place-content-left  justify-center content-left ",
  // bgImgCss: "h-screen lazyload object-fit bg-cover bg-no-repeat relative  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
  // gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  md:grid-cols-2  lg:h-screen  xl:h-screen h-screen px-20 2xl:px-32 ",
  // image: "/images/specific/Contact_Us/2.webp",
  // imageCss: ' w-1/2 mx-auto my-auto object-fit lazyload place-content-bottom object-bottom ' ,

  const content_BgImgRightTxt_3 = {
    id: "mbAppBlk2",
    paraTitle: "In today's fast-paced digital landscape, a powerful mobile presence is crucial for business success. iAssureIT with its <b> Innovative</b> and <b> User-centric approach </b> is the GPS to your <b> Business Growth.</b> We are Capable, <b> Reliable and Scalable. </b> ",
    paraTitleClass: "text-lg md:text-2xl xl:text-xl 2xl:text-xl text-justify md:text-left font-normal",
    bgImgCss: "lazyload",
    pageTitle: "<span class='font-normal leading-relaxed'>EXPAND YOUR CLIENTELE WITH </span> <br/><span class='font-extrabold '>MOBILE APP DEVELOPMENT</span>",
    pageTitleCss: "w-full text-center  text-2xl md:text-3xl xl:text-4xl  2xl:text-4xl ",
    gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-3  md:pl-6 md:pl-16 lg:pl-10 xl:pl-20 2xl:pl-28 xxl:pl-40 xxl:px-10",
    // gridCol1Css: "w-1/2 mx-auto",
    gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2 md:px-10 xl:px-48 2xl:px-60 xxl:px-48 lg:h-full   xl:h-full h-full content-center ",
    bannerClass: "object-fit  bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/Services/MobileApp/Images/3.webp",
    imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto w-5/6 2xl:w-3/5 lazyload",
    dash: "border-blue-700 mt-10 lg:mt-5 mb-5 md:mb-3",
  }
  const content_DummyTxt1 = {
    dummyText: "THE TOP CHALLENGES IN CRAFTING A POWERFUL MOBILE APP"
  }
  const content_developerBlk = {
    paraTitle: "<span class='text-light font-bold leading-relaxed'> HIRE MOBILE APP DEVELOPERS!<br/> <span class='title text-orange-400 text-left' > START WITH A ONE WEEK TRIAL </span>",
    paraTitleClass: "title text-left font-normal leading-tight",
    bgImage: "/images/specific/Services/MobileApp/Images/9.webp",
    smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/3.webp",
    bgImgCss: "lazyload ",

    gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center md:py-10 px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
    // gridCol1Css: "w-1/2 mx-auto",
    gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
    bannerClass: "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/Services/MobileApp/Images/8.webp",
    imageCss: "mx-auto pt-20 sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto lazyload",
    url: "/contact-us",
    urlName: "Contact Us",
    linkCss: "mx-auto  text-white text-center font-bold text-lg md:text-xl p-2  2xl:px-2  mt-3 border w-1/2 md:w-3/4  lg:w-1/2 xl:w-1/3 2xl:w-1/3 rounded btn hover:bg-offWhite hover:text-black",

  }
  const content_SmallBanner2 = {
    id: "mbSmallBanner",
    bgImage: "/images/specific/Services/MobileApp/Images/12.webp",
    smallBGImage: "/images/specific/Services/MobileApp/Images/12.webp",
    title: "THE RESULT:",
    titleClass: " text-center mx-auto  my-auto font-extrabold text-sm md:text-3xl xl:text-4xl",
    className: "h-auto w-full mx-auto",
    alt: "reserve",
    bgImgCss: "py-3 md:py-10 mb-5 md:mb-20 2xl:py-5 bg-cover bg-no-repeat  bg-left-bottom lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]",
    gridCss: "grid grid-cols-1 sm:grid-cols-1   lg:grid-cols-1 2xl:grid-cols-1 gap-x-10 h-full w-full content-center  place-content-center my-auto xl:py-10",
    gridCol1Class: "my-auto  sm:w-auto  text-white text-center  mb-2 md:mb-4 ",
    para: "YOUR APP USERS WILL FEEL HEARD,<br/> UNDERSTOOD, AND VALUED. ",
    paraCss: "text-xs md:text-2xl xl:text-2xl text-light text-center "
  }


  const content_carousel = {
    blockTitle: "CLIENTS TESTIMONIALS",
    classForblockTitle: "text-darkGray text-center font-bold text-md md:text-5xl py-10 lg:py-16",
    videos: [
      "/images/videos/Banner-1.mp4",
      "/images/videos/iAssureIT-Website-banner.mp4",
      "/images/videos/iAssureIT-Website-banner1.mp4",
      "/images/videos/Banner-1.mp4",
    ],
    txtBlkCss: "w-1/2 lg:w-1/3 object-cover bg-blue-300 gap-10 p-4 slide rounded-lg cursor-pointer",
    dash: "border-blue-700  mb-5 md:mb-5",
  }
  const content_carousel2 = {
    slideDirection: "right",
    animationClass: "animate-infinite-slider flex w-[calc(250px*50)] md:w-[calc(250px*100)] overflow-hidden ",
    images: [
      "/images/specific/Services/Logos/1.webp",
      "/images/specific/Services/Logos/2.webp",
      "/images/specific/Services/Logos/3.webp",
      "/images/specific/Services/Logos/4.webp",
      "/images/specific/Services/Logos/5.webp",
      "/images/specific/Services/Logos/6.webp",
    ],
  };
  const content_carouselLeft = {
    slideDirection: "left",
    animationClass: "animate-infinite-slider-left-to-right float-right flex w-[calc(250px*50)] md:w-[calc(250px*100)] overflow-hidden ",
    images: [
      "/images/specific/Services/Logos/7.webp",
      "/images/specific/Services/Logos/8.webp",
      "/images/specific/Services/Logos/9.webp",
      "/images/specific/Services/Logos/10.webp",
      "/images/specific/Services/Logos/11.webp",
      "/images/specific/Services/Logos/1.webp",
    ],
  };
  const content_custAquisitions = {
    id: "custAquisitions",
    bgImage: "/images/specific/Services/MobileApp/Images/14.webp",
    bgImgCss: "lazyload",
    smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/5.webp",
    paraTitle: "<span class='text-light font-bold leading-relaxed'> GET READY FOR NEW CUSTOMER ACQUISITIONS BY CRAFTING,<br/> <span class='title text-orange-400 text-left' > USER-FRIENDLY, PLATFORM-AGNOSTIC REALITY MOBILE APPS. </span>",
    paraTitleClass: "title text-left font-normal leading-tight",
    gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-16    lg:pl-20 xl:px-4 2xl:px-20 xxl:px-32",
    gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
    bannerClass: "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/Services/MobileApp/Images/13.webp",
    imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto lazyload pt-10 md:pt-32 xl:pt-28",
  }
  const content_CenterContentRepeatableBlocks = {
    id: "Services",
    blockTitle: "TRANSFORM BITS INTO BUSINESS BRILLIANCE WITH <br/> <span class='font-extrabold leading-relaxed'>OUR MOBILE APP DEVELOPMENT SERVICES</span>",
    classForblockTitle: " w-full text-center  text-2xl md:text-3xl xl:text-4xl xl:py-5 py-10  px-2 md:px-none",
    classForNoOfCards: "px-10 lg:px-32 2xl:px-48 lg:mt-5  max-w-8xl text-center justify-evenly grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-6",
    classForCards: " border shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white p-4 md:p-10 lg:p-5 2xl:p-10 mb-7 rounded-xl",
    classForCardTitle: "text-center  text-darkGray text-xl md:text-xl lg:text-2xl xl:text-[22px] 2xl:text-[22px]  font-bold p-3 pt-3 md:pt-4 2xl:pt-6",
    classForCardTitle_2: "font-bold text-md text-primary dark:text-primary-400 p-5",
    classForCardImage: "w-auto 2xl:w-auto mx-auto p-5 xl:p-5 2xl:p-5 lazyload bg-gray-100 rounded-full ",
    // classForCardImage: "w-auto 2xl:w-auto mx-auto p-5 xl:p-5 2xl:p-5 lazyload bg-gray-100 rounded-full ",

    classForblockContent: "px-10 lg:px-20  xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
    // blockContent           : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    classForImg: "p-10 overflow-hidden bg-cover bg-no-repeat  lg:p-8 -mt-24 lg:-mt-28 xl:-mt-28 2xl:-mt-24",
    displayAnimation: "true",
    cardsArray: [
      {
        id: "MobService1",
        cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-1.webp',
        altImage: 'imageDescription',
        cardTitle: 'Custom Mobile App ',
        // cardTitle_2       : 'Block subtitle',
        classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
        content: "Precision-engineered for brand alignment and user engagement.",
        // url: "/about-us",
        // urlName: "READ MORE",
        // linkCss: "text-blue-700  font-medium text-md md:text-lg mt-3"
      },
      {
        id: "MobService2",
        cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-2.webp',
        altImage: 'imageDescription',
        cardTitle: 'Web Mobile App',
        classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
        content: "Serving wide range of business needs on the web with cross-platform compatibility",
      },
      {
        id: "MobService3",
        cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-3.webp',
        altImage: 'imageDescription',
        cardTitle: 'Native Mobile App',
        classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
        content: "Serving wide range of business needs on the web with cross-platform compatibility",
      },
      {
        id: "MobService4",
        cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-4.webp',
        altImage: 'imageDescription',
        cardTitle: 'Hybrid Mobile App ',
        classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
        content: "Consistent performance with Cross-platform accessibility and access to device features",
      },
      {
        id: "MobService5",
        cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-5.webp',
        altImage: 'imageDescription',
        cardTitle: 'Cross-Platform Mobile App',
        classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
        content: "Seamless, bespoke and impactful user-experience on iOS, Android and Windows.",
      },
      {
        id: "MobService6",
        cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-6.webp',
        altImage: 'imageDescription',
        cardTitle: 'Enterprise Mobile App',
        classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
        content: "Tailored to meet the complex   requirements ensuring Security and Compliance.",
      },
      {
        id: "MobService7",
        cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-7.webp',
        altImage: 'imageDescription',
        cardTitle: 'Mobile UI/UX Design',
        classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
        content: "Intuitive designs for effortless user journeys that increase ROI.",
      },
      {
        id: "MobService8",
        cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-8.webp',
        altImage: 'imageDescription',
        cardTitle: 'Mobile APP Integration',
        classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
        content: "Robust integrations for amplified functionality.",
      },
      {
        id: "MobService9",
        cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-9.webp',
        altImage: 'imageDescription',
        cardTitle: 'Mobile App Modernization',
        classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
        content: "App modernization to sync with business visibility and agility. ",
      },
    ],
    dash: "border-blue-700 mt-10 lg:mt-20"
  }
  const content_nationalAwards = {
    id: "national-awards",
    bgImage: "/images/specific/national_awards/background.webp",
    smallBGImage: "/images/specific/about_us/researchBgMobile.webp",
    logo: "",
    pageTitle:
      "<span class='font-extrabold leading-relaxed text-3xl md:text-3xl xl:text-5xl'>NATIONAL</span> <span class='font-normal'>AWARDS</span>",
    pageTitleCss: " text-light  w-full text-center   text-3xl md:text-3xl xl:text-5xl",
    // para: "iAssureIT is working towards a vision of developing a large-scale, premium IT company to provide the benefits of technology breakthroughs for the whole of mankind. We are working on the mission of developing scalable, innovative, and affordable applications that can help solve some of the most wanted dreadful and painful problems in society.",
    bgImgCss:
      "object-fit pt-0 pb-28 xl:py-52 2xl:py-48 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload bg-[length:200%_100%] md:bg-[length:100%_100%]",
    logoCss: " justify-left align-left  mb-5 lazyload",
    paraCss: "subTitle text-justify font-normal",
    blockContent: "We have been honored with several awards recognizing our strides in the tech industry. For a detailed look at our accolades.",
    classForblockContent:
       "px-5 md:px-1 lg:w-2/5 xl:w-2/5 2xl:w-1/3 xxl:!w-2/5 mx-auto text-center font-normal text-darkGray mb-10 md:mb-2 text-lg md:text-2xl text-white mt-6",
    
    gridCss:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  md:mx-10 lg:mx-10 xl:mx-32 place-content-center  lg:h-full   xl:h-full h-full content-center  ",
    gridSubDivCss:
      "my-auto w-full mx-auto text-white content-center  place-content-center  justify-center py-5 px-10 ",
    fgImg: "/images/specific/national_awards/frame/1.webp",
    imageCss: " w-auto h-aut0 mx-auto pt-4 md:pt-20 object-fit lazyload",
    imgTagcss: "h-auto lg:h-96 w-full",
    contentSubDiv: "w-full h-auto md:p-10 lg:p-2 xl:p-10",
    colorTxt: " 1. The Company Of The Year 2018",
    para: "The prestigious award of ' The Company of The Year - 2018' in Startup Category for Web & Mobile Application Development from International Magazine CIO Review.",
    link: "https://www.cioreviewindia.com/magazines/company-of-the-year-december-2018/",
    color: "ceyone_black",
    urlName: "Read More",
    linkCss: "float-right text-white underline font-bold text-lg md:text-xl mt-5",
    dash: "border-white  mb-5 md:mb-3 mt-40 md:mt-48  lg:mt-64 xl:mt-24 2xl:mt-28",
    colorArr: [
      {
        // bgcolor: "bg-red-800",
        color: "ceyone_black",
        colorTxt: "1. The Company Of The Year 2018",
        para: "The prestigious award of ' The Company of The Year - 2018' in Startup Category for Web & Mobile Application Development from International Magazine CIO Review.",
        bgImg: "/images/specific/national_awards/3.webp",
        link: "https://www.cioreviewindia.com/magazines/company-of-the-year-december-2018/",
        fgImg: "/images/specific/national_awards/frame/1.webp",
        // url: "/about-us",
        // urlName: "Read More",
      },
      {
        // bgcolor: "bg-green-800",
        color: "ceyone_gray",
        colorTxt: "2. Top 50 Global Brands 2018",
        para: "Business Connect India has marked iAssureIT as one of the  in India for the Startup IT Industry category.",
        bgImg: "/images/specific/national_awards/4.webp",
        link: "https://issuu.com/fanzineindia/docs/companies_of_the_year_february_2019 ",
        fgImg: "/images/specific/national_awards/frame/2.webp",
        // url: "/about-us",
      },
      {
        // bgcolor: "bg-yellow-800",
        color: "ceyone_red",
        colorTxt: "3.  Top 10 Mobile Application Development IT Companies",
        para: "CIO Review India has ranked iAssureIT in the  'Top 10 Mobile Application Development IT Companies'  in India, in their August 2018 survey.",
        bgImg: "/images/specific/national_awards/5.webp",
        link: "https://www.cioreviewindia.com/magazines/mobile-startups-special-august-2018/",
        fgImg: "/images/specific/national_awards/frame/3.webp",
        // url: "/about-us",
      },
      {
        // bgcolor: "bg-blue-800",
        color: "ceyone_blue",
        colorTxt: "4. The Most Innovative Startup IT Company",
        para: "Asia Africa Development Council has found lots of mettle in iAssureIT. We have been awarded as 'The Most Innovative IT Company' under the startup category",
        bgImg: "/images/specific/national_awards/6.webp",
        link: "https://asiafricaonline.com/excellence-award-2018/",
        fgImg: "/images/specific/national_awards/frame/4.webp",
        // url: "/about-us",
      },
    ],
  };




  const content_custBase = {
    bgImage: "/images/specific/Services/MobileApp/Images/15.webp",
    smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/6.webp",
    bgImgCss: "lazyload ",
    paraTitle: "<span class='text-light font-bold leading-relaxed'> LOOKING TO RETAIN YOUR EXISTING CUSTOMER BASE? BUILD SEAMLESS,<br/> <span class='title text-orange-400 text-left' > SCALABLE AND FUTURE-READY MOBILE APPS </span>",
    paraTitleClass: "title text-left font-normal leading-tight",
    gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
    gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
    bannerClass: "object-fit  bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]   py-32 md:py-0",
    image: "/images/specific/Services/MobileApp/Images/16.webp",
    imageCss: "mx-auto  sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto lazyload",
  }
  const content_MobileAppTechnology = {
    id: "MobileAppTechnology",
    blockTitle: "OUR RANGE OF  <span class='font-extrabold'>MOBILE APP TECHNOLOGIES</span>",
    classForblockTitle: " w-full text-center BlockTitle pt-6 pb-5 xl:py-5 xl:py-10 leading-tight ",
    // classForNoOfCards: "px-10 pb-10 lg:px-20 2xl:px-52 lg:mt-5  max-w-8xl text-center justify-evenly mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 lg:gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-6",
    classForNoOfCards: "techWrapper w-full xl:w-5/6 2xl:w-5/6 mx-auto max-w-screen-2xl  gap-8  rounded-xl",
    // classForCards: " border shadow-[0_3px_10px_rgb(0,0,0,0.2)] 2xl:py-5 text-white  mb-7 rounded-xl",
    classForCardTitle: "text-center  text-darkGray font-[500] py-3 px-3 md:px-0 md:pb-5  md:-mt-6 text-lg md:text-xl xl:text-lg",
    classForCardTitle_2: "font-bold text-md text-primary dark:text-primary-400 p-5",
    classForCardImage: "mx-auto p-0 md:p-2 xl:p-2  2xl:p-5 xxl:p-10 lazyload  rounded-full",
    classForblockContent: "lg:w-3/4 xl:w-4/5 2xl:w-3/4  xxl:!w-3/5 mx-auto text-center font-[500] text-darkGray mb-10 bodyTxt px-5 md:px-5 lg:px-16",
    classForCards: "techWrapperImg border shadow-[0_3px_10px_rgb(0,0,0,0.2)] 2xl:py-0 text-white w-60 xl:w-64 2xl:w-72 h-auto rounded-[6px]",
    blockContent: "The dynamic mobile industry empowers us to leverage technology's full potential. At iAssureIT, we dedicate time and resources to ensure we're prepared for upcoming mobile trends. We excel in offshore mobile application development across various platforms",
    cardsArray: [
      {
        cardImage: '/images/specific/Services/MobileApp/TechnologyStack/TechnologyIcons/1.webp',
        altImage: 'imageDescription',
        cardTitle: 'iOS App ',
      },
      {
        cardImage: '/images/specific/Services/MobileApp/TechnologyStack/TechnologyIcons/2.webp',
        altImage: 'imageDescription',
        cardTitle: 'Android App  ',
      },
      {
        cardImage: '/images/specific/Services/MobileApp/TechnologyStack/TechnologyIcons/3.webp',
        altImage: 'imageDescription',
        cardTitle: 'Swift App ',
      },
      {
        cardImage: '/images/specific/Services/MobileApp/TechnologyStack/TechnologyIcons/4.webp',
        altImage: 'imageDescription',
        cardTitle: 'Kotlin App  ',
      },
      {
        cardImage: '/images/specific/Services/MobileApp/TechnologyStack/TechnologyIcons/5.webp',
        altImage: 'imageDescription',
        cardTitle: 'React Native App  ',
      },
      {
        cardImage: '/images/specific/Services/MobileApp/TechnologyStack/TechnologyIcons/6.webp',
        altImage: 'imageDescription',
        cardTitle: 'Flutter App ',
      },
      {
        cardImage: '/images/specific/Services/MobileApp/TechnologyStack/TechnologyIcons/7.webp',
        altImage: 'imageDescription',
        cardTitle: 'Xamarin App ',
      },
    ],
    dash: "border-blue-700 mt-5 md:mt-10"
  }
  const content_CaseStudy = {
    sectionCss: "py-10 md:py-20 bg-light",
    blockTitle: " CASE STUDIES",
    blockSubTitle: "We shed light on our work and what goes behind the development",
    classForblockTitle: " text-darkGray w-full BlockTitle text-center font-extrabold leading-relaxed",
    classForblockSubTitle: "text-center text-darkGray bodyTxt  font-normal mb-10 leading-loose",
    classForNoOfCards: "px-10 lg:px-20  max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6",
    classForCards: "p-3  mb-4 rounded-md",
    classForCardTitle: "text-darkGray text-center font-bold text-xl md:text-xl lg:text-xl p-3",
    classForCardImage: "w-full rounded-md bg-white p-5 border",
    urlName: "/case-study",
    // btnName: "View All",
    btnClass: " text-light rounded text-sm float-right py-2 px-4 bg-blue-800 ",
    cardsArray: [
      { cardImage: '/images/specific/Services/Our-Portfolio/Mobile_App_2/Coffic.webp', altImg: 'portfolio', cardTitle: 'Coffic-1' },
      { cardImage: '/images/specific/Services/Our-Portfolio/Mobile_App/2.webp', altImg: 'portfolio', cardTitle: 'BCI (Better Cotton Initiative)' },
      { cardImage: '/images/specific/Services/Our-Portfolio/Mobile_App/3.webp', altImg: 'portfolio', cardTitle: 'LYVO' },
      { cardImage: '/images/specific/Services/Our-Portfolio/Mobile_App/4.webp', altImg: 'portfolio', cardTitle: 'Unimandai' },
      { cardImage: '/images/specific/Services/Our-Portfolio/Mobile_App/5.webp', altImg: 'portfolio', cardTitle: 'Five Bees' },
      { cardImage: '/images/specific/Services/Our-Portfolio/Mobile_App/6.webp', altImg: 'portfolio', cardTitle: 'Pipito' },
    ],
    dash: "border-blue-700 mb-5 2xl:mt-10 ",
  };
  const content_WhyChoose = {
    id: "whyChoose",
    sectionClass: "mx-auto text-center px-8 pt-10 container md:mt-0 ",
    pageTitle: "<span class=' font-normal leading-relaxed'>WHY CHOOSE IASSUREIT FOR</span> <br/> <span class='font-extrabold'>MOBILE APP DEVELOPMENT?</span> ",
    pageTitleCss: "w-full text-center  BlockTitle leading-tight",
    bgImage: "/images/specific/Services/MobileApp/WHY_CHOOSE_iAssureIT/1.webp",
    bgImageCss: 'w-full h-auto object-cover',
    bigImageAlt: "BigImage",
    gridCss: "grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8",
    gridCol1Css: "w-2/3 h-auto relative my-auto  mx-auto",
    repeatedBlkCss: " shadow-none flex items-start sm:h-36 md:h-auto my-6     ",
    imgCss: "flex-none bg-purple h-auto   items-start rounded mr-3 md:mr-10 object-cover shadow-[4.0px_8.0px_8.0px_rgba(97,143,237,0.8)]",
    titleCss: "text-lg md:text-2xl xl:text-[1.2rem] font-bold mb-2",
    desCss: "text-gray-700 text-[18px] sm:text-[16px] overflow-hidden",
    linkCss: "float-right px-4 text-skyBlue",
    repeatedBlocks: [
      {
        imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
        title: "TOP CLASS DEVELOPMENT TEAM",
        description: "Skilled mobile application development team various domain expertise",
      },
      {
        imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
        title: "SCALABLE AND FUTURE READY",
        description: "Build Scalable and Innovative solutions to grow your business.",
      },
      {
        imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
        title: "COMPETITIVE APPROACH",
        description: "Stay ahead with our market-driven strategies.",
      },
      {
        imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
        title: "RELIABLE AND CORPORATE EXPERIENCE",
        description: " 100% reliable with 10+years corporate experience.",
      },
      {
        imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
        title: "QUALITY",
        description: "Award-winning excellence in every project.",
      },
      {
        imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
        title: "CUSTOMER-CENTRIC",
        description: "Your vision, our mission. ",
      },
    ],
    dash: "border-blue-700 mb-5 md:mb-1 ",

  }

  const content_profitMargin = {
    id: "profitMargin",
    bgImage: "/images/specific/Services/MobileApp/Images/20.webp",
    smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/5.webp",
    bgImgCss: "lazyload",
    paraTitle: "ELEVATE YOUR PROFIT MARGINS WITH ENHANCED <span class=' title text-orange-400 text-left leading-relaxed'> MOBILE EXPERIENCE FOR YOUR CUSTOMERS! </span>",
    paraTitleClass: "title text-white text-left leading-tight",
    gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
    gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
    bannerClass: "object-fit pt-10 pb-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/Services/MobileApp/Images/21.webp",
    imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center md:mt-32 lazyload",
    imgTagcss: "mx-auto lazyload",
  }
  const content_accordion = {
    id: "mobileAppFAQ",
    dash: "border-blue-700 -mb-7 mt-5 md:mb-2 md:mt-10 xl:mt-0",
    pageTitle: "FAQS",
    pageTitleCss:
      " text-gray w-full text-center font-extrabold BlockTitle mb-2 md:mb-12",
    accordionData: [

      {
        title: 'Are your mobile app developers experienced?',
        content: "Absolutely, we make it a priority to onboard developers with diverse backgrounds. Furthermore, we consistently promote their professional growth through certifications and keeping them updated with the latest technologies."
      },

      {
        title: 'How long does it take to develop a mobile app solution?',
        content: 'Estimating the time required for application development depends on factors such as design intricacy, desired features and functionalities, developer expertise, and more. Feel free to reach out to us to discuss your urgent requirements and project timeline.'
      },
      {
        title: 'What platforms (iOS, Android, both) should the app be developed for?',
        content: 'The choice of platforms (iOS, Android, both) depends on your target audience and budget. Developing for both platforms may reach a wider user base.'
      },
      {
        title: 'Why do I need an offshore team to build an enterprise app when I can create it myself?',
        content: '<p>Assess your skill sets, availability, and budget. Having a clear understanding of these aspects will help you decide if you need outside assistance.</p>' +
          "<p>From ideation to implementation, you'll find that the process needs a blend of both internal and external resources. It's unlikely that your business will have all the necessary expertise and personnel to manage every stage of the process.</p>"
      },
      {
        title: 'How much will it cost to develop the mobile app?',
        content: "App development costs vary widely based on features, complexity, and development location. Connect with our team to get a customized quote."
      },
      {
        title: 'Can your mobile app developers work at different time-zones?',
        content: "We currently serve numerous clients across various global locations. As a result, time zone differences do not pose a limitation for iAssureIT."
      },
    ]
  }
  const content_BlogList = {
    blockTitle: "VISIT OUR BLOGS",
    classForblockTitle: "text-darkGray w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:py-14 py-10 ",
    gridDivCss: "grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10",
    blogData: [
      { blogHeaderImage: "/images/specific/Services/MobileApp/Images/8.webp", createdAt: "24 Sep 2023", duration: "12 mins", userFullName: "Abc Xyz", blogTitle: "test blog", blogSummary: "This is blog Summary" },
      { blogHeaderImage: "/images/specific/Services/MobileApp/Images/5.webp", createdAt: "24 Sep 2023", duration: "12 mins", userFullName: "Abc Xyz", blogTitle: "test blog", blogSummary: "This is blog Summary" },
      { blogHeaderImage: "/images/specific/Services/MobileApp/Images/10.webp", createdAt: "24 Sep 2023", duration: "12 mins", userFullName: "Abc Xyz", blogTitle: "test blog", blogSummary: "This is blog Summary" },
      { blogHeaderImage: "/images/specific/Services/MobileApp/Images/8.webp", createdAt: "24 Sep 2023", duration: "12 mins", userFullName: "Abc Xyz", blogTitle: "test blog", blogSummary: "This is blog Summary" },
    ],
    dash: "border-blue-700 mb-5 ",
  }
  const content_contactUs = {
    id: "MbAppcontactUs",
    bgImage: "/images/specific/Services/MobileApp/Images/22.webp",
    smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/7.webp",

    bgImgCss: "lazyload ",
    pageTitle: "CONTACT US",
    pageTitleCss: " text-light w-full text-center font-extrabold text-3xl md:text-3xl xl:text-5xl",
    gridColCss: "my-auto w-full sm:w-2/3 md:w-3/5 rounded-4 lg:w-4/5 2xl:w-3/5  mx-auto lg:mx-0 text-darkGray content-center  place-content-center  justify-center  px-5  2xl:px-2 md:pl-6 md:pl-16 lg:px-0 xl:pl-4 xxl:pl-40 md:-mt-5",
    gridClass: "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 place-content-center  lg:h-full   xl:h-full h-full content-center md:py-10 ",
    gridCol1Css: "mt-3 md:mt-0",
    bannerClass: "object-fit pt-72 pb-60  md:pt-72 md:pb-48 md:bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: " /images/specific/Contact_Us/iAssureIT-contact-us-1.webp",
    imageCss: "mx-auto pt-2 pb-20 sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto lazyload",
    imgTpText: "<span class='leading-loose'> Now why to wait? </span><br/> Contact Us immediately ",
    imgTpTextClass: "text-light w-full text-center font-extrabold text-xl md:text-3xl xl:text-4xl leading-tight",
    dash: "border-white  mb-5 md:mb-3 mt-5 md:mt-12 lg:mt-2",
    showForm: "true",
    formCss: " p-6 -mt-16 md:-mt-16 lg:-mt-12 bg-white md:p-10 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
  }

  const content_CenterImgLeftRightRepeatableBlocks = {
    id: "mbBlk3",
    bgImage: "/images/specific/Services/MobileApp/Images/4.webp",
    smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/2.webp",
    bgImgCss:
      " object-fit py-32 md:py-24 lg:py-48 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload",

    blockTitle: "YOUR NEXT <br/><span class='font-extrabold'>MOBILE DEVELOPMENT PARTNER</span>",
    classForLeftImageContainer: " text-center ",
    classForblockTitle: "BlockTitle text-light w-full text-center font-normal pb-10 leading-tight",
    classForblockContent: "px-10 lg:px-20 xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
    imageSrc: "/images/specific/Services/MobileApp/Images/5.webp",
    imgAlt: "ltImgRtcontent",
    classForblockContainer: "flex flex-col sm:flex-row p-4",
    classForCardImage: "  relative mx-auto w-2/3 md:w-full justify-center items-center",
    classForImageContainer: "w-full  justify-center items-center mb-4 sm:mb-0",
    classForblockSubTitle: "w-full sm:w-1/2 p-4",
    classForSubTitle: "text-2xl font-bold mb-4 p-2",
    classForSubTitlePara: "text-gray-600 p-2",
    classForRightContainer: "w-1/2 p-2",
    classForRightContainer1: "w-100 rounded overflow-hidden ",
    classForRightinsideContainer: "flex",
    classForRightimageContainer: "bg-white border-8 p-8",
    classForContainer: "grid grid-cols-1 md:grid-cols-3 px-2 lg:px-16 2xl:px-48 md:py-12 2xl:pt-5 md:pb-20",
    classForLeftBlockContainer: "w-full  p-2 item-center my-auto place-content-center content-center",
    classForLeftContentContainer: "w-full rounded overflow-hidden  mb-4 ",
    classForLeftContentinsideContainer: "w-auto p-4 text-right my-auto",
    classForLeftContenTitleStyle: "font-normal text-white text-justify md:text-left sm:text-lg mb-2 lg:ml-5 xl:ml-0",
    classForRightContenTitleStyle: "font-normal text-white  text-justify md:text-right sm:text-lg mb-2 lg:mr-5 xl:mr-0",
    leftBlocks: [
      {
        leftTitle: "We promise a stellar 4+ rating on both App Store and Google Play",
        img: "/images/specific/Services/MobileApp/Icons/1.webp"
      },
      {
        leftTitle: "Our DNA is coded with inventive problem-solving capabilities",
        img: "/images/specific/Services/MobileApp/Icons/2.webp"
      },

    ],
    classForRightBlockContainer: "w-full p-2 item-center my-auto place-content-center content-center",
    classForRightContentContainer: "w-full rounded overflow-hidden  mb-4 ",
    classForRightContentinsideContainer: "w-auto p-4 text-left my-auto",
    classForRightimageTextContainer: "w-auto p-4  text-left",
    classForRightimageTitleContainer: "font-bold text-xl mb-2",
    classForRightimageSubtitleContainer: "font-normal text-white  sm:text-lg mb-2",
    rightBlocks: [
      {
        leftTitle: "We're not just a team - we're an army of 150+ specialized professionals.",
        img: "/images/specific/Services/MobileApp/Icons/3.webp"
      },
      {
        leftTitle: "We have a portfolio of over 250+ successful mobile projects.",
        img: "/images/specific/Services/MobileApp/Icons/4.webp"
      },

    ],
    dash: "border-white  mb-5 md:mb-3 mt-10 md:mt-16",

  };
  const content_ProblemAns1 = {
    id: "mbAppProblem1",
    blockTitle: " <span class='font-extrabold leading-relaxed'>THE TOP CHALLENGES IN <br/></span> <span class='font-normal'> CRAFTING A POWERFUL MOBILE APP </span>",
    classForblockTitle: "w-full text-center  text-2xl md:text-3xl xl:text-4xl px-3 md:px-0  ",
    dash: "border-blue-700 mb-5 mt-10",
    grid1Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-10",

    img1GridCss: " m-auto",
    img1: "/images/specific/Services/MobileApp/Images/6.webp",
    content1Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
    title1: "PROBLEM",
    title1Css: "text-2xl md:text-3xl xl:text-4xl   font-extrabold text-left",
    subTitle1: "Platform Fragmentation:",
    subTitle1Css: "font-bold subTitle my-3 xl:my-3",
    para1: "Ensuring that an application functions seamlessly across multiple platforms with different screen sizes, resolutions, and hardware capabilities can be complex. This significantly increases development time and costs.",
    para1Css: "font-[500]  text-lg md:text-2xl xl:text-xl ",
    grid2Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20",
    // img2GridCss:"",
    img2: "/images/specific/Services/MobileApp/Images/7.webp",
    content2Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
    title2: "iAssureIT Solution ",
    subTitle2: "One App, Every Device with iAssureIT",
    para2: "We ensure your app performs flawlessly across a wide range of devices and operating systems.",
    paraCss2: "",
    listData: [
      "With extensive experience in both iOS and Android platforms, our seasoned developers are equipped to tackle the challenge of platform fragmentation head-on.",
      "We harness the power of cross-platform development frameworks like React  Native and Flutter, ensuring your app reaches the widest audience without compromising on quality or efficiency. "
    ],
    listCss: "font-[500] text-lg md:text-2xl xl:text-xl px-5 list-decimal py-2 md:px-7"

  }
  const content_ProblemAns2 = {
    id: "mbAppProblem2",
    grid1Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-6 md:mt-20",
    img1GridCss: "m-auto",
    img1: "/images/specific/Services/MobileApp/Images/10.webp",
    content1Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
    title1: "PROBLEM",
    title1Css: "text-2xl md:text-3xl xl:text-3xl   font-extrabold text-left",
    subTitle1: "User Experience Design :",
    subTitle1Css: "font-bold subTitle my-3  3xl:!my-5",
    para1: "According to a survey by Clutch, 85% of users find mobile apps to be equally or more intuitive than desktop applications. Designing an intuitive, user-friendly interface that caters to a wide range of user preferences and behaviors requires in-depth research, testing, and expertise.",
    para1Css: "font-[500]  text-lg md:text-2xl xl:text-lg",
    grid2Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20 xl:mt-10 mb-5 md:mb-20",
    // img2GridCss:"",
    img2: "/images/specific/Services/MobileApp/Images/11.webp",
    content2Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
    title2: "iAssureIT Solution ",
    subTitle2: "Designing Beyond Aesthetics with iAssureiT",
    para2: "We believe in user-centric design. By blending art and science, we create interfaces that not only look stunning but also intuitively guide users through your app.",
    paraCss2: "",
    listData: [
      "Our team employs user-centric design principles to create interfaces that resonate with your target audience. ",
      "We conduct in-depth user research to guarantee your app aligns perfectly with user preferences and behaviors."
    ],
    listCss: "font-[500] text-lg md:text-2xl xl:text-lg px-5 list-decimal py-2 md:px-7"

  }
  return (
    <div>
      {/* PB added metaData */}
      <CustomHead
        title={data ? data.metaTagTitle : ""}
        description={data ? data.metaDescription : ""}
        keywords={data ? data.keywords : ""}
        canonicalUrl={data ? data.canonicalUrl : ""}
      />
      <BgImgLeftContentRtImg inputData={content_leftContentBgImg} />
      <BgImgRightContent inputData={content_BgImgRightTxt_3} />
      <CenterImgLeftRightRepeatableBlocks inputData={content_CenterImgLeftRightRepeatableBlocks} />
      <ProblemSolutionBlk inputData={content_ProblemAns1} />
      <BgImgRightContent inputData={content_developerBlk} />
      <ProblemSolutionBlk inputData={content_ProblemAns2} />
      <SmallBanner inputData={content_SmallBanner2} />
      {/* <MultipleImagesCarousel inputData={content_carousel} showVideos={true} /> */}
      <Autocarousel inputData={content_carousel2} />
      <Autocarousel inputData={content_carouselLeft} />
      <BgImgRightContent inputData={content_custAquisitions} />
      <CenterContentRepeatableBlocks inputData={content_CenterContentRepeatableBlocks} />
      <BgImgLeftImgRtGrid inputData={content_nationalAwards} />
      <CenterContentRepeatableBlocks inputData={content_MobileAppTechnology} />
      <BgImgRightContent inputData={content_custBase} />
      <OurPortfolio inputData={content_CaseStudy} />
      <BgImgRightContent inputData={content_profitMargin} />
      {/* <BlogsList inputData={content_BlogList} /> */}
      <LeftImgRightRepeatableBlk inputData={content_WhyChoose} readMore={false} />
      <BgImgRightContent inputData={content_contactUs} />
      <AccordionBlock inputData={content_accordion} />
    </div>
  )
}

//PB added metaData
MobileAppDevelopment.getInitialProps = async () => {
  // Perform data fetching here (e.g., making API requests)
  var url = '/services/mobile-app-development'
  const encodedURL = encodeURIComponent(url);

  try {
    const response = await axios.get('/api/seodetails/get/url/' + encodedURL);
    const data = response.data; // Access the response data directly
    return { data };
  } catch (error) {
    console.error("Error fetching:", error.message);
    return { data: null, error: error.message }; // Handle the error gracefully
  }
};
export default MobileAppDevelopment;