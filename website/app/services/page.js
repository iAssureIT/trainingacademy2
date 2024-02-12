"use client";
import VideoBannerWithForm from "@/templates/BannerBlocks/VideoBanner/VideoBannerWithForm/VideoBannerWithForm";
import Statistics from "@/templates/StatisticsBlocks/Statistics"
import LeftImgRightRepeatableBlk from "@/templates/RepeatableBlocks/LeftImgRightRepeatableBlk/LeftImgRightRepeatableBlk";
import MultipleImagesCarousel from "@/templates/Carousel/MultipleImgCarouselWithTopImg/MultipleImagesCarousel";
import OurPortfolio from "@/templates/OurPortfolio/OurPortfolio";
import VideoBanner from "@/templates/BannerBlocks/VideoBanner/VideoBanner";
import CenterImgCenterContentRepeatableBlocks from "@/templates/RepeatableBlocks/CenterImgCenterContentRepeatableBlocks/CenterImgCenterContentRepeatableBlocks";
import OurKeyPlayers from "@/templates/OurTeam/OurTeam";
import BlogsList from "@/templates/Blog/BlogsList";
import ImgCarousel from '@/templates/Carousel/AllTypeCarousel/Carousel';

export default function HomePage(props) {
  const content_Video = {
    id: "bannerVideo",
    class: "w-full h-auto",
    fgImage1: "/images/specific/Services/StaffAgum2.webp",
    videoUrl: "/images/videos/iAssureIT-Website-banner.mp4"
  }
  const content_Statistics = {
    mainCss: "bg-no-repeat  max-w-full h-auto bg-cover sm:bg-cover bg-center py-20 lg:py-32",
    title: "BUSSINESS STATISTICS",
    titleCss: "text-light text-center font-bold text-md md:text-5xl mb-10",
    bgImage: '/images/generic/5.jpg',
    gridDivCss: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-white gap-5 px-4 md:px-32",
    gridSubDivCss: "border  rounded  py-10",
    dash: "border-white mb-5 md:mb-10",
    StatisticsList: [
      { caption: "8+", address: "Years in Bussiness" },
      { caption: "60+ ", address: "Developers" },
      { caption: "400+", address: "Clients" },
      { caption: "600+", address: "Projects Completed" },
      { caption: "300+", address: "Websites" },
      { caption: "100+", address: "Mobile Apps" }
    ]
  }
  const content_TechnologyStack = {
    sectionClass: "mx-auto text-center p-8 container",
    pageTitle: "TECHNOLOGY STACK",
    blockSubTitle: "With the in-depth expertise gained from several successful applicationsdeployments, iAssureIT works directly with customers to overcome today’s challenges, combining the right technologies and skill sets. ",
    classForblockTitle: "text-darkGray text-center font-bold text-md md:text-5xl py-10 lg:py-5",
    classForblockSubTitle: "text-justify px-1 xl:px-32",
    bgImage: "/images/specific/Services/Technology_Stack/4.webp",
    bgImageCss: 'w-full h-auto object-cover',
    bigImageAlt: "BigImage",
    gridCss: "grid grid-cols-1 lg:grid-cols-2 gap-10",
    titleCss: "font-bold text-base sm:text-lg mb-2",
    desCss: "text-gray-700 text-xs sm:text-base overflow-hidden",
    linkCss: "float-right px-4 text-skyBlue",
    repeatedBlocks: [
      {
        imageSrc: "/images/specific/Services/Technology_Stack/1.webp",
        title: "iOS Mobile App",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing eliLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis nulla ut purus hendrerit.",
      },
      {
        imageSrc: "/images/specific/Services/Technology_Stack/2.webp",
        title: "Android Mobile App",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis nulla ut purus hendrerit.",
      },
      {
        imageSrc: "/images/specific/Services/Technology_Stack/3.webp",
        title: "React Native Mobile App",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis nulla ut purus hendrerit.",
      },
    ],
    dash: "border-blue-700 ",
    gridDivCss: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-darkGray text-sm gap-5 px-4 md:px-32",
    gridSubDivCss: "shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  rounded  py-10",
    addressStyle: "font-normal text-center text-lg xxl:text-xl",
    StatisticsList: [
      { icon: "/images/specific/Services/Technology_Stack/5.webp", address: "Years in Bussiness" },
      { icon: "/images/specific/Services/Technology_Stack/6.webp ", address: "Developers" },
      { icon: "/images/specific/Services/Technology_Stack/7.webp", address: "Clients" },
      { icon: "/images/specific/Services/Technology_Stack/8.webp", address: "Projects Completed" },
    ]
  }
  const content_carousel = {
    blockTitle: "CLIENTS TESTIMONIALS",
    classForblockTitle: "text-darkGray text-center font-bold text-md md:text-5xl py-10 lg:py-16",
    videos: [
      "/images/videos/Banner-1.mp4",
      "/images/videos/iAssureIT-Website-banner.mp4",
      "/images/videos/iAssureIT-Website-banner1.mp4",
      "/images/videos/Banner-1.mp4",
      // "/images/videos/iAssureIT-Website-banner.mp4",
      // "/images/videos/iAssureIT-Website-banner.mp4",
      // "/images/videos/iAssureIT-Website-banner.mp4",
      // "/images/videos/iAssureIT-Website-banner.mp4",
      // "/images/videos/iAssureIT-Website-banner.mp4",
    ],
    txtBlkCss: "w-1/2 lg:w-1/3 object-cover bg-blue-300 gap-10 p-4 slide rounded-lg cursor-pointer",
    dash: "border-blue-700  mb-5 md:mb-5",
  }
  const content_OurPortfolio = {
    blockTitle: " CASE STUDIES",
    blockSubTitle: "We shed light on our work and what goes behind the development",
    classForblockTitle: " text-darkGray w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:py-10 py-10 ",
    classForblockSubTitle: "text-center font-normal text-darkGray mb-10",
    classForNoOfCards: "px-10 lg:px-20  max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6",
    classForCards: "p-3  mb-7 rounded-md",
    classForCardTitle: "text-darkGray text-center font-bold text-xl md:text-xl lg:text-2xl p-3",
    classForCardImage: "w-full rounded-md bg-white p-10 border",
    cardsArray: [
      { cardImage: '/images/specific/Home/Endless_Possibilities/1.webp', altImg: 'portfolio', cardTitle: 'Coffic-1' },
      { cardImage: '/images/specific/Services/MobileApp/Images/2.webp', altImg: 'portfolio', cardTitle: 'BCI (Better Cotton Initiative)' },
      { cardImage: '/images/specific/Services/MobileApp/Images/4.webp', altImg: 'portfolio', cardTitle: 'LYVO' },
      { cardImage: '/images/specific/Services/MobileApp/Images/6.webp', altImg: 'portfolio', cardTitle: 'Unimandai' },
      { cardImage: '/images/specific/Services/MobileApp/Images/1.webp', altImg: 'portfolio', cardTitle: 'Five Bees' },
      { cardImage: '/images/specific/Services/MobileApp/Images/11.webp', altImg: 'portfolio', cardTitle: 'Pipito' },
    ],
    dash: "border-blue-700 mb-5 ",
  };
  const content_VideoBanner = {
    class: "w-full h-full",
    videoUrl: "/images/videos/iAssureIT-Website-banner.mp4"
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
  const content_TestingStrategy = {
    blockTitle: "TESTING STRATEGY",
    classForblockTitle: "text-darkGray w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:py-5 py-10 ",
    blockImage: '/images/specific/Services/Testing_Strategy.webp',
    altImage: 'imageDescription',
    classForblockImage: "w-full rounded-md  mx-auto max-w-4xl p-10 lazyload",
    classForNoOfCards: "",
    classForCards: "text-darkGray p-10 mb-7 rounded-xl border shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
    classForCardTitle: "text-center font-normal text-xl md:text-xl lg:text-2xl p-3",
    classForCardTitle_2: "font-bold text-md text-primary dark:text-primary-400 p-5",
    classForCardImage: "w-full p-10 lazyload",
    // classForblockTitle  :" text-sky-500 w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl",

    classForblockContent: "px-10 lg:px-32  h-auto text-center my-auto text-md lg:text-lg justify-content",
    blockContent: "A comprehensive testing strategy that ensures 7 layers of rigorous testing",
    dash: "border-blue-700 mb-5 ",
  }
  const content_OurTeam = {
    blockTitle: "OUR TEAM",
    classForblockTitle: "text-darkGray w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:py-14 py-10 ",
    blockImage: '/images/specific/Services/Our_Team/1.webp',
    altImage: 'imageDescription',
    classForblockImage: " rounded-md  mx-auto h-1/4  py-10 lazyload",
    classForNoOfCards: "",
    classForCards: "text-darkGray p-10 mb-7 rounded-xl border shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
    classForCardTitle: "text-center font-normal text-xl md:text-xl lg:text-2xl p-3",
    classForCardTitle_2: "font-bold text-md text-primary dark:text-primary-400 p-5",
    classForCardImage: "w-full p-10 lazyload",
    // classForblockTitle  :" text-sky-500 w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl",

    classForblockContent: "px-10 lg:px-32  h-auto text-center my-auto text-md lg:text-lg justify-content",
    blockContent: "A comprehensive testing strategy that ensures 7 layers of rigorous testing",
    dash: "border-blue-700 mb-5 ",
  }
  const content_WhyChoose = {
    sectionClass: "mx-auto text-center p-8 container",
    pageTitle: "<span class=' font-extrabold'>WHY CHOOSE IASSUREIT </span> ",
    pageTitleCss: "w-full text-center   BlockTitle leading-tight ",
    bgImage: "/images/specific/Services/Technology_Stack/4.webp",
    bgImageCss: 'w-full h-auto object-cover',
    bigImageAlt: "BigImage",
    gridCss: "grid grid-cols-1 lg:grid-cols-2 gap-10",
    repeatedBlkCss: " shadow-none my-10 flex sm:h-36 md:h-32 py-5 ",
    imgCss: "flex-none bg-skyBlue h-auto   mx-auto my-auto rounded mr-3 md:mr-10 object-cover",
    titleCss: "font-bold text-base sm:text-lg mb-2",
    desCss: "text-gray-700 text-xs sm:text-base overflow-hidden",
    linkCss: "float-right px-4 text-skyBlue",
    repeatedBlocks: [
      {
        imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/2.webp",
        title: "WORLD CLASS QUALIT & APPOROCH",
        description: "High-quality apps with stringent qualit standards & proven defect prevention plan to ensure we develop zero-defect products and produce truly world-class quality",
      },
      {
        imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/3.webp",
        title: "INNOVATIVE APROACH",
        description: "Innovation is the backbone of a company’s development methodology. We produce amazing micro-innovations at every step in the app to give you a wow effect.",
      },
      {
        imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/4.webp",
        title: "RICH AND DIVERSE EXPERIENCE",
        description: "20 years of rich & diversified experience in the IT Industry working with fortune 500 companies on numerous applications.",
      },
      {
        imageSrc: "/images/specific/Services/WHY_CHOOSE_iAssureIT/5.webp",
        title: "GLOBAL CLIENTELE",
        description: "Years of experience delivering solutions to clients across the USA, Europe, and the Asia Pacific.",
      },
    ],
    dash: "border-blue-700 mb-5 ",

  }
  const content_OurKeyPlayers = {
    blockTitle: "OUR KEY PLAYERS",
    blockSubTitle: "Our success is a result of teamwork and building upon our technical expertise and creative style providing a full-service solution to our clients.",
    classForblockSubTitle: "text-center px-10 md:px-32 py-5 md:py-5",
    classForblockTitle: "text-darkGray w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:py-5 py-10 ",
    classForNoOfCards: "px-10 lg:px-20  max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-6",
    classForCards: "bg-sky-300 text-white p-8 mb-7 rounded-lg",
    classForCardTitle: "text-center font-bold text-xl md:text-xl lg:text-2xl p-3",
    classForCardTitle_2: "font-bold text-md text-primary dark:text-primary-400",
    classForCardImage: "w-full rounded-full pb-5",
    cardsArray: [
      { cardImage: '/images/generic/User.webp', altImg: 'ourTeam', cardTitle: 'Team Member-1', cardTitle_2: 'Asst. Manager' },
      { cardImage: '/images/generic/User.webp', altImg: 'ourTeam', cardTitle: 'Team Member-2', cardTitle_2: 'Asst. Manager' },
      { cardImage: '/images/generic/User.webp', altImg: 'ourTeam', cardTitle: 'Team Member-3', cardTitle_2: 'Asst. Manager' },
      { cardImage: '/images/generic/User.webp', altImg: 'ourTeam', cardTitle: 'Team Member-4', cardTitle_2: 'Asst. Manager' },
      { cardImage: '/images/generic/User.webp', altImg: 'ourTeam', cardTitle: 'Team Member-5', cardTitle_2: 'Asst. Manager' },
      { cardImage: '/images/generic/User.webp', altImg: 'ourTeam', cardTitle: 'Team Member-6', cardTitle_2: 'Asst. Manager' },
      { cardImage: '/images/generic/User.webp', altImg: 'ourTeam', cardTitle: 'Team Member-7', cardTitle_2: 'Asst. Manager' },
      { cardImage: '/images/generic/User.webp', altImg: 'ourTeam', cardTitle: 'Team Member-8', cardTitle_2: 'Asst. Manager' },
    ],
    dash: "border-blue-700 mb-5 ",
  }
  const content_carousel2 = {
    images: [
      "/images/specific/Services/Logos/1.webp",
      "/images/specific/Services/Logos/2.webp",
      "/images/specific/Services/Logos/3.webp",
      "/images/specific/Services/Logos/4.webp",
      "/images/specific/Services/Logos/5.webp",
      "/images/specific/Services/Logos/6.webp",
      "/images/specific/Services/Logos/7.webp",
      "/images/specific/Services/Logos/8.webp",
      "/images/specific/Services/Logos/9.webp",
    ],
    // txtBlkCss:"w-1/2 lg:w-1/3 object-cover bg-blue-300 gap-10 p-4 slide rounded-lg cursor-pointer",
    // textBlock:[
    //   { content:"1 We are sure to make your dream come true. To make yoWe are sure to make your dream come true. To make yoWe are sure to make your dream come true. To make yoWe are sure to make your dream come true. To make yoWe are sure to make your dream come true. To make yoWe are sure to make your dream come true. To make yoWe are sure to make your dream come true. To make your dream a reality, you need to reach us",
    //     author:"abc xyz"
    //   },
    //   { content:"2 We are sure to make your dream come true. To make your dream a reality, you need to reach us",
    //     author:"pxw xyz"
    //   },
    //   { content:"3 We are sure to make your dream come true. To make your dream a reality, you need to reach us",
    //     author:"abc xyz"
    //   },
    //   { content:"4 We are sure to make your dream come true. To make your dream a reality, you need to reach us",
    //     author:"pxw xyz"
    //   },
    //   { content:"5 We are sure to make your dream come true. To make your dream a reality, you need to reach us",
    //     author:"abc xyz"
    //   },
    //   { content:"6 We are sure to make your dream come true. To make your dream a reality, you need to reach us",
    //     author:"pxw xyz"
    //   },
    //   { content:"We are sure to make your dream come true. To make your dream a reality, you need to reach us",
    //     author:"abc xyz"
    //   },
    //   { content:"7 We are sure to make your dream come true. To make your dream a reality, you need to reach us",
    //     author:"pxw xyz"
    //   },
    // ]
  }

  return (
    <section>
      <VideoBannerWithForm inputData={content_Video} />
      <Statistics inputData={content_Statistics} />
      <LeftImgRightRepeatableBlk inputData={content_TechnologyStack} gridImgDisplay={true} readMore={true} />
      <MultipleImagesCarousel inputData={content_carousel} showVideos={true} />
      <OurPortfolio inputData={content_OurPortfolio} />
      <VideoBanner inputData={content_VideoBanner} />
      <BlogsList inputData={content_BlogList} />
      <CenterImgCenterContentRepeatableBlocks inputData={content_OurTeam} />
      <LeftImgRightRepeatableBlk inputData={content_WhyChoose} readMore={false} />
      <CenterImgCenterContentRepeatableBlocks inputData={content_TestingStrategy} />
      <OurKeyPlayers inputData={content_OurKeyPlayers} />
      <ImgCarousel inputData={content_carousel2} showVideos={false} showImages={true} />

    </section>
  );
}