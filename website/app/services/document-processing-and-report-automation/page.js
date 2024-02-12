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
import BlogsList from "@/templates/Blog/BlogsList";
import CenterImgLeftRightRepeatableBlocks from "@/templates/RepeatableBlocks/CenterImgLeftRightRepeatableBlocks/page"
import SmallBanner from "@/templates/BannerBlocks/SmallBanner/SmallBanner";
import ProblemSolutionBlk from "@/templates/ContentBlocks/ProblemSolutionBlk/ProblemSolutionBlk";
import Autocarousel from "@/components/Autocarousel";
import CustomHead from "@/templates/CustomHead/CustomHead";

const DocumentProcessing = ({ data }) => {
    const content_leftContentBgImg = {
        id: "aboutBanner",
        bgImage: "/images/specific/Services/MobileApp/Images/1.webp",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/1.webp",
        logo: "",
        h1TxtLine1: "DOCUMENT PROCESSING   ",
        h1TxtLine1Css: " font-DrukText text-5xl md:text-3xl xl:text-7xl font-extrabold text-center md:text-left   place-content-left  justify-center content-left mb-5 ",
        h1TxtLine2: "AND REPORT AUTOMATION",
        h1TxtLine2Css: "outline-title  font-DrukText font-bold text-4xl md:text-3xl xl:text-7xl text-center md:text-left   place-content-left  justify-center content-left mb-5 ",
        bgImgCss: " py-20 h-auto xl:h-[990px] lazyload object-fit bg-cover bg-no-repeat relative  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        para: "Streamlining Document Handling and Report Generation",
        paraCss: " font-DrukText lcamelcase text-normal text-center md:text-left text-2xl md:text-3xl xl:text-5xl ",
        gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2   md:grid-cols-2  py-10  md:py-20 xl:py-0 2xl:py-20 h-auto md:h-full lg:h-full   xl:h-full 2xl:h-full  ",
        gridSubDivCss: " pb-32 md:pb-10 lg:pb-16 2xl:pb-48 my-auto text-white   md:pl-32 lg:pl-20 xl:pl-32 2xl:pl-60",
        image: "/images/specific/Services/Document-Processing/iAssureIT-document-processing-1.webp",
        imageCss: '  w-2/3 xl:w-4/5 2xl:w-full mx-auto my-auto object-fit lazyload place-content-center object-center ',
        imgTagcss: "lazyload  -mt-20    ",
        borderColor: "border-darkBlue",
    }
    const content_BgImgRightTxt_3 = {
        paraTitle: "At iAssureIT, we specialize in revolutionizing document processing and report automation, tailored to ease your document-centric operations and deliver precise, timely reports. We're not just solution providers; we're your digital transformation allies.",
        paraTitleClass: "subTitle text-justify font-normal",
        bgImgCss: "lazyload",
        pageTitle: "<span class='font-normal uppercase'>Streamlining Workflows</span> <br/><span class='font-extrabold uppercase'>Enhancing Efficiency</span>",
        pageTitleCss: "w-full text-center  BlockTitle leading-tight",
        gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5  md:pl-6 md:pl-16 lg:pl-20 2xl:pl-28 xxl:pl-40 xxl:px-10",
        // gridCol1Css: "w-1/2 mx-auto",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2 md:px-10 xl:px-20 2xl:px-32 xxl:px-48 lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit  bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/Document-Processing/iAssureIT-document-processing-2.webp",
        imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
        dash: "border-blue-700 mb-5 md:mb-3",
    }
    const content_developerBlk = {
        paraTitle: "<span class='text-light font-bold uppercase'> Harness the power of Automated Documentation and Reporting for <br/> <span class='title text-orange-400 text-left uppercase' > enhanced operational efficiency and insightful decision-making. </span>",
        paraTitleClass: "title text-left font-normal leading-tight",
        bgImage: "/images/specific/Services/MobileApp/Images/9.webp",
        bgImgCss: "lazyload",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/3.webp",
        gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
        // gridCol1Css: "w-1/2 mx-auto",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/Document-Processing/iAssureIT-document-processing-6.webp",
        imageCss: "mx-auto pt-20 sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
    }
    const content_SmallBanner2 = {
        id: "SmallBanner",
        bgImage: "/images/specific/Services/MobileApp/Images/12.webp",
        smallBGImage: "/images/specific/Services/MobileApp/Images/12.webp",
        title: "Harness the power of Automated Documentation and Reporting for enhanced operational efficiency and insightful decision-making.",
        titleClass: " text-center mx-auto md:float-right my-auto font-normal BlockTitle leading-tight",
        className: "h-auto w-full mx-auto",
        alt: "reserve",
        bgImgCss: "py-10 2xl:py-5 bg-cover bg-no-repeat  bg-left-bottom lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]",
        gridCss: "grid grid-cols-1 sm:grid-cols-1  md:grid-cols-1  lg:grid-cols-1 2xl:grid-cols-1 px-5 h-full w-full content-center  place-content-center my-auto md:py-20",
        gridCol1Class: "mx-auto px-4 py-auto text-white",
        // para: "Learn More ",
        // paraCss: "BlockTitle text-light text-center font-extrabold md:col-span-2 2xl:col-span-2",
        urlName: "Learn More",
        linkCss: "BlockTitle text-light text-center font-extrabold   mt-5 mx-auto leading-relaxed",
        url: "/contact-us"

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
        paraTitle: "<span class='text-light font-bold uppercase'> Propel your business into a domain of digital proficiency with iAssureIT, where every document and report is a stepping stone towards informed decisions.<br/> <span class='title text-orange-400 text-left uppercase' >Let's Transform Your Document and Reporting Workflow Together!</span>",
        paraTitleClass: "title text-left font-normal leading-tight",
        gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-16    lg:pl-20 xl:px-4 2xl:px-20 xxl:px-32",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/Document-Processing/iAssureIT-document-processing-9.webp",
        imageCss: "mx-auto py-20 sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
    }
    const content_CenterContentRepeatableBlocks = {
        id: "Services",
        blockTitle: "<span class='font-extrabold uppercase'>OUR Document Processing and Report Automation Services</span>",
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
                cardTitle: 'Document Digitization',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
                content: "Transitioning your paper trail into a digital highway, facilitating easy access, and effective document management.",
            },
            {
                id: "service2",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-2.webp',
                altImage: 'imageDescription',
                cardTitle: 'Data Extraction and Capture',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
                content: "Employing smart extraction tools to capture critical data, transforming documents into valuable information resources.",
            },
            {
                id: "service3",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-3.webp',
                altImage: 'imageDescription',
                cardTitle: 'Optical Character Recognition (OCR)',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
                content: "Converting scanned documents into editable formats, enabling efficient data retrieval and analysis.",
            },
            {
                id: "service4",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-4.webp',
                altImage: 'imageDescription',
                cardTitle: 'Natural Language Processing (NLP)',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
                content: "NLP techniques is used to understand and process unstructured text, enabling automated analysis of documents like emails, reports, and articles.",
            },
            {
                id: "service5",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-5.webp',
                altImage: 'imageDescription',
                cardTitle: 'Document Classification and Indexing',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
                content: "Systematic categorization and indexing for swift document retrieval, ensuring an organized digital document repository.",
            },
            {
                id: "service6",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-6.webp',
                altImage: 'imageDescription',
                cardTitle: 'Forms Processing',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
                content: "Automating the handling of various forms, ensuring accurate data capture and streamlined workflows.",
            },
            {
                id: "service7",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-7.webp',
                altImage: 'imageDescription',
                cardTitle: 'Document Workflow Automation',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
                content: "Redefining document workflows through automation, enabling seamless collaboration and version control.",
            },
            {
                id: "service8",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-8.webp',
                altImage: 'imageDescription',
                cardTitle: 'Data Validation and Verification',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
                content: "Ensuring data integrity through rigorous validation and verification, maintaining the highest quality standards.",
            },
            {
                id: "service9",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-9.webp',
                altImage: 'imageDescription',
                cardTitle: 'Security and Compliance',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
                content: "Upholding robust security protocols to ensure document confidentiality and compliance with industry regulations.",
            },
            {
                id: "service10",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-1.webp',
                altImage: 'imageDescription',
                cardTitle: 'Custom Report Development',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
                content: "Tailored report generation meeting your specific business needs, turning data into insightful narratives.",
            },
            {
                id: "service11",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-2.webp',
                altImage: 'imageDescription',
                cardTitle: 'Data Integration and Aggregation',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
                content: "Centralizing data sources for a holistic reporting perspective, ensuring data consistency and completeness.",
            },
            {
                id: "service12",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-3.webp',
                altImage: 'imageDescription',
                cardTitle: 'Automated Report Generation',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
                content: "Facilitating timely report generation with automated processes, reducing manual intervention.",
            },
            {
                id: "service13",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-4.webp',
                altImage: 'imageDescription',
                cardTitle: 'Dynamic Data Visualization',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
                content: "Transforming data into visual insights, facilitating easy interpretation and informed decision-making.",
            },
            {
                id: "service14",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-5.webp',
                altImage: 'imageDescription',
                cardTitle: 'Report Distribution and Collaboration',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
                content: "Ensuring reports reach the relevant stakeholders timely, promoting collaborative analysis and quicker decision-making.",
            },
            {
                id: "service15",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-6.webp',
                altImage: 'imageDescription',
                cardTitle: 'Report Analytics and Insights',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
                content: "Unveiling hidden insights through advanced analytics, aiding in strategic decision-making.",
            },
            {
                id: "service16",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-7.webp',
                altImage: 'imageDescription',
                cardTitle: 'Report Automation Consulting',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
                content: "Providing expert consultancy to identify automation opportunities and devising a strategic roadmap for implementation.",
            },
            {
                id: "service17",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-8.webp',
                altImage: 'imageDescription',
                cardTitle: 'Scalable and Flexible Solutions',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
                content: "Offering scalable solutions to meet your evolving report automation needs, aligning with your business growth.",
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
        bgImgCss: "lazyload",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/6.webp",
        paraTitle: "<span class='text-light font-bold uppercase'>  Unleash Productivity with Automated Document Handling and Reporting</span>",
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
        pageTitle: "<span class=' font-normal'>WHY CHOOSE IASSUREIT FOR</span> <br/> <span class='font-extrabold uppercase'>Document Processing and Report Automation?</span> ",
        pageTitleCss: "w-full text-center   BlockTitle leading-tight ",
        bgImage: "/images/specific/Services/Document-Processing/iAssureIT-document-processing-11.webp",
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
                description: "A seasoned team focused on leveraging document processing and report automation to drive operational efficiency.",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Quality Assurance",
                description: "Extensive validation to ensure data accuracy and compliance, enabling reliable document management and reporting.",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Custom Solutions",
                description: "Tailoring solutions to meet your unique business objectives, ensuring a seamless transition to automated workflows.",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Continuous Support",
                description: "Long-term partnership aimed at continuously optimizing document and report processes, ensuring alignment with evolving business needs.",
            },
        ],
        dash: "border-blue-700 mb-5 ",

    }

    const content_profitMargin = {
        bgImage: "/images/specific/Services/MobileApp/Images/20.webp",
        bgImgCss: "lazyload",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/5.webp",
        paraTitle: "Embark on a journey towards streamlined document management and insightful reporting. Discover more about our robust Document Processing and Report Automation services.<br/> <span class='title text-orange-400 text-left'> Contact us today</span>",
        paraTitleClass: "title text-white text-left leading-tight",
        gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/Document-Processing/iAssureIT-document-processing-10.webp",
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
                title: 'Why is Document Processing important?',
                content: "Document processing is a cornerstone for efficient data management within organizations. It translates into streamlined workflows, accurate data extraction, and quick information retrieval, significantly reducing the time and resources spent on manual data handling. This efficiency is vital for making informed decisions swiftly and maintaining a competitive edge in the market."
            },
            {
                title: 'What does ‘Report Automation’ entail?',
                content: "Report Automation involves the use of technology to generate reports automatically without manual intervention. It encompasses data integration from various sources, applying predefined templates and formatting, and delivering comprehensive reports on a timely basis. This automated process not only eliminates manual errors but also provides crucial insights promptly, enabling strategic decision-making."
            },
            {
                title: 'How does iAssureIT approach Document Digitization?',
                content: "Our process begins with a thorough understanding of your document management needs. We employ advanced scanning and imaging technologies to convert your physical documents into digital formats. The digitized documents are then organized and indexed meticulously for easy access and retrieval, ensuring a seamless transition from paper-based to digital document management."
            },
            {
                title: 'How is Data Extraction and Capture performed?',
                content: "Utilizing intelligent data extraction techniques, we accurately capture critical information from various documents including invoices, receipts, forms, and contracts. This precision in data capture saves significant time and effort that would otherwise be spent on manual data entry, ensuring a reliable foundation for further data processing and analysis."
            },
            {
                title: 'Can you elaborate on the Optical Character Recognition (OCR) technology?',
                content: "OCR technology is employed to convert scanned documents into editable and searchable text. This transformation allows for efficient data extraction, keyword searches, and text content analysis, enhancing the overall accessibility and productivity of document management systems."
            },
            {
                title: 'How does Document Classification and Indexing benefit an organization?',
                content: "Document Classification and Indexing create a well-organized digital repository where documents are categorized and indexed using relevant metadata and tags. This systematic organization facilitates quick retrieval of specific files, saving time, and improving operational efficiency."
            },
            {
                title: 'What advantages does Forms Processing automation bring?',
                content: "Automating Forms Processing significantly accelerates the data capture process from various forms such as surveys, applications, and questionnaires. By employing advanced form recognition software, data capture and validation become accurate and efficient, reducing manual errors and contributing to faster decision-making."
            },
            {
                title: 'How does Document Workflow Automation enhance efficiency?',
                content: "Document Workflow Automation streamlines document-centric processes by automating routine tasks, ensuring seamless collaboration, version control, and task management. This automation minimizes manual intervention, reducing the likelihood of errors, and expediting the processing from creation to approval."
            },
            {
                title: 'How does iAssureIT ensure Security and Compliance in Document Processing?',
                content: "We prioritize the security and confidentiality of your documents by implementing robust data protection measures such as encryption and access controls. Compliance with industry regulations is adhered to rigorously, ensuring the security of sensitive information throughout the document processing lifecycle."
            },
            {
                title: 'How can I get started with iAssureIT’s Document Processing and Report Automation services?',
                content: "Getting started is simple. Reach out to us to discuss your document processing and report automation needs. Our team is ready to provide personalized solutions that will significantly enhance your data management processes. Click on the ‘Contact Us Today’ button to begin your journey towards streamlined document processing and insightful report automation with iAssureIT."
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
            "object-fit py-48 bg-cover h-auto bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload",
        blockContent: "At iAssureIT, we specialize in revolutionizing document processing and report automation, tailored to ease your document-centric operations and deliver precise, timely reports. We're not just solution providers; we're your digital transformation allies.",
        blockTitle: "<span class='uppercase'>Elevating Operational Efficiency </span> <br/><span class='font-extrabold uppercase'>Transforming Business Insights</span>",
        classForLeftImageContainer: " text-center ",
        classForblockTitle: "BlockTitle px-5 md:px-1 text-light w-full text-center font-normal pb-10 leading-tight",
        classForblockContent: "px-5 lg:px-20 xl:pb-14 pb-10 h-auto text-lg md:text-2xl xl:text-xl 2xl:text-xl font-bold md:mx-20 text-center text-white my-auto  justify-center",
        imageSrc: "/images/specific/Services/Document-Processing/iAssureIT-document-processing-3.webp",
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
        classForContainer: "grid grid-cols-1 md:grid-cols-3 px-2 lg:px-16 2xl:px-48 py-2 md:py-12 2xl:pt-5 md:pb-20",
        classForLeftBlockContainer: "w-full  p-2 item-center my-auto place-content-center content-center",
        classForLeftContentContainer: "w-full rounded overflow-hidden  mb-4 ",
        classForLeftContentinsideContainer: "w-auto p-4 text-right my-auto",
        classForLeftContenTitleStyle: "font-normal text-white text-left sm:text-lg mb-2",
        classForRightContenTitleStyle: "font-normal text-white  text-left md:text-right sm:text-lg mb-2",
        leftBlocks: [
            {
                leftTitle: "Document processing solutions that transcend conventional methods",
                img: "/images/specific/Services/MobileApp/Icons/1.webp"
            },
            {
                leftTitle: "Report automation expertise that seamlessly merges data integration fostering insightful decision-making.",
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
                leftTitle: "Boasting a cadre of 150+ experienced professionals, poised to transition your data management and reporting systems ",
                img: "/images/specific/Services/MobileApp/Icons/3.webp"
            },
            {
                leftTitle: "A rich portfolio of over 170+ successful projects, continually evolving to align with the dynamic digital ecosystem.",
                img: "/images/specific/Services/MobileApp/Icons/4.webp"
            },

        ],
        dash: "border-white  mb-5 md:mb-3 mt-5 md:mt-20",

    };
    const content_ProblemAns1 = {
        blockTitle: " <span class='font-extrabold uppercase'>The Document Processing and Report Automation Challenges </span>",
        classForblockTitle: "w-full text-center  BlockTitle leading-tight  ",
        dash: "border-blue-700 mb-5 mt-10 md:mt-1",
        grid1Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-20 gap-x-5 mt-10",
        img1GridCss: " m-auto",
        img1: "/images/specific/Services/Document-Processing/iAssureIT-document-processing-4.webp",
        content1Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title1: "PROBLEM",
        title1Css: "BlockTitle font-extrabold text-left",
        subTitle1: "Seamless Document Transition:",
        subTitle1Css: "font-bold subTitle my-3",
        para1: "Transitioning from paper-based to digital document management.",
        para1Css: "font-normal bodyTxt",
        grid2Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-20 gap-x-5 mt-20",
        // img2GridCss:"",
        img2: "/images/specific/Services/Document-Processing/iAssureIT-document-processing-5.webp",
        content2Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title2: "iAssureIT Solution ",
        subTitle2: "",
        para2: "Our Document Digitization service leverages cutting-edge scanning and OCR technology to convert your physical documents into searchable, editable digital formats, thus, setting the foundation for an efficient digital document workflow.",
        paraCss2: "",
        // listData:[
        //   "With extensive experience in both iOS and Android platforms, our seasoned developers are equipped to tackle the challenge of platform fragmentation head-on.",
        // "We harness the power of cross-platform development frameworks like React  Native and Flutter, ensuring your app reaches the widest audience without compromising on quality or efficiency. "
        // ],
        // listCss:"font-normal bodyTxt px-5 list-decimal py-2 md:px-7"

    }
    const content_ProblemAns2 = {
        grid1Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-20 gap-x-5 mt-20",
        img1GridCss: "m-auto",
        img1: "/images/specific/Services/Document-Processing/iAssureIT-document-processing-7png.webp",
        content1Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title1: "PROBLEM",
        title1Css: "BlockTitle font-extrabold text-left",
        subTitle1: "Efficient Report Generation:",
        subTitle1Css: "font-bold subTitle my-3",
        para1: "Generating timely, accurate reports from a vast pool of data.",
        para1Css: "font-normal bodyTxt",
        grid2Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-20 gap-x-5 mt-20 mb-20",
        // img2GridCss:"",
        img2: "/images/specific/Services/Document-Processing/iAssureIT-document-processing-8png.webp",
        content2Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title2: "iAssureIT Solution ",
        // subTitle2:"Designing Beyond Aesthetics with iAssureiT",
        para2: "Our Report Automation services streamline report generation through predefined templates and scheduling, translating raw data into actionable insights effortlessly.",
        paraCss2: "",

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
        </div>
    )
}

//PB added metaData
DocumentProcessing.getInitialProps = async () => {
    // Perform data fetching here (e.g., making API requests)
    var url = '/services/document-processing-and-report-automation'
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
export default DocumentProcessing;