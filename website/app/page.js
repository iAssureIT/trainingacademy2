"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Autocarousel from "@/components/Autocarousel";
import VideoBanner from "@/templates/BannerBlocks/VideoBanner/VideoBanner";
import BgImgLeftContentRtImg from "@/templates/ContentBlocks/BgImgLeftContent/BgImgLeftContentRtImg";
import CenterContentRepeatableBlocks from "@/templates/RepeatableBlocks/CenterContentRepeatableBlocks/CenterContentRepeatableBlocks";
import CardsBlocks from "@/templates/SubComponents/CardsBlocks/CardsBlock";
import CenterContentRepeatableBlocksWithBg from "@/templates/RepeatableBlocks/CenterContentRepeatebleBlocksWithBg/CenterContentRepeatableBlocksWithBg";
import TextCarousel from '@/templates/Carousel/AllTypeCarousel/Carousel';
//import CardsBlocks1 from "@/templates/SubComponents/CardsBlocks1/CardsBlocks1";

import CustomHead from "@/templates/CustomHead/CustomHead";

import LeftImgRightRepeatableBlk from "@/templates/RepeatableBlocks/LeftImgRightRepeatableBlk/LeftImgRightRepeatableBlk";
import SmallBanner from "@/templates/BannerBlocks/SmallBanner/SmallBanner";
import Map from "@/widgets/Contact-Us/ContactDetails/Map";

