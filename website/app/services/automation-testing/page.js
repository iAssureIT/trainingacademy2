"use client";
import React from "react";
import axios from "axios";
import BgImgLeftContentRtImg from "@/templates/ContentBlocks/BgImgLeftContent/BgImgLeftContentRtImg";
import BgImgRightContent from "@/templates/ContentBlocks/BgImgRightContent/BgImgRightContent";
import ImgCarousel from '@/templates/Carousel/AllTypeCarousel/Carousel';
import AutoScroll from '@/templates/Carousel/AutoScroll';
import LeftImgRightRepeatableBlk from "@/templates/RepeatableBlocks/LeftImgRightRepeatableBlk/LeftImgRightRepeatableBlk";
import MultipleImagesCarousel from "@/templates/Carousel/MultipleImgCarouselWithTopImg/MultipleImagesCarousel";
import CenterContentRepeatableBlocks from "@/templates/RepeatableBlocks/CenterContentRepeatableBlocks/CenterContentRepeatableBlocks";

import BgImgLeftImgRtGrid from "@/templates/ContentBlocks/BgImgLeftImgRightGrid/BgImgLeftImgRightGrid";
import OurPortfolio from "@/templates/OurPortfolio/OurPortfolio";
import AccordionBlock from "@/templates/Accordion/AccordionBlock";
import CenterImgLeftRightRepeatableBlocks from "@/templates/RepeatableBlocks/CenterImgLeftRightRepeatableBlocks/page"
import SmallBanner from "@/templates/BannerBlocks/SmallBanner/SmallBanner";
import ProblemSolutionBlk from "@/templates/ContentBlocks/ProblemSolutionBlk/ProblemSolutionBlk";
import Technology from "@/templates/ContentBlocks/Technology/Technology";
import Autocarousel from "@/components/Autocarousel";
import CustomHead from "@/templates/CustomHead/CustomHead";

