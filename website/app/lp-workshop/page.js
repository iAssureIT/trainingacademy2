import React from "react";

import BgImgLeftVideoRghtGrid from "@/templates/ContentBlocks/BgImgLeftVideoRightGrid/BgImgLeftVideoRghtGrid";
import LeftImgRightRepeatableBlk from "@/templates/RepeatableBlocks/LeftImgRightRepeatableBlk/LeftImgRightRepeatableBlk";
import AccordionBlock from '@/templates/Accordion/AccordionBlock.js';
import Technology from "@/templates/ContentBlocks/Technology/Technology";
import BgImgLeftContentRtImg from "@/templates/ContentBlocks/BgImgLeftContent/BgImgLeftContentRtImg";
import CenterContentRepeatableBlocks from "@/templates/RepeatableBlocks/CenterContentRepeatableBlocks/CenterContentRepeatableBlocks";

const landingPage = () => {
    const content_FirstBlock = {
		id: "Banner_Block",
		h1Txt:
			"<span class='text-2xl lg:text-4xl'>India’s the most Powerful & the most appreciated 3 Hours LIVE Workshop</span><br/><br/><br/><br class='hidden lg:block'/><span class='font-bold text-3xl lg:text-5xl'>HOW TO GET ENTRY & HIGH SALARY JOB IN IT INDUSTRY?</span><br/><br/><br/><br class='hidden lg:block'/><span class='text-2xl lg:text-4xl'>Only for IT Industry Aspirants. Don’t miss this workshop if you want to make a great career in IT Industry</span>",
		bgImgCss:
			"lazyload z-0 object-fit bg-skyBlue bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
		h1TxtCss: "mt-10 md:mt-0 3xl:mt-20 text-center",
		gridCss:
            "grid place-content-center h-full content-center py-10",
        gridSubDivCss:"text-white my-auto text-center xs:text-left px-10 py-5",
		
    };
    const content_VideoWithGrid = {
        id: "landingPageBanner",
        bgImage: "",
        smallBGImage: "",
        bgImgCss: " bg-offWhite py-10 h-auto   2xl:py-10 lazyload object-fit bg-cover bg-no-repeat relative  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2   md:grid-cols-2   lg:py-10 xl:py-0 2xl:py-10 h-auto md:h-full lg:h-full   xl:h-full 2xl:h-full px-2 md:px-10 gap-x-10 gap-y-4",
        gridSubDivCss: "  grid grid-cols-2 gap-3 sm:gap-2 md:gap-6 lg:gap-5 xl:gap-10 my-auto ",
        videoUrl: "/images/videos/WorkShop_video.mp4",
        // imgUrl: "/images/specific/Home/HomeVideoImg.webp",
        gridBlockTitle1Css: "font-extrabold text-lg ",
        gridBlockTitle2Css: "font-medium",
        cardsArray: [
            {
                gridBlockTitle1: "DATE",
                gridBlockTitle2: "17th Mar 2024",
                gridBlockTitle3: "(Sunday)",
            },
            {
                gridBlockTitle1: "TIME",
                gridBlockTitle2: "",
                gridBlockTitle3: "4:00PM to 7:00PM",
            },
            {
                gridBlockTitle1: "LIVE",
                gridBlockTitle2: "",
                gridBlockTitle3: "3 Hours of Workshop",
            },
            {
                gridBlockTitle1: "LANGUAGE",
                gridBlockTitle2: "",
                gridBlockTitle3: "English/Hindi",
            },
        ],
        modalDisplay: "true",
        modalUrlName: "Secure Your Seat Now",
        modalBtnCss: "w-fit place-content-center justify-center mx-auto text-white text-center font-bold text-lg xl:text-xl 2xl:text-lg py-2 px-5 md:px-5  2xl:px-10    mt-10 lg:mt-10 border  rounded btn bg-red-600 hover:bg-blue-500  cursor-pointer",

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
            "text-lg md:text-sm lg:text-lg text-center font-normal   mx-auto    -mt-10 md:mt-0 px-3 md:px-auto",
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
    const content_Block2 = {
		id: "Block2",
		h1Txt:
			"<span class='font-bold text-3xl mx-auto'>Who should attend this Workshop?</span><hr class='w-1/5 mx-auto border-blue-400 border'/><br/><br/><ul class='list-disc text-left text-2xl'><li>Engineering Graduates – BE / BTECH / ME / MTECH</li><li>Any Engineering Streams – IT / Comp Sc / Mechanical / Production / Electionics / Electrical / Civil / Chemical etc</li><li>Science Graduates – BSC / BCA / MSC / MCA </li><li>Anyone who wants to enter into IT Industry from other industries</li></ul><br/>",
		bgImgCss:
			"lazyload z-0 py-5 lg:py-10 object-fit text-white bg-skyBlue bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
		h1TxtCss: "mt-10 md:mt-0 3xl:mt-20",
		gridCss:
            "grid",
        gridSubDivCss:"mx-2 lg:mx-14 my-auto text-center xs:text-left px-10 py-5",
		// modalId: "UnlockPModal",
		secureModalDisplay: "true",
		secureModalUrlName: "Secure Your Seat Now",
		modalBtnCss: "w-fit place-content-center justify-center mx-auto text-white text-center font-bold text-lg xl:text-xl 2xl:text-lg py-2 px-8 lg:px-12 mt-5 lg:mt-10 btn bg-red-600 hover:bg-blue-500  cursor-pointer",

    };

    const accordionData = {
        accordianThemeColor: "bg-orangeColor",
        pageTitle: "FAQ",
        isFAQ: true,
        titleDescription: "Frequently Asked Questions (FAQs) for Fullstack, ReactJS & NodeJS Training Program",
        accordionData: [
            {
                title: "1. What will I learn about the technologies in demand during this workshop?",
                content: "The workshop covers insights into high-demand technologies, including popular frontend frameworks like React.js, backend programming languages such as Node.js, and widely-used databases like MongoDB."
            },
            {
                title: "2. Can you provide details on the roadmap to high salary jobs in the IT industry?",
                content: "Absolutely. The workshop includes a comprehensive roadmap, guiding participants from entry-level positions to high-paying roles like Cloud Solutions Architect and AI Engineer."
            },
            {
                title: "3. Which positions command the highest salaries in the IT industry, and how will the workshop help me reach there?",
                content: "The workshop focuses on roles like Data Scientist, providing participants with the skills and knowledge needed to excel in these high-salary positions."
            },
            {
                title: "4. How does the workshop address high volume job roles in IT?",
                content: "High-volume job roles, such as Full Stack Developer and DevOps Engineer, are covered extensively, offering participants the skills required for success in these versatile positions."
            },
            {
                title: "5. Will the workshop help me avoid common resume mistakes and create an impressive resume?",
                content: "Yes, the workshop delves into the secrets of creating an impressive resume, including common mistakes to avoid and techniques to make your resume stand out to potential employers."
            },
            {
                title: "6. What specific guidance does the workshop provide on formatting resumes?",
                content: "The workshop offers insights into professional resume formatting, ensuring participants can present their achievements and skills in a compelling and organized manner."
            },
            {
                title: "7. How does the workshop guide participants in making their resumes truly impressive?",
                content: "Participants will learn to highlight measurable achievements, relevant skills, and tailor their resumes to specific job requirements, making them stand out in the competitive job market."
            },
            {
                title: "8. What strategies will the workshop cover to help participants crack interviews on their first attempt?",
                content: "The workshop covers interview etiquette, depth and breadth of knowledge showcase, and the 'Brahmastra' – adaptability – to empower participants for successful interviews from the outset."
            },
            {
                title: "9. What does the 'Brahmastra' concept mean in the context of sealing the deal during interviews?",
                content: "The 'Brahmastra' signifies showcasing adaptability and a continuous learning mindset, illustrating readiness to evolve with industry trends and excel in the chosen role."
            }
        ],
        titleDescription_2: "Have more questions? Feel free to reach out to us! We're here to help you embark on your journey to becoming a successful Fullstack Developer.",
        modalDisplay: "true",
        modalUrlName: "Secure Your Seat Now",
        modalBtnCss: "w-fit place-content-center justify-center mx-auto text-white text-center font-bold text-lg xl:text-xl 2xl:text-lg py-2 px-5 md:px-5  2xl:px-10    mt-10 lg:mt-10 border  rounded btn bg-red-600 hover:bg-blue-500  cursor-pointer",

    
    }
    const content_Learn = {
        sectionCss: "bg-skyBlue",
        blockTitle: "<span class='font-extrabold uppercase text-white'>WHAT YOU WILL LEARN?</span>",
        // blockSubTitle: "<span class='font-extrabold'>Unlock Your FullStack Potential: Affordable Fees, Boundless Opportunities</span>",
        // classForblockSubTitle: "lg:w-3/4 xl:w-4/5 2xl:w-4/5  mx-auto text-center font-bold text-darkGray mb-10 bodyTxt",
        // classForblockDescription: "lg:w-3/4 xl:w-4/5 2xl:w-4/5  mx-auto text-center font-normal text-darkGray mb-10 bodyTxt my-5",
        // blockDescription: "<span>Embark on your FullStack journey with our comprehensive courses designed to elevate your skills and propel your career to new heights. With flexible payment options and exclusive discounts, investing in your future has never been more accessible</span>" +
        // 	"<br /><span class='font-bold'>Course Fees Breakdown</span>",
        classForblockTitle: "w-full text-center BlockTitle xl:py-10 py-10 md:py-10  leading-tight",
        classForNoOfCards: "px-10 pb-0 md:pb-10 lg:px-20 2xl:px-52  max-w-8xl justify-evenly mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-8 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-10 mx-auto",
        classForCards: "border-dashed border border-black bg-white p-4 mb-7 rounded-2xl",
        classForCardTitle: "text-center font-bold text-lg md:text-xl lg:text-2xl p-3",
        classForCardTitle_2: "text-md md:text-lg lg:text-xl m-5",
        cssCardTitle_2: "text-md md:text-lg lg:text-xl m-5 text-center",
        classForCardImage: "w-full rounded-full pb-5 object-cover",
        bgImgCss: "relative bg-cover p-2 md:p-3  block  bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload rounded-t-lg leading-tight",
        cardTitle_2: "<span class='w-full text-center text-white BlockTitle xl:py-5 py-2 md:py-10  leading-tight font-extrabold'>Statutory Warning</span>" +
            "<br /> <p class='lg:flex font-semibold text-white text-xl BlockTitle text-center p-4'>This workshop will literally change your whole life!</p>",

        cardsArray: [
            {
                cardTitle: '<p class="wrap-text">Which Technologies are in highest Demand in IT Industry?</p>',
                cardTitle_2: '<ul class="list-disc">' +
                    '<li class="wrap-text">Most Popular Frontend Frameworks</li>' +
                    '<li class="wrap-text">Most Popular Backend Programming Language</li>' +
                    '<li class="wrap-text">Most Popular Database</li>' +
                    "</ul>"
            }, {
                cardTitle: '<p class="wrap-text">Roadmap to High Salary Jobs in IT Industry</p>',
                cardTitle_2: '<ul class="list-disc">' +
                    '<li class="wrap-text">Highest salary making positions?</li>' +
                    '<li class="wrap-text">What are high volume job roles?</li>' +
                    '<li class="wrap-text">From entry level Roadmap to highest salary positions</li>' +
                    "</ul>"
            }, {
                cardTitle: '<p class="wrap-text">Secrets of Impressive Resume</p>',
                cardTitle_2: '<ul class="list-disc">' +
                    '<li class="wrap-text">Common mistakes by candidates that reject their resumes</li>' +
                    '<li class="wrap-text">How to Format the resume?</li>' +
                    '<li class="wrap-text">What makes your resume really impressive?</li>' +
                    "</ul>"
            }, {
                cardTitle: '<p class="wrap-text">How to Crack Interviews in First Attempt?</p>',
                cardTitle_2: '<ul class="list-disc">' +
                    '<li class="wrap-text">Etiquettes & Manners during Interview</li>' +
                    '<li class="wrap-text">Depth & Breadth of your Knowledge</li>' +
                    '<li class="wrap-text">‘Brahmastra’ to seal the deal</li>' +
                    "</ul>"
            },
        ],
        modalDisplay: "true",
        modalUrlName: "Secure Your Seat Now",
        modalBtnCss: "w-fit place-content-center justify-center mx-auto text-white text-center font-bold text-lg xl:text-xl 2xl:text-lg py-2 px-5 md:px-5  2xl:px-10    md:mt-10 lg:mt-3 mb-10 lg:mb-10 border  rounded btn bg-red-600 hover:bg-blue-500  cursor-pointer",

   
    }
    const content_Testimonials = {
		id: "testimonials",
		sectionCss: "bg-offWhite",
		blockTitle:
			" <span  class='uppercase font-extrabold leading-relaxed' >What our Students Say?</span>",
		classForblockTitle: "w-full text-center text-3xl md:text-3xl xl:text-4xl px-10 py-10 md:py-14",
		classForNoOfCards:
			"px-10 lg:px-32 2xl:px-48 max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-1 gap-x-4 lg:gap-x-10 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-10",
		classForCards:
			"bg-white p-3 mb-10 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]",
		classForCardTitle:
			"text-center font-extrabold text-md md:text-md lg:text-lg p-3",
		classForCardTitle_2:
			"font-bold text-md text-primary  p-5",
		imgDivCss: "py-2",
		classForCardImage: "lazyload",
		classForblockContent:
			"text-lg md:text-xl text-center font-[500] px-2 md:px-12 lg:px-32 xl:px-64  2xl:w-2/5 2xl:px-2  mx-auto ",
		blockContent:
			"",
		bgImgCss:
			"relative bg-cover p-3 block   bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
		testimonial: true,
        profileImageCss:"flex my-2 md:px-5",
		cardsArray: [
			{
				// profileImage: "/images/specific/testimonials/Akshay-Madanepatil.webp",
				// designation: "Student",
				// altImage: "Akshay_Madanepatil",
				name: "Pooja Rawat",
				classForContent: " mb-4 breakWord h-auto md:px-9 slide  overflow-auto  justify-content  text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
				content: `<p>The roadmap to high-paying IT roles guided my journey from a Junior Developer to a Cloud Solutions Architect, ensuring a fulfilling career with competitive compensation. </p>`,
			},
			{
				// designation: "Student",
				// profileImage: "/images/specific/testimonials/Siddhant-Kakade.webp",
				// altImage: "Siddhant_Kakade",
				classForContent: " mb-4 breakWord h-auto md:px-9 slide  overflow-auto  justify-content  text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
				name: "Anjali Joshi",
				content: `<p>Learning React.js and Node.js was a career-changing move, aligning my skills with industry demand and propelling me into the forefront of IT opportunities.</p>`,},
			{
				// designation: "Student",
				// profileImage: "/images/specific/testimonials/Rutika-Bankar.webp",
				// altImage: "Rutika_Bankar",
				classForContent: "mb-4 breakWord h-auto md:px-9 slide  overflow-auto  justify-content  text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
				name: "Kalyani Mhatre",
				content: `<p>Avoiding common resume mistakes and crafting an impactful document transformed my job search, leading to increased callbacks and securing my desired positions.</p>`
						},
			{
				// designation: "Student",
				// profileImage: "/images/specific/testimonials/Ashwini-Kori.webp",
				// altImage: "Ashwini-Kori",
				classForContent: "mb-4 breakWord h-auto md:px-9 slide  overflow-auto  justify-content  text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
				name: "Advait Mane",
				content: `<p>Understanding and avoiding common resume pitfalls highlighted in the content was a game-changer, turning rejection into acceptance and opening doors to my desired roles.</p>` 
					
			},
			{
				// designation: "Student",
				// profileImage: "/images/specific/testimonials/Shubham-Ankushe.webp",
				// altImage: "Shubham-Ankushe",
				classForContent: "mb-4 breakWord h-auto md:px-9 slide  overflow-auto  justify-content  text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
				name: "Rahul Kumar",
				content: `<p>Adopting a professional resume format not only enhanced readability but also played a crucial role in making a strong first impression during job applications and interviews.</p>` ,
			},
			{
				// designation: "Student",
				// profileImage: "/images/specific/testimonials/Ankit-Kumar-Rai.webp",
				// altImage: "Ankit-Kumar-Rai",
				classForContent: "mb-4 breakWord h-auto md:px-9 slide  overflow-auto  justify-content  text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
				name: "Amara Das",
				content: `<p>Highlighting measurable achievements and aligning my skills with job requirements truly made my resume stand out, setting the stage for successful job applications. </p>` 
					
			},
			{
				// designation: "Student",
				// profileImage: "/images/specific/testimonials/Abhishek-Varma.webp",
				// altImage: "Abhishek_Varma",
				classForContent: "mb-4 breakWord h-auto md:px-9 slide  overflow-auto  justify-content  text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
				name: "Nithya Sundaram",
				content: `<p>Mastering interview etiquettes and manners provided the essential edge, making me memorable to employers and ensuring a positive and successful interview experience.</p>` 
					},
			{
				// designation: "Student",
				// profileImage: "/images/specific/testimonials/Mohit-Panjwani.webp",
				// altImage: "Mohit_Panjwani",
				classForContent: "mb-4 breakWord h-auto md:px-9 slide  overflow-auto  justify-content  text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
				name: "Janani Rajagopal",
				content: `<p>Following the recommended technologies highlighted in the content significantly elevated my market value. Embracing React.js for frontend and Node.js for backend propelled me into high-demand IT roles, ensuring a successful and fulfilling career.</p>` 
			},
			
		],
	};
    return (
        <main className="flex flex-col justify-between min-h-screen bg-white font-TerminaTest">
            <BgImgLeftContentRtImg inputData={content_FirstBlock} />
            <BgImgLeftVideoRghtGrid inputData={content_VideoWithGrid} />
            <Technology inputData={content_Learn} />
            <CenterContentRepeatableBlocks inputData={content_Testimonials} />
            <BgImgLeftContentRtImg inputData={content_Block2} />
            <LeftImgRightRepeatableBlk
                inputData={content_About}
                readMore={false}
            />
            <AccordionBlock inputData={accordionData} />
        </main>
    )
}

export default landingPage;