const HomePage = () => {

  const content_Video = {
    id: "bannerVideo",
    class: "w-full ",
    videoUrl: "/images/videos/latest-web-banners.mp4",
    imgUrl: "/images/specific/Home/HomeVideoImg.webp"
  };
  const content_CET = {
    id: "CET_Block",
    // bgImage:
    //   "/images/specific/Home/HomeNewImg/iAssureIT-home-page-background-1.webp",
    // smallBGImage:
    //   "/images/specific/Home/HomeNewImg/Responsive/iAssureIT-home-page-background-1.webp",
    logo: "",
    pageTitle: "Transform Your Skills with </br>Cutting-edge Technologies",
    pageTitleCss: " pt-5 md:pt-2 text-xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-5xl xl:!leading-[1.3] text-center text-white w-full text-center font-bold BlockTitle text-center uppercase ",
    // h1Txt:
    //   "<h1 class='leading-tight'>ELEVATE YOUR BUSINESS </h1>WITH IASSUREIT YOUR  <br /> <span class='font-extrabold'> SPECIALIST IN LARGE  <br/>SCALABLE IT SYSTEMS </span> ",
    para: "Stay ahead of the curve and master the latest technologies in Fullstack Development. Our comprehensive training program covers everything from ReactJS and NodeJS to advanced topics like Redux, MongoDB integration, and AWS integration. With flexible learning options and expert guidance from industry professionals, there's no limit to what you can achieve. Take the first step towards transforming your skills and shaping your future – enroll now!",
    bgImgCss:
      "lazyload object-fit py-0 sm:py-10 md:py-10 2xl:py-20 bg-blue-400 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    logoCss: "lazyload justify-left align-left  mb-5 ",
    // h1TxtCss: "  text-xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-5xl xl:!leading-[1.3] text-center lg:text-left",
    paraCss:
      " text-white text-sm md:text-lg lg:text-2xl text-justify mt-5 ",
    gridCss:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 place-content-center lg:grid-cols-2 mb-5 md:mb-10  lg:h-full   xl:h-full h-full content-center  px-5 md:px-20 2xl:px-32 xxl:!px-48",
    gridSubDivCss:
      " md-mt-12 mx-auto text-white content-center  place-content-center  justify-center",
    image: "/images/specific/Home/HomeNewImg/iAssureIT-home-page-image-1.webp",
    imageCss: "  object-fit lazyload w-2/3 md:w-2/3 xl:w-2/3 2xl:w-2/3 xxl:!w-full mx-auto mb-10 pb-5 md:py-10",
    // imgCaption: "BSFI Industry Expert",
    // imgCaptionCss: "text-center text-white text-xl md:text-3xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-extrabold",
    // imgTagcss: "mx-auto lazyload",
    borderColor:
      "border-darkBluobject-fit py-10 md:py-20 2xl:py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyloadede",
    dash: "",
    // url: "/about-us",
    // urlName: "Dive In Now",
    // linkCss:
    //   " mx-auto lg:mx-0 font-bold text-sm md:text-xl  p-3  2xl:px-2 text-center border w-2/3 md:w-1/2  lg:w-1/2 xl:w-1/3 2xl:w-1/3 rounded btn bg-light text-darkGray my-10 hover:bg-transparent hover:text-white hover:shadow-2xl",

    // modalId: "BfsiModal",
    modalId:"CetModal",  
    modalDisplay:"true",
    modalUrlName:"Explore Courses <span><i class='fa-solid  fa-angle-double-right'></i></span>",
    modalBtnCss:"w-fit mx-auto md:float-left text-white text-center font-bold text-sm md:text-xl lg:text-sm xl:text-lg 2xl:text-xl  my-5 py-2 px-2 md:px-10  2xl:px-6  mt-3 lg:mt-10 border  rounded btn bg-blue-500 hover:bg-offWhite hover:text-black cursor-pointer"
    
    };
  const content_GlanceBlk = {
    sectionCss: "z-0",
    bgImage:
      "/images/specific/Home/HomeNewImg/iAssureIT-home-page-background-2.webp",
    smallBGImage:
      "/images/specific/Home/HomeNewImg/Responsive/iAssureIT-home-page-background-2.webp",
    bgImgCss:
      "lazyload object-fit py-32 lg:py-48 2xl:py-64 md:-mt-24 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    pageTitle: "COMPANY AT <span class='font-extrabold leading-relaxed'> A GLANCE </span>",
    pageTitleCss: "text-light w-full text-center BlockTitle text-center",
    dash: "border-white mb-0 md:mb-5 mt-28 md:mt-20",
    titleDivCss: "absolute mt-32 md:mt-10 lg:mt-32 xl:mt-32 2xl:mt-52 mx-auto z-10 w-full",
    classForNoOfCards:
      "px-5 md:px-20 mx-10 grid grid-cols-1 m-5 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 mb-10 lg:mb-20 mt-60 xl:mt-72",
    // "xl:px-32 2xl:w-3/4 mx-auto px-7 pb-10  max-w-8xl my-auto item-center text-center justify-evenly grid  sm:grid-cols-1 md:grid-cols-2 md:gap-x-9 lg:gap-x-9 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-9 mt-10",
    classForCards:
      "grid grid-cols-1 break-words p-5 px-9 text-center py-auto border mb-5 rounded-lg h-auto min-h-36 border-spacing-x-96 mb-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] 2xl:py-16",
    classForCardTitle: "BlockTitle text-white font-extrabold py-auto",
    classForcardTitle_2: " smTxt text-white  font-extrabold",
    classForCardImage: "w-full px-7 ",
    cardsArray: [
      {
        cardImage: "",
        cardTitle: "8+",
        cardImage2: "",
        cardTitle_2: "Years of Resilient Journey",
        cardTitle_3_Icon: (
          <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>
        ),
        cardTitle_3: "",
        cardButton: "",
        cardButtonTitle: "",
        cardButtonColor: "",
        link: "",
      },
      {
        cardImage: "",
        cardTitle: "60+",
        cardImage2: "",
        cardTitle_2: "Tech Experts",
        cardTitle_3_Icon: (
          <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>
        ),
        cardTitle_3: "",
        cardButton: "",
        cardButtonTitle: "",
        cardButtonColor: "",
        link: "",
      },
      {
        cardImage: "",
        cardTitle: "400+",
        cardImage2: "",
        cardTitle_2: "Global Clientele",
        cardTitle_3_Icon: (
          <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>
        ),
        cardTitle_3: "",
        cardButton: "",
        cardButtonTitle: "",
        cardButtonColor: "",
        link: "",
      },
      {
        cardImage: "",
        cardTitle: "600+",
        cardImage2: "",
        cardTitle_2: "Triumphs in Project Deliveries",
        cardTitle_3_Icon: (
          <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>
        ),
        cardTitle_3: "",
        cardButton: "",
        cardButtonTitle: "",
        cardButtonColor: "",
        link: "",
      },
      {
        cardImage: "",
        cardTitle: "300+",
        cardImage2: "",
        cardTitle_2: "Websites",
        cardTitle_3_Icon: (
          <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>
        ),
        cardTitle_3: "",
        cardButton: "",
        cardButtonTitle: "",
        cardButtonColor: "",
        link: "",
      },
      {
        cardImage: "",
        cardTitle: "100+",
        cardImage2: "",
        cardTitle_2: "Mobile Apps",
        cardTitle_3_Icon: (
          <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>
        ),
        cardTitle_3: "",
        cardButton: "",
        cardButtonTitle: "",
        cardButtonColor: "",
        link: "",
      },
    ],
  };
  const content_Statistics = {
    mainCss: "lazyload object-fit py-32 lg:py-48 2xl:py-80 md:-mt-24 bg-cover bg-no-repeat relative  w-full   ",
    title: "COMPANY AT <span class='font-extrabold leading-relaxed'> A GLANCE </span>",
    titleCss: "text-center px-10 BlockTitle text-white font-extrabold py-auto mx-auto",
    bgImage: '/images/specific/Home/HomeNewImg/iAssureIT-home-page-background-2.webp',
    gridDivCss: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-white gap-5 px-4 md:px-32",
    gridSubDivCss: "border  rounded  py-10",
    dash: "border-white mt-10 mb-5 md:mb-10",
    StatisticsList: [
      { caption: "8+", address: "Years in Bussiness" },
      { caption: "60+ ", address: "Developers" },
      { caption: "400+", address: "Clients" },
      { caption: "600+", address: "Projects Completed" },
      { caption: "300+", address: "Websites" },
      { caption: "100+", address: "Mobile Apps" }
    ]
  }
  const content_whatWeDo = {
    bgImage:
      "/images/specific/Home/WhatWeDo/iAssureIT-home-page-background-14.webp",
    smallBGImage:
      "/images/specific/Home/WhatWeDo/iAssureIT-home-page-background-14.webp",

    dash: "border-blue-700 md:mt-10 lg:mt-2",
    blockTitle: "<span class='font-extrabold'>WHAT</span><span > WE DO</span>",
    classForblockTitle: " w-full text-center BlockTitle",
  };
  const content_leftContentBgImg = {
    id: "FastTrack_Framework",
    bgImage: "/images/specific/Home/FastTrack_Framework/2.webp",
    smallBGImage: "/images/specific/Home/FastTrack_Framework/2.webp",
    logo: "",
    pageTitle: "<span class='font-extrabold'>FASTTRACK</span> FRAMEWORK",
    pageTitleCss: "  text-white w-full text-center BlockTitle",
    para: "Enterprise Apps are always a little more complex as compared to other apps. Especially due to their customized approach for critical business requirements. Designing and developing such enterprise applications means satisfying hundreds or thousands of separate requirements. iAssureIT has those unique and special skills required for developing great quality enterprise applications.",
    bgImgCss:
      "lazyload object-fit py-32 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    logoCss: "lazyload justify-left align-left  mb-5 ",
    paraCss:
      "text-lg sm:text-lg md:text-2xl lg:text-2xl text-justify font-normal",
    gridCss:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 place-content-center lg:grid-cols-2 mb-0 md:mb-10 lg:h-full   xl:h-full h-full content-center  ",
    gridSubDivCss:
      " mt-12 mx-auto text-white content-center  place-content-center  justify-center mb-10 py-10 px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-24 xxl:pl-40",
    image: "/images/specific/Home/FastTrack_Framework/1.webp",
    imageCss: " py-32 md:py-20 object-fit lazyload",
    imgTagcss: "mx-auto lazyload",
    borderColor: "border-darkBlue",
    dash: "border-white mb-5 md:mb-10 mt-32",
    // url: "/about-us",
    // urlName: "Read More",
    // linkCss: "text-white underline font-bold text-lg md:text-xl mt-3",
  };
  const content_CenterContentRepeatableBlocks = {
    id: "OurSpeciality",
    blockTitle: "<span class='font-extrabold'>OUR</span> SPECIALITY",
    classForblockTitle: " w-full text-center BlockTitle xl:py-5 py-5 ",
    classForNoOfCards:
      "px-10 lg:px-20  max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-1 gap-x-4 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6",
    classForCards:
      " border shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white p-10 mb-10 rounded-xl",
    classForCardTitle: "text-center  text-darkGray title p-3",
    classForCardTitle_2:
      "font-bold text-md text-primary dark:text-primary-400 p-5",
    classForCardImage: "w-1/2 mx-auto p-10 lazyload bg-gray-100 rounded-full",
    classForblockContent:
      "px-10 lg:px-20  xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
    // blockContent           : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    cardsArray: [
      {
        cardImage: "/images/specific/Home/Our_Speciality/1.webp",
        altImage: "imageDescription",
        cardTitle: "Enterprise",
        // cardTitle_2       : 'Block subtitle',
        classForContent:
          "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
        content:
          "Enterprise-grade web & mobile application development is becoming more agile & collaborative.",
        url: "/about-us",
        urlName: "READ MORE",
        linkCss: "text-blue-700  font-medium text-md md:text-lg mt-3",
      },
      {
        cardImage: "/images/specific/Home/Our_Speciality/2.webp",
        altImage: "imageDescription",
        cardTitle: "Startup World",
        // cardTitle_2       : 'Block subtitle',
        classForContent:
          "justify-content h-auto text-center text-lightGray my-auto subTitle",
        content:
          "We provide all kinds of supports to startups such as business plans, investment funding, market launch, & daily operations.",
        url: "/about-us",
        urlName: "READ MORE",
        linkCss: "text-blue-700  font-medium text-md md:text-lg mt-3",
      },
      {
        cardImage: "/images/specific/Home/Our_Speciality/3.webp",
        altImage: "imageDescription",
        cardTitle: "eCommerce",
        // cardTitle_2       : 'Block subtitle',
        classForContent:
          "justify-content h-auto text-center text-lightGray my-auto subTitle",
        content:
          "From simple design to extremely cutting-edge user experience, we develop any kind of eCommerce website",
        url: "/about-us",
        urlName: "READ MORE",
        linkCss: "text-blue-700  font-medium text-md md:text-lg mt-3",
      },
    ],
    dash: "border-blue-700",
  };
  const content_BgImgRightTxt_3 = {
    paraTitle:
      "Our innovative eCommerce platform can not only do everything that a ready-made eCommerce, content management system, or website builder does but also what they can't do. Our customized eCommerce platform provides you absolute magical user experience and unlimited innovations. You can build a single-owner eCommerce shop, the multi-vendor marketplace, franchise model using our eCommerce platform.",
    paraTitleClass: "subTitle text-justify font-normal",
    bgImage: "/images/specific/Home/AutoPiloteCommercePlatform/1.webp",
    smallBGImage: "/images/specific/Home/AutoPiloteCommercePlatform/1.webp",
    bgImgCss: "lazyload",
    pageTitle:
      "<span class='font-extrabold'> AUTOPILOT</span> ECOMMERCE PLATFORM",
    pageTitleCss: " text-light w-full text-center BlockTitle",
    gridColCss:
      "my-auto mx-auto text-white content-center  place-content-center  justify-center py-10 px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-24 xxl:pl-40",

    gridCol1Css: "lg:pb-32",
    gridClass:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
    // gridColCss:"text-white mx-auto my-auto content-center  place-content-center",
    // gridClass: "grid grid-cols-1 xs:grid-cols-1 md:grid-cols-1  lg:grid-cols-2 2xl:grid-cols-2  xl:grid-cols-2 h-auto ",
    // bannerClass: "py-32 p-5 lg:p-10 bg-cover bg-no-repeat relative  w-full  bg-center mb-8 lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]",
    bannerClass:
      "object-fit py-40 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/Home/AutoPiloteCommercePlatform/2.webp",
    imageCss:
      "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto lazyload",
    dash: "border-white mb-5 md:mb-10 sm:mt-32 lg:mt-20",
    url: "/about-us",
    urlName: "Read More",
    linkCss: "text-white underline font-bold text-lg md:text-xl mt-5",
  };
  const content_CenterImgCenterContentRepeatableBlocks = {
    blockTitle: "<span class='font-extrabold'>MOBILE APP </span>DEVELOPMENT",
    classForblockTitle: "text-darkGray w-full text-center BlockTitle mb-4",
    blockImage: "/images/specific/Home/Mobile_App_Devlopment/1.webp",
    altImage: "imageDescription",
    classForblockImage: "w-full rounded-md  mx-auto max-w-4xl p-10 lazyload",
    classForNoOfCards:
      "px-10 lg:px-20 mb-10 max-w-8xl text-center justify-evenly grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-6",
    classForCardTitle: "text-center font-semibold subTitle",
    classForCardTitle_2:
      "font-bold text-md text-primary dark:text-primary-400 p-5",
    classForCardImage:
      "mx-auto h-40 sm:h-52 md:h-48 lg:h-48 xl:h-52 2xl:h-72 xxl:h-96 p-10 lazyload",
    // classForblockTitle  :" text-sky-500 w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl",

    classForblockContent:
      "lg:px-12 max-w-4xl mx-auto h-auto text-justify my-auto text-md lg:text-lg justify-content bodyTxt",
    blockContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    cardsArray: [
      {
        cardImage: "/images/specific/Home/Mobile_App_Devlopment/2.webp",
        altImage: "imageDescription",
        cardTitle: "User Friendly",
        cardTitle_2: "",
        classForContent: "justify-content h-auto text-justify my-auto subTitle",
        content: "",
        classForCards:
          "text-darkGray p-10 mb-7  h-80 2xl:h-96 rounded-xl border border-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
      },
      {
        cardImage: "/images/specific/Home/Mobile_App_Devlopment/3.webp",
        altImage: "imageDescription",
        cardTitle: "Performance",
        cardTitle_2: "",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg",
        content: "",
        classForCards:
          "text-darkGray mt-12 h-80 2xl:h-96 p-10 mb-10 rounded-xl border border-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
      },
      {
        cardImage: "/images/specific/Home/Mobile_App_Devlopment/4.webp",
        altImage: "imageDescription",
        cardTitle: "Attractive UI",
        cardTitle_2: "",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg",
        content: "",
        classForCards:
          "text-darkGray h-80 2xl:h-96 p-10 mb-7 rounded-xl border border-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
      },
      {
        cardImage: "/images/specific/Home/Mobile_App_Devlopment/3.webp",
        altImage: "imageDescription",
        cardTitle: "Business Value",
        cardTitle_2: "",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg",
        content: "",
        classForCards:
          "text-darkGray  mt-12 h-80 2xl:h-96 p-10 mb-10 rounded-xl border border-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
      },
    ],
    dash: "border-blue-700 mb-5 md:mb-5",
  };
  const content_content_mgmt_Syestem = {
    id: "ContentMgmtSystem",
    bgImage: "/images/specific/Home/FastTrack_Framework/2.webp",
    smallBGImage: "/images/specific/Home/FastTrack_Framework/2.webp",
    logo: "",
    pageTitle: "<span class='font-extrabold'>CONTENT</span> MANAGEMENT SYSTEM",
    pageTitleCss: "text-light w-full text-center BlockTitle",
    para: "Enterprise Apps are always a little more complex as compared to other apps. Especially due to their customized approach for critical business requirements. Designing and developing such enterprise applications means satisfying hundreds or thousands of separate requirements. iAssureIT has those unique and special skills required for developing great quality enterprise applications.",
    bgImgCss:
      "object-fit py-32 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload",
    logoCss: " justify-left align-left  mb-5 lazyload",
    paraCss: "subTitle text-justify font-normal",
    gridCss:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center  ",
    gridSubDivCss:
      "my-auto mt-12 mx-auto text-white content-center  place-content-center  justify-center py-10 px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-24 xxl:pl-40",
    image: "/images/specific/Home/FastTrack_Framework/FastTrack_Framework.webp",
    imageCss: "  mx-auto py-32 md:py-20 object-fit lazyload",
    imgTagcss: "mx-auto lazyload",
    dash: "border-white mb-5 md:mb-10 mt-32",
    // url: "/about-us",
    // urlName: "Read More",
    // linkCss: "text-white underline font-bold text-lg md:text-xl mt-3",
  };
  const content_endLessPossibility = {
    id: "EndLessPossibility",
    // bgImage     : "/images/specific/Home/FastTrack_Framework/2.webp",
    // smallBGImage: "/images/specific/Home/FastTrack_Framework/2.webp",
    logo: "",
    pageTitle: "<span class='font-extrabold'>ENDLESS</span> POSSIBILITIES",
    pageTitleCss: " text-gray w-full text-center  BlockTitle leading-tight",
    para: "Enterprise Apps are always a little more complex as compared to other apps. Especially due to their customized approach for critical business requirements. Designing and developing such enterprise applications means satisfying hundreds or thousands of separate requirements. iAssureIT has those unique and special skills required for developing great quality enterprise applications.",
    bgImgCss:
      "object-fit bg-cover bg-no-repeat relative  py-6 w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload",
    logoCss: " justify-left align-left  mb-5 lazyload",
    paraCss: "subTitle text-justify font-normal text-gray",
    gridCss:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center  ",
    gridSubDivCss:
      "my-auto mt-12 mx-auto text-gray content-center  place-content-center  justify-center py-10 px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-24 xxl:pl-40",
    image: "/images/specific/Home/Endless_Possibilities/1.webp",
    imageCss: " py-32 md:py-20 object-fit lazyload",
    imgTagcss: "mx-auto lazyload",
    dash: "border-blue-700 mb-5 md:mb-3",
    // url: "/about-us",
    // urlName: "Read More",
    // linkCss: "text-gray underline font-bold text-lg md:text-xl mt-5",
  };
  const content_TopTextImageRepeatBlocks = {
    showChangeButtons: true,
    autoSlide: true,
    blockTitle: "CLIENTS TESTIMONIALS",
    classForblockTitle:
      "text-darkGray w-full text-center font-bold BlockTitle mb-5",
    classForNoOfCards:
      "px-10 lg:px-20  max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-1 gap-x-4 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6",
    classForCards:
      "bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]  text-lightGray italic p-10 mb-10 rounded-xl",
    classForCardTitle:
      "text-left text-blue-600 font-bold text-xl md:text-xl lg:text-2xl p-3",
    classForCardTitle_2:
      "font-normal text-lg text-primary dark:text-primary-400 px-3 my-auto",
    classForCardImage: " p-2 h-24 w-24 rounded-full",
    classForblockContent:
      "px-10 lg:px-20  xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
    // blockContent:
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    cardsArray: [
      {
        cardImage: "/images/generic/noImage.webp",
        altImage: "imageDescription",
        cardTitle: "John Doe",
        cardTitle_2: "CEO,Advertisign Corp",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        cardImage: "/images/generic/noImage.webp",
        altImage: "imageDescription",
        cardTitle: "Block - 2",
        cardTitle_2: "name 2",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        cardImage: "/images/generic/noImage.webp",
        altImage: "imageDescription",
        cardTitle: "Test3",
        cardTitle_2: "abc entp",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      // {
      //   cardImage: "/images/generic/noImage.webp",
      //   altImage: "imageDescription",
      //   cardTitle: "Block - 4",
      //   cardTitle_2: "name 4",
      //   classForContent:
      //     "justify-content h-auto text-justify my-auto text-md lg:text-lg",
      //   content:
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      // },
    ],
    dash: "border-blue-700 mb-5 md:mb-3",
  };

  const content_NationalAwards = {
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


  const content_CaseStudy = {
    sectionCss: "md:py-10 bg-white px-2 md:px-20",
    blockTitle: " CASE STUDIES",
    blockSubTitle:
      "We shed light on our work and what goes behind the development",
    classForblockTitle:
      " text-darkGray w-full BlockTitle text-center font-extrabold leading-relaxed",
    classForblockSubTitle:
      "text-center text-darkGray bodyTxt  font-normal mb-10 mt-5",
    classForNoOfCards:
      "px-10 lg:px-20  max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6",
    classForCards: "p-3  mb-1 md:mb-7 rounded-md",
    classForCardTitle:
      "text-darkGray text-center font-semibold text-xl md:text-xl lg:text-2xl p-3",
    classForCardImage: "w-full rounded-md bg-white p-5 border",
    urlName: "/case-study",
    // btnName: "View All",
    btnClass: " text-light rounded text-sm float-right py-2 px-4 bg-blue-800 ",
    cardsArray: [
      {
        cardImage:
          "/images/specific/Services/Our-Portfolio/Mobile_App_2/Coffic.webp",
        altImg: "portfolio",
        cardTitle: "Coffic-1",
      },
      {
        cardImage: "/images/specific/Services/Our-Portfolio/Mobile_App/2.webp",
        altImg: "portfolio",
        cardTitle: "BCI (Better Cotton Initiative)",
      },
      {
        cardImage: "/images/specific/Services/Our-Portfolio/Mobile_App/3.webp",
        altImg: "portfolio",
        cardTitle: "LYVO",
      },
      {
        cardImage: "/images/specific/Services/Our-Portfolio/Mobile_App/4.webp",
        altImg: "portfolio",
        cardTitle: "Unimandai",
      },
      {
        cardImage: "/images/specific/Services/Our-Portfolio/Mobile_App/5.webp",
        altImg: "portfolio",
        cardTitle: "Five Bees",
      },
      {
        cardImage: "/images/specific/Services/Our-Portfolio/Mobile_App/6.webp",
        altImg: "portfolio",
        cardTitle: "Pipito",
      },
    ],
    dash: "border-blue-700 mb-5  ",
  };
  const content_transformation = {
    pageTitle:
      "<span class='font-extrabold'>iAssureIT: </span> Your Strategic Partner in Digital Transformation ",
    pageTitleCss: " w-full text-center BlockTitle leading-tight",
    blockContent:
      "At iAssureIT, we leverage expertise, build scalable solutions, and equip you with essential skills to propel you ahead in the dynamic digital landscape.",
    classForblockContent:
      "text-lg md:text-xl xl:text-xl 2xl:text-xl text-center font-[500] px-2 md:px-16 lg:px-32 xl:px-0 2xl:px-2 xl:w-3/5 2xl:w-1/2 mt-10 md:mt-5 mb-16 mx-auto  ",
    dash: "border-blue-700 mb-5 md:mb-5 mt-10",
    classForNoOfCards:
      // "mx-auto  max-w-8xl item-center text-center  grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:gap-x-2 lg:gap-10 gap-10 mx-10 mb-10 mt-10",
      "mx-auto  max-w-8xl item-center text-center  grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:gap-x-2 lg:gap-x-10  mx-10 md:mx-10 mb-10 md:mt-10",
    classForCards:
      " break-words  h-full  border-spacing-x-96 mb-5 md:mb-5 lg:mb-10 ",
    classForBlkWidth: "text-white md:h-24 xl:h-auto p-4 w-3/5 md:w-3/5 lg:w-2/3 xl:w-3/4 2xl:w-3/5",

    classForCardTitle: "BlockTitle  font-extrabold py-auto",
    classForcardTitle_2: "text-lg md:text-sm  lg:text-lg xl:text-[28px] 2xl:text-[25px] font-bold leading-relaxed   text-left text-white font-extrabold leading-relaxed",
    classForCardImage: "w-full px-7 ",
    classForCardImg2: "w-2/3 md:w-auto",
    classForCardTitle_3: " smTxt text-justify",

    cardsArray: [
      {
        cardImage: "",
        cardTitle: "",
        bgImg:
          "images/specific/Home/HomeNewImg/iAssureIT-home-page-background-4.webp",
        cardImage2:
          "/images/specific/Home/HomeNewImg/iAssureIT-home-page-image-8.webp",
        classForCardImg2: "w-auto rounded-t-lg  py-2 mx-auto",
        cardTitle_2: "CUSTOMIZED AND  BFSI-CENTRIC IT SOLUTIONS",
        // cardTitle_3_Icon: <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>,
        cardTitle_3: "",
        cardButton: "",
        cardButtonTitle: "",
        cardButtonColor: "",
        link: "",
        cardPara:
          "Our solutions are crafted to cater to your distinctive business needs in the BFSI sector. From developing sophisticated large scalable applications to enforcing robust cybersecurity measures, we ensure our IT solutions are in perfect harmony with your business objectives.",
      },
      {
        cardImage: "",
        cardTitle: "",
        bgImg:
          "images/specific/Home/HomeNewImg/iAssureIT-home-page-background-5.webp",
        cardImage2:
          "/images/specific/Home/HomeNewImg/iAssureIT-home-page-image-9.webp",
        classForCardImg2: "w-auto rounded-t-lg  py-2 mx-auto",
        cardTitle_2: "SCALABLE AND SUSTAINABLE  SOLUTIONS",
        // cardTitle_3_Icon: <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>,
        cardTitle_3: "",
        cardButton: "",
        cardButtonTitle: "",
        cardButtonColor: "",
        link: "",
        cardPara:
          "Our solutions are engineered for scalability and sustainability, ensuring they resonate with your evolving business demands and remain pertinent in the long term.",
      },
      {
        cardImage: "",
        cardTitle: "",
        classForCardImg2: "w-auto rounded-t-lg  py-2 mx-auto",
        bgImg:
          "images/specific/Home/HomeNewImg/iAssureIT-home-page-background-6.webp",
        cardImage2:
          "/images/specific/Home/HomeNewImg/iAssureIT-home-page-image-10.webp",
        cardTitle_2: "FUTURE-READY  TECHNOLOGIES",
        // cardTitle_3_Icon: <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>,
        cardTitle_3: "",
        cardButton: "",
        cardButtonTitle: "",
        cardButtonColor: "",
        link: "",
        cardPara:
          "Stay at the forefront with our progressive technology approach. We leverage emerging technologies like Artificial Intelligence (AI), Augmented Reality (AR), Virtual Reality (VR), and Blockchain to deliver inventive solutions that are prepared",
      },
      {
        cardImage: "",
        cardTitle: "",
        classForCardImg2: "w-auto rounded-t-lg  py-2 mx-auto",
        bgImg:
          "images/specific/Home/HomeNewImg/iAssureIT-home-page-background-7.webp",
        cardImage2:
          "/images/specific/Home/HomeNewImg/iAssureIT-home-page-image-11.webp",
        cardTitle_2: "EXPERTISE ACROSS  BFSI SPECTRUM",
        // cardTitle_3_Icon: <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>,
        cardTitle_3: "",
        cardButton: "",
        cardButtonTitle: "",
        cardButtonColor: "",
        link: "",
        cardPara: "With a wealth of experience across the BFSI industry, our team of specialists brings a broad perspective and innovative solutions to the table, ensuring a holistic approach to problem-solving",
      },
    ],
  };
  const content_CardBlock = {
    bgImage:
      "/images/specific/Home/HomeNewImg/iAssureIT-home-page-background-13.webp",
    smallBGImage:
      "",
    bgImgCss:
      "lazyload object-fit bg-cover bg-no-repeat relative py-0 md:py-1 w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    // pageTitle: "COMPANY AT <span class='font-extrabold'> A GLANCE </span>",
    // pageTitleCss: "text-light w-full text-center BlockTitle",
    // dash: "border-white mb-5 md:mb-5 mt-32",
    classForNoOfCards:
      "mx-auto  max-w-8xl my-auto item-center text-center justify-evenly grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4  md:mb-16 md:mt-16",
    classForCards:
      "group py-1 md:py-1 mb-10 break-words lg:pb-32  xl:pb-20 2xl:pb-10 px-4 my-auto py-auto h-full lg:mb-10  h-auto border-spacing-x-96 md:mb-10 lg:bg-[image:var(--largeCardImg)]  bg-[image:var(--smallCardImg)]",
    classForCardTitle: "BlockTitle text-white font-extrabold py-auto",
    classForcardTitle_2: "text-lg md:text-lg xl:text-2xl  text-white text-center  font-extrabold ",
    classForCardImage: "w-full px-7 ",
    classForCardTitle_3: "text-white text-[14px]  lg:text-[16px] 2xl:text-[20px] text-justify hidden group-hover:block text-white smTxt text-justify hidden group-hover:block group-hover:animate-[fade-in-up_500s_ease-in-out]-hover:animate-[fade-in-up_500s_ease-in-out]",
    cardsArray: [
      {
        cardImage: "",
        cardTitle: "",
        classForCardImg2: "w-auto rounded-t-lg  py-2 h-auto group-hover:h-48 mx-auto",
        bgImg:
          "/images/specific/Home/HomeNewImg/iAssureIT-home-page-background-9.webp",
        smallBgImg: "/images/specific/Home/HomeNewImg/Responsive/iAssureIT-home-page-background-9.webp",
        cardImage2:
          "/images/specific/Home/HomeNewImg/iAssureIT-home-page-image-21.webp",
        cardTitle_2: "TRANSPARENT AND  ETHICAL PRACTICES",
        cardAltImage2: "cardImg1",
        // cardTitle_3_Icon: <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>,
        cardTitle_3: "Transparency and ethics are the bedrock of our business operations. We believe in maintaining an open line of communication and adhering to the highest ethical standards, building a foundation of trust with our clients.",
        cardButton: "",
        cardButtonTitle: "",
        cardButtonColor: "",
        link: "",
      },
      {
        cardImage: "",
        cardTitle: "",
        classForCardImg2: "w-auto rounded-t-lg  py-2 h-auto group-hover:h-48 mx-auto",
        bgImg:
          "/images/specific/Home/HomeNewImg/iAssureIT-home-page-background-10.webp",
        smallBgImg: "/images/specific/Home/HomeNewImg/Responsive/iAssureIT-home-page-background-10.webp",
        cardImage2:
          "/images/specific/Home/HomeNewImg/iAssureIT-home-page-image-16.webp",
        cardAltImage2: "cardImg2",
        cardTitle_2: "PROACTIVE APPROACH",
        // cardTitle_3_Icon: <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>,
        cardTitle_3:
          "Our proactive approach enables us to anticipate challenges and devise strategies to overcome them well in advance, ensuring smooth project execution and timely delivery.",
        cardButton: "",
        cardButtonTitle: "",
        cardButtonColor: "",
        link: "",
      },
      {
        cardImage: "",
        cardTitle: "",
        classForCardImg2: "w-auto rounded-t-lg  py-2 h-auto group-hover:h-48 mx-auto",
        bgImg:
          "/images/specific/Home/HomeNewImg/iAssureIT-home-page-background-11.webp",
        smallBgImg: "/images/specific/Home/HomeNewImg/Responsive/iAssureIT-home-page-background-11.webp",
        cardImage2:
          "/images/specific/Home/HomeNewImg/iAssureIT-home-page-image-home-page-15.webp",
        cardTitle_2: "CONTINUOUS SKILL  UPGRADATION",
        cardAltImage2: "cardImg3",
        // cardTitle_3_Icon: <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>,
        cardTitle_3: "Our team is our greatest asset and we invest in continuous training and skill upgradation to keep them abreast of the latest technological advancements, ensuring that you receive modern, efficient, and effective solutions.",
        cardButton: "",
        cardButtonTitle: "",
        cardButtonColor: "",
        link: "",
      },
      {
        cardImage: "",
        cardTitle: "",
        classForCardImg2: "w-auto rounded-t-lg  py-2 h-auto group-hover:h-48 mx-auto",
        bgImg:
          "/images/specific/Home/HomeNewImg/iAssureIT-home-page-background-12.webp",
        smallBgImg: "/images/specific/Home/HomeNewImg/Responsive/iAssureIT-home-page-background-12.webp",
        cardImage2:
          "/images/specific/Home/HomeNewImg/iAssureIT-home-page-image-17.webp",
        cardTitle_2: "LONG-TERM  PARTNERSHIP",
        cardAltImage2: "cardImg5",
        // cardTitle_3_Icon: <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>,
        cardTitle_3: "We believe in building long-term relationships with our clients. Our journey with you extends beyond project completion, as we offer continued support and are always available for future collaborations.",
        cardButton: "",
        cardButtonTitle: "",
        cardButtonColor: "",
        link: "",
      },
    ],
  };

  const content_DigitalTransformation = {
    sectionCss: "md:my-5 lg:my-0",
    blockTitle:
      " <span  class='uppercase font-extrabold leading-relaxed' > ELEVATING DIGITAL</span> TRANSFORMATION",
    classForblockTitle: "w-full text-center text-3xl md:text-3xl xl:text-4xl mb-5  md:mb-8 lg:-mt-8",
    classForNoOfCards:
      "px-10 lg:px-32 2xl:px-48 mt-10 md:mt-20 max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-1 gap-x-4 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6",
    classForCards:
      " p-3 mb-7 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]",
    classForCardTitle:
      "text-center font-bold text-xl md:text-xl lg:text-2xl p-3",
    classForCardTitle_2:
      "font-bold text-md text-primary dark:text-primary-400 p-5",
    imgDivCss: "py-2",
    classForCardImage: " px-2 w-full",
    classForblockContent:
      "text-lg md:text-xl text-center font-[500] px-2 md:px-12 lg:px-32 xl:px-64  2xl:w-2/5 2xl:px-2  mx-auto ",
    blockContent:
      "We elevate businesses with our quest to innovation and expertise with tech advancement as per BFSI industry requisites.",
    bgImgCss:
      "relative bg-cover p-3 block   bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    dash: "border-blue-700 mb-5 lg:mb-0 lg:-mt-12 ",
    cardsArray: [
      {
        cardImage: "/images/specific/about_us/10.webp",
        altImage: "imageDescription",
        cardTitle: "Legacy Upgrade",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg p-3 font-[500]",
        content:
          "  Upgrading existing systems to align with the latest tech   advancements and BFSI industry requirements.  ",
      },
      {
        cardImage: "/images/specific/about_us/11.webp",
        altImage: "imageDescription",
        cardTitle: "Process Automation",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg p-3 font-[500]",
        content:
          "Transitioning manual processes to automated workflows, bolstering efficiency and accuracy",
      },
      {
        cardImage: "/images/specific/about_us/12.webp",
        altImage: "imageDescription",
        cardTitle: "Innovative Applications",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg p-3 font-[500]",
        content:
          "Creating applications tailored to  meet the rigorous demands of the digital era and the BFSI sector",
      },
    ],
  };
  const content_contactBlock = {
    id: "contact",
    bgImage:
      "/images/specific/Home/HomeNewImg/iAssureIT-home-page-breaking-slide-1.webp",
    smallBGImage:
      "/images/specific/Home/HomeNewImg/Responsive/iAssureIT-home-page-background-4.webp",
    logo: "",
    h1Txt:
      "Ready to Elevate Your BFSI  Operations? Harness the Power of  Large Scalable Apps with Us!",
    h1TxtCss:
      "title  text-center lg:text-left content-left  place-content-left  justify-center content-left leading-tight",
    bgImgCss:
      "py-10 lazyload object-fit bg-cover bg-no-repeat relative    lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    para: "Contact iAssureIT Today ",
    paraCss: " text-light title text-center lg:text-left mt-5 ",
    gridCss:
      "pt-5 lg:pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1   lg:grid-cols-2 flex-row-reverse md:flex-none  lg:h-full   xl:h-full h-full px-10  md:px-20 lg:px-32 2xl:px-32 xxl:!px-48 ",
    gridSubDivCss: " my-auto text-white 2xl:w-2/3 pt-10 ",
    image: "/images/specific/Home/HomeNewImg/Rupee.webp",
    imageCss:
      "object-fit px-2 py-3 md:p-24 lg:p-0 w-full  lg:w-auto mx-auto  object-fit lazyload place-content-bottom object-bottom ",
    borderColor: "border-darkBlue",
    imgTagcss: "h-auto w-full",
    // btn2: "true",
    // btn2Url: "/contact-us",
    // btn2UrlName: "Contact Us",
    // btn2Css:
    //   "mx-auto font-bold text-lg md:text-xl  p-3  2xl:px-2 text-center border w-full md:w-3/4  lg:w-3/4 xl:w-3/4 2xl:w-3/4 rounded btn bg-light text-darkGray mt-10 mb-10  md:mt-5 lg:mb-20 lg:mt-0 hover:bg-transparent hover:text-white",
    modalId: "contactUsModal",
    modalDisplay2: "true",
    modalUrlName2: "Contact Us <span><i class='fa-solid  fa-angle-double-right'></i></span>",
    modalBtnCss2: "mx-auto font-bold text-lg md:text-xl  p-3  2xl:px-2 text-center border w-full md:w-3/4  lg:w-3/4 xl:w-3/4 2xl:w-3/4 rounded btn bg-white text-darkGray mt-10 mb-10  md:mt-5 lg:mb-20 lg:mt-0 hover:bg-transparent hover:text-white cursor-pointer"

  };
  const content_WhyChoose = {
    id: "whyChooseBlk",
    sectionClass: "mx-auto text-center px-2  md:px-8 py-1 container md:mt-20 xl:mt-10",
    pageTitle:
      " <span class=' leading-relaxed font-extrabold'>ENHANCING INFRASTRUCTURE </span><br/><span class=' font-normal'>MANAGEMENT</span>  ",
    pageTitleCss: "w-full text-center   text-3xl md:text-4xl xl:text-4xl",

    bgImage:
      "/images/specific/Home/HomeNewImg/iAssureIT-home-page-image-7.webp",
    bgImageCss: "md:w-2/3 mx-auto h-auto object-cover",
    bigImageAlt: "iAssureIT-infra",
    gridCss: "grid grid-cols-1 lg:grid-cols-2 gap-10 md:mt-10",
    gridCol1Css: "  w-full h-auto relative my-auto",
    repeatedBlkCss: " shadow-none flex items-start sm:h-36 md:h-auto my-10 xl:my-3  ",
    imgCss:
      "flex-none bg-purple h-auto   items-start rounded mr-3 md:mr-10 object-cover shadow-[4.0px_8.0px_8.0px_rgba(97,143,237,0.8)]",
    titleCss: "subTitle font-bold mb-4",
    desCss: "text-gray-700 text-lg sm:text-lg overflow-hidden font-[500]",
    linkCss: "float-right px-4 text-skyBlue",
    para2:
      "At iAssureIT, we are devoted to offering unparalleled solutions, merging innovative strategies with tried-and-true technologies to drive digital success in the BFSI sector.",
    cssForPara2: "text-justify md:text-center font-semibold smTxt px-2 lg:px-32",
    repeatedBlocks: [
      {
        imageSrc:
          "/images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-7.webp",
        title: "Complexity Unraveled:",
        description:
          "Streamlining software infrastructure by managing   service complexities, ensuring peak performance.",
      },
      {
        imageSrc:
          "/images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-8.webp",
        title: "Tech-Infused Solutions:",
        description:
          "Employing AI, AR/VR, Blockchain, and other frontier  technologies to tackle infrastructure challenges.",
      },
      {
        imageSrc:
          "/images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-9.webp",
        title: "DevOps Fusion:",
        description:
          "Integrating DevOps practices to nurture collaboration, amplify deployment frequency, and expedite issue resolution.",
      },
    ],
    dash: "border-blue-700 mb-5 mt-10 md:mt-0",
  };
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
  const content_BlogList = {
    secCss: "main p-5 lg:px-20 2xl:px-48 bg-white",
    blockTitle: "VISIT OUR BLOGS",
    classForblockTitle:
      "text-darkGray w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:py-14 py-10 ",
    gridDivCss:
      "grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10",
    blogData: [
      {
        blogHeaderImage: "/images/specific/Services/MobileApp/Images/8.webp",
        createdAt: "24 Sep 2023",
        duration: "12 mins",
        userFullName: "Abc Xyz",
        blogTitle: "test blog",
        blogSummary: "This is blog Summary",
      },
      {
        blogHeaderImage: "/images/specific/Services/MobileApp/Images/5.webp",
        createdAt: "24 Sep 2023",
        duration: "12 mins",
        userFullName: "Abc Xyz",
        blogTitle: "test blog",
        blogSummary: "This is blog Summary",
      },
      {
        blogHeaderImage: "/images/specific/Services/MobileApp/Images/10.webp",
        createdAt: "24 Sep 2023",
        duration: "12 mins",
        userFullName: "Abc Xyz",
        blogTitle: "test blog",
        blogSummary: "This is blog Summary",
      },
      {
        blogHeaderImage: "/images/specific/Services/MobileApp/Images/8.webp",
        createdAt: "24 Sep 2023",
        duration: "12 mins",
        userFullName: "Abc Xyz",
        blogTitle: "test blog",
        blogSummary: "This is blog Summary",
      },
    ],
    dash: "border-blue-700 mb-5 ",
  };
  const content_contactUs = {
    id: "MbAppcontactUs",
    bgImage: "/images/specific/Services/MobileApp/Images/22.webp",
    smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/7.webp",

    bgImgCss: "lazyload ",
    pageTitle: "CONTACT US",
    pageTitleCss: " text-light w-full text-center font-extrabold text-3xl md:text-3xl xl:text-5xl",
    gridColCss: "my-auto w-full sm:w-2/3 md:w-3/5 rounded-4 lg:w-4/5 2xl:w-3/5  mx-auto lg:mx-0 text-darkGray content-center  place-content-center  justify-center  px-5  2xl:px-2 md:pl-6 md:pl-16 lg:px-0 xl:pl-4 xxl:pl-40 md:-mt-5",
    gridClass: "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 place-content-center  lg:h-full   xl:h-full h-full content-center md:py-10 ",
    gridCol1Css: "mt-6 md:mt-0",
    bannerClass: "object-fit pt-72 pb-72  md:pt-72 md:pb-48 md:bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/Services/MobileApp/Images/23.webp",
    imageCss: "mx-auto pt-2 pb-20 sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto lazyload",
    imgTpText: "<span class='leading-loose'> Now why to wait? </span><br/> Contact Us immediately ",
    imgTpTextClass: "text-light w-full text-center font-extrabold text-xl md:text-3xl xl:text-4xl leading-tight",
    dash: "border-white  mb-5 md:mb-3 mt-12 lg:mt-2",
    showForm: "true",
    formCss: " p-6 -mt-16 md:-mt-16 lg:-mt-12 bg-white md:p-10 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
  }
  const content_Expertise = {
    id: "Services",
    bgImgCss: "border-b-2 border-gray-600",
    blockTitle:
      "DRIVING DIGITAL SUCCESS <span class='font-extrabold'>: OUR EXPERTISE <br/> <span class='font-extrabold text-center bodyTxt'>Building Large Scalable IT Solutions</span></span>",
    classForblockTitle: " w-full text-center BlockTitle xl:pb-5 md:pb-10 leading-relaxed ",
    classForNoOfCards:
      "px-10 lg:px-32 lg:mt-5  max-w-8xl text-center justify-evenly grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-6 ",
    classForCards:
      " border border-b-[10px] border-b-darkBlue shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white mt-16  md:mt-10 xl:mt-0 mb-4 md:mb-10 ",
    classForCardTitle:
      "text-center  text-darkGray title  font-semibold text-xl   ",
    classForCardTitle_2:
      "font-bold text-md text-primary dark:text-primary-400 ",
    classForCardImage:
      "w-auto 2xl:w-auto mx-auto p-5 xl:p-5 2xl:p-5 lazyload bg-gray-100 rounded-full ",
    classForblockContent:
      "md:w-2/3 xl:w-1/2 2xl:w-2/5 mx-auto font-[500] px-10  pb-3 md:pb-10  xl:pb-14 h-auto text-center my-auto text-md lg:text-lg justify-content mt-5 lg:mt-0",
    blockContent: "We build large custom applications and software solutions that effortlessly scale with your business growth.",
    classForImg:
      "p-10 overflow-hidden bg-cover bg-no-repeat  lg:p-8 -mt-24 lg:-mt-28 xl:-mt-28 2xl:-mt-24",
    displayAnimation: "true",
    dash: "border-blue-700 mb-0 md:mt-10 lg:mt-0",
    cardsArray: [
      {
        id: "1",
        cardImage: "/images/specific/Home/icon1.webp",
        altImage: "imageDescription",
        cardTitle: "Growth-Engineered Solutions",
        cardTitle_2: "Block subtitle",
        classForContent:
          "text-justify h-auto text-center px-5 text-lg text-lightGray my-auto subTitle mt-5 md:mt-10",
        content:
          "Build Customized web and mobile application Solutions  that upscale seamlessly with your business progression.",
        // url: "/about-us",
        // urlName: "READ MORE",
        // linkCss: "text-blue-700  font-medium text-md md:text-lg mt-3"
      },

      {
        id: "2",
        cardImage: "/images/specific/Home/icon2.webp",
        altImage: "imageDescription",
        cardTitle: "Microservices Architecture",
        classForContent:
          "text-justify h-auto text-center px-5 text-lg text-lightGray my-auto subTitle mt-5 md:mt-10",
        content:
          "Harnessing a modular, event-driven architecture to ensure effortless scalability and agility.",
      },
      {
        id: "3",
        cardImage: "/images/specific/Home/icon3.webp",
        altImage: "imageDescription",
        cardTitle: "Future-Ready Tech Stack",
        classForContent:
          "text-justify h-auto text-center px-5 text-lg text-lightGray my-auto subTitle mt-5 md:mt-10",
        content:
          "Deploying a robust tech stack designed for rapid scaling and adaptability to new-age technologies.",
      },
    ],
  };
  const content_About = {
    sectionClass:
      "pt-20 pb-20 md:pt-10 md:pb-10 lazyload object-fit bg-cover bg-no-repeat relative bg-blue-50   lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] px-2 md:px-5 lg:px-32 2xl:px-32",
    // sectionBgImg:
    //   "/images/specific/Home/HomeNewImg/iAssureIT-home-page-background-3.webp",
    // smallBGImage:
    //   "/images/specific/Home/HomeNewImg/Responsive/iAssureIT-home-page-background-3.webp",

    pageTitle:
      "<span class=' font-extrabold'>About Mr. Ashish Naik:</span>  ",
    pageTitleCss: "w-full text-center   BlockTitle mb-10 md:mb-5 2xl:mb-2 leading-relaxed",
    blockSubTitle:
      "<div class='px-3 md:px-20'> At our training program, we pride ourselves on being the leading destination for individuals aspiring to excel in FullStack Development. Led by the esteemed mentor, Mr. Ashish Naik, a seasoned professional with over 25 years of experience in the IT industry, our program stands as a beacon of excellence, offering unparalleled expertise and guidance to our students.</div> <br/><span class='my-4 md:my-5 w-full text-left font-extrabold  uppercase  BlockTitle float-left leading-tight'>Ashish Naik’s Career <br/> Highlights:</span>",
    classForblockSubTitle:
      "text-xl md:text-sm lg:text-lg text-center font-normal   mx-auto    -mt-10 md:mt-0",
    bgImage:
      "/images/specific/Home/HomeNewImg/iAssureIT-home-page-image-2.webp",
    bgImageCss: "md:w-full xl:w-auto  2xl:w-2/3 mx-auto h-auto object-cover xl:mb-32 lg:-mt-12 2xl:-mt-5",
    bigImageAlt: "iAssureIT-infra",
    gridCss: "grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-10 float-left px-3",
    gridCol1Css: "order-last  w-full h-auto relative my-auto",
    repeatedBlkCss: " shadow-none flex items-start sm:h-36 md:h-auto my-10 2xl:my-5  border-b ",
    imgCss:
      "flex-none bg-purple h-auto   items-start rounded mr-3 md:mr-10 object-cover shadow-[4.0px_8.0px_8.0px_rgba(97,143,237,0.8)]",
    titleCss: " text-lg md:text-sm lg:text-sm 2xl:text-lg overflow-hidden mb-8",
    desCss: "",
    linkCss: "float-right px-4 text-skyBlue",
    repeatedBlocks: [
      {
        imageSrc:
          "images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-4.webp",
        title: "25 years of IT Industry experience, spanning across various domains and technologies.",
      },
      {
        imageSrc:
          "images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-5.webp",
        title: "Masters degree graduate from IIT Delhi, showcasing his dedication to excellence and continuous learning.",
      },
      {
        imageSrc:
          "images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-6.webp",
        title: "Extensive global experience, having worked in countries such as the US, Italy, Canada, UK, Switzerland, and Dubai.",
      },
      {
        imageSrc:
          "images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-6.webp",
        title: "Collaborated with over 12 Fortune-500 clients, delivering cutting-edge solutions and exceeding expectations.",
      },
      {
        imageSrc:
          "images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-6.webp",
        title: "Entrepreneurial spirit, with over 12 years of experience running successful ventures in the tech space.",
      },
      {
        imageSrc:
          "images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-6.webp",
        title: "Developed over 600 applications, demonstrating his proficiency in a wide array of technologies.",
      },
      {
        imageSrc:
          "images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-6.webp",
        title: "Expertise in more than 60 technologies, showcasing his versatility and adaptability in the ever-evolving tech landscape.",
      },
    ],
    // dash: "border-white mb-5 mt-5 md:mt-20 lg:mt-52 xl:mt-40 xxl:!mt-72",
  };
  const content_SmallBanner2 = {
    id: "mbSmallBanner",
    // bgImage: "/images/specific/Services/MobileApp/Images/12.webp",
    // smallBGImage: "/images/specific/Services/MobileApp/Images/12.webp",
    title: "Affordable Online Courses & Learning Opportunities For You",
    titleClass: " text-center mx-auto  my-auto font-extrabold text-lg md:text-3xl xl:text-4xl py-10 md:py-20 w-full md:w-3/5 2xl:w-1/2",
    className: "h-auto w-full mx-auto",
    alt: "reserve",
    bgImgCss: "bg-blue-600 py-3 md:py-10 mb-5 md:mb-20 2xl:py-5 bg-cover bg-no-repeat  bg-left-bottom lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]",
    gridCss: "grid grid-cols-1 sm:grid-cols-1   lg:grid-cols-1 2xl:grid-cols-1 gap-x-10 h-full w-full content-center  place-content-center my-auto xl:py-10",
    gridCol1Class: "my-auto  sm:w-auto  text-white text-center  mb-2 md:mb-4 ",
    // para: "",
    // paraCss: "text-xs md:text-2xl xl:text-2xl text-light text-center "
  }

  const content_carousel3 = {
    sectionCss: "relative px-12 md:px-20 mb-0 md:mb-5 text-center xl:px-20 max-w-8xl justify-evenly",
    pageTitle: "Customer Testimonials for <span class='font-extrabold'>iAssureIT </span>",
    pageTitleCss: " text-darkGray w-full BlockTitle text-center  font-normal leading-relaxed",
    dash: "border-blue-700 mb-2 md:mb-2 mt-10 md:mt-5 lg:mt-10",
    wrapperCss: "bg-blueColor p-20",
    classForblockContent:
      "lg:px-12 max-w-4xl mx-auto h-auto text-center my-auto text-md lg:text-lg justify-content bodyTxt mb-10 font-semibold",
    blockContent:
      "Discover Transformational Solutions in Our Proven Success Stories.",
    CarouselCss: "slides-container whitespace-normal scrollbar-hide  h-auto flex snap-x snap-mandatory overflow-hidden space-x-7 rounded scroll-smooth before:shrink-0 after:shrink-0 md:before:w-0 md:after:w-0 md:px-20 mb-6 md:mb-10",
    txtBlkCss:
      "flex-none h-auto  w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 h-full object-cover  text-left   gap-10  slide rounded-lg cursor-pointer shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 md:mb-10",
    subBlkCss: " breakWord h-[305px] md:h-[305px] lg:h-[305px]  p-3 md:p-9 slide  overflow-auto bg-offWhite  italic",
    autherCss: "font-semibold p-3  md:px-9 lg:px-5 xl:px-9 py-3 h-24 md:h-28 lg:h-28 xl:h-28 2xl:h-24 ",
    // txtBlkCss:"w-1/2 lg:w-1/3 object-cover bg-offWhite gap-10 p-4 slide rounded-lg cursor-pointer",
    prevBtnCss: "px-2 py-2 prev bg-white text-neutral-900 group shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
    nextBtnCss: "px-2 py-2  next bg-white text-neutral-900 group shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
    textBlock: [
      {
        content: "<span class='text-xl italic font-semibold'>“</span>One important thing which differentiates iAssureIT from other IT companies is the thought process of complete team & their will to provide the best of features, thinking completely out of the box & without bothering the extra efforts which would go in from their end implementing these. <br/>Really happy & satisfied with the quality of the work<span class='text-xl font-semibold'>”</span>",
        author: "- Mr. Paras Surana<br/><span class='text-sm font-semibold '>CEO - Prabandhan Management Services Pvt Ltd</span>"
      },
      {
        content: "<span class='text-xl italic font-semibold'>“</span>I am writing to express my gratitude and satisfaction with the exceptional services provided by iAssure IT.  <br/>As a medical professional, the efficient and reliable IT support they have offered has been invaluable in maintaining the smooth operation of my practice through App and Design support.<br/> I would like to extend my heartfelt appreciation to iAssure IT for their unwavering support and exceptional service.<br/>I will recommend them to any healthcare professional or organization in need of top-tier IT solutions and support.<br/> Their dedication to their clients is evident, and they have become an integral part of my practice's success.<span class='text-xl font-semibold'>”</span>",
        author: "- Dr. P. P. Patil<br/><span class='text-sm font-semibold '>Obstetrician & Gynecologist - Sangali</span>"
      },
      {
        content: "<span class='text-xl italic font-semibold'>“</span>We engaged iAssureIT for a complex app project, and they delivered beyond our expectations. Their technical proficiency and innovative approach set them apart. The team was responsive to our evolving needs and provided solutions that demonstrated a deep understanding of the industry. We look forward to collaborating on future projects.<span class='text-xl font-semibold'>”</span>",
        author: " Shyam Raut <br/><span class='text-sm font-semibold '>Chairman & Founder - Energy Power</span>"
      },
      {
        content: "<span class='text-xl italic font-semibold'>“</span>Incredible work by iAssureIT They transformed our concept into a sleek app with precision and speed. Highly recommend their expertise!<span class='text-xl font-semibold'>”</span>",
        author: "Shankar Sawant <br/><span class='text-sm font-semibold'> CEO – Open Source Solutions </span>"
      }, {
        content: "<span class='text-xl italic font-semibold'>“</span>Incredible job by iAssureIT ! They turned our vision into a seamless web app. Fast, efficient, and a pleasure to work with.<span class='text-xl font-semibold'>”</span>",
        author: "Dr. Amol Malpani<br/><span class='text-sm font-semibold'>Chairman - Jetkids International School</span>"
      }, {
        content: "<span class='text-xl italic font-semibold'>“</span>Grateful for iAssureIT dedication to our cause. They delivered a user-friendly web app that streamlined our operations. Exceptional service from start to finish.<span class='text-xl font-semibold'>”</span>",
        author: "Mr. Pankaj Purohit<br/><span class='text-sm font-semibold'>CIO – Motilal Oswal Securities Ltd.</span>"
      }, {
        content: "<span class='text-xl italic font-semibold'>“</span>Kudos to iAssureIT for bringing my app idea to life! Their expertise and commitment to quality are unmatched. Super satisfied!<span class='text-xl font-semibold'>”</span>",
        author: "Pritam Deuskar <br/><span class='text-sm font-semibold'>Founder & CEO - Wealthyvia</span>"
      }, {
        content: "<span class='text-xl italic font-semibold'>“</span>iAssureIT deserves accolades for the exceptional educational web app they crafted. From concept to execution, their team displayed a deep understanding of our vision, translating it into an intuitive and engaging platform for students. The user interface is not only visually appealing but also promotes seamless interaction, making learning a delight. Kudos to iAssureIT for revolutionizing our educational tools!<span class='text-xl font-semibold'>”</span>",
        author: "CTO - Vinayak Bogan<br/><span class='text-sm font-semibold'>Sanjay Ghodawat University</span> "
      },
      {
        content: "<span class='text-xl italic font-semibold'>“</span>Working with iAssureIT was a transformative experience. Their team's deep understanding of our vision resulted in a cutting-edge web app that perfectly reflects our brand. The seamless collaboration, attention to detail, and commitment to delivering on time exceeded our expectations. We're incredibly pleased with the outcome and look forward to future projects together.<span class='text-xl font-semibold'>”</span>",
        author: "Dr. Mubashir Sheikh<br/><span class='text-sm font-semibold'>Chairman & Founder - Swiss Merchant Banking</span> "
      },
      {
        content: "<span class='text-xl italic font-semibold'>“</span>Our experience with iAssureIT was exceptional. Their team seamlessly transformed our vision into a user-friendly and visually stunning online platform. The level of professionalism, timely delivery, and ongoing support exceeded our expectations. Thanks to their expertise, our business has seen significant growth in the digital marketplace.<span class='text-xl font-semibold'>”</span>",
        author: "Barry Baetu<br/><span class='text-sm font-semibold'>Founder - Harmonic Group </span> "
      },
      {
        content: "<span class='text-xl italic font-semibold'>“</span>Our experience with iAssureIT was nothing short of exceptional. Their innovative approach, transparent communication, and commitment to quality resulted in a cutting-edge web app that surpassed our expectations. We highly recommend their services for anyone seeking top-tier web development expertise.<span class='text-xl font-semibold'>”</span>",
        author: "Dr. Akhil Deshpande<br/><span class='text-sm font-semibold'>CIO - TruUSmiles.com</span> "
      },
      {
        content: "<span class='text-xl italic font-semibold'>“</span> iAssureIT exceeded our expectations with their exceptional expertise and prompt delivery. Their innovative solutions and seamless communication made the entire process a breeze. We highly recommend them for anyone seeking top-tier web app development.<span class='text-xl font-semibold'>”</span>",
        author: "Greg<br/><span class='text-sm font-semibold'>CIO – City2Shore</span> "
      },
      {
        content: "<span class='text-xl italic font-semibold'>“</span>Very much overwhelmed and satisfied with iAssureIT work. These guys have tremendous potential to handle any size of the project and I strongly recommend this company to others. The best of the company is they are 100% committed to work and provide out of the box service. Working with iAssureIT is simply an amazing and memorable experience.<br/>Keep up the good work guys and you rock !!! “<span class='text-xl font-semibold'>”</span>",
        author: "Mohd Imran<br/><span class='text-sm font-semibold'></span> "
      },

    ]
  };

  const content_blogList = {
    blockTitle: "VISIT OUR BLOGS",
    classForblockTitle:
      " text-darkGray w-full BlockTitle text-center font-extrabold leading-relaxed ",
    dash: "border-blue-700 mb-0 mt-10 md:mb-0  md:mt-8 lg:mt-16",

  }

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("process.env.NEXT_PUBLIC_BASE_URL", process.env.NEXT_PUBLIC_BASE_URL)
    // try {
    const url = '/';
    const encodedURL = encodeURIComponent(url);
    console.log("encodedURL", encodedURL)
    axios.get('api/seodetails/get/url/' + encodedURL)
      .then(response => {
        console.log("response.data -> ", response.data);
        setData(response.data);

      })
      .catch(error => {
        console.log("error -------> ", error);
      })
    // const response = await axios.get('/api/seodetails/get/url/' + encodedURL);
    // setData(response.data);
    // console.log("response",response)
    // } catch (error) {
    //   console.log("error",error)
    //   setError(error.message);
    // }

  }, []);

  return (
    <main className=" flex flex-col justify-between min-h-screen bg-white font-TerminaTest">

      {/* PB added metaData */}
      <CustomHead
        title={data ? data.metaTagTitle : ""}
        description={data ? data.metaDescription : ""}
        keywords={data ? data.keywords : ""}
        canonicalUrl={data ? data.canonicalUrl : ""}
      />
      <VideoBanner inputData={content_Video} />
      <BgImgLeftContentRtImg inputData={content_CET} />
      <CardsBlocks inputData={content_GlanceBlk} />
      {/* <Statistics inputData={content_Statistics}/> */}
      {/* <BgImgLeftContentRtImg inputData={content_leftContentBgImg} /> */}
      {/* <CenterContentRepeatableBlocks inputData={content_CenterContentRepeatableBlocks} /> */}
      {/* <BgImgRightContent inputData={content_BgImgRightTxt_3} /> */}
      {/* <CenterImgCenterContentRepeatableBlocks  inputData={content_CenterImgCenterContentRepeatableBlocks}
      /> */}
      <CenterContentRepeatableBlocksWithBg inputData={content_Expertise} />
      <LeftImgRightRepeatableBlk
        inputData={content_About}
        readMore={false}
      />
      <SmallBanner inputData={content_SmallBanner2} />
      <Map
        // dash="border-blue-700 mb-5 md:mb-3"
        // pageTitle="OUR <span class='uppercase font-extrabold leading-relaxed' > LOCATIONS</span>"
        pageTitleCss=" mb-12 text-black w-full text-center text-3xl md:text-3xl lg:text-4xl xl:text-4xl"

        mapCss="h-96 rounded-none"
        locationPath="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.6527976967045!2d73.90869827574598!3d18.54458568255369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c220a4234a03%3A0xaacdd60fadf55f2c!2siAssure%20International%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1696849231056!5m2!1sen!2sin"
      />
      <CenterContentRepeatableBlocks
        inputData={content_DigitalTransformation}
      />

      <div onClick={() => setModalOpen(!isModalOpen)} className=" w-full ">
        <div className="cursor-pointer text-white mx-auto text-center font-bold text-lg md:text-xl p-2  2xl:px-2  mt-3 xl:mt-8 2xl:mt-10 border w-48 md:w-48  lg:w-64 xl:w-48 2xl:w-48 rounded btn bg-blue-600 hover:bg-blue-800 hover:text-white">Let's Connect
          <i className="fa-solid fa-angle-double-right"></i>
        </div>
      </div>
      <BgImgLeftContentRtImg inputData={content_contactBlock} />
      {/* <BgImgLeftContentRtImg inputData={content_content_mgmt_Syestem} /> */}
      {/* <TopTextImageRepeatBlocks inputData={content_TopTextImageRepeatBlocks} /> */}
      <LeftImgRightRepeatableBlk
        inputData={content_WhyChoose}
        readMore={false}
      />


      {/* <OurPortfolio inputData={content_CaseStudy} /> */}

      {/* <BgImgLeftContentRtImg inputData={content_endLessPossibility} /> */}

      <TextCarousel inputData={content_carousel3} showVideos={false} showImages={false} />

      <Autocarousel inputData={content_carousel2} />
      <Autocarousel inputData={content_carouselLeft} />


    </main>
  );
}

//PB added metaData
// export async function getServerSideProps() {
// export async function getStaticProps() {
// HomePage.getInitialProps = async () => {
// Perform data fetching here (e.g., making API requests)
//   var url ='/'
//   const encodedURL = encodeURIComponent(url);
//   console.log("encodedURL",encodedURL)
//   try {
//     const response = await axios.get('/api/seodetails/get/url/' + encodedURL);
//     // const json = await response.json()
//     const data = response.data; // Access the response data directly
//     console.log("data",data)
//     return { props: { data }};
//   } catch (error) {
//     console.error("Error fetching:", error.message);
//     return { data: null, error: error.message }; // Handle the error gracefully
//   }
// };


export default HomePage;
