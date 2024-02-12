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

const EcommOnline = ({ data }) => {
    const content_leftContentBgImg = {
        id: "Banner",
        bgImage: "/images/specific/Services/MobileApp/Images/1.webp",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/1.webp",
        logo: "",
        h1TxtLine1: "E-COMMERCE ONLINE STORE",
        h1TxtLine1Css: " font-DrukText text-5xl md:text-3xl xl:text-8xl font-extrabold text-center md:text-left   place-content-left  justify-center content-left mb-5 ",
        h1TxtLine2: " DEVELOPMENT",
        h1TxtLine2Css: "outline-title  font-DrukText font-bold text-5xl md:text-3xl xl:text-8xl text-center md:text-left   place-content-left  justify-center content-left mb-5 ",
        bgImgCss: "  py-20 h-auto  xl:h-[990px] lazyload object-fit bg-cover bg-no-repeat relative  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        // para: "E-Commerce Solutions – Tailoring Success in Digital Retail",
        // paraCss: " font-DrukText lcamelcase text-normal text-center md:text-left text-2xl md:text-3xl xl:text-5xl ",
        gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2   md:grid-cols-2  py-10  md:py-20 xl:py-0 2xl:py-20 h-auto md:h-full lg:h-full   xl:h-full 2xl:h-full  ",
        gridSubDivCss: " pb-32 md:pb-10 lg:pb-16 2xl:pb-48 my-auto text-white   md:pl-32 lg:pl-20 xl:pl-32 2xl:pl-60",
        image: "/images/specific/Services/EcommStore/iAssureIT-e-comm-online-store-1.webp",
        imageCss: '  w-2/3 xl:w-4/5 2xl:w-full mx-auto my-auto object-fit lazyload place-content-center object-center ',
        imgTagcss: "lazyload  -mt-20    ",
        borderColor: "border-darkBlue",
    }
    const content_BgImgRightTxt_3 = {
        paraTitle: "In a digital-centric world, having an agile and user-focused online store is not just an option but a business necessity. Here at iAssureIT, we blend cutting-edge technology with a customer-centric design approach to navigate your business towards online retail supremacy. Trustworthy, proficient, and innovative - we epitomize these attributes in every project.",
        paraTitleClass: "subTitle text-justify font-normal",
        bgImgCss: "lazyload",
        pageTitle: "<span class='font-normal uppercase'>Transforming Your Online Retail Vision into</span> <br/><span class='font-extrabold uppercase'>Engaging Shopping Realities</span>",
        pageTitleCss: "w-full text-center  BlockTitle leading-tight",
        gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5  md:pl-6 md:pl-16 lg:pl-20 2xl:pl-28 xxl:pl-40 xxl:px-10",
        // gridCol1Css: "w-1/2 mx-auto",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2 md:px-10 xl:px-20 2xl:px-32 xxl:px-48 lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit  bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/EcommStore/iAssureIT-e-comm-online-store-2.webp",
        imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
        dash: "border-blue-700 mb-5 md:mb-3",
    }
    const content_developerBlk = {
        paraTitle: "<span class='text-light font-bold '>Revamp Your Online Store with AI-Driven Personalization.<span class='title text-orange-400 text-left' ><br/> Talk to us now </span>",
        paraTitleClass: "title text-left font-normal leading-tight",
        bgImage: "/images/specific/Services/MobileApp/Images/9.webp",
        bgImgCss: "lazyload",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/3.webp",
        gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
        // gridCol1Css: "w-1/2 mx-auto",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/EcommStore/iAssureIT-e-comm-online-store-6.webp",
        imageCss: "mx-auto pt-20 sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
    }
    const content_SmallBanner2 = {
        id: "ecommSmBanner",
        bgImage: "/images/specific/Services/MobileApp/Images/12.webp",
        smallBGImage: "/images/specific/Services/MobileApp/Images/12.webp",
        title: " Optimize Your Online Store for Success with Personalized Recommendations",
        titleClass: " text-center mx-auto  my-auto  md:font-extrabold BlockTitle leading-relaxed",
        className: "h-auto w-full mx-auto",
        alt: "reserve",
        bgImgCss: "py-10 mb-20 2xl:py-5 bg-cover bg-no-repeat  bg-left-bottom lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]",
        gridCss: "grid grid-cols-1  gap-x-10 h-full w-full content-center  place-content-center my-auto md:py-20",
        gridCol1Class: "text-center my-auto w-full sm:w-auto  text-white  py-7 "
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
        paraTitle: "<span class='text-light font-bold'>Eager for an online retail presence that resonates? Develop modern, user-centric online stores tailored for the future, ensuring your customers remain engaged. </span> <br/> <span class='title text-orange-400 text-left' >Let iAssureIT E-Commerce Solutions be the digital pathway to your customers. </span>",
        paraTitleClass: "title text-left font-normal leading-tight",
        gridColCss: "my-auto mx-auto text-darkGray content-start  place-content-start  justify-start py-10 px-5 md:px-16    lg:pl-20 xl:px-4 2xl:px-20 xxl:px-32",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/EcommStore/iAssureIT-e-comm-online-store-9.webp",
        imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload xl:pt-28",
    }
    const content_CenterContentRepeatableBlocks = {
        id: "Services",
        blockTitle: "<span class='font-normal '>Our Services</span><br/><span class='font-extrabold uppercase'> E-commerce Online Store Development</span>",
        classForblockTitle: " w-full text-center  text-2xl md:text-3xl xl:text-4xl xl:py-5 py-10  px-2 md:px-none",
        classForNoOfCards: "px-10 lg:px-32 2xl:px-48 lg:mt-5  max-w-8xl text-center justify-evenly grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-6",
        classForCards: " border shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white p-4 md:p-10 lg:p-5 2xl:p-10 mb-7 rounded-xl",
        classForCardTitle: "text-center  text-darkGray text-xl md:text-xl lg:text-2xl xl:text-[22px] 2xl:text-[22px]  font-bold p-3 pt-3 md:pt-4 2xl:pt-6",
        classForCardTitle_2: "font-bold text-md text-primary dark:text-primary-400 p-5",
        classForCardImage: "w-auto 2xl:w-auto mx-auto p-5 xl:p-5 2xl:p-5 lazyload bg-gray-100 rounded-full ",
        classForblockContent: "px-10 lg:px-20  xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
        classForImg: "p-10 overflow-hidden bg-cover bg-no-repeat  lg:p-8 -mt-24 lg:-mt-28 xl:-mt-28 2xl:-mt-24",
        displayAnimation: "true",
        cardsArray: [
            {
                id: "ecomm1",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-2.webp',
                altImage: 'imageDescription',
                cardTitle: 'Custom Online Store Development',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: "Bespoke solutions aligning with your business goals.",
            },
            {
                id: "ecomm2",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-2.webp',
                altImage: 'imageDescription',
                cardTitle: 'Responsive Web Design',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: "Guaranteeing a flawless experience across devices, be it mobile, tablet, or desktop.",
            },
            {
                id: "ecomm3",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-3.webp',
                altImage: 'imageDescription',
                cardTitle: 'Payment Gateway Integration',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: "Smooth transactions with popular payment gateways for a user-friendly shopping experience.",
            },
            {
                id: "ecomm4",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-4.webp',
                altImage: 'imageDescription',
                cardTitle: 'Inventory and Order Management',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: "Streamlining operations for efficient order processing and real-time inventory tracking.",
            },
            {
                id: "ecomm5",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-5.webp',
                altImage: 'imageDescription',
                cardTitle: 'Scalable Architecture',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: "Structuring a foundation that evolves with your business demands seamlessly.",
            },
            {
                id: "ecomm6",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-6.webp',
                altImage: 'imageDescription',
                cardTitle: 'SEO Optimization',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: "Enhancing your online store's visibility for increased organic traffic and customer engagement.",
            },
            {
                id: "ecomm7",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-7.webp',
                altImage: 'imageDescription',
                cardTitle: 'Secure Checkout and Data Protection',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: "Implementing robust security measures to ensure a safe shopping ambiance.",
            },
            {
                id: "ecomm8",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-8.webp',
                altImage: 'imageDescription',
                cardTitle: 'Ongoing Support and Maintenance',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: "We're here for the long-term, ensuring your online store remains modern, secure, and successful.",
            },
        ],
        dash: "border-blue-700 mt-20 md:mt-12"
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
        bgImgCss: "lazyload",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/6.webp",
        paraTitle: "<span class='text-light font-bold'>Optimize Your Online Store for Success with  <span class='title text-orange-400 text-left' > Personalized Recommendations</span>",
        paraTitleClass: "title text-left font-normal leading-tight",
        gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit py-20 md:py-2 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/MobileApp/Images/16.webp",
        imageCss: "mx-auto  sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
    }
    const content_Technology = {
        blockTitle: "OUR RANGE OF <span class='font-extrabold uppercase'>WEB APP TECHNOLOGIES</span>",
        blockSubTitle: "Our success is a result of teamwork and building upon our technical expertise and creative style providing a full-service solution to our clients.",
        classForblockSubTitle: "lg:w-3/4 xl:w-4/5 2xl:w-4/5  mx-auto text-center font-normal text-darkGray mb-10 bodyTxt",
        classForblockTitle: "w-full text-center BlockTitle xl:py-5 py-10  leading-relaxed ",
        classForNoOfCards: "px-10 pb-10 lg:px-20 2xl:px-52 lg:mt-5  max-w-8xl text-center justify-evenly mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 lg:gap-x-8 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-10",
        classForCards: " text-white  mb-7 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]",
        classForCardTitle: "text-center font-bold text-xl md:text-xl lg:text-3xl p-3",
        classForCardTitle_2: "font-bold text-md text-primary dark:text-primary-400",
        classForCardImage: "w-full rounded-full pb-5",
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
                cardTitle: 'Others',
                imageArr: ["/images/specific/Services/Technologies/Front End/1.webp",
                    "/images/specific/Services/Technologies/DevOps/5.webp",
                    "/images/specific/Services/Technologies/DevOps/6.webp",
                ]
            },],
        dash: "border-blue-700 md:mb-5 mt-10 ",
    }
    const content_MobileAppTechnology = {
        id: "MobileAppTechnology",
        blockTitle: "OUR RANGE OF  <span class='font-extrabold'>E-COMMERCE TECHNOLOGIES</span>",
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
        sectionClass: "mx-auto text-center px-2 md:px-8 pt-10 container md:mt-20",
        pageTitle: "<span class=' font-normal'>WHY CHOOSE IASSUREIT FOR</span> <br/> <span class='font-extrabold uppercase'> E-Commerce Solutions? </span>",
        pageTitleCss: "w-full text-center   BlockTitle leading-tight ",
        bgImage: "/images/specific/Services/EcommStore/iAssureIT-e-comm-online-store-11.webp",
        bgImageCss: 'w-full h-auto object-cover',
        bigImageAlt: "BigImage",
        gridCss: "grid grid-cols-1 lg:grid-cols-2 gap-10",
        repeatedBlkCss: " shadow-none flex items-start sm:h-36 md:h-auto my-10 xl:my-4 ",
        imgCss: "flex-none bg-purple h-auto   items-start rounded mr-3 md:mr-10 object-cover shadow-[4.0px_8.0px_8.0px_rgba(97,143,237,0.8)]",
        titleCss: "subTitle font-bold mb-2",
        desCss: "text-gray-700 text-[18px]  sm:text-base overflow-hidden",
        linkCss: "float-right px-4 text-skyBlue",
        gridCol1Css:"order-last w-full h-auto relative my-auto ",
        repeatedBlocks: [
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Expertise ",
                description: "Accomplished team of developers and digital retail strategists.",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Quality Assurance",
                description: "Rigorous testing and validation for a glitch-free online store. ",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Custom Solutions",
                description: "Tailored to address your unique retail challenges.",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Security",
                description: "Superior security protocols to safeguard your data and customers' information. ",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Ongoing Support",
                description: "Assuring your online store remains updated and secure for continuous retail success.",
            },
        ],
        dash: "border-blue-700 mb-5 ",

    }

    const content_profitMargin = {
        bgImage: "/images/specific/Services/MobileApp/Images/20.webp",
        bgImgCss: "lazyload",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/5.webp",
        paraTitle: " Embark On Your Online Retail Journey. Discuss your e-commerce development needs.<br/> <span class='title text-orange-400 text-left'>Contact Us Now: 8459748828</span>",
        paraTitleClass: "title text-white text-left leading-tight",
        gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit pt-10 pb-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/EcommStore/iAssureIT-e-comm-online-store-10.webp",
        imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
    }
    const content_accordion = {
        dash: "border-blue-700 md:mb-5 mt-7 md:mt-20",
        pageTitle: "FAQS",
        pageTitleCss:
            " text-gray w-full text-center font-extrabold BlockTitle md:mb-10",
        accordionData: [

            {
                title: 'What is entailed in your Custom Online Store Development?',
                content: "Our Custom Online Store Development encapsulates creating a unique online retail platform tailored to your brand’s ethos and business requirements, ensuring a distinctive and engaging shopping experience."
            },
            {
                title: 'How do you ensure the online store is responsive across multiple devices? ',
                content: "We employ advanced responsive design techniques to ensure your online store provides a seamless user experience, regardless of the device or screen size."
            },
            {
                title: 'What security measures are adopted to safeguard the online store? ',
                content: " We implement a multi-layered security approach including SSL certificates, data encryption, and regular security audits to provide a secure shopping environment."
            },
            {
                title: 'How does the SEO Optimization benefit my online store?  ',
                content: "SEO Optimization enhances your store's visibility on search engines, driving organic traffic, improving brand recognition, and potentially boosting sales."
            },
            {
                title: 'What does the Ongoing Support and Maintenance entail?  ',
                content: "Our ongoing support includes regular updates, security audits, performance monitoring, and troubleshooting to ensure your online store remains efficient, secure, and up-to-date."
            },
            {
                title: 'What payment gateways do you integrate?  ',
                content: "We integrate a variety of popular payment gateways like PayPal, Stripe, and others, ensuring smooth and secure transactions for your customers."
            },
            {
                title: ' How do you handle Inventory and Order Management? ',
                content: "We develop robust inventory and order management systems that provide real-time updates, efficient order processing, and streamlined operations for a hassle-free shopping experience."
            },
            {
                title: ' How scalable is the architecture of the online store?',
                content: " Our scalable architecture is designed to adapt to your business growth, ensuring optimal performance even with increased traffic and expanded product catalogs."
            },
            {
                title: ' Can you provide references or case studies of past e-commerce projects?',
                content: "Absolutely! We’d be happy to share case studies or connect you with some of our previous clients to discuss their experience working with us."
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
            "object-fit py-48 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload",

        blockTitle: "<span class=' uppercase'>iAssureIT E-Commerce Solutions </span> <br/><span class='font-extrabold uppercase'>Crafting Your Online Retail Journey.</span>",
        classForLeftImageContainer: " text-center ",
        classForblockTitle: "BlockTitle text-light w-full text-center font-normal pb-10 leading-tight",
        classForblockContent: "px-10 lg:px-20 xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
        imageSrc: "/images/specific/Services//EcommStore/iAssureIT-e-comm-online-store-3.webp",
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
                leftTitle: "We promise iAssureIT performance and a seamless shopping experience across diverse devices. ",
                img: "/images/specific/Services/MobileApp/Icons/1.webp"
            },
            {
                leftTitle: "Creative solutions and customer-focused strategies are the essence of our development philosophy. ",
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
                leftTitle: "Beyond a mere team, we are an alliance of 100+ dedicated e-commerce experts. ",
                img: "/images/specific/Services/MobileApp/Icons/3.webp"
            },
            {
                leftTitle: " Our credibility is showcased with over 200+ successful online store projects under our belt.",
                img: "/images/specific/Services/MobileApp/Icons/4.webp"
            },

        ],
        dash: "border-white  mb-5 md:mb-3 mt-1 md:mt-20",

    };
    const content_ProblemAns1 = {
        blockTitle: " <span class='font-extrabold uppercase'>Challenges Faced By<br/></span> <span class='font-normal uppercase'>  Online Store Owners  </span>",
        classForblockTitle: "w-full text-center  BlockTitle leading-tight  ",
        dash: "border-blue-700 mb-5 mt-6",
        grid1Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-10",
        img1GridCss: " m-auto",
        img1: "/images/specific/Services//EcommStore/iAssureIT-e-comm-online-store-4.webp",
        content1Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title1: "PROBLEM",
        title1Css: "BlockTitle font-extrabold text-left",
        subTitle1: "Data Security and Customer Privacy :",
        subTitle1Css: "font-bold subTitle my-3",
        para1: "Ensuring the safety and privacy of customer data is a paramount concern for online store owners. A single mishap can significantly erode customer trust and could have legal ramifications.",
        para1Css: "font-normal bodyTxt",
        grid2Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20",
        // img2GridCss:"",
        img2: "/images/specific/Services//EcommStore/iAssureIT-e-comm-online-store-5.webp",
        content2Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title2: "iAssureIT Solution ",
        para2: "We prioritize robust security measures right from the inception of your online store development. Our security protocols include secure SSL certificates, data encryption, and regular security audits, ensuring a safe and trustworthy shopping environment for your customers. Moreover, our team stays updated with the latest security best practices to provide an ongoing shield against potential threats. ",
    }
    const content_ProblemAns2 = {
        grid1Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20",
        img1GridCss: "m-auto",
        img1: "/images/specific/Services/EcommStore/iAssureIT-e-comm-online-store-7.webp",
        content1Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title1: "PROBLEM",
        title1Css: "BlockTitle font-montserrat  font-extrabold text-left",
        subTitle1: "Effective Inventory and Order Management  :",
        subTitle1Css: "font-bold subTitle my-3",
        para1: "Efficiently managing inventory and orders is crucial for smooth operations and customer satisfaction. Mismanagement could lead to issues like overstocking, understocking, or delays in order processing which could tarnish the store’s reputation.  ",
        para1Css: "font-normal bodyTxt",
        grid2Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20 mb-20",
        // img2GridCss:"",
        img2: "/images/specific/Services/EcommStore/iAssureIT-e-comm-online-store-8.webp",
        content2Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title2: "iAssureIT Solution ",
        // subTitle2:"Modernization Plan :",
        para2: "Our development services include integrating robust inventory and order management systems that provide real-time updates and streamline your business operations. With these systems, you can efficiently keep track of your inventory, manage orders, and provide real-time updates to your customers, ensuring a smooth and hassle-free shopping experience. Automated alerts for low stock levels, and easy-to-use interfaces ensure you’re always on top of your store’s operations, regardless of scale.",
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
            <Technology inputData={content_Technology} />
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
EcommOnline.getInitialProps = async () => {
    // Perform data fetching here (e.g., making API requests)
    var url = '/services/e-comm-online-store-development'
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
export default EcommOnline;
