"use client";
import axios from "axios";
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react"
import BgImgLeftContentRtImg from "@/templates/ContentBlocks/BgImgLeftContent/BgImgLeftContentRtImg";
import CenterImgCenterContentRepeatableBlocks from "@/templates/RepeatableBlocks/CenterImgCenterContentRepeatableBlocks/CenterImgCenterContentRepeatableBlocks";
import BgImgRightContent from "@/templates/ContentBlocks/BgImgRightContent/BgImgRightContent";
import LeftImgRightRepeatableBlk from "@/templates/RepeatableBlocks/LeftImgRightRepeatableBlk/LeftImgRightRepeatableBlk";
import CenterContentRepeatableBlocks from "@/templates/RepeatableBlocks/CenterContentRepeatableBlocks/CenterContentRepeatableBlocks";
import Destination from "@/templates/Gallery/destination";
import CardsBlocks from "@/templates/SubComponents/CardsBlocks/CardsBlock";
import TextCarousel from '@/templates/Carousel/AllTypeCarousel/Carousel';
import BgImgLeftImgRtGrid from "@/templates/ContentBlocks/BgImgLeftImgRightGrid/BgImgLeftImgRightGrid";
import CaseStudyList from "@/components/CaseStudy/CaseStudyList";
import OurPortfolio from "@/templates/OurPortfolio/OurPortfolio";
import LandingPageModal from '@/components/Modal/landingPageModal';

