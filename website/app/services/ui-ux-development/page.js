"use client";
import React from "react";
import axios from "axios";
import CustomHead from "@/templates/CustomHead/CustomHead";
import BgImgLeftContentRtImg from "@/templates/ContentBlocks/BgImgLeftContent/BgImgLeftContentRtImg";
import BgImgRightContent from "@/templates/ContentBlocks/BgImgRightContent/BgImgRightContent";
import ImgCarousel from "@/templates/Carousel/AllTypeCarousel/Carousel";
import AutoScroll from "@/templates/Carousel/AutoScroll";
import LeftImgRightRepeatableBlk from "@/templates/RepeatableBlocks/LeftImgRightRepeatableBlk/LeftImgRightRepeatableBlk";
import MultipleImagesCarousel from "@/templates/Carousel/MultipleImgCarouselWithTopImg/MultipleImagesCarousel";
import CenterContentRepeatableBlocks from "@/templates/RepeatableBlocks/CenterContentRepeatableBlocks/CenterContentRepeatableBlocks";
import Autocarousel from "@/components/Autocarousel";
import BgImgLeftImgRtGrid from "@/templates/ContentBlocks/BgImgLeftImgRightGrid/BgImgLeftImgRightGrid";
import OurPortfolio from "@/templates/OurPortfolio/OurPortfolio";
import AccordionBlock from "@/templates/Accordion/AccordionBlock";
import CenterImgLeftRightRepeatableBlocks from "@/templates/RepeatableBlocks/CenterImgLeftRightRepeatableBlocks/page";
import SmallBanner from "@/templates/BannerBlocks/SmallBanner/SmallBanner";
import ProblemSolutionBlk from "@/templates/ContentBlocks/ProblemSolutionBlk/ProblemSolutionBlk";
const UIUXDevelopment = ({ data }) => {
  const content_leftContentBgImg = {
    id: "aboutBanner",
    bgImage: "/images/specific/Services/MobileApp/Images/1.webp",
    smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/1.webp",
    logo: "",
    h1TxtLine1: "UI/UX",
    h1TxtLine1Css:
      " font-DrukText text-5xl md:text-3xl xl:text-8xl font-extrabold text-center md:text-left   place-content-left  justify-center content-left mb-5 ",
    h1TxtLine2: "DEVELOPMENT",
    h1TxtLine2Css: "outline-title  font-DrukText font-bold text-5xl md:text-3xl xl:text-8xl text-center md:text-left   place-content-left  justify-center content-left mb-5 ",
    bgImgCss: "  py-20 h-auto  xl:h-[990px] lazyload object-fit bg-cover bg-no-repeat relative  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    para: "iAssureIT: Mastering Digital Engagement Through Exceptional UI/UX",
    paraCss: " font-DrukText lcamelcase text-normal text-center md:text-left text-2xl md:text-3xl xl:text-5xl ",
    // gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  md:grid-cols-2  lg:h-screen  xl:h-screen h-screen  ",
    gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2   md:grid-cols-2  py-10  md:py-20 xl:py-0 2xl:py-20 h-auto md:h-full lg:h-full   xl:h-full 2xl:h-full  ",
    gridSubDivCss: " pb-32 md:pb-10 lg:pb-16 2xl:pb-48 my-auto text-white   md:pl-32 lg:pl-20 xl:pl-32 2xl:pl-24 xxl:!pl-24",
    image: "/images/specific/Services/UI-UX-Development/iAssureIT-ui-ux-development-1.webp",
    imageCss: '  w-2/3 xl:w-4/5 2xl:w-4/5 xxl:!w-auto mx-auto my-auto object-fit lazyload place-content-center object-center ',
    imgTagcss: "lazyload  -mt-20    ",
    borderColor: "border-darkBlue",
  };
  const content_BgImgRightTxt_3 = {
    paraTitle:
      "In a digital realm, creating a captivating and user-centric interface is not a mere choice, but a necessity. At iAssureIT, we blend top-notch UI/UX design services with your brand’s essence to not just catch the user’s eye but to steer their hearts towards your digital solution. Creative, innovative, and user-centered - that's our credo.",
    paraTitleClass: "text-lg md:text-2xl xl:text-xl 2xl:text-xl text-justify md:text-left font-normal",
    bgImgCss: "lazyload",
    pageTitle:
      "<span class='font-normal uppercase'>Crafting Visual Excellence to Engage,</span> <br/><span class='font-extrabold uppercase'> Excite, and Elevate Your Digital Presence </span>",
    pageTitleCss: "w-full text-center  BlockTitle leading-tight",
    gridColCss:
      "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5  md:pl-6 md:pl-16 lg:pl-20 2xl:pl-28 xxl:pl-40 xxl:px-10",
    // gridCol1Css: "w-1/2 mx-auto",
    gridClass:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2 md:px-10 xl:px-20 2xl:px-32 xxl:px-48 lg:h-full   xl:h-full h-full content-center ",
    bannerClass:
      "object-fit  bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/Services/UI-UX-Development/iAssureIT-ui-ux-development-2.webp",
    imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto w-5/6 2xl:w-3/5 lazyload",
    dash: "border-blue-700 mb-5 md:mb-3",
  };
  const content_developerBlk = {
    paraTitle:
      "<span class='text-white font-bold '> Let's Ascend Beyond the Usual. Inquire Today for a design solution uniquely tailored to enchant your customers.<span class='title text-orange-400 text-left' ><br/> Talk to Us! 8459748828 </span>",
    paraTitleClass: "title text-left font-normal leading-tight",
    bgImage: "/images/specific/Services/MobileApp/Images/9.webp",
    smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/3.webp",
    bgImgCss: "lazyload",

    gridColCss:
      "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
    // gridCol1Css: "w-1/2 mx-auto",
    gridClass:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
    bannerClass:
      "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/Services/UI-UX-Development/iAssureIT-ui-ux-development-6.webp",
    imageCss:
      "mx-auto pt-20 sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto lazyload",
  };
  const content_SmallBanner2 = {
    id: "UIUX",
    bgImage: "/images/specific/Services/MobileApp/Images/12.webp",
    smallBGImage: "/images/specific/Services/MobileApp/Images/12.webp",
    title:
      " Let iAssureIT guide you towards software perfection where every function is an epitome of accuracy and performance.",
    titleClass:
      " uppercase text-center mx-auto md:float-right my-auto font-normal BlockTitle leading-normal",
    className: "h-auto w-full mx-auto",
    alt: "reserve",
    bgImgCss:
      "py-10 mb-20 2xl:py-5 bg-cover bg-no-repeat  bg-left-bottom lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]",
    gridCss:
      "grid grid-cols-1  h-full w-full content-center  place-content-center my-auto md:py-5 2xl:py-2",
    gridCol1Class: "my-auto  sm:w-auto  text-white  py-7 ",
    para: "  Together, Let’s Elevate Your IT Operations!",
    paraCss:
      "BlockTitle leading-loose text-light text-center md:text-center font-extrabold md:col-span-2 2xl:col-span-2",
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
  // const content_carousel2 = {
  //   slideDirection: "right",
  //   images: [
  //     "/images/specific/Services/Logos/1.webp",
  //     "/images/specific/Services/Logos/2.webp",
  //     "/images/specific/Services/Logos/3.webp",
  //     "/images/specific/Services/Logos/4.webp",
  //     "/images/specific/Services/Logos/5.webp",
  //     "/images/specific/Services/Logos/6.webp",
  //   ],
  // };
  // const content_carouselLeft = {
  //   slideDirection: "left",
  //   images: [
  //     "/images/specific/Services/Logos/7.webp",
  //     "/images/specific/Services/Logos/8.webp",
  //     "/images/specific/Services/Logos/9.webp",
  //     "/images/specific/Services/Logos/10.webp",
  //     "/images/specific/Services/Logos/11.webp",
  //     "/images/specific/Services/Logos/1.webp",
  //   ],
  // };
  const content_custAquisitions = {
    bgImage: "/images/specific/Services/MobileApp/Images/14.webp",
    smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/5.webp",
    bgImgCss: "lazyload",

    paraTitle:
      "<span class='text-white font-bold'>User Testing Matters: Get a UX Audit Done <br/> <span class='title text-orange-400 text-left' >Schedule an UX Audit Now 8459748828</span>",
    paraTitleClass: "title text-left font-normal leading-tight",
    gridColCss:
      "my-auto mx-auto text-darkGray content-start  place-content-start  justify-start py-10 md:px-16    lg:pl-20 xl:px-4 2xl:px-20 xxl:px-32",
    gridClass: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
    bannerClass:
      "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/Services/UI-UX-Development/iAssureIT-ui-ux-development-9.webp",
    imageCss: "mx-auto pt-20 sm:object-fit my-auto content-center  place-content-center lazyloadmx-auto pt-20 sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto lazyload",
  };
  const content_CenterContentRepeatableBlocks = {
    id: "Services",
    blockTitle:
      " <span class='font-extrabold uppercase'>Our UI/UX Development Services include</span>",
    classForblockTitle: " w-full text-center BlockTitle xl:py-5 py-10  leading-tight",
    classForNoOfCards:
      "px-10 lg:px-32 lg:mt-5  max-w-8xl text-center justify-evenly grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-6",
    classForCards:
      " border shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white pt-3 md:p-10 mb-7 rounded-xl",
    classForCardTitle:
      "text-center  text-darkGray text-lg md:title  lg:text-2xl font-semibold p-3 md:pt-20",
    classForCardTitle_2:
      "font-bold text-md text-primary dark:text-primary-400 p-5",
    classForCardImage:
      "w-auto 2xl:w-auto mx-auto p-5 xl:p-5 2xl:p-5 lazyload bg-gray-100 rounded-full ",
    classForblockContent:
      "px-10 lg:px-20  xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
    // blockContent           : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    classForImg:
      "p-10 overflow-hidden bg-cover bg-no-repeat  lg:p-8 -mt-24 lg:-mt-28 xl:-mt-28 2xl:-mt-24",
    displayAnimation: "true",
    cardsArray: [
      {
        id: "uiUx1",
        cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-1.webp",
        altImage: "imageDescription",
        cardTitle: "User Research and Analysis",
        classForContent:
          "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-xl xl:text-xl 2xl:text-xl mb-4 ",
        content:
          "A deep dive into understanding your target audience for intuitive design solutions.",
      },
      {
        id: "uiUx2",
        cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-2.webp",
        altImage: "imageDescription",
        cardTitle: "User Interface Design",
        classForContent:
          "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-xl xl:text-xl 2xl:text-xl mb-4 ",
        content:
          "Creating visually appealing and user-centric interfaces that captivate and engage.",
      },
      {
        id: "uiUx3",
        cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-3.webp",
        altImage: "imageDescription",
        cardTitle: "Responsive Web Design",
        classForContent:
          "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-xl xl:text-xl 2xl:text-xl mb-4 ",
        content:
          "Seamless adaptation across different screen sizes ensuring a consistent user experience.",
      },
      {
        id: "uiUx4",
        cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-4.webp",
        altImage: "imageDescription",
        cardTitle: "Mobile App Design",
        classForContent:
          "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-xl xl:text-xl 2xl:text-xl mb-4 ",
        content:
          "Designing intuitive mobile app experiences aligned with platform-specific guidelines.",
      },
      {
        id: "uiUx5",
        cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-5.webp",
        altImage: "imageDescription",
        cardTitle: "Interaction Design",
        classForContent:
          "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-xl xl:text-xl 2xl:text-xl mb-4 ",
        content:
          "Crafting meaningful interactions within your interfaces for enhanced user engagement.",
      },
      {
        id: "uiUx6",
        cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-6.webp",
        altImage: "imageDescription",
        cardTitle: "Usability Testing and Iteration",
        classForContent:
          "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-xl xl:text-xl 2xl:text-xl mb-4 ",
        content:
          "Rigorous testing and refinements to ensure optimal user satisfaction.",
      },
      {
        id: "uiUx7",
        cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-7.webp",
        altImage: "imageDescription",
        cardTitle: "Design System Development",
        classForContent:
          "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-xl xl:text-xl 2xl:text-xl mb-4 ",
        content:
          "Establishing a consistent, scalable design language across all your digital touchpoints.",
      },
      {
        id: "uiUx8",
        cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-8.webp",
        altImage: "imageDescription",
        cardTitle: "UX Audits and Heuristic Evaluations",
        classForContent:
          "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-xl xl:text-xl 2xl:text-xl mb-4 ",
        content:
          "Evaluating existing interfaces to identify usability issues and areas for enhancement based on established UX principles and heuristics.",
      },
    ],
    dash: "border-blue-700 mt-20",
  };
  const content_nationalAwards = {
    id: "national-awards",
    bgImage: "/images/specific/national_awards/background.webp",
    smallBGImage: "/images/specific/about_us/researchBgMobile.webp",
    logo: "",
    pageTitle:
      "<span class='font-extrabold leading-relaxed text-3xl md:text-3xl xl:text-5xl'>NATIONAL</span> <span class='font-normal'>AWARDS</span>",
    pageTitleCss: " text-white  w-full text-center   text-3xl md:text-3xl xl:text-5xl",
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
    bgImgCss: "lazyload",
    paraTitle:
      "<span class='text-white font-bold'>Craving a digital presence that resonates? With bespoke UI/UX designs tailored for the future, ensure your users are not merely satisfied, but enchanted. <br/> <span class='title text-orange-400 text-left' > Explore More </span>",
    paraTitleClass: "title text-left font-normal leading-tight",
    gridColCss:
      "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
    gridClass:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
    bannerClass:
      "object-fit  py-10 md:py-auto bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/Services/MobileApp/Images/16.webp",
    imageCss:
      "mx-auto  sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto lazyload",
  };
  const content_MobileAppTechnology = {
    id: "MobileAppTechnology",
    blockTitle:
      "OUR RANGE OF  <span class='font-extrabold'>MOBILE APP TECHNOLOGIES</span>",
    classForblockTitle: " w-full text-center BlockTitle xl:py-5 py-10 leading-tight ",
    classForNoOfCards:
      "px-10 pb-10 lg:px-20 2xl:px-52 lg:mt-5  max-w-8xl text-center justify-evenly mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 lg:gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-6",
    classForCards:
      " border shadow-[0_3px_10px_rgb(0,0,0,0.2)] 2xl:py-5 text-white  mb-7 rounded-xl",
    classForCardTitle: "text-center  text-darkGray text-xl xl:text-2xl font-bold p-3 smTxt",
    classForCardTitle_2:
      "font-bold text-md text-primary dark:text-primary-400 p-5",
    classForCardImage: "mx-auto p-10 2xl:p-5 xxl:p-10 lazyload  rounded-full",
    classForblockContent:
      "lg:w-3/4 xl:w-4/5 2xl:w-4/5  mx-auto text-center font-normal text-darkGray mb-10 bodyTxt",
    blockContent:
      "The dynamic mobile industry empowers us to leverage technology's full potential. At iAssureIT, we dedicate time and resources to ensure we're prepared for upcoming mobile trends. We excel in offshore mobile application development across various platforms",
    cardsArray: [
      {
        cardImage: "/images/specific/Services/MobileApp/TechnologyStack/9.webp",
        altImage: "imageDescription",
        cardTitle: "iOS App ",
      },
      {
        cardImage:
          "/images/specific/Services/MobileApp/TechnologyStack/10.webp",
        altImage: "imageDescription",
        cardTitle: "Android App  ",
      },
      {
        cardImage: "/images/specific/Services/MobileApp/TechnologyStack/6.webp",
        altImage: "imageDescription",
        cardTitle: "Swift App ",
      },
      {
        cardImage: "/images/specific/Services/MobileApp/TechnologyStack/5.webp",
        altImage: "imageDescription",
        cardTitle: "Kotlin App  ",
      },
      {
        cardImage: "/images/specific/Services/MobileApp/TechnologyStack/3.webp",
        altImage: "imageDescription",
        cardTitle: "React Native App  ",
      },
      {
        cardImage: "/images/specific/Services/MobileApp/TechnologyStack/8.webp",
        altImage: "imageDescription",
        cardTitle: "Flutter App ",
      },
      {
        cardImage:
          "/images/specific/Services/MobileApp/TechnologyStack/11.webp",
        altImage: "imageDescription",
        cardTitle: "Xamarin App ",
      },
    ],
    dash: "border-blue-700 mt-6",
  };
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
    pageTitle:
      "<span class='font-extrabold uppercase'>Why Choose iAssureIT?</span> ",
    pageTitleCss: "w-full text-center   BlockTitle leading-tight ",
    bgImage: // "/images/specific/Services/UI-UX-Development/iAssureIT-ui-ux-development-11.png", 
      "/images/specific/Services/UI-UX-Development/iAssureIT-ui-ux-development-11.png.webp",
    // "/images/specific/Services/MobileApp/WHY_CHOOSE_iAssureIT/1.webp",
    bgImageCss: "w-full h-auto object-cover",
    bigImageAlt: "BigImage",
    gridCss: "grid grid-cols-1 lg:grid-cols-2 gap-10",
    repeatedBlkCss: " shadow-none flex items-start h-auto my-10 xl:my-5 ",
    imgCss:
      "flex-none bg-purple h-auto   items-start rounded mr-3 md:mr-10 object-cover shadow-[4.0px_8.0px_8.0px_rgba(97,143,237,0.8)]",
    titleCss: "text-lg md:text-2xl xl:text-[1.2rem] font-bold mb-2",
    gridCol1Css: "order-last w-full h-auto relative my-auto ",
    desCss: "text-gray-700 text-[18px]  sm:text-base overflow-hidden",
    linkCss: "float-right px-4 text-skyBlue",
    repeatedBlocks: [
      {
        imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
        title: "Expertise",
        description:
          "A seasoned team of designers and developers.",
      },
      {
        imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
        title: "Quality Assurance",
        description:
          "Comprehensive testing and validation to ensure impeccable user experiences.",
      },
      {
        imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
        title: "Custom Solutions",
        description:
          "Tailored to encapsulate your unique brand essence.",
      },
      {
        imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
        title: "Security",
        description:
          "Strong measures to safeguard your project’s data.",
      },
      {
        imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
        title: "Ongoing Support",
        description:
          "Ensuring your digital interfaces remain updated and engaging.",
      },
    ],
    dash: "border-blue-700 mb-5 mt-10 md:mt-1 ",
  };

  const content_profitMargin = {
    bgImage: "/images/specific/Services/MobileApp/Images/20.webp",
    smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/5.webp",
    bgImgCss: "lazyload",
    paraTitle:
      "Ensure Seamless UX Across Devices . Reach out today to metamorphose your digital interaction. <span class='title text-orange-400'> Learn How</span>",
    paraTitleClass: "title text-white text-left leading-tight",
    gridColCss:
      "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
    gridClass:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
    bannerClass:
      "object-fit pt-10 pb-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/Services/UI-UX-Development/iAssureIT-ui-ux-development-10.webp",
    imageCss: "mx-auto mt-20 md:py-20 sm:object-fit my-auto content-center  place-content-center lazyloaded",
    imgTagcss: "mx-auto lazyload",
  };
  const content_accordion = {
    dash: "border-blue-700 md:mb-5 mt-10 md:mt-20 ",
    pageTitle: "FAQS",
    pageTitleCss:
      " text-gray w-full text-center font-extrabold BlockTitle mb-3",
    accordionData: [
      {
        title: "What makes iAssureIT’s UI/UX development services distinctive?",
        content:
          "Our UI/UX development services are carved from a deep understanding of your target audience combined with a blend of creativity, usability principles, and a keen eye for modern design trends ensuring a delightful user experience.",
      },
      {
        title: "How does iAssureIT ensure the responsiveness of the design across devices?",
        content:
          "We employ Responsive Web Design techniques to ensure your interface provides a seamless and consistent experience, whether accessed on desktop, tablet, or mobile.",
      },
      {
        title: "How involved can I be in the UI/UX development process?",
        content:
          "We believe in close collaboration and clear communication with our clients throughout the design process to ensure that the final product aligns well with your vision and expectations.",
      },
      {
        title: "What security measures are implemented to protect my project's data?",
        content:
          "At iAssureIT, we adopt robust security protocols, data encryption, and regular security audits to ensure the absolute safety of your project’s data.",
      },
      {
        title: "Do you provide support post-delivery of the UI/UX project?",
        content:
          "Absolutely! iAssureIT offers ongoing support and maintenance, ensuring your digital interfaces remain up-to-date, engaging, and in tune with evolving user expectations.",
      },
      {
        title: "How does your team handle usability testing and iteration?",
        content:
          "We conduct thorough usability testing sessions, gather user feedback, and continuously iterate and refine our designs to ensure they meet the optimal standards of user satisfaction and engagement.",
      },
      {
        title: "What platforms do you design for?",
        content:
          "We specialize in designing for a multitude of platforms including web, iOS, and Android, ensuring adherence to platform-specific design guidelines and best practices.",
      },
      {
        title: "Can you help in developing a consistent design system for our organization?",
        content:
          "Certainly! We assist in creating a robust design system, including reusable components, style guides, and pattern libraries, ensuring design consistency and efficiency across all your digital touchpoints.",
      },
      {
        title: "How does iAssureIT handle the project timeline and budget?",
        content:
          "We provide a clear timeline and budget estimation at the outset, ensuring transparency and adherence to deadlines and budget constraints throughout the project lifecycle.",
      },
    ],
  };

  const content_contactUs = {
    id: "MbAppcontactUs",
    bgImage: "/images/specific/Services/MobileApp/Images/22.webp",
    smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/7.webp",

    bgImgCss: "lazyload ",
    pageTitle: "CONTACT US",
    pageTitleCss: " text-white w-full text-center font-extrabold text-3xl md:text-3xl xl:text-5xl",
    gridColCss: "my-auto w-full sm:w-2/3 md:w-3/5 rounded-4 lg:w-4/5 xxl:!w-3/5  mx-auto lg:mx-0 text-darkGray content-center  place-content-center  justify-center  px-5  2xl:px-2 md:pl-6 md:pl-16 lg:px-0 xl:pl-4 2xl:pl-40 xxl:pl-40 md:-mt-5",
    gridClass: "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 place-content-center  lg:h-full   xl:h-full h-full content-center md:py-10 ",
    gridCol1Css: "mt-3 md:mt-0",
    bannerClass: "object-fit pt-72 pb-60  md:pt-72 md:pb-48 md:bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/Services/UI-UX-Development/iAssureIT-contact-us-1.webp",
    imageCss: "mx-auto pt-2 pb-20 sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto lazyload",
    imgTpText: "<span class='leading-loose'> Now why to wait? </span><br/> Contact Us immediately ",
    imgTpTextClass: "text-white w-full text-center font-extrabold text-xl md:text-3xl xl:text-4xl leading-tight",
    dash: "border-white  mb-5 md:mb-3 mt-5 md:mt-12 lg:mt-2",
    showForm: "true",
    formCss: " p-6 -mt-16 md:-mt-16 lg:-mt-12 bg-white md:p-10 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
  }

  const content_CenterImgLeftRightRepeatableBlocks = {
    id: "mbBlk3",
    bgImage: "/images/specific/Services/MobileApp/Images/4.webp",
    smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/2.webp",
    bgImgCss:
      " object-fit py-48 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload",

    blockTitle: "YOUR NEXT <br/><span class='font-extrabold'>MOBILE DEVELOPMENT PARTNER</span>",
    classForLeftImageContainer: " text-center ",
    classForblockTitle: "BlockTitle text-white w-full text-center font-normal pb-10 leading-tight",
    classForblockContent: "px-10 lg:px-20 xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
    imageSrc: "/images/specific/Services/UI-UX-Development/iAssureIT-ui-ux-development-3.webp",
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
    classForContainer: "grid grid-cols-1 md:grid-cols-3 px-2 lg:px-16 2xl:px-48 py-12 2xl:pt-5 pb-20",
    classForLeftBlockContainer: "w-full  p-2 item-center my-auto place-content-center content-center",
    classForLeftContentContainer: "w-full rounded overflow-hidden  mb-4 ",
    classForLeftContentinsideContainer: "w-auto p-4 text-right my-auto",
    classForLeftContenTitleStyle: "font-normal text-white text-left sm:text-lg mb-2",
    classForRightContenTitleStyle: "font-normal text-white  text-left md:text-right sm:text-lg mb-2",
    leftBlocks: [
      {
        leftTitle: "We promise impeccable visual appeal blended with intuitive functionality across all platforms.",
        img: "/images/specific/Services/MobileApp/Icons/1.webp"
      },
      {
        leftTitle: "Originality and user-centric thinking are at the core of our design approach.",
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
        leftTitle: "More than a team, we're a battalion of 150+ dedicated UI/UX professionals.",
        img: "/images/specific/Services/MobileApp/Icons/3.webp"
      },
      {
        leftTitle: "Our expertise is validated with over 250+ successful UI/UX projects in our portfolio.",
        img: "/images/specific/Services/MobileApp/Icons/4.webp"
      },

    ],
    dash: "border-white  mb-5 md:mb-3 mt-10 md:mt-16",

  };
  const content_ProblemAns1 = {
    blockTitle:
      " <span class='font-extrabold uppercase'>Challenges Faced By Businesses in<br/></span>  <span class='font-normal uppercase'>  designing interactive UI/UX </span>",
    classForblockTitle: "w-full text-center  BlockTitle leading-tight  ",
    dash: "border-blue-700 mb-5 mt-10 md:mt-1",
    grid1Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-10",
    img1GridCss: " m-auto",
    img1: "/images/specific/Services/UI-UX-Development/iAssureIT-ui-ux-development-4.webp",
    content1Css:
      "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
    title1: "PROBLEM",
    title1Css: "BlockTitle1  font-extrabold text-left",
    subTitle1: "Consistency across platforms and devices:",
    subTitle1Css: "font-bold subTitle1 my-3",
    para1:
      "Achieving a seamless user interface across varied devices can be demanding.",
    para1Css: "font-normal bodyTxt",
    grid2Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20",
    // img2GridCss:"",
    img2: "/images/specific/Services/UI-UX-Development/iAssureIT-ui-ux-development-5.webp",
    content2Css:
      "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
    title2: "iAssureIT Solution ",
    para2:
      "Our prowess in Responsive Web Design ensures your interface adapts seamlessly across all devices, offering a consistent and user-friendly experience.",
  };
  const content_ProblemAns2 = {
    grid1Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20",
    img1GridCss: "m-auto",
    img1: "/images/specific/Services/UI-UX-Development/iAssureIT-ui-ux-development-7.webp",
    content1Css:
      "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
    title1: "PROBLEM",
    title1Css: "BlockTitle1 font-montserrat  font-extrabold text-left",
    subTitle1: "Engaging User Interface:",
    subTitle1Css: "font-bold subTitle1 my-3",
    para1:
      " Crafting a visually appealing yet intuitive interface.",
    para1Css: "font-normal bodyTxt",
    grid2Css:
      "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20 mb-20",
    // img2GridCss:"",
    img2: "/images/specific/Services/UI-UX-Development/iAssureIT-ui-ux-development-8.webp",
    content2Css:
      "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
    title2: "iAssureIT Solution ",
    // subTitle2:"Modernization Plan :",
    para2:
      " With a blend of creativity and usability design principles, we create engaging and user-centric interfaces that not only look good but perform brilliantly.",
  };

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
      <CenterImgLeftRightRepeatableBlocks
        inputData={content_CenterImgLeftRightRepeatableBlocks}
      />
      <ProblemSolutionBlk inputData={content_ProblemAns1} />
      <BgImgRightContent inputData={content_developerBlk} />
      <ProblemSolutionBlk inputData={content_ProblemAns2} />
      <SmallBanner inputData={content_SmallBanner2} />
      <Autocarousel inputData={content_carousel2} />
      <Autocarousel inputData={content_carouselLeft} />
      {/* <MultipleImagesCarousel inputData={content_carousel} showVideos={true} /> */}
      {/* <AutoScroll
        inputData={content_carousel2}
        showVideos={false}
        showImages={true}
        direction="right"
      />
      <AutoScroll
        inputData={content_carouselLeft}
        showVideos={false}
        showImages={true}
        direction="left"
      /> */}
      <BgImgRightContent inputData={content_custAquisitions} />
      <CenterContentRepeatableBlocks
        inputData={content_CenterContentRepeatableBlocks}
      />
      <BgImgLeftImgRtGrid inputData={content_nationalAwards} />
      <BgImgRightContent inputData={content_custBase} />
      <CenterContentRepeatableBlocks inputData={content_MobileAppTechnology} />
      <OurPortfolio inputData={content_CaseStudy} />
      <LeftImgRightRepeatableBlk
        inputData={content_WhyChoose}
        readMore={false}
      />
      <BgImgRightContent inputData={content_profitMargin} />
      <AccordionBlock inputData={content_accordion} />
      <BgImgRightContent inputData={content_contactUs} />
    </div>
  );
}

//PB added metaData
UIUXDevelopment.getInitialProps = async () => {
  // Perform data fetching here (e.g., making API requests)
  var url = '/services/ui-ux-development'
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
export default UIUXDevelopment;