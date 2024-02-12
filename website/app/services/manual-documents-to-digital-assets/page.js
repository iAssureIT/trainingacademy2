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
import AccordionBlock from "@/templates/Accordion/AccordionBlock";
import CenterImgLeftRightRepeatableBlocks from "@/templates/RepeatableBlocks/CenterImgLeftRightRepeatableBlocks/page"
import SmallBanner from "@/templates/BannerBlocks/SmallBanner/SmallBanner";
import ProblemSolutionBlk from "@/templates/ContentBlocks/ProblemSolutionBlk/ProblemSolutionBlk";
import CustomHead from "@/templates/CustomHead/CustomHead";
const ManualDocuments = ({ data }) => {
    const content_leftContentBgImg = {
        id: "aboutBanner",
        bgImage: "/images/specific/Services/MobileApp/Images/1.webp",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/1.webp",
        logo: "",
        h1TxtLine1: "MANUAL DOCUMENTS",
        h1TxtLine1Css: " font-DrukText text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-extrabold text-center md:text-left   place-content-left  justify-center content-left mb-5 ",
        h1TxtLine2: " TO DIGITAL ASSET SERVICES ",
        h1TxtLine2Css: "outline-title  font-DrukText font-bold text-4xl md:text-4xl lg:text-5xl xl:text-7xl text-center md:text-left   place-content-left  justify-center content-left mb-5 ",
        bgImgCss: " py-20 h-auto xl:h-[910px] lazyload object-fit bg-cover bg-no-repeat relative  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        // para: "iAssureIT  Bridging The Physical To Digital Divide ",
        // paraCss: " font-DrukText lcamelcase text-normal text-center md:text-left text-2xl md:text-3xl xl:text-5xl ",
        gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2   md:grid-cols-2  py-10  md:py-20 xl:py-0 2xl:py-20 h-auto md:h-full lg:h-full   xl:h-full 2xl:h-full  ",
        gridSubDivCss: " pb-14 md:pb-10 lg:pb-16 2xl:pb-48 my-auto text-white   md:pl-32 lg:pl-20 xl:pl-32 2xl:pl-60",
        image: "/images/specific/Services/Manual-Documents/iAssureIT-manual-documents-1.webp",
        imageCss: 'w-3/5  md:w-2/3 xl:w-4/5 2xl:w-3/5 mx-auto my-auto object-fit lazyload place-content-center object-center ',
        imgTagcss: "lazyload  xl:-mt-20    ",
        borderColor: "border-darkBlue",
    }
    const content_BgImgRightTxt_3 = {
        paraTitle: " At iAssureIT, we meticulously transform your manual documents into robust digital assets,  ensuring a seamless transition. We ensure that the authenticity and accessibility to thrive in the digital world. We are not merely service providers, we are your digital transition partners  <ul class='list-disc list-inside'><li>High Quality Document Digitization services  </li><li>Accurate data extraction and rapid retrieval system </li><li>Security and Compliance with data compliance regulations.   </li><li>Proven track record with 150+ successful digital conversion projects </li><li>Advanced document management software & tools like OCR, ICR, IDP, Barcode and QR code  </li> </ul>",
        paraTitleClass: "text-lg md:text-2xl xl:text-xl 2xl:text-xl text-justify md:text-left font-normal",
        bgImgCss: "lazyload",
        pageTitle: "<span class='font-normal uppercase'>Effortlessly handle, collaborate, and share documents</span> <br/><span class='font-extrabold uppercase'> Streamline and Automate  document workflows  </span>",
        pageTitleCss: "w-5/6 md:w-5/6 lg:w-2/3 xl:w-3/5 2xl:w-1/2 xxl:!w-2/5 text-center  BlockTitle leading-tight mx-auto",
        gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5  md:pl-6 md:pl-16 lg:pl-20 2xl:pl-28 xxl:pl-40 xxl:px-10",
        // gridCol1Css: "w-1/2 mx-auto",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2 md:px-10 xl:px-20 2xl:px-32 xxl:px-48 lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit  bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/Manual-Documents/iAssureIT-manual-documents-2.webp",
        imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
        dash: "border-blue-700 mb-5 md:mb-3",
    }
    const content_developerBlk = {
        paraTitle: "<span class='text-light font-bold '>Automate document workflows and Boost Productivity with Document Digitization.<span class='title text-orange-400 text-left' ><br/> Go Digital today </span>",
        paraTitleClass: "title text-left font-normal leading-tight",
        bgImage: "/images/specific/Services/MobileApp/Images/9.webp",
        bgImgCss: "lazyload",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/3.webp",
        gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
        // gridCol1Css: "w-1/2 mx-auto",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/Manual-Documents/iAssureIT-manual-documents-6.webp",
        imageCss: "mx-auto pt-20 sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
    }
    const content_SmallBanner2 = {
        id: "ManualDocSmallBanner",
        bgImage: "/images/specific/Services/MobileApp/Images/12.webp",
        smallBGImage: "/images/specific/Services/MobileApp/Images/12.webp",
        title: "24/7 Access to digital documents provided to clients and 100% Compliance with data protection and privacy standards",
        titleClass: " text-center mx-auto md:float-right my-auto font-normal BlockTitle leading-relaxed",
        className: "h-auto w-full mx-auto",
        alt: "reserve",
        bgImgCss: "py-10 mb-20 2xl:py-5 bg-cover bg-no-repeat  bg-left-bottom lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]",
        gridCss: "grid grid-cols-1   h-full w-full content-center  place-content-center my-auto md:py-20",
        gridCol1Class: "mx-auto px-4 py-auto text-white",
        // para: "  Together, Let’s Elevate Your IT Operations!",
        // paraCss: "BlockTitle text-light text-center md:text-center font-extrabold md:col-span-2 2xl:col-span-2"
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
        paraTitle: "<span class='text-light font-bold'>Experience the Power of Digital Efficiency with iAssureIT’s customized and Scalable document digitization </span>  <br/> <span class='title text-orange-400 text-left' >Get started  </span>",
        paraTitleClass: "title text-left font-normal leading-tight",
        gridColCss: "my-auto mx-auto text-darkGray content-start  place-content-start  justify-start py-10 px-5 md:px-16    lg:pl-20 xl:px-4 2xl:px-20 xxl:px-32",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/Manual-Documents/iAssureIT-manual-documents-9.webp",
        imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload xl:pt-28",
    }
    const content_CenterContentRepeatableBlocks = {
        id: "Services",
        blockTitle: "<span class='font-extrabold leading-loose '>iAssure’s</span><span class='font-extrabold uppercase '> Document Digitization Services</span>",
        classForblockTitle: " w-full text-center BlockTitle xl:py-5 py-10 leading-loose ",
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
                id: "MDoc1",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-1.webp',
                altImage: 'imageDescription',
                cardTitle: 'Scanning and Digitization',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
                content: "Advanced technology to convert physical documents into high-quality digital files. ",
            },
            {
                id: "MDoc2",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-2.webp',
                altImage: 'imageDescription',
                cardTitle: 'OCR (Optical Character Recognition) Services',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
                content: "Employ OCR technology to transform scanned text images into editable and searchable data, enhancing accessibility and ease of use. ",
            },
            {
                id: "MDoc3",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-3.webp',
                altImage: 'imageDescription',
                cardTitle: 'Data Capture Services',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
                content: "automate the extraction of specified data from scanned documents based on established criteria, ensuring precise and efficient data retrieval.",
            },
            {
                id: "MDoc4",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-4.webp',
                altImage: 'imageDescription',
                cardTitle: 'Data Extraction and Indexing',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
                content: "Ensuring your digital documents are textually searchable with key data points extraction.",
            },
            {
                id: "MDoc5",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-5.webp',
                altImage: 'imageDescription',
                cardTitle: 'Document Conversion and Formatting',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
                content: "Tailoring digital formats to your specific needs while maintaining original formatting and layout. ",
            },
            {
                id: "MDoc6",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-6.webp',
                altImage: 'imageDescription',
                cardTitle: 'Document Organization and Management',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
                content: "Establish a structured digital asset management system for easy retrieval and collaboration.",
            },
            {
                id: "MDoc7",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-7.webp',
                altImage: 'imageDescription',
                cardTitle: 'Metadata Tagging and Searchability',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
                content: "Enhance document searchability with metadata tagging, saving time and effort.",
            },
            {
                id: "MDoc8",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-8.webp',
                altImage: 'imageDescription',
                cardTitle: 'Secure Cloud Storage and Backup',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
                content: " Prioritizing data security with secure cloud storage solutions.",
            },
            {
                id: "MDoc9",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-9.webp',
                altImage: 'imageDescription',
                cardTitle: 'Document Retention and Archiving',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
                content: "Solutions for long-term document retention complying with legal and regulatory requirements.",
            },
            {
                id: "MDoc10",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-1.webp',
                altImage: 'imageDescription',
                cardTitle: 'Document Approval and Workflow',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
                content: "Streamline document sharing, version control, and tracking to enhance productivity. ",
            },
            {
                id: "MDoc11",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-2.webp',
                altImage: 'imageDescription',
                cardTitle: 'Workflow Automation Services',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
                content: "treamline document-centric processes like approval workflows or data entry tasks, enhancing efficiency and accuracy.",
            },
            {
                id: "MDoc12",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-3.webp',
                altImage: 'imageDescription',
                cardTitle: 'Electronic Records Management Services',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
                content: "We concentrate on the structured storage and retrieval of digital records while ensuring compliance with regulatory mandates. ",
            },
            {
                id: "MDoc13",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-4.webp',
                altImage: 'imageDescription',
                cardTitle: 'Cloud Storage Services',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
                content: "We provide cloud-based solutions for storing and accessing digital documents from anywhere with an internet connection.",
            },
            {
                id: "MDoc14",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-5.webp',
                altImage: 'imageDescription',
                cardTitle: 'Document Security Service',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
                content: "We are implementing security measures to protect digital documents from unauthorized access or tampering. ",
            },
        ],
        dash: "border-blue-700 mt-20"
    }
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
        paraTitle: "<span class='text-light font-bold'>Experience the Power of Digital Efficiency with iAssureIT’s customized and Scalable document digitization </span>  <br/> <span class='title text-orange-400 text-left' > Get started 8459748828</span>",
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
        pageTitle: "<span class=' font-normal'>WHY CHOOSE IASSUREIT FOR</span> <br/> <span class='font-extrabold uppercase'> Manual Documents to Digital Asset Services?</span>",
        pageTitleCss: "w-full text-center   BlockTitle leading-tight ",
        bgImage: "/images/specific/Services/Manual-Documents/iAssureIT-manual-documents-11.webp",
        // "/images/specific/Services/MobileApp/WHY_CHOOSE_iAssureIT/1.webp",
        bgImageCss: ' mx-auto object-cover',
        bigImageAlt: "BigImage",
        gridCss: "grid grid-cols-1 lg:grid-cols-2 gap-10",
        repeatedBlkCss: " shadow-none flex items-start sm:h-36 md:h-auto my-10 xl:my-4  ",
        imgCss: "flex-none bg-purple h-auto   items-start rounded mr-3 md:mr-10 object-cover shadow-[4.0px_8.0px_8.0px_rgba(97,143,237,0.8)]",
        titleCss: "text-lg md:text-2xl xl:text-[1.2rem] font-bold mb-2",
        desCss: "text-gray-700 text-[18px]  sm:text-base xl:text-[14px] 2xl:text-base overflow-hidden",
        linkCss: "float-right px-4 text-skyBlue",
        repeatedBlocks: [
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Expertise and Experience",
                description: "A skilled team and veteran team, dedicated to flawless digital transition adhering to industry standards. ",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Quality Assurance",
                description: "Comprehensive validation to ensure optimum data accuracy and document integrity. ",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Customization and Scalability",
                description: "Crafting digital transition strategies to align with your unique business objectives. Ability to scale as per requirement.",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Continuous Support",
                description: "A long-term partnership aimed at ongoing document management optimization, ensuring your digital assets continue to serve your evolving business needs. ",
            },


        ],
        dash: "border-blue-700 mb-5 ",

    }

    const content_profitMargin = {
        bgImage: "/images/specific/Services/MobileApp/Images/20.webp",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/5.webp",
        bgImgCss: "lazyload",
        paraTitle: "Embark on a voyage of digital transformation with robust Manual Documents to Digital Asset Services.<br/> <span class='title text-orange-400 text-left'> Contact us today 8459748828</span>",
        paraTitleClass: "title text-white text-left leading-tight",
        gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit pt-10 pb-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/Manual-Documents/iAssureIT-manual-documents-10.webp",
        imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
    }
    const content_accordion = {
        dash: "border-blue-700 md:mb-5 mt-7 md:mt-20",
        pageTitle: "FAQS",
        pageTitleCss:
            " text-gray w-full text-center font-extrabold BlockTitle mb-10",
        accordionData: [

            {
                title: 'Why is digitizing manual documents crucial for modern businesses? ',
                content: "Digitizing manual documents is crucial as it facilitates easy access, efficient management, and secure storage of critical business information. It not only minimizes the physical space required for storage but also enhances data retrieval efficiency, thus accelerating decision-making processes and ensuring compliance with regulatory requirements. "
            },
            {
                title: 'How does iAssureIT ensure the quality of digitized documents? ',
                content: "At iAssureIT, we utilize advanced scanning and imaging technologies to convert your manual documents into high-quality digital files. Our process ensures that the original layout, formatting, and content integrity are maintained, providing a true digital replica of your manual documents."
            },
            {
                title: 'What is Data Extraction and Indexing, and how does it benefit my business?',
                content: "Data Extraction and Indexing involves identifying and extracting key data points from your documents and creating searchable indexes. This enables quick and effortless information retrieval, which in turn saves time, enhances productivity, and ensures better decision-making based on accurate and easily accessible data. "
            },
            {
                title: 'How does Document Organization and Management help in handling digital assets? ',
                content: "Document Organization and Management establishes a structured and systematic approach to categorize, store, and manage your digital documents. It ensures easy retrieval, seamless collaboration, and efficient workflow, ultimately leading to improved operational efficiency and reduced time spent on managing physical documents. "
            },
            {
                title: 'Can you elaborate on Metadata Tagging and its significance? ',
                content: "Metadata Tagging involves assigning relevant keywords and descriptors to your digital documents, which enhances their searchability. This advanced search functionality allows for quick identification and retrieval of specific documents, saving valuable time and effort while managing large volumes of digital assets. "
            },
            {
                title: 'How secure is the Cloud Storage and Backup service provided by iAssureIT?',
                content: "We prioritize data security by providing secure cloud storage solutions. Our services ensure that your digital assets are protected, backed up, and accessible from anywhere while maintaining strict confidentiality and compliance with data protection standards. "
            },
            {
                title: 'What solutions does iAssureIT offer for Document Retention and Archiving? ',
                content: "We provide comprehensive solutions for long-term document retention and archiving, ensuring compliance with legal and regulatory requirements. Our services help in preserving your valuable information while minimizing the costs and risks associated with physical storage and potential document loss or damage."
            },
            {
                title: 'How does Document Collaboration and Workflow tools enhance productivity?',
                content: "Our Document Collaboration and Workflow tools enable seamless document sharing, version control, and tracking among team members. This fosters efficient collaboration, reduces redundancy, and ensures a smooth workflow, thus significantly enhancing productivity and project management efficiency. "
            },
            {
                title: 'What makes iAssureIT a reliable partner for Manual Documents to Digital Asset Services? ',
                content: "iAssureIT brings a legacy of over 150+ successful digital conversion projects, a team of seasoned professionals, and a commitment to delivering tailored solutions that align with your unique business objectives. Our long-term partnership approach focuses on continuous support and optimization, ensuring your digital assets continue to serve your evolving business needs. "
            },
            {
                title: 'How can I get started with iAssureIT’s Manual Documents to Digital Asset Services? ',
                content: "Embark on your digital transformation journey by reaching out to us today. Discuss your document conversion needs with our experts and discover how we can transform your manual documents into powerful digital assets. Click on the 'Let's Transform Documents Into Digital Assets Together!' button to get started!"
            },
        ]
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
            " object-fit py-36 lg:py-48 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload",
        blockTitle: "<span class=' uppercase'>Transforming Paper Trails </span> <br/><span class='font-extrabold uppercase'> into Digital Treasures</span>",
        classForLeftImageContainer: " text-center ",
        classForblockTitle: "BlockTitle text-white w-full text-center font-normal pb-10 leading-tight",
        classForblockContent: "px-10 lg:px-20 xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
        imageSrc: "/images/specific/Services/Manual-Documents/iAssureIT-manual-documents-3.webp",
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
                leftTitle: "High Quality Document Digitization services  ",
                img: "/images/specific/Services/MobileApp/Icons/1.webp"
            },
            {
                leftTitle: "Accurate data extraction and rapid retrieval system ",
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
                leftTitle: "Security and Compliance with data compliance regulations.  ",
                img: "/images/specific/Services/MobileApp/Icons/3.webp"
            },
            {
                leftTitle: " Proven track record with 150+ successful digital conversion projects ",
                img: "/images/specific/Services/MobileApp/Icons/4.webp"
            },

        ],
        dash: "border-white  mb-5 md:mb-3 lg:mt-20",

    };
    const content_ProblemAns1 = {
        blockTitle: " <span class='font-extrabold uppercase'>The Digital Transition Challenges Businesses Face<br/></span> <span class='font-normal uppercase'>  iAssureIT Digital Asset Solution </span>",
        classForblockTitle: "w-5/6 md:w-5/6 lg:w-2/3 xl:w-3/5 2xl:w-1/2 xxl:!w-2/5 mx-auto text-center  BlockTitle leading-tight  ",
        dash: "border-blue-700 mb-5 mt-10 md:mt-0",
        grid1Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-10",
        img1GridCss: " m-auto",
        img1: "/images/specific/Services/Manual-Documents/iAssureIT-manual-documents-4.webp",
        content1Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title1: "PROBLEM",
        title1Css: "BlockTitle font-extrabold text-left",
        subTitle1: "Legacy Systems and Data Migration  :",
        subTitle1Css: "font-bold subTitle my-3",
        para1: "Transitioning from data stored in older, incompatible formats manually to digital documentation without loss of data or quality. ",
        para1Css: "font-normal bodyTxt",
        grid2Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20",
        // img2GridCss:"",
        img2: "/images/specific/Services/Manual-Documents/iAssureIT-manual-documents-5.webp",
        content2Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title2: "iAssureIT Solution ",
        para2: "Our advanced scanning and imaging technologies like OCR, ICR, IDP, Barcode and QR code scanning, and CAD ensure a smooth transition, maintaining the quality and authenticity of your documents. ",
    }
    const content_ProblemAns2 = {
        grid1Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20",
        img1GridCss: "m-auto",
        img1: "/images/specific/Services/Manual-Documents/iAssureIT-manual-documents-7.webp",
        content1Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title1: "PROBLEM",
        title1Css: "BlockTitle font-montserrat  font-extrabold text-left",
        subTitle1: "Security Concerns, Data Privacy and Compliance  :",
        subTitle1Css: "font-bold subTitle my-3",
        para1: "Managing Security concerns with the increasing volume of digital data and adhering to data privacy regulations.   ",
        para1Css: "font-normal bodyTxt",
        grid2Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20 mb-20",
        // img2GridCss:"",
        img2: "/images/specific/Services/Manual-Documents/iAssureIT-manual-documents-8.webp",
        content2Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title2: "iAssureIT Solution ",
        // subTitle2:"Modernization Plan :",
        para2: "We engineer a streamlined document management system that allows the implementation of robust security measures to protect sensitive information while ensuring ",
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
            <BgImgLeftImgRtGrid inputData={content_NationalAwards} />

            <BgImgRightContent inputData={content_custBase} />
            {/* <CenterContentRepeatableBlocks inputData={content_MobileAppTechnology} /> */}
            <OurPortfolio inputData={content_CaseStudy} />
            <LeftImgRightRepeatableBlk inputData={content_WhyChoose} readMore={false} />
            <BgImgRightContent inputData={content_profitMargin} />
            <AccordionBlock inputData={content_accordion} />
            <BgImgRightContent inputData={content_contactUs} />
            <test2 />
        </div>
    )
}

//PB added metaData
ManualDocuments.getInitialProps = async () => {
    // Perform data fetching here (e.g., making API requests)
    var url = '/services/manual-documents-to-digital-assets'
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
export default ManualDocuments;