export default function LandingPage(props) {
  const [caseStudyList, setcaseStudyList] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    axios
      .get("/api/casestudy/case-study-list")
      .then(res => {
        console.log("case-study-list -> ", res.data);
        var Data = res.data;
        if (Data) {
          setcaseStudyList(res.data);
        } else {

        }
      })
      .catch((error) => {
        Swal.fire(
          "Data not found",
          error.message,
          "error"
        );
      });
  }, [])
  const content_Banner = {
    id: "landingPageBanner",
    bgImage: "/images/specific/LandingPage/Website/iAssureIT-landing-page-1.webp",
    smallBGImage: "/images/specific/LandingPage/Responsive/iAssureIT-landing-page-responsive-1.webp",
    logo: "",
    h1Txt: "<h1>UNLOCK INFINITE <br/>POTENTIAL WITH SCALABLE</h1>",
    h1TxtCss: "font-DrukText text-4xl md:text-5xl  lg:text-4xl xl:text-6xl 2xl:text-6xl font-extrabold text-left md:text-left   place-content-left  justify-center content-left mb-5 xl:!leading-[4.3rem] ",
    h1TxtLine1: "APPLICATIONS FOR BFSI ",
    h1TxtLine1Css: " outline-title  font-DrukText text-4xl  md:text-5xl  lg:text-4xl xl:text-6xl 2xl:text-6xl text-left md:text-left   place-content-left  justify-center content-left md:mb-5 font-[700]  ",
    // h1TxtLine2: "Revolutionize Your Business With Scalable App Solutions",
    // h1TxtLine2Css: "font-DrukText lcamelcase text-normal text-left md:text-left text-2xl md:text-3xl lg:text-xl xl:text-2xl  2xl:text-4xl  md:!leading-[3.1rem] bg-white text-darkGray mx-auto px-auto px-1 inline-block mb-5 mt-3 text-btnBlue",
    bgImgCss: "  py-20 h-auto  xl:h-auto md:py-32 xl:py-48 2xl:py-32 lazyload object-fit bg-cover bg-no-repeat relative  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    para: "Elevate Your Business with Cutting-EdgeScalability Solutions Tailored for the Banking, Financial Services, and Insurance (BFSI) Industry",
    paraCss: " font-DrukText lcamelcase text-normal text-left md:text-left text-xl md:text-3xl lg:text-2xl xl:text-2xl  2xl:text-4xl  md:!leading-[2.3rem]",
    // gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  md:grid-cols-2  lg:h-screen  xl:h-screen h-screen  ",
    gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2   md:grid-cols-2  py-10  md:py-20 lg:py-10 xl:py-0 2xl:py-20 h-auto md:h-full lg:h-full   xl:h-full 2xl:h-full  ",
    gridSubDivCss: " pb-32 md:pb-10 lg:pb-16 2xl:pb-48 my-auto text-white px-5  md:pl-16 lg:pl-10 xl:pl-12 2xl:pl-24",
    // image: "/images/specific/LandingPage/Website/iAssureIT-landing-page-2.webp",
    // imageCss: '  w-2/3 xl:w-4/5 2xl:4/5 mx-auto my-auto object-fit lazyload place-content-center object-center ',
    // imgTagcss: "lazyload  -mt-20 2xl:-mt-44   ",
    borderColor: "border-darkBlue",
    url: "/contact-us/#contactDetails",
    urlName: "Let's Talk!",
    // linkCss: " w-fit   text-btnBlue text-center font-bold text-lg md:text-xl lg:text-sm xl:text-lg 2xl:text-xl  py-2 px-10  2xl:px-6  mt-3 lg:mt-10 border  rounded btn bg-offWhite hover:bg-offWhite hover:text-black",
    linkIconCss: "hidden",
    compId:"contactDetails",
    videoUrl:"/images/videos/Scalable-application.mp4",
    imgUrl: "/images/specific/Home/HomeVideoImg.webp",
    class: "w-full h-full ",
    modalUrlName:"Let's Talk!",
    modalDisplay:"true",
    modalBtnCss:"w-fit   text-btnBlue text-center font-bold text-lg md:text-xl lg:text-sm xl:text-lg 2xl:text-xl  py-2 px-10  2xl:px-6  mt-3 lg:mt-10 border  rounded btn bg-gray-100 hover:bg-offWhite hover:text-black cursor-pointer"
  }
  const content_BFSI = {
    sectionCss: "hidden md:block ",
    bgImgCss: "relative bg-cover  block    bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload",
    // blockTitle: "TESTING STRATEGY",
    blockTitle: "<span class='font-normal leading-relaxed'>Welcome to the Future of </span> <br/><span class='font-extrabold '>BFSI APPLICATION SCALABILITY!</span>",
    pageTitleCss: "w-full text-center text-2xl md:text-3xl xl:text-4xl  2xl:text-4xl ",
    classForblockTitle: "text-darkGray w-full text-center font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:pb-7 ",
    blockImage: '/images/specific/LandingPage/Website/BFSI.webp',
    altImage: 'imageDescription',
    classForblockImage: "w-auto rounded-md  mx-auto  py-10 lazyload",
    classForNoOfCards: "",
    classForCards: "text-darkGray p-10 mb-7 rounded-xl border ",
    classForCardTitle: "text-center font-normal text-xl md:text-xl lg:text-2xl p-3",
    classForCardTitle_2: "font-bold text-md text-primary dark:text-primary-400 p-5",
    classForCardImage: "w-full p-10 lazyload",
    // classForblockTitle  :" text-sky-500 w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl",
    classForblockContent: "text-center text-darkGray  text-lg md:text-2xl xl:text-2xl  font-[500] mb-2 md:mb-0 mt-1 sm:mt-2 w-5/6 md:mt-3 md:w-4/5 xl:w-4/5 2xl:w-3/5 mx-auto",
    blockContent: "In the fast-paced world of finance, staying ahead means embracing innovation. Discover how our scalable applications redefine the possibilities for your BFSI business.",
    dash: "border-blue-700  md:mb-5  ",
  }
  const content_BFSICard = {
    sectionCss: "block md:hidden  ",
    blockTitle: "<span class='font-normal leading-relaxed'>Welcome to the Future of </span> <br/><span class='font-extrabold '>BFSI APPLICATION SCALABILITY!</span>",
    pageTitleCss: "w-full text-center text-2xl md:text-3xl xl:text-4xl  2xl:text-4xl ",
    classForblockTitle: "text-darkGray w-full text-center font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:pb-7 mb-5 md:mb-2",
    classForblockContent: "text-center text-darkGray  text-lg md:text-2xl xl:text-2xl  font-[500] mb-2 md:mb-0 mt-1 sm:mt-2 w-5/6 md:mt-3 md:w-4/5 xl:w-4/5 2xl:w-3/5 mx-auto",
    blockContent: "In the fast-paced world of finance, staying ahead means embracing innovation. Discover how our scalable applications redefine the possibilities for your BFSI business.",
    classForNoOfCards:
      "px-1 md:px-3 lg:px-32 2xl:px-48 mt-10 md:mt-20 max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-1 gap-x-4 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6",
    classForCards:
      " px-3 md:px-3 md:py-3 mb-4 rounded-xl ",
    classForCardTitle:
      "text-center font-bold text-xl md:text-2xl lg:text-2xl md:p-3",
    classForCardTitle_2:
      "font-bold text-md text-primary dark:text-primary-400 p-5",
    classForCardImage: "w-5/6 md:w-full px-3 py-0 mx-auto",
    classForblockContent:
      "text-lg md:text-xl text-center font-[500] px-2 md:px-12 lg:px-32 xl:px-64  2xl:w-2/5 2xl:px-2  mx-auto ",
    // blockContent:
    //   "We elevate businesses with our quest to innovation and expertise with tech advancement as per BFSI industry requisites.",
    bgImgCss:
      "relative bg-cover p-3 block   bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    dash: "border-blue-700 mb-5 mt-10 ",
    cardsArray: [
      {
        cardImage: "/images/specific/LandingPage/Responsive/BFSI_App/iAssureIT-landing-page-3.webp",
        altImage: "imageDescription",
        cardTitle: "Event Driven Architecture",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg p-3 font-[500]",

      },
      {
        cardImage: "/images/specific/LandingPage/Responsive/BFSI_App/iAssureIT-landing-page-4.webp",
        altImage: "imageDescription",
        cardTitle: "10+Years of Guarantee of Quality Work",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg p-3 font-[500]",
      },
      {
        cardImage: "/images/specific/LandingPage/Responsive/BFSI_App/iAssureIT-landing-page-5.webp",
        altImage: "imageDescription",
        cardTitle: "2 Week Deliverables",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg p-3 font-[500]",
      },
      {
        cardImage: "/images/specific/LandingPage/Responsive/BFSI_App/iAssureIT-landing-page-6.webp",
        altImage: "imageDescription",
        cardTitle: "Domain Expertise &  Advisory Experts In Panel",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg p-3 font-[500]",
      },
    ],
  }
  const content_transformation = {
    pageTitle:
      "KEY  <span class='font-extrabold'>BENEFITS </span>",
    pageTitleCss: " w-full text-center BlockTitle leading-tight -mt-7 md:-mt-5  mb-5",
    dash: "border-blue-700 mb-10 md:mb-5 mt-10",
    classForNoOfCards:
      "mx-auto  max-w-8xl item-center text-center  grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:gap-x-2 lg:gap-x-10  mx-10 md:mx-10 mb-10 md:mt-10",
    classForCards:
      " break-words  h-full  border-spacing-x-96 mb-5 md:mb-5 lg:mb-10   ",
    classForCardTitle: "BlockTitle  font-extrabold py-auto",
    classForBlkWidth: "text-white md:h-24 xl:h-auto p-4 w-3/5 md:w-3/5 lg:w-2/3 xl:w-3/4 2xl:w-3/5",
    classForcardTitle_2: "text-lg md:text-xl lg:text-2xl xl:text-[20px] 2xl:text-[24px] font-bold leading-relaxed   text-left text-white font-extrabold leading-relaxed",
    classForCardImage: "w-full px-7 ",
    classForCardImg2: "w-1/2 md:w-3/5 lg:w-2/3 lg:w-auto mt-10 ",
    classForCardTitle_3: " smTxt text-justify",

    cardsArray: [
      {
        cardImage: "",
        cardTitle: "",
        bgImg:
          "/images/specific/LandingPage/Website/KEY-BENEFITS/iAssureIT-landing-page-23.webp",
          // smBgImg:"/images/specific/LandingPage/Responsive/iAssureIT-landing-page-7.webp",
          cardImage2:
          "/images/specific/LandingPage/Website/KEY-BENEFITS/iAssureIT-landing-page-22.webp",
        classForCardImg2: "w-auto rounded-t-lg  py-2 mx-auto",
        cardTitle_2: "SEAMLESS GROWTH",
        // cardTitle_3_Icon: <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>,
        cardTitle_3: "",
        cardButton: "",
        cardButtonTitle: "",
        cardButtonColor: "",
        link: "",
        cardPara:
          "Experience uninterrupted business  growth with applications designed to scale effortlessly. Whether you're a small bank or a multinational insurer, our solutions adapt to your evolving needs.",
      },
      {
        cardImage: "",
        cardTitle: "",
        bgImg:
          "/images/specific/LandingPage/Website/KEY-BENEFITS/iAssureIT-landing-page-25.webp",
        cardImage2:
          "/images/specific/LandingPage/Website/KEY-BENEFITS/iAssureIT-landing-page-24.webp",
        classForCardImg2: "w-auto rounded-t-lg  py-2 mx-auto",
        cardTitle_2: "SECURITY AT SCALE",
        // cardTitle_3_Icon: <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>,
        cardTitle_3: "",
        cardButton: "",
        cardButtonTitle: "",
        cardButtonColor: "",
        link: "",
        cardPara:
          "Safeguard your data and transactions with robust security protocols. Our scalable applications prioritize data integrity and confidentiality, ensuring compliance with industry regulations.",
      },
      {
        cardImage: "",
        cardTitle: "",
        classForCardImg2: "w-auto rounded-t-lg  py-2 mx-auto",
        bgImg:
          "/images/specific/LandingPage/Website/KEY-BENEFITS/iAssureIT-landing-page-27.webp",
        cardImage2:
          "/images/specific/LandingPage/Website/KEY-BENEFITS/iAssureIT-landing-page-26.webp",
        cardTitle_2: "ENHANCED PERFORMANCE",
        // cardTitle_3_Icon: <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>,
        cardTitle_3: "",
        cardButton: "",
        cardButtonTitle: "",
        cardButtonColor: "",
        link: "",
        cardPara:
          "Optimize your operations with highperformance applications that ensure smooth transactions, reduce latency, and  enhance overall system efficiency",
      },
      {
        cardImage: "",
        cardTitle: "",
        classForCardImg2: "w-auto rounded-t-lg  py-2 mx-auto",
        bgImg:
          "/images/specific/LandingPage/Website/KEY-BENEFITS/iAssureIT-landing-page-29.webp",
        cardImage2:
          "/images/specific/LandingPage/Website/KEY-BENEFITS/iAssureIT-landing-page-28.webp",
        cardTitle_2: "COST-EFFICIENCY",
        // cardTitle_3_Icon: <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>,
        cardTitle_3: "",
        cardButton: "",
        cardButtonTitle: "",
        cardButtonColor: "",
        link: "",
        cardPara: "Scale without breaking the bank. Our solutions are not just scalable; they're also cost-effective. Maximize your ROI by paying only for the resources you need, precisely when you need them.",
      },
    ],
  };
  const content_ExperienceBlk = {
    id: "landingPageBlk2",
    paraTitle: "Pain Form  ",
    paraTitleClass: "text-lg md:text-2xl xl:text-2xl text-center md:text-left font-[800]",
    para: "<span class='text-xl italic font-semibold'>“</span>Are these challenges holding your business back?<span class='text-xl italic font-semibold'>”</span> <ul class='mt-4  md:mt-5 diamond-list     text-left '><li>Slow, Inflexible Applications</li><li>Limited Scalability</li><li>Outdated Technology</li><li>Poor User Experience></li><li>Stagnant Growth</li></ul>",
    paraCss: " text-left  md:text-left text-darkGray  text-lg md:text-lg  xl:text-xl 2xl:text-2xl  font-[500] mb-10 mt-1 sm:mt-2 md:mt-3",
    bgImgCss: "lazyload",
    pageTitle: "<span class='font-extrabold '>EXPERIENCE THE DIFFERENCE</span>",
    pageTitleCss: "w-full text-center  text-2xl md:text-3xl xl:text-4xl  2xl:text-4xl ",
    blockSubTitle: "Complete the Pain Form and Supercharge Your Business",
    classForblockSubTitle: "text-center text-darkGray  text-lg md:text-2xl xl:text-2xl  font-[500] mb-2 md:mb-0 mt-1 sm:mt-2 md:mt-3",
    gridColCss: "my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-2 md:py-10 px-5 md:px-5 xxl:px-10",
    // gridCol1Css: "w-1/2 mx-auto",
    gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2 md:px-10 xl:px-20 2xl:px-20 xxl:px-48 lg:h-full   xl:h-full h-full content-center ",
    bannerClass: "object-fit  bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/LandingPage/Website/iAssureIT-landing-page-3.webp",
    altImg: "ExperienceBlkImg",
    imageCss: "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
    imgTagcss: "mx-auto w-5/6 2xl:w-auto 2xl:mr-0  lazyload",
    dash: "border-blue-700 mb-5 md:mb-3",
  }


  const content_SolutionBlk = {
    sectionClass:
      "pt-48 md:pt-32 lg:pt-20 xl:pt-32  pb-28 md:pb-52 lg:pb-64  xl:pb-60 2xl:pb-64 lazyload  bg-no-repeat     lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] px-5 md:px-5 lg:px-32 2xl:px-48",
    sectionBgImg:
      "/images/specific/LandingPage/Website/iAssureIT-landing-page-4.webp",
    smallBGImage:
      "/images/specific/LandingPage/Responsive/iAssureIT-landing-page-responsive-2.webp",

    pageTitle:
      "  <span class=' font-extrabold'>UNCOVER SOLUTIONS  </span> <span class='font-normal'>TAILORED TO YOU</span>  ",
    pageTitleCss: "w-full text-center text-white  BlockTitle px-10 md:px-0 mb-10 md:mb-5 2xl:mb-2 leading-relaxed",
    blockSubTitle:
      "Tell us more about your pain points, and let's craft a customizedplan for your business. Supercharge your growth, enhance youruser experience, and future-proof your technology. <br/><br/> <span class='pt-10 font-bold text-xl md:text-2xl xl:text-xl 2xl:text-3xl'>HOW IT WORKS</span> ",
    classForblockSubTitle:
      "text-lg md:text-lg lg:text-xl text-center font-normal  md:w-5/6 lg:w-full xl:w-2/3 2xl:w-3/5 xxl:!w-1/2  mx-auto text-white   mt-3 md:mt-0",
    bgImage:
      "/images/specific/LandingPage/Website/iAssureIT-landing-page-5.webp",
    bgImageCss: "md:w-full xl:w-auto mx-auto h-auto object-cover mb-10 xl:mb-32 lg:-mt-12 2xl:-mt-5",
    bigImageAlt: "iAssureIT-infra",
    gridCss: "grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-10",
    gridCol1Css: "order-last  w-full h-auto relative my-auto",
    repeatedBlkCss: " shadow-none flex items-start sm:h-36 md:h-auto my-10 xl:my-8  ",
    imgCss:
      "flex-none bg-purple h-auto   items-start rounded mr-3 md:mr-8 object-cover  p-3",
    titleCss: " text-lg md:text-2xl xl:text-xl 2xl:text-2xl text-white font-bold mb-3",
    desCss: "text-white  text-sm md:text-sm lg:text-sm 2xl:text-lg overflow-hidden",
    linkCss: "float-right px-4 text-skyBlue",
    repeatedBlocks: [
      {
        imageSrc:
          "/images/specific/LandingPage/Icons/iAssureIT-Landing-Page-icon-1.webp",
        title: "ASSESSMENT",
        description:
          "Fill out our PAIN form to identify your unique challenges.",
      },
      {
        imageSrc:
          "/images/specific/LandingPage/Icons/iAssureIT-Landing-Page-icon-2.webp",
        title: "CONSULTATION",
        description:
          "Schedule a consultation with our experts to discuss your specific needs.",
      },
      {
        imageSrc:
          "/images/specific/LandingPage/Icons/iAssureIT-Landing-Page-icon-3.webp",
        title: "TAILORED SOLUTION",
        description:
          "Receive a personalized plan to scale your applications and overcome hurdles.",
      },
      {
        imageSrc:
          "/images/specific/LandingPage/Icons/iAssureIT-Landing-Page-icon-4.webp",
        title: "IMPLEMENTATION",
        description:
          "Watch as our team brings your scalable application to life.",
      }, {
        imageSrc:
          "/images/specific/LandingPage/Icons/iAssureIT-Landing-Page-icon-5.webp",
        title: "OPTIMIZATION",
        description:
          "Continuous support and optimization to ensure your success never plateaus.",
      },
    ],
    dash: "border-white mb-0 md:mb-5 mt-5 md:mt-20 lg:mt-52 xl:mt-40 ",
  };

  const content_DigitalTransformation = {
    sectionCss: "md:my-5 lg:my-0 ",
    blockTitle:
      " HOW<span  class='uppercase font-extrabold leading-relaxed' > IT WORKS</span> ",
    classForblockTitle: "w-full text-center text-3xl md:text-3xl xl:text-4xl mb-5 md:mb-0  ",
    classForNoOfCards:
      "px-10 lg:px-32 2xl:px-48 mt-10 md:mt-12 max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-1 gap-x-4 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6",
    classForCards:
      " p-3 mb-7 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]",
    classForCardTitle:
      "text-center font-bold text-xl md:text-xl lg:text-2xl p-3",
    classForCardTitle_2:
      "font-bold text-md text-primary dark:text-primary-400 p-5",
    classForCardImage: "w-full px-3 py-0",
    classForblockContent:
      "text-lg md:text-xl text-center font-[500] px-2 md:px-12 lg:px-32 xl:px-64  2xl:w-2/5 2xl:px-2  mx-auto ",
    // blockContent:
    //   "We elevate businesses with our quest to innovation and expertise with tech advancement as per BFSI industry requisites.",
    bgImgCss:
      "relative bg-cover p-3 block   bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    dash: "border-blue-700 mb-5  ",
    cardsArray: [
      {
        cardImage: "/images/specific/LandingPage/Website/iAssureIT-landing-page-8.webp",
        altImage: "imageDescription",
        cardTitle: "Assessment",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg p-3 font-[500]",
        content:
          " Fill out our PAIN form to identify  your unique challenges.",
      },
      {
        cardImage: "/images/specific/LandingPage/Website/iAssureIT-landing-page-9.webp",
        altImage: "imageDescription",
        cardTitle: "Consultation",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg p-3 font-[500]",
        content:
          "Consult our experts to plan for your specific needs.",
      },
      {
        cardImage: "/images/specific/LandingPage/Website/iAssureIT-landing-page-10.webp",
        altImage: "imageDescription",
        cardTitle: "Solution",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg p-3 font-[500]",
        content:
          "Personalized plan to scale & overcome application hurdles.",
      },
    ],
  };
  const content_CardBlock = {
    dash: "border-blue-700 mb-5  mt-20 ",
    pageTitle: "<span class='font-normal '>WHY CHOOSE OUR </span> <br/><span class='font-extrabold '>SCALABILITY SOLUTIONS</span>",
    pageTitleCss: "w-full text-center text-2xl md:text-3xl xl:text-4xl  2xl:text-4xl px-10 ",
    bgImage:
      "/images/specific/Home/HomeNewImg/iAssureIT-home-page-background-13.webp",
    smallBGImage:
      "",
    bgImgCss:
      "lazyload object-fit bg-cover bg-no-repeat relative py-10 md:py-0 w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    classForNoOfCards:
      "mx-auto md:py-10 lg:py-10 max-w-8xl my-auto item-center text-center justify-evenly grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4  xl:mb-6 lg:mt-3",
    classForCards:
      "group py-1 md:py-1 mb-10 break-words lg:pb-32  xl:pb-20 2xl:pb-10 px-4 my-auto py-auto h-full lg:mb-10  h-auto border-spacing-x-96 md:mb-10 lg:bg-[image:var(--largeCardImg)]  bg-[image:var(--smallCardImg)]",
    classForCardTitle: "BlockTitle text-white font-extrabold py-auto",
    classForcardTitle_2: "text-lg md:text-lg xl:text-2xl  text-white text-center  font-extrabold  mb-2",
    classForCardImage: "w-full px-7 ",
    classForCardTitle_3: "text-white text-[14px]  lg:text-[16px] 2xl:text-[20px] text-left hidden group-hover:block text-white smTxt  hidden group-hover:block group-hover:animate-[fade-in-up_500s_ease-in-out]-hover:animate-[fade-in-up_500s_ease-in-out]",
    cardsArray: [
      {
        cardImage: "",
        cardTitle: "",
        classForCardImg2: "w-auto rounded-t-lg  py-12 h-auto group-hover:h-52 mx-auto",
        bgImg:
          "/images/specific/LandingPage/Website/Backgrounds/1.webp",
        smallBgImg: "/images/specific/LandingPage/Website/Backgrounds/iAssureIT-landing-page-11.webp",
        cardImage2:
          "/images/specific/LandingPage/Website/iAssureIT-landing-page-21.webp",
        cardTitle_2: "INDUSTRY EXPERTISE",
        cardAltImage2: "cardImg1",
        // cardTitle_3_Icon: <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>,
        cardTitle_3: "Benefit from our deep understanding of the BFSI  landscape. Our team  comprises industry experts  who tailor scalability  solutions to address the  unique challenges faced by   financial institutions.",
        cardButton: "",
        cardButtonTitle: "",
        cardButtonColor: "",
        link: "",
      },
      {
        cardImage: "",
        cardTitle: "",
        classForCardImg2: "w-auto rounded-t-lg  py-12 h-auto group-hover:h-52 mx-auto",
        bgImg:
          "/images/specific/LandingPage/Website/Backgrounds/2.webp",
        smallBgImg: "/images/specific/LandingPage/Website/Backgrounds/iAssureIT-landing-page-12.webp",
        cardImage2:
          "/images/specific/LandingPage/Website/iAssureIT-landing-page-14.webp",
        cardAltImage2: "cardImg2",
        cardTitle_2: "PROVEN TRACK RECORD",
        // cardTitle_3_Icon: <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>,
        cardTitle_3:
          "Join a growing list ofsatisfied BFSI clients whohave witnessed thet ransformative power ofour scalable applications. Our success stories speak for themselves",
        cardButton: "",
        cardButtonTitle: "",
        cardButtonColor: "",
        link: "",
      },
      {
        cardImage: "",
        cardTitle: "",
        classForCardImg2: "w-auto rounded-t-lg  py-12 h-auto group-hover:h-52 mx-auto",
        bgImg:
          "/images/specific/LandingPage/Website/Backgrounds/3.webp",
        smallBgImg: "/images/specific/LandingPage/Website/Backgrounds/iAssureIT-landing-page-13.webp",
        cardImage2:
          "/images/specific/LandingPage/Website/iAssureIT-landing-page-16.webp",
        cardTitle_2: "INNOVATION DRIVEN APPROACH",
        cardAltImage2: "cardImg3",
        // cardTitle_3_Icon: <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>,
        cardTitle_3: "Stay ahead of the curve  with our commitment to   continuous innovation. We  integrate the latest  technologies to futureproof your applications,  ensuring they remain  scalable as your business evolves.",
        cardButton: "",
        cardButtonTitle: "",
        cardButtonColor: "",
        link: "",
      },
      {
        cardImage: "",
        cardTitle: "",
        classForCardImg2: "w-auto rounded-t-lg  py-12 h-auto group-hover:h-52 mx-auto",
        bgImg:
          "/images/specific/LandingPage/Website/Backgrounds/4.webp",
        smallBgImg: "/images/specific/LandingPage/Website/Backgrounds/iAssureIT-landing-page-14.webp",
        cardImage2:
          "/images/specific/LandingPage/Website/iAssureIT-landing-page-18.webp",
        cardTitle_2: "CUSTOMIZED SCALABILITY STRATEGIES        ",
        cardAltImage2: "cardImg5",
        // cardTitle_3_Icon: <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>,
        cardTitle_3: "Tailored solutions for your unique needs. We don't believe in one-size-fits-all. Our scalability strategies are crafted to align precisely with your business goals, ensuring maximum efficiency, and growth. Experience personalized scalability like never before!",
        cardButton: "",
        cardButtonTitle: "",
        cardButtonColor: "",
        link: "",
      },
    ],
  };
  const content_ClientImgCarousel = {
    dash: "border-blue-700 mb-5  mt-20 ",
    pageTitle:
    "  <span class=' font-extrabold'>CASE STUDIES  </span>  ",
  pageTitleCss: "w-full text-center  BlockTitle  mb-5 md:mb-5 2xl:mb-2 leading-relaxed",
  blockContent:
    "We shed light on our work and what goes behind the development",
    classForblockContent:
    "text-center text-darkGray bodyTxt  font-normal mb-10 lg:mt-5",
  
    imgCss: "w-full  h-full object-cover p-4 rounded-md bg-white p-5 border ls-is-cached slide cursor-pointer lazyloaded",
    sectionCss: "relative px-10 md:px-20 mb-5 text-center xl:px-32 mx-auto justify-evenly   py-10 px-10",
    carouselDivCss:"bg-light relative max-w-8xl py-10 px-10",
    CarouselCss: "slides-container whitespace-nowrap scrollbar-hide h-auto md:h-auto lg:h-auto 2xl:h-auto  flex snap-x snap-mandatory overflow-hidden  space-x-2 rounded scroll-smooth before:shrink-0 after:w-[0vw] after:shrink-0 md:before:w-0 md:after:w-0 px-10",
    prevBtnDivCss: "absolute top-0 items-center  h-full -left-11 md:-left-14 xl:-left-8 flex",
    nextBtnDivCss: "absolute top-0 items-center  h-full -right-11 md:-right-14 xl:-right-12 flex",
    prevBtnCss: "px-2 py-2 prev bg-white text-neutral-900 group shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
    nextBtnCss: "px-2 py-2  next bg-white text-neutral-900 group shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
    
    imgWidth:"flex-none  w-5/6 md:w-auto mx-10 h-full object-cover  text-left   gap-10  slide5 rounded-lg cursor-pointer  mb-2 ",
    
    images: [
      { img: "/images/specific/case_study/BFSI/iAssureIT-BSFI-1.webp", caption: "TWELVE CAPITAL" },
      { img: "/images/specific/case_study/BFSI/iAssureIT-BSFI-2.webp", caption: "Barclays" },
      { img: "/images/specific/case_study/BFSI/iAssureIT-BSFI-3.webp", caption: "Motilal Oswal Securities Ltd" },
      { img: "/images/specific/case_study/BFSI/iAssureIT-BSFI-4.webp", caption: "American Express" },
      { img: "/images/specific/case_study/BFSI/iAssureIT-BSFI-5.webp", caption: "New York Life Insurance" },
      { img: "/images/specific/case_study/BFSI/iAssureIT-BSFI-6.webp", caption: "Syndicated Loan Direct" },
      { img: "/images/specific/case_study/BFSI/iAssureIT-BSFI-7.webp", caption: "IBM Global Financing"  },
      { img: "/images/specific/case_study/BFSI/iAssureIT-BSFI-8.webp", caption: "Wealthyvia" },
      { img: "/images/specific/case_study/BFSI/iAssureIT-BSFI-9.webp", caption: "MOAT"  },
      { img: "/images/specific/case_study/BFSI/iAssureIT-BSFI-10.webp", caption: "10x Smart Investment"  },
    ],
  }
  const content_BFSICaseStudy = {
    sectionCss: "md:py-10 bg-white px-2 md:px-20",
    blockTitle: "OUR CUSTOMERS",
    blockSubTitle:
      "We shed light on our work and what goes behind the development",
    classForblockTitle:
      " text-darkGray w-full BlockTitle text-center font-extrabold leading-relaxed",
    classForblockSubTitle:
      "text-center text-darkGray bodyTxt  font-normal mb-10 mt-5",
    classForNoOfCards:
      "px-10 lg:px-20  max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6",
    classForCards: "p-3  mb-1 md:mb-7 rounded-md",
    classForCardTitle:
      "text-darkGray text-center font-semibold text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl p-3",
    classForCardImage: "w-full rounded-md bg-white p-5 border",
    urlName: "/case-study",
    // btnName: "View All",
    btnClass: " text-light rounded text-sm float-right py-2 px-4 bg-blue-800 ",
    cardsArray: [
      {
        cardImage:
          "/images/specific/case_study/BFSI/iAssureIT-BSFI-8.webp",
        altImg: "BSFICasestudy",
        cardTitle: "Welthyvia.com",
      },
      {
        cardImage: "/images/specific/case_study/BFSI/iAssureIT-BSFI-9.webp",
        altImg: "BSFICasestudy",
        cardTitle: "Moatindia.com",
      },
      {
        cardImage: "/images/specific/case_study/BFSI/iAssureIT-BSFI-10.webp",
        altImg: "BSFICasestudy",
        cardTitle: "10xSmartInvestment",
      },
      {
        cardImage: "/images/specific/case_study/BFSI/iAssureIT-BSFI-6.webp",
        altImg: "BSFICasestudy",
        cardTitle: "Syndicated Loan Direct",
      },
      {
        cardImage: "/images/specific/case_study/BFSI/iAssureIT-BSFI-1.webp",
        altImg: "BSFICasestudy",
        cardTitle: "TWELVE CAPITAL",
      },
      {
        cardImage: "/images/specific/case_study/BFSI/iAssureIT-BSFI-11.webp",
        altImg: "BSFICasestudy",
        cardTitle: "Swiss Merchant Bank",
      },
      {
        cardImage: "/images/specific/case_study/BFSI/iAssureIT-BSFI-2.webp",
        altImg: "BSFICasestudy",
        cardTitle: "Barclays",
      },{
        cardImage: "/images/specific/case_study/BFSI/iAssureIT-BSFI-4.webp",
        altImg: "BSFICasestudy",
        cardTitle: "American Express",
      },{
        cardImage: "/images/specific/case_study/BFSI/iAssureIT-BSFI-5.webp",
        altImg: "BSFICasestudy",
        cardTitle: "New York Life Insurance",
      },{
        cardImage: "/images/specific/case_study/BFSI/iAssureIT-BSFI-3.webp",
        altImg: "Motilal Oswal Securities Ltd",
        cardTitle: "Pipito",
      },
      {
        cardImage: "/images/specific/case_study/BFSI/iAssureIT-BSFI-7.webp",
        altImg: "Motilal Oswal Securities Ltd",
        cardTitle: "IBM",
      },
    ],
    dash: "border-blue-700 mb-5  ",
  };
  const content_ClientCarousel = {
    sectionCss: "relative px-12 md:px-20 mb-0 md:mb-5 text-center xl:px-20 max-w-8xl justify-evenly",
    pageTitle: "Customer Testimonials for <span class='font-extrabold'>iAssureIT </span>",
    pageTitleCss: " text-darkGray w-full BlockTitle text-center  font-normal leading-relaxed",
    dash: "border-blue-700 mb-5 md:mb-2 mt-0 md:mt-5 lg:mt-10",
    wrapperCss: "bg-blueColor p-20",
    classForblockContent:
      "lg:px-12 max-w-4xl mx-auto h-auto text-center my-auto text-md lg:text-lg justify-content bodyTxt mb-10 font-semibold",
    blockContent:
      "Discover Transformational Solutions in Our Proven Success Stories.",
    CarouselCss: "pb-10 slides-container whitespace-normal scrollbar-hide  h-auto flex snap-x snap-mandatory overflow-hidden space-x-7 rounded scroll-smooth before:shrink-0 after:shrink-0 md:before:w-0 md:after:w-0 md:px-20 mb-6 md:mb-10",
    txtBlkCss:
      "flex-none h-auto  w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 h-full object-cover  text-left   gap-10  slide rounded-lg cursor-pointer shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 md:mb-10",
    subBlkCss: " breakWord h-[305px] md:h-[305px] lg:h-[305px]  p-3 md:p-9 slide  overflow-auto bg-offWhite  italic",
    autherCss: "font-semibold p-3  md:px-9 lg:px-5 xl:px-9 py-3 h-24 md:h-28 lg:h-28 xl:h-28 2xl:h-24 ",
    // txtBlkCss:"w-1/2 lg:w-1/3 object-cover bg-offWhite gap-10 p-4 slide rounded-lg cursor-pointer",
    prevBtnDivCss:"absolute bottom-0 right-1/2 mx-5",
    nextBtnDivCss:"absolute bottom-0 left-1/2 mx-5",
    prevBtnCss: "px-2 py-2 prev bg-white text-neutral-900 group shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
    nextBtnCss: "px-2 py-2  next bg-white text-neutral-900 group shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
    textBlock: [
      {
        content: "<span class='text-xl italic font-semibold'>“</span>One important thing which differentiates iAssureIT from other IT companies is the thought process of complete team & their will to provide the best of features, thinking completely out of the box & without bothering the extra efforts which would go in from their end implementing these. <br/>Really happy & satisfied with the quality of the work<span class='text-xl font-semibold'>”</span>",
        author: "- Mr. Paras Surana<br/><span class='text-sm font-semibold '>CEO - Prabandhan Management Services Pvt Ltd</span>"
      },
      {
        content: "<span class='text-xl italic font-semibold'>“</span>I am writing to express my gratitude and satisfaction with the exceptional services provided by iAssure IT.  <br/>As a medical professional, the efficient and reliable IT support they have offered has been invaluable in maintaining the smooth operation of my practice through App and Design support.<br/> I would like to extend my heartfelt appreciation to iAssure IT for their unwavering support and exceptional service.<br/>I will recommend them to any healthcare professional or organization in need of top-tier IT solutions and support.<br/> Their dedication to their clients is evident, and they have become an integral part of my practice's success.<span class='text-xl font-semibold'>”</span>",
        author: "- Dr. P. P. Patil<br/><span class='text-sm font-semibold '>Obstetrician & Gynecologist - Sangali</span>"
      },
      {
        content: "<span class='text-xl italic font-semibold'>“</span>We engaged iAssureIT for a complex app project, and they delivered beyond our expectations. Their technical proficiency and innovative approach set them apart. The team was responsive to our evolving needs and provided solutions that demonstrated a deep understanding of the industry. We look forward to collaborating on future projects.<span class='text-xl font-semibold'>”</span>",
        author: " Shyam Raut <br/><span class='text-sm font-semibold '>Chairman & Founder - Energy Power</span>"
      },
      {
        content: "<span class='text-xl italic font-semibold'>“</span>Incredible work by iAssureIT They transformed our concept into a sleek app with precision and speed. Highly recommend their expertise!<span class='text-xl font-semibold'>”</span>",
        author: "Shankar Sawant <br/><span class='text-sm font-semibold'> CEO – Open Source Solutions </span>"
      }, {
        content: "<span class='text-xl italic font-semibold'>“</span>Incredible job by iAssureIT ! They turned our vision into a seamless web app. Fast, efficient, and a pleasure to work with.<span class='text-xl font-semibold'>”</span>",
        author: "Dr. Amol Malpani<br/><span class='text-sm font-semibold'>Chairman - Jetkids International School</span>"
      }, {
        content: "<span class='text-xl italic font-semibold'>“</span>Grateful for iAssureIT dedication to our cause. They delivered a user-friendly web app that streamlined our operations. Exceptional service from start to finish.<span class='text-xl font-semibold'>”</span>",
        author: "Mr. Pankaj Purohit<br/><span class='text-sm font-semibold'>CIO – Motilal Oswal Securities Ltd.</span>"
      }, {
        content: "<span class='text-xl italic font-semibold'>“</span>Kudos to iAssureIT for bringing my app idea to life! Their expertise and commitment to quality are unmatched. Super satisfied!<span class='text-xl font-semibold'>”</span>",
        author: "Pritam Deuskar <br/><span class='text-sm font-semibold'>Founder & CEO - Wealthyvia</span>"
      }, {
        content: "<span class='text-xl italic font-semibold'>“</span>iAssureIT deserves accolades for the exceptional educational web app they crafted. From concept to execution, their team displayed a deep understanding of our vision, translating it into an intuitive and engaging platform for students. The user interface is not only visually appealing but also promotes seamless interaction, making learning a delight. Kudos to iAssureIT for revolutionizing our educational tools!<span class='text-xl font-semibold'>”</span>",
        author: "CTO - Vinayak Bogan<br/><span class='text-sm font-semibold'>Sanjay Ghodawat University</span> "
      },
      {
        content: "<span class='text-xl italic font-semibold'>“</span>Working with iAssureIT was a transformative experience. Their team's deep understanding of our vision resulted in a cutting-edge web app that perfectly reflects our brand. The seamless collaboration, attention to detail, and commitment to delivering on time exceeded our expectations. We're incredibly pleased with the outcome and look forward to future projects together.<span class='text-xl font-semibold'>”</span>",
        author: "Dr. Mubashir Sheikh<br/><span class='text-sm font-semibold'>Chairman & Founder - Swiss Merchant Banking</span> "
      },
      {
        content: "<span class='text-xl italic font-semibold'>“</span>Our experience with iAssureIT was exceptional. Their team seamlessly transformed our vision into a user-friendly and visually stunning online platform. The level of professionalism, timely delivery, and ongoing support exceeded our expectations. Thanks to their expertise, our business has seen significant growth in the digital marketplace.<span class='text-xl font-semibold'>”</span>",
        author: "Barry Baetu<br/><span class='text-sm font-semibold'>Founder - Harmonic Group </span> "
      },      
      {
        content: "<span class='text-xl italic font-semibold'>“</span>Our experience with iAssureIT was nothing short of exceptional. Their innovative approach, transparent communication, and commitment to quality resulted in a cutting-edge web app that surpassed our expectations. We highly recommend their services for anyone seeking top-tier web development expertise.<span class='text-xl font-semibold'>”</span>",
        author: "Dr. Akhil Deshpande<br/><span class='text-sm font-semibold'>CIO - TruUSmiles.com</span> "
      },
      {
        content: "<span class='text-xl italic font-semibold'>“</span> iAssureIT exceeded our expectations with their exceptional expertise and prompt delivery. Their innovative solutions and seamless communication made the entire process a breeze. We highly recommend them for anyone seeking top-tier web app development.<span class='text-xl font-semibold'>”</span>",
        author: "Greg<br/><span class='text-sm font-semibold'>CIO – City2Shore</span> "
      },
      {
        content: "<span class='text-xl italic font-semibold'>“</span>Very much overwhelmed and satisfied with iAssureIT work. These guys have tremendous potential to handle any size of the project and I strongly recommend this company to others. The best of the company is they are 100% committed to work and provide out of the box service. Working with iAssureIT is simply an amazing and memorable experience.<br/>Keep up the good work guys and you rock !!! “<span class='text-xl font-semibold'>”</span>",
        author: "Mohd Imran<br/><span class='text-sm font-semibold'></span> "
      },

    ]
  };

  const content_NationalAward = {
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
       "px-5 md:px-1 lg:w-2/5 xl:w-2/5 2xl:w-1/3 xxl:!w-2/5 mx-auto text-center font-normal text-darkGray mb-10 text-lg md:text-2xl text-white mt-6",
          
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
    linkCss: "text-white underline font-semibold text-lg md:text-xl mt-5 float-left",
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
  const content_ReadyToScaleBlk = {
    id: "landingPageBlk3",
    paraTitle: "Don't let scalability be a roadblock. <br/>Join the ranks of businesses thriving with scalable applications.Contact us today to revolutionize your digital presence and elevateyour enterprise to new heights.  ",
    paraTitleClass: "text-left  md:text-left text-darkGray  text-lg md:text-lg  xl:text-xl 2xl:text-2xl  font-[500] mb-10 mt-1 sm:mt-2 md:mt-16",
    para: "Take the First Step Towards Scalable Success",
    paraCss: " text-lg md:text-2xl xl:text-2xl text-left md:text-left font-[800]",
    bgImage: "/images/specific/LandingPage/Website/iAssureIT-landing-page-7.webp",
    smallBGImage: "/images/specific/LandingPage/Responsive/iAssureIT-landing-page-responsive-3.webp",
    bgImgCss: "lazyload",
    pageTitle: "<span class='font-extrabold '>READY TO SCALE?</span><span class='font-normal'> LET'S TALK!</span>",
    pageTitleCss: "w-full text-center  text-2xl md:text-3xl xl:text-4xl  2xl:text-4xl ",
    blockSubTitle: "",
    classForblockSubTitle: "text-center text-darkGray  text-lg md:text-2xl xl:text-2xl  font-[500] mb-2 md:mb-0 mt-1 sm:mt-2 md:mt-3",
    gridColCss: "mx-auto text-darkGray content-center  place-content-center  justify-center py-2 md:py-10 lg:py-5  xl:py-10 px-5 md:px-5 lg:px-10 xxl:px-10",
    // gridCol1Css: "w-1/2 mx-auto",
    gridClass: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2 px-5 md:px-10 xl:px-20 2xl:px-20 xxl:px-48 lg:h-full   xl:h-full h-full content-center md:mt-10 ",
    bannerClass: "object-fit  bg-cover bg-no-repeat relative md:pb-[90px] w-full bg-bottom lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] !bg-[length:100%_20%] md:!bg-[length:100%_40%] xl:!bg-[length:100%_50%]",
    image: "/images/specific/LandingPage/Website/iAssureIT-landing-page-6.webp",
    altImg: "ReadyToScaleBlkImg",
    imageCss: "mx-auto sm:object-fit my-auto mt-10 lazyload",
    imgTagcss: "mx-auto  lazyload",
    dash: "border-blue-700 mb-5 md:mb-3",
    // url: "/contact-us/#contactDetails",
    // urlName: "Get Started",
    // linkCss: "float-left text-white text-center font-bold text-lg md:text-xl p-2  2xl:px-2  mt-3 xl:mt-8 2xl:mt-10 border w-3/5 md:w-3/5  lg:w-1/2 xl:w-1/2 2xl:w-1/3 rounded btn bg-blue-600 hover:bg-blue-800 hover:text-white",
    modalDisplay:"true",
    modalurlName: "Get Started",
    modalBtnCss:"cursor-pointer float-left text-white text-center font-bold text-lg md:text-xl p-2  2xl:px-2  mt-3 xl:mt-8 2xl:mt-10 border w-3/5 md:w-3/5  lg:w-1/2 xl:w-1/2 2xl:w-1/3 rounded btn bg-blue-600 hover:bg-blue-800 hover:text-white"
  }
  const content_CaseStudy = {
    id:"caseStudyList",
    dash: "border-blue-700 mb-5 md:mb-1",
    pageTitle: "<span class='font-normal leading-relaxed mb-10'>Stories from Our Clients </span> <br/><span class='font-extrabold '></span>",
    pageTitleCss: "w-full text-center text-2xl md:text-3xl xl:text-4xl  2xl:text-4xl mb-10 ",

  }
  return (
    <div>
      {isModalOpen && <LandingPageModal modalId="contactFormModal" />}
      <BgImgLeftContentRtImg inputData={content_Banner} />
      <CenterImgCenterContentRepeatableBlocks inputData={content_BFSI} />
      <CenterContentRepeatableBlocks inputData={content_BFSICard} />
      {/* <BgImgRightContent inputData={content_ExperienceBlk} /> */}
      {/* <LeftImgRightRepeatableBlk
                inputData={content_SolutionBlk}
                readMore={false}
            /> */}
      <Destination inputData={content_transformation} />
      <CenterContentRepeatableBlocks
        inputData={content_DigitalTransformation}
      />      
      <button onClick={() => setModalOpen(!isModalOpen)} className=" w-full">
        <div class=" text-white mx-auto text-center font-bold text-lg md:text-xl p-2  2xl:px-2  mt-3 xl:mt-8 2xl:mt-10 border w-48 md:w-48  lg:w-64 xl:w-48 2xl:w-48 rounded btn bg-blue-600 hover:bg-blue-800 hover:text-white">Let's Connect
          <i class="fa-solid fa-angle-double-right"></i>
        </div>
      </button>
      <CardsBlocks inputData={content_CardBlock} />      
      {/* Dynamic case study */}
      {/* <CaseStudyList inputData={content_CaseStudy} /> */}

      {/* Static case study */}
      {/* <TextCarousel inputData={content_ClientImgCarousel} showVideos={false} showImages={true} /> */}
      <OurPortfolio inputData={content_BFSICaseStudy} />
      <TextCarousel inputData={content_ClientCarousel} showVideos={false} showImages={false} />
      <BgImgLeftImgRtGrid inputData={content_NationalAward} />
      <BgImgRightContent inputData={content_ReadyToScaleBlk} />
    </div>
  )
}; 