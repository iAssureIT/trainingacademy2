"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BgImgLeftContentRtImg from "@/templates/ContentBlocks/BgImgLeftContent/BgImgLeftContentRtImg";
import CenterContentRepeatableBlocks from "@/templates/RepeatableBlocks/CenterContentRepeatableBlocks/CenterContentRepeatableBlocks";
import CustomHead from "@/templates/CustomHead/CustomHead";
import LeftImgRightRepeatableBlk from "@/templates/RepeatableBlocks/LeftImgRightRepeatableBlk/LeftImgRightRepeatableBlk";
import SmallBanner from "@/templates/BannerBlocks/SmallBanner/SmallBanner";
import Map from "@/widgets/Contact-Us/ContactDetails/Map";

const HomePage = () => {

  
  const content_CET = {
    id: "CET_Block",
    // bgImage:
    //   "/images/specific/Home/HomeNewImg/iAssureIT-home-page-background-1.webp",
    // smallBGImage:
    //   "/images/specific/Home/HomeNewImg/Responsive/iAssureIT-home-page-background-1.webp",
    logo: "",
    pageTitle: "Transform Your Skills with </br>Cutting-edge Technologies",
    pageTitleCss: " pt-5 md:pt-2 text-xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-5xl xl:!leading-[1.3] text-center text-white w-full text-center font-bold BlockTitle text-center uppercase ",
    // h1Txt:
    //   "<h1 class='leading-tight'>ELEVATE YOUR BUSINESS </h1>WITH IASSUREIT YOUR  <br /> <span class='font-extrabold'> SPECIALIST IN LARGE  <br/>SCALABLE IT SYSTEMS </span> ",
    para: "Stay ahead of the curve and master the latest technologies in Fullstack Development. Our comprehensive training program covers everything from ReactJS and NodeJS to advanced topics like Redux, MongoDB integration, and AWS integration. With flexible learning options and expert guidance from industry professionals, there's no limit to what you can achieve. Take the first step towards transforming your skills and shaping your future – enroll now!",
    bgImgCss:
      "lazyload object-fit py-0 sm:py-10 md:py-10 2xl:py-20 bg-blue-400 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    logoCss: "lazyload justify-left align-left  mb-5 ",
    // h1TxtCss: "  text-xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-5xl xl:!leading-[1.3] text-center lg:text-left",
    paraCss:
      " text-white text-sm md:text-lg lg:text-2xl text-justify mt-5 ",
    gridCss:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 place-content-center lg:grid-cols-2 mb-5 md:mb-10  lg:h-full   xl:h-full h-full content-center  px-5 md:px-20 2xl:px-32 xxl:!px-48",
    gridSubDivCss:
      " md-mt-12 mx-auto text-white content-center  place-content-center  justify-center",
    image: "/images/specific/Home/HomeNewImg/iAssureIT-home-page-image-1.webp",
    imageCss: "  object-fit lazyload w-2/3 md:w-2/3 xl:w-2/3 2xl:w-2/3 xxl:!w-full mx-auto mb-10 pb-5 md:py-10",
    // imgCaption: "BSFI Industry Expert",
    // imgCaptionCss: "text-center text-white text-xl md:text-3xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-extrabold",
    // imgTagcss: "mx-auto lazyload",
    borderColor:
      "border-darkBluobject-fit py-10 md:py-20 2xl:py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyloadede",
    dash: "",
    // url: "/about-us",
    // urlName: "Dive In Now",
    // linkCss:
    //   " mx-auto lg:mx-0 font-bold text-sm md:text-xl  p-3  2xl:px-2 text-center border w-2/3 md:w-1/2  lg:w-1/2 xl:w-1/3 2xl:w-1/3 rounded btn bg-light text-darkGray my-10 hover:bg-transparent hover:text-white hover:shadow-2xl",

    // modalId: "BfsiModal",
    modalId:"CetModal",  
    modalDisplay:"true",
    modalUrlName:"Explore Courses <span><i class='fa-solid  fa-angle-double-right'></i></span>",
    modalBtnCss:"w-fit mx-auto md:float-left text-white text-center font-bold text-sm md:text-xl lg:text-sm xl:text-lg 2xl:text-xl  my-5 py-2 px-2 md:px-10  2xl:px-6  mt-3 lg:mt-10 border  rounded btn bg-blue-500 hover:bg-offWhite hover:text-black cursor-pointer"
    
    };
 
  const content_DigitalTransformation = {
    sectionCss: "md:my-5 lg:my-0",
    blockTitle:
      " <span  class='uppercase font-extrabold leading-relaxed' > ELEVATING DIGITAL</span> TRANSFORMATION",
    classForblockTitle: "w-full text-center text-3xl md:text-3xl xl:text-4xl mb-5  md:mb-8 lg:-mt-8",
    classForNoOfCards:
      "px-10 lg:px-32 2xl:px-48 mt-10 md:mt-20 max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-1 gap-x-4 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6",
    classForCards:
      " p-3 mb-7 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]",
    classForCardTitle:
      "text-center font-bold text-xl md:text-xl lg:text-2xl p-3",
    classForCardTitle_2:
      "font-bold text-md text-primary dark:text-primary-400 p-5",
    imgDivCss: "py-2",
    classForCardImage: " px-2 w-full",
    classForblockContent:
      "text-lg md:text-xl text-center font-[500] px-2 md:px-12 lg:px-32 xl:px-64  2xl:w-2/5 2xl:px-2  mx-auto ",
    blockContent:
      "We elevate businesses with our quest to innovation and expertise with tech advancement as per BFSI industry requisites.",
    bgImgCss:
      "relative bg-cover p-3 block   bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    dash: "border-blue-700 mb-5 lg:mb-0 lg:-mt-12 ",
    cardsArray: [
      {
        cardImage: "/images/specific/about_us/10.webp",
        altImage: "imageDescription",
        cardTitle: "Legacy Upgrade",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg p-3 font-[500]",
        content:
          "  Upgrading existing systems to align with the latest tech   advancements and BFSI industry requirements.  ",
      },
      {
        cardImage: "/images/specific/about_us/11.webp",
        altImage: "imageDescription",
        cardTitle: "Process Automation",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg p-3 font-[500]",
        content:
          "Transitioning manual processes to automated workflows, bolstering efficiency and accuracy",
      },
      {
        cardImage: "/images/specific/about_us/12.webp",
        altImage: "imageDescription",
        cardTitle: "Innovative Applications",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg p-3 font-[500]",
        content:
          "Creating applications tailored to  meet the rigorous demands of the digital era and the BFSI sector",
      },
    ],
  };
  const content_contactBlock = {
    id: "contact",
    bgImage:
      "/images/specific/Home/HomeNewImg/iAssureIT-home-page-breaking-slide-1.webp",
    smallBGImage:
      "/images/specific/Home/HomeNewImg/Responsive/iAssureIT-home-page-background-4.webp",
    logo: "",
    h1Txt:
      "Ready to Elevate Your BFSI  Operations? Harness the Power of  Large Scalable Apps with Us!",
    h1TxtCss:
      "title  text-center lg:text-left content-left  place-content-left  justify-center content-left leading-tight",
    bgImgCss:
      "py-10 lazyload object-fit bg-cover bg-no-repeat relative    lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    para: "Contact iAssureIT Today ",
    paraCss: " text-light title text-center lg:text-left mt-5 ",
    gridCss:
      "pt-5 lg:pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1   lg:grid-cols-2 flex-row-reverse md:flex-none  lg:h-full   xl:h-full h-full px-10  md:px-20 lg:px-32 2xl:px-32 xxl:!px-48 ",
    gridSubDivCss: " my-auto text-white 2xl:w-2/3 pt-10 ",
    image: "/images/specific/Home/HomeNewImg/Rupee.webp",
    imageCss:
      "object-fit px-2 py-3 md:p-24 lg:p-0 w-full  lg:w-auto mx-auto  object-fit lazyload place-content-bottom object-bottom ",
    borderColor: "border-darkBlue",
    imgTagcss: "h-auto w-full",
    // btn2: "true",
    // btn2Url: "/contact-us",
    // btn2UrlName: "Contact Us",
    // btn2Css:
    //   "mx-auto font-bold text-lg md:text-xl  p-3  2xl:px-2 text-center border w-full md:w-3/4  lg:w-3/4 xl:w-3/4 2xl:w-3/4 rounded btn bg-light text-darkGray mt-10 mb-10  md:mt-5 lg:mb-20 lg:mt-0 hover:bg-transparent hover:text-white",
    modalId: "contactUsModal",
    modalDisplay2: "true",
    modalUrlName2: "Contact Us <span><i class='fa-solid  fa-angle-double-right'></i></span>",
    modalBtnCss2: "mx-auto font-bold text-lg md:text-xl  p-3  2xl:px-2 text-center border w-full md:w-3/4  lg:w-3/4 xl:w-3/4 2xl:w-3/4 rounded btn bg-white text-darkGray mt-10 mb-10  md:mt-5 lg:mb-20 lg:mt-0 hover:bg-transparent hover:text-white cursor-pointer"

  };
  const content_About = {
    sectionClass:
      "pt-20 pb-20 md:pt-10 md:pb-10 lazyload object-fit bg-cover bg-no-repeat relative bg-blue-50   lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] px-2 md:px-5 lg:px-32 2xl:px-32",
    // sectionBgImg:
    //   "/images/specific/Home/HomeNewImg/iAssureIT-home-page-background-3.webp",
    // smallBGImage:
    //   "/images/specific/Home/HomeNewImg/Responsive/iAssureIT-home-page-background-3.webp",

    pageTitle:
      "<span class=' font-extrabold'>About Mr. Ashish Naik:</span>  ",
    pageTitleCss: "w-full text-center   BlockTitle mb-10 md:mb-5 2xl:mb-2 leading-relaxed",
    blockSubTitle:
      "<div class='px-3 md:px-20'> At our training program, we pride ourselves on being the leading destination for individuals aspiring to excel in FullStack Development. Led by the esteemed mentor, Mr. Ashish Naik, a seasoned professional with over 25 years of experience in the IT industry, our program stands as a beacon of excellence, offering unparalleled expertise and guidance to our students.</div> <br/><span class='my-4 md:my-5 w-full text-left font-extrabold  uppercase  BlockTitle float-left leading-tight'>Ashish Naik’s Career <br/> Highlights:</span>",
    classForblockSubTitle:
      "text-xl md:text-sm lg:text-lg text-center font-normal   mx-auto    -mt-10 md:mt-0",
    bgImage:
      "/images/specific/Home/HomeNewImg/iAssureIT-home-page-image-2.webp",
    bgImageCss: "md:w-full xl:w-auto  2xl:w-2/3 mx-auto h-auto object-cover xl:mb-32 lg:-mt-12 2xl:-mt-5",
    bigImageAlt: "iAssureIT-infra",
    gridCss: "grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-10 float-left px-3",
    gridCol1Css: "order-last  w-full h-auto relative my-auto",
    repeatedBlkCss: " shadow-none flex items-start sm:h-36 md:h-auto my-10 2xl:my-5  border-b ",
    imgCss:
      "flex-none bg-purple h-auto   items-start rounded mr-3 md:mr-10 object-cover shadow-[4.0px_8.0px_8.0px_rgba(97,143,237,0.8)]",
    titleCss: " text-lg md:text-sm lg:text-sm 2xl:text-lg overflow-hidden mb-8",
    desCss: "",
    linkCss: "float-right px-4 text-skyBlue",
    repeatedBlocks: [
      {
        imageSrc:
          "images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-4.webp",
        title: "25 years of IT Industry experience, spanning across various domains and technologies.",
      },
      {
        imageSrc:
          "images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-5.webp",
        title: "Masters degree graduate from IIT Delhi, showcasing his dedication to excellence and continuous learning.",
      },
      {
        imageSrc:
          "images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-6.webp",
        title: "Extensive global experience, having worked in countries such as the US, Italy, Canada, UK, Switzerland, and Dubai.",
      },
      {
        imageSrc:
          "images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-6.webp",
        title: "Collaborated with over 12 Fortune-500 clients, delivering cutting-edge solutions and exceeding expectations.",
      },
      {
        imageSrc:
          "images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-6.webp",
        title: "Entrepreneurial spirit, with over 12 years of experience running successful ventures in the tech space.",
      },
      {
        imageSrc:
          "images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-6.webp",
        title: "Developed over 600 applications, demonstrating his proficiency in a wide array of technologies.",
      },
      {
        imageSrc:
          "images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-6.webp",
        title: "Expertise in more than 60 technologies, showcasing his versatility and adaptability in the ever-evolving tech landscape.",
      },
    ],
    // dash: "border-white mb-5 mt-5 md:mt-20 lg:mt-52 xl:mt-40 xxl:!mt-72",
  };
  const content_SmallBanner2 = {
    id: "mbSmallBanner",
    // bgImage: "/images/specific/Services/MobileApp/Images/12.webp",
    // smallBGImage: "/images/specific/Services/MobileApp/Images/12.webp",
    title: "Affordable Online Courses & Learning Opportunities For You",
    titleClass: " text-center mx-auto  my-auto font-extrabold text-lg md:text-3xl xl:text-4xl py-10 md:py-20 w-full md:w-3/5 2xl:w-1/2",
    className: "h-auto w-full mx-auto",
    alt: "reserve",
    bgImgCss: "bg-blue-600 py-3 md:py-10 mb-5 md:mb-20 2xl:py-5 bg-cover bg-no-repeat  bg-left-bottom lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]",
    gridCss: "grid grid-cols-1 sm:grid-cols-1   lg:grid-cols-1 2xl:grid-cols-1 gap-x-10 h-full w-full content-center  place-content-center my-auto xl:py-10",
    gridCol1Class: "my-auto  sm:w-auto  text-white text-center  mb-2 md:mb-4 ",
    // para: "",
    // paraCss: "text-xs md:text-2xl xl:text-2xl text-light text-center "
  }
 
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("process.env.NEXT_PUBLIC_BASE_URL", process.env.NEXT_PUBLIC_BASE_URL)
    // try {
    const url = '/';
    const encodedURL = encodeURIComponent(url);
    console.log("encodedURL", encodedURL)
    axios.get('api/seodetails/get/url/' + encodedURL)
      .then(response => {
        console.log("response.data -> ", response.data);
        setData(response.data);

      })
      .catch(error => {
        console.log("error -------> ", error);
      })
    // }

  }, []);

  return (
    <main className=" flex flex-col justify-between min-h-screen bg-white font-TerminaTest">

      {/* PB added metaData */}
      <CustomHead
        title={data ? data.metaTagTitle : ""}
        description={data ? data.metaDescription : ""}
        keywords={data ? data.keywords : ""}
        canonicalUrl={data ? data.canonicalUrl : ""}
      />
      <BgImgLeftContentRtImg inputData={content_CET} />
      <LeftImgRightRepeatableBlk
        inputData={content_About}
        readMore={false}
      />
      <SmallBanner inputData={content_SmallBanner2} />
      <Map
        // dash="border-blue-700 mb-5 md:mb-3"
        // pageTitle="OUR <span class='uppercase font-extrabold leading-relaxed' > LOCATIONS</span>"
        pageTitleCss=" mb-12 text-black w-full text-center text-3xl md:text-3xl lg:text-4xl xl:text-4xl"

        mapCss="h-96 rounded-none"
        locationPath="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.6527976967045!2d73.90869827574598!3d18.54458568255369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c220a4234a03%3A0xaacdd60fadf55f2c!2siAssure%20International%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1696849231056!5m2!1sen!2sin"
      />
      <CenterContentRepeatableBlocks
        inputData={content_DigitalTransformation}
      />      
      <BgImgLeftContentRtImg inputData={content_contactBlock} />   

    </main>
  );
}


export default HomePage;
