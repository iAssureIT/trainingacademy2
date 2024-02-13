"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import VideoBanner from "@/templates/BannerBlocks/VideoBanner/VideoBanner";
import CenterContentRepeatableBlocks from "@/templates/RepeatableBlocks/CenterContentRepeatableBlocks/CenterContentRepeatableBlocks";
import AccordionBlock from '@/templates/Accordion/AccordionBlock.js'

const HomePage = () => {

    const content_Video = {
        id: "bannerVideo",
        class: "w-full ",
        videoUrl: "/images/videos/latest-web-banners.mp4",
        imgUrl: "/images/specific/Home/HomeVideoImg.webp"
    };
    const accordionData={
        pageTitle:"FAQ",
        titleDescription:"Frequently Asked Questions (FAQs) for Fullstock ReoctJS & NodeJS Training Program",
        accordionData : [
            {
              title: '1. Who is this training program suitable for?',
              content: "Fullstack Development refers to the practice of developing both the frontend (client-side) and backenct (server-side) of web applications. It involves mastering technologies such as ReactJS for frontend development and NodeJS for backend development."
            },
            {
                title: '2. Who is this training program suitable for?',
                content: "Fullstack Development refers to the practice of developing both the frontend "
            },
            {
                title: '3. What ore the prerequisites for enrolling in this program?',
                content: "Fullstack Development refers to the practice of developing both the frontend "
            },
            {
                title: '4. What will I learn in the ReactJS course?',
                content: "Fullstack Development refers to the practice of developing both the frontend "
            },
            {
                title: '5. What will I learn in the NodeJS course',
                content: "Fullstack Development refers to the practice of developing both the frontend "
            },
            {
                title: '6. How is the training delivered?',
                content: "Fullstack Development refers to the practice of developing both the frontend "
            },
            {
                title: '7. What kind of projects will I work on during the troining?',
                content: "Fullstack Development refers to the practice of developing both the frontend "
            },
            {
                title: '8. Will I receive any certification upon completion of the program?',
                content: "Fullstack Development refers to the practice of developing both the frontend "
            },
            {
                title: '9. Do you provide}ob placement assistance?',
                content: "Fullstack Development refers to the practice of developing both the frontend "
            },
            {
                title: '10. What is the duration of the training program?',
                content: "Fullstack Development refers to the practice of developing both the frontend "
            },
            {
                title: '11. Is financial aid available for the program?',
                content: "Fullstack Development refers to the practice of developing both the frontend "
            },
            {
                title: '12. How con I enroll in the training progrom?',
                content: "Fullstack Development refers to the practice of developing both the frontend "
            },
        ],
        titleDescription_2:"Have more questions* Feel free to reach out to us! We're here to help you embark on your journey to becoming a successful Fullstack Developer."
    }
    
  const content_DigitalTransformation = {
    sectionCss: "md:my-5 lg:my-0",
    blockTitle:
      " <span  class='uppercase font-extrabold leading-relaxed' >WHY CHOOSE OUR TRAINING PROGRAM?</span>",
    classForblockTitle: "w-full text-center text-3xl md:text-3xl xl:text-4xl mb-5  my-20",
    classForNoOfCards:
      "px-10 lg:px-32 2xl:px-48 max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-1 gap-x-4 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6",
    classForCards:
      " p-3 mb-7 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]",
    classForCardTitle:
      "text-center font-extrabold text-md md:text-md lg:text-lg p-3",
    classForCardTitle_2:
      "font-bold text-md text-primary dark:text-primary-400 p-5",
      imgDivCss:"py-2",
    classForCardImage: " px-2  w-16 h-16 py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mx-auto bg-purple",
    classForblockContent:
      "text-lg md:text-xl text-center font-[500] px-2 md:px-12 lg:px-32 xl:px-64  2xl:w-2/5 2xl:px-2  mx-auto ",
    blockContent:
      "",
    bgImgCss:
      "relative bg-cover p-3 block   bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
    dash: "border-blue-700 mb-5 lg:mb-0 lg:-mt-12 ",
    cardsArray: [
        {
            cardImage: "/images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-9.webp",
            altImage: "imageDescription",
            cardTitle: "1. Comprehensive Curriculum",
            classForContent: "justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
            content: "Our training program covers all facets of FullStack Development, including Web Technologies, ReactJS Framework, NodeJS, MongoDB, and more. Each course is meticulously designed to provide in-depth understanding and practical skills.",
        },
        {
            cardImage: "/images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-9.webp",
            altImage: "imageDescription",
            classForContent: "justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
            cardTitle:"2. Expert Mentorship",
            content:"With Mr. Ashish Naik at the helm, students benefit from personalized mentorship and guidance from an industry expert. Mr. Naik's extensive experience and practical insights enrich the learning experience, ensuring students are well-prepared for the challenges of the real world."
        },
        {
            cardImage: "/images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-9.webp",
            altImage: "imageDescription",
            classForContent:"justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
            cardTitle:"3. Cutting-edge Technologies",
            content:"Stay ahead of the curve with our focus on the latest technologies and frameworks. From HTML5 and CSS3 to advanced topics like AWS integration and Next.js, our curriculum is constantly updated to reflect industry trends.",
        },
        {
            cardImage: "/images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-9.webp",
            altImage: "imageDescription",
            classForContent:"justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
            cardTitle:"4. Hands-on Learning",
            content:"Our program emphasizes hands-on learning through practical projects, assignments, and real-world case studies. Students gain valuable experience by working on industry-relevant projects under the guidance of experienced mentors.",
        },
        {
            cardImage: "/images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-9.webp",
            altImage: "imageDescription",
            classForContent:"justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
            cardTitle:"5. Internship Opportunities",
            content:"Students who enroll in all four courses are eligible for a three-month internship at iAssure International Technologies Pvt Ltd, with the possibility of securing a full-time job based on performance. ",
        },
        {
            cardImage: "/images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-9.webp",
            altImage: "imageDescription",
            classForContent:"justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
            cardTitle:"6. Job Assistance",
            content:"We provide 100% job assistance to our students, equipping them with the skills and confidence to ace interviews and secure lucrative positions in top IT companies.",
        },
        {
            cardImage: "/images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-9.webp",
            altImage: "imageDescription",
            classForContent:"justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
            cardTitle:"7. Flexible Learning Options",
            content:"Whether you're a beginner or an experienced developer looking to upskill, our program caters to individuals at all levels. Choose from flexible payment options and customize your learning journey based on your goals and schedule.",
        },
        {
            cardImage: "/images/specific/Home/HomeNewImg/Icons/iAssureIT-home-page-icon-9.webp",
            altImage: "imageDescription",
            classForContent:"justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
            cardTitle:"8. Community and Networking",
            content:"Join a vibrant community of like-minded individuals, network with industry professionals, and participate in workshops, seminars, and networking events to broaden your horizons and foster professional growth.",
        }
    ],
  };
    return (
        <div>
            <VideoBanner inputData={content_Video} />

            <CenterContentRepeatableBlocks
                inputData={content_DigitalTransformation}
            />
            <AccordionBlock inputData={accordionData} />
        </div>
    )

}
export default HomePage;
