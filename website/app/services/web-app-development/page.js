"use client";
import React, { useEffect, useState } from "react"
import axios from "axios";
import CustomHead from "@/templates/CustomHead/CustomHead";
import BgImgLeftContentRtImg from "@/templates/ContentBlocks/BgImgLeftContent/BgImgLeftContentRtImg";
import BgImgRightContent from "@/templates/ContentBlocks/BgImgRightContent/BgImgRightContent";
import ImgCarousel from "@/templates/Carousel/AllTypeCarousel/Carousel";
import AutoScroll from "@/templates/Carousel/AutoScroll";
import LeftImgRightRepeatableBlk from "@/templates/RepeatableBlocks/LeftImgRightRepeatableBlk/LeftImgRightRepeatableBlk";
import MultipleImagesCarousel from "@/templates/Carousel/MultipleImgCarouselWithTopImg/MultipleImagesCarousel";
import CenterContentRepeatableBlocks from "@/templates/RepeatableBlocks/CenterContentRepeatableBlocks/CenterContentRepeatableBlocks";
import BgImgLeftImgRtGrid from "@/templates/ContentBlocks/BgImgLeftImgRightGrid/BgImgLeftImgRightGrid";
import OurPortfolio from "@/templates/OurPortfolio/OurPortfolio";
import AccordionBlock from "@/templates/Accordion/AccordionBlock";
import CenterImgLeftRightRepeatableBlocks from "@/templates/RepeatableBlocks/CenterImgLeftRightRepeatableBlocks/page";
import SmallBanner from "@/templates/BannerBlocks/SmallBanner/SmallBanner";
import ProblemSolutionBlk from "@/templates/ContentBlocks/ProblemSolutionBlk/ProblemSolutionBlk";
import Technology from "@/templates/ContentBlocks/Technology/Technology";
import Autocarousel from "@/components/Autocarousel";
import LandingPageModal from '@/components/Modal/landingPageModal';