const AutomationTesting = ({ data }) => {
  const content_leftContentBgImg = {
    id: "Banner",
    bgImage: "/images/specific/Services/MobileApp/Images/1.webp",
    smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/1.webp",
    logo: "",
    h1TxtLine1: "AUTOMATION",
    h1TxtLine2Css: "outline-title  font-DrukText font-bold text-5xl md:text-3xl xl:text-8xl text-center md:text-left   place-content-left  justify-center content-left mb-5 ",

    // h1TxtLine1Css: " font-DrukText text-5xl md:text-3xl xl:text-8xl font-extrabold text-center md:text-left   place-content-left  justify-center content-left mb-5 ",
    h1TxtLine2: "TESTING",
    h1TxtLine1Css: " font-DrukText text-5xl md:text-3xl xl:text-8xl font-extrabold text-center md:text-left   place-content-left  justify-center content-left mb-5 ",
    bgImgCss: "  py-20 h-auto  xl:h-[990px] lazyload object-fit bg-cover bg-no-repeat relative  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    para: "iAssureIT- Revolutionizing Software Quality Assurance ",
    paraCss: " font-DrukText lcamelcase text-normal text-center md:text-left text-2xl md:text-3xl xl:text-5xl ",
    // gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  md:grid-cols-2  lg:h-screen  xl:h-screen h-screen  ",
    gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2   md:grid-cols-2  py-10  md:py-20 xl:py-0 2xl:py-20 h-auto md:h-full lg:h-full   xl:h-full 2xl:h-full  ",
    gridSubDivCss: " pb-32 md:pb-10 lg:pb-16 2xl:pb-48 my-auto text-white   md:pl-32 lg:pl-20 xl:pl-32 2xl:pl-60",
    image: "/images/specific/Services/AutomationTesting/iAssureIT-Automation-testing-1.webp",
    imageCss: '  w-2/3 xl:w-4/5 2xl:w-full mx-auto my-auto object-fit lazyload place-content-center object-center ',
    imgTagcss: "lazyload  -mt-20    ",
    borderColor: "border-darkBlue",
  }
  // h1TxtCss: " -mt-20 2xl:-mt-32  text-xl md:text-3xl xl:text-7xl font-extrabold text-center md:text-left content-center  place-content-left  justify-center content-left ",
  //     bgImgCss: "py-20 h-screen xl:h-[990px] lazyload object-fit bg-cover bg-no-repeat relative  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
  // gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  md:grid-cols-2  lg:h-screen  xl:h-screen h-screen px-20 2xl:px-32 ",
  // image: "/images/specific/Contact_Us/2.webp",
  // imageCss: ' w-1/2 mx-auto my-auto object-fit lazyload place-content-bottom object-bottom ' ,

  const content_BgImgRightTxt_3 = {
    paraTitle: "  At iAssureIT, we're committed to enhancing software reliability and efficiency through premier  automation testing solutions. Our strategies, deeply entrenched in industry best practices, ensure that applications are not just functional but also dependable and resilient <ul class='list-disc list-inside'><li>Specialized automation testing services that ensure swift, efficient, and exhaustive software validation. </li><li>Leveraging a detailed strategy-driven approach for a cohesive testing journey. </li> <li>Boasting 150+ skilled testing professionals, transforming your testing challenges into quality software solutions. </li><li>A proud history of 200+ successful automation testing projects, consistently adapting to the ever-evolving software landscape. </li></ul>",
    paraTitleClass: "text-lg md:text-2xl xl:text-xl 2xl:text-xl text-justify md:text-left font-normal",
    bgImgCss: "lazyload",
    pageTitle: "<span class='font-normal uppercase'>Optimizing Testing Processes </span> <br/><span class='font-extrabold uppercase'>Ensuring Software Excellence </span>",
    pageTitleCss: "w-full text-center  text-2xl md:text-3xl xl:text-4xl  2xl:text-4xl ",
    gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-3  md:pl-6 md:pl-16 lg:pl-10 xl:pl-20 2xl:pl-28 xxl:pl-40 xxl:px-10",
    gridCol1Css: "my-auto",
    gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2 md:px-10 xl:px-48 2xl:px-60 xxl:px-48 lg:h-full   xl:h-full h-full content-center ",
    bannerClass: "object-fit  bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/Services/AutomationTesting/iAssureIT-Automation-testing-2.webp",
    imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto w-5/6 2xl:w-3/5 lazyload",
    dash: "border-blue-700 mb-5 md:mb-3",
  }

  const content_developerBlk = {
    paraTitle: "<span class='text-light font-bold '>Unlock the true potential of your software with accelerated and precise testing.<br/> <span class='title text-orange-400 text-left' > Talk to our Testing expert: 8459748828 </span>",
    paraTitleClass: "title text-left font-normal leading-tight",
    bgImage: "/images/specific/Services/MobileApp/Images/9.webp",
    smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/3.webp",
    bgImgCss: "lazyload ",
    gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
    // gridCol1Css: "w-1/2 mx-auto",
    gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
    bannerClass: "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/Services/AutomationTesting/iAssureIT-Automation-testing-6.webp",
    imageCss: "mx-auto pt-20 sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto lazyload",
  }
  const content_DummyTxt2 = {
    dummyText: "Problem and solution Block2"
  }
  const content_SmallBanner2 = {
    id: "AutoTestSmBaner",
    bgImage: "/images/specific/Services/MobileApp/Images/12.webp",
    smallBGImage: "/images/specific/Services/MobileApp/Images/12.webp",
    title: "With iAssureIT, transform the way you validate your software. Let's lead the path to Quality Assurance excellence together!",
    titleClass: " text-center mx-auto md:float-right my-auto font-normal BlockTitle leading-tight",
    className: "h-auto w-full mx-auto",
    alt: "reserve",
    bgImgCss: "py-3 md:py-10 mb-5 md:mb-20 2xl:py-5 bg-cover bg-no-repeat  bg-left-bottom lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]",
    gridCss: "grid grid-cols-1 sm:grid-cols-1   lg:grid-cols-1 2xl:grid-cols-1 gap-x-10 h-full w-full content-center  place-content-center my-auto xl:py-10",
    gridCol1Class: "my-auto  sm:w-auto  text-white text-center  mb-2 md:mb-4 ",
    para: "Email Us: info@iassureit.com ",
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
    bgImage: "/images/specific/Services/MobileApp/Images/14.webp",
    bgImgCss: "lazyload",
    smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/5.webp",

    paraTitle: "<span class='text-light font-bold '> Propel your software delivery with unrivaled testing precision. Discover more about iAssureIT's Automation Testing prowess.<br/> <span class='title text-orange-400 text-left' > Contact us today: 8459748828 </span>",
    paraTitleClass: "title text-left font-normal leading-tight",
    gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-16    lg:pl-20 xl:px-4 2xl:px-20 xxl:px-32",
    gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
    bannerClass: "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/Services/AutomationTesting/iAssureIT-Automation-testing-9.webp",
    imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto lazyload xl:pt-28",
  }
  const content_CenterContentRepeatableBlocks = {
    id: "Services",
    blockTitle: "<span class='font-extrabold uppercase'>Premier Automation Testing Services</span>",
    classForblockTitle: " w-full text-center  text-2xl md:text-3xl xl:text-4xl xl:py-5 py-10  px-2 md:px-none",
    classForNoOfCards: "px-10 lg:px-32 2xl:px-48 lg:mt-5  max-w-8xl text-center justify-evenly grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-6",
    classForCards: " border shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white p-4 md:p-10 lg:p-5 2xl:p-10 mb-7 rounded-xl",
    classForCardTitle: "text-center  text-darkGray text-xl md:text-xl lg:text-2xl xl:text-[22px] 2xl:text-[22px]  font-bold p-3 pt-3 md:pt-4 2xl:pt-6",
    classForCardTitle_2: "font-bold text-md text-primary dark:text-primary-400 p-5",
    classForCardImage: "w-auto 2xl:w-auto mx-auto p-5 xl:p-5 2xl:p-5 lazyload bg-gray-100 rounded-full ",
    classForblockContent: "px-10 lg:px-20  xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
    // blockContent           : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    classForImg: "p-10 overflow-hidden bg-cover bg-no-repeat  lg:p-8 -mt-24 lg:-mt-28 xl:-mt-28 2xl:-mt-24",
    displayAnimation: "true",
    cardsArray: [
      {
        id: "service1",
        cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-1.webp',
        altImage: 'imageDescription',
        cardTitle: 'Test Automation Strategy ',
        classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
        content: "Collaboratively devising a testing game-plan that aligns seamlessly with your project goals. ",
      },
      {
        id: "service2",
        cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-2.webp',
        altImage: 'imageDescription',
        cardTitle: 'Test Script Development',
        classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
        content: "Crafting meticulous and reusable test scripts, maximizing coverage while reducing manual efforts. ",
      },
      {
        id: "service3",
        cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-3.webp',
        altImage: 'imageDescription',
        cardTitle: 'Regression Testing Automation',
        classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
        content: "Seamless validation of software enhancements, ensuring every update retains its core quality. ",
      },
      {
        id: "service4",
        cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-4.webp',
        altImage: 'imageDescription',
        cardTitle: 'Functional Testing Automation ',
        classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
        content: "valuating software functionality through precise automated scenarios, ensuring each feature performs as intended. ",
      },
      {
        id: "service5",
        cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-5.webp',
        altImage: 'imageDescription',
        cardTitle: 'Performance Testing Automation',
        classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
        content: "Analyzing application performance under varied loads, guaranteeing software robustness even under stress. ",
      },
      {
        id: "service6",
        cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-6.webp',
        altImage: 'imageDescription',
        cardTitle: 'Continuous Testing Integration',
        classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
        content: "Embedding automated testing within your development cycle, ensuring quality at every phase. ",
      },
      {
        id: "service7",
        cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-7.webp',
        altImage: 'imageDescription',
        cardTitle: 'Test Result Analysis and Reporting',
        classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
        content: "Detailed, actionable insights after every test cycle,  promoting prompt and informed decisions. ",
      },


    ],
    dash: "border-blue-700 mt-20"
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
    // urlName: "Read More",
    // linkCss: "text-white underline font-bold text-lg md:text-2xl mt-5",
    dash: "border-white  mb-5 md:mb-3 mt-40 md:mt-48  lg:mt-52 xl:mt-24 2xl:mt-28",
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
    paraTitle: "<span class='text-light font-bold'> With iAssureIT, transform the way you validate your software. Let's lead the path to Quality Assurance excellence together!<br/> <span class='title text-orange-400 text-left' > Email Us: info@iassureit.com </span>",
    paraTitleClass: "title text-left font-normal leading-tight",
    gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
    gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
    bannerClass: "object-fit py-20 md:py-2 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/Services/AutomationTesting/iAssureIT-Automation-testing-10.webp",
    imageCss: "mx-auto  sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto lazyload",
  }
  const content_MobileAppTechnology = {
    id: "MobileAppTechnology",
    blockTitle: "OUR RANGE OF  <span class='font-extrabold'>DATA AUTOMATION TECHNOLOGIES</span>",
    classForblockTitle: " w-full text-center BlockTitle xl:py-5 py-10 ",
    classForNoOfCards: "px-10 pb-10 lg:px-20 2xl:px-52 lg:mt-5  max-w-8xl text-center justify-evenly mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 lg:gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-6",
    classForCards: " border shadow-[0_3px_10px_rgb(0,0,0,0.2)] 2xl:py-5 text-white  mb-7 rounded-xl",
    classForCardTitle: "text-center  text-darkGray title p-3 smTxt",
    classForCardTitle_2: "font-bold text-md text-primary dark:text-primary-400 p-5",
    classForCardImage: "mx-auto p-10 2xl:p-5 xxl:p-10 lazyload  rounded-full",
    classForblockContent: "lg:w-3/4 xl:w-4/5 2xl:w-4/5  mx-auto text-center font-normal text-darkGray mb-10 bodyTxt",
    blockContent: "Empowering Your Business with iAssureIT <br/> At iAssureIT, we harness the full spectrum of data automation technologies to drive business innovation and excellence.",
    cardsArray: [
      {
        // cardImage: '/images/specific/Services/MobileApp/TechnologyStack/9.webp',
        altImage: 'imageDescription',
        cardTitle: 'Automated Data Processing ',
      },
      {
        // cardImage: '/images/specific/Services/MobileApp/TechnologyStack/10.webp',
        altImage: 'imageDescription',
        cardTitle: 'Custom Workflow Automation  ',
      },
      {
        // cardImage: '/images/specific/Services/MobileApp/TechnologyStack/6.webp',
        altImage: 'imageDescription',
        cardTitle: 'Cross-Platform Data Synchronization ',
      },
      {
        // cardImage: '/images/specific/Services/MobileApp/TechnologyStack/5.webp',
        altImage: 'imageDescription',
        cardTitle: 'Secure Data Transformation and Migration  ',
      },
      {
        cardImage: '/images/specific/Services/MobileApp/TechnologyStack/3.webp',
        altImage: 'imageDescription',
        cardTitle: 'React Native App  ',
      },
      {
        cardImage: '/images/specific/Services/MobileApp/TechnologyStack/8.webp',
        altImage: 'imageDescription',
        cardTitle: 'Flutter App ',
      },
      {
        cardImage: '/images/specific/Services/MobileApp/TechnologyStack/11.webp',
        altImage: 'imageDescription',
        cardTitle: 'Xamarin App ',
      },
    ],
    dash: "border-blue-700"
  }
  const content_CaseStudy = {
    sectionCss: "py-10 md:py-20 bg-light",
    blockTitle: " CASE STUDIES",
    blockSubTitle: "We shed light on our work and what goes behind the development",
    classForblockTitle: " text-darkGray w-full BlockTitle text-center font-extrabold leading-relaxed",
    classForblockSubTitle: "text-center text-darkGray bodyTxt  font-normal mb-10 leading-loose",
    classForNoOfCards: "px-10 lg:px-20  max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6",
    classForCards: "p-3  mb-7 rounded-md",
    classForCardTitle: "text-darkGray text-center font-semibold text-xl md:text-xl lg:text-2xl p-3",
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
    sectionClass: "mx-auto text-center px-8 py-1 container md:mt-20",
    pageTitle: "<span class=' font-normal'>WHY CHOOSE IASSUREIT FOR</span> <br/> <span class='font-extrabold uppercase'>Your Automation Testing Needs? </span> ",
    pageTitleCss: "w-full text-center  BlockTitle leading-tight",
    bgImage: "/images/specific/Services/AutomationTesting/iAssureIT-Automation-testing-12.webp",
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
        title: "Expertise",
        description: "A dedicated team, driven to ensure software reliability and efficiency through advanced automation methodologies. ",
      },
      {
        imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
        title: "Quality Assurance",
        description: "Comprehensive testing routines ensuring every software aspect is scrutinized. ",
      },
      {
        imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
        title: "Customized Solutions",
        description: "Tailored testing strategies, ensuring each project's unique  requirements are met. ",
      },
      {
        imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
        title: "Continuous Support",
        description: " A lasting relationship, dedicated to continuously optimizing  testing processes and adapting to your evolving software landscape. ",
      },

    ],
    dash: "border-blue-700 mb-5 ",

  }

  const content_profitMargin = {
    bgImage: "/images/specific/Services/MobileApp/Images/20.webp",
    smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/5.webp",
    bgImgCss: "lazyload",
    paraTitle: "ELEVATE YOUR PROFIT MARGINS WITH ENHANCED <span class='title text-orange-400 text-left'> MOBILE EXPERIENCE FOR YOUR CUSTOMERS! </span>",
    paraTitleClass: "title text-white text-left leading-tight",
    gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
    gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
    bannerClass: "object-fit pt-10 pb-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/Services/AutomationTesting/iAssureIT-Automation-testing-11.webp",
    imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto lazyload",
  }
  const content_accordion = {
    dash: "border-blue-700 md:mb-5 mt-20",
    pageTitle: "FAQS",
    pageTitleCss:
      " text-gray w-full text-center font-extrabold BlockTitle md:mb-10",
    accordionData: [

      {
        title: 'Why is Automation Testing crucial? ',
        content: "Automation Testing is vital as it allows for swift, repetitive, and thorough software validation,  especially beneficial in agile and CI/CD environments, ensuring software robustness while meeting tight release schedules. "
      },

      {
        title: 'How does iAssureIT design its Test Automation Strategy? ',
        content: 'At iAssureIT, the strategy is crafted by closely collaborating with clients, understanding project specifics, and then deploying the best tools and methodologies for exhaustive software  validation. '
      },
      {
        title: 'How does Functional Testing Automation differ from Regression Testing Automation? ',
        content: "Functional Testing Automation focuses on verifying specific software functionalities, ensuring each feature operates as intended. Regression Testing Automation, on the other hand, ensures that new updates or features don't adversely affect existing functionalities. "
      },
      {
        title: 'Why is Cross-Browser and Cross-Platform Testing essential? ',
        content: 'It guarantees that the software provides a consistent user experience across varied devices, operating systems, and browsers, ensuring a broad user base enjoys optimal software performance. '
      },
      {
        title: 'How does Continuous Testing Integration benefit the software delivery process? ',
        content: " By integrating testing within the development cycle, it allows for immediate feedback, ensuring software quality is maintained throughout the development process, leading to faster and reliable releases. "
      },
      {
        title: 'What value does the Test Result Analysis and Reporting service add? ',
        content: "This service provides comprehensive insights post-testing, aiding teams in making informed decisions, identifying areas of improvement, and ensuring prompt issue resolution. "
      },
      {
        title: 'How can I initiate a partnership with iAssureIT for Automation Testing? ',
        content: "Reach out to us today. Let's embark on a journey to ensure software excellence together. Click on the 'Let's Automate Your Testing Today!' button to begin.  "
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
    bgImage: "/images/specific/Services/MobileApp/Images/4.webp",
    smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/2.webp",
    bgImgCss:
      "object-fit py-48 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload",

    blockTitle: "YOUR NEXT <br/><span class='font-extrabold'>DATA AUTOMATION PARTNER</span>",
    classForLeftImageContainer: " text-center ",
    classForblockTitle: "BlockTitle text-white w-full text-center font-normal pb-10 leading-tight",
    classForblockContent: "px-10 lg:px-20 xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
    imageSrc: "/images/specific/Services/AutomationTesting/iAssureIT-Automation-testing-3.webp",
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
    classForContainer: "grid grid-cols-1 md:grid-cols-3 px-2 lg:px-16 2xl:px-48 py-5 md:py-12 2xl:pt-5 md:pb-20",
    classForLeftBlockContainer: "w-full  p-2 item-center my-auto place-content-center content-center",
    classForLeftContentContainer: "w-full rounded overflow-hidden  mb-4 ",
    classForLeftContentinsideContainer: "w-auto p-4 text-right my-auto",
    classForLeftContenTitleStyle: "font-normal text-white text-left sm:text-lg mb-2",
    classForRightContenTitleStyle: "font-normal text-white  text-left md:text-right sm:text-lg mb-2",
    leftBlocks: [
      {
        leftTitle: "<span class='font-bold'>Effortless Data Integration and Workflow Automation </span> <br/> Experience seamless integration across various platforms and databases. Automate repetitive tasks, enhancing efficiency and accuracy.",
        img: "/images/specific/Services/MobileApp/Icons/1.webp"
      },
      {
        leftTitle: "<span class='font-bold'> Advanced Analytics and Custom Reporting </span> <br/> Unlock the power of your data with advanced analytics.Generate custom reports for insightful and data-driven decisions.",
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
        leftTitle: "<span class='font-bold'> Security and Compliance </span><br/> Ensure that your data is secure, reliable, and compliant with industry standards. Experience peace of mind with our state-of-the-art security features.",
        img: "/images/specific/Services/MobileApp/Icons/3.webp"
      },
      {
        leftTitle: "<span class='font-bold'>Expert Team of Professionals </span> <br/> Our team comprises experts specialized in data management and automation. Benefit from the collective expertise of our seasoned professionals who are dedicated to helping you achieve your business goals.",
        img: "/images/specific/Services/MobileApp/Icons/4.webp"
      },

    ],
    dash: "border-white  mb-5 md:mb-3 mt-5",

  };
  const content_ProblemAns1 = {
    blockTitle: " <span class='font-extrabold'>THE TOP CHALLENGES IN <br/></span> <span class='font-normal uppercase'> Modern Software Delivery </span>",
    classForblockTitle: "w-full text-center  BlockTitle leading-tight  ",
    dash: "border-blue-700 mb-5 mt-10",
    grid1Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-10",
    img1GridCss: " m-auto",
    img1: "/images/specific/Services/AutomationTesting/iAssureIT-Automation-testing-4.webp",
    content1Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
    title1: "PROBLEM",
    title1Css: "BlockTitle font-extrabold text-left",
    subTitle1: "Accelerated Release Cycles :",
    subTitle1Css: "font-bold subTitle my-3",
    para1: "Managing rapid release cycles while ensuring software quality. ",
    para1Css: "font-normal bodyTxt",
    grid2Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20",
    // img2GridCss:"",
    img2: "/images/specific/Services/AutomationTesting/iAssureIT-Automation-testing-5.webp",
    content2Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
    title2: "iAssureIT Solution ",
    // subTitle2:"One App, Every Device with iAssureIT",
    para2: "ur Continuous Integration and Continuous Testing methodologies seamlessly integrate with your CI/CD pipelines, ensuring accelerated yet reliable software  delivery. ",
    paraCss2: "",
    // listData:[
    //   "With extensive experience in both iOS and Android platforms, our seasoned developers are equipped to tackle the challenge of platform fragmentation head-on.",
    // "We harness the power of cross-platform development frameworks like React  Native and Flutter, ensuring your app reaches the widest audience without compromising on quality or efficiency. "
    // ],
    // listCss:"font-normal bodyTxt px-5 list-decimal py-2 md:px-7"

  }
  const content_ProblemAns2 = {
    grid1Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20",
    img1GridCss: "m-auto",
    img1: "/images/specific/Services/AutomationTesting/iAssureIT-Automation-testing-7.webp",
    content1Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
    title1: "PROBLEM",
    title1Css: "BlockTitle font-montserrat  font-extrabold text-left",
    subTitle1: "Complex Application Ecosystems :",
    subTitle1Css: "font-bold subTitle my-3",
    para1: " Ensuring consistent software performance across diverse platforms and browsers. ",
    para1Css: "font-normal bodyTxt",
    grid2Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20 mb-20",
    // img2GridCss:"",
    img2: "/images/specific/Services/AutomationTesting/iAssureIT-Automation-testing-8.webp",
    content2Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
    title2: "iAssureIT Solution ",
    // subTitle2:"Designing Beyond Aesthetics with iAssureiT",
    para2: "Comprehensive Cross-Browser and Cross-Platform Testing guarantees application uniformity and quality irrespective of the user's device or platform",
    paraCss2: "",
    listData: [
      "Our team employs user-centric design principles to create interfaces that resonate with your target audience. ",
      "We conduct in-depth user research to guarantee your app aligns perfectly with user preferences and behaviors."
    ],
    listCss: "font-normal bodyTxt px-5 list-decimal py-2 md:px-7"

  }
  const content_Technology = {
    blockTitle: "OUR RANGE OF <span class='font-extrabold uppercase'>DATA AUTOMATION  TECHNOLOGIES</span>",
    blockSubTitle: "Our success is a result of teamwork and building upon our technical expertise and creative style providing a full-service solution to our clients.",
    classForblockSubTitle: "lg:w-3/4 xl:w-4/5 2xl:w-4/5  mx-auto text-center font-normal text-darkGray mb-10 bodyTxt",
    classForblockTitle: "w-full text-center BlockTitle xl:py-5 py-10 leading-relaxed   ",
    classForNoOfCards: "px-10 pb-10 lg:px-20 2xl:px-52 lg:mt-5  max-w-8xl text-center justify-evenly mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-x-4 lg:gap-x-8 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-10 mx-auto",
    classForCards: " text-white  mb-7 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]",
    classForCardTitle: "text-center font-bold text-xl md:text-xl lg:text-3xl p-3",
    classForCardTitle_2: "font-bold text-md text-primary dark:text-primary-400",
    classForCardImage: "w-full rounded-full pb-5",
    cardsArray: [

      {
        cardImage: '/images/specific/Services/Technologies/Background.webp',
        cardTitle: 'Manual Testing',
        imageArr: ["/images/specific/Services/funTest-Icon-/iAssureIT-Icon-1.webp",
          "/images/specific/Services/funTest-Icon-/iAssureIT-Icon-2.webp",
        ]
      }, {
        cardImage: '/images/specific/Services/Technologies/Background.webp',
        cardTitle: 'Automation',
        imageArr: ["/images/specific/Services/funTest-Icon-/iAssureIT-Icon-3.webp",
          "/images/specific/Services/funTest-Icon-/iAssureIT-Icon-4.webp",
          "/images/specific/Services/funTest-Icon-/iAssureIT-Icon-5.webp",
        ]
      },

    ],
    dash: "border-blue-700 mb-5 ",
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
      {/* <OurPortfolio inputData={content_OurPortfolio} /> */}
      <Technology inputData={content_Technology} />
      <BgImgRightContent inputData={content_custBase} />
      {/* <CenterContentRepeatableBlocks inputData={content_MobileAppTechnology} /> */}
      <OurPortfolio inputData={content_CaseStudy} />
      <BgImgRightContent inputData={content_profitMargin} />
      <LeftImgRightRepeatableBlk inputData={content_WhyChoose} readMore={false} />
      <BgImgRightContent inputData={content_contactUs} />
      <AccordionBlock inputData={content_accordion} />

    </div>
  )
}


//PB added metaData
AutomationTesting.getInitialProps = async () => {
  // Perform data fetching here (e.g., making API requests)
  var url = '/services/automation-testing'
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
export default AutomationTesting;