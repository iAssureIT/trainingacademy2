"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import BgImgLeftContentRtImg from "@/templates/ContentBlocks/BgImgLeftContent/BgImgLeftContentRtImg";
import BgImgRightContent from "@/templates//ContentBlocks/BgImgRightContent/BgImgRightContent";
import ProfileImages from "@/templates/ProfileImages/ProfileImages";
import BgImgLeftImgRtGrid from "@/templates/ContentBlocks/BgImgLeftImgRightGrid/BgImgLeftImgRightGrid";
import OurPortfolio from "@/templates/OurPortfolio/OurPortfolio";
import CenterContentRepeatableBlocks from "@/templates/RepeatableBlocks/CenterContentRepeatableBlocks/CenterContentRepeatableBlocks";
import CenterImgCenterContentRepBlk from "@/templates/RepeatableBlocks/CenterImgCenterContentRepeatableBlocks/CenterImgCenterContentRepeatableBlocks";
import LeftUserImageRightText from "@/templates/Carousel/LeftUserImageRightText/LeftUserImageRightText";
import CustomHead from "@/templates/CustomHead/CustomHead";

const AboutUs = ({ data }) => {
  const content_leftContentBgImg = {
    id: "aboutBanner",
    bgImage: "/images/specific/about_us/banner.webp",
    smallBGImage: "/images/specific/about_us/MobResponsive/1.webp",
    logo: "",
    h1Txt: "<h1>ABOUT US</h1>",
    h1TxtCss:
      " text-5xl md:text-3xl xl:text-7xl 2xl:text-8xl  font-extrabold text-center md:text-left content-left  place-content-left  justify-center content-left px-5 md:px-0 ",
    bgImgCss:
      "lazyload object-fit bg-cover bg-no-repeat relative    lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    para: "Journey Towards Excellence with iAssureIT",

    paraCss: " font-semibold title text-left md:text-left text-xl md:text-2xl px-10 md:px-1 mt-5 md:mt-0 mb-10 md:mb-0",
    gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2   md:grid-cols-2  py-20  md:py-20 xl:py-0 2xl:py-20 h-auto md:h-full lg:h-full   xl:h-full 2xl:h-full  ",
    gridSubDivCss: " my-auto text-white  md:pl-6 md:pl-16 lg:pl-32 xl:pl-32 xl:-mr-32 2x:mr-0 2xl:pl-48 xxl:pl-40",

    image: "/images/specific/about_us/2.webp",
    imageCss:
      " order-first md:order-last w-auto object-fit px-10 md:px-0 md:p-24  pl-0 w-1/2 mx-auto  md:pt-32 md:pt-20 object-fit lazyload place-content-bottom object-bottom ",
    borderColor: "border-darkBlue",
  };
  const content_journeyBlk = {
    id: "journeyBlk",
    bgImage: "/images/specific/about_us/journey1Bg.webp",
    smallBGImage: "/images/specific/about_us/MobResponsive/4.webp",
    pageTitle:
      "<span class='uppercase  text-3xl md:text-3xl xl:text-5xl'>Journey Towards </span> <br/> <span class=' font-extrabold  text-3xl md:text-3xl xl:text-5xl'>Excellence with iAssureIT</span> ",
    pageTitleCss: "text-white w-full text-center leading-10 text-3xl md:text-3xl xl:text-5xl px-2 mb-10 ",
    classForblockContent:
      "px-5 md:px-1 lg:w-3/4 xl:w-4/5 2xl:w-4/5  mx-auto text-center font-normal text-darkGray mb-10 text-lg md:text-2xl text-white",
    blockContent:
      "At <b>iAssureIT</b>, we are more than just a pioneering force in the technological realm; we are a thriving community of innovators, a reliable partner for our customers, and a promising venture for investors and job seekers. Our journey is driven by a clear mission, a visionary outlook, and core values that are deeply embedded in our organizational fabric.",
    h1TxtLine1:
      " <div class='w-full mb-10'><ul class='mb-5 place-content-center md:place-content-start flex flex-wrap'> <li class='dash1'></li><li class='dash2' ></li> <li class='dash3 '></li></ul></div>MISSION",
    h1TxtLine1Css:
      " text-3xl md:text-3xl xl:text-5xl text-white font-extrabold text-center md:text-left mb-3 md:mb-6",
    title2:
      " <div class='w-full mb-4'><ul class='mb-5 place-content-center md:place-content-start flex flex-wrap'> <li class='dash1'></li><li class='dash2' ></li> <li class='dash3 '></li></ul></div>VISION",
    logo: "",
    bgImgCss:
      "object-fit pt-32 pb-48 lg:pb-64 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyloaded",
    para: "Our mission is to harness the power of technology to deliver ingenious solutions, fostering a culture of innovation and excellence that translates into success for our clients and stakeholders.",
    paraCss: " text-light text-lg md:text-2xl text-left md:text-left font-normal ",
    gridCss:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  md:grid-cols-2  gap-10 lg:h-full   xl:h-full h-full px-6 md:px-10 lg:px-32 md:mt-10 lg:mt-2",
    gridSubDivCss: " my-auto text-white pb-10 ",
    image: "/images/specific/about_us/journeyImg2.webp",
    imageCss:
      "  w-auto object-fit  mx-auto  object-fit lazyload place-content-bottom object-bottom ",
    borderColor: "border-darkBlue",
    dash: "border-white mb-5 md:mb-3 mt-8 md:mt-5 lg:mt-20",
    grid2: "true",
    grid2Css:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 pb-20 md:grid-cols-2   lg:h-full   xl:h-full h-full px-3  md:px-10 lg:px-32 gap-10  ",
    image2: "/images/specific/about_us/journeyImg1.webp",
    para2:
      "We envision being a global leader in technological innovation, offering a platform where ideas flourish, ambitions are nurtured, and success is a collaborative endeavor.",
  };
  const content_BgImgRightTxt_3 = {
    paraTitle:
      "<span class='text-blue-600 font-bold'>iAssureIT </span> is an innovative IT company with an energetic, talented, and ambitious pool of 60+ Software Engineers, passionate about bringing disruptive change in the technology arena.<br/> <br/> We are the <span class='text-blue-600 font-semibold text-xl md:text-xl lg:text-xl'>Change Makers</span>. We are the experts in developing business applications that define your business,  help in scale-up, and revenue growth. In our wonderful journey of <span class='text-lg md:text-xl lg:text-xl font-bold'> 8+ years, started in August 2015,</span> we developed over <span class='text-lg md:text-xl lg:text-xl font-bold'>600+ projects </span> for our clientele from India, the USA, European Countries, South Africa, Singapore, and Australia.",
    paraTitleClass: "text-lg md:text-lg lg:text-xl text-justify font-medium",
    bgImgCss: "lazyload",
    pageTitle:
      "<span class='font-normal'>WHO  </span> <span class='font-extrabold '>WE ARE?</span>",
    pageTitleCss: "w-full text-center   text-3xl md:text-3xl xl:text-4xl",
    gridColCss:
      "	 my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5  md:pl-6 md:pl-16 lg:pl-0 2xl:pl-0 xxl:pl-40 xxl:px-10",
    // gridCol1Css: "w-1/2 mx-auto",
    gridClass:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2 md:px-10 xl:px-20 2xl:px-32 xxl:px-48 lg:h-full   xl:h-full h-full content-center  md:mt-10 xl:mt-7",
    bannerClass:
      "object-fit  bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    image: "/images/specific/about_us/whoWeAre.webp",
    imageCss:
      "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload mt-10",
    imgTagcss: "mx-auto lazyload w-2/3 md:w-full lg:w-3/4 2xl:w-auto",
    dash: "border-blue-700 mb-5 md:mb-3",
  };
  const content_researchLab = {
    id: "ResearchLab",
    bgImage: "/images/specific/about_us/ResearchBanner.webp",
    smallBGImage: "/images/specific/about_us/researchBgMobile.webp",
    pageTitle:
      "iAssureIT <span class='uppercase font-extrabold '>research lab</span> ",
    pageTitleCss:
      "relative text-white w-full text-center  text-3xl md:text-3xl xl:text-5xl px-2 mb-10 ",
    logo: "/images/specific/about_us/dron.webp",
    logoCss:
      " absolute  block w-32 md:w-1/3 lg:w-auto top-48 right-5  md:top-32 lg:top-32  xl:top-52 md:right-0 lg:right-0 xl:right-12 2xl:right-32",
    // h1Txt: "ABOUT US",
    // h1TxtCss: " text-xl md:text-3xl xl:text-8xl font-extrabold text-center md:text-center content-center  place-content-left  justify-center content-left ",
    bgImgCss:
      "object-fit py-32 md:py-48 2xl:py-20  bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyloaded",
    para: "Our substantial investment in the iAssure Research Lab underscores our commitment to research and innovation. With flagship products like the “Fastrack Framework”",

    paraCss: " text-light subTitle text-center md:text-left font-semibold place-content-start px-4 md:px-0 py-10 md:py-0",
    gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  md:grid-cols-2  gap-2 sm:gap-10 md:gap-20 lg:h-full md:mt-12 lg:mt-10 xl:mt-3   xl:h-full h-full px-3 md:px-10 lg:px-32  2xl:px-32 ",
    gridSubDivCss: " my-auto text-white 2xl:h-full 2xl:pt-20 order-first md:order-none",
    image: "/images/specific/about_us/15.webp",
    imageCss: '  w-auto object-fit  mx-auto  object-fit lazyload place-content-bottom object-bottom px-4 md:px-0 py-4 sm:py-10 md:py-0',

    borderColor: "border-darkBlue",
    dash: "border-white mb-5 md:mb-3 mt-32 md:mt-10 lg:mt-32 2xl:mt-72",
    grid2: "true",
    grid2Css:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  md:grid-cols-2   lg:h-full   xl:h-full h-full px-3  md:px-10 lg:px-32 gap-10  ",
    image2: "/images/specific/about_us/14.webp",

    para2: "A rapid Web and mobile applications development framework and the “Sampoorn Engine”  an auto pilot e-commerce engine. <br/> <br/> we are nurturing an environment that encourages continuous innovation, pushing the boundaries of what's possible.",
    imgTagcss: "h-full 2xl:h-4/5 xxl:!h-3/4 "
  }
  const content_OurPortfolio = {
    blockTitle:
      " <span class=' font-normal'>OUR </span> <span class='font-extrabold'> LEADERSHIP </span>",
    blockSubTitle: "",
    classForblockTitle: "w-full text-center  leading-10 text-3xl md:text-3xl xl:text-5xl ",
    classForblockSubTitle:
      "lg:w-2/3 2xl:w-3/5 mx-auto text-center font-normal text-darkGray mb-10 bodyTxt",
    classForNoOfCards:
      "px-10 lg:px-20 3xl:px-72 pt-20 pb-20 md:pt-20 md:pb-5 max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-6",
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
      { cardImage: '/images/specific/Our-Leadership/Tapasya.webp', altImg: 'portfolio', cardTitle: 'Ms. Tapasya Parit      ', cardSubTitle: "Assistant HR" },


    ],
    dash: "border-blue-700 mb-5 ",
  };
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
  const content_ProfileImages = {
    pageTitle: "OUR <span class='font-extrabold'>EXECUTIVE TEAM</span>",
    pageTitleCss: "text-darkGray w-full text-center BlockTitle mb-10",
    para: "Our success is a result of teamwork and building upon our technical expertise and creative style providing  a full-service solution to our clients.",
    paraCss: "bodyTxt text-center mb-10 ",
    dash: "border-blue-700  md:mb-3",
    profiles: [
      {
        name: "Mr.Ashish Naik",
        profileImage: "/images/specific/about_us/Ashish-Sir.webp",
        role: "MD & CEO",
      },
      {
        name: "Leena",
        profileImage: "/images/generic/profile-man.webp",
        role: "QA",
      },
      {
        name: "Meera",
        profileImage: "/images/generic/profile-woman.webp",
        role: "HR",
      },
      {
        name: "John",
        profileImage: "/images/generic/User.webp",
        role: "Tester",
      },
      {
        name: "Lina",
        profileImage: "/images/generic/userProfile.webp",
        role: "Developer",
      },
      {
        name: "test",
        profileImage: "/images/generic/userProfile1.webp",
        role: "Developer",
      },
      {
        name: "Abc",
        profileImage: "/images/generic/profile-woman.webp",
        role: "Developer",
      },
      {
        name: "xyz",
        profileImage: "/images/generic/User.webp",
        role: "Developer",
      },
    ],
  };
  const content_Values = {
    sectionCss: "mt-10 md:mt-12 lg:-mt-24",
    blockTitle: " <span  class='uppercase font-extrabold ' >VALUES</span>",
    classForblockTitle: "w-full text-center  leading-10 text-3xl md:text-3xl xl:text-5xl ",
    classForNoOfCards:
      "px-3 md:px-10 lg:px-32 2xl:px-48 mt-10 md:mt-20 max-w-8xl text-center justify-evenly grid grid-cols-2 md:grid-cols-1 gap-x-2 lg:gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-6",
    classForCards: "  mb-7 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]",
    classForCardTitle:
      " h-20 lg:h-14  w-full text-white  absolute bottom-0 md:bottom-10 md:left-5 lg:left-0 xl:left-1 text-left text-xs md:text-2xl  lg:text-lg xl:2xl font-normal  p-3 lg:px-7   break-words",
    classForCardTitle_2:
      " bottom-10 md:h-14 w-full  absolute left-0 font-bold text-md text-white p-5",
    classForCardImage: "w-full py-4",
    classForblockContent: "subTitle text-center font-normal",
    blockContent: "",
    bgImgCss:
      "h-[200px] xs:h-80 sm:h-[400px] lg:h-[400px] 2xl:h-[500px] relative py-2 md:py-7  md:py-20 lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]",
    dash: "border-blue-700 mb-5 ",
    cardsArray: [
      {
        cardImage: "",
        altImage: "imageDescription",
        bgImg: "/images/specific/about_us/valueBg1.webp",
        smBgImg: "/images/specific/about_us/valueBg1.webp",
        cardTitle: "Upholding transparency and ethics in all our interactions.",
        classForContent:
          "py-4 md:py-10 px-2 lg:px-7 xl:px-2 justify-content uppercase  text-white text-left text-sm md:text-2xl absolute  my-auto h-16 md:h-36  lg:h-32 md:left-5 lg:left-0 xl:left-5 bottom-10 w-full   font-extrabold ",
        content: "  Integrity",
      },
      {
        cardImage: "",
        altImage: "imageDescription",
        bgImg: "/images/specific/about_us/valueBg3.webp",
        cardTitle:
          "Continuously seeking novel solutions to complex challenges.",
        classForContent:
          "py-4 md:py-10 px-2 lg:px-7 xl:px-2 justify-content uppercase  text-white text-left text-sm md:text-2xl absolute  my-auto h-16 md:h-36  lg:h-32 md:left-5  lg:left-0 xl:left-5 bottom-10 w-full font-extrabold break-words ",
        content: "  Innovation",
      },
      {
        cardImage: "",
        altImage: "imageDescription",
        bgImg: "/images/specific/about_us/valueBg2.webp",
        cardTitle:
          "Striving for superior performance in every task we undertake.",
        classForContent:
          "py-3 md:py-10 px-2 lg:px-7 xl:px-2 justify-content uppercase  text-white text-left text-sm md:text-2xl absolute  my-auto h-16  md:h-36 lg:h-32  md:left-5 lg:left-0 xl:left-5 bottom-10 w-full   font-extrabold",
        content: "Excellence",
      },
      {
        // cardImage         : '',
        altImage: "imageDescription",
        bgImg: "/images/specific/about_us/valueBg4.webp",
        cardTitle:
          "Building strong relationships with our stakeholders based on mutual trust and respect.",
        classForContent:
          "py-3 md:py-10 px-2 lg:px-7 xl:px-2 justify-content uppercase  text-white text-left text-sm md:text-2xl absolute  my-auto h-16  md:h-36 lg:h-32 xl:h-36 md:left-5 lg:left-0 xl:left-5 bottom-10 w-full  font-extrabold ",
        content: "Collaboration",
      },
    ],
  };
  const content_Innovation = {
    sectionCss: "md:my-20",
    blockTitle:
      "WE ARE <span  class='uppercase font-extrabold md:leading-loose ' > Pioneers of Innovation</span>",
    classForblockTitle: "w-full text-center   text-3xl md:text-3xl xl:text-4xl ",
    classForNoOfCards:
      "px-10 lg:px-32 mt-10 md:mt-20 max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-1 gap-x-4 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6",
    classForCards:
      " mx-auto md:w-2/3 lg:w-auto p-3 mb-7 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]",
    classForCardTitle:
      "text-center font-bold text-xl md:text-xl lg:text-2xl p-3",
    classForCardTitle_2:
      "font-bold text-md text-primary dark:text-primary-400 p-5",
    classForCardImage: "w-full px-3 py-0",
    classForblockContent: "text-md md:text-2xl lg:text-xl text-center font-normal px-2 mt-5 md:mt-0 md:px-10 lg:px-32  ",
    blockContent:
      "We are actively exploring new frontiers in AI, Blockchain, Augmented Reality and Virtual Reality among other emerging technologies, to remain at the cutting-edge of the industry. <br/> <br/>  Our technical expertise manifests across various facets of our operations",
    bgImgCss:
      "relative bg-cover p-3 block   bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]",
    dash: "border-blue-700 mb-5 ",
    cardsArray: [
      {
        cardImage: "/images/specific/about_us/10.webp",
        altImage: "Customers",
        cardTitle: "For Our Customers",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg",
        content:
          "  Offering unique, technology-driven solutions to enhance their business operations. ",
      },
      {
        cardImage: "/images/specific/about_us/11.webp",
        altImage: "Products",
        cardTitle: "For Our Products",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg",
        content:
          "Constantly refining our product offerings to stay ahead of the market demands.",
      },
      {
        cardImage: "/images/specific/about_us/12.webp",
        altImage: "Employees",
        cardTitle: "For Our Employees",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg",
        content:
          "Simplifying tasks to improve productivity and efficiency through advanced technological tools.",
      },
    ],
  };
  const content_TeamTestimonial = {
    block_id: "leftUserImageRightText",
    blockWrapperClasses:
      "bg-backgroundBlue w-full h-full p-5 xl:-mt-16 lg:px-10",
    pageTitle:
      " <span class='uppercase font-extrabold leading-relaxed'>OUR TEAMS PASSION</span> <br/> <span class='uppercase '>REFLECTS IN OUR WORK</span>",
    pageTitleCss: "relative  w-full text-center leading-10 text-3xl md:text-3xl xl:text-5xl px-2 mb-10 md:mb-6 ",
    blockSubWrapperClasses:
      "grid gap-4 lg:gap-10 p-5 pt-20 pb-5 md:py-32 lg:pt-20 lg:pb-5 grid-cols-1 ",
    blockContent:
      "Our employees are the cornerstone of our success, and their passion for what they do resonates through our projects.",
    classForblockContent: "text-lg md:text-2xl text-center  font-normal w-full md:w-2/3 2xl:w-3/5  mx-auto  md:mb-5 ",

    blockContentClasses: "h-auto text-justify my-auto text-lg lg:text-xl",
    dash: "border-blue-700 mb-5 ",
    testimonial:
      "test  r sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/images/generic/profile-woman.jpg",
    name: "User Name",

    onlyBgImage: false,
    showChangeButtons: false,
    autoSlide: true,
    className: "relative",
    imgWrap:
      "relative flex items-center justify-center overflow-hidden mx-auto md:w-1/2 xl:w-1/2 2xl:w-2/5",
    imageCss: "object-fit-cover",

    testimonials: [
      {
        image: "/images/specific/Testimonials/Anuja-Kate.webp",
        name: "Ms. Anuja Kate",
        designation: "QA",
        testimonial:
          "<span class='text-4xl font-extrabold'>“</span> This company is is truly a magic for me! I started my career with this company, I must say, this company has really shaped my career amazingly well.<br/>Also, I have no words to describe Company CEO.<br/> <br/>  He is so kind and friendly to all employees. Because of this friendly nature, employees don't feel pressurized while working here.<br/>This company has a very bright future. Because of that, we employees can see a very bright future ahead. Very grateful and proud to be a part of this amazing Organisation.<span class='text-4xl font-extrabold'> ”</span>",
      },
      {
        image: "/images/specific/Testimonials/Sheetal-Khandekar.webp",
        name: "Ms. Sheetal khandekar ",
        designation: "QA",
        testimonial:
          "<span class='text-4xl font-extrabold'>“</span>No Doubt,THE BEST Place to work! I really appreciate and thank you so much for all of the opportunities this company has provided me which has not only helped but,is helping me to grow technically, professionally as well as personally. <br/> <br/> I have learned so much in these past 1 years and still learning from this great place,and will never forget the kindness of management and all of my colleagues.There are lots of opportunities at every level of career.<br/><br/>  Awesome people to work with, always ready to help, encourage and support... be it technical or personal. Company Head MR.Ashish Naik Sir Must Say, He is such cool & supportive person, always have the best solution to any concern/problem and always there to motivate, encourage & provide the best guidance or help.<br/> Working With iAssure IT is simply  an Amazing and Memorable Experience. <span class='mt-10 text-4xl font-extrabold'> ” </span> ",
      },
      {
        image: "/images/specific/Testimonials/Anagha.webp",
        name: "Ms. Anagha R ",
        designation: "MERN Tech Lead",
        testimonial:
          "<span class='text-4xl font-extrabold'>“</span>It's been almost 3 years I am working with iAssureIT. Everyday I am learning new thing. It is not always related to technology but also personal grooming.<br/> But most importantly I have learnt never to give up and every challenge makes you learn something.<br/>I would like to thanks Ashish Sir, for giving me an opportunity.          <span class='mt-10 text-4xl font-extrabold'> ” </span> ",
      },
      // {
      //   image: "/images/generic/User.webp",
      //   name: "Mr. Paras Surana",
      //   designation: "",
      //   testimonial:
      //     '<span class="text-4xl font-extrabold">“</span>One important thing which differentiates iAssureIT from other IT companies is the thought process of complete team & their will to provide the best of features, thinking completely out of the box & without bothering the extra efforts which would go in from their end implementing these. <br/>Really happy & satisfied with the quality of the work. <span class="text-4xl font-extrabold">”</span>',
      // },
      {
        image: "/images/specific/Testimonials/Vikas-Jagdale.webp",
        name: "Mr. Vikas Jagdale",
        designation: "",
        testimonial:
          '<span class="text-4xl font-extrabold">“</span>Great company to work. They treat employees like a family member. iAssureIT is one of the company where all employees are full-stack developer.<br/> Good atmosphere, flexible work life and superb environment to learn about new technologies.  <span class="text-4xl font-extrabold">”</span>',
      },
      // {
      //   image: "/images/generic/User.webp",
      //   name: "Mr. Amar Kawale",
      //   designation: "",
      //   testimonial:
      //     '<span class="text-4xl font-extrabold">“</span>"Fortune to work here!"<br/>Pros : Everything about the company is pro. People, culture, interview process. If you get an opportunity then do join iassureIT.<br/>Cons : though I believe that there is always room for improvement in anything.but thinking of things to improve here it becomes so difficult because all you see around is positive and goody.<br/>Advice to Management :As I said,Love and motivation spread by you creates lot of energy in the complete team and is difficult to describe in words.so keep continuing the way you are. <span class="text-4xl font-extrabold">”</span>',
      // },
      {
        image: "/images/specific/Testimonials/Dnyaneshwar-Kadam.webp",
        name: "Mr. Dnyaneshwar Kadam",
        designation: "VueJS Developer",
        testimonial:
          '<span class="text-4xl font-extrabold">“</span>Really great organization to work with energetic people and excellent top level management and also it is fastest growing organization In the world. <span class="text-4xl font-extrabold">”</span>',
      },
    ],
  };
  const content_CenterImgCenterContentRepeatableBlocks = {
    bgImage: "/images/specific/about_us/16.webp",
    smallBGImage: "/images/specific/about_us/MobResponsive/19.webp",
    bgImgCss:
      "py-48  lazyload object-fit bg-cover bg-no-repeat relative    lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    blockTitle: "AT  <span class='font-extrabold'>iAssureIT</span>",
    classForblockTitle: "text-white w-full text-center leading-10 text-3xl md:text-3xl xl:text-4xl mb-4 md:mb-16  xl:mb-8",
    blockImage: "/images/specific/about_us/18.webp",
    altImage: "imageDescription",
    classForblockImage:
      "w-full lg:w-3/5 rounded-md  mx-auto max-w-4xl xl:max-w-6xl  md:p-10 lazyload",
    classForNoOfCards:
      "px-10 lg:px-20 mb-10 max-w-8xl text-center justify-evenly grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-6",
    classForCardTitle: "text-center font-semibold subTitle",
    classForCardTitle_2:
      "font-bold text-md text-primary dark:text-primary-400 p-5",
    classForCardImage:
      "mx-auto h-40 sm:h-52 md:h-48 lg:h-48 xl:h-52 2xl:h-72 xxl:h-96 p-10 lazyload",
    // classForblockTitle  :" text-sky-500 w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl",

    classForblockContent:
      "px-5 lg:px-12 max-w-6xl mx-auto h-auto text-center  my-auto text-white justify-content text-md md:text-xl font-semibold",
    blockContent:
      "We value talent, passion, and dedication, making it the perfect place for job seekers to thrive and make a meaningful impact. Embarking on a journey with us is more than just a career move; it's a commitment to excellence and innovation.",

    dash: "border-white my-5 md:my-10 md:mb-5",

    btnName: "Join Us",
    btnUrl: "/contact-us",

    btnClass: "py-1 mt-5 md:py-2 md:-mt-5 px-5 md:px-16 title font-bold text-white mx-auto text-center bg-transperant border  rounded hover:bg-gray-200 hover:text-black text-xs md:text-xl "

  };

  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const url = '/about-us';
  //       const encodedURL = encodeURIComponent(url);
  //       const response = await axios.get('http://localhost:3060/api/seodetails/get/url/' + encodedURL);
  //       setData(response.data);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };
  //   fetchData();
  // }, []);

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
      <BgImgLeftContentRtImg inputData={content_journeyBlk} />

      <CenterContentRepeatableBlocks inputData={content_Values} />
      <CenterContentRepeatableBlocks inputData={content_Innovation} />

      <BgImgLeftContentRtImg inputData={content_researchLab} />
      <OurPortfolio inputData={content_OurPortfolio} />
      <BgImgLeftImgRtGrid inputData={content_NationalAwards} />
      {/* <ProfileImages inputData={content_ProfileImages} /> */}
      <LeftUserImageRightText inputData={content_TeamTestimonial} />
      <CenterImgCenterContentRepBlk
        inputData={content_CenterImgCenterContentRepeatableBlocks}
      />
    </div>
  );
};

//PB added metaData
AboutUs.getInitialProps = async () => {
  // Perform data fetching here (e.g., making API requests)
  var url = '/about-us'
  const encodedURL = encodeURIComponent(url);

  try {
    console.log("encodedURL",encodedURL)
    const response = await axios.get('/api/seodetails/get/url/' + encodedURL);
    const data = response.data; // Access the response data directly
    console.log("response", response)
    return { data };
  } catch (error) {
    console.error("Error fetching:", error.message);
    return { data: null, error: error.message }; // Handle the error gracefully
  }
};
export default AboutUs;