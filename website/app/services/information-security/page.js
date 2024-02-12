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

const InformationSecurity = ({ data }) => {
    const content_leftContentBgImg = {
        id: "infoSecurityBanner",
        bgImage: "/images/specific/Services/MobileApp/Images/1.webp",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/1.webp",
        logo: "",
        h1TxtLine1: "Information Security",
        h1TxtLine1Css: " font-DrukText text-5xl md:text-3xl xl:text-8xl font-extrabold text-center md:text-left   place-content-left  justify-center content-left mb-5 ",
        h1TxtLine2: "",
        h1TxtLine2Css: "outline-title  font-DrukText font-bold text-5xl md:text-3xl xl:text-8xl text-center md:text-left   place-content-left  justify-center content-left mb-5 ",
        bgImgCss: "  py-20 h-auto  xl:h-[990px] lazyload object-fit bg-cover bg-no-repeat relative  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        para: "iAssureIT – Solidifying Digital Fortresses and Trust Augmenting Digital Security",
        paraCss: " font-DrukText lcamelcase text-normal text-center md:text-left text-2xl md:text-3xl xl:text-5xl ",
        gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2   md:grid-cols-2  py-10  md:py-20 xl:py-0 2xl:py-20 h-auto md:h-full lg:h-full   xl:h-full 2xl:h-full  ",
        gridSubDivCss: " pb-32 md:pb-10 lg:pb-16 2xl:pb-48 my-auto text-white   md:pl-32 lg:pl-20 xl:pl-32 2xl:pl-60",
        image: "/images/specific/Services/InfoSecurity/iAssureIT-Information-Security-image-1.webp",
        imageCss: '  w-2/3 xl:w-4/5 2xl:w-full mx-auto my-auto object-fit lazyload place-content-center object-center ',
        imgTagcss: "lazyload  -mt-20    ",
        borderColor: "border-darkBlue",
    }
    // h1TxtCss: " -mt-20 2xl:-mt-32  text-xl md:text-3xl xl:text-7xl font-extrabold text-center md:text-left content-center  place-content-left  justify-center content-left ",
    // bgImgCss: "h-screen lazyload object-fit bg-cover bg-no-repeat relative  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    // gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  md:grid-cols-2  lg:h-screen  xl:h-screen h-screen px-20 2xl:px-32 ",
    // image: "/images/specific/Contact_Us/2.webp",
    // imageCss: ' w-1/2 mx-auto my-auto object-fit lazyload place-content-bottom object-bottom ' ,

    const content_BgImgRightTxt_3 = {
        id: "inffoSecurityBlk2",
        paraTitle: "At iAssureIT, we safeguard vital digital assets, ensuring data remains both confidential and accessible. We built their expertise in the vast realm of information security   upon an intricate understanding of modern cyber threats and strategies to counteract them. More than just security analysts, we stand as a company's frontline defense against cyber threats. <ul class='list-disc list-inside'>  <li>Comprehensive information security services that t evolve with the changing threat landscape. </li>  <li>Their security gurus utilize a meticulous, research-driven approach. </li>  <li>A team of 150+ seasoned security professionals ready to shield and uphold Proud legacy of over 200+ successful security implementations and endeavors,  </li></ul>",
        paraTitleClass: "text-lg md:text-lg xl:text-xl 2xl:text-2xl text-justify font-normal ",
        bgImgCss: "lazyload",
        pageTitle: "<span class='font-normal leading-relaxed'>EXPAND YOUR CLIENTELE WITH </span> <br/><span class='font-extrabold '>INFORMATION SECURITY </span>",
        pageTitleCss: "w-full text-center  BlockTitle leading-tight",
        gridColCss:
            "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-10 md:pl-6 md:pl-16 lg:pl-20 2xl:pl-28 xxl:pl-40 xxl:px-10",
        // gridCol1Css: "w-1/2 mx-auto",
        gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2 md:px-10 xl:px-20 2xl:px-32 xxl:px-48 lg:h-full   xl:h-full h-full content-center ",
        bannerClass: "object-fit  bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/InfoSecurity/iAssureIT-Information-Security-image-2.webp",
        imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
        dash: "border-blue-700 mb-5 md:mb-3",
    }
    const content_DummyTxt1 = {
        dummyText: "THE TOP CHALLENGES IN CRAFTING A POWERFUL MOBILE APP"
    }
    const content_developerBlk = {
        paraTitle: "<span class='text-light font-extrabold uppercase leading-relaxed'> Protect Your Data, Secure Your Future with <span class='normal-case'> iAssureiT! </span> Get a comprehensive security assessment<br/> <span class='title text-orange-400 text-left uppercase' > Contact us now:  8459748828 </span>",
        paraTitleClass: "title text-left font-normal leading-tight",
        bgImage: "/images/specific/Services/MobileApp/Images/9.webp",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/3.webp",


        gridColCss:
            "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
        // gridCol1Css: "w-1/2 mx-auto",
        gridClass:
            "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass:
            "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/InfoSecurity/iAssureIT-Information-Security-image-6.webp",
        imageCss:
            "mx-auto pt-20 sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
    }
    const content_DummyTxt2 = {
        dummyText: "Problem and solution Block2"
    }
    const content_SmallBanner2 = {
        id: "Banner",
        bgImage: "/images/specific/Services/MobileApp/Images/12.webp",
        smallBGImage: "/images/specific/Services/MobileApp/Images/12.webp",
        title: "99.97% Threat Detection Rate: Our vigilant systems and experts catch nearly every threat, ensuring your data remains secure.",
        titleClass: " text-center mx-auto md:float-right my-auto font-extrabold BlockTitle leading-relaxed",
        className: "h-auto w-full mx-auto",
        alt: "reserve",
        bgImgCss: "py-10 2xl:py-5 bg-cover bg-no-repeat  bg-left-bottom lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]",
        gridCss: "grid grid-cols-1   gap-x-10 h-full w-full content-center  place-content-center my-auto md:py-20",
        gridCol1Class: "px-4 md:px-20 text-white"
        // para: "Please Provide the Data",
        // paraCss: "BlockTitle text-light text-center md:text-left md:col-span-2 2xl:col-span-2"
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
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/3.webp",
        bgImgCss: "lazyload",
        paraTitle: "<span class='text-light font-bold leading-relaxed'> Ensure the security of your data and shield it from cyber threats with iAssureiT's specialized Data Security Services,<br/> <span class='title text-orange-400 text-left' > Take immediate steps to maintain the safety of your information.”</span>",
        paraTitleClass: "title text-justify md:text-left font-normal",
        gridColCss:
            "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-16    lg:pl-20 xl:px-4 2xl:px-20 xxl:px-32",
        gridClass:
            "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass:
            "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/InfoSecurity/iAssureIT-Information-Security-image-9.webp",
        imageCss:
            "mx-auto py-20 sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
    }
    const content_CenterContentRepeatableBlocks = {
        id: "Services",
        blockTitle: "<span class='font-extrabold uppercase '>Advanced Information Security Offerings</span>",
        classForblockTitle: " w-full text-center BlockTitle xl:py-5 py-10 leading-relaxed ",
        classForNoOfCards:
            "px-10 lg:px-32 lg:mt-5  max-w-8xl text-center justify-evenly grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-6",
        classForCards:
            " border shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white p-10 mb-7 rounded-xl",
        classForCardTitle:
            "text-center  text-darkGray title  font-semibold p-3 pt-20",
        classForCardTitle_2:
            "font-bold text-md text-primary dark:text-primary-400 p-5",
        classForCardImage:
            "w-auto 2xl:w-auto mx-auto p-5 xl:p-5 2xl:p-5 lazyload bg-gray-100 rounded-full ",
        classForblockContent:
            "text-center mb-3",
        // blockContent           : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        classForImg: "p-10 overflow-hidden bg-cover bg-no-repeat  lg:p-8 -mt-24 lg:-mt-28 xl:-mt-28 2xl:-mt-24",
        displayAnimation: "true",
        cardsArray: [
            {
                id: "info1",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-1.webp',
                altImage: 'imageDescription',
                cardTitle: 'Threat Analysis and Risk Management ',
                // cardTitle_2       : 'Block subtitle',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
                content: "Rigorous evaluations to discern potential threats and tailor-made strategies to mitigate them. ",
                // url: "/about-us",
                // urlName: "READ MORE",
                // linkCss: "text-blue-700  font-medium text-md md:text-lg mt-3"
            },
            {
                id: "info2",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-2.webp',
                altImage: 'imageDescription',
                cardTitle: 'Penetration Testing',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
                content: "Real-world simulated cyber-attacks to gauge and reinforce an organization's digital resilience. ",
            },

            {
                id: "info3",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-3.webp',
                altImage: 'imageDescription',
                cardTitle: 'Data Protection and Encryption',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
                content: "Bolstering data sanctity with cutting-edge encryption  protocols and secure access controls. ",
            },
            {
                id: "info4",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-4.webp',
                altImage: 'imageDescription',
                cardTitle: 'Security Training Initiatives',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
                content: "Custom modules to inculcate best security practices,  enhancing overall organizational defense against potential threats. ",
            },
            {
                id: "info5",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-5.webp',
                altImage: 'imageDescription',
                cardTitle: 'Incident Management & Response',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
                content: "Swift, tactical responses to security breaches,  minimizing data loss and ensuring speedy operational recovery. ",
            },
            {
                id: "info6",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-6.webp',
                altImage: 'imageDescription',
                cardTitle: 'Continuous Monitoring & Adaptation',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
                content: "Ensuring round-the-clock vigilance, adapting  security measures to ever-evolving cyber threats. ",
            },
            {
                id: "info7",
                cardImage: '/images/specific/Services/ServicesIcons/iAssureIT-icon-7.webp',
                altImage: 'imageDescription',
                cardTitle: 'Compliance & Governance',
                classForContent: "justify-content h-auto text-center text-lightGray my-auto subTitle",
                content: "A focused approach to ensuring every facet of an  organization adheres to stringent security standards and regulations. ",
            },
        ],
        dash: "border-blue-700 mt-20",
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
        bgImgCss: "lazyload ",
        paraTitle: "<span class='text-light font-bold uppercase leading-relaxed'> Lock Down Your Data Today! <br/> <span class='title text-orange-400 text-left uppercase' > Prevent data breaches and cyber threats with <span class='normal-case'> iAssureiT's </span> expert Data Security Services. Act now to keep your information safe!  <br/> Dial: 8459748828</span>",
        paraTitleClass: "title text-left font-normal leading-tight",
        gridColCss:
            "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
        gridClass:
            "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center py-5 md:py-20",
        bannerClass:
            "py-32 md:py-2 object-fit  bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/InfoSecurity/iAssureIT-Information-Security-image-10.webp",
        imageCss:
            "mx-auto  sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
    }
    const content_MobileAppTechnology = {
        id: "MobileAppTechnology",
        blockTitle: "OUR RANGE OF  <span class='font-extrabold'>Please Provide content</span>",
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
    const content_WhyChoose = {
        id: "whyChoose",
        sectionClass: "mx-auto text-center px-2 md:px-8 pt-10 container md:mt-20",
        pageTitle: "<span class=' font-normal leading-tight'>WHY OTP FOR</span> <br/> <span class='font-extrabold uppercase leading-tight'> <span class='normal-case'> iAssureIT's </span> Expertise in Information Security?</span> ",
        pageTitleCss: "w-full text-center   BlockTitle leading-tight ",
        bgImage: "/images/specific/Services/InfoSecurity/iAssureIT-Information-Security-image-11.webp",
        bgImageCss: 'w-full h-auto object-cover',
        bigImageAlt: "BigImage",
        gridCss: "grid grid-cols-1 lg:grid-cols-2 gap-10",
        repeatedBlkCss: " shadow-none flex items-start sm:h-36 md:h-auto my-10  ",
        imgCss: "flex-none bg-purple h-auto   items-start rounded mr-3 md:mr-10 object-cover shadow-[4.0px_8.0px_8.0px_rgba(97,143,237,0.8)]",
        titleCss: "subTitle font-bold mb-2",
        desCss: "text-gray-700 text-[18px] sm:text-base overflow-hidden",
        linkCss: "float-right px-4 text-skyBlue",
        repeatedBlocks: [
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Proficiency",
                description: "A skilled brigade dedicated to implementing modern security paradigms to safeguard digital assets.",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Quality Assurance",
                description: "Rigorous validation processes to ensure optimal cyber defense.",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Bespoke Strategies",
                description: "Tailored security blueprints that align with specific business challenges and objectives.",
            },
            {
                imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
                title: "Enduring Partnership",
                description: " A lasting association, promising relentless security enhancement, and adaptation to shifting cyber threats.",
            },

        ],
        dash: "border-blue-700 mb-5 ",

    }

    const content_profitMargin = {
        bgImage: "/images/specific/Services/MobileApp/Images/20.webp",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/5.webp",
        bgImgCss: "lazyload",
        paraTitle: "<span class=' leading-relaxed'>Data Safety Starts Here! Embark on the path to unparalleled digital protection. Dive deeper into our extensive Information Security offerings. <br/> <span class='title text-orange-400 text-left'>Email Us Today! <br/> info@iassureit.com </span></span>",
        paraTitleClass: "title text-white text-left leading-tight",
        gridColCss:
            "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-4 xxl:pl-40",
        gridClass:
            "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
        bannerClass:
            "object-fit py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Services/InfoSecurity/iAssureIT-Information-Security-image-12.webp",
        imageCss:
            "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
    }
    const content_accordion = {
        id: "mobileAppFAQ",
        dash: "border-blue-700 md:mb-5 mt-7 md:mt-20",
        pageTitle: "FAQS",
        pageTitleCss:
            " text-gray w-full text-center font-extrabold BlockTitle mb-10",
        accordionData: [

            {
                title: 'Why is Information Security crucial?',
                content: "In this digital age, Information Security is paramount as it directly influences stakeholder trust and business longevity. Robust security protocols prevent data breaches, ensuring business continuity, and upholding brand reputation."
            },
            {
                title: 'How does iAssureIT approach Vulnerability Assessments?',
                content: "hey employ industry-leading tools coupled with their vast expertise to identify even the most elusive vulnerabilities, offering insights and strategies for risk mitigation."
            },
            {
                title: 'What is the significance of Penetration Testing in digital security? ',
                content: "Penetration Testing mimics real-world cyber-attacks to gauge an organization's vulnerability. It's an indispensable tool in the security arsenal, offering insights into potential weak points before they're exploited."
            },
            {
                title: 'Can you elaborate on Data Protection and Encryption?',
                content: "They emphasize ensuring the sanctity of sensitive information. Through robust encryption techniques and stringent access controls, they ensure data remains both confidential and untampered."
            },
            {
                title: 'How vital is Security Training to an organization? ',
                content: "An informed workforce is a first line of defense against cyber threats. Through their customized training initiatives, they emphasize best practices, minimizing the risk of breaches from inadvertent human errors."
            },
            {
                title: 'How does iAssureIT manage and respond to security incidents? ',
                content: "Their dedicated team swiftly moves to contain security breaches, followed by in-depth investigations to ascertain the breach's extent, ensuring minimal data compromise and timely operational recovery."
            },
            {
                title: 'How is Continuous Monitoring integral to information security? ',
                content: "In the realm of cyber threats, complacency can lead to disaster. Their round-the-clock monitoring ensures real-time threat detection, safeguarding digital assets at all times."
            },
            {
                title: 'What does Compliance & Governance entail in Information Security? ',
                content: "It's about ensuring every digital operation adheres to stringent security norms and regulations, thereby upholding organizational integrity and avoiding legal ramifications."
            },
            {
                title: 'How can businesses commence their association with iAssureIT’s Information Security Services? ',
                content: "Organizations can reach out to discuss their specific challenges and requirements. Simply click on the 'Fortify Your Digital Realms with Us!' button to begin this association."
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
        id: "contactUs",
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
        id: "infoSecurityBlk3",
        bgImage: "/images/specific/Services/MobileApp/Images/4.webp",
        smallBGImage: "/images/specific/Services/MobileApp/mobAppDevResImg/2.webp",
        bgImgCss:
            " object-fit py-48 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload",

        blockTitle: "Safeguarding Information <br/><span class='font-extrabold'>Empowering Trust</span>",
        classForLeftImageContainer: " text-center ",
        classForblockTitle: "BlockTitle text-light w-full text-center font-normal pb-10 leading-tight",
        classForblockContent: "px-10 lg:px-20 xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
        imageSrc: "/images/specific/Services/InfoSecurity/iAssureIT-Information-Security-image-3.webp",
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
                leftTitle: "We promise a stellar 4+ rating on both App Store and Google Play",
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
        dash: "border-white  mb-5 md:mb-3 mt-1 md:mt-20",

    };
    const content_ProblemAns1 = {
        id: "infoSecProblem1",
        blockTitle: " <span class='font-extrabold leading-relaxed'>Challenges in Digital Security <br/></span> <span class='font-normal'>  iAssureIT's Robust Solutions </span>",
        classForblockTitle: "w-full text-center  BlockTitle leading-tight  ",
        dash: "border-blue-700 mb-5 mt-10",
        grid1Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-10",

        img1GridCss: " m-auto",
        img1: "/images/specific/Services/InfoSecurity/iAssureIT-Information-Security-image-4.webp",
        content1Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title1: "PROBLEM",
        title1Css: "text-2xl md:text-3xl xl:text-3xl   font-extrabold text-left leading-relaxed",
        subTitle1: "Comprehensive Threat Analysis:",
        subTitle1Css: "font-semibold subTitle my-3",
        para1: "Identifying potential vulnerabilities within sprawling digital ecosystems. ",
        para1Css: "font-normal text-lg md:text-xl xl:text-xl  leading-relaxed",
        grid2Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20 lg:mt-10",
        // img2GridCss:"",
        img2: "/images/specific/Services/InfoSecurity/iAssureIT-Information-Security-image-5.webp",
        content2Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title2: "iAssureIT Solution ",
        // subTitle2: "One App, Every Device with iAssureIT",
        para2: "Our exhaustive Vulnerability Assessments shine a light on the faintest weak points, offering actionable steps for fortification. ",
        paraCss2: "",
        // listData: [
        //     "With extensive experience in both iOS and Android platforms, our seasoned developers are equipped to tackle the challenge of platform fragmentation head-on.",
        //     "We harness the power of cross-platform development frameworks like React  Native and Flutter, ensuring your app reaches the widest audience without compromising on quality or efficiency. "
        // ],
        // listCss: "font-normal bodyTxt px-5 list-decimal py-2 md:px-7"

    }
    const content_ProblemAns2 = {
        id: "infoSecProblem2",
        grid1Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-10",
        img1GridCss: "m-auto",
        img1: "/images/specific/Services/InfoSecurity/iAssureIT-Information-Security-image-7.webp",
        content1Css:
            "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title1: "PROBLEM",
        title1Css: "text-2xl md:text-3xl xl:text-3xl mb-2  font-extrabold text-left leading-relaxed",
        subTitle1: "Ensuring Compliance & Governance :",
        subTitle1Css: "font-semibold subTitle my-3",
        para1: " Meeting the ever-growing regulatory and industry-specific compliance mandates.     ",
        para1Css: "font-normal text-lg md:text-2xl xl:text-xl leading-relaxed",
        grid2Css: "grid grid-cols-1 md:grid-cols-4 px-10 2xl:px-24 gap-x-5 mt-20 lg:mt-10 mb-10 ",

        // img2GridCss:"",
        img2: "/images/specific/Services/InfoSecurity/iAssureIT-Information-Security-image-8.webp",
        content2Css: "col-span-3 p-5 md:p-10 block border shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl",
        title2: "iAssureIT Solution ",
        // subTitle2: "Designing Beyond Aesthetics with iAssureiT",
        para2: "Our dedicated team ensures seamless alignment with standards such as GDPR, HIPAA, and PCI DSS, ensuring businesses operate within legal confines with robust security protocols.",
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
            <LeftImgRightRepeatableBlk inputData={content_WhyChoose} readMore={false} />
            <BgImgRightContent inputData={content_profitMargin} />
            <AccordionBlock inputData={content_accordion} />
            {/* <BlogsList inputData={content_BlogList} /> */}
            <BgImgRightContent inputData={content_contactUs} />
        </div>
    )
}

//PB added metaData
InformationSecurity.getInitialProps = async () => {
    // Perform data fetching here (e.g., making API requests)
    var url = '/services/information-security'
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
export default InformationSecurity;