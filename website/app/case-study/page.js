"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BgImgLeftContentRtImg from "@/templates/ContentBlocks/BgImgLeftContent/BgImgLeftContentRtImg";
import TextCarousel from "@/templates/Carousel/AllTypeCarousel/Carousel";
import VideoBanner from "@/templates/BannerBlocks/VideoBanner/VideoBanner";
import CaseStudyContactUs from "@/components/contactUs/caseStudyContactUs";
import CaseStudyList from "@/components/CaseStudy/CaseStudyList";

const CaseStudy = ({ data }) => {

  useEffect(() => {
  }, [])
  const content_leftContentBgImg = {
    id: "aboutBanner",
    bgImage:
      "/images/specific/case_study/landing_page/iAssureit-Case-Study-Landingpage-1.webp",
    smallBGImage: "/images/specific/about_us/MobResponsive/1.webp",
    logo: "",
    h1Txt: "<h1>CASE STUDY</h1>",
    h1TxtCss:
      " text-5xl md:text-3xl xl:text-7xl 2xl:text-8xl  font-extrabold text-center md:text-left content-left  place-content-left  justify-center content-left px-5 md:px-0 ",
    bgImgCss:
      "lazyload object-fit bg-cover bg-no-repeat relative    lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    para: "Journey Towards Excellence with iAssureIT",

    paraCss:
      " font-semibold title text-center lg:text-left  text-xl md:text-2xl px-10 md:px-1 mt-5 md:mt-0 mb-10 ",
    gridCss:
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2   md:grid-cols-2  py-20  md:py-20 xl:py-0 2xl:py-20 h-auto md:h-full lg:h-full   xl:h-full 2xl:h-full  ",
    gridSubDivCss:
      " my-auto text-white  md:pl-6 md:pl-16 lg:pl-32 xl:pl-32 xl:-mr-32 2x:mr-0 2xl:pl-48 xxl:pl-40",

    image:
      "/images/specific/case_study/landing_page/iAssureit-Case-Study-Landingpage-2.webp",
    imageCss:
      " order-first md:order-last  object-fit mb-5 lg:mb-10  lg:px-10 md:px-0 md:p-24  pl-0 w-2/3 mx-auto   md:pt-20 object-fit lazyload place-content-bottom object-bottom ",
    borderColor: "border-darkBlue",
  };

  const content_carousel3 = {
    sectionCss:
      "relative px-12 md:px-20 mb-0 md:mb-5 text-center xl:px-20 max-w-8xl justify-evenly",
    pageTitle:
      "Client Testimonials for <span class='font-extrabold'>iAssureIT </span>",
    pageTitleCss:
      " text-darkGray w-full BlockTitle text-center  font-normal leading-relaxed",
    dash: "border-blue-700 mb-5 md:mb-2 mt-0 md:mt-5 lg:mt-10",
    wrapperCss: "bg-blueColor p-20",
    classForblockContent:
      "lg:px-12 max-w-4xl mx-auto h-auto text-center my-auto text-md lg:text-lg justify-content bodyTxt mb-10 font-semibold",
    blockContent:
      "Discover Transformational Solutions in Our Proven Success Stories.",
    CarouselCss:
      "slides-container whitespace-normal scrollbar-hide  h-auto flex snap-x snap-mandatory overflow-hidden space-x-7 rounded scroll-smooth before:shrink-0 after:shrink-0 md:before:w-0 md:after:w-0 md:px-20 mb-6 md:mb-10",
    txtBlkCss:
      "flex-none h-auto  w-full sm:w-1/2 lg:w-1/3 h-full object-cover  text-left   gap-10  slide rounded-lg cursor-pointer shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 md:mb-10",
    subBlkCss:
      " breakWord h-[305px] md:h-[305px] lg:h-[305px]  p-3 md:p-9 slide  overflow-auto bg-offWhite  italic",
    autherCss:
      "font-semibold p-3 md:px-9 py-3 h-20 md:h-28 lg:h-24 xl:h-20 2xl:h-20 ",
    // txtBlkCss:"w-1/2 lg:w-1/3 object-cover bg-offWhite gap-10 p-4 slide rounded-lg cursor-pointer",
    prevBtnCss:
      "px-2 py-2 prev bg-white text-neutral-900 group shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
    nextBtnCss:
      "px-2 py-2  next bg-white text-neutral-900 group shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
    textBlock: [
      {
        content:
          "<span class='text-xl italic font-semibold'>“</span>One important thing which differentiates iAssureIT from other IT companies is the thought process of complete team & their will to provide the best of features, thinking completely out of the box & without bothering the extra efforts which would go in from their end implementing these. <br/>Really happy & satisfied with the quality of the work<span class='text-xl font-semibold'>”</span>",
        author: "- Mr. Paras Surana",
      },
      {
        content:
          "<span class='text-xl italic font-semibold'>“</span>I am writing to express my gratitude and satisfaction with the exceptional services provided by iAssure IT.  <br/>As a medical professional, the efficient and reliable IT support they have offered has been invaluable in maintaining the smooth operation of my practice through App and Design support.<br/> I would like to extend my heartfelt appreciation to iAssure IT for their unwavering support and exceptional service.<br/>I will recommend them to any healthcare professional or organization in need of top-tier IT solutions and support.<br/> Their dedication to their clients is evident, and they have become an integral part of my practice's success.<span class='text-xl font-semibold'>”</span>",
        author: "- Dr. P. P. Patil",
      },
      {
        content:
          "<span class='text-xl italic font-semibold'>“</span>We engaged iAssureIT for a complex app project, and they delivered beyond our expectations. Their technical proficiency and innovative approach set them apart. The team was responsive to our evolving needs and provided solutions that demonstrated a deep understanding of the industry. We look forward to collaborating on future projects.<span class='text-xl font-semibold'>”</span>",
        author:
          " Shyam Raut <br/><span class='text-sm font-semibold '> Energy Power</span>",
      },
      {
        content:
          "<span class='text-xl italic font-semibold'>“</span>Incredible work by iAssureIT They transformed our concept into a sleek app with precision and speed. Highly recommend their expertise!<span class='text-xl font-semibold'>”</span>",
        author:
          "Shankar Sawant <br/><span class='text-sm font-semibold'> CEO – Open Source Solutions </span>",
      },
      {
        content:
          "<span class='text-xl italic font-semibold'>“</span>Incredible job by iAssureIT ! They turned our vision into a seamless web app. Fast, efficient, and a pleasure to work with.<span class='text-xl font-semibold'>”</span>",
        author:
          "Dr. Amol Malpani<br/><span class='text-sm font-semibold'>Jetkids International School</span>",
      },
      {
        content:
          "<span class='text-xl italic font-semibold'>“</span>Grateful for iAssureIT dedication to our cause. They delivered a user-friendly web app that streamlined our operations. Exceptional service from start to finish.<span class='text-xl font-semibold'>”</span>",
        author:
          "Mr. Pankaj Purohit<br/><span class='text-sm font-semibold'>CIO – Motilal Oswal Securities Ltd.</span>",
      },
      {
        content:
          "<span class='text-xl italic font-semibold'>“</span>Kudos to iAssureIT for bringing my app idea to life! Their expertise and commitment to quality are unmatched. Super satisfied!<span class='text-xl font-semibold'>”</span>",
        author: "Pritam Deuskar",
      },
      {
        content:
          "<span class='text-xl italic font-semibold'>“</span>iAssureIT deserves accolades for the exceptional educational web app they crafted. From concept to execution, their team displayed a deep understanding of our vision, translating it into an intuitive and engaging platform for students. The user interface is not only visually appealing but also promotes seamless interaction, making learning a delight. Kudos to iAssureIT for revolutionizing our educational tools!<span class='text-xl font-semibold'>”</span>",
        author:
          "Vinayak Bogan<br/><span class='text-sm font-semibold'>Sanjay Ghodawat University</span> ",
      },
      {
        content:
          "<span class='text-xl italic font-semibold'>“</span>Working with iAssureIT was a transformative experience. Their team's deep understanding of our vision resulted in a cutting-edge web app that perfectly reflects our brand. The seamless collaboration, attention to detail, and commitment to delivering on time exceeded our expectations. We're incredibly pleased with the outcome and look forward to future projects together.<span class='text-xl font-semibold'>”</span>",
        author:
          "Dr. Mubashir Sheikh<br/><span class='text-sm font-semibold'>Swiss Merchant Banking</span> ",
      },
      {
        content:
          "<span class='text-xl italic font-semibold'>“</span>Our experience with iAssureIT was exceptional. Their team seamlessly transformed our vision into a user-friendly and visually stunning online platform. The level of professionalism, timely delivery, and ongoing support exceeded our expectations. Thanks to their expertise, our business has seen significant growth in the digital marketplace.<span class='text-xl font-semibold'>”</span>",
        author:
          "Barry Baetu<br/><span class='text-sm font-semibold'>Harmonic Group </span> ",
      },
      {
        content:
          "<span class='text-xl italic font-semibold'>“</span>Very much overwhelmed and satisfied with iAssureIT work. These guys have tremendous potential to handle any size of the project and I strongly recommend this company to others. The best of the company is they are 100% committed to work and provide out of the box service. Working with iAssureIT is simply an amazing and memorable experience.<br/>Keep up the good work guys and you rock !!! “<span class='text-xl font-semibold'>”</span>",
        author: "Mohd Imran<br/><span class='text-sm font-semibold'></span> ",
      },
      {
        content:
          "<span class='text-xl italic font-semibold'>“</span>Our experience with iAssureIT was nothing short of exceptional. Their innovative approach, transparent communication, and commitment to quality resulted in a cutting-edge web app that surpassed our expectations. We highly recommend their services for anyone seeking top-tier web development expertise.<span class='text-xl font-semibold'>”</span>",
        author:
          "Dr. Akhil Deshpande<br/><span class='text-sm font-semibold'>TruUSmiles.com</span> ",
      },
      {
        content:
          "<span class='text-xl italic font-semibold'>“</span> iAssureIT exceeded our expectations with their exceptional expertise and prompt delivery. Their innovative solutions and seamless communication made the entire process a breeze. We highly recommend them for anyone seeking top-tier web app development.<span class='text-xl font-semibold'>”</span>",
        author:
          "Greg<br/><span class='text-sm font-semibold'>CIO – City2Shore</span> ",
      },
    ],
  };

  const content_Video = {
    id: "caseStudyVideo",
    class: "w-5/6 mx-auto my-20 rounded-lg ",
    videoUrl: "/images/videos/latest-web-banners.mp4",
    imgUrl: "/images/specific/Home/HomeVideoImg.webp",
  };

  const content_ContactUs = {
    leftBgImage:
      "/images/specific/case_study/landing_page/iAssureIT-case-study-8.jpg",
    leftSmallBgImage:
      "/images/specific/case_study/landing_page/iAssureIT-case-study-8.jpg",
    rightBgImage: "/images/specific/home/awardAchivement.webp",
    rightSmallBgImage: "/images/specific/home/awardAchivement.webp",
    title: " <span class='font-extrabold'>CONTACT </span> US",
    subTitle:
      "Now why to wait? <br/> Contact Us <span class='font-bold'>Immediately</span>",
    image:
      "/images/specific/case_study/landing_page/iAssureIT-case-study-7.webp",
  };

  const content_CaseStudy = {
    id:"caseStudyList",
    dash: "border-blue-700 mb-5 md:mb-1",
    pageTitle: "<div class='uppercase' >Our <span class='font-extrabold '>Case Studies</span></div>",
    pageTitleCss: "w-full text-center text-2xl md:text-3xl xl:text-4xl  2xl:text-4xl mb-10 ",
    service:"All",
    prevBtnCss:
      "px-2 py-2 prev bg-white text-neutral-900 group shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
    nextBtnCss:
      "px-2 py-2  next bg-white text-neutral-900 group shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
  }
  
  return (
    <div>
      <BgImgLeftContentRtImg inputData={content_leftContentBgImg} />
      <CaseStudyList inputData={content_CaseStudy} />

      <TextCarousel
        inputData={content_carousel3}
        showVideos={false}
        showImages={false}
      />

      <VideoBanner inputData={content_Video} />

      <CaseStudyContactUs inputData={content_ContactUs} />
    </div>
  );
};

export default CaseStudy;
