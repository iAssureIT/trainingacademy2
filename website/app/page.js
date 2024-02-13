"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BgImgLeftContentRtImg from "@/templates/ContentBlocks/BgImgLeftContent/BgImgLeftContentRtImg";
import BgImgRightContent from "@/templates/ContentBlocks/BgImgRightContent/BgImgRightContent";
import CenterContentRepeatableBlocks from "@/templates/RepeatableBlocks/CenterContentRepeatableBlocks/CenterContentRepeatableBlocks";
import CustomHead from "@/templates/CustomHead/CustomHead";
import LeftImgRightRepeatableBlk from "@/templates/RepeatableBlocks/LeftImgRightRepeatableBlk/LeftImgRightRepeatableBlk";
import SmallBanner from "@/templates/BannerBlocks/SmallBanner/SmallBanner";
import Technology from "@/templates/ContentBlocks/Technology/Technology";
import AccordionBlock from '@/templates/Accordion/AccordionBlock.js'


const HomePage = () => { 

	const content_Banner = {
		id: "Banner_Block",
		bgImage:
		"/images/specific/trainingAcademy/iAssureIT-training-1.webp",
		// smallBGImage:
		//   "/images/specific/Home/HomeNewImg/Responsive/iAssureIT-home-page-background-1.webp",
		logo: "",    
		h1Txt:
		"<h1 class='leading-tight uppercase'>100% quality courses </h1><span class='font-bold'>FIND YOUR PERFECT COURSES AND IMPROVE YOUR SKILLS</span>",
		bgImgCss:
		"lazyload object-fit py-5 md:py-10 md:py-0 bg-blue-600 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
		logoCss: "lazyload justify-left align-left  mb-5 ",
		h1TxtCss: "  text-xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-5xl xl:!leading-[1.3] text-justify mt-10 lg:mt-40 text-center lg:text-left",
		gridCss:
		" pt-10 md:pt-40 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 place-content-center lg:grid-cols-2 lg:h-full   xl:h-full h-full content-center  px-5 md:px-20 2xl:px-32 xxl:!px-48",
		gridSubDivCss:
		" md-mt-12 mx-auto text-white content-center  place-content-center  justify-center",
		image: "/images/specific/trainingAcademy/iAssureIT-training-2.webp",
		imageCss: "  object-fit lazyload w-2/3 md:w-2/3 xl:w-2/3 2xl:w-2/3 xxl:!w-full mx-auto mb-0 md:mb-10 pb-0 md:pb-5 md:py-10",
		borderColor:
		"border-darkBluobject-fit py-10 md:py-20 2xl:py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyloadede",
		dash: "",
			
	};

	const content_CET = {
		id: "CET_Block",
		bgImage:
		"/images/specific/trainingAcademy/iAssureIT-training-17.webp",
		// smallBGImage:
		//   "/images/specific/Home/HomeNewImg/Responsive/iAssureIT-home-page-background-1.webp",
		logo: "",
		pageTitle: "Transform Your Skills with </br>Cutting-edge Technologies",
		pageTitleCss: " pb-5 pt-5 md:pt-2 text-xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-5xl xl:!leading-[1.3] text-center text-white w-full text-center font-bold BlockTitle text-center uppercase ",
		// h1Txt:
		//   "<h1 class='leading-tight'>ELEVATE YOUR BUSINESS </h1>WITH IASSUREIT YOUR  <br /> <span class='font-extrabold'> SPECIALIST IN LARGE  <br/>SCALABLE IT SYSTEMS </span> ",
		para: "Stay ahead of the curve and master the latest technologies in Fullstack Development. Our comprehensive training program covers everything from ReactJS and NodeJS to advanced topics like Redux, MongoDB integration, and AWS integration. With flexible learning options and expert guidance from industry professionals, there's no limit to what you can achieve. Take the first step towards transforming your skills and shaping your future – enroll now!",
		bgImgCss:
		"lazyload object-fit py-0 sm:py-10 bg-blue-600 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
		logoCss: "lazyload justify-left align-left  mb-5 ",
		// h1TxtCss: "  text-xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-5xl xl:!leading-[1.3] text-center lg:text-left",
		paraCss:
		" text-white text-sm md:text-lg lg:text-2xl text-justify md:mt-5 ",
		gridCss:
		"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 place-content-center lg:grid-cols-2 lg:h-full   xl:h-full h-full content-center  px-5 md:px-20 2xl:px-32 xxl:!px-48",
		gridSubDivCss:
		" md-mt-12 mx-auto text-white content-center  place-content-center  justify-center",
		image: "/images/specific/trainingAcademy/iAssureIT-training-18.webp",
		imageCss: "  object-fit lazyload w-2/3 md:w-2/3 xl:w-2/3 2xl:w-2/3 xxl:!w-full mx-auto mb-10 pb-5 md:py-10",
		borderColor:
		"border-darkBluobject-fit py-10 md:py-20 2xl:py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyloadede",
		dash: "",
		modalId:"CetModal",  
		modalDisplay:"true",
		modalUrlName:"Explore Courses",
		modalBtnCss:"w-fit mx-auto md:float-left text-white text-center font-bold text-sm md:text-xl lg:text-sm xl:text-lg 2xl:text-xl  my-5 py-2 px-2 md:px-10  2xl:px-6  mt-3 lg:mt-10 border  rounded btn bg-orange-500 hover:bg-offWhite hover:text-black cursor-pointer"
		
	};

	const content_UnlockP = {
		id: "UnlockP_Block",
		bgImage:
			"/images/specific/trainingAcademy/iAssureIT-training-12.webp",
		// smallBGImage:
		//   "/images/specific/Home/HomeNewImg/Responsive/iAssureIT-home-page-background-1.webp",
		logo: "",
		pageTitle: "Unlock Your Potential </br>in Fullstack Development",
		pageTitleCss: "px-1 pb-5 pt-5 md:pt-2 text-xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-5xl xl:!leading-[1.3] text-center text-white w-full text-center font-bold BlockTitle text-center uppercase ",
		para: "Are you ready to take your career to new heights? Our Fullstack ReactJS & NodeJS training program offers the perfect opportunity to unlock your potential and become a sought-after developer in the industry. With expert mentorship, hands-on projects, and job placement assistance, now is the time to invest in your future. Don't wait any longer – enroll today and pave the way for a successful career in Fullstack Development!",
		bgImgCss:
			"lazyload object-fit py-0 sm:py-10 bg-blue-600 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
		logoCss: "lazyload justify-left align-left  mb-5 ",
		paraCss:
			" text-white text-sm md:text-lg lg:text-2xl text-justify md:mt-5 ",
		gridCss:
			"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 place-content-center lg:grid-cols-2 lg:h-full   xl:h-full h-full content-center  px-5 md:px-20 2xl:px-32 xxl:!px-48",
		gridSubDivCss:
			" md-mt-12 mx-auto text-white content-center  place-content-center  justify-center",
		image: "/images/specific/trainingAcademy/iAssureIT-training-13.webp",
		imageCss: "  object-fit lazyload w-2/3 md:w-2/3 xl:w-2/3 2xl:w-2/3 xxl:!w-full mx-auto mb-10 md:mb-0 pb-5 md:pb-0 md:py-10",
		borderColor:
			"border-darkBluobject-fit py-10 md:py-20 2xl:py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyloadede",
		dash: "",
		modalId:"UnlockPModal",  
		modalDisplay:"true",
		modalUrlName:"Enroll Now",
		modalBtnCss:"w-fit mx-auto md:float-left text-white text-center font-bold text-sm md:text-xl lg:text-sm xl:text-lg 2xl:text-xl  my-5 py-2 px-2 md:px-10  2xl:px-6  mt-3 lg:mt-10 border  rounded btn bg-orange-500 hover:bg-offWhite hover:text-black cursor-pointer"
		
	};

	const content_JTCD = {
		id: "JTCD_Block",
		bgImage:
		"/images/specific/trainingAcademy/iAssureIT-training-19.webp",
		// smallBGImage:
		//   "/images/specific/Home/HomeNewImg/Responsive/iAssureIT-home-page-background-1.webp",
		logo: "",
		pageTitle: "Join a Thriving Community </br>of Developers",
		pageTitleCss: "px-1 pb-5 pt-5 md:pt-2 text-xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-5xl xl:!leading-[1.3] text-center text-white w-full text-center font-bold BlockTitle text-center uppercase ",
		para: "Join a vibrant community of like-minded individuals and embark on a journey of growth and discovery. Our training program not only equips you with technical skills but also provides networking opportunities, internships, and job placement assistance. Whether you're a beginner or an experienced developer, there's something for everyone here. Don't miss out on this chance to connect with industry professionals and elevate your career – sign up today!",
		bgImgCss:
		"lazyload object-fit py-0 sm:py-10 bg-blue-600 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
		logoCss: "lazyload justify-left align-left  mb-5 ",
		paraCss:
		" text-white text-sm md:text-lg lg:text-2xl text-justify md:mt-5 ",
		gridCss:
		"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 place-content-center lg:grid-cols-2 lg:h-full   xl:h-full h-full content-center  px-5 md:px-20 2xl:px-32 xxl:!px-48",
		gridSubDivCss:
		" md-mt-12 mx-auto text-white content-center  place-content-center  justify-center",
		image: "/images/specific/trainingAcademy/iAssureIT-training-20.webp",
		imageCss: "  object-fit lazyload w-2/3 md:w-2/3 xl:w-2/3 2xl:w-2/3 xxl:!w-full mx-auto mb-10 pb-5 md:py-10",
		borderColor:
		"border-darkBluobject-fit py-10 md:py-20 2xl:py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyloadede",
		dash: "",
		modalId:"UnlockPModal",  
		modalDisplay:"true",
		modalUrlName:"Join Our Community",
		modalBtnCss:"w-fit mx-auto md:float-left text-white text-center font-bold text-sm md:text-xl lg:text-sm xl:text-lg 2xl:text-xl  my-5 py-2 px-2 md:px-10  2xl:px-6  mt-3 lg:mt-10 border  rounded btn bg-orange-500 hover:bg-offWhite hover:text-black cursor-pointer"
		
	};
		
	const content_Block2 = {
		id: "Banner_Block2",
		paraTitle:
		"At our training program, we pride ourselves on being the leading destination for individuals aspiring to excel in FullStack Development. Led by the esteemed mentor, Mr. Ashish Naik, a seasoned professional with over 25 years of experience in the IT industry, our program stands as a beacon of excellence, offering unparalleled expertise and guidance to our students.",
		paraTitleClass: "subTitle text-sm md:text-lg lg:text-2xl text-justify text-black",
		pageTitle:
			"<span class='font-extrabold'> Welcome to India's Premier Training Program in FullStack Development</span>",
		pageTitleCss: " mb-10 md:mb-20 text-xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-5xl text-black w-full text-center BlockTitle ",
		gridColCss:
			"my-auto mx-auto text-white content-center  place-content-center  justify-center py-5 px-5 sm:py-10 sm:px-10 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-24 xxl:pl-40",
	
		gridCol1Css: "  ",
		gridClass:
			"grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 place-content-center lg:h-full   xl:h-full h-full content-center ",
		bannerClass:
			"object-fit py-5 md:py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
		image: "/images/specific/trainingAcademy/iAssureIT-training-7.webp",
		imageCss:
			"mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
		imgTagcss: "mx-auto lazyload",
	};

	const content_VisionBlock = {
		id: "Vision_Block",
		paraTitle:
		"Driven by a vision to propel India to new heights in the IT industry, Ashish is committed to empowering IT aspirants and equipping them with the skills needed to excel in the digital age. His mission is to ensure that every individual with a passion for technology not only finds success but thrives in the IT industry.<br/><span class=''>Join Ashish Naik and embark on a transformative journey in FullStack Development. With his guidance and mentorship, you'll gain invaluable insights, hone your skills, and emerge as a proficient FullStack developer ready to tackle the challenges of tomorrow's tech world.</span>",
		paraTitleClass: "subTitle text-sm md:text-lg lg:text-2xl text-justify text-white",
		bgImage: "/images/specific/trainingAcademy/iAssureIT-training-15.webp",
		// smallBGImage: "/images/specific/Home/AutoPiloteCommercePlatform/1.webp",
		bgImgCss: "lazyload",
		pageTitle:
		"<span class='font-extrabold uppercase'> Ashish Naik’s Vision:</span>",
		pageTitleCss: " mb-5 sm:mb-10 md:mb-20 text-white w-full text-center BlockTitle",
		gridColCss:
		"my-auto mx-auto text-white content-center  place-content-center  justify-center py-5 px-5 sm:py-10 sm:px-10 md:px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-24 xxl:pl-40",
	
		gridCol1Css: "  ",
		gridClass:
		"grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 place-content-center lg:h-full   xl:h-full h-full content-center ",
		bannerClass:
		"object-fit py-5 md:py-20 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
		image: "/images/specific/trainingAcademy/iAssureIT-training-16.webp",
		imageCss:
		"mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
		imgTagcss: "mx-auto lazyload",
	};

	const content_GlanceBlk = {
		sectionCss: "z-0",
		bgImage:
		"/images/specific/Home/HomeNewImg/iAssureIT-home-page-background-2.webp",
		smallBGImage:
		"/images/specific/Home/HomeNewImg/Responsive/iAssureIT-home-page-background-2.webp",
		bgImgCss:
		"lazyload object-fit py-32 lg:py-48 2xl:py-64 md:-mt-24 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
		pageTitle: "COMPANY AT <span class='font-extrabold leading-relaxed'> A GLANCE </span>",
		pageTitleCss: "text-light w-full text-center BlockTitle text-center",
		dash: "border-white mb-0 md:mb-5 mt-28 md:mt-20",
		titleDivCss: "absolute mt-32 md:mt-10 lg:mt-32 xl:mt-32 2xl:mt-52 mx-auto z-10 w-full",
		classForNoOfCards:
		"px-5 md:px-20 mx-10 grid grid-cols-1 m-5 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 mb-10 lg:mb-20 mt-60 xl:mt-72",
		// "xl:px-32 2xl:w-3/4 mx-auto px-7 pb-10  max-w-8xl my-auto item-center text-center justify-evenly grid  sm:grid-cols-1 md:grid-cols-2 md:gap-x-9 lg:gap-x-9 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-9 mt-10",
		classForCards:
		"grid grid-cols-1 break-words p-5 px-9 text-center py-auto border mb-5 rounded-lg h-auto min-h-36 border-spacing-x-96 mb-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] 2xl:py-16",
		classForCardTitle: "BlockTitle text-white font-extrabold py-auto",
		classForcardTitle_2: " smTxt text-white  font-extrabold",
		classForCardImage: "w-full px-7 ",
		cardsArray: [
		{
			cardImage: "",
			cardTitle: "8+",
			cardImage2: "",
			cardTitle_2: "Years of Resilient Journey",
			cardTitle_3_Icon: (
			<i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>
			),
			cardTitle_3: "",
			cardButton: "",
			cardButtonTitle: "",
			cardButtonColor: "",
			link: "",
		},
		{
			cardImage: "",
			cardTitle: "60+",
			cardImage2: "",
			cardTitle_2: "Tech Experts",
			cardTitle_3_Icon: (
			<i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>
			),
			cardTitle_3: "",
			cardButton: "",
			cardButtonTitle: "",
			cardButtonColor: "",
			link: "",
		},
		{
			cardImage: "",
			cardTitle: "400+",
			cardImage2: "",
			cardTitle_2: "Global Clientele",
			cardTitle_3_Icon: (
			<i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>
			),
			cardTitle_3: "",
			cardButton: "",
			cardButtonTitle: "",
			cardButtonColor: "",
			link: "",
		},
		{
			cardImage: "",
			cardTitle: "600+",
			cardImage2: "",
			cardTitle_2: "Triumphs in Project Deliveries",
			cardTitle_3_Icon: (
			<i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>
			),
			cardTitle_3: "",
			cardButton: "",
			cardButtonTitle: "",
			cardButtonColor: "",
			link: "",
		},
		{
			cardImage: "",
			cardTitle: "300+",
			cardImage2: "",
			cardTitle_2: "Websites",
			cardTitle_3_Icon: (
			<i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>
			),
			cardTitle_3: "",
			cardButton: "",
			cardButtonTitle: "",
			cardButtonColor: "",
			link: "",
		},
		{
			cardImage: "",
			cardTitle: "100+",
			cardImage2: "",
			cardTitle_2: "Mobile Apps",
			cardTitle_3_Icon: (
			<i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>
			),
			cardTitle_3: "",
			cardButton: "",
			cardButtonTitle: "",
			cardButtonColor: "",
			link: "",
		},
		],
	};
	const content_Statistics = {
		mainCss: "lazyload object-fit py-32 lg:py-48 2xl:py-80 md:-mt-24 bg-cover bg-no-repeat relative  w-full   ",
		title: "COMPANY AT <span class='font-extrabold leading-relaxed'> A GLANCE </span>",
		titleCss: "text-center px-10 BlockTitle text-white font-extrabold py-auto mx-auto",
		bgImage: '/images/specific/Home/HomeNewImg/iAssureIT-home-page-background-2.webp',
		gridDivCss: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-white gap-5 px-4 md:px-32",
		gridSubDivCss: "border  rounded  py-10",
		dash: "border-white mt-10 mb-5 md:mb-10",
		StatisticsList: [
		{ caption: "8+", address: "Years in Bussiness" },
		{ caption: "60+ ", address: "Developers" },
		{ caption: "400+", address: "Clients" },
		{ caption: "600+", address: "Projects Completed" },
		{ caption: "300+", address: "Websites" },
		{ caption: "100+", address: "Mobile Apps" }
		]
	}
	const content_whatWeDo = {
		bgImage:
		"/images/specific/Home/WhatWeDo/iAssureIT-home-page-background-14.webp",
		smallBGImage:
		"/images/specific/Home/WhatWeDo/iAssureIT-home-page-background-14.webp",

		dash: "border-blue-700 md:mt-10 lg:mt-2",
		blockTitle: "<span class='font-extrabold'>WHAT</span><span > WE DO</span>",
		classForblockTitle: " w-full text-center BlockTitle",
	};
	const content_leftContentBgImg = {
		id: "FastTrack_Framework",
		bgImage: "/images/specific/Home/FastTrack_Framework/2.webp",
		smallBGImage: "/images/specific/Home/FastTrack_Framework/2.webp",
		logo: "",
		pageTitle: "<span class='font-extrabold'>FASTTRACK</span> FRAMEWORK",
		pageTitleCss: "  text-white w-full text-center BlockTitle",
		para: "Enterprise Apps are always a little more complex as compared to other apps. Especially due to their customized approach for critical business requirements. Designing and developing such enterprise applications means satisfying hundreds or thousands of separate requirements. iAssureIT has those unique and special skills required for developing great quality enterprise applications.",
		bgImgCss:
		"lazyload object-fit py-32 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
		logoCss: "lazyload justify-left align-left  mb-5 ",
		paraCss:
		"text-lg sm:text-lg md:text-2xl lg:text-2xl text-justify font-normal",
		gridCss:
		"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 place-content-center lg:grid-cols-2 mb-0 md:mb-10 lg:h-full   xl:h-full h-full content-center  ",
		gridSubDivCss:
		" mt-12 mx-auto text-white content-center  place-content-center  justify-center mb-10 py-10 px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-24 xxl:pl-40",
		image: "/images/specific/Home/FastTrack_Framework/1.webp",
		imageCss: " py-32 md:py-20 object-fit lazyload",
		imgTagcss: "mx-auto lazyload",
		borderColor: "border-darkBlue",
		dash: "border-white mb-5 md:mb-10 mt-32",
		// url: "/about-us",
		// urlName: "Read More",
		// linkCss: "text-white underline font-bold text-lg md:text-xl mt-3",
	};
	const content_CenterContentRepeatableBlocks = {
		id: "OurSpeciality",
		blockTitle: "<span class='font-extrabold'>OUR</span> SPECIALITY",
		classForblockTitle: " w-full text-center BlockTitle xl:py-5 py-5 ",
		classForNoOfCards:
		"px-10 lg:px-20  max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-1 gap-x-4 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6",
		classForCards:
		" border shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white p-10 mb-10 rounded-xl",
		classForCardTitle: "text-center  text-darkGray title p-3",
		classForCardTitle_2:
		"font-bold text-md text-primary dark:text-primary-400 p-5",
		classForCardImage: "w-1/2 mx-auto p-10 lazyload bg-gray-100 rounded-full",
		classForblockContent:
		"px-10 lg:px-20  xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
		// blockContent           : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		cardsArray: [
		{
			cardImage: "/images/specific/Home/Our_Speciality/1.webp",
			altImage: "imageDescription",
			cardTitle: "Enterprise",
			// cardTitle_2       : 'Block subtitle',
			classForContent:
			"justify-content h-auto text-center text-lightGray my-auto text-lg md:text-2xl xl:text-xl 2xl:text-2xl",
			content:
			"Enterprise-grade web & mobile application development is becoming more agile & collaborative.",
			url: "/about-us",
			urlName: "READ MORE",
			linkCss: "text-blue-700  font-medium text-md md:text-lg mt-3",
		},
		{
			cardImage: "/images/specific/Home/Our_Speciality/2.webp",
			altImage: "imageDescription",
			cardTitle: "Startup World",
			// cardTitle_2       : 'Block subtitle',
			classForContent:
			"justify-content h-auto text-center text-lightGray my-auto subTitle",
			content:
			"We provide all kinds of supports to startups such as business plans, investment funding, market launch, & daily operations.",
			url: "/about-us",
			urlName: "READ MORE",
			linkCss: "text-blue-700  font-medium text-md md:text-lg mt-3",
		},
		{
			cardImage: "/images/specific/Home/Our_Speciality/3.webp",
			altImage: "imageDescription",
			cardTitle: "eCommerce",
			// cardTitle_2       : 'Block subtitle',
			classForContent:
			"justify-content h-auto text-center text-lightGray my-auto subTitle",
			content:
			"From simple design to extremely cutting-edge user experience, we develop any kind of eCommerce website",
			url: "/about-us",
			urlName: "READ MORE",
			linkCss: "text-blue-700  font-medium text-md md:text-lg mt-3",
		},
		],
		dash: "border-blue-700",
	};
	const content_BgImgRightTxt_3 = {
		paraTitle:
		"Our innovative eCommerce platform can not only do everything that a ready-made eCommerce, content management system, or website builder does but also what they can't do. Our customized eCommerce platform provides you absolute magical user experience and unlimited innovations. You can build a single-owner eCommerce shop, the multi-vendor marketplace, franchise model using our eCommerce platform.",
		paraTitleClass: "subTitle text-justify font-normal",
		bgImage: "/images/specific/Home/AutoPiloteCommercePlatform/1.webp",
		smallBGImage: "/images/specific/Home/AutoPiloteCommercePlatform/1.webp",
		bgImgCss: "lazyload",
		pageTitle:
		"<span class='font-extrabold'> AUTOPILOT</span> ECOMMERCE PLATFORM",
		pageTitleCss: " text-light w-full text-center BlockTitle",
		gridColCss:
		"my-auto mx-auto text-white content-center  place-content-center  justify-center py-10 px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-24 xxl:pl-40",

		gridCol1Css: "lg:pb-32",
		gridClass:
		"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center ",
		// gridColCss:"text-white mx-auto my-auto content-center  place-content-center",
		// gridClass: "grid grid-cols-1 xs:grid-cols-1 md:grid-cols-1  lg:grid-cols-2 2xl:grid-cols-2  xl:grid-cols-2 h-auto ",
		// bannerClass: "py-32 p-5 lg:p-10 bg-cover bg-no-repeat relative  w-full  bg-center mb-8 lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]",
		bannerClass:
		"object-fit py-40 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
		image: "/images/specific/Home/AutoPiloteCommercePlatform/2.webp",
		imageCss:
		"mx-auto sm:object-fit my-auto content-center  place-content-center lazyload",
		imgTagcss: "mx-auto lazyload",
		dash: "border-white mb-5 md:mb-10 sm:mt-32 lg:mt-20",
		url: "/about-us",
		urlName: "Read More",
		linkCss: "text-white underline font-bold text-lg md:text-xl mt-5",
	};
	const content_CenterImgCenterContentRepeatableBlocks = {
		blockTitle: "<span class='font-extrabold'>MOBILE APP </span>DEVELOPMENT",
		classForblockTitle: "text-darkGray w-full text-center BlockTitle mb-4",
		blockImage: "/images/specific/Home/Mobile_App_Devlopment/1.webp",
		altImage: "imageDescription",
		classForblockImage: "w-full rounded-md  mx-auto max-w-4xl p-10 lazyload",
		classForNoOfCards:
		"px-10 lg:px-20 mb-10 max-w-8xl text-center justify-evenly grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-6",
		classForCardTitle: "text-center font-semibold subTitle",
		classForCardTitle_2:
		"font-bold text-md text-primary dark:text-primary-400 p-5",
		classForCardImage:
		"mx-auto h-40 sm:h-52 md:h-48 lg:h-48 xl:h-52 2xl:h-72 xxl:h-96 p-10 lazyload",
		// classForblockTitle  :" text-sky-500 w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl",

		classForblockContent:
		"lg:px-12 max-w-4xl mx-auto h-auto text-justify my-auto text-md lg:text-lg justify-content bodyTxt",
		blockContent:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		cardsArray: [
		{
			cardImage: "/images/specific/Home/Mobile_App_Devlopment/2.webp",
			altImage: "imageDescription",
			cardTitle: "User Friendly",
			cardTitle_2: "",
			classForContent: "justify-content h-auto text-justify my-auto subTitle",
			content: "",
			classForCards:
			"text-darkGray p-10 mb-7  h-80 2xl:h-96 rounded-xl border border-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
		},
		{
			cardImage: "/images/specific/Home/Mobile_App_Devlopment/3.webp",
			altImage: "imageDescription",
			cardTitle: "Performance",
			cardTitle_2: "",
			classForContent:
			"justify-content h-auto text-justify my-auto text-md lg:text-lg",
			content: "",
			classForCards:
			"text-darkGray mt-12 h-80 2xl:h-96 p-10 mb-10 rounded-xl border border-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
		},
		{
			cardImage: "/images/specific/Home/Mobile_App_Devlopment/4.webp",
			altImage: "imageDescription",
			cardTitle: "Attractive UI",
			cardTitle_2: "",
			classForContent:
			"justify-content h-auto text-justify my-auto text-md lg:text-lg",
			content: "",
			classForCards:
			"text-darkGray h-80 2xl:h-96 p-10 mb-7 rounded-xl border border-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
		},
		{
			cardImage: "/images/specific/Home/Mobile_App_Devlopment/3.webp",
			altImage: "imageDescription",
			cardTitle: "Business Value",
			cardTitle_2: "",
			classForContent:
			"justify-content h-auto text-justify my-auto text-md lg:text-lg",
			content: "",
			classForCards:
			"text-darkGray  mt-12 h-80 2xl:h-96 p-10 mb-10 rounded-xl border border-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
		},
		],
		dash: "border-blue-700 mb-5 md:mb-5",
	};
	const content_content_mgmt_Syestem = {
		id: "ContentMgmtSystem",
		bgImage: "/images/specific/Home/FastTrack_Framework/2.webp",
		smallBGImage: "/images/specific/Home/FastTrack_Framework/2.webp",
		logo: "",
		pageTitle: "<span class='font-extrabold'>CONTENT</span> MANAGEMENT SYSTEM",
		pageTitleCss: "text-light w-full text-center BlockTitle",
		para: "Enterprise Apps are always a little more complex as compared to other apps. Especially due to their customized approach for critical business requirements. Designing and developing such enterprise applications means satisfying hundreds or thousands of separate requirements. iAssureIT has those unique and special skills required for developing great quality enterprise applications.",
		bgImgCss:
		"object-fit py-32 bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload",
		logoCss: " justify-left align-left  mb-5 lazyload",
		paraCss: "subTitle text-justify font-normal",
		gridCss:
		"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center  ",
		gridSubDivCss:
		"my-auto mt-12 mx-auto text-white content-center  place-content-center  justify-center py-10 px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-24 xxl:pl-40",
		image: "/images/specific/Home/FastTrack_Framework/FastTrack_Framework.webp",
		imageCss: "  mx-auto py-32 md:py-20 object-fit lazyload",
		imgTagcss: "mx-auto lazyload",
		dash: "border-white mb-5 md:mb-10 mt-32",
		// url: "/about-us",
		// urlName: "Read More",
		// linkCss: "text-white underline font-bold text-lg md:text-xl mt-3",
	};
	const content_endLessPossibility = {
		id: "EndLessPossibility",
		// bgImage     : "/images/specific/Home/FastTrack_Framework/2.webp",
		// smallBGImage: "/images/specific/Home/FastTrack_Framework/2.webp",
		logo: "",
		pageTitle: "<span class='font-extrabold'>ENDLESS</span> POSSIBILITIES",
		pageTitleCss: " text-gray w-full text-center  BlockTitle leading-tight",
		para: "Enterprise Apps are always a little more complex as compared to other apps. Especially due to their customized approach for critical business requirements. Designing and developing such enterprise applications means satisfying hundreds or thousands of separate requirements. iAssureIT has those unique and special skills required for developing great quality enterprise applications.",
		bgImgCss:
		"object-fit bg-cover bg-no-repeat relative  py-6 w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload",
		logoCss: " justify-left align-left  mb-5 lazyload",
		paraCss: "subTitle text-justify font-normal text-gray",
		gridCss:
		"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2  lg:h-full   xl:h-full h-full content-center  ",
		gridSubDivCss:
		"my-auto mt-12 mx-auto text-gray content-center  place-content-center  justify-center py-10 px-20 md:pl-6 md:pl-16 lg:pl-20 xl:pl-24 xxl:pl-40",
		image: "/images/specific/Home/Endless_Possibilities/1.webp",
		imageCss: " py-32 md:py-20 object-fit lazyload",
		imgTagcss: "mx-auto lazyload",
		dash: "border-blue-700 mb-5 md:mb-3",
		// url: "/about-us",
		// urlName: "Read More",
		// linkCss: "text-gray underline font-bold text-lg md:text-xl mt-5",
	};
	const content_TopTextImageRepeatBlocks = {
		showChangeButtons: true,
		autoSlide: true,
		blockTitle: "CLIENTS TESTIMONIALS",
		classForblockTitle:
		"text-darkGray w-full text-center font-bold BlockTitle mb-5",
		classForNoOfCards:
		"px-10 lg:px-20  max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-1 gap-x-4 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6",
		classForCards:
		"bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]  text-lightGray italic p-10 mb-10 rounded-xl",
		classForCardTitle:
		"text-left text-blue-600 font-bold text-xl md:text-xl lg:text-2xl p-3",
		classForCardTitle_2:
		"font-normal text-lg text-primary dark:text-primary-400 px-3 my-auto",
		classForCardImage: " p-2 h-24 w-24 rounded-full",
		classForblockContent:
		"px-10 lg:px-20  xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
		// blockContent:
		//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		cardsArray: [
		{
			cardImage: "/images/generic/noImage.webp",
			altImage: "imageDescription",
			cardTitle: "John Doe",
			cardTitle_2: "CEO,Advertisign Corp",
			classForContent:
			"justify-content h-auto text-justify my-auto text-md lg:text-lg",
			content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			cardImage: "/images/generic/noImage.webp",
			altImage: "imageDescription",
			cardTitle: "Block - 2",
			cardTitle_2: "name 2",
			classForContent:
			"justify-content h-auto text-justify my-auto text-md lg:text-lg",
			content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			cardImage: "/images/generic/noImage.webp",
			altImage: "imageDescription",
			cardTitle: "Test3",
			cardTitle_2: "abc entp",
			classForContent:
			"justify-content h-auto text-justify my-auto text-md lg:text-lg",
			content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		// {
		//   cardImage: "/images/generic/noImage.webp",
		//   altImage: "imageDescription",
		//   cardTitle: "Block - 4",
		//   cardTitle_2: "name 4",
		//   classForContent:
		//     "justify-content h-auto text-justify my-auto text-md lg:text-lg",
		//   content:
		//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		// },
		],
		dash: "border-blue-700 mb-5 md:mb-3",
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
	const content_CaseStudy = {
		sectionCss: "md:py-10 bg-white px-2 md:px-20",
		blockTitle: " CASE STUDIES",
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
		"text-darkGray text-center font-semibold text-xl md:text-xl lg:text-2xl p-3",
		classForCardImage: "w-full rounded-md bg-white p-5 border",
		urlName: "/case-study",
		// btnName: "View All",
		btnClass: " text-light rounded text-sm float-right py-2 px-4 bg-blue-800 ",
		cardsArray: [
		{
			cardImage:
			"/images/specific/Services/Our-Portfolio/Mobile_App_2/Coffic.webp",
			altImg: "portfolio",
			cardTitle: "Coffic-1",
		},
		{
			cardImage: "/images/specific/Services/Our-Portfolio/Mobile_App/2.webp",
			altImg: "portfolio",
			cardTitle: "BCI (Better Cotton Initiative)",
		},
		{
			cardImage: "/images/specific/Services/Our-Portfolio/Mobile_App/3.webp",
			altImg: "portfolio",
			cardTitle: "LYVO",
		},
		{
			cardImage: "/images/specific/Services/Our-Portfolio/Mobile_App/4.webp",
			altImg: "portfolio",
			cardTitle: "Unimandai",
		},
		{
			cardImage: "/images/specific/Services/Our-Portfolio/Mobile_App/5.webp",
			altImg: "portfolio",
			cardTitle: "Five Bees",
		},
		{
			cardImage: "/images/specific/Services/Our-Portfolio/Mobile_App/6.webp",
			altImg: "portfolio",
			cardTitle: "Pipito",
		},
		],
		dash: "border-blue-700 mb-5  ",
	};
	const content_transformation = {
		pageTitle:
		"<span class='font-extrabold'>iAssureIT: </span> Your Strategic Partner in Digital Transformation ",
		pageTitleCss: " w-full text-center BlockTitle leading-tight",
		blockContent:
		"At iAssureIT, we leverage expertise, build scalable solutions, and equip you with essential skills to propel you ahead in the dynamic digital landscape.",
		classForblockContent:
		"text-lg md:text-xl xl:text-xl 2xl:text-xl text-center font-[500] px-2 md:px-16 lg:px-32 xl:px-0 2xl:px-2 xl:w-3/5 2xl:w-1/2 mt-10 md:mt-5 mb-16 mx-auto  ",
		dash: "border-blue-700 mb-5 md:mb-5 mt-10",
		classForNoOfCards:
		// "mx-auto  max-w-8xl item-center text-center  grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:gap-x-2 lg:gap-10 gap-10 mx-10 mb-10 mt-10",
		"mx-auto  max-w-8xl item-center text-center  grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:gap-x-2 lg:gap-x-10  mx-10 md:mx-10 mb-10 md:mt-10",
		classForCards:
		" break-words  h-full  border-spacing-x-96 mb-5 md:mb-5 lg:mb-10 ",
		classForBlkWidth: "text-white md:h-24 xl:h-auto p-4 w-3/5 md:w-3/5 lg:w-2/3 xl:w-3/4 2xl:w-3/5",

		classForCardTitle: "BlockTitle  font-extrabold py-auto",
		classForcardTitle_2: "text-lg md:text-sm  lg:text-lg xl:text-[28px] 2xl:text-[25px] font-bold leading-relaxed   text-left text-white font-extrabold leading-relaxed",
		classForCardImage: "w-full px-7 ",
		classForCardImg2: "w-2/3 md:w-auto",
		classForCardTitle_3: " smTxt text-justify",

		cardsArray: [
		{
			cardImage: "",
			cardTitle: "",
			bgImg:
			"images/specific/Home/HomeNewImg/iAssureIT-home-page-background-4.webp",
			cardImage2:
			"/images/specific/Home/HomeNewImg/iAssureIT-home-page-image-8.webp",
			classForCardImg2: "w-auto rounded-t-lg  py-2 mx-auto",
			cardTitle_2: "CUSTOMIZED AND  BFSI-CENTRIC IT SOLUTIONS",
			// cardTitle_3_Icon: <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>,
			cardTitle_3: "",
			cardButton: "",
			cardButtonTitle: "",
			cardButtonColor: "",
			link: "",
			cardPara:
			"Our solutions are crafted to cater to your distinctive business needs in the BFSI sector. From developing sophisticated large scalable applications to enforcing robust cybersecurity measures, we ensure our IT solutions are in perfect harmony with your business objectives.",
		},
		{
			cardImage: "",
			cardTitle: "",
			bgImg:
			"images/specific/Home/HomeNewImg/iAssureIT-home-page-background-5.webp",
			cardImage2:
			"/images/specific/Home/HomeNewImg/iAssureIT-home-page-image-9.webp",
			classForCardImg2: "w-auto rounded-t-lg  py-2 mx-auto",
			cardTitle_2: "SCALABLE AND SUSTAINABLE  SOLUTIONS",
			// cardTitle_3_Icon: <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>,
			cardTitle_3: "",
			cardButton: "",
			cardButtonTitle: "",
			cardButtonColor: "",
			link: "",
			cardPara:
			"Our solutions are engineered for scalability and sustainability, ensuring they resonate with your evolving business demands and remain pertinent in the long term.",
		},
		{
			cardImage: "",
			cardTitle: "",
			classForCardImg2: "w-auto rounded-t-lg  py-2 mx-auto",
			bgImg:
			"images/specific/Home/HomeNewImg/iAssureIT-home-page-background-6.webp",
			cardImage2:
			"/images/specific/Home/HomeNewImg/iAssureIT-home-page-image-10.webp",
			cardTitle_2: "FUTURE-READY  TECHNOLOGIES",
			// cardTitle_3_Icon: <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>,
			cardTitle_3: "",
			cardButton: "",
			cardButtonTitle: "",
			cardButtonColor: "",
			link: "",
			cardPara:
			"Stay at the forefront with our progressive technology approach. We leverage emerging technologies like Artificial Intelligence (AI), Augmented Reality (AR), Virtual Reality (VR), and Blockchain to deliver inventive solutions that are prepared",
		},
		{
			cardImage: "",
			cardTitle: "",
			classForCardImg2: "w-auto rounded-t-lg  py-2 mx-auto",
			bgImg:
			"images/specific/Home/HomeNewImg/iAssureIT-home-page-background-7.webp",
			cardImage2:
			"/images/specific/Home/HomeNewImg/iAssureIT-home-page-image-11.webp",
			cardTitle_2: "EXPERTISE ACROSS  BFSI SPECTRUM",
			// cardTitle_3_Icon: <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>,
			cardTitle_3: "",
			cardButton: "",
			cardButtonTitle: "",
			cardButtonColor: "",
			link: "",
			cardPara: "With a wealth of experience across the BFSI industry, our team of specialists brings a broad perspective and innovative solutions to the table, ensuring a holistic approach to problem-solving",
		},
		],
	};
	const content_CardBlock = {
		bgImage:
		"/images/specific/Home/HomeNewImg/iAssureIT-home-page-background-13.webp",
		smallBGImage:
		"",
		bgImgCss:
		"lazyload object-fit bg-cover bg-no-repeat relative py-0 md:py-1 w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
		// pageTitle: "COMPANY AT <span class='font-extrabold'> A GLANCE </span>",
		// pageTitleCss: "text-light w-full text-center BlockTitle",
		// dash: "border-white mb-5 md:mb-5 mt-32",
		classForNoOfCards:
		"mx-auto  max-w-8xl my-auto item-center text-center justify-evenly grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4  md:mb-16 md:mt-16",
		classForCards:
		"group py-1 md:py-1 mb-10 break-words lg:pb-32  xl:pb-20 2xl:pb-10 px-4 my-auto py-auto h-full lg:mb-10  h-auto border-spacing-x-96 md:mb-10 lg:bg-[image:var(--largeCardImg)]  bg-[image:var(--smallCardImg)]",
		classForCardTitle: "BlockTitle text-white font-extrabold py-auto",
		classForcardTitle_2: "text-lg md:text-lg xl:text-2xl  text-white text-center  font-extrabold ",
		classForCardImage: "w-full px-7 ",
		classForCardTitle_3: "text-white text-[14px]  lg:text-[16px] 2xl:text-[20px] text-justify hidden group-hover:block text-white smTxt text-justify hidden group-hover:block group-hover:animate-[fade-in-up_500s_ease-in-out]-hover:animate-[fade-in-up_500s_ease-in-out]",
		cardsArray: [
		{
			cardImage: "",
			cardTitle: "",
			classForCardImg2: "w-auto rounded-t-lg  py-2 h-auto group-hover:h-48 mx-auto",
			bgImg:
			"/images/specific/Home/HomeNewImg/iAssureIT-home-page-background-9.webp",
			smallBgImg: "/images/specific/Home/HomeNewImg/Responsive/iAssureIT-home-page-background-9.webp",
			cardImage2:
			"/images/specific/Home/HomeNewImg/iAssureIT-home-page-image-21.webp",
			cardTitle_2: "TRANSPARENT AND  ETHICAL PRACTICES",
			cardAltImage2: "cardImg1",
			// cardTitle_3_Icon: <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>,
			cardTitle_3: "Transparency and ethics are the bedrock of our business operations. We believe in maintaining an open line of communication and adhering to the highest ethical standards, building a foundation of trust with our clients.",
			cardButton: "",
			cardButtonTitle: "",
			cardButtonColor: "",
			link: "",
		},
		{
			cardImage: "",
			cardTitle: "",
			classForCardImg2: "w-auto rounded-t-lg  py-2 h-auto group-hover:h-48 mx-auto",
			bgImg:
			"/images/specific/Home/HomeNewImg/iAssureIT-home-page-background-10.webp",
			smallBgImg: "/images/specific/Home/HomeNewImg/Responsive/iAssureIT-home-page-background-10.webp",
			cardImage2:
			"/images/specific/Home/HomeNewImg/iAssureIT-home-page-image-16.webp",
			cardAltImage2: "cardImg2",
			cardTitle_2: "PROACTIVE APPROACH",
			// cardTitle_3_Icon: <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>,
			cardTitle_3:
			"Our proactive approach enables us to anticipate challenges and devise strategies to overcome them well in advance, ensuring smooth project execution and timely delivery.",
			cardButton: "",
			cardButtonTitle: "",
			cardButtonColor: "",
			link: "",
		},
		{
			cardImage: "",
			cardTitle: "",
			classForCardImg2: "w-auto rounded-t-lg  py-2 h-auto group-hover:h-48 mx-auto",
			bgImg:
			"/images/specific/Home/HomeNewImg/iAssureIT-home-page-background-11.webp",
			smallBgImg: "/images/specific/Home/HomeNewImg/Responsive/iAssureIT-home-page-background-11.webp",
			cardImage2:
			"/images/specific/Home/HomeNewImg/iAssureIT-home-page-image-home-page-15.webp",
			cardTitle_2: "CONTINUOUS SKILL  UPGRADATION",
			cardAltImage2: "cardImg3",
			// cardTitle_3_Icon: <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>,
			cardTitle_3: "Our team is our greatest asset and we invest in continuous training and skill upgradation to keep them abreast of the latest technological advancements, ensuring that you receive modern, efficient, and effective solutions.",
			cardButton: "",
			cardButtonTitle: "",
			cardButtonColor: "",
			link: "",
		},
		{
			cardImage: "",
			cardTitle: "",
			classForCardImg2: "w-auto rounded-t-lg  py-2 h-auto group-hover:h-48 mx-auto",
			bgImg:
			"/images/specific/Home/HomeNewImg/iAssureIT-home-page-background-12.webp",
			smallBgImg: "/images/specific/Home/HomeNewImg/Responsive/iAssureIT-home-page-background-12.webp",
			cardImage2:
			"/images/specific/Home/HomeNewImg/iAssureIT-home-page-image-17.webp",
			cardTitle_2: "LONG-TERM  PARTNERSHIP",
			cardAltImage2: "cardImg5",
			// cardTitle_3_Icon: <i className="mt-1 text-2xl fa-solid fa-indian-rupee-sign"></i>,
			cardTitle_3: "We believe in building long-term relationships with our clients. Our journey with you extends beyond project completion, as we offer continued support and are always available for future collaborations.",
			cardButton: "",
			cardButtonTitle: "",
			cardButtonColor: "",
			link: "",
		},
		],
	};

	const content_Courses = {
		sectionCss: "md:my-5 lg:my-0 py-20 bg-offWhite",

		blockTitle:
		" <span  class='uppercase font-extrabold leading-relaxed' > OUR COURSES</span>",
		classForblockTitle: "w-full text-center text-3xl md:text-3xl xl:text-4xl mb-5  md:mb-8 lg:-mt-8",
		classForNoOfCards:
		"px-10 lg:px-32 2xl:px-48 mt-10  max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-1 gap-x-4 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6",
		classForCards:
		" p-3 mb-7 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]",
		classForCardTitle:
		"text-left font-bold text-xl md:text-xl lg:text-2xl p-3",
		classForCardTitle_2:
		"font-bold text-md text-primary dark:text-primary-400 p-5",
		imgDivCss: "py-2",
		classForCardImage: " px-2 w-full",
		// classForblockContent:
		//   "text-lg md:text-xl text-center font-[500] px-2 md:px-12 lg:px-32 xl:px-64  2xl:w-2/5 2xl:px-2  mx-auto ",
		// blockContent:
		//   "We elevate businesses with our quest to innovation and expertise with tech advancement as per BFSI industry requisites.",
		bgImgCss:
		"relative bg-cover p-3 block   bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
		// dash: "border-blue-700 mb-5 lg:mb-0 lg:-mt-12 ",
		cardsArray: [
		{
			cardImage: "/images/specific/trainingAcademy/iAssureIT-training-8.webp",
			altImage: "imageDescription",
			cardTitle: "Course 1: Web Technologies Mastery",
			classForContent:
			"justify-content h-auto text-justify my-auto text-md lg:text-lg p-3 font-[500] ",
			content:
			"<div class='font-semibold text-left'> HTML5, CSS3, Bootstrap6, Tailwind CSS, JavaScript </div>  <br/> <div class='h-auto md:h-32 lg:h-36 xl:h-28 2xl:h-36 overflow-y-scroll'>Dive into the fundamentals of web development with HTML5, CSS3, and Bootstrap6. Learn to craft stunning, responsive designs with Tailwind CSS, and unleash the power of interactivity with JavaScript. From building beautiful UIs to ensuring seamless user experiences, this course lays the groundwork for your FullStack journey.</div>",
		},
		{
			cardImage: "/images/specific/trainingAcademy/iAssureIT-training-9.webp",
			altImage: "imageDescription",
			cardTitle: "Course 2: ReactJS Framework and Beyond",
			classForContent:
			"justify-content h-auto text-justify my-auto text-md lg:text-lg p-3 font-[500]",
			content:
			"<div class='font-semibold text-left'>ReactJS Framework, JSON, API Integration </div> <br/> <div class='h-auto md:h-32 lg:h-36 xl:h-28 2xl:h-36 overflow-y-scroll'>Unlock the potential of ReactJS and harness the versatility of JSON for dynamic data manipulation. Explore the art of API integration and discover how to seamlessly connect your applications with external services. With hands-on projects and real-world scenarios, you'll master the art of building modern, interactive web applications. </div>",
		},
		{
			cardImage: "/images/specific/trainingAcademy/iAssureIT-training-10.webp",
			altImage: "imageDescription",
			cardTitle: "Course 3: NodeJS and Database Development ",
			classForContent:
			"justify-content h-auto text-justify my-auto text-md lg:text-lg p-3 font-[500]",
			content:
			"<div class='font-semibold text-left'>REST API Development, Database Integration </div><br/> <div class='h-auto md:h-32 lg:h-36 xl:h-28 2xl:h-36 overflow-y-scroll'> Delve into the world of server-side development with NodeJS and Express. Learn to harness the power of MongoDB for efficient data storage and retrieval. From REST API development to database management, this course empowers you to create robust backend systems that power your applications with speed and reliability.</div>",
		},
		{
			cardImage: "/images/specific/trainingAcademy/iAssureIT-training-11.webp",
			altImage: "imageDescription",
			cardTitle: "Course 4: Advanced Skills and Beyond",
			classForContent:
			"justify-content h-auto text-justify my-auto text-md lg:text-lg p-3 font-[500]",
			content:
			"<div class='font-semibold text-left'>Redux, AWS Integration, Authentication, Payment Gateway Integration, Next.js, and more. </div><br/><div class='h-auto md:h-32 lg:h-36 xl:h-28 2xl:h-36 overflow-y-scroll'><span class=''>Elevate your FullStack expertise with advanced techniques and cutting-edge technologies. From mastering Redux for state management to integrating AWS services for scalability and reliability, this course pushes the boundaries of what's possible. Explore advanced topics such as user authentication, data visualization with animated graphical charts, and next-generation frameworks like NEXTJS.</span></div>",
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
		"pt-20 pb-20 md:pt-10 md:pb-10 lazyload object-fit bg-cover bg-no-repeat relative bg-offWhite   lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] px-2 md:px-5 lg:px-32 2xl:px-48",
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
		"text-lg md:text-sm lg:text-lg text-center font-normal   mx-auto    -mt-10 md:mt-0",
		bgImage:
		"/images/specific/trainingAcademy/iAssureIT-training-14.webp",
		bgImageCss: "  object-cover 2xl:-mt-10 w-3/4 h-full ",
		bigImageAlt: "iAssureIT-infra",
		gridCss: "grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-10 float-left px-3",
		gridCol1Css: "order-last  w-full h-auto relative my-auto ",
		repeatedBlkCss: " shadow-none flex items-start sm:h-36 md:h-auto my-10 lg:my-5 2xl:my-5  border-b  border-black	leading-tight ",
		imgCss:
		"flex-none h-auto  w-12  items-start rounded mr-3 md:mr-10 object-cover shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
		titleCss: " text-lg md:text-lg lg:text-[16px] 2xl:text-lg overflow-hidden mb-8 xl:mb-5",
		desCss: "",
		linkCss: "float-right px-4 text-skyBlue",
		repeatedBlocks: [
		{
			imageSrc:
			"/images/specific/Icons-1/1.webp",
			title: "25 years of IT Industry experience, spanning across various domains and technologies.",
		},
		{
			imageSrc:
			"/images/specific/Icons-1/2.webp",
			title: "Masters degree graduate from IIT Delhi, showcasing his dedication to excellence and continuous learning.",
		},
		{
			imageSrc:
			"/images/specific/Icons-1/3.webp",
			title: "Extensive global experience, having worked in countries such as the US, Italy, Canada, UK, Switzerland, and Dubai.",
		},
		{
			imageSrc:
			"/images/specific/Icons-1/4.webp",
			title: "Collaborated with over 12 Fortune-500 clients, delivering cutting-edge solutions and exceeding expectations.",
		},
		{
			imageSrc:
			"/images/specific/Icons-1/5.webp",
			title: "Entrepreneurial spirit, with over 12 years of experience running successful ventures in the tech space.",
		},
		{
			imageSrc:
			"/images/specific/Icons-1/6.webp",
			title: "Developed over 600 applications, demonstrating his proficiency in a wide array of technologies.",
		},
		{
			imageSrc:
			"/images/specific/Icons-1/7.webp",
			title: "Expertise in more than 60 technologies, showcasing his versatility and adaptability in the ever-evolving tech landscape.",
		},
		],
		// dash: "border-white mb-5 mt-5 md:mt-20 lg:mt-52 xl:mt-40 xxl:!mt-72",
	};
	const content_SmallBanner2 = {
		id: "mbSmallBanner",
		bgImage: "/images/specific/trainingAcademy/iAssureIT-training-21.webp",
		smallBGImage: "/images/specific/trainingAcademy/iAssureIT-training-21.webp",
		title: "UNLOCK YOUR POTENTIAL, TRANSFORM YOUR SKILLS, AND JOIN A THRIVING COMMUNITY OF DEVELOPERS. ENROLL NOW AND TAKE THE FIRST STEP TOWARDS A SUCCESSFUL CAREER IN FULLSTACK DEVELOPMENT!",
		titleClass: " text-center mx-auto  my-auto font-extrabold text-lg md:text-3xl xl:text-3xl  w-full md:w-5/6 xl:w-4/5 2xl:w-2/3  px-4 2xl:px-10 md:leading-loose",
		className: "h-auto w-full mx-auto",
		alt: "reserve",
		bgImgCss: "bg-blue-600 py-3 md:py-10 mb-5 md:mb-20 2xl:py-20 bg-cover bg-no-repeat  bg-left-bottom lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]",
		gridCss: "grid grid-cols-1 sm:grid-cols-1   lg:grid-cols-1 2xl:grid-cols-1 gap-x-10 h-full w-full content-center  place-content-center my-auto xl:py-10",
		gridCol1Class: "my-auto  sm:w-auto  text-white text-center  ",
		// para: "",
		// paraCss: "text-xs md:text-2xl xl:text-2xl text-light text-center "
	}
	
	const accordionData={
		accordianThemeColor:"bg-orangeColor",
		pageTitle:"FAQ",
		titleDescription:"Frequently Asked Questions (FAQs) for Fullstock ReactJS & NodeJS Training Program",
		accordionData : [
			{
				title:"1. What courses do you offer in your IT training academy?",
				content:"We offer a variety of courses, including web development, mobile app development, and specialized training in various programming languages and frameworks."},
			{
				title:"2. How long are the training programs?",
				content:"Our training programs vary in duration, typically ranging from a few weeks for short courses to several months for comprehensive programs."},
			{
				title:"3. Are the courses suitable for beginners, or do I need prior experience in programming?",
				content:"Our courses cater to all skill levels, including beginners. No prior programming experience is necessary for many of our entry-level courses."},
			{
				title:"4. What technologies/languages do you cover in web and mobile app development training?",
				content:"We cover a wide range of technologies and programming languages, including but not limited to HTML, CSS, JavaScript, reactJs,  NodeJs, NextJs."},
			{
				title:"5. How is the training conducted – online, in-person, or a combination of both?",
				content:"We offer flexible training options, including both online and in-person classes, allowing you to choose the format that suits your preferences and schedule."},
			{
				title:"6. Can I access course materials after completing the training?",
				content:"Yes, you will have continued access to course materials even after completion, providing valuable resources for ongoing reference and learning."},
			{
				title:"7. Do you provide any certification upon course completion?",
				content:"Yes, we offer certification upon successful completion of our courses, recognized in the industry."},
			{
				title:"8. What is the class size for the training sessions?",
				content:"Our classes are designed to maintain an optimal student-to-instructor ratio, ensuring personalized attention and an effective learning experience."},
			{
				title:"9. What kind of projects or practical experience can I expect during the training?",
				content:"Our training emphasizes hands-on projects and real-world applications to provide practical experience and enhance your skills."},
			{
				title:"10. Are there any prerequisites for enrolling in specific courses?",
				content:"Prerequisites vary by course, but many of our programs are designed to accommodate learners with diverse backgrounds and skill sets."},
		],
		titleDescription_2:"Have more questions* Feel free to reach out to us! We're here to help you embark on your journey to becoming a successful Fullstack Developer."
	}
	
    const content_Testimonials = {
        sectionCss: "md:my-5 lg:my-0",
        blockTitle:
          " <span  class='uppercase font-extrabold leading-relaxed' >TESTIMONIALS</span>",
        classForblockTitle: "w-full text-center text-3xl md:text-3xl xl:text-4xl px-10 py-14",
        classForNoOfCards:
          "px-10 lg:px-32 2xl:px-48 max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-1 gap-x-4 lg:gap-x-10 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-10",
        classForCards:
          " p-3 mb-10 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]",
        classForCardTitle:
          "text-center font-extrabold text-md md:text-md lg:text-lg p-3",
        classForCardTitle_2:
          "font-bold text-md text-primary dark:text-primary-400 p-5",
          imgDivCss:"py-2",
        classForCardImage: "",
        classForblockContent:
          "text-lg md:text-xl text-center font-[500] px-2 md:px-12 lg:px-32 xl:px-64  2xl:w-2/5 2xl:px-2  mx-auto ",
        blockContent:
          "",
        bgImgCss:
          "relative bg-cover p-3 block   bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        // dash: "border-blue-700 mb-5 lg:mb-0 lg:-mt-12 ",
		testimonial:true,
		cardsArray: [
            {
				profileImage:"/images/testimonials/Akshay_Madanepatil.webp",
				designation:"Student",
                // cardImage: "",
                altImage: "imageDescription",
                cardTitle: "Akshay Madanepatil",
				name: "Akshay Madanepatil",
                classForContent:" mb-4 breakWord h-[200px] md:h-[200px] lg:h-[200px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                content: `<p>I'm thrilled to share my positive feedback on the training program, and I must say it has been an enriching experience. The incorporation of a "learn with fun" approach made the sessions engaging, ensuring a positive and enjoyable learning environment. </p>`+
                "<br /><p>What stood out for me was the program's problem-oriented methodology, allowing us to practically face challenges and fostering critical thinking for effective solution-building. This unique approach significantly contributed to enhancing my logic and problem-solving skills. The emphasis on concept clarity has been instrumental in enhancing my understanding. </p>"+
                "<br /><p>The unique, multidirectional and assignment oriented focus has made the training exceptionally practical and relevant. Overall, I highly appreciate the program's quality and effectiveness. I feel more confident and equipped with new skills, thanks to this impactful training.</p>",
            },
            {
				designation:"Student",
				profileImage:"/images/testimonials/Siddhant_Kakade.webp",
                // cardImage: "",
                altImage: "imageDescription",
                classForContent:" mb-4 breakWord h-[200px] md:h-[200px] lg:h-[200px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Siddhant Kakade",
				name:"Siddhant Kakade",
                content:`<p>I am writing to provide feedback on the training program conducted by Mr. Ashish Naik over a period of three months. The experience was truly remarkable, and I would like to highlight some key features that made it exceptional.</p>`+

                `<br /><p>Expertise in Software Development Life Cycle: Mr. Naik is an outstanding trainer with extensive expertise in Software Development Life Cycle (SDLC). His depth of knowledge and experience in this domain significantly enriched the training sessions.</p>`+
            
                `<br /><p>Engaging Training Style: Mr. Naik's training methodology is truly captivating. From the very first day, he managed to ignite our energy levels and maintain a high level of engagement throughout the program. His approach to kickstarting the training was both refreshing and effective.</p>`+
            
                `<br /><p>Unique Training Methodology: While the training syllabus may be available elsewhere, Mr. Naik's utilization of the Scientific Method sets his program apart. This innovative approach to training is not commonly found in India and greatly enhances the learning experience.</p>`+
            
                `<br /><p>Positive Atmosphere and Fun Learning: One of the most commendable aspects of Mr. Naik's training is the positivity he instills in his trainees. His manner of communication and ability to make learning enjoyable while ensuring it remains informative is truly commendable.</p>`+
            
                `<br /><p>Holistic Training Approach: In addition to technical skills, Mr. Naik also introduced us to various aspects of the industry, including insights into the USA culture, client handling techniques, mobile-first approach to development, and a comprehensive overview of SDLC. His practical approach to discussing real-world problems and their solutions was invaluable.</p>`+
            
                `<br /><p>Exceptional Trainer: Mr. Naik is undoubtedly a gem of a person and an exceptional trainer. His dedication to providing unparalleled training experiences is evident in every aspect of the program. I believe there is no equivalent training available in the market that matches the quality and depth of learning provided by Mr. Naik.</p>`+
            
                `<br /><p>In conclusion, I am immensely grateful for the opportunity to have participated in Mr. Naik's training program. The knowledge and skills gained during these sessions have been invaluable to my professional development. I highly recommend Mr. Naik's training program to anyone seeking comprehensive and impactful learning experiences.</p>`
            },
            {
				designation:"Student",
				profileImage:"/images/testimonials/Rutika_Bankar.webp",
				// cardImage: "",
                altImage: "imageDescription",
                classForContent:"mb-4 breakWord h-[200px] md:h-[200px] lg:h-[200px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Rutika Bankar",
				name:"Rutika Bankar",
                content:`<p>The Training Program has exceeded my expectations in every way. From the comprehensive curriculum to the exceptional instructor and supportive learning environment, this program has truly empowered me with the skills and confidence to excel in this field. One of the most impressive aspects of the program is its well-structured curriculum, which covers a wide range of topics.</p>`+
                `<br /><p>The hands-on projects and real-world examples provided ample opportunities to apply theoretical knowledge to practical solutions, ensuring a deeper understanding of the concepts taught.</p>`+
                `<br /><p>Mr. Naik’s passion for teaching and dedication to student success truly sets this program apart.</p>`+
                `<br /><p>Furthermore, the program fosters a collaborative and inclusive learning environment where participants are encouraged to ask questions, share ideas, and collaborate on projects. This not only enhances the learning experience but also fosters a sense of camaraderie among participants, creating a supportive community that extends beyond the classroom. Overall, I am extremely grateful for the opportunity to be a part of this Training Program and I would highly recommend it to anyone looking to embark on a similar journey.</p>`,
            },
            {
				designation:"Student",
				profileImage:"/images/testimonials/Ashwini_Kori.webp",
				// cardImage: "",
                altImage: "imageDescription",
                classForContent:"mb-4 breakWord h-[200px] md:h-[200px] lg:h-[200px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Ashwini Kori",
				name:"Ashwini Kori",
                content:`<p>The training program is particularly good and valuable for us as we must keep ourselves updated about newer technologies in the field. It strengthened my technical skills and proved to be a great learning experience, especially with the practical deigning and planning and learn with fun sessions.</p>`+
                `<br /><p>I really enjoying the course and Mr. Ashish Naik's informal Learn with Fun approach to presenting his material.</p>`+
                `<br /><p>Mr. Ashish Naik sir is a wonderfully engaging presenter, very easy to listen to and the course was just the right mix of theory, practical demonstration.</p>`+
                `<br /><p>The Training Program was presented in an enthusiastic way. The content can be related not only to speech therapy but also to events and situations in daily life. Leaves you with a real feel-good factor. </p>`+
                `<br /><p>Thank you for a great Training Program. Great presentation style with lots of opportunities to ask questions and talk about real life examples which all made for a really enjoyable and informative training program."</p>`+
                `<br /><p>This has more than met my expectations. and “very interesting and useful"</p>`+
                `<br /><p>Over all the training program was excellent! Mr. Ashish Naik sir's energy and enthusiasm were infectious, and you kept us engaged throughout the entire session. I appreciated how you provided practical tips and insights that we could immediately apply to our assignments/work Thank you so much for your dedication to making this training program success and finally Thank you so much for giving the opportunity to work with your team.</p>`,
            },
            {
				designation:"Student",
				profileImage:"/images/testimonials/Shubham_Ankushe.webp",
				// cardImage: "",
                altImage: "imageDescription",
                classForContent:"mb-4 breakWord h-[200px] md:h-[200px] lg:h-[200px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Shubham Ankushe",
				name:"Shubham Ankushe",
                content:`<p>I am absolutely delighted to express my profound gratitude for the transformative three-month training program conducted by Mr. Ashish Naik. The exceptional mastery he exhibited in the Full Stack Development enriched our learning experience with invaluable insights. From day one, Mr. Naik's engaging training style not only captivated our attention but also sparked an energetic and highly participative atmosphere. What truly sets his program apart is the innovative incorporation of the Scientific Method, a rarity in India.</p>`+
                `<br /><p>Under Mr. Naik's guidance, the learning environment became not only informative but also positively enjoyable, seamlessly blending fun with knowledge. The training extended beyond technical skills, covering industry insights, client handling techniques, and mobile-first development approaches. Mr. Naik's dedication as an exceptional trainer is evident, providing unparalleled learning experiences that distinguish themselves in the market.</p>`+
                `<br /><p>Additionally, His exceptional expertise in development and knowledge of cutting-edge technologies, with a focus on CSS animations, was truly insightful. Sir's teaching style made complex concepts accessible, and I now feel confident in implementing these skills in real-world projects. Overall, the training was a valuable and exciting learning experience, thanks to Sir's proficiency in web development and his effective teaching methods. I wholeheartedly recommend his training to those seeking impactful and comprehensive learning experiences.</p>`,
            },
            {
				designation:"Student",
				profileImage:"/images/testimonials/Ankit_Kumar_Rai.webp",
				// cardImage: "",
                altImage: "imageDescription",
                classForContent:"mb-4 breakWord h-[200px] md:h-[200px] lg:h-[200px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                                cardTitle:"Ankit Kumar Rai",
				name:"Ankit Kumar Rai",
                content:`<p>I am delighted to share my experience with the Advanced Full Stack Development training led by Ashish Naik. His expertise, dedication, and effective communication have been instrumental in my learning journey. The comprehensive curriculum covered all aspects of Full Stack Development, providing a robust foundation for real-world applications. </p>`+
                `<br /><p>The hands-on projects were particularly beneficial, allowing me to bridge the gap between theory and practical implementation seamlessly. His passion for teaching and commitment to student success were evident in every session, creating a positive and encouraging learning atmosphere. His approachability and willingness to address doubts ensured a supportive and enriching experience. </p>`+
                `<br /><p>I can confidently attest that Ashish Naik's training has not only elevated my technical skills but has also instilled a sense of confidence in my ability to excel in the field. Grateful for this transformative learning adventure!</p>`,
            },
            {
				designation:"Student",
				profileImage:"/images/testimonials/Abhishek_Varma.webp",
				// cardImage: "",
                altImage: "imageDescription",
                classForContent:"mb-4 breakWord h-[200px] md:h-[200px] lg:h-[200px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Abhishek Varma",
				name:"Abhishek Varma",
                content:`<p>I am pleased to provide feedback on the training conducted by Mr. Ashish Naik sir. The experience was truly remarkable, and I would like to highlight some points : </p>`+
                `<br /><p>“Fun with Learn" Strategy: 
                Mr. Ashish Naik sir training approach is remarkably engaging, blending fun with learning seamlessly. This strategy not only makes the sessions enjoyable but also enhances the retention of crucial information.</p>`+
                `<br /><p>Best Mentoring: 
                His mentoring style stands out as exemplary, offering guidance that goes beyond the ordinary. The personalized attention and support contribute significantly to a positive and productive learning experience.</p>`+
                `<br /><p>Simplifying Hard Concepts: 
                Mr. Naik sir excels in simplifying complex concepts, ensuring that even challenging topics are presented in an accessible and easy-to-understand manner. This ability greatly aids in grasping and applying intricate subject matter.</p>`+
                `<br /><p>Depth Knowledge in Software Development: <p>`+
                `<br /><p>The training sessions are enriched by Mr. Ashish Naik sir profound knowledge in software development. His expertise adds depth to the learning experience, providing valuable insights that are beneficial for practical application.</p>`+
                `<br /><p>Impactful Training: The training sessions conducted by Mr. Naik sir  have had a tangible impact on the skills and capabilities of the participants. The practical and relevant content leaves a lasting impression, fostering growth and development.</p>`+
                `<br /><p>I believe that the positive impact of this training will undoubtedly reflect in our company's success under your leadership.</p>`,
            },
            {
				designation:"Student",
				profileImage:"/images/testimonials/Mohit_Panjwani.webp",
				// cardImage: "",
                altImage: "imageDescription",
                classForContent:"mb-4 breakWord h-[200px] md:h-[200px] lg:h-[200px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Mohit Panjwani",
				name:"Mohit Panjwani",
                content:`<p>I'm really excited and pleased to provide feedback on our Advanced and High level Software Development training program...</p>`+
                `<br /><p>The training program offers well all rounded curriculum that covers all essential parts and topics of software development, from basic concepts to advanced technologies. The training conducted under Mr Ashish Naik sir was very enthusiastic and helped me to achieve more confidence in this field despite of me being from a non technical field. The dedication, expertise and passion of Mr Ashish Naik sir towards the goal of our training program is very impressive, the interacting style was not only informative but also engaging, and the title of learn with fun made it more interesting. The training program was not only about learning software related technologies but also understanding industry standards mainly stress management. Overall the training was highly informative and beneficial and the dedication of Mr Ashish Naik sir towards our growth and development as individuals has been truly inspiring.</p>`,
            },
            {
				designation:"Student",
				profileImage:"/images/testimonials/Archana_Kadam.webp",
				// cardImage: "",
                altImage: "imageDescription",
                classForContent:"mb-4 breakWord h-[200px] md:h-[200px] lg:h-[200px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Archana Kadam",
				name:"Archana Kadam",
                content:`<p>I am very much delighted to share my experience on the training program provided in iAssureIT. It gives me immense pleasure to show my gratitude to the training that is been provided to me.</p>`+
                `<br /><p>From my personal experience, I can say there is a distinctive difference in the approach of carrying out the training program . Mr.Ashish Naik, our Mentor, has an innate quality to present the most intricate concept in a much simpler form.</p>`+
                `<br /><p>Mr.Naik is highly knowledgeable and experienced and always available to clarify any doubts or queries. The course structure is well organized, and the hands-on projects and assignments helped me gain practical skills. The course also provided valuable insights into the current trends and practices in the web development field. More emphasis is given on practice, which is the key to perform better. </p>`+
                `<br /><p>What stands out about this particular training program is it’s practical approach. Tackling onerous concepts shows Mr.Naik’s in-depth knowledge, which was very helpful for us all in the training program. Each passing day here has built our confidence not only in technical but also in our overall personality. He has influenced us all big time.</p>`+
                `<br /><p>I highly recommend this course for anybody who is looking to step into the field of Web Development. </p>`,
            },
            {
				designation:"Student",
				profileImage:"/images/testimonials/Aniket_Pawar.webp",
				// cardImage: "",
                altImage: "imageDescription",
                classForContent:"mb-4 breakWord h-[200px] md:h-[200px] lg:h-[200px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Aniket Pawar",
				name:"Aniket Pawar",
                content:`<p>I am feeling grateful to share my feedback on the Full Stack Development learning experience under our best and always enthusiastic mentor Mr. Ashish Naik which has been incredibly positive and wonderful.</p>`+ 
                `<br /><p>Ashish Sir's teaching methodology stands out for its unique "Learn with Fun" approach. This not only makes the learning process enjoyable but also enhances retention and understanding. His passion for the subject matter is evident, and his ability to communicate complex concepts in a clear and engaging manner contributes significantly to the overall quality of the training.</p>`+
                `<br /><p>One of the standout aspects of this training is the exposure to essential concepts of Full Stack Development that I haven't encountered in previous learning experiences. Ashish Sir's expertise and ability to delve into these topics in a comprehensive manner have expanded my understanding of web development significantly.</p>`+
                `<br /><p>The overall atmosphere during the training is positive and conducive to learning. The combination of interactive sessions, engaging discussions, and a supportive learning environment fosters a sense of community among participants. This, in turn, enhances the overall learning journey.</p>`,
            },
        ],
    };
	
    const content_TRAININGPROGRAM = {
        sectionCss: "md:py-5 lg:py-14  bg-offWhite",
        blockTitle:
        " <span  class='uppercase font-extrabold leading-relaxed' >WHY CHOOSE OUR TRAINING PROGRAM?</span>",
        classForblockTitle: "w-full text-center text-3xl md:text-3xl xl:text-4xl px-10 py-14",
        classForNoOfCards:
        "px-10 lg:px-32 2xl:px-48 max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-1 gap-x-4 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6",
        classForCards:
        " p-3 mb-7 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white",
        classForCardTitle:
        "text-center font-extrabold text-md md:text-md lg:text-lg",
        classForCardTitle_2:
        "font-bold text-md text-primary dark:text-primary-400 p-5",
        imgDivCss:"py-2",
        classForCardImage: "bg-white rounded-xs w-16 h-16 my-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mx-auto",
        classForblockContent:
        "text-lg md:text-xl text-center font-[500] px-2 md:px-12 lg:px-32 xl:px-64  2xl:w-2/5 2xl:px-2  mx-auto ",
        blockContent:
        "",
        bgImgCss:
        "relative bg-cover p-3 block   bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        // dash: "border-blue-700 mb-5 lg:mb-0 lg:-mt-12 ",
        cardsArray: [
            {
                cardImage: "/images/specific/Icons-2/1.webp",
                altImage: "imageDescription",
                cardTitle: "1. Comprehensive Curriculum",
                classForContent: "justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                content: "Our training program covers all facets of FullStack Development, including Web Technologies, ReactJS Framework, NodeJS, MongoDB, and more. Each course is meticulously designed to provide in-depth understanding and practical skills.",
            },
            {
                cardImage: "/images/specific/Icons-2/2.webp",
                altImage: "imageDescription",
                classForContent: "justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"2. Expert Mentorship",
                content:"With Mr. Ashish Naik at the helm, students benefit from personalized mentorship and guidance from an industry expert. Mr. Naik's extensive experience and practical insights enrich the learning experience, ensuring students are well-prepared for the challenges of the real world."
            },
            {
                cardImage: "/images/specific/Icons-2/3.webp",
                altImage: "imageDescription",
                classForContent:"justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"3. Cutting-edge Technologies",
                content:"Stay ahead of the curve with our focus on the latest technologies and frameworks. From HTML5 and CSS3 to advanced topics like AWS integration and Next.js, our curriculum is constantly updated to reflect industry trends.",
            },
            {
                cardImage: "/images/specific/Icons-2/4.webp",
                altImage: "imageDescription",
                classForContent:"justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"4. Hands-on Learning",
                content:"Our program emphasizes hands-on learning through practical projects, assignments, and real-world case studies. Students gain valuable experience by working on industry-relevant projects under the guidance of experienced mentors.",
            },
            {
                cardImage: "/images/specific/Icons-2/5.webp",
                altImage: "imageDescription",
                classForContent:"justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"5. Internship Opportunities",
                content:"Students who enroll in all four courses are eligible for a three-month internship at iAssure International Technologies Pvt Ltd, with the possibility of securing a full-time job based on performance. ",
            },
            {
                cardImage: "/images/specific/Icons-2/6.webp",
                altImage: "imageDescription",
                classForContent:"justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"6. Job Assistance",
                content:"We provide 100% job assistance to our students, equipping them with the skills and confidence to ace interviews and secure lucrative positions in top IT companies.",
            },
            {
                cardImage: "/images/specific/Icons-2/7.webp",
                altImage: "imageDescription",
                classForContent:"justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"7. Flexible Learning Options",
                content:"Whether you're a beginner or an experienced developer looking to upskill, our program caters to individuals at all levels. Choose from flexible payment options and customize your learning journey based on your goals and schedule.",
            },
            {
                cardImage: "/images/specific/Icons-2/8.webp",
                altImage: "imageDescription",
                classForContent:"justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"8. Community and Networking",
                content:"Join a vibrant community of like-minded individuals, network with industry professionals, and participate in workshops, seminars, and networking events to broaden your horizons and foster professional growth.",
            }
        ],
    };
	
    const content_ExclusiveBenefits={
        sectionCss: "md:my-5 lg:my-0 md:my-5 lg:my-14 px-10 lg:px-32 2xl:px-48 max-w-8xl",
        blockTitle:" <span  class='uppercase font-extrabold leading-relaxed' >EXCLUSIVE BENEFITS</span>",
        classForblockTitle: "w-full text-center text-3xl md:text-3xl xl:text-4xl my-10",
        classForNoOfCards:"",
        classForCards: "",
        classForCardTitle:
        "text-center font-extrabold text-md md:text-md lg:text-lg",
        classForCardTitle_2:
        "font-bold text-md text-primary dark:text-primary-400 p-5",
        imgDivCss:"py-2",
        classForCardImage: "bg-white rounded-xs w-16 h-16 my-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mx-auto",
        classForblockContent:
        "text-lg md:text-xl text-left font-[500] 2xl:w-2/5 mx-auto ",
        blockContent:`<div class="flex"><i class="fa-solid fa-angles-right text-orangeColor m-1"></i><div><span class="font-extrabold">Customizable Learning:</span> Choose any one or two, or three, or all four courses based on your interests and
        career goals.</div></div>`+
        `<br /><div class="flex"><i class="fa-solid fa-angles-right text-orangeColor m-1"></i><div><span class="font-extrabold">Internship Opportunity:</span> Enroll in all four courses and gain access to a three-month internship at iAssure
        International Technologies Pvt Ltd. Perform well in this internship and you could secure a full-time position
        in this company.</div></div>`+
        `<br /><div class="flex"><i class="fa-solid fa-angles-right text-orangeColor m-1"></i><div><span class="font-extrabold">100% Job Assistance:</span> Gain expertise in cracking IT company interviews and receive 100% job assistance,
        ensuring your seamless transition into the workforce.</div></div>`+
        `<br /><div class="flex">Don't miss out on this opportunity to unlock your FullStack potential at an unbeatable value. Enroll today
        and take the first step towards a rewarding career in the ever-evolving world of technology.</div>`,
        bgImgCss:
        "relative bg-cover p-3 block   bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        // dash: "border-blue-700 mb-5 lg:mb-0 lg:-mt-12 ",
        cardsArray: [],
    };  
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
		<main className="flex flex-col justify-between min-h-screen bg-white font-TerminaTest">

			<BgImgLeftContentRtImg inputData={content_Banner} />

			<BgImgRightContent inputData={content_Block2} />

			<CenterContentRepeatableBlocks
				inputData={content_Courses}
			/>  
			
			<BgImgLeftContentRtImg inputData={content_UnlockP} />

			<LeftImgRightRepeatableBlk
				inputData={content_About}
				readMore={false}
			/>
			<BgImgRightContent inputData={content_VisionBlock} />

			<BgImgLeftContentRtImg inputData={content_CET} /> 

			<CenterContentRepeatableBlocks inputData={content_ExclusiveBenefits} />

			<CenterContentRepeatableBlocks inputData={content_TRAININGPROGRAM} />

			<BgImgLeftContentRtImg inputData={content_JTCD} />

			<CenterContentRepeatableBlocks inputData={content_Testimonials} />
				
			<SmallBanner inputData={content_SmallBanner2} />
			
			<AccordionBlock inputData={accordionData} />
		
		</main>
	);
}


export default HomePage;