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
import AccordionBlock from "@/templates/Accordion/AccordionBlock";
import CenterImgLeftRightRepeatableBlocks from "@/templates/RepeatableBlocks/CenterImgLeftRightRepeatableBlocks/page"
import SmallBanner from "@/templates/BannerBlocks/SmallBanner/SmallBanner";
import ProblemSolutionBlk from "@/templates/ContentBlocks/ProblemSolutionBlk/ProblemSolutionBlk";
import Autocarousel from "@/components/Autocarousel";

const ApplicationModernization = ({ data }) => {
    const content_leftContentBgImg = {
        id: "Banner",
        bgImage: "/images/specific/Services/MobileApp/Images/1.webp",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/1.webp",
        logo: "",
        h1TxtLine1: "<span class='uppercase'>Steering <br/>Innovation in </span> ",
        h1TxtLine1Css: " font-DrukText text-5xl md:text-6xl xl:text-7xl font-extrabold text-center md:text-left   place-content-left  justify-center content-left mb-5 ",
        h1TxtLine2: "Application Modernization",
        h1TxtLine2Css: "outline-title  uppercase font-DrukText text-5xl  md:text-5xl  lg:text-6xl xl:text-7xl 2xl:text-7xl text-center md:text-left   place-content-left  justify-center content-left mb-5 font-[500] ",
        bgImgCss: "  py-20 h-auto  xl:h-auto md:py-32 xl:py-60 2xl:py-20 lazyload object-fit bg-cover bg-no-repeat relative  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]",
        // para: "Transforming Legacy <br/> Applications into Agile Solutions  ",
        // paraCss: " font-DrukText lcamelcase text-normal text-center md:text-left text-2xl md:text-3xl xl:text-5xl ",
        gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2   md:grid-cols-2  py-10  md:py-20 xl:py-0 2xl:py-32 h-auto md:h-full lg:h-full   xl:h-full 2xl:h-full xl:-mt-16 2xl:mt-auto",
        gridSubDivCss: " pb-32 md:pb-10 lg:pb-16 2xl:pb-48 my-auto text-white   md:pl-32 lg:pl-20 xl:pl-32 2xl:pl-32 ",
        image: "/images/specific/Services/Application-Modernization/iAssureIT-Application-Modernization-image-1.webp",
        imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto w-5/6 2xl:w-3/5 lazyload",
        borderColor: "border-darkBlue",
    }
    const content_BgImgRightTxt_3 = {
        paraTitle: "In a business landscape driven by technological evolution, modernizing your applications is pivotal to staying competitive. At <b> iAssureIT </b>, we blend forward-thinking strategies with a user-centric approach to evolve your legacy applications into agile, <b>Reliable</b> solutions. ",
        paraTitleClass: "text-lg md:text-2xl xl:text-xl 2xl:text-xl text-justify md:text-left font-normal",
        bgImgCss: "lazyload",
        pageTitle: "<span class='font-normal'>EXPAND YOUR CLIENTELE WITH </span> <br/><span class='font-extrabold uppercase'>Application Modernization</span>",
        pageTitleCss: "w-full text-center  text-2xl md:text-3xl xl:text-4xl  2xl:text-4xl ",
        gridColCss:"my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-3  md:pl-6 md:pl-16 lg:pl-10 xl:pl-20 2xl:pl-28 xxl:pl-40 xxl:px-10",
        // gridCol1Css: "w-1/2 mx-auto",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2 md:px-10 xl:px-40 2xl:px-60 xxl:px-48 lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit  bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/Application-Modernization/iAssureIT-Application-Modernization-image-2.webp",
        imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto w-5/6 2xl:w-3/5 lazyload",
        dash: "border-blue-700 mb-5 md:mb-3",
    }
    const content_developerBlk = {
        paraTitle: "<span class='text-light font-bold uppercase leading-relaxed'> Remodelling!<br/> <span class='title text-orange-400 text-left uppercase' > Legacy Applications for Agility </span>",
        paraTitleClass: "title text-left font-normal leading-tight",
        bgImage: "/images/specific/Services/MobileApp/Images/9.webp",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/3.webp",
        bgImgCss: "lazyload",
        gridColCss: "my-auto  text-darkGray content-center  place-content-center  justify-center py-10 md:py-0  px-5 md:px-0 ",
        // gridCol1Css: "w-1/2 mx-auto",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit py-20 md:px-10 lg:px-32 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/Application-Modernization/iAssureIT-Application-Modernization-image-6.webp",
        imageCss: "mx-auto md:pt-20 sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
    }

    const content_SmallBanner2 = {
        id: "smallbanner",
        bgImage: "/images/specific/Services/MobileApp/Images/12.webp",
        smallBGImage: "/images/specific/Services/MobileApp/Images/12.webp",
        title: "Contact us today for a two week trial",
        titleClass: " text-center mx-auto md:float-right my-auto font-extrabold BlockTitle leading-relaxed",
        className: "h-auto w-full mx-auto",
        alt: "reserve",
        bgImgCss: "py-3 md:py-10 mb-5 md:mb-20 2xl:py-5 bg-cover bg-no-repeat  bg-left-bottom lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]",
        gridCss: "grid grid-cols-1 sm:grid-cols-1  md:grid-cols-1  lg:grid-cols-1 2xl:grid-cols-1 gap-x-10 h-full w-full content-center  place-content-center my-auto md:py-20",
        gridCol1Class: "mx-auto sm:w-auto  text-white",
        para: "Dial 8459748828",
        paraCss: "BlockTitle text-white text-center md:text-center font-extrabold leading-relaxed"
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
        paraTitle: "<span class='text-light font-bold uppercase leading-tight'> Embark on Your Modernization Journey today,<br/> <span class='title text-orange-400 text-left uppercase' > Get a custom modernization solution tailored to your specific needs. </span>",
        paraTitleClass: "title text-justify md:text-left font-normal",
        gridColCss:
            "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-16    lg:pl-20 xl:px-4 2xl:px-20 xxl:px-32",
        gridClass:
            "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass:
            "object-fit py-20 md:py-16 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/Application-Modernization/iAssureIT-Application-Modernization-image-9.webp",
        imageCss:
            "mx-auto md:py-20 md:py-1 mt-5 md:mt-20 sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
    }
    const content_CenterContentRepeatableBlocks = {
        id: "Services",
        blockTitle: "<span class=' leading-tight'>TRANSFORM BITS INTO BUSINESS BRILLIANCE WITH <br/> <span class='font-extrabold uppercase'>Our Application Modernization Services include</span></span>",
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
                id: "service1",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-1.webp',
                altImage: 'imageDescription',
                cardTitle: 'Custom Modernization Solutions ',
                // cardTitle_2       : 'Block subtitle',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: "Tailored strategies to align with your unique business objectives.",
                // url: "/about-us",
                // urlName: "READ MORE",
                // linkCss: "text-blue-700  font-medium text-md md:text-lg mt-3"
            },
            {
                id: "service2",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-2.webp',
                altImage: 'imageDescription',
                cardTitle: 'Cloud Application Modernization',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",

                content: "Utilizing cloud platforms to enhance flexibility, scalability, and operational efficiency. ",
            },
            {
                id: "service3",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-3.webp',
                altImage: 'imageDescription',
                cardTitle: 'Microservices Architecture',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",

                content: "Modernizing your monolithic applications to microservices for better scalability and maintainability",
            },
            {
                id: "service4",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-4.webp',
                altImage: 'imageDescription',
                cardTitle: 'API Integration ',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",

                content: "Enabling seamless integration with other systems to ensure your modernized applications interact smoothly with other platforms. ",
            },
            {
                id: "service5",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-5.webp',
                altImage: 'imageDescription',
                cardTitle: 'Performance Optimization',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",

                content: "Enhancing speed and responsiveness to ensure your applications run smoothly and efficiently. ",
            },
            {
                id: "service6",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-6.webp',
                altImage: 'imageDescription',
                cardTitle: 'Robust Security Measures',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",

                content: "Adopting top-tier security protocols to protect your data and ensure compliance with industry standards. ",
            },
            {
                id: "service7",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-7.webp',
                altImage: 'imageDescription',
                cardTitle: 'Data Migration and Management',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",

                content: "Efficiently migrating, organizing, storing, and managing your application data. ",
            },
            {
                id: "service8",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-8.webp',
                altImage: 'imageDescription',
                cardTitle: 'User-friendly Interface',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",

                content: "Modernizing UI/UX to ensure easy navigation and an enhanced user experience.",
            },
            {
                id: "service9",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-9.webp',
                altImage: 'imageDescription',
                cardTitle: 'Continuous Monitoring and Support',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",

                content: "We’re here for the long haul, ensuring your modernized applications remain up-to-date and perform optimally.",
            },
        ],
        dash: "border-blue-700 mt-10 md:mt-20"
    }    
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
        paraTitle: "<span class='text-light font-bold uppercase leading-relaxed'>  Ready to evolve your legacy applications with iAssureIT's,<br/> <span class='title text-orange-400 text-left uppercase' > modernization services and stay ahead in the digital curve </span>",
        paraTitleClass: "title text-left font-normal leading-tight",
        gridColCss:
            "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
        gridClass:
            "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center py-5 md:py-2",
        bannerClass:
            "py-32 md:py-2 object-fit  bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/Application-Modernization/iAssureIT-Application-Modernization-image-10.webp",
        imageCss: "mx-auto mt-28  sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
    }
    const content_MobileAppTechnology = {
        id: "MobileAppTechnology",
        blockTitle: " <span class='font-extrabold uppercase'>Let iAssureIT catalyze your digital transformation</span>",
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
                cardTitle: 'iOS App developers',
            },
            {
                cardImage: '/images/specific/Services/MobileApp/TechnologyStack/10.webp',
                altImage: 'imageDescription',
                cardTitle: 'Android App developers ',
            },
            {
                cardImage: '/images/specific/Services/MobileApp/TechnologyStack/6.webp',
                altImage: 'imageDescription',
                cardTitle: 'Swift App developers',
            },
            {
                cardImage: '/images/specific/Services/MobileApp/TechnologyStack/5.webp',
                altImage: 'imageDescription',
                cardTitle: 'Kotlin App developers ',
            },
            {
                cardImage: '/images/specific/Services/MobileApp/TechnologyStack/3.webp',
                altImage: 'imageDescription',
                cardTitle: 'React Native App developers ',
            },
            {
                cardImage: '/images/specific/Services/MobileApp/TechnologyStack/8.webp',
                altImage: 'imageDescription',
                cardTitle: 'Flutter App developers',
            },
            {
                cardImage: '/images/specific/Services/MobileApp/TechnologyStack/11.webp',
                altImage: 'imageDescription',
                cardTitle: 'Xamarin App developers',
            },
        ],
        dash: "border-blue-700"
    }
    const content_CaseStudy = {
        sectionCss: "py-10 md:py-20 bg-light",
        blockTitle: " CASE STUDIES",
        blockSubTitle: "We shed light on our work and what goes behind the development",
        classForblockTitle: " text-darkGray w-full BlockTitle text-center font-extrabold leading-relaxed ",
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
    const content_WhyChoose
        = {
        sectionClass: "mx-auto text-center p-8 container",
        pageTitle: "<span class=' font-normal leading-tight'>WHY CHOOSE IASSUREIT FOR</span> <br/> <span class='font-extrabold'>MOBILE APP DEVELOPMENT?</span> ",
        pageTitleCss: "w-full text-center  BlockTitle leading-tight",
        bgImage: "/images/specific/Services/Application-Modernization/iAssureIT-Application-Modernization-image-11.webp",
        bgImageCss: 'mx-auto object-cover',
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
        dash: "border-blue-700 mb-5 ",

    }

    const content_profitMargin = {
        bgImage: "/images/specific/Services/MobileApp/Images/20.webp",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/5.webp",

        bgImgCss: "lazyload",
        paraTitle: "<span class='uppercase'>Want to accelerate your App Modernization Journey? </span> <span class='title text-orange-400 text-left uppercase'> Contact us today for a two week trial  </span>",
        paraTitleClass: "title text-white text-left leading-tight",
        gridColCss: "order-first my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-32 ",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/Application-Modernization/iAssureIT-Application-Modernization-image-12.webp",
        imageCss: "  mx-auto sm:object-fit my-auto content-center  place-content-center lazyload md:mb-10",
        imgTagcss: "mx-auto lazyload",
    }
    const content_accordion = {
        dash: "border-blue-700 md:mb-5 mt-10 ",
        pageTitle: "FAQS",
        pageTitleCss:
            " text-gray w-full text-center font-extrabold BlockTitle mb-10",
        accordionData: [

            {
                title: 'What is  application modernization? ',
                content: "Application modernization involves evaluating and upgrading your legacy systems to ensure they are efficient, scalable, and in alignment with current technological standards. This process may include migrating to cloud platforms, adopting microservices architecture, improving security protocols, and enhancing user interfaces, among other measures."
            },

            {
                title: 'How does iAssureIT ensure a smooth transition during the modernization process? ',
                content: 'At iAssureIT, we prioritize meticulous planning, proven methodologies, and close collaboration with your team to ensure a smooth transition. We aim to minimize disruptions to your ongoing operations while ensuring data integrity and system performance during the modernization process.'
            },
            {
                title: 'Is cloud migration a part of the application modernization services offered?',
                content: 'Yes, cloud migration is a crucial part of our application modernization services. We utilize renowned cloud platforms like AWS, Azure, and GCP to enhance the flexibility, scalability, and operational efficiency of your applications.'
            },
            {
                title: 'What security measures are adopted during the modernization process?    ',
                content: '<p>We adopt a multi-layered security approach during the modernization process.</p>' +
                    "<p>This includes implementing robust security protocols, data encryption, and compliance checks to ensure your modernized applications are safeguarded against potential threats and meet industry regulatory standards.</p>"
            },
            {
                title: 'How does the adoption of microservices architecture benefit my application?',
                content: "Transitioning to a microservices architecture from a monolithic structure provides numerous benefits including enhanced scalability, easier maintenance, quicker deployment, and better fault isolation. It allows different teams to work on separate services simultaneously, accelerating the development process and enabling better scalability and flexibility."
            },
            {
                title: 'How does iAssureIT handle data migration and management during modernization?',
                content: "We employ comprehensive data migration strategies to ensure accurate, secure, and efficient transfer of your data to the modernized system. Post-migration, we offer robust data management solutions to ensure organized, easily retrievable, and well-maintained data storage."
            },
            {
                title: 'Will the modernization process disrupt my current business operations? ',
                content: "We strive to ensure minimal disruption to your business operations during the modernization process. Through careful planning, phased implementation, and continuous communication, we aim to keep any interruptions to an absolute minimum."
            },
            {
                title: 'Can iAssureIT provide ongoing support post modernization?',
                content: "Absolutely! We believe in forging long-term partnerships. iAssureIT provides continuous monitoring, support, and maintenance to ensure your modernized applications remain up-to-date, secure, and perform optimally."
            }, {
                title: 'How is the cost for application modernization services determined? ',
                content: "The cost of application modernization services is determined based on various factors including the complexity of your existing systems, the extent of modernization required, the technologies and platforms to be used, and the estimated duration of the project. We provide a detailed quote post a thorough analysis of your requirements."
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
        pageTitleCss: " text-white w-full text-center font-extrabold text-3xl md:text-3xl xl:text-5xl",
        gridColCss: "my-auto w-full sm:w-2/3 md:w-3/5 rounded-4 lg:w-4/5 2xl:w-3/5  mx-auto lg:mx-0 text-darkGray content-center  place-content-center  justify-center  px-5  2xl:px-2 md:pl-6 md:pl-16 lg:px-0 xl:pl-4 xxl:pl-40 md:-mt-5",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 place-content-center  lg:h-full   xl:h-full h-full content-center md:py-10 ",
        gridCol1Css: "mt-6 md:mt-0",
        bannerClass: "object-fit pt-72 pb-72  md:pt-72 md:pb-48 md:bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Contact_Us/iAssureIT-contact-us-1.webp",
        imageCss: "mx-auto pt-2 pb-20 sm:object-fit my-auto content-center  place-content-center lazyload ",
        imgTagcss: "mx-auto lazyload",
        imgTpText: "<span class='leading-loose'> Now why to wait? </span><br/> Contact Us immediately ",
        imgTpTextClass: "text-white w-full text-center font-extrabold text-xl md:text-3xl xl:text-4xl leading-tight",
        dash: "border-white  mb-5 md:mb-3 mt-12 lg:mt-2",
        showForm: "true",
        formCss: " p-6 -mt-16 md:-mt-16 lg:-mt-12 bg-white md:p-10 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
      }

    const content_CenterImgLeftRightRepeatableBlocks = {
        id: "Blk3",
        bgImage: "/images/specific/Services/MobileApp/Images/4.webp",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/2.webp",
        bgImgCss:
            " object-fit py-48 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload",

        blockTitle: "<span class='leading-tight'> Your Trusted Partner in <br/><span class='font-extrabold leading-2'>APPLICATION MODERNIZATION JOURNEY</span></span>",
        classForLeftImageContainer: " text-center ",
        classForblockTitle: "BlockTitle text-white w-full text-center font-normal pb-10 leading-tight",
        classForblockContent: "px-10 lg:px-20 xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
        imageSrc: "/images/specific/Services/Application-Modernization/iAssureIT-Application-Modernization-image-3.webp",
        imgAlt: "ltImgRtcontent",
        cclassForblockContainer: "flex flex-col sm:flex-row p-4",
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
                leftTitle: "We promise a stellar 4+ rating on both App Store and Google Play.",
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
        blockTitle: " <span class='font-extrabold leading-relaxed uppercase'>Challenges Faced By Businesses <br/></span> <span class='font-normal uppercase'>  iAssureIT Application Modernization Solution  </span>",
        classForblockTitle: "w-full mx-auto text-center  BlockTitle leading-tight  ",
        dash: "border-blue-700 mb-5 mt-10",
        grid1Css: "grid grid-cols-1 lg:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-10",
        img1GridCss: " m-auto",
        img1: "/images/specific/Services/Application-Modernization/iAssureIT-Application-Modernization-image-4.webp",
        content1Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title1: "PROBLEM",
        title1Css: "text-2xl md:text-3xl xl:text-3xl   font-extrabold text-left",
        subTitle1: "Legacy System Transition Challenge:",
        subTitle1Css: "font-semibold text-lg md:text-xl xl:text-2xl   my-3",
        para1: "Transitioning from legacy systems without data loss or business interruption",
        para1Css: "font-normal subTitle leading-relaxed",
        grid2Css: "grid grid-cols-1 lg:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20",
        // img2GridCss:"",
        img2: "/images/specific/Services/Application-Modernization/iAssureIT-Application-Modernization-image-5.webp",
        content2Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title2: "iAssureIT Solution ",
        subTitle2: "One App, Every Device with iAssureIT",
        para2: "We employ meticulous planning and proven methodologies to ensure smooth migration and modernization of your legacy systems.",
        paraCss2: "",
        listData: [
            "With extensive experience in both iOS and Android platforms, our seasoned developers are equipped to tackle the challenge of platform fragmentation head-on.",
            "We harness the power of cross-platform development frameworks like React  Native and Flutter, ensuring your app reaches the widest audience without compromising on quality or efficiency. "
        ],
        listCss: "font-normal bodyTxt px-5 list-decimal py-2 md:px-7"

    }
    const content_ProblemAns2 = {
        grid1Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-20 gap-x-5 mt-20",
        img1GridCss: "m-auto",
        img1: "/images/specific/Services/Application-Modernization/iAssureIT-Application-Modernization-image-7.webp",
        content1Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title1: "PROBLEM",
        title1Css: "text-2xl md:text-3xl xl:text-4xl   font-extrabold text-left",
        subTitle1: "Scalability and Performance Challenge :",
        subTitle1Css: "font-bold subTitle my-3",
        para1: "Modernizing applications to handle increased user traffic and data load without sacrificing performance.",
        para1Css: "font-normal bodyTxt",
        grid2Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-20 gap-x-5 mt-20 mb-20",
        // img2GridCss:"",
        img2: "/images/specific/Services/Application-Modernization/iAssureIT-Application-Modernization-image-8.webp",
        content2Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title2: "iAssureIT Solution ",
        subTitle2: "",
        para2: "Our focus on Scalable Architecture ensures that your modernized applications can effectively manage growth without compromising on performance.",
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

        </div>
    )

}

//PB added metaData
ApplicationModernization.getInitialProps = async () => {
    // Perform data fetching here (e.g., making API requests)
    var url = '/services/application-modernization'
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
export default ApplicationModernization;