const WebAppDevelopment = ({ data }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const content_leftContentBgImg = {
        id: "weAppBanner",
        bgImage: "/images/specific/Services/MobileApp/Images/1.webp",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/1.webp",
        logo: "",
        h1TxtLine1: "WEB APP  ",
        h1TxtLine1Css: " font-DrukText text-5xl md:text-3xl xl:text-8xl font-extrabold text-center md:text-left   place-content-left  justify-center content-left mb-5 ",
        h1TxtLine2: "DEVELOPMENT",
        h1TxtLine2Css: "outline-title  font-DrukText font-[500] text-5xl md:text-3xl xl:text-8xl text-center md:text-left   place-content-left  justify-center content-left mb-5 ",
        bgImgCss: "  py-20 h-auto  xl:h-auto md:py-32 xl:py-60 2xl:py-20 lazyload object-fit bg-cover bg-no-repeat relative  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]",
        para: "Pioneering Excellence in <br/> Digital Transformation  ",
        paraCss: " font-DrukText lcamelcase text-normal text-center md:text-left text-2xl md:text-3xl xl:text-5xl ",
        // gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  md:grid-cols-2  lg:h-screen  xl:h-screen h-screen  ",
        gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2   md:grid-cols-2  py-10  md:py-20 xl:py-0 2xl:py-32 h-auto md:h-full lg:h-full   xl:h-full 2xl:h-full xl:-mt-16 2xl:mt-auto",
        gridSubDivCss: " pb-32 md:pb-10 lg:pb-16 2xl:pb-48 my-auto text-white   md:pl-32 lg:pl-20 xl:pl-32 2xl:pl-32 ",
        image: "/images/specific/Services/WebApp/iAssureIT-Web-App-Development-image-1.webp",
        imageCss: '  w-2/3 xl:w-4/5 2xl:w-4/5 mx-auto my-auto object-fit lazyload place-content-center object-center 2xl:place-content-left 2xl:object-left',
        imgTagcss: "lazyload  -mt-20 xl:mt-0 2xl:-mt-20    ",
        borderColor: "border-darkBlue",
        modalUrlName: "Let's Talk",
        modalDisplay: "true",
        modalBtnCss: "w-fit   text-btnBlue text-center font-bold text-lg md:text-xl lg:text-sm xl:text-lg 2xl:text-xl  py-2 px-10  2xl:px-6  mt-3 lg:mt-10 border  rounded btn bg-gray-100 hover:bg-offWhite hover:text-black cursor-pointer"
    
    };
    const content_BgImgRightTxt_3 = {
        paraTitle:
            "In an era where business happens online, having an intuitive and robust web-app can set you apart. At iAssureIT, we combine innovation with a user-focused design philosophy to steer your business towards digital dominance. Experienced, dependable, and adaptable - that's our mantra. ",
        paraTitleClass: "text-lg md:text-2xl xl:text-xl 2xl:text-xl text-justify md:text-left font-normal",
        bgImgCss: "lazyload",
        pageTitle:
            "<span class='font-normal uppercase leading-relaxed'>Turning Your Digital Visions into </span><br/><span class='font-extrabold uppercase'> Dynamic Realities </span>",
        pageTitleCss: "w-full text-center  text-2xl md:text-3xl xl:text-4xl  2xl:text-4xl ",
        gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-3  md:pl-6 md:pl-16 lg:pl-10 xl:pl-20 2xl:pl-28 xxl:pl-40 xxl:px-10",
        // gridCol1Css: "w-1/2 mx-auto",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2 md:px-10 xl:px-40 2xl:px-60 xxl:px-48 lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit  bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/WebApp/iAssureIT-Web-App-Development-image-2.webp",
        imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto w-5/6 2xl:w-3/5 lazyload",
        dash: "border-blue-700 mb-5 md:mb-3",

    };
    const content_developerBlk = {
        id: "developerBlk",
        paraTitle:
            "<span class='text-white  font-bold uppercase leading-relaxed'> Let’s Elevate Your Business<br/> <span class='title text-orange-400 text-left uppercase leading-relaxed' > Request a Quote for a custom solution tailored to your needs. </span>",
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
        image: "/images/specific/Services/WebApp/iAssureIT-Web-App-Development-image-6.webp",
        imageCss:
            "mx-auto pt-20 sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
        // url: "/contact-us",
        // urlName: "Get a Quote",
        // linkCss: "text-white text-center  float-left font-bold text-lg md:text-xl p-2  2xl:px-2  mt-3 border w-1/2 sm:w-1/3 md:w-3/4  lg:w-3/4 xl:w-1/2 2xl:w-1/3 rounded btn hover:bg-offWhite hover:text-black mx-auto",
        modalurlName: "Get a Quote",
        modalDisplay: "true",
        modalBtnCss: "w-fit   text-btnBlue text-center font-bold text-lg md:text-xl lg:text-sm xl:text-lg 2xl:text-xl  py-2 px-10  2xl:px-6  mt-3 lg:mt-10 border  rounded btn bg-gray-100 hover:bg-offWhite hover:text-black cursor-pointer"

    };

    const content_SmallBanner2 = {
        id: "banner",
        bgImage: "/images/specific/Services/MobileApp/Images/12.webp",
        smallBGImage: "/images/specific/Services/MobileApp/Images/12.webp",
        title: "Crafting the Web Experience of Tomorrow, Today",
        titleClass:
            " text-center uppercase mx-auto  my-auto md:font-extrabold BlockTitle leading-tight",
        className: "h-auto w-full mx-auto",
        alt: "reserve",
        bgImgCss:
            "py-10 my-16 md:my-28 2xl:py-5 bg-cover bg-no-repeat  bg-left-bottom lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]",
        gridCss:
            "grid grid-cols-1  gap-x-10 h-full w-full content-center  place-content-center my-auto md:py-20",
        gridCol1Class: " my-auto w-full sm:w-auto  text-white py-7",
        para: "Meet the innovators and web-architects driving your digital transformations at iAssureIT.",
        paraCss:
            "BlockTitle uppercase text-white text-center md:text-center px-10 md:px-20 leading-tight",
        modalurlName: "Let's Connect",
        modalDisplay: "true",
        modalBtnCss: "w-fit  mx-auto text-btnBlue text-center font-bold text-lg md:text-xl lg:text-sm xl:text-lg 2xl:text-xl  py-2 px-10  2xl:px-6  mt-3 lg:mt-10 border  rounded btn bg-gray-100 hover:bg-offWhite hover:text-black cursor-pointer"

    };

    const content_carousel = {
        blockTitle: "CLIENTS TESTIMONIALS",
        classForblockTitle:
            "text-darkGray text-center font-bold text-md md:text-5xl py-10 lg:py-16",
        videos: [
            "/images/videos/Banner-1.mp4",
            "/images/videos/iAssureIT-Website-banner.mp4",
            "/images/videos/iAssureIT-Website-banner1.mp4",
            "/images/videos/Banner-1.mp4",
        ],
        txtBlkCss:
            "w-1/2 lg:w-1/3 object-cover bg-blue-300 gap-10 p-4 slide rounded-lg cursor-pointer",
        dash: "border-blue-700  mb-5 md:mb-5",
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
    const content_custAquisitions = {
        id: "webAppAquisitions",
        bgImage: "/images/specific/Services/MobileApp/Images/14.webp",
        bgImgCss: "lazyload",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/3.webp",


        paraTitle:
            "<span class='text-white font-bold  leading-relaxed uppercase'> Desire an online presence that stands out? Develop cutting-edge, user-friendly web apps tailored for the future, and ensure your customers stay engaged. <br/> <span class='title text-orange-400 text-left ' > Let iAssureIT be the digital bridge to your clientele.</span>",
        paraTitleClass: "title text-left md:text-left font-normal",
        gridColCss:
            "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-16    lg:pl-20 xl:px-4 2xl:px-20 xxl:px-32",
        gridClass:
            "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass:
            "object-fit mt-10 py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/WebApp/iAssureIT-Web-App-Development-image-9.webp",
        imageCss:
            "mx-auto mt-20 md:py-20 sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
        modalurlName: "Get a Quote",
        modalDisplay: "true",
        modalBtnCss: "w-fit   text-btnBlue text-center font-bold text-lg md:text-xl lg:text-sm xl:text-lg 2xl:text-xl  py-2 px-10  2xl:px-6  mt-3 lg:mt-10 border  rounded btn bg-gray-100 hover:bg-offWhite hover:text-black cursor-pointer"

        // url: "/contact-us",
        // urlName: "Contact Us",
        // linkCss: "text-white text-center font-bold text-lg md:text-xl p-2  2xl:px-2  mt-3 border w-1/2 sm:w-1/3 md:w-3/4  lg:w-3/4 xl:w-1/2 2xl:w-1/3 rounded btn hover:bg-offWhite hover:text-black mx-auto",
    };
    const content_CenterContentRepeatableBlocks = {
        id: "Services",
        blockTitle:
            "<span class='leading-tight'>TRANSFORM BITS INTO BUSINESS BRILLIANCE WITH <span/><br/> <span class='leading-relaxed font-extrabold uppercase'>OUR WEB APP DEVELOPMENT SERVICES</span>",
        blockContent:
            "<span class='font-bold text-2xl md:text-2xl xl:text-3xl  leading-loose '>Web-App Development </span><br/><span> Our Web App Development Services include: </span> ",

        classForblockTitle: " w-full text-center  text-2xl md:text-3xl xl:text-4xl xl:py-5 py-10  px-2 md:px-none",
        classForNoOfCards: "px-10 lg:px-32 2xl:px-48 lg:mt-5  max-w-8xl text-center justify-evenly grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-6",
        classForCards: " border shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white p-4 md:p-10 lg:p-5 2xl:p-10 mb-7 rounded-xl",
        classForCardTitle: "text-center  text-darkGray text-xl md:text-xl lg:text-2xl xl:text-[22px] 2xl:text-[22px]  font-bold p-3 pt-3 md:pt-4 2xl:pt-6",
        classForCardTitle_2: "font-bold text-md text-primary dark:text-primary-400 p-5",
        classForCardImage: "w-auto 2xl:w-auto mx-auto p-5 xl:p-5 2xl:p-5 lazyload bg-gray-100 rounded-full ",
        classForblockContent:
            "text-center mb-3",
        // blockContent           : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        classForImg:
            "p-10 overflow-hidden bg-cover bg-no-repeat  lg:p-8 -mt-24 lg:-mt-28 xl:-mt-28 2xl:-mt-24",
        displayAnimation: "true",
        cardsArray: [
            {
                id: "webservice1",
                cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-1.webp",
                altImage: "imageDescription",
                cardTitle: "Custom Web App Development ",
                classForContent:
                    "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content:
                    "Ensuring a seamless experience across devices, be it mobile, tablet, or desktop. ",
            },
            {
                id: "webservice2",
                cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-2.webp",
                altImage: "imageDescription",
                cardTitle: "Scalable Architecture",
                classForContent:
                    "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content:
                    "uilding a foundation that grows with your business needs without hitches.  ",
            },
            {
                id: "webservice3",
                cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-3.webp",
                altImage: "imageDescription",
                cardTitle: "API Integration",
                classForContent:
                    "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content:
                    "Seamless integration with other systems, ensuring your web app plays well with others. ",
            },
            {
                id: "webservice4",
                cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-4.webp",
                altImage: "imageDescription",
                cardTitle: "Performance Optimization ",
                classForContent:
                    "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content:
                    "Speed and responsiveness are key; we ensure your app runs smoothly and quickly. ",
            },
            {
                id: "webservice5",
                cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-5.webp",
                altImage: "imageDescription",
                cardTitle: "Robust Security Measures",
                classForContent:
                    "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content:
                    "Protecting your data and your users from potential threats with top-tier security protocols. ",
            },

            {
                id: "webservice6",
                cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-6.webp",
                altImage: "imageDescription",
                cardTitle: "Database Management",
                classForContent:
                    "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content:
                    "Efficiently organizing, storing, and retrieving your app's data. ",
            },
            {
                id: "webservice7",
                cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-7.webp",
                altImage: "imageDescription",
                cardTitle: "User-friendly Interface",
                classForContent:
                    "justify-content h-auto text-center text-lightGray my-auto sutext-lg md:text-2xl xl:text-2xlbTitle",
                content:
                    "An intuitive design ensuring easy navigation and pleasant user experience.",
            },
            {
                id: "webservice8",
                cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-8.webp",
                altImage: "imageDescription",
                cardTitle: "Ongoing Maintenance and Support",
                classForContent:
                    "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content:
                    "We're with you for the long haul, ensuring your app stays up-to-date and glitch-free. ",
            },
        ],
        dash: "border-blue-700 mt-10 lg:mt-20"
    };
    const content_CenterContentRepeatableBlocks2 = {
        id: "Services2",
        blockContent:
            "<span class=' font-bold text-3xl md:text-2xl xl:text-3xl leading-loose mb-10 mt-10'>Business Portal  </span><br/><span> Our Business Portal Services include: </span> ",
        classForblockTitle: " w-full text-center  text-2xl md:text-3xl xl:text-4xl xl:py-5 py-10  px-2 md:px-none",
        classForNoOfCards: "px-10 lg:px-32 2xl:px-48 lg:mt-5  max-w-8xl text-center justify-evenly grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-6",
        classForCards: " border shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white p-4 md:p-10 lg:p-5 2xl:p-10 mb-7 rounded-xl",
        classForCardTitle: "text-center  text-darkGray text-xl md:text-xl lg:text-2xl xl:text-[22px] 2xl:text-[22px]  font-bold p-3 pt-3 md:pt-4 2xl:pt-6",
        classForCardTitle_2: "font-bold text-md text-primary dark:text-primary-400 p-5",
        classForCardImage: "w-auto 2xl:w-auto mx-auto p-5 xl:p-5 2xl:p-5 lazyload bg-gray-100 rounded-full ",
        classForblockContent:
            "text-center mb-5 mt-10",
        // blockContent           : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        classForImg:
            "p-10 overflow-hidden bg-cover bg-no-repeat  lg:p-8 -mt-24 lg:-mt-28 xl:-mt-28 2xl:-mt-24",
        displayAnimation: "true",
        cardsArray: [
            {
                id: "service1",
                cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-1.webp",
                altImage: "imageDescription",
                cardTitle: "Custom Business Portal Development",
                classForContent:
                    "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content:
                    "Crafted solutions that meet the specific requirements of your organization. ",
            },
            {
                id: "service2",
                cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-2.webp",
                altImage: "imageDescription",
                cardTitle: "Centralized Information Hub",
                classForContent:
                    "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content:
                    "A single point of access for all your crucial business data. ",
            },
            {
                id: "service3",
                cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-3.webp",
                altImage: "imageDescription",
                cardTitle: "Secure User Authentication",
                classForContent:
                    "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: "Making sure only authorized personnel have access. ",
            },
            {
                id: "service4",
                cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-4.webp",
                altImage: "imageDescription",
                cardTitle: "Workflow Automation",
                classForContent:
                    "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content:
                    "Streamlining processes to improve efficiency and reduce manual interventions. ",
            },
            {
                id: "service5",
                cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-5.webp",
                altImage: "imageDescription",
                cardTitle: "Integration with Third-Party Systems",
                classForContent:
                    "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content:
                    "Making your portal a well-connected hub, integrating with other tools and systems you use.  ",
            },

            {
                id: "service6",
                cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-6.webp",
                altImage: "imageDescription",
                cardTitle: "Reporting and Analytics",
                classForContent:
                    "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content:
                    "Offering insights and data-driven decisions from your portal's  activity.  ",
            },
            {
                id: "service7",
                cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-7.webp",
                altImage: "imageDescription",
                cardTitle: "Collaborative Tools",
                classForContent:
                    "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content:
                    "Enhancing team collaboration with built-in communication and project management tools.",
            },
            {
                id: "service8",
                cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-8.webp",
                altImage: "imageDescription",
                cardTitle: "User Access Control",
                classForContent:
                    "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content:
                    "Defining and managing user roles and permissions for data security. ",
            },
            {
                id: "service9",
                cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-9.webp",
                altImage: "imageDescription",
                cardTitle: "Scalable Architecture",
                classForContent:
                    "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content:
                    " Building it right from the start, ensuring your portal can handle growth and expansion. ",
            },
            {
                id: "service10",
                cardImage: "/images/specific/Services/ServicesIcons/iAssureIT-icon-1.webp",
                altImage: "imageDescription",
                cardTitle: "Ongoing Support and Maintenance",
                classForContent:
                    "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content:
                    " Our commitment doesn't end at launch; we're here to support you continuously.  ",
            },
        ],
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
        bgImgCss: "lazyload ",
        paraTitle:
            "<span class='text-white  font-bold uppercase leading-relaxed'> Desire an online presence that stands out? Develop cutting-edge, user-friendly web apps tailored for the future, and ensure your customers stay engaged,<br/> <span class='title text-orange-400 text-left uppercase' > Let iAssureIT be the digital bridge to your clientele. </span>",
        paraTitleClass: "title text-left font-normal leading-tight",
        gridColCss:
            "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
        gridClass:
            "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center py-5 md:py-20",
        bannerClass:
            "py-32 md:py-2 object-fit  bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/WebApp/iAssureIT-Web-App-Development-image-10.webp",
        imageCss:
            "mx-auto  sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "md:mt-20 mx-auto lazyload",
        modalurlName: "Connect With Us",
        modalDisplay: "true",
        modalBtnCss: "w-fit   text-btnBlue text-center font-bold text-lg md:text-xl lg:text-sm xl:text-lg 2xl:text-xl  py-2 px-10  2xl:px-6  mt-3 lg:mt-10 border  rounded btn bg-gray-100 hover:bg-offWhite hover:text-black cursor-pointer"

    };
    const content_Technology = {
        blockTitle: "OUR RANGE OF <span class='font-extrabold uppercase'>WEB APP TECHNOLOGIES</span>",
        blockSubTitle: "Our success is a result of teamwork and building upon our technical expertise and creative style providing a full-service solution to our clients.",
        classForblockSubTitle: "lg:w-3/4 xl:w-4/5 2xl:w-4/5  mx-auto text-center font-normal text-darkGray mb-10 bodyTxt",
        classForblockTitle: "w-full text-center BlockTitle xl:py-5 py-3 md:py-10  leading-tight",
        classForNoOfCards: "px-10 pb-10 lg:px-20 2xl:px-52 lg:mt-5  max-w-8xl text-center justify-evenly mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-x-4 lg:gap-x-8 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-10 mx-auto",
        classForCards: " text-white  mb-7 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]",
        classForCardTitle: "text-center font-bold text-xl md:text-xl lg:text-3xl p-3",
        classForCardTitle_2: "font-bold text-md text-primary dark:text-primary-400",
        classForCardImage: "w-full rounded-full pb-5",
        bgImgCss: "relative bg-cover p-12 md:p-3  block  bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload ",
        cardsArray: [

            {
                cardImage: '/images/specific/Services/Technologies/Background.webp',
                cardTitle: 'Front End Technologies',
                imageArr: ["/images/specific/Services/Technologies/Front End/1.webp",
                    "/images/specific/Services/Technologies/Front End/2.webp",
                    "/images/specific/Services/Technologies/Front End/3.webp",
                    "/images/specific/Services/Technologies/Front End/4.webp",
                    "/images/specific/Services/Technologies/Front End/5.webp",
                    "/images/specific/Services/Technologies/Front End/6.webp",
                    "/images/specific/Services/Technologies/Front End/7.webp",
                    "/images/specific/Services/Technologies/Front End/8.webp",
                    "/images/specific/Services/Technologies/Front End/9.webp",]
            }, {
                cardImage: '/images/specific/Services/Technologies/Background.webp',
                cardTitle: 'Back End Technologies',
                imageArr: ["/images/specific/Services/Technologies/Back End/1.webp",
                    "/images/specific/Services/Technologies/Back End/2.webp",
                    "/images/specific/Services/Technologies/Back End/3.webp",
                    "/images/specific/Services/Technologies/Back End/4.webp",
                    "/images/specific/Services/Technologies/Back End/5.webp",]
            }, {
                cardImage: '/images/specific/Services/Technologies/Background.webp',
                cardTitle: 'Database Technologies',
                imageArr: ["/images/specific/Services/Technologies/Databases/1.webp",
                    "/images/specific/Services/Technologies/Databases/2.webp",
                    "/images/specific/Services/Technologies/Databases/3.webp",
                    "/images/specific/Services/Technologies/Databases/4.webp",
                    "/images/specific/Services/Technologies/Databases/5.webp",
                    "/images/specific/Services/Technologies/Databases/6.webp",]
            }, {
                cardImage: '/images/specific/Services/Technologies/Background.webp',
                cardTitle: 'Cloud Technologies',
                imageArr: ["/images/specific/Services/Technologies/DevOps/1.webp",
                    "/images/specific/Services/Technologies/DevOps/2.webp",
                    "/images/specific/Services/Technologies/DevOps/3.webp",
                    "/images/specific/Services/Technologies/DevOps/4.webp",

                    "/images/specific/Services/Technologies/DevOps/7.webp",]
            },
            {
                cardImage: '/images/specific/Services/Technologies/Background.webp',
                cardTitle: 'Others Technologies',
                imageArr: ["/images/specific/Services/Technologies/Front End/1.webp",
                    "/images/specific/Services/Technologies/DevOps/5.webp",
                    "/images/specific/Services/Technologies/DevOps/6.webp",
                ]
            },],
        dash: "border-blue-700 mb-0  md:mb-0 ",
    }
    const content_MobileAppTechnology = {
        id: "MobileAppTechnology",
        blockTitle:
            "OUR RANGE OF <span class='font-extrabold uppercase'>WEB APP TECHNOLOGIES</span>",
        classForblockTitle: " w-full text-center BlockTitle xl:py-5 py-10 ",
        classForNoOfCards:
            "px-10 pb-10 lg:px-20 2xl:px-52 lg:mt-5  max-w-8xl text-center justify-evenly mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 lg:gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-6",
        classForCards:
            " border shadow-[0_3px_10px_rgb(0,0,0,0.2)] 2xl:py-5 text-white  mb-7 rounded-xl",
        classForCardTitle: "text-center  text-darkGray title p-3 smTxt",
        classForCardTitle_2:
            "font-bold text-md text-primary dark:text-primary-400 p-5",
        classForCardImage: "mx-auto p-10 2xl:p-5 xxl:p-10 lazyload  rounded-full",
        classForblockContent:
            "lg:w-3/4 xl:w-4/5 2xl:w-4/5  mx-auto text-center font-normal text-darkGray mb-10 bodyTxt",
        blockContent: "Our web app development is driven by a passion for technology and innovation, ensuring we deliver future-ready solutions that set industry benchmarks.",
        cardsArray: [
            {
                cardImage: "/images/specific/Services/MobileApp/TechnologyStack/9.webp",
                altImage: "imageDescription",
                cardTitle: "iOS App developers",
            },
            {
                cardImage:
                    "/images/specific/Services/MobileApp/TechnologyStack/10.webp",
                altImage: "imageDescription",
                cardTitle: "Android App developers ",
            },
            {
                cardImage: "/images/specific/Services/MobileApp/TechnologyStack/6.webp",
                altImage: "imageDescription",
                cardTitle: "Swift App developers",
            },
            {
                cardImage: "/images/specific/Services/MobileApp/TechnologyStack/5.webp",
                altImage: "imageDescription",
                cardTitle: "Kotlin App developers ",
            },
            {
                cardImage: "/images/specific/Services/MobileApp/TechnologyStack/3.webp",
                altImage: "imageDescription",
                cardTitle: "React Native App developers ",
            },
            {
                cardImage: "/images/specific/Services/MobileApp/TechnologyStack/8.webp",
                altImage: "imageDescription",
                cardTitle: "Flutter App developers",
            },
            {
                cardImage:
                    "/images/specific/Services/MobileApp/TechnologyStack/11.webp",
                altImage: "imageDescription",
                cardTitle: "Xamarin App developers",
            },
        ],
        dash: "border-blue-700",
    };
    const content_CaseStudy = {
        sectionCss: "py-10 md:py-20 bg-light",
        blockTitle: " CASE STUDIES",
        blockSubTitle: "We shed light on our work and what goes behind the development",
        classForblockTitle: " text-darkGray w-full BlockTitle text-center font-extrabold ",
        classForblockSubTitle: "text-center text-darkGray bodyTxt  font-normal mb-10 leading-loose",
        classForNoOfCards: "px-10 lg:px-20  max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6",
        classForCards: "p-3  mb-7 rounded-md",
        classForCardTitle: "text-darkGray text-center font-semibold text-xl md:text-xl lg:text-2xl p-3",
        classForCardImage: "w-full rounded-md bg-white p-5 border",
        urlName: "/case-study",
        // btnName: "View All",
        btnClass: " text-white  rounded text-sm float-right py-2 px-4 bg-blue-800 ",
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
        sectionClass: "mx-auto text-center p-10 md:p-8 md:container mt-20",
        pageTitle: "<span class='font-extrabold'>Why Choose iAssureIT?</span> ",
        pageTitleCss: "w-full text-center   BlockTitle leading-tight ",
        bgImage: "/images/specific/Services/WebApp/iAssureIT-Web-App-Development-image-11.webp",
        bgImageCss: "w-full h-auto object-cover ls-is-cached lazyloaded",
        bigImageAlt: "BigImage",
        gridCss: "grid grid-cols-1 lg:grid-cols-2 md:gap-10",
        gridCol1Css: "w-2/3 h-auto relative my-auto  mx-auto",
        repeatedBlkCss: " shadow-none flex items-start sm:h-36 md:h-auto my-6  ",
        imgCss:
            "flex-none bg-purple h-auto   items-start rounded mr-3 md:mr-10 object-cover shadow-[4.0px_8.0px_8.0px_rgba(97,143,237,0.8)]",
        titleCss: "text-lg md:text-2xl xl:text-[1.2rem] font-bold mb-2",
        desCss: "text-gray-700 text-[18px] sm:text-base overflow-hidden",
        linkCss: "float-right px-4 text-skyBlue",
        repeatedBlocks: [
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Expertise",
                description:
                    "A dedicated team of security experts, always on the front lines of cybersecurity",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Quality Assurance",
                description:
                    "Rigorous testing to ensure your defenses are both resilient and adaptive. ",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Custom Solutions",
                description:
                    "Personalized security protocols aligned with your specific business requirements and threat landscape. ",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Continuous Support",
                description:
                    " An ongoing partnership, always adapting and fortifying defenses in light of new challenges. ",
            },
        ],
        dash: "border-blue-700 mb-5 ",
    };

    const content_profitMargin = {
        id: "comprehnsiveService",
        bgImage: "/images/specific/Services/MobileApp/Images/20.webp",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/5.webp",
        bgImgCss: "lazyload",
        paraTitle:
            "<span class='uppercase leading-relaxed'>Get Started Today <br/> Contact Us to discuss your digital transformation journey. <br/> </span> <span class='title text-orange-400 text-left uppercase leading-relaxed'> Download Our Service Brochure Click Here to download and learn more about our comprehensive services. </span>",
        paraTitleClass: "title text-white text-left leading-tight",
        gridColCss:
            "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
        gridClass:
            "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass:
            "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/WebApp/iAssureIT-Web-App-Development-image-12.webp",
        imageCss:
            "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: " w-2/3 lg:mt-20 mx-auto my-auto lazyload",
        modalurlName: "Let's Connect",
        modalDisplay: "true",
        modalBtnCss: "w-fit   text-btnBlue text-center font-bold text-lg md:text-xl lg:text-sm xl:text-lg 2xl:text-xl  py-2 px-10  2xl:px-6  mt-3 lg:mt-10 border  rounded btn bg-gray-100 hover:bg-offWhite hover:text-black cursor-pointer"

    };
    const content_accordion = {
        id: "WebAppFAQ",
        dash: "border-blue-700 md:mb-5 mt-16",
        pageTitle: "FAQS",
        pageTitleCss:
            " text-gray w-full text-center font-extrabold BlockTitle mb-10",
        accordionData: [
            {
                title: "What is custom web-app development at iAssureIT?",
                content:
                    "Custom web-app development at iAssureIT involves creating a web application tailored to the specific needs and requirements of a client, ensuring a unique and personalized solution.",
            },
            {
                title:
                    "How does iAssureIT ensure the web-app is responsive across devices? ",
                content:
                    "Our development process incorporates responsive design techniques. This ensures that the web-app provides a seamless experience, be it on desktop, tablet, or mobile. ",
            },
            {
                title: "Do you provide support post-launch of the web-app? ",
                content:
                    "Absolutely! iAssureIT offers ongoing maintenance and support, ensuring your web-app remains up-to-date, secure, and free of any glitches.",
            },
            {
                title: "What security measures does iAssureIT implement for web-apps? ",
                content:
                    "We adopt a multi-layered approach to security, implementing robust protocols, data encryption, and regular security audits to safeguard against potential threats. ",
            },
            {
                title:
                    "What can I expect from the custom business portal development? ",
                content:
                    "Our custom business portal development ensures that your portal is tailor-made to cater to your business's unique workflow, needs, and objectives, enhancing efficiency and user experience.",
            },
            {
                title: "How does the centralized information hub function? ",
                content:
                    "The centralized information hub offers a single point of access to crucial business data,  ensuring streamlined operations, easy data retrieval, and efficient management. ",
            },
            {
                title:
                    "How secure is the user authentication for the business portal? ",
                content:
                    "iAssureIT prioritizes security. Our business portals feature advanced authentication protocols, multi-factor authentication, and encrypted user data to ensure only authorized personnel have access.",
            },
            {
                title:
                    "Can the business portal integrate with other third-party systems we use? ",
                content:
                    "Yes, our business portals are designed for seamless integration with various third-party tools and systems, ensuring a well-connected, holistic business ecosystem. ",
            },
            {
                title:
                    "Do you offer ongoing support for the business portal post-deployment? ",
                content:
                    "Absolutely! We believe in long-term partnerships. iAssureIT provides continuous support and maintenance, ensuring your business portal remains optimal, secure, and in tune with your evolving business needs. ",
            },
        ],
    };
    const content_BlogList = {
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
        pageTitleCss: " text-white  w-full text-center font-extrabold text-3xl md:text-3xl xl:text-5xl",
        gridColCss: "my-auto w-full sm:w-2/3 md:w-3/5 rounded-4 lg:w-4/5 xxl:!w-3/5  mx-auto lg:mx-0 text-darkGray content-center  place-content-center  justify-center  px-5  2xl:px-2 md:pl-6 md:pl-16 lg:px-0 xl:pl-4 2xl:pl-40 xxl:pl-40 md:-mt-5",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 place-content-center  lg:h-full   xl:h-full h-full content-center md:py-10 ",
        gridCol1Css: "mt-3 md:mt-0",
        bannerClass: "object-fit pt-72 pb-60  md:pt-72 md:pb-48 md:bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/UI-UX-Development/iAssureIT-contact-us-1.webp",
        imageCss: "mx-auto pt-2 pb-20 sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
        imgTpText: "<span class='leading-loose'> Now why to wait? </span><br/> Contact Us immediately ",
        imgTpTextClass: "text-white  w-full text-center font-extrabold text-xl md:text-3xl xl:text-4xl leading-tight",
        dash: "border-white  mb-5 md:mb-3 mt-5 md:mt-12 lg:mt-2",
        showForm: "true",
        formCss: " p-6 -mt-16 md:-mt-16 lg:-mt-12 bg-white md:p-10 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
    }

    const content_CenterImgLeftRightRepeatableBlocks = {
        id: "webAppBlk3",
        bgImage: "/images/specific/Services/MobileApp/Images/4.webp",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/2.webp",
        bgImgCss:
            " object-fit py-48 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload",

        blockTitle:
            "<span class='uppercase leading-relaxed'>Pioneering Your</span>  <br/><span class='font-extrabold uppercase'>Web Development Journey </span>",
        classForLeftImageContainer: " text-center ",
        classForblockTitle: "BlockTitle text-white w-full text-center font-normal pb-10 leading-tight",
        classForblockContent: "px-10 lg:px-20 xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
        imageSrc: "/images/specific/Services/WebApp/iAssureIT-Web-App-Development-image-3.webp",
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
        classForContainer: "grid grid-cols-1 md:grid-cols-3 px-2 lg:px-5  xl:px-16 2xl:px-48 py-12 2xl:pt-5 md:pb-20",
        classForLeftBlockContainer: "w-full  p-2 item-center my-auto place-content-center content-center",
        classForLeftContentContainer: "w-full rounded overflow-hidden  mb-4 ",
        classForLeftContentinsideContainer: "w-auto p-4 text-right my-auto",
        classForLeftContenTitleStyle: "font-normal text-white text-left sm:text-lg xl:text-[16px] 2xl:text-lg mb-2 lg:ml-5 xl:ml-0",
        classForRightContenTitleStyle: "font-normal text-white  text-left md:text-right sm:text-lg xl:text-[16px] 2xl:text-lg mb-2 lg:mr-5 xl:mr-0",
        leftBlocks: [
            {
                leftTitle:
                    "We guarantee top-tier performance and seamless user experience across all devices.",
                img: "/images/specific/Services/MobileApp/Icons/1.webp",
            },
            {
                leftTitle:
                    " Ingenuity and solution-oriented thinking are at the heart of our development approach.",
                img: "/images/specific/Services/MobileApp/Icons/2.webp",
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
                leftTitle:
                    "Beyond a team, we're a brigade of 150+ dedicated web professionals. ",
                img: "/images/specific/Services/MobileApp/Icons/3.webp",
            },
            {
                leftTitle:
                    "Our expertise is proven with over 250+ triumphant web-app projects in our portfolio. ",
                img: "/images/specific/Services/MobileApp/Icons/4.webp",
            },
        ],
        dash: "border-white  mb-5 md:mb-3 mt-10 md:mt-16",
    };
    const content_ProblemAns1 = {
        blockTitle:
            " <span class='font-extrabold uppercase'>Challenges Faced By Businesses  <br/></span> <span class='font-normal uppercase '>  User Experience Across Multiple Devices</span>",
        blockTitle: " <span class='font-extrabold'>THE TOP CHALLENGES IN <br/></span> <span class='font-normal leading-relaxed '> CRAFTING A POWERFUL WEB APP </span>",
        classForblockTitle: "w-full text-center  text-2xl md:text-3xl xl:text-4xl px-3 md:px-0  ",
        dash: "border-blue-700 mb-5 mt-10",
        grid1Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-10  content-center",

        img1GridCss: " m-auto h-auto my-auto",
        img1: "/images/specific/Services/WebApp/iAssureIT-Web-App-Development-image-4.webp",
        content1Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title1: "PROBLEM",
        title1Css: "text-2xl md:text-3xl xl:text-3xl   font-extrabold text-left",

        subTitle1:
            "Businesses today grapple with a variety of challenges when it comes to digital solutions such as Website Development, Web-App Development, and Business Portal Development:",
        subTitle1Css: "font-semibold text-lg md:text-xl xl:text-2xl   my-3",
        para1:
            "Ensuring seamless user experience across different devices can be challenging. ",
        para1Css: "font-normal text-lg md:text-xl xl:text-xl  leading-relaxed",
        grid2Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20 md:mt-8",
        // img2GridCss:"",
        img2: "/images/specific/Services/WebApp/iAssureIT-Web-App-Development-image-5.webp",
        content2Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",

        title2: "iAssureIT Solution ",
        subTitle2: "One App, Every Device with iAssureIT",
        para2:
            "Our expertise in Responsive Web Design ensures that your website or web application adapts seamlessly across all devices, offering a consistent and user-friendly experience.",
    };
    const content_ProblemAns2 = {
        grid1Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-10",
        img1GridCss: "m-auto",
        img1: "/images/specific/Services/WebApp/iAssureIT-Web-App-Development-image-7.webp",
        content1Css:
            "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title1: "PROBLEM",
        title1Css: "text-2xl md:text-3xl xl:text-3xl   font-extrabold text-left",
        subTitle1: "Scalability and Performance:",
        subTitle1Css: "font-semibold text-lg md:text-xl xl:text-2xl   my-3",
        para1:
            "Adapting to increased user traffic and data volume while maintaining performance. ",
        para1Css: "font-normal text-lg md:text-xl xl:text-xl  leading-relaxed",
        grid2Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20 md:mt-8",
        // img2GridCss:"",
        img2: "/images/specific/Services/WebApp/iAssureIT-Web-App-Development-image-8.webp",
        content2Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title2: "iAssureIT Solution ",
        subTitle2: "",
        para2:
            "We focus on Scalable Architecture in both web-app and business portal development, allowing your digital solution to handle growth effectively without compromising on performance. ",
        paraCss2: "",
        // listData: [
        //     "Our team employs user-centric design principles to create interfaces that resonate with your target audience. ",
        //     "We conduct in-depth user research to guarantee your app aligns perfectly with user preferences and behaviors."
        // ],
        // listCss: "font-normal bodyTxt px-5 list-decimal py-2 md:px-7"
    };

    return (
        <div>
            {isModalOpen && <LandingPageModal modalId="webAppFormModal" />}

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
            <div onClick={() => setModalOpen(!isModalOpen)} className=" w-full ">
                <div className=" cursor-pointer text-white mx-auto text-center font-bold text-lg md:text-xl p-2  2xl:px-2  mt-3 xl:mt-8 2xl:mt-10 border w-48 md:w-48  lg:w-64 xl:w-48 2xl:w-48 rounded btn bg-blue-600 hover:bg-blue-800 hover:text-white">Get In Touch
                    <i className="ml-1 fa-solid fa-angle-double-right"></i>
                </div>
            </div>
            <ProblemSolutionBlk inputData={content_ProblemAns1} />
            <BgImgRightContent inputData={content_developerBlk} />
            <ProblemSolutionBlk inputData={content_ProblemAns2} />
            <SmallBanner inputData={content_SmallBanner2} />
            {/* <MultipleImagesCarousel inputData={content_carousel} showVideos={true} /> */}
            <Autocarousel inputData={content_carousel2} />
            <Autocarousel inputData={content_carouselLeft} />
            <BgImgRightContent inputData={content_custAquisitions} />
            <CenterContentRepeatableBlocks
                inputData={content_CenterContentRepeatableBlocks}
            />
            <CenterContentRepeatableBlocks
                inputData={content_CenterContentRepeatableBlocks2}
            />
            <div onClick={() => setModalOpen(!isModalOpen)} className=" w-full cursor-pointer">
                <div className=" text-white mx-auto text-center font-bold text-lg md:text-xl p-2  2xl:px-2  mt-3 xl:mt-8 2xl:mt-10 border w-48 md:w-48  lg:w-64 xl:w-48 2xl:w-48 rounded btn bg-blue-600 hover:bg-blue-800 hover:text-white">
                    Let's Talk
                    <i className="ml-1 fa-solid fa-angle-double-right"></i>
                </div>
            </div>
            <BgImgLeftImgRtGrid inputData={content_nationalAwards} />
            <Technology inputData={content_Technology} />
            <BgImgRightContent inputData={content_custBase} />

            <OurPortfolio inputData={content_CaseStudy} />

            <BgImgRightContent inputData={content_profitMargin} />

            <LeftImgRightRepeatableBlk inputData={content_WhyChoose} readMore={false} />

            <BgImgRightContent inputData={content_contactUs} />
            <AccordionBlock inputData={content_accordion} />
        </div>
    );
}

//PB added metaData
WebAppDevelopment.getInitialProps = async () => {
    // Perform data fetching here (e.g., making API requests)
    var url = '/services/web-app-development'
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
export default WebAppDevelopment;