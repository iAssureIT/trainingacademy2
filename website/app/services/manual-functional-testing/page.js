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
import Autocarousel from "@/components/Autocarousel";
import BgImgLeftImgRtGrid from "@/templates/ContentBlocks/BgImgLeftImgRightGrid/BgImgLeftImgRightGrid";
import OurPortfolio from "@/templates/OurPortfolio/OurPortfolio";
import DummyBlk from "@/templates/DummyBlock/DummyBlk";
import AccordionBlock from "@/templates/Accordion/AccordionBlock";
import BlogsList from "@/templates/Blog/BlogsList";
import CenterImgLeftRightRepeatableBlocks from "@/templates/RepeatableBlocks/CenterImgLeftRightRepeatableBlocks/page"
import SmallBanner from "@/templates/BannerBlocks/SmallBanner/SmallBanner";
import ProblemSolutionBlk from "@/templates/ContentBlocks/ProblemSolutionBlk/ProblemSolutionBlk";
import Technology from "@/templates/ContentBlocks/Technology/Technology";
import CustomHead from "@/templates/CustomHead/CustomHead";
const ManualFunctionalTesting = ({ data }) => {
    const content_leftContentBgImg = {
        id: "Banner",
        bgImage: "/images/specific/Services/MobileApp/Images/1.webp",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/1.webp",
        logo: "",
        h1TxtLine1: "MANUAL & FUNCTIONAL ",
        h1TxtLine1Css: " font-DrukText text-5xl md:text-3xl xl:text-8xl font-extrabold text-center md:text-left   place-content-left  justify-center content-left mb-5 ",
        h1TxtLine2: " TESTING",
        h1TxtLine2Css: "outline-title  font-DrukText font-bold text-5xl md:text-3xl xl:text-8xl text-center md:text-left   place-content-left  justify-center content-left mb-5 ",
        bgImgCss: "  py-20 h-auto  xl:h-[990px] lazyload object-fit bg-cover bg-no-repeat relative  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        para: "Elevate Your Software's Potential with iAssureIT's Expert Testing Services!",
        paraCss: " font-DrukText lcamelcase text-normal text-center md:text-left text-2xl md:text-3xl xl:text-5xl ",
        // gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  md:grid-cols-2  lg:h-screen  xl:h-screen h-screen  ",
        gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2   md:grid-cols-2  py-10  md:py-20 xl:py-0 2xl:py-20 h-auto md:h-full lg:h-full   xl:h-full 2xl:h-full  ",
        gridSubDivCss: " pb-32 md:pb-10 lg:pb-16 2xl:pb-48 my-auto text-white   md:pl-32 lg:pl-20 xl:pl-32 2xl:pl-60",
        image: "/images/specific/Services/ManualTesting/iAssureIT-manual-functional-testing-1.webp",
        imageCss: '  w-2/3 xl:w-4/5 2xl:w-full mx-auto my-auto object-fit lazyload place-content-center object-center ',
        imgTagcss: "lazyload  -mt-20    ",
        borderColor: "border-darkBlue",
    }
    const content_BgImgRightTxt_3 = {
        paraTitle: "At iAssureIT, we specialize in crafting flawless software experiences through meticulous manual and functional testing. Our commitment is driven by a deep understanding of application dynamics, innovative testing techniques, and a focus on your business continuity. <br/>  We aren’t just testers; we are your software assurance partners. <ul class='list-disc list-inside'><li>Comprehensive manual testing services that validate software integrity and ensure functional correctness.</li><li>Rigorous functional testing to certify software against specified requirements.</li><li>A team of 150+ seasoned testing professionals poised to enhance your software’s performance.</li><li>A legacy of over 200+ successful testing projects, consistently elevating software standards.</li></ul> ",
        paraTitleClass: "subTitle text-justify font-normal",
        bgImgCss: "lazyload",
        pageTitle: "<span class='font-normal uppercase'>Transforming Application Performance,</span> <br/><span class='font-extrabold uppercase'> Ensuring Business Resilience</span>",
        pageTitleCss: "w-full text-center  BlockTitle leading-tight",
        gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5  md:pl-6 md:pl-16 lg:pl-20 2xl:pl-28 xxl:pl-40 xxl:px-10",
        // gridCol1Css: "w-1/2 mx-auto",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2 md:px-10 xl:px-20 2xl:px-32 xxl:px-48 lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit  bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/ManualTesting/iAssureIT-manual-functional-testing-2.webp",
        imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
        dash: "border-blue-700 mb-5 md:mb-3",
    }
    const content_developerBlk = {
        paraTitle: "<span class='text-light font-bold '>Perfect your software applications for unmatched performance and reliability.<span class='title text-orange-400 text-left' ><br/> Request a Quote today 8459748828  </span>",
        paraTitleClass: "title text-left font-normal leading-tight",
        bgImage: "/images/specific/Services/MobileApp/Images/9.webp",
        bgImgCss: "lazyload",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/3.webp",
        gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
        // gridCol1Css: "w-1/2 mx-auto",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/ManualTesting/iAssureIT-manual-functional-testing-6.webp",
        imageCss: "mx-auto pt-20 sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
    }
    const content_SmallBanner2 = {
        id: "FunTestSmallBanner",
        bgImage: "/images/specific/Services/MobileApp/Images/12.webp",
        smallBGImage: "/images/specific/Services/MobileApp/Images/12.webp",
        title: " Let iAssureIT guide you towards software perfection where every function is an epitome of accuracy and performance.",
        titleClass: " text-center mx-auto md:float-right my-auto font-normal BlockTitle leading-tight",
        className: "h-auto w-full mx-auto",
        alt: "reserve",
        bgImgCss: "py-10 mb-20 2xl:py-5 bg-cover bg-no-repeat  bg-left-bottom lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]",
        gridCss: "grid grid-cols-1 px-5 gap-y-10 h-full w-full content-center  place-content-center my-auto md:py-20",
        gridCol1Class: "mx-auto text-white",
        para: "  Together, Let’s Elevate Your IT Operations!",
        paraCss: "BlockTitle text-light text-center md:text-center font-extrabold md:col-span-2 2xl:col-span-2 leading-tight"
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
        paraTitle: "<span class='text-light font-bold'> Partner with us for reliable testing solutions focused on persistent software quality improvement. Your testing expert is just a call away. <br/> <span class='title text-orange-400 text-left' >Speak to our experts 8459748828 </span>",
        paraTitleClass: "title text-left font-normal leading-tight",
        gridColCss: "my-auto mx-auto text-darkGray content-start  place-content-start  justify-start py-10 px-5 md:px-16    lg:pl-20 xl:px-4 2xl:px-20 xxl:px-32",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/ManualTesting/iAssureIT-manual-functional-testing-9.webp",
        imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload xl:pt-28",
    }
    const content_CenterContentRepeatableBlocks = {
        id: "Services",
        blockTitle: "<span class='font-extrabold uppercase'>Our Manual Testing Services</span>",
        classForblockTitle: " w-full text-center  text-2xl md:text-3xl xl:text-4xl xl:py-5 py-10  px-2 md:px-none",
        classForNoOfCards: "px-10 lg:px-32 2xl:px-48 lg:mt-5  max-w-8xl text-center justify-evenly grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-6",
        classForCards: " border shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white p-4 md:p-10 mb-7 rounded-xl",
        classForCardTitle: "text-center  text-darkGray text-lg md:text-xl lg:text-2xl xl:text-[25px] 2xl:text-[22px]  font-semibold p-3 pt-20 md:pt-6",
        classForCardTitle_2: "font-bold text-md text-primary dark:text-primary-400 p-5",
        classForCardImage: "w-auto 2xl:w-auto mx-auto p-5 xl:p-5 2xl:p-5 lazyload bg-gray-100 rounded-full ",
        // classForCardImage: "w-auto 2xl:w-auto mx-auto p-5 xl:p-5 2xl:p-5 lazyload bg-gray-100 rounded-full ",

        classForblockContent: "px-10 lg:px-20  xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
        // blockContent           : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        classForImg: "p-10 overflow-hidden bg-cover bg-no-repeat  lg:p-8 -mt-24 lg:-mt-28 xl:-mt-28 2xl:-mt-24",
        displayAnimation: "true",
        cardsArray: [
            {
                id: "Service1",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-1.webp',
                altImage: 'imageDescription',
                cardTitle: 'Test Case Design ',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
                content: "Crafting comprehensive test cases based on requirement specifications to ensure a detailed examination.",
            },
            {
                id: "Service2",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-2.webp',
                altImage: 'imageDescription',
                cardTitle: ' Exploratory Testing',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
                content: " Leverage tester expertise to identify defects in the software without predefined test cases.",
            },
            {
                id: "Service3",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-3.webp',
                altImage: 'imageDescription',
                cardTitle: 'Usability Testing',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
                content: "Evaluating the user-friendliness and overall user satisfaction of the software.",
            },
            {
                id: "Service4",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-4.webp',
                altImage: 'imageDescription',
                cardTitle: ' Cross-Browser and Cross-Platform Testing',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
                content: " Ensuring consistent software performance across diverse browsers, platforms, and devices.",
            },
            {
                id: "Service5",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-5.webp',
                altImage: 'imageDescription',
                cardTitle: ' Ad-hoc Testing',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
                content: " Random testing to uncover potential defects not identified during formal testing.",
            },
            {
                id: "Service6",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-6.webp',
                altImage: 'imageDescription',
                cardTitle: 'Smoke Testing',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
                content: "Conducting preliminary tests to determine the stability of a particular software build.",
            },
            {
                id: "Service7",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-7.webp',
                altImage: 'imageDescription',
                cardTitle: ' Performance Optimization',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
                content: "Continuously monitoring and fine-tuning your IT operations to ensure optimal performance. ",
            },
            {
                id: "Service8",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-8.webp',
                altImage: 'imageDescription',
                cardTitle: 'Integration Testing',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
                content: "Evaluating interconnectivity and interaction between integrated software components.",
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
        dash: "border-white  mb-5 md:mb-3 mt-32 xl:mt-24 2xl:mt-32",
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
        paraTitle: "<span class='text-light font-bold'> Ensure Your Application's Performance with Our Expert Testing.<br/> <span class='title text-orange-400 text-left' >Refine your software's functionality and user journey with our exhaustive manual and functional testing protocols. </span>",
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
        pageTitle: "<span class=' font-normal'>WHY CHOOSE IASSUREIT FOR</span> <br/> <span class='font-extrabold uppercase'> Manual & Functional Testing?</span> ",
        pageTitleCss: "w-full text-center   BlockTitle leading-tight ",
        bgImage: "/images/specific/Services/ManualTesting/iAssureIT-manual-functional-testing-11.webp",
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
                description: "A seasoned team dedicated to ensuring software integrity and reliability.",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Quality Assurance",
                description: "Comprehensive testing ensuring software stands up to real-world demands.",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Custom Solutions",
                description: "Adapting testing strategies to meet unique business objectives and software requisites.",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Continuous Support",
                description: "An enduring relationship focused on persistent software quality improvement.",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Customer Testimonials",
                description: ""
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "CTAs",
                description: "Elevate software quality to unparalleled heights. Learn more about our rigorous manual & functional testing services.",
            },

        ],
        dash: "border-blue-700 mb-5 ",

    }

    const content_profitMargin = {
        bgImage: "/images/specific/Services/MobileApp/Images/20.webp",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/5.webp",
        bgImgCss: "lazyload",
        paraTitle: "Discover the potential of streamlined IT Operations Management with iAssureIT. <br/> <span class='title text-orange-400 text-left'> Contact us today 8459748828</span>",
        paraTitleClass: "title text-white text-left leading-tight",
        gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit pt-10 pb-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/ManualTesting/iAssureIT-manual-functional-testing-10.webp",
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
                title: 'Why is Manual & Functional Testing vital?',
                content: "Manual and Functional Testing is pivotal as it determines the accuracy, functionality, and user-friendliness of software. It ensures that software not only meets specified requirements but also delivers an optimal user experience."
            },
            {
                title: 'How does iAssureIT approach Test Planning & Strategy?',
                content: "At iAssureIT, our test planning process involves understanding your software objectives, designing test cases, and crafting strategies that promise comprehensive test coverage."
            },
            {
                title: 'Why is UI Testing essential?',
                content: "UI Testing is crucial because the user interface often forms the first impression. Ensuring that it is intuitive, responsive, and attractive can greatly enhance user satisfaction and engagement."
            },
            {
                title: 'How does iAssureIT ensure the functional correctness of software?',
                content: "hrough rigorous functional testing, we validate every software function against its requirement specification, ensuring it operates as intended."
            },
            {
                title: 'How is Regression Testing beneficial?',
                content: "Regression Testing ensures that recent changes or enhancements to the software haven’t adversely affected the previously established functionalities, assuring software stability."
            },
            {
                title: 'What advantages does Compatibility Testing offer?',
                content: "Compatibility Testing guarantees that software delivers a consistent performance across various browsers, devices, and platforms, widening its accessibility and market reach."
            },
            {
                title: 'Can you elaborate on Performance Testing?',
                content: "Performance Testing evaluates how the software behaves under different conditions, like high user loads. It ensures software responsiveness and stability, promising a seamless user experience."
            },
            {
                title: 'How can I get started with iAssureIT’s Manual & Functional Testing Services?',
                content: "Contact us today to discover how we can refine your software to perfection. Click on the 'Let’s Perfect Software Together!' button to embark on this journey."
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
        gridColCss: "my-auto w-full sm:w-2/3 md:w-3/5 rounded-4 lg:w-4/5 2xl:w-3/5  mx-auto lg:mx-0 text-darkGray content-center  place-content-center  justify-center  px-5 md:px-20 2xl:px-2 md:pl-6 md:pl-16 lg:px-0 xl:pl-4 xxl:pl-40",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 place-content-center  lg:h-full   xl:h-full h-full content-center md:py-10 ",
        gridCol1Css: "mt-20",
        bannerClass: "object-fit py-72  md:py-38 md:bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: " /images/specific/Contact_Us/iAssureIT-contact-us-1.webp",
        imageCss: "mx-auto pt-2 pb-20 sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
        imgTpText: "<span class='leading-loose'> Now why to wait? </span><br/> Contact Us immediately ",
        imgTpTextClass: "text-light w-full text-center font-extrabold text-3xl md:text-3xl xl:text-5xl leading-loose",
        dash: "border-white  mb-5 md:mb-3 mt-12 lg:mt-2",
        showForm: "true",
        formCss: " p-6 -mt-16 md:-mt-16 lg:-mt-12 bg-white md:p-10 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
    }

    const content_CenterImgLeftRightRepeatableBlocks = {
        bgImage: "/images/specific/Services/MobileApp/Images/4.webp",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/2.webp",
        bgImgCss:
            "object-fit py-48 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload",

        blockTitle: "<span class=' '> Delivering Quality Assurance </span> <br/><span class='font-extrabold '> Enhancing Software Integrity</span>",
        classForLeftImageContainer: " text-center ",
        classForblockTitle: "BlockTitle text-light w-full text-center font-normal pb-10 leading-tight",
        classForblockContent: "px-10 lg:px-20 xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
        imageSrc: "/images/specific/Services/ManualTesting/iAssureIT-manual-functional-testing-3.webp",
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
                leftTitle: "Comprehensive manual testing services that validate software integrity and ensure functional correctness.",
                img: "/images/specific/Services/MobileApp/Icons/1.webp"
            },
            {
                leftTitle: "Rigorous functional testing to certify software against specified requirements.",
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
                leftTitle: "A team of 150+ seasoned testing professionals poised to enhance your software’s performance.",
                img: "/images/specific/Services/MobileApp/Icons/3.webp"
            },
            {
                leftTitle: " A legacy of over 200+ successful testing projects, consistently elevating software standards.",
                img: "/images/specific/Services/MobileApp/Icons/4.webp"
            },

        ],
        dash: "border-white  mb-5 md:mb-3 mt-5",

    };
    const content_ProblemAns1 = {
        blockTitle: " <span class='font-extrabold uppercase'>The Challenges Software Faces <br/></span> <span class='font-normal uppercase'> iAssureIT’s Testing Solution</span>",
        classForblockTitle: "w-full text-center  BlockTitle leading-tight  ",
        dash: "border-blue-700 mb-5 mt-10",
        grid1Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-10",
        img1GridCss: " m-auto",
        img1: "/images/specific/Services/ManualTesting/iAssureIT-manual-functional-testing-4.webp",
        content1Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title1: "PROBLEM",
        title1Css: "BlockTitle font-extrabold text-left",
        subTitle1: "Functional Integrity :",
        subTitle1Css: "font-bold subTitle my-3",
        para1: "Ensuring each function of software operates in conformance with the requirement specification.",
        para1Css: "font-normal bodyTxt",
        grid2Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20",
        // img2GridCss:"",
        img2: "/images/specific/Services/ManualTesting/iAssureIT-manual-functional-testing-5.webp",
        content2Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title2: "iAssureIT Solution ",
        para2: "Through detailed functional testing, we validate software functionality against set benchmarks, ensuring each feature delivers as intended.",
    }
    const content_ProblemAns2 = {
        grid1Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20",
        img1GridCss: "m-auto",
        img1: "/images/specific/Services/ManualTesting/iAssureIT-manual-functional-testing-7.webp",
        content1Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title1: "PROBLEM",
        title1Css: "BlockTitle font-montserrat  font-extrabold text-left",
        subTitle1: "User Interface Precision :",
        subTitle1Css: "font-bold subTitle my-3",
        para1: "Ensuring the application's user interface is user-friendly, responsive, and intuitive.",
        para1Css: "font-normal bodyTxt",
        grid2Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20 mb-20",
        // img2GridCss:"",
        img2: "/images/specific/Services/ManualTesting/iAssureIT-manual-functional-testing-8.webp",
        content2Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title2: "iAssureIT Solution ",
        // subTitle2:"Modernization Plan :",
        para2: "Our UI Testing assesses layout, navigation, and responsiveness, ensuring users enjoy a seamless experience.",
    }
    const content_Technology = {
        blockTitle: "OUR RANGE OF<br/> <span class='font-extrabold uppercase'>Manual & Functional Testing TECHNOLOGIES</span>",
        blockSubTitle: "Our success is a result of teamwork and building upon our technical expertise and creative style providing a full-service solution to our clients.",
        classForblockSubTitle: "lg:w-3/4 xl:w-4/5 2xl:w-4/5  mx-auto text-center font-normal text-darkGray mb-10 bodyTxt",
        classForblockTitle: "w-full text-center BlockTitle xl:py-5 py-10 leading-tight",
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
ManualFunctionalTesting.getInitialProps = async () => {
    // Perform data fetching here (e.g., making API requests)
    var url = '/services/manual-functional-testing'
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
export default ManualFunctionalTesting;