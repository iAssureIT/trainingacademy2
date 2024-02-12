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
import DummyBlk from "@/templates/DummyBlock/DummyBlk";
import AccordionBlock from "@/templates/Accordion/AccordionBlock";
import BlogsList from "@/templates/Blog/BlogsList";
import CenterImgLeftRightRepeatableBlocks from "@/templates/RepeatableBlocks/CenterImgLeftRightRepeatableBlocks/page"
import SmallBanner from "@/templates/BannerBlocks/SmallBanner/SmallBanner";
import ProblemSolutionBlk from "@/templates/ContentBlocks/ProblemSolutionBlk/ProblemSolutionBlk";
import Autocarousel from "@/components/Autocarousel";
import CustomHead from "@/templates/CustomHead/CustomHead";

const CloudSecurity = ({ data }) => {
    const content_leftContentBgImg = {
        id: "",
        bgImage: "/images/specific/Services/MobileApp/Images/1.webp",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/1.webp",
        logo: "",
        h1TxtLine1: "CLOUD",
        h1TxtLine1Css: " font-DrukText text-5xl md:text-3xl xl:text-8xl font-extrabold text-center md:text-left   place-content-left  justify-center content-left mb-5 ",
        h1TxtLine2: "SECURITY",
        h1TxtLine2Css: "outline-title  font-DrukText font-bold text-5xl md:text-3xl xl:text-8xl text-center md:text-left   place-content-left  justify-center content-left mb-5 ",
        bgImgCss: " py-20 h-auto md:h-screen xl:h-[990px] lazyload object-fit bg-cover bg-no-repeat relative  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        para: "iAssureIT -Pioneering Cloud Security Excellence  ",
        paraCss: " font-DrukText lcamelcase text-normal text-center md:text-left text-2xl md:text-3xl xl:text-5xl ",
        // gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  md:grid-cols-2  lg:h-screen  xl:h-screen h-screen  ",
        gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2   md:grid-cols-2  py-10  md:py-20 xl:py-0 2xl:py-20 h-auto md:h-full lg:h-full   xl:h-full 2xl:h-full  ",
        gridSubDivCss: " pb-32 md:pb-10 lg:pb-16 2xl:pb-48 my-auto text-white   md:pl-32 lg:pl-20 xl:pl-32 2xl:pl-60",
        image: "/images/specific/Services/CloudSecurity/iAssureIT-cloud-security-1.webp",
        imageCss: '  w-2/3 xl:w-4/5 2xl:w-full mx-auto my-auto object-fit lazyload place-content-center object-center ',
        imgTagcss: "lazyload  -mt-20    ",
        borderColor: "border-darkBlue",
    }
    const content_BgImgRightTxt_3 = {
        paraTitle: "<p>At iAssureIT, we offer robust cloud security services, ensuring that organizations can trust their cloud environment. Their expertise extends from deep-rooted knowledge of cloud vulnerabilities  to implementing state-of-the-art protective measures. </p> <ul class='list-disc list-inside'><li>Comprehensive cloud security services, ensuring an impenetrable defense for your data, applications, and infrastructure. </li><li>Cloud security experts employ a systematic, research-oriented approach. </li><li>Boasting 150+ cloud security specialists ready to fortify your cloud infrastructure. </li><li>Proudly holding a legacy of over 200+ successful cloud security projects,  </li></ul>",
        paraTitleClass: "subTitle text-justify font-normal",
        bgImgCss: "lazyload",
        pageTitle: "<span class='font-normal uppercase'>Ensuring Secure Cloud Migrations, </span> <br/><span class='font-extrabold uppercase'>Protecting Your Assets </span>",
        pageTitleCss: "w-full text-center  BlockTitle leading-tight",
        gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5  md:pl-6 md:pl-16 lg:pl-20 2xl:pl-28 xxl:pl-40 xxl:px-10",
        // gridCol1Css: "w-1/2 mx-auto",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2 md:px-10 xl:px-20 2xl:px-32 xxl:px-48 lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit  bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/CloudSecurity/iAssureIT-cloud-security-2.webp",
        imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
        dash: "border-blue-700 mb-5 md:mb-3",
    }
    const content_developerBlk = {
        paraTitle: "<span class='text-light font-bold'> HIRE MOBILE APP DEVELOPERS!<br/> <span class='title text-orange-400 text-left' > START WITH A ONE WEEK TRIAL </span>",
        paraTitleClass: "title text-left font-normal leading-tight",
        bgImage: "/images/specific/Services/MobileApp/Images/9.webp",
        bgImgCss: "lazyload",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/3.webp",
        gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
        // gridCol1Css: "w-1/2 mx-auto",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/CloudSecurity/iAssureIT-cloud-security-6.webp",
        imageCss: "mx-auto pt-20 sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
    }
    const content_SmallBanner2 = {
        id: "cloudSmBanner",
        bgImage: "/images/specific/Services/MobileApp/Images/12.webp",
        smallBGImage: "/images/specific/Services/MobileApp/Images/12.webp",
        title: "Mitigate risks during transition and ensure secure storage. Experience the power of iAssure’s expert cloud services.",
        titleClass: " text-center mx-auto md:float-right my-auto font-extrabold BlockTitle leading-relaxed",
        className: "h-auto w-full mx-auto",
        alt: "reserve",
        bgImgCss: "py-10 mb-20 2xl:py-5 bg-cover bg-no-repeat  bg-left-bottom lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]",
        gridCss: "grid grid-cols-1 sm:grid-cols-1  md:grid-cols-1  lg:grid-cols-1 2xl:grid-cols-1 gap-x-10 h-full w-full content-center  place-content-center my-auto md:py-20",
        para: "<br/> Let’s Fortify Your Cloud Together!",
        paraCss: "BlockTitle font-extrabold text-light text-center md:text-center mx-2 md:mx-10 md:col-span-2 2xl:col-span-2 leading-loose"
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
        paraTitle: "<span class='text-light font-bold'> Optimize your data journey with our secure cloud transition and storage solutions,<br/> <span class='title text-orange-400 text-left' > Contact us today! </span>",
        paraTitleClass: "title text-left font-normal leading-tight",
        gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-16    lg:pl-20 xl:px-4 2xl:px-20 xxl:px-32",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/CloudSecurity/iAssureIT-cloud-security-9.webp",
        imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload xl:pt-28",
    }
    const content_CenterContentRepeatableBlocks = {
        id: "Services",
        blockTitle: " <span class='font-extrabold uppercase'>Our Pioneering Cloud Security Services</span>",
        classForblockTitle: " w-full text-center BlockTitle xl:py-5 py-10 ",
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
                cardTitle: 'Cloud Security Assessment',
                // cardTitle_2       : 'Block subtitle',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: " Dive deep into cloud infrastructure, pinpointing vulnerabilities and recommending enhancements. ",
            },
            {
                id: "service2",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-2.webp',
                altImage: 'imageDescription',
                cardTitle: 'Cloud Architecture Design and Review',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: "Crafting resilient cloud structures, compliant with industry standards. ",
            },
            {
                id: "service3",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-3.webp',
                altImage: 'imageDescription',
                cardTitle: 'Identity and Access Management (IAM)',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: "Ensuring restricted access, allowing only authorized personnel. ",
            },
            {
                id: "service4",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-4.webp',
                altImage: 'imageDescription',
                cardTitle: 'Data Encryption and Protection',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: "Safeguarding your data's integrity and confidentiality in the cloud. ",
            },
            {
                id: "service5",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-5.webp',
                altImage: 'imageDescription',
                cardTitle: 'Cloud Compliance and Governance',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: "Guiding you towards achieving and maintaining pivotal cloud compliance benchmarks. ",
            },
            {
                id: "service6",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-6.webp',
                altImage: 'imageDescription',
                cardTitle: 'Cloud Security Monitoring',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: "Real-time vigilance, instant incident response, and   maintaining a secure cloud environment. ",
            },
            {
                id: "service7",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-7.webp',
                altImage: 'imageDescription',
                cardTitle: 'Cloud Security Training and Awareness',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: "Educate and empower teams to understand and implement cloud security best practices. ",
            },
            {
                id: "service8",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-8.webp',
                altImage: 'imageDescription',
                cardTitle: 'Cloud Vendor Security Assessment',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: "Thoroughly vetting cloud service providers to ascertain their security measures meet your expectations. ",
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


    const content_OurPortfolio = {
        blockTitle:
            " <span clas='text-light font-normal'>OUR </span> <span class='font-extrabold'> LEADERSHIP </span>",
        blockSubTitle: "",
        classForblockTitle: "w-full text-center  leading-10 text-3xl md:text-3xl xl:text-5xl ",
        classForblockSubTitle:
            "lg:w-2/3 2xl:w-3/5 mx-auto text-center font-normal text-darkGray mb-10 bodyTxt",
        classForNoOfCards:
            "px-10 lg:px-20 3xl:px-72 py-20 max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-6",
        classForCards: "p-3  mb-7 rounded-md",
        classForCardTitle:
            "text-darkGray text-center  text-xl md:text-xl lg:text-xl font-bold pt-3",
        classForcardSubTitle: "text-center text-[20px] text-lightGray",
        classForCardImage: "w-full rounded-md bg-white p-3 border",
        cardsArray: [

            { cardImage: '/images/specific/Our-Leadership/Ashish-Sir.webp', altImg: 'portfolio', cardTitle: 'Mr. Ashish Naik', cardSubTitle: "MD & CEO" },
            { cardImage: '/images/specific/Our-Leadership/Asheesh-Dixit.webp', altImg: 'portfolio', cardTitle: 'Dr. Asheesh Dixit', cardSubTitle: "Chief Product & Operating Officer" },
            { cardImage: '/images/specific/Our-Leadership/Monalisa-Pratihari.webp', altImg: 'portfolio', cardTitle: 'Ms. Monalisa Pratihari', cardSubTitle: "HR Manager" },
            { cardImage: '/images/specific/Our-Leadership/Prajakta-Kulkarni.webp', altImg: 'portfolio', cardTitle: 'Ms. Prajakta Kulkarni', cardSubTitle: "Asst. Project Manager & Administrator" },
            { cardImage: '/images/specific/Our-Leadership/Anagha-Madhamshettiwar.webp', altImg: 'portfolio', cardTitle: 'Ms. Anagha Madhamshettiwar', cardSubTitle: "MERN Technical Architect" },
            { cardImage: '/images/specific/Our-Leadership/Avinash-Gaikwad.webp', altImg: 'portfolio', cardTitle: 'Mr. Avinash Gaikwad', cardSubTitle: "UI/UX & Graphic Designer" },
            { cardImage: '/images/specific/Our-Leadership/Manan-Mahajan.webp', altImg: 'portfolio', cardTitle: 'Ms. Manan Mahajan', cardSubTitle: "Software Testing Lead" },
            { cardImage: '/images/specific/Our-Leadership/Priyanka-Bhanwse.webp', altImg: 'portfolio', cardTitle: 'Ms. Priyanka Bhanvase', cardSubTitle: "MERN Tech Lead" },
            { cardImage: '/images/specific/Our-Leadership/Akash-Padmane.webp', altImg: 'portfolio', cardTitle: 'Mr. Akash Padmane', cardSubTitle: "Business Analyst" },


        ],
        dash: "border-blue-700 mb-5 ",
    };

    const content_custBase = {
        bgImage: "/images/specific/Services/MobileApp/Images/15.webp",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/6.webp",
        bgImgCss: "lazyload",
        paraTitle: "<span class='text-light font-bold'> LOOKING TO SHIELD YOUR DIGITAL ASSETS?  <span class='title text-orange-400 text-left' > SECURE, OPTIMIZE, AND FORTIFY YOUR CLOUD INFRASTRUCTURE? </span>",
        paraTitleClass: "title text-left font-normal leading-tight",
        gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit py-20 md:py-2 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
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
        sectionClass: "mx-auto text-center px-8 py-1 container md:mt-20",
        pageTitle: "<span class=' font-normal uppercase'>Why Opt for iAssureIT for</span> <br/> <span class='font-extrabold uppercase'>Cloud Security Solutions? </span> ",
        pageTitleCss: "w-full text-center   BlockTitle leading-tight ",
        bgImage: "/images/specific/Services/CloudSecurity/iAssureIT-cloud-security-11.webp",
        bgImageCss: 'w-full h-auto object-cover',
        bigImageAlt: "BigImage",
        gridCss: "grid grid-cols-1 lg:grid-cols-2 gap-10",
        repeatedBlkCss: " shadow-none flex items-start sm:h-36 md:h-auto my-10  ",
        imgCss: "flex-none bg-purple h-auto   items-start rounded mr-3 md:mr-10 object-cover shadow-[4.0px_8.0px_8.0px_rgba(97,143,237,0.8)]",
        titleCss: "subTitle font-bold mb-2",
        desCss: "text-gray-700 text-[18px]  sm:text-base overflow-hidden",
        linkCss: "float-right px-4 text-skyBlue",
        repeatedBlocks: [
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Expertise",
                description: "A dedicated team, seasoned in navigating the intricacies of cloud security. ",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Quality Assurance",
                description: "Rigorous tests and validation processes, assuring top-tier cloud security. ",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Tailored Solutions",
                description: "Designing cloud security measures aligned with your specific        business goals and cloud model. ",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Consistent Support",
                description: " Ensuring your cloud remains impregnable, adapting to the ever-changing cloud security landscape. ",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Customer Testimonials ",
                description: "",
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
        image: "/images/specific/Services/CloudSecurity/iAssureIT-cloud-security-10.webp",
        imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
    }
    const content_accordion = {
        dash: "border-blue-700 mb-5 mt-20",
        pageTitle: "FAQS",
        pageTitleCss:
            " text-gray w-full text-center font-extrabold BlockTitle mb-10",
        accordionData: [

            {
                title: 'What is the significance of Cloud Security? ',
                content: "Cloud Security is imperative as it safeguards an organization's data, applications, and infrastructure in the cloud. A robust cloud security system ensures the confidentiality, integrity, and availability of these assets, granting businesses the confidence to operate in the cloud seamlessly. "
            },

            {
                title: 'How does iAssureIT approach Cloud Security Assessment? ',
                content: 'At iAssureIT, the Cloud Security Assessment entails a thorough examination of cloud infrastructure. This involves pinpointing vulnerabilities, potential misconfigurations, and security risks, culminating in actionable recommendations. '
            },
            {
                title: 'Why is IAM crucial in Cloud Security? ',
                content: 'IAM or Identity and Access Management ensures that only authorized individuals have access to specific cloud resources, thereby preventing unauthorized intrusions and safeguarding sensitive data. '
            },
            {
                title: 'What role does Data Encryption play in Cloud Security? ',
                content: "Data Encryption is pivotal as it safeguards data during its transition to and storage within the cloud. It ensures data's confidentiality and integrity, granting businesses the confidence that their information remains uncompromised."
            },
            {
                title: 'How does iAssureIT assist with Cloud Compliance and Governance? ',
                content: "iAssureIT guides organizations in adhering to industry-specific cloud compliance benchmarks. This involves implementing necessary security frameworks and ensuring sustained adherence to privacy, security, and regulatory mandates. "
            },
            {
                title: 'How can organizations benefit from Cloud Security Training and Awareness? ',
                content: "Through iAssureIT's Cloud Security Training and Awareness programs, teams are educated about cloud security best practices. This not only equips them with essential knowledge but also empowers them to make informed decisions in the cloud sphere. "
            },
            {
                title: 'What does the Cloud Vendor Security Assessment entail? ',
                content: "iAssureIT’s Cloud Vendor Security Assessment is a rigorous examination of cloud service providers. It reviews their security policies, measures, and ensures we align with an organization's expectations, ensuring a safe cloud partnership.  "
            },
            {
                title: 'Why is cloud security monitoring essential? ',
                content: "Continuous monitoring is vital as it enables real-time detection of and response to security threats. This proactive approach ensures that potential breaches are swiftly addressed, minimizing possible damage.  "
            },
            {
                title: 'How does iAssureIT ensure Cloud Architecture is resilient? ',
                content: "By aiding in designing and reviewing cloud architectures, iAssureIT ensures we align with industry best practices. This results in a cloud structure that is not only efficient but also fortified against potential threats. "
            },
            {
                title: 'How can organizations get started with iAssureIT’s Cloud Security Services?  ',
                content: "Begin your fortified cloud journey with iAssureIT by reaching out today. Click on the 'Let’s  Fortify Your Cloud Together!' button to initiate the process. "
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

        blockTitle: "SECURE YOUR DATA <br/><span class='font-extrabold uppercase'>Empower Your Business</span>",
        classForLeftImageContainer: " text-center ",
        classForblockTitle: "BlockTitle text-light w-full text-center font-normal pb-10 leading-tight",
        classForblockContent: "px-10 lg:px-20 xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
        imageSrc: "/images/specific/Services/CloudSecurity/iAssureIT-cloud-security-3.webp",
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
                leftTitle: "<span class='font-bold'>Comprehensive Protection :</span> <br/> We provide end-to-end cloud security solutions, tailored to meet the unique needs of your business. From initial assessment to ongoing management, we've got your cloud covered.",
                img: "/images/specific/Services/MobileApp/Icons/1.webp"
            },
            {
                leftTitle: "<span class='font-bold'>Compliance Assurance :</span> <br/> Stay ahead of regulations with our compliance-driven approach. Our services ensure your cloud infrastructure aligns with industry standards such as GDPR, HIPAA, and PCI DSS.",
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
                leftTitle: "<span class='font-bold'>Proactive Threat Management :</span> <br/> With our advanced monitoring tools and expert team, we proactively identify and neutralize threats before they impact your business.",
                img: "/images/specific/Services/MobileApp/Icons/3.webp"
            },
            {
                leftTitle: "<span class='font-bold'>Innovative Technology : </span><br/> Utilize the latest in cloud security technology, including AI-driven threat detection and automated response systems, to provide a security posture that evolves with the threat landscape.",
                img: "/images/specific/Services/MobileApp/Icons/4.webp"
            },

        ],
        dash: "border-white  mb-5 md:mb-3 mt-20",

    };
    const content_ProblemAns1 = {
        blockTitle: " <span class='font-extrabold'>THE TOP CHALLENGES IN <br/></span> <span class='font-normal uppercase'> Cloud Security </span>",
        classForblockTitle: "w-full text-center  BlockTitle leading-tight  ",
        dash: "border-blue-700 mb-5 mt-10",
        grid1Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-10",
        img1GridCss: " m-auto",
        img1: "/images/specific/Services/CloudSecurity/iAssureIT-cloud-security-4.webp",
        content1Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title1: "PROBLEM",
        title1Css: "BlockTitle font-extrabold text-left",
        subTitle1: "Secure Data Transition & Storage: :",
        subTitle1Css: "font-bold subTitle my-3",
        para1: "Ensuring data remains safe during transition and storage in the cloud. ",
        para1Css: "font-normal bodyTxt",
        grid2Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20",
        // img2GridCss:"",
        img2: "/images/specific/Services/CloudSecurity/iAssureIT-cloud-security-5.webp",
        content2Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title2: "iAssureIT Solution ",
        subTitle2: "One App, Every Device with iAssureIT",
        para2: "We ensure your app performs flawlessly across a wide range of devices and operating systems.",
        paraCss2: "",
        listData: [
            "With extensive experience in both iOS and Android platforms, our seasoned developers are equipped to tackle the challenge of platform fragmentation head-on.",
            "We harness the power of cross-platform development frameworks like React  Native and Flutter, ensuring your app reaches the widest audience without compromising on quality or efficiency. "
        ],
        listCss: "font-normal bodyTxt px-5 list-decimal py-2 md:px-7"

    }
    const content_ProblemAns2 = {
        grid1Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20",
        img1GridCss: "m-auto",
        img1: "/images/specific/Services/CloudSecurity/iAssureIT-cloud-security-7.webp",
        content1Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title1: "PROBLEM",
        title1Css: "BlockTitle font-montserrat  font-extrabold text-left",
        subTitle1: "Scalable and Secured Cloud Architecture Design :",
        subTitle1Css: "font-bold subTitle my-3",
        para1: "Developing a resilient, secured and scalable cloud architecture. ",
        para1Css: "font-normal bodyTxt",
        grid2Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20 mb-20",
        // img2GridCss:"",
        img2: "/images/specific/Services/CloudSecurity/iAssureIT-cloud-security-8.webp",
        content2Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title2: "iAssureIT Solution ",
        subTitle2: " ",
        para2: "Our team assists in designing and reviewing cloud architectures, integrating auto-scaling features,  aligning them with with industry regulations, and protecting against potential cyber threats. ",
        paraCss2: "",
        // listData: [
        //     "Our team employs user-centric design principles to create interfaces that resonate with your target audience. ",
        //     "We conduct in-depth user research to guarantee your app aligns perfectly with user preferences and behaviors."
        // ],
        // listCss: "font-normal bodyTxt px-5 list-decimal py-2 md:px-7"

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
            <BgImgRightContent inputData={content_profitMargin} />
            <LeftImgRightRepeatableBlk inputData={content_WhyChoose} readMore={false} />
            <BgImgRightContent inputData={content_contactUs} />
            <AccordionBlock inputData={content_accordion} />

            <test2 />
        </div>
    )
}

//PB added metaData
CloudSecurity.getInitialProps = async () => {
    // Perform data fetching here (e.g., making API requests)
    var url = '/services/cloud-security'
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
export default CloudSecurity;