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
import Autocarousel from "@/components/Autocarousel";
import CustomHead from "@/templates/CustomHead/CustomHead";

const CustomerServiceAutomation = ({ data }) => {
  const content_leftContentBgImg = {
    id: "Banner",
    bgImage: "/images/specific/Services/MobileApp/Images/1.webp",
    smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/1.webp",
    logo: "",
    h1TxtLine1: "CUSTOMER SERVICE",
    h1TxtLine1Css: " font-DrukText text-4xl md:text-3xl xl:text-8xl font-extrabold text-center md:text-left   place-content-left  justify-center content-left mb-5 ",
    h1TxtLine2: "AUTOMATION",
    h1TxtLine2Css: "outline-title  font-DrukText font-bold text-4xl md:text-3xl xl:text-8xl text-center md:text-left   place-content-left  justify-center content-left mb-5 ",
    bgImgCss: " py-20 h-auto xl:h-[990px] lazyload object-fit bg-cover bg-no-repeat relative  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    para: "iAssureIT – Elevating Customer Interactions through Automation",
    paraCss: " font-DrukText lcamelcase text-normal text-center md:text-left text-2xl md:text-3xl xl:text-5xl ",
    gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2   md:grid-cols-2  py-10  md:py-20 xl:py-0 2xl:py-20 h-auto md:h-full lg:h-full   xl:h-full 2xl:h-full  ",
    gridSubDivCss: " pb-32 md:pb-10 lg:pb-16 2xl:pb-48 my-auto text-white   md:pl-32 lg:pl-20 xl:pl-32 2xl:pl-60",
    image: "/images/specific/Services/Customer-Service-Automation/iAssureIT-Customer-Service-Automation-1.webp",
    imageCss: '  w-2/3 xl:w-4/5 2xl:w-full mx-auto my-auto object-fit lazyload place-content-center object-center ',
    imgTagcss: "lazyload  -mt-20    ",
    borderColor: "border-darkBlue",
  }
  const content_BgImgRightTxt_3 = {
    paraTitle: "At iAssureIT, we orchestrate automated customer service solutions tailored to meet the distinct needs and expectations of your valued patrons. Our methodology is anchored in leveraging robust technology to drive efficiency, precision, and superior service quality.<ul class='list-disc list-inside'><li>Integrated automation solutions that transcend conventional service delivery, nurturing remarkable customer engagement.</li><li>Our automation maestros delve into a diligent, data-informed strategy to realize seamless customer service operations. </li> <li>Boasting 150+ adept professionals committed to metamorphosing your customer service avenues </li><li>A rich tapestry of 170+ successful automation projects perpetually evolving to keep pace with the brisk digital terrain. </li></ul>",
    paraTitleClass: "text-lg md:text-2xl xl:text-xl 2xl:text-xl text-justify md:text-left font-normal",
    bgImgCss: "lazyload",
    pageTitle: "<span class='font-normal uppercase'>Transforming Service Dynamics </span> <br/><span class='font-extrabold uppercase'>Catalyzing Business Growth</span>",
    pageTitleCss: "w-full text-center  BlockTitle leading-tight",
    gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5  md:pl-6 md:pl-16 lg:pl-20 2xl:pl-28 xxl:pl-40 xxl:px-10",
    // gridCol1Css: "w-1/2 mx-auto",
    gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2 md:px-10 xl:px-20 2xl:px-32 xxl:px-48 lg:h-full   xl:h-full h-full content-center ",
    bannerClass: "object-fit  bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/Services/Customer-Service-Automation/iAssureIT-Customer-Service-Automation-2.webp",
    imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto lazyload",
    dash: "border-blue-700 mb-5 md:mb-3",
  }
  const content_DummyTxt1 = {
    dummyText: "THE TOP CHALLENGES IN CRAFTING A POWERFUL MOBILE APP"
  }
  const content_developerBlk = {
    paraTitle: "<span class='text-light font-bold '> Harness Automation to redefine <br/> <span class='title text-orange-400 text-left' > customer service efficiency and business growth.  </span>",
    paraTitleClass: "title text-left font-normal leading-tight",
    bgImage: "/images/specific/Services/MobileApp/Images/9.webp",
    bgImgCss: "lazyload",
    smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/3.webp",

    gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
    // gridCol1Css: "w-1/2 mx-auto",
    gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
    bannerClass: "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/Services/Customer-Service-Automation/iAssureIT-Customer-Service-Automation-6.webp",
    imageCss: "mx-auto pt-20 sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto lazyload",
  }

  const content_SmallBanner2 = {
    id: "custSmallBanner",
    bgImage: "/images/specific/Services/MobileApp/Images/12.webp",
    smallBGImage: "/images/specific/Services/MobileApp/Images/12.webp",
    title: " Harness Automation to redefine customer service efficiency and business growth.",
    titleClass: " text-center mx-auto md:float-right my-auto font-extrabold BlockTitle leading-normal uppercase",
    className: "h-auto w-full mx-auto",
    alt: "reserve",
    bgImgCss: "py-10 mb-20 2xl:py-5 bg-cover bg-no-repeat  bg-left-bottom lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]",
    gridCss: "grid grid-cols-1  h-full w-full content-center  place-content-center my-auto md:py-20",
    gridCol1Class: "my-auto  sm:w-auto  text-white py-7 ",
    para: " ",
    paraCss: "BlockTitle text-light text-center md:text-left md:col-span-2 2xl:col-span-2"
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
    paraTitle: "<span class='text-light font-bold'> Let iAssureIT be the catalyst in your <br/> <span class='title text-orange-400 text-left' > journey towards unrivalled customer service automation.  </span>",
    paraTitleClass: "title text-left font-normal leading-tight",
    gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-16    lg:pl-20 xl:px-4 2xl:px-20 xxl:px-32",
    gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
    bannerClass: "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/Services/Customer-Service-Automation/iAssureIT-Customer-Service-Automation-9.webp",
    imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto lazyload xl:pt-28",
  }
  const content_CenterContentRepeatableBlocks = {
    id: "Services",
    blockTitle: " <span class='font-extrabold uppercase'>Our Superior Customer Services Automation Offerings </span>",
    classForblockTitle: " w-full text-center BlockTitle xl:py-5 py-10  leading-loose",
    classForNoOfCards: "px-10 lg:px-32 lg:mt-5  max-w-8xl text-center justify-evenly grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-6",
    classForCards: " border shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white p-10 mb-7 rounded-xl",
    classForCardTitle: "text-center  text-darkGray title  font-semibold p-3 pt-20",
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
        cardTitle: 'Chatbot Development and Integration ',
        // cardTitle_2       : 'Block subtitle',
        classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
        content: "Crafting intelligent chatbots powered by AI and natural language processing to provide instantaneous, round-the-clock customer support.",
      },
      {
        id: "service2",
        cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-2.webp',
        altImage: 'imageDescription',
        cardTitle: 'Self-Service Portals and Knowledge Bases',
        classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
        content: "Empowering customers with self-help avenues through well-organized portals and rich knowledge bases.",
      },
      {
        id: "service3",
        cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-3.webp',
        altImage: 'imageDescription',
        cardTitle: 'Ticketing and Case Management Systems',
        classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
        content: "Automating the service workflows to expedite issue tracking, assignment, and escalation, ensuring a smooth customer journey.",
      },
      {
        id: "service4",
        cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-4.webp',
        altImage: 'imageDescription',
        cardTitle: 'Personalized Email and SMS Automation ',
        classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
        content: "Personalizing customer communication through automated email and SMS channels for enhanced engagement and relationship nurturing.",
      },
      {
        id: "service5",
        cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-5.webp',
        altImage: 'imageDescription',
        cardTitle: 'Customer Feedback and Survey Automation',
        classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
        content: "Harnessing automation to capture invaluable customer feedback, deriving insights for continuous service betterment.",
      },
      {
        id: "service6",
        cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-6.webp',
        altImage: 'imageDescription',
        cardTitle: 'Social Media Listening and Engagement',
        classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
        content: "Utilizing automated tools for vigilant social media monitoring and proactive engagement, fostering a vibrant customer community.",
      },
      {
        id: "service7",
        cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-7.webp',
        altImage: 'imageDescription',
        cardTitle: 'Integration with CRM and Helpdesk Systems',
        classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
        content: "Achieving seamless integration to offer a unified view of customer interactions, thereby simplifying data management across various channels.",
      },
      {
        id: "service8",
        cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-8.webp',
        altImage: 'imageDescription',
        cardTitle: 'Analytics and Reporting',
        classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
        content: "Employing automated analytics to unveil crucial insights into customer behavior and service performance, steering data-driven enhancements in service delivery.",
      },
    ],
    dash: "border-blue-700 mt-20 md:mt-4"
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
      "object-fit py-32 xl:py-52 2xl:py-48 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload bg-[length:200%_100%] md:bg-[length:100%_100%]",
    logoCss: " justify-left align-left  mb-5 lazyload",
    paraCss: "subTitle text-justify font-normal",
    gridCss:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  md:mx-20 lg:mx-10 xl:mx-20 place-content-center  lg:h-full   xl:h-full h-full content-center  ",
    gridSubDivCss:
      "my-auto w-full mx-auto text-white content-center  place-content-center  justify-center py-5 px-10 ",
    fgImg: "/images/specific/national_awards/frame/1.webp",
    imageCss: " w-auto mx-auto pt-20 md:pt-20 object-fit lazyload",
    contentSubDiv: "w-full h-auto md:p-10 lg:p-2 xl:p-10",
    colorTxt: " 1. The Company Of The Year 2018",
    para: "The prestigious award of ' The Company of The Year - 2018' in Startup Category for Web & Mobile Application Development from International Magazine CIO Review.",
    link: "https://www.cioreviewindia.com/magazines/company-of-the-year-december-2018/",
    color: "ceyone_black",
    // urlName: "Read More",
    // linkCss: "text-white underline font-bold text-lg md:text-2xl mt-5",
    dash: "border-white  mb-5 md:mb-3 mt-10 md:mt-32 xl:mt-24 2xl:mt-32",
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
    paraTitle: "<span class='text-light font-bold'>  Embark on a transformative journey of customer service <br/> <span class='title text-orange-400 text-left' > automation and explore our robust solutions. </span>",
    paraTitleClass: "title text-left font-normal leading-tight",
    gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
    gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
    bannerClass: "object-fit  bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]   py-32",
    image: "/images/specific/Services/MobileApp/Images/16.webp",
    imageCss: "mx-auto  sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto lazyload",
  }
  const content_MobileAppTechnology = {
    id: "MobileAppTechnology",
    blockTitle: "OUR RANGE OF  <span class='font-extrabold'>MOBILE APP TECHNOLOGIES</span>",
    classForblockTitle: " w-full text-center BlockTitle xl:py-5 py-10 ",
    classForNoOfCards: "px-10 pb-10 lg:px-20 2xl:px-52 lg:mt-5  max-w-8xl text-center justify-evenly mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 lg:gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-6",
    classForCards: " border shadow-[0_3px_10px_rgb(0,0,0,0.2)] 2xl:py-5 text-white  mb-7 rounded-xl",
    classForCardTitle: "text-center  text-darkGray title p-3 smTxt",
    classForCardTitle_2: "font-bold text-md text-primary dark:text-primary-400 p-5",
    classForCardImage: "mx-auto p-10 2xl:p-5 xxl:p-10 lazyload  rounded-full",
    classForblockContent: "lg:w-3/4 xl:w-4/5 2xl:w-4/5  mx-auto text-center font-normal text-darkGray mb-10 bodyTxt",
    blockContent: "The dynamic mobile industry empowers us to leverage technology's full potential. At iAssureIT, we dedicate time and resources to ensure we're prepared for upcoming mobile trends. We excel in offshore mobile application development across various platforms",
    cardsArray: [
      {
        cardImage: '/images/specific/Services/MobileApp/TechnologyStack/9.webp',
        altImage: 'imageDescription',
        cardTitle: 'iOS App ',
      },
      {
        cardImage: '/images/specific/Services/MobileApp/TechnologyStack/10.webp',
        altImage: 'imageDescription',
        cardTitle: 'Android App  ',
      },
      {
        cardImage: '/images/specific/Services/MobileApp/TechnologyStack/6.webp',
        altImage: 'imageDescription',
        cardTitle: 'Swift App ',
      },
      {
        cardImage: '/images/specific/Services/MobileApp/TechnologyStack/5.webp',
        altImage: 'imageDescription',
        cardTitle: 'Kotlin App  ',
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
    sectionClass: "mx-auto text-center px-8 pt-10 container md:mt-20",
    pageTitle: "<span class=' font-normal'>WHY CHOOSE IASSUREIT FOR</span> <br/> <span class='font-extrabold uppercase'>Customer Services Automation?</span> ",
    pageTitleCss: "w-full text-center   BlockTitle leading-tight ",
    bgImage: "/images/specific/Services/Customer-Service-Automation/iAssureIT-Customer-Service-Automation-11.webp",
    // "/images/specific/Services/MobileApp/WHY_CHOOSE_iAssureIT/1.webp",
    bgImageCss: 'w-full h-auto object-cover',
    bigImageAlt: "BigImage",
    gridCss: "grid grid-cols-1 lg:grid-cols-2 gap-10",
    repeatedBlkCss: " shadow-none flex items-start sm:h-36 md:h-auto my-10  ",
    imgCss: "flex-none bg-purple h-auto   items-start rounded mr-3 md:mr-10 object-cover shadow-[4.0px_8.0px_8.0px_rgba(97,143,237,0.8)]",
    titleCss: "text-lg md:text-2xl xl:text-[1.2rem] font-bold mb-2",
    desCss: "text-gray-700 text-[18px]  sm:text-base overflow-hidden",
    linkCss: "float-right px-4 text-skyBlue",
    repeatedBlocks: [
      {
        imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
        title: "Expertise",
        description: "A dedicated team with a profound understanding of automation technologies tailored for exemplary customer service.",
      },
      {
        imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
        title: "Quality Assurance",
        description: "Extensive validation to ascertain superior service delivery and customer satisfaction.",
      },
      {
        imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
        title: "Custom Solutions",
        description: "Crafting automation strategies to resonate with your distinct business objectives and customer expectations.",
      },
      {
        imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
        title: "Continuous Support",
        description: " A long-term collaboration aimed at perpetually optimizing the customer service automation, adapting to evolving customer behaviors and market trends.",
      },

    ],
    dash: "border-blue-700 mb-5 ",

  }

  const content_profitMargin = {
    bgImage: "/images/specific/Services/MobileApp/Images/20.webp",
    smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/5.webp",
    bgImgCss: "lazyload",
    paraTitle: "REVOLUTIONIZE YOUR CUSTOMER SERVICE? <span class='title text-orange-400 text-left'>  AUTOMATE, INTEGRATE, AND ACCELERATE YOUR CUSTOMER SUPPORT!</span>",
    paraTitleClass: "title text-white text-left leading-tight",
    gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
    gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
    bannerClass: "object-fit pt-10 pb-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/Services/Customer-Service-Automation/iAssureIT-Customer-Service-Automation-10.webp",
    imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto lazyload",
  }
  const content_accordion = {
    dash: "border-blue-700 md:mb-5 mt-7 md:mt-10",
    pageTitle: "FAQS",
    pageTitleCss:
      " text-gray w-full text-center font-extrabold BlockTitle mb-10",
    accordionData: [

      {
        title: 'Why is Customer Services Automation important?',
        content: "Customer Services Automation (CSA) is crucial as it elevates efficiency, reduces response time, and enhances customer satisfaction by providing timely, personalized, and accurate services. It also frees up human resources for more complex, value-driven tasks, ultimately leading to cost savings and improved business performance."
      },

      {
        title: "What does 'Customer Services Automation' entail at iAssureIT?",
        content: "At iAssureIT, 'Customer Services Automation' encompasses a broad spectrum of services including Chatbot Development and Integration, Self-Service Portals, Ticketing Systems, Personalized Communication Automation, Customer Feedback and Survey Automation, Social Media Engagement, Integration with existing CRM and Helpdesk Systems, and Analytics and Reporting. Our goal is to automate and optimize your customer service processes to provide seamless and superior customer experiences."
      },
      {
        title: 'How does Chatbot Development and Integration enhance customer service?',
        content: 'Our chatbot solutions are crafted with Artificial Intelligence and Natural Language Processing to handle common customer inquiries promptly, providing instant responses. This 24/7 automated support significantly enhances customer satisfaction and reduces response time, leading to an overall improved customer service experience.'
      },
      {
        title: 'How do Self-Service Portals and Knowledge Bases empower customers?',
        content: "Self-Service Portals and Knowledge Bases are designed to provide customers with intuitive platforms to find answers to their questions independently. By offering relevant information and resources, customers can resolve their issues swiftly, leading to an enhanced customer experience and freeing up your support team for more complex issues."
      },
      {
        title: 'What benefits do Ticketing and Case Management Systems bring?',
        content: "Ticketing and Case Management Systems streamline your customer support workflows by automating the process of tracking, assigning, and escalating customer inquiries. This ensures timely resolution, seamless communication, and a smoother customer journey through the service channels."
      },
      {
        title: 'How does Personalized Email and SMS Automation contribute to customer engagement?',
        content: "Personalized Email and SMS Automation enables targeted and personalized communication with customers. From welcome messages to transactional notifications, this automation nurtures customer relationships and drives engagement by delivering tailored messages that resonate with individual customer needs."
      },
      {
        title: 'How does Customer Feedback and Survey Automation help in service improvement?',
        content: "By automating the collection and analysis of customer feedback and surveys, we help you gather invaluable insights. This information is crucial for identifying areas of improvement and enhancing your products and services based on real-time feedback, which in turn boosts customer satisfaction."
      }, {
        title: 'How does Social Media Listening and Engagement work?',
        content: "Our automated social listening tools monitor and engage with customer conversations on social media platforms. This proactive engagement helps address concerns, build strong relationships with your audience, and maintain a positive brand image in the digital sphere."
      }, {
        title: 'What does Integration with CRM and Helpdesk Systems entail?',
        content: "Integrating Customer Services Automation tools with your existing CRM and Helpdesk Systems ensures a unified view of customer interactions. This seamless integration simplifies data management across multiple touchpoints, fostering an organized and efficient customer service environment."
      }, {
        title: 'How can I get started with iAssureIT’s Customer Services Automation solutions?',
        content: "Embarking on a journey of customer service transformation is just a click away. Contact us today to discuss your needs and explore our comprehensive Customer Services Automation solutions. Click on the 'Let's Transform Customer Services Together!' button to get started on a pathway to exceptional customer experiences"
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
    gridCol1Css: "mt-6 md:mt-0",
    bannerClass: "object-fit pt-72 pb-72  md:pt-72 md:pb-48 md:bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/Contact_Us/iAssureIT-contact-us-1.webp",
    imageCss: "mx-auto pt-2 pb-20 sm:object-fit my-auto content-center  place-content-center lazyload ",
    imgTagcss: "mx-auto lazyload",
    imgTpText: "<span class='leading-loose'> Now why to wait? </span><br/> Contact Us immediately ",
    imgTpTextClass: "text-light w-full text-center font-extrabold text-xl md:text-3xl xl:text-4xl leading-tight",
    dash: "border-white  mb-5 md:mb-3 mt-12 lg:mt-2",
    showForm: "true",
    formCss: " p-6 -mt-16 md:-mt-16 lg:-mt-12 bg-white md:p-10 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
  }

  const content_CenterImgLeftRightRepeatableBlocks = {
    bgImage: "/images/specific/Services/MobileApp/Images/4.webp",
    smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/2.webp",
    bgImgCss:
      " object-fit py-48 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload",
    blockTitle: "<span class='font-normal'>Transforming Service Dynamics </span> <br/><span class='font-extrabold'>Catalysing Business Growth</span>",
    classForLeftImageContainer: " text-center ",
    classForblockTitle: "BlockTitle px-5 md:px-1 text-light w-full text-center font-normal pb-10 leading-tight",
    classForblockContent: "px-10 lg:px-20 xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
    imageSrc: "/images/specific/Services/Customer-Service-Automation/iAssureIT-Customer-Service-Automation-3.webp",
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
    classForContainer: "grid grid-cols-1 md:grid-cols-3 px-2 lg:px-16 2xl:px-48 py-12 2xl:pt-5 md:pb-20",
    classForLeftBlockContainer: "w-full  p-2 item-center my-auto place-content-center content-center",
    classForLeftContentContainer: "w-full rounded overflow-hidden  mb-4 ",
    classForLeftContentinsideContainer: "w-auto p-4 text-right my-auto",
    classForLeftContenTitleStyle: "font-normal text-white text-left sm:text-lg mb-2",
    classForRightContenTitleStyle: "font-normal text-white  text-left md:text-right sm:text-lg mb-2",
    leftBlocks: [
      {
        leftTitle: "Integrated automation solutions that transcend conventional service delivery, nurturing remarkable customer engagement.",
        img: "/images/specific/Services/MobileApp/Icons/1.webp"
      },
      {
        leftTitle: "Our automation maestros delve into a diligent, data-informed strategy to realize seamless customer service operations.",
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
        leftTitle: "Boasting 150+ adept professionals committed to metamorphosing your customer service avenues ",
        img: "/images/specific/Services/MobileApp/Icons/3.webp"
      },
      {
        leftTitle: " A rich tapestry of 200+ successful automation projects, perpetually evolving to keep pace with the brisk digital terrain.",
        img: "/images/specific/Services/MobileApp/Icons/4.webp"
      },

    ],
    dash: "border-white  mb-5 md:mb-3 mt-1 md:mt-20",

  };
  const content_ProblemAns1 = {
    blockTitle: " <span class='font-extrabold uppercase'>The Customer Service Automation Challenges  <br/></span> <span class='font-normal uppercase'> that Businesses Encounter </span>",
    classForblockTitle: "w-full text-center  BlockTitle leading-tight  ",
    dash: "border-blue-700 mb-5 mt-10 md:mt-1",
    grid1Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-10",
    img1GridCss: " m-auto",
    img1: "/images/specific/Services/Customer-Service-Automation/iAssureIT-Customer-Service-Automation-4.webp",
    content1Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
    title1: "PROBLEM",
    title1Css: "BlockTitle font-extrabold text-left",
    subTitle1: "Cross-Channel Consistency:",
    subTitle1Css: "font-bold subTitle my-3",
    para1: "Ensuring uniform service quality across various customer interaction channels.",
    para1Css: "font-normal bodyTxt",
    grid2Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20",
    // img2GridCss:"",
    img2: "/images/specific/Services/Customer-Service-Automation/iAssureIT-Customer-Service-Automation-5.webp",
    content2Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
    title2: "iAssureIT Solution ",
    // subTitle2:"One App, Every Device with iAssureIT",
    para2: "Our meticulous Cross-Channel Consistency Framework ensures uniformity in service delivery across various touchpoints, fostering a coherent and satisfying customer journey.",
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
    img1: "/images/specific/Services/Customer-Service-Automation/iAssureIT-Customer-Service-Automation-7.webp",
    content1Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
    title1: "PROBLEM",
    title1Css: "BlockTitle font-montserrat  font-extrabold text-left",
    subTitle1: "Personalization:",
    subTitle1Css: "font-bold subTitle my-3",
    para1: "Striking the balance between Automation and Personalization",
    para1Css: "font-normal bodyTxt",
    grid2Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20 mb-20",
    // img2GridCss:"",
    img2: "/images/specific/Services/Customer-Service-Automation/iAssureIT-Customer-Service-Automation-8.webp",
    content2Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
    title2: "iAssureIT Solution ",
    // subTitle2:"Designing Beyond Aesthetics with iAssureiT",
    para2: "We design Intuitive Automated data-driven insights like individual preferences, behavior patterns, and previous interactions using AI and ML Algorithms. Along with this using the right tools and methodologies, businesses can enhance the personalization capabilities of their customer service automation, leading to more meaningful and effective interactions with customers.  ",
    paraCss2: "",
    // listData:[
    //   "Our team employs user-centric design principles to create interfaces that resonate with your target audience. ",
    // "We conduct in-depth user research to guarantee your app aligns perfectly with user preferences and behaviors."
    // ],
    // listCss:"font-normal bodyTxt px-5 list-decimal py-2 md:px-7"

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

      <BgImgRightContent inputData={content_custBase} />
      {/* <CenterContentRepeatableBlocks inputData={content_MobileAppTechnology} /> */}
      <OurPortfolio inputData={content_CaseStudy} />
      <LeftImgRightRepeatableBlk inputData={content_WhyChoose} readMore={false} />
      <BgImgRightContent inputData={content_profitMargin} />
      <AccordionBlock inputData={content_accordion} />
      {/* <BlogsList inputData={content_BlogList} /> */}
      <BgImgRightContent inputData={content_contactUs} />
      <test2 />
    </div>
  )
}

//PB added metaData
CustomerServiceAutomation.getInitialProps = async () => {
  // Perform data fetching here (e.g., making API requests)
  var url = '/services/customer-service-automation'
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
export default CustomerServiceAutomation;