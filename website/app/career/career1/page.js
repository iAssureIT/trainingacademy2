"use client";
import React, { useEffect, useState } from "react"
import BgImgLeftContentRtImg from "@/templates/ContentBlocks/BgImgLeftContent/BgImgLeftContentRtImg";
import SearchCmp from "@/components/SearchComp/Search.jsx";
import BgImgRightContent from "@/templates/ContentBlocks/BgImgRightContent/BgImgRightContent";
import CenterContentRepeatableBlocks from "@/templates/RepeatableBlocks/CenterContentRepeatableBlocks/CenterContentRepeatableBlocks";
import Gallery from "@/templates/Gallery/Gallery"
import Map from "@/widgets/Contact-Us/ContactDetails/Map";
import Carousel from '@/templates/Carousel/AllTypeCarousel/Carousel';
import JobListComponent from "@/components/Job/JobListComponent";
// import Carousel from "@/components/youtubeVideoCarousel/carousel"
    import YoutubeVideoShowcase from "@/templates/Carousel/YoutubeVideo/YoutubeVideoShowcase";
    import CustomHead from "@/templates/CustomHead/CustomHead";
    
    export default function Career1({data}) {

    const content_Banner = {
        id: "careerPageBanner",
        bgImage: "/images/specific/Career/Images/2.webp",
        smallBGImage: "/images/specific/Career/Responsive-Images/iAssureIT-Career-1.webp",
        logo: "",
        h1Txt: "<h1>CAREER @ <br/>iAssureIT</h1>",
        h1TxtCss: " text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-8xl font-extrabold text-center md:text-left place-content-left justify-center content-left 2xl:!leading-[8rem] ",
        // hTxtLine1: "APPLICATIONS FOR BFSI ",
        // h1TxtLine1Css: " outline-title font-DrukText text-4xl md:text-5xl lg:text-4xl xl:text-6xl 2xl:text-6xl text-left md:text-left place-content-left justify-center content-left md:mb-5 font-[500] ",
        // h1TxtLine2: "Revolutionize Your Business With Scalable App Solutions",
        // h1TxtLine2Css: "font-DrukText lcamelcase text-normal text-left md:text-left text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-4xl md:!leading-[3.1rem] bg-white text-darkGray mx-auto px-auto px-1 inline-block mb-5 mt-3 text-btnBlue",
        bgImgCss: " py-20 h-auto xl:h-auto md:py-32 xl:py-48 2xl:py-32 lazyload object-fit bg-cover bg-no-repeat relative lg:bg-[image:var(--largeImage-url)] bg-[image:var(--smallImage-url)] ",
        para: "We are creating digital experiences",
        paraCss: " lcamelcase text-normal text-center md:text-left text-sm md:text-3xl lg:text-2xl xl:text-2xl 2xl:text-4xl md:!leading-[2.3rem]",
        // gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:grid-cols-2 lg:h-screen xl:h-screen h-screen ",
        gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:grid-cols-2 py-10 md:py-20 lg:py-10 xl:py-0 2xl:py-20 h-auto md:h-full lg:h-full xl:h-full 2xl:h-full ",
        gridSubDivCss: " pb-32 md:pb-10 lg:pb-16 2xl:pb-48 my-auto text-white px-10 md:pl-16 lg:pl-10 xl:pl-12 2xl:pl-24",
        image: "/images/specific/Career/Images/3.webp",
        imageCss: ' w-2/3 xl:w-4/5 2xl:4/5 mx-auto my-auto object-fit lazyload place-content-center object-center ',
        imgTagcss: "lazyload -mt-20 lg:mt-5 2xl:-mt-44 ",
        borderColor: "border-darkBlue",
        // url: "/contact-us/#contactDetails",
        // urlName: "Let's Talk!",
        // linkCss: " w-fit text-btnBlue text-center font-bold text-lg md:text-xl lg:text-sm xl:text-lg 2xl:text-xl py-2 px-10 2xl:px-6 mt-3 lg:mt-10 border rounded btn bg-offWhite hover:bg-offWhite hover:text-black",
        // linkIconCss: "hidden",
        // compId:"contactDetails",

    }
    const content_SearchBlk = {
        blockTitle:
            " <span class='block md:inline'>Let<span class=' font-extrabold leading-relaxed' > iAssureIT</span></span><span class=''> be part of your journey</span>",
        classForblockTitle: "w-full text-center text-2xl md:text-3xl xl:text-4xl mb-5 md:mb-0 ",

    }
    const content_JobList = {
        sectionCss: "md:my-5 lg:my-0 ",
        blockTitle:
            "Let<span class=' font-extrabold leading-relaxed' > iAssureIT</span> be part of your journey <br/> <span class=' font-extrabold leading-relaxed' >Current Opening’s</span>",
        classForblockTitle: "w-full text-center text-2xl md:text-3xl xl:text-4xl mb-5 md:mb-0 ",
        classForNoOfCards:
            "px-10 lg:px-20 xl:px-32 2xl:px-48 mt-10 md:mt-12 max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6",
        imgDivCss: "py-0",
        
      
    };
    const content_WhyJoiniAssureIT = {
        sectionCss: "md:my-5 lg:my-0 ",
        blockTitle:
            " WHY JOIN<span class=' font-extrabold leading-relaxed' > iAssureIT</span> ",
        classForblockTitle: "w-full text-center text-2xl md:text-3xl xl:text-4xl mb-5 md:mb-0 ",
        classForNoOfCards:
            "px-10 lg:px-20 xl:px-32 2xl:px-48 mt-10 md:mt-12 max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6",
        imgDivCss: "py-0",
        classForCards:
            " p-5 mb-7 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]",
        classForCardTitle:
            "text-left font-bold text-lg md:text-xl lg:text-xl xl:text-2xl !px-0 pt-6 pb-3",
        classForCardTitle_2:
            "font-bold text-md text-primary dark:text-primary-400 p-5",
        classForCardImage: "w-full ",
        classForblockContent:
            "text-lg md:text-xl text-center font-[500] px-2 md:px-12 lg:px-32 xl:px-64 2xl:w-2/5 2xl:px-2 mx-auto ",
        // blockContent:
        // "We elevate businesses with our quest to innovation and expertise with tech advancement as per BFSI industry requisites.",
        bgImgCss:
            "relative bg-cover p-3 block bg-no-repeat max-w-full sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)] bg-[image:var(--smallImage-url)] ",
        dash: "border-blue-700 mb-5 mt-10 ",
        linkIcon: "true",
        linkIconCss: "ml-2 fa-solid fa-angle-double-right",
        cardsArray: [
            {
                cardImage: "/images/specific/Career/Images/4.webp",
                altImage: "imageDescription",
                cardTitle: "Innovations",
                classForContent:
                    "justify-content h-auto md:h-32 lg:h-36 overflow-y-scroll text-left my-auto text-md lg:text-lg font-[500]  !leading-[1.50rem] ",
                content:
                    " Our iAssure Research Labs is a hub of innovation, encouraging out-of-the-box thinking and groundbreaking solutions.<br/> Engaging in cutting-edge projects, you’ll be at the forefront of technological advancements, contributing to a future filled with possibilities.<br/>Join us at iAssureIT, and be a part of a progressive ecosystem where your contributions are valued, your growth envisioned, and your innovative spirit celebrated.",
                // urlName: "Read More",
                url: "",
                linkCss: "font-medium text-sm text-white bg-blue-700 rounded w-auto px-3 py-2 float-left",
            },
            {
                cardImage: "/images/specific/Career/Images/5.webp",
                altImage: "imageDescription",
                cardTitle: "Growth Trajectory",
                classForContent:
                    "justify-content h-auto md:h-32 lg:h-36 overflow-y-scroll text-left my-auto text-md lg:text-lg  font-[500] !leading-[1.50rem] ",
                content:
                    "We provide a clear and ambitious career map, outlining the vision for your next 25 years and beyond.<br/> Here, every role demands a sense of ownership and accountability, propelling you towards a fulfilling career growth.",
                // urlName: "Read More",
                url: "",
                linkCss: "font-medium text-sm text-white bg-blue-700 rounded w-auto px-3 py-2 float-left",
            },
            {
                cardImage: "/images/specific/Career/Images/6.webp",
                altImage: "imageDescription",
                cardTitle: "Freedom & Flexibility",
                classForContent:
                    "justify-content h-auto md:h-32 lg:h-36 overflow-y-scroll text-left my-auto text-md lg:text-lg  font-[500] !leading-[1.50rem] ",
                content: "At iAssureIT, we entrust our employees with the freedom to co-create the holiday list and spearhead fun events, cultivating a sense of ownership and camaraderie.",
                // urlName: "Read More",
                url: "",
                linkCss: "font-medium text-sm text-white bg-blue-700 rounded w-auto px-3 py-2 float-left",
            },
            {
                cardImage: "/images/specific/Career/Images/7.webp",
                altImage: "imageDescription",
                cardTitle: "Employee-Centric Environment",
                classForContent:
                    "justify-content h-auto md:h-32 lg:h-36 overflow-y-scroll text-left my-auto text-md lg:text-lg  font-[500] !leading-[1.50rem] ",
                content: "Our workplace ethos places a significant emphasis on fostering a positive work culture and ensuring employee well-being. <br/> We champion an employee-friendly environment where each individual is valued and supported.",
                // urlName: "Read More",
                url: "",
                linkCss: "font-medium text-sm text-white bg-blue-700 rounded w-auto px-3 py-2 float-left",
            },
            {
                cardImage: "/images/specific/Career/Images/8.webp",
                altImage: "imageDescription",
                cardTitle: "Continuous Learning",
                classForContent:
                    "justify-content h-auto  md:h-32 lg:h-36 overflow-y-scroll text-left my-auto text-md lg:text-lg  font-[500] !leading-[1.50rem] ",
                content: "Master a spectrum of skills and build lasting industry connections.<br/> Enhance not just technical acumen but also soft skills, management techniques, client engagement strategies, and communication skills.<br/> Dive into intriguing tech domains like climate change mitigation, seed banking, mobile food services, and cloud rendering for cinematic projects.",
                // urlName: "Read More",
                url: "",
                linkCss: "font-medium text-sm text-white bg-blue-700 rounded w-auto px-3 py-2 float-left",
            },
            {
                cardImage: "/images/specific/Career/Images/9.webp",
                altImage: "imageDescription",
                cardTitle: "Exceptional Benefits",
                classForContent:
                    "justify-content h-auto md:h-32 lg:h-36 overflow-y-scroll text-left my-auto text-md lg:text-lg  font-[500] !leading-[1.50rem] ",
                content: "Ample time-off, holidays, and sick leaves.<br/> Parental leave to celebrate the new addition to your family.<br/> Reimbursements for internet, gym, wellness, health insurance, and mental health services.",
                // urlName: "Read More",
                url: "",
                linkCss: "font-medium text-sm text-white bg-blue-700 rounded w-auto px-3 py-2 float-left",
            },
        ],
    };
    const content_passionCareerBlk = {
        id: "developerBlk",
        paraTitle:
            "<span class='text-white font-bold '> Join us at iAssureIT, and be a part of a progressive ecosystem where your contributions are valued, your growth envisioned, and your innovative spirit celebrated.</span>",
        paraTitleClass: "title text-left font-normal text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl xxl:!text-3xl leading-tight md:pl-10",
        bgImage: "/images/specific/Career/Images/18.webp",
        smallBGImage: "/images/specific/Career/Responsive-Images/iAssureIT-Career-23.webp",
        bgImgCss: "lazyload",

        gridColCss:
            "md:col-span-2 my-auto py-20 md:py-28 ",
        // gridCol1Css: "w-1/2 mx-auto",
        gridClass:
            "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 place-content-center md:grid-cols-2 lg:h-full xl:h-full h-full content-center px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-40 xxl:!px-48",
        bannerClass:
            "object-fit pb-3 2xl:pb-5 bg-cover bg-no-repeat relative w-full lg:bg-[image:var(--largeImage-url)] bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/Career/Images/10.webp",
        imageCss:
            "mx-auto sm:object-fit my-auto content-center place-content-center lazyload",
        imgTagcss: "mx-auto lazyload",
        // url: "/contact-us/#contactDetails",
        // urlName: "Join Us",
        // linkCss: "md:ml-10 float-left text-btnBlue text-center font-bold text-lg md:text-lg lg:text-xl p-2  2xl:px-2  mt-3 xl:mt-8 2xl:mt-10 border w-1/2 md:w-1/3  lg:w-1/4 xl:w-1/4 2xl:w-1/4 rounded btn bg-offWhite hover:bg-blue-800 hover:text-white",

    };
    const content_carousel2 = {
        sectionCss: "relative px-12 md:px-20 mb-5 text-center xl:px-20 max-w-8xl justify-evenly",
        pageTitle: " WHAT<span class=' font-extrabold leading-relaxed' > iAssureIT DO</span> ",
        pageTitleCss: "w-full text-center text-2xl md:text-3xl xl:text-4xl mb-5 md:mb-10 ",
        txtBlkCss: "w-1/2 lg:w-1/3 object-cover bg-blue-300 gap-10 p-4 slide rounded-lg cursor-pointer",
        dash: "border-blue-700  mt-5 md:mb-5",
        CarouselCss: "slides-container whitespace-nowrap scrollbar-hide lg:h-72 h-32 flex snap-x snap-mandatory overflow-hidden  space-x-2 rounded scroll-smooth before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0 md:mx-20",
        videos: [
            "UmAlBXlzRMA",
            "jo0LmGzk8Mo",
            // "/images/videos/iAssureIT-Website-banner.mp4",
            // "/images/videos/BFSI.mp4",
            // "/images/videos/Scalable-application.mp4",
            // "https://youtu.be/jo0LmGzk8Mo?si=x-N740o_umPS-9Uf"
        ],
    }
    const content_youtubeCarousel={
        pageTitle: " WHAT<span class=' font-extrabold leading-relaxed' > iAssureIT DO</span> ",
        pageTitleCss: "w-full text-center text-2xl md:text-3xl xl:text-4xl mb-5 md:mb-10 ",
        txtBlkCss: "w-1/2 lg:w-1/3 object-cover bg-blue-300 gap-10 p-4 slide rounded-lg cursor-pointer",
        dash: "border-blue-700  mt-5 md:mb-5",
    }
    const content_GrowBlk = {
        id: "GrowBlk",
        bgImage: "/images/specific/Career/Images/20.webp",
        smallBGImage: "/images/specific/Career/Responsive-Images/iAssureIT-Career-16.webp",
        logo: "",
        h1Txt: "<div class='flex md:mb-5'><div class='dash1'> </div><div class='dash2'></div> <div class='dash3'></div></div><span class='font-extrabold mt-10'>Level Up Your Career</span>",
        h1TxtCss: " text-white w-full text-left BlockTitle md:mb-5",

        para: "Join a cadre of intelligent and enthusiastic teammates while diving into cutting-edge technologies across exciting sectors.",
        bgImgCss:
            "lazyload object-fit py-36 mb-20 2xl:mb-32 bg-cover bg-no-repeat relative w-full lg:bg-[image:var(--largeImage-url)] bg-[image:var(--smallImage-url)] ",
        logoCss: "lazyload justify-left align-left mb-5 ",
        paraCss:
            "text-lg sm:text-lg md:text-xl lg:text-xl text-left  font-semibold",
        gridCss:
            "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:h-full xl:h-full h-full content-center px-5 md:px-10 lg:px-20 xl:px-20 2xl:px-20 xxl:!px-32 gap-20",
        gridSubDivCss:
            " lg:mt-12 mx-auto text-white ",
        // image: "/images/specific/Home/FastTrack_Framework/1.webp",
        // imageCss: " py-32 md:py-20 object-fit lazyload",
        // imgTagcss: "mx-auto lazyload",
        // url: "/contact-us/#contactDetails",
        // urlName: "Read More",
        // linkCss: "text-left font-semibold text-lg md:text-xl lg:text-sm xl:text-xl 2xl:text-xl py-2 px-10 lg:px-0 mt-3 lg:mt-4 underline hover:text-gray-300",
        // linkIconCss: "",
        borderColor: "border-darkBlue",
        videoUrl: "/images/videos/BFSI.mp4",
        videoClass: " rounded-xl lg:mt-44 xxl:!mt-32",
        videoDivCss:"lg:absolute lg:top-6 lg:right-10 xl:right-10 lg:w-1/2 xl:w-1/2 xxl:!w-2/5 xxl:h-96 "
    }
    const content_Gallery = {
        blockTitle:
            " LIFE AT<span class=' font-extrabold leading-relaxed' > iAssureIT</span> ",
        classForblockTitle: "w-full text-center text-3xl md:text-3xl xl:text-4xl mb-5 md:mb-0 ",
        dash: "border-blue-700 mb-5 md:mt-10",
        gridDivCss: "grid md:grid-cols-2 px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-40 xxl:!px-72 gap-10 2xl:gap-y-6 2xl:gap-x-6 mt-10 mb-20",
        imgCss: "p-6 2xl:p-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-full rounded-xl ",
        textCss: "absolute bottom-10 text-left pl-10 mx-auto w-full text-white font-extrabold text-lg md:text-2xl",
        gallery_data: [
            { imgUrl: "/images/specific/Career/Images/21.webp", title: "OUR PEOPLE" },
            { imgUrl: "/images/specific/Career/Images/22.webp", title: "OUR SOCIAL IMPACT" },
            { imgUrl: "/images/specific/Career/Images/23.webp", title: "FOUNDATION DAY’S" },
            { imgUrl: "/images/specific/Career/Images/24.webp", title: "BIRTHDAY FUNCTIONS" },
        ]
    }

    return (
        <div>
            <CustomHead
                title={data?data.metaTagTitle:""}
                description={data?data.metaDescription:""}
                keywords={data?data.keywords:""}
                canonicalUrl={data?data.canonicalUrl:""}
            />
            <BgImgLeftContentRtImg inputData={content_Banner} />
            {/* <SearchCmp inputData={content_SearchBlk} /> */}
            <JobListComponent inputData={content_JobList} />
            {/* <button className=" w-full mb-10">
                <div class=" text-white mx-auto text-center font-bold text-lg md:text-xl p-2  2xl:px-2  mt-3 xl:mt-8 2xl:mt-10 border w-48 md:w-52  lg:w-64 xl:w-52 2xl:w-52 rounded btn bg-blue-600 hover:bg-blue-800 hover:text-white"><a href="/career/career2">Open Positions</a>
                    <i class="fa-solid fa-angle-double-right ml-2"></i>
                </div>
            </button> */}
            <CenterContentRepeatableBlocks
                inputData={content_WhyJoiniAssureIT}
            />
            <BgImgRightContent inputData={content_passionCareerBlk} />
            {/* <Carousel inputData={content_carousel2} showVideos={true} showImages={false} /> */}
            <YoutubeVideoShowcase inputData={content_youtubeCarousel}/>
            <BgImgLeftContentRtImg inputData={content_GrowBlk} />
            <Gallery inputData={content_Gallery} />
            <Map
                dash="border-blue-700 mb-5 md:mb-3"
                pageTitle="OUR <span class='uppercase font-extrabold leading-relaxed' > LOCATIONS</span>"
                pageTitleCss=" mb-12 text-black w-full text-center text-3xl md:text-3xl lg:text-4xl xl:text-4xl"

                mapCss="h-96 xl:px-32 2xl:px-40 xxl:!px-72 rounded-xl"
                locationPath="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.6527976967045!2d73.90869827574598!3d18.54458568255369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c220a4234a03%3A0xaacdd60fadf55f2c!2siAssure%20International%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1696849231056!5m2!1sen!2sin"
            />
        </div>
    )
}


Career1.getInitialProps = async () => {
    // Perform data fetching here (e.g., making API requests)
    var url ='/career/career1'
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







