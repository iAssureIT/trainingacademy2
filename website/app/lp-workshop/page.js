import React from "react";

import BgImgLeftVideoRghtGrid from "@/templates/ContentBlocks/BgImgLeftVideoRightGrid/BgImgLeftVideoRghtGrid";
import LeftImgRightRepeatableBlk from "@/templates/RepeatableBlocks/LeftImgRightRepeatableBlk/LeftImgRightRepeatableBlk";
const landingPage = () => {
    const content_VideoWithGrid = {
        id: "landingPageBanner",
        bgImage: "/images/specific/LandingPage/Website/iAssureIT-landing-page-1.webp",
        smallBGImage: "/images/specific/LandingPage/Responsive/iAssureIT-landing-page-responsive-1.webp",
        bgImgCss: " bg-blue-100 py-20 h-auto   2xl:py-10 lazyload object-fit bg-cover bg-no-repeat relative  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2   md:grid-cols-2   lg:py-10 xl:py-0 2xl:py-10 h-auto md:h-full lg:h-full   xl:h-full 2xl:h-full px-2 md:px-10 gap-x-10 gap-y-4",
        gridSubDivCss: "  grid grid-cols-2 gap-3 sm:gap-2 md:gap-6 lg:gap-5 xl:gap-10 my-auto ",
        videoUrl:"/images/videos/Scalable-application.mp4",
        imgUrl: "/images/specific/Home/HomeVideoImg.webp",
        gridBlockTitle1Css:"font-extrabold text-lg ",
        gridBlockTitle2Css:"font-medium",
        cardsArray: [
            {
                gridBlockTitle1: "Date",
                gridBlockTitle2: "Sunday",
                gridBlockTitle3: "17th Mar 2024",
            },
            {
                gridBlockTitle1: "Time",
                gridBlockTitle2: "",
                gridBlockTitle3: "4:00PM to 7:00PM",
            },
            {
                gridBlockTitle1: "Date",
                gridBlockTitle2: "Sunday",
                gridBlockTitle3: "17th Mar 2024",
            },
            {
                gridBlockTitle1: "Time",
                gridBlockTitle2: "",
                gridBlockTitle3: "4:00PM to 7:00PM",
            },
        ],
        modalDisplay: "true",
		modalUrlName: "Secure Your Seat Now",
		modalBtnCss: "w-fit place-content-center justify-center mx-auto text-white text-center font-bold text-sm 2xl:text-lg py-2 px-5 md:px-5  2xl:px-10    mt-10 lg:mt-10 border  rounded btn bg-red-500 hover:bg-blue-500  cursor-pointer",
		
       }
       const content_About = {
		id: "about",
		sectionClass:
			"pt-20 pb-20 md:pt-10 md:pb-10 lazyload object-fit bg-cover bg-no-repeat relative bg-offWhite   lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] pl-2 md:pl-2 lg:pl-10 xl:pl-16 2xl:pl-16 xxl:!pl-24",
		pageTitle:
			"<span class=' font-extrabold'>Meet your coach - Mr Ashish Naik:</span>  ",
		pageTitleCss: "w-full text-center   BlockTitle mb-10 md:mb-5 2xl:mb-2 leading-relaxed",
		blockSubTitle:
			"<span class='px-2 md:px-10 '> At our training program, we pride ourselves on being the leading destination for individuals aspiring to excel in FullStack Development. Led by the esteemed mentor, Mr. Ashish Naik, a seasoned professional with over 25 years of experience in the IT industry, our program stands as a beacon of excellence, offering unparalleled expertise and guidance to our students.</span> <br/><span class='my-4 md:my-5 w-full text-left font-extrabold  uppercase  BlockTitle float-left leading-tight'>Ashish Naik’s Career <br/> Highlights:</span>",
		classForblockSubTitle:
			"text-lg md:text-sm lg:text-lg text-center font-normal   mx-auto    -mt-10 md:mt-0",
		bgImage:
			"/images/specific/trainingAcademy/iAssureIT-training-14.webp",
		bgImageCss: "  object-cover  lg:-mb-40 xl:mb-auto 2xl:-mt-32  xxl:!w-3/4 h-full ",
		bigImageAlt: "iAssureIT-infra",
		gridCss: "grid grid-cols-1 lg:grid-cols-2 float-right lg:float-left px-3",
		gridCol1Css: "order-first lg:order-last  w-full h-auto relative my-auto ",
		repeatedBlkCss: " shadow-none flex items-start sm:h-36 md:h-auto my-10 lg:my-4 2xl:my-5  border-b  border-black	leading-tight ",
		imgCss:
			"flex-none   items-start rounded mr-3 md:mr-10 object-cover shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
		titleCss: " text-lg md:text-lg lg:text-[14px] xl:text-[16px] 2xl:text-lg overflow-hidden mb-3 xl:mb-5",
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
	};
    return (
        <main className="flex flex-col justify-between min-h-screen bg-white font-TerminaTest">
            <LeftImgRightRepeatableBlk
        inputData={content_About}
        readMore={false}
    />
            <BgImgLeftVideoRghtGrid inputData={content_VideoWithGrid}/>
            
        </main>
    )
}

export default landingPage;