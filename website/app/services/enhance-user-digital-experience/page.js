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

const EnhanceUserDigitalExperience = ({ data }) => {
    const content_leftContentBgImg = {
        id: "Banner",
        bgImage: "/images/specific/Services/MobileApp/Images/1.webp",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/1.webp",
        logo: "",
        h1TxtLine1: "USER DIGITAL ",
        h1TxtLine1Css: " font-DrukText text-5xl md:text-3xl xl:text-8xl font-extrabold text-center md:text-left   place-content-left  justify-center content-left mb-5 ",
        h1TxtLine2: "EXPERIENCE",
        h1TxtLine2Css: "outline-title  font-DrukText font-[500] text-5xl md:text-3xl xl:text-8xl text-center md:text-left   place-content-left  justify-center content-left mb-5 ",
        bgImgCss: "  py-20 h-auto  xl:h-auto md:py-32 xl:py-60 2xl:py-20 lazyload object-fit bg-cover bg-no-repeat relative  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]",
        // para: " Redefining User Engagement and Satisfaction",
        // paraCss: " font-DrukText lcamelcase text-normal text-center md:text-left text-2xl md:text-3xl xl:text-5xl ",
        // gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  md:grid-cols-2  lg:h-screen  xl:h-screen h-screen  ",
        gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2   md:grid-cols-2  py-10  md:py-20 xl:py-0 2xl:py-32 h-auto md:h-full lg:h-full   xl:h-full 2xl:h-full xl:-mt-16 2xl:mt-auto",
        gridSubDivCss: " pb-32 md:pb-10 lg:pb-16 2xl:pb-48 my-auto text-white   md:pl-32 lg:pl-20 xl:pl-32 2xl:pl-32 ",
        image: "/images/specific/Services/User-Digital/iAssureIT-User-Digital-1.webp",
        imageCss: '  w-2/3 xl:w-4/5 2xl:w-4/5 mx-auto my-auto object-fit lazyload place-content-center object-center 2xl:place-content-left 2xl:object-left',
        imgTagcss: "lazyload  -mt-20 xl:mt-0 2xl:-mt-20    ",
        borderColor: "border-darkBlue",
    }
    const content_BgImgRightTxt_3 = {
        paraTitle: "At iAssureIT, we create user-centric digital experiences that align with your audience's needs and lifestyle. Our innovative approach is rooted in deep insights into user behavior, cutting-edge design, and a dedication to your business growth. We're more than developers; we're your digital growth partners. We're not just developers; we are your digital growth partners.  <ul class='list-disc list-inside'><li>UI/UX design and development solutions that are not just functional but phenomenally intuitive and engaging.</li><li>UI/UX design and development solutions that are not just functional but phenomenally intuitive and engaging.</li><li>With 150+ seasoned web professionals equipped to transform your digital visions into engaging user-centric realities.</li><li>Legacy of over 150+ successful UX development projects and continually evolving to align with the dynamic digital landscape.</li></ul>",
        paraTitleClass: "text-lg md:text-2xl xl:text-xl 2xl:text-xl text-justify md:text-left font-normal",
        bgImgCss: "lazyload",
        pageTitle: "<span class='font-normal uppercase'>Elevating User Interactions,</span> <br/><span class='font-extrabold uppercase'>Transforming Business Outcomes</span>",
        pageTitleCss: "w-full text-center  text-2xl md:text-3xl xl:text-4xl  2xl:text-4xl ",
        gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-3  md:pl-6 md:pl-16 lg:pl-10 xl:pl-20 2xl:pl-28 xxl:pl-40 xxl:px-10",
        //gridCol1Css: "my-auto mx-auto",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2 md:px-10 xl:px-40 2xl:px-60 xxl:px-48 lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit  bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/User-Digital/iAssureIT-User-Digital-2.webp",
        imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto w-5/6 2xl:w-3/5 lazyload",
        dash: "border-blue-700 mb-5 md:mb-3",
    }
    const content_developerBlk = {
        paraTitle: "<span class='text-white font-bold '>Craft Digital Experiences for enhanced user engagement and business growth.<span class='title text-orange-400 text-left' ><br/> Request a Quote 8459748828 </span>",
        paraTitleClass: "title text-left font-normal leading-tight",
        bgImage: "/images/specific/Services/MobileApp/Images/9.webp",
        bgImgCss: "lazyload",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/3.webp",
        gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
        // gridCol1Css: "w-1/2 mx-auto",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/User-Digital/iAssureIT-User-Digital-6.webp",
        imageCss: "mx-auto pt-20 sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
    }
    const content_SmallBanner2 = {
        id: "enhanceSmBanner",
        bgImage: "/images/specific/Services/MobileApp/Images/12.webp",
        smallBGImage: "/images/specific/Services/MobileApp/Images/12.webp",
        title: " Let iAssureIT usher you into a realm of digital excellence where every user interaction is an opportunity for engagement. ",
        titleClass: " text-center mx-auto  my-auto font-normal BlockTitle leading-tight",
        className: "h-auto w-full mx-auto",
        alt: "reserve",
        bgImgCss: "py-10 mb-20 2xl:py-5 bg-cover bg-no-repeat  bg-left-bottom lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]",
        gridCss: "grid grid-cols-1   h-full w-full content-center  place-content-center my-auto md:py-20",
        gridCol1Class: "text-center my-auto w-full sm:w-auto  text-white  py-7 ",
        para: "Let's Elevate User Experiences Together!",
        paraCss: "BlockTitle text-white leading-relaxed text-center md:text-center font-extrabold "
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
        paraTitle: "<span class='text-white font-bold'>Embark on a voyage of unrivaled user engagements. and discover more about our robust user Digital Experience services.</span> <br/> <span class='title text-orange-400 text-left' >Contact us today 8459748828 </span>",
        paraTitleClass: "title text-left font-normal leading-tight",
        gridColCss: "my-auto mx-auto text-darkGray content-start  place-content-start  justify-start py-10 px-5 md:px-16    lg:pl-20 xl:px-4 2xl:px-20 xxl:px-32",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/User-Digital/iAssureIT-User-Digital-9.webp",
        imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload xl:pt-28",
    }
    const content_CenterContentRepeatableBlocks = {
        id: "Services",
        blockTitle: "<span class='font-normal upppercase leading-relaxed'>Our Enhance</span><br/><span class='font-extrabold uppercase'>User Digital Experience Services</span>",
        classForblockTitle: " w-full text-center BlockTitle xl:py-5 py-10 leading-relaxed",
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
                id: "enhance1",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-1.webp',
                altImage: 'imageDescription',
                cardTitle: 'User Research and Analysis',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: "Delving deep to understand your audience and crafting digital solutions that address their core needs and expectations.",
            },
            {
                id: "enhance2",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-2.webp',
                altImage: 'imageDescription',
                cardTitle: 'User Interface Design (UI)',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: "Conceiving visually stunning and intuitive interfaces that not only align with your brand ethos but foster engaging user interactions.",
            },
            {
                id: "enhance3",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-3.webp',
                altImage: 'imageDescription',
                cardTitle: 'Information Architecture',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: "Structuring your digital platforms for effortless navigation and optimum information accessibility.",
            },
            {
                id: "enhance4",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-4.webp',
                altImage: 'imageDescription',
                cardTitle: 'Interaction Design',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: "Designing interactions that feel natural, intuitive, and delight the user at every touchpoint.",
            },
            {
                id: "enhance5",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-5.webp',
                altImage: 'imageDescription',
                cardTitle: 'Usability Testing and Optimization',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: "Employing rigorous testing methodologies to gather invaluable insights and optimize the user experience relentlessly.",
            },
            {
                id: "enhance6",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-6.webp',
                altImage: 'imageDescription',
                cardTitle: 'Accessibility',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: "Design inclusively to ensure your digital platforms are accessible and enjoyable for all users, regardless of their abilities.",
            },
            {
                id: "enhance7",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-7.webp',
                altImage: 'imageDescription',
                cardTitle: 'Continuous Improvement',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-lg xl:text-lg 2xl:text-lg",
                content: "Partnering with you for the long haul, our team is committed to continuous UX optimization, ensuring your digital platforms remain at the pinnacle of user satisfaction.",
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
        bgImgCss: "lazyload",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/6.webp",
        paraTitle: "<span class='text-white font-bold'>Elevate Your Brand with Unmatched Digital Experiences. </span>  <span class='title text-orange-400 text-left' > Learn how our user experience strategies can bring your digital presence to life. Let’s create user interactions that resonate and retain.</span>",
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
        sectionClass: "mx-auto text-center px-8 pt-10 container md:mt-20  md:px-5 lg:px-32 2xl:px-48",
        pageTitle: "<span class=' font-normal'>WHY CHOOSE IASSUREIT FOR</span> <br/> <span class='font-extrabold uppercase'> Enhancing User Digital Experience? </span>",
        pageTitleCss: "w-full text-center   BlockTitle leading-tight ",
        bgImage: "/images/specific/Services/User-Digital/iAssureIT-User-Digital-11.webp",
        //  "/images/specific/Services/MobileApp/WHY_CHOOSE_iAssureIT/1.webp",
        bgImageCss: ' h-auto object-cover mx-auto xl:float-right',
        bigImageAlt: "BigImage",
        gridCss: "grid grid-cols-1 lg:grid-cols-2 gap-10",
        repeatedBlkCss: " shadow-none flex items-start sm:h-36 md:h-auto my-10 xl:my-3 ",
        imgCss: "flex-none bg-purple h-auto   items-start rounded mr-3 md:mr-10 object-cover shadow-[4.0px_8.0px_8.0px_rgba(97,143,237,0.8)]",
        titleCss: "text-lg md:text-2xl xl:text-[1.2rem] font-bold mb-2",
        desCss: "text-gray-700 text-[18px]  sm:text-base overflow-hidden",
        linkCss: "float-right px-4 text-skyBlue",
        gridCol1Css: "order-last w-full h-auto relative my-auto ",
        repeatedBlocks: [
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Expertise ",
                description: "A seasoned team dedicated to harnessing the power of UI/UX to drive business success.",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Quality Assurance",
                description: "Extensive testing and validation to ensure optimum user satisfaction.",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Custom Solutions",
                description: " Tailoring UX strategies to align with your unique business objectives and audience expectations.",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Continuous Support",
                description: " A long-term partnership aimed at continually optimizing the user experience, ensuring your digital platforms resonate with evolving user behaviors and expectations. ",
            },
        ],
        dash: "border-blue-700 mb-5 ",
    }

    const content_profitMargin = {
        bgImage: "/images/specific/Services/MobileApp/Images/20.webp",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/5.webp",
        bgImgCss: "lazyload",
        paraTitle: " Embark On Your Online Retail Journey. Discuss your e-commerce development needs.<br/> <span class='title text-orange-400 text-left'>Contact Us Now: 8459748828</span>",
        paraTitleClass: "title text-white text-left leading-tight",
        gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit pt-10 pb-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/User-Digital/iAssureIT-User-Digital-10.webp",
        imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
    }
    const content_accordion = {
        dash: "border-blue-700 -mb-7 mt-5 md:mb-2 md:mt-16",
        pageTitle: "FAQS",
        pageTitleCss:
            " text-gray w-full text-center font-extrabold BlockTitle mb-2 md:mb-12",
        accordionData: [

            {
                title: 'Why is UX important?',
                content: "User Experience (UX) is crucial because it directly impacts customer satisfaction and loyalty. A well-designed UX leads to higher conversion rates, lower support costs, and a positive brand image. Additionally, it provides a competitive edge in the market, making it a key factor for business success and growth."
            },
            {
                title: "What does 'Enhance User Digital Experience' mean?",
                content: "At iAssureIT, 'Enhance User Digital Experience' signifies our commitment to elevating the user interaction and satisfaction across digital platforms. By leveraging a blend of creativity, user-centric research, and advanced technology, we deliver intuitive, seamless, and memorable user experiences which in turn drive engagement, satisfaction, and business growth."
            },
            {
                title: 'How does iAssureIT approach User Research and Analysis?',
                content: "Our process begins with a deep dive into understanding your target audience through comprehensive user research and analysis. This involves uncovering user behaviors, preferences, and challenges which forms the foundation for crafting personalized and engaging user experiences."
            },
            {
                title: 'What is the significance of User Interface Design in enhancing digital experiences?',
                content: "User Interface Design is crucial as it forms the backbone of user experience. Our designers create visually appealing and intuitive interfaces that align with your brand identity, ensuring a smooth flow from one interaction to the other, thereby enhancing the overall user engagement and satisfaction."
            },
            {
                title: 'How does Information Architecture contribute to user experience?',
                content: "Information Architecture organizes and structures your digital platforms for effortless navigation and information accessibility. By establishing logical and intuitive information hierarchies, we enhance the discoverability and accessibility of your content, which contributes to a positive user experience."
            },
            {
                title: 'What is involved in Interaction Design?',
                content: "Interaction Design focuses on creating natural and intuitive user interactions. Every click, swipe, and tap is meticulously crafted to ensure responsiveness across various devices and screen sizes, making the user’s journey delightful and engaging."
            },
            {
                title: 'How does iAssureIT ensure the effectiveness of its design through Usability Testing and Optimization?',
                content: "We conduct rigorous usability testing with real users to validate the effectiveness of our designs. The insights gathered are used for continuous optimization and iteration to ensure that digital platforms evolve to meet user needs and expectations."
            },
            {
                title: 'Can you elaborate on the Mobile-First Approach?',
                content: "With the prevalent use of mobile devices, a Mobile-First Approach is essential. We excel in creating responsive designs that provide seamless experiences across all devices, ensuring your audience can engage with your brand anytime, anywhere."
            },
            {
                title: 'How does iAssureIT address Accessibility in digital platforms?',
                content: "We design inclusively by ensuring that your digital platforms comply with accessibility standards. This makes them usable and enjoyable for users with disabilities, thereby expanding your reach and impact."
            },
            {
                title: 'What does Continuous Improvement entail in Enhancing User Digital Experience?',
                content: "User experience is an ongoing journey. We provide continuous support and monitoring to gather user feedback, track performance metrics, and make data-driven improvements to enhance the user experience over time, ensuring your digital platforms remain engaging and user-friendly."
            },
            {
                title: 'How can I get started with iAssureIT’s Enhance User Digital Experience Services?',
                content: "Contact us today to discuss how we can elevate your digital presence and create lasting impressions on your audience. Click on the 'Let's Elevate User Experiences Together!' button to get started!"
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
        bgImage: "/images/specific/Services/MobileApp/Images/4.webp",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/2.webp",
        bgImgCss:
            " object-fit py-48 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload",
        blockTitle: "<span class=' uppercase'>Transforming User Interactions </span> <br/><span class='font-extrabold uppercase'>Crafting Exceptional Digital Experiences</span>",
        classForLeftImageContainer: " text-center ",
        classForblockTitle: "BlockTitle text-white w-full text-center font-normal pb-10 leading-tight",
        classForblockContent: "px-10 lg:px-20 xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
        imageSrc: "/images/specific/Services/User-Digital/iAssureIT-User-Digital-3.webp",
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
                leftTitle: "Expertly designed user experience strategies that create meaningful connections and drive engagement across every digital touchpoint. ",
                img: "/images/specific/Services/MobileApp/Icons/1.webp"
            },
            {
                leftTitle: "Our UX specialists adopt a holistic, design-thinking approach to ensure intuitive and impactful user journeys. ",
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
                leftTitle: "Home to 150+ digital experience innovators ready to elevate your brand’s online presence. ",
                img: "/images/specific/Services/MobileApp/Icons/3.webp"
            },
            {
                leftTitle: " Our portfolio boasts over 200+ projects where user experience was transformed into tangible business results.",
                img: "/images/specific/Services/MobileApp/Icons/4.webp"
            },

        ],
        dash: "border-white  mb-0 md:mb-3 mt-5 md:mt-10",

    };
    const content_ProblemAns1 = {
        blockTitle: " <span class='font-extrabold uppercase'>The UX Challenges Businesses Face:<br/></span> <span class='font-normal uppercase'>  iAssure UX development Solution </span>",
        classForblockTitle: "w-full text-center  BlockTitle leading-tight  ",
        dash: "border-blue-700 mb-5 mt-10 md:mt-1",
        grid1Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-10",
        img1GridCss: " m-auto",
        img1: "/images/specific/Services/User-Digital/iAssureIT-User-Digital-4.webp",
        content1Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title1: "PROBLEM",
        title1Css: "text-2xl md:text-3xl xl:text-3xl   font-extrabold text-left",
        subTitle1: "Cross-Device Seamless Experience :",
        subTitle1Css: "font-semibold text-lg md:text-xl xl:text-2xl   my-3",
        para1: "Providing a seamless user experience design across various devices.",
        para1Css: "font-normal text-lg md:text-xl xl:text-xl  leading-relaxed",
        grid2Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20",
        // img2GridCss:"",
        img2: "/images/specific/Services/User-Digital/iAssureIT-User-Digital-5.webp",
        content2Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title2: "iAssureIT Solution ",
        title2Css: "text-2xl md:text-3xl xl:text-3xl   font-extrabold text-left",
        para2: "Our Mobile-First Approach ensures the design is optimized for mobile interfaces, further adapting impeccably across tablets, desktops, and other devices.",
        para2Css: "font-normal text-lg md:text-xl xl:text-xl  leading-relaxed",
    }
    const content_ProblemAns2 = {
        grid1Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20",
        img1GridCss: "m-auto",
        img1: "/images/specific/Services/User-Digital/iAssureIT-User-Digital-7.webp",
        content1Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title1: "PROBLEM",
        title1Css: "text-2xl md:text-3xl xl:text-3xl   font-extrabold text-left",
        subTitle1: "Intuitive Information Architecture:",
        subTitle1Css: "font-semibold text-lg md:text-xl xl:text-2xl   my-3",
        para1: "Facilitating effortless navigation and information accessibility.",
        para1Css: "font-normal text-lg md:text-xl xl:text-xl  leading-relaxed",
        grid2Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20 mb-20",
        // img2GridCss:"",
        img2: "/images/specific/Services/User-Digital/iAssureIT-User-Digital-8.webp",
        content2Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title2: "iAssureIT Solution ",
        title2Css: "text-2xl md:text-3xl xl:text-3xl   font-extrabold text-left",
        // subTitle2:"Modernization Plan :",
        para2: "We architect intuitive information hierarchies that enhance discoverability and accessibility, delivering a frictionless user journey.",
        para2Css: "font-normal text-lg md:text-xl xl:text-xl  leading-relaxed",
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
EnhanceUserDigitalExperience.getInitialProps = async () => {
    // Perform data fetching here (e.g., making API requests)
    var url = '/services/enhance-user-digital-experience'
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
export default EnhanceUserDigitalExperience;