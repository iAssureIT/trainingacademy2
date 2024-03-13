"use client";
import React, { useState } from "react";
import AccordionBlock from '@/templates/Accordion/AccordionBlock.js';
import Technology from "@/templates/ContentBlocks/Technology/Technology";

const HomePage = () => {
    
	const accordionData = {
		accordianThemeColor: "bg-orangeColor",
		pageTitle: "FAQ",
		isFAQ: true,
		titleDescription: "Frequently Asked Questions (FAQs) for Fullstack, ReactJS & NodeJS Training Program",
		accordionData: [
            {
                title:"1. What will I learn about the technologies in demand during this workshop?",
                content:"The workshop covers insights into high-demand technologies, including popular frontend frameworks like React.js, backend programming languages such as Node.js, and widely-used databases like MongoDB."
            },
            {
                title:"2. Can you provide details on the roadmap to high salary jobs in the IT industry?",
                content:"Absolutely. The workshop includes a comprehensive roadmap, guiding participants from entry-level positions to high-paying roles like Cloud Solutions Architect and AI Engineer."
            },
            {
                title:"3. Which positions command the highest salaries in the IT industry, and how will the workshop help me reach there?",
                content:"The workshop focuses on roles like Data Scientist, providing participants with the skills and knowledge needed to excel in these high-salary positions."
            },
            {
                title:"4. How does the workshop address high volume job roles in IT?",
                content:"High-volume job roles, such as Full Stack Developer and DevOps Engineer, are covered extensively, offering participants the skills required for success in these versatile positions."
            },
            {
                title:"5. Will the workshop help me avoid common resume mistakes and create an impressive resume?",
                content:"Yes, the workshop delves into the secrets of creating an impressive resume, including common mistakes to avoid and techniques to make your resume stand out to potential employers."
            },
            {
                title:"6. What specific guidance does the workshop provide on formatting resumes?",
                content:"The workshop offers insights into professional resume formatting, ensuring participants can present their achievements and skills in a compelling and organized manner."
            },
            {
                title:"7. How does the workshop guide participants in making their resumes truly impressive?",
                content:"Participants will learn to highlight measurable achievements, relevant skills, and tailor their resumes to specific job requirements, making them stand out in the competitive job market."
            },
            {
                title:"8. What strategies will the workshop cover to help participants crack interviews on their first attempt?",
                content:"The workshop covers interview etiquette, depth and breadth of knowledge showcase, and the 'Brahmastra' – adaptability – to empower participants for successful interviews from the outset."
            },
            {
                title:"9. What does the 'Brahmastra' concept mean in the context of sealing the deal during interviews?",
                content:"The 'Brahmastra' signifies showcasing adaptability and a continuous learning mindset, illustrating readiness to evolve with industry trends and excel in the chosen role."
            }
		],
		titleDescription_2: "Have more questions? Feel free to reach out to us! We're here to help you embark on your journey to becoming a successful Fullstack Developer."
	}
	const content_CourseFees = {
		sectionCss: "md:mt-5 lg:mt-20",
		blockTitle: "<span class='font-extrabold uppercase'>WHAT YOU WILL LEARN?</span>",
		// blockSubTitle: "<span class='font-extrabold'>Unlock Your FullStack Potential: Affordable Fees, Boundless Opportunities</span>",
		// classForblockSubTitle: "lg:w-3/4 xl:w-4/5 2xl:w-4/5  mx-auto text-center font-bold text-darkGray mb-10 bodyTxt",
		// classForblockDescription: "lg:w-3/4 xl:w-4/5 2xl:w-4/5  mx-auto text-center font-normal text-darkGray mb-10 bodyTxt my-5",
		// blockDescription: "<span>Embark on your FullStack journey with our comprehensive courses designed to elevate your skills and propel your career to new heights. With flexible payment options and exclusive discounts, investing in your future has never been more accessible</span>" +
		// 	"<br /><span class='font-bold'>Course Fees Breakdown</span>",
		classForblockTitle: "w-full text-center BlockTitle xl:py-5 py-10 md:py-10  leading-tight",
		classForNoOfCards: "px-10 pb-10 lg:px-20 2xl:px-52 lg:mt-5  max-w-8xl justify-evenly mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-8 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-10 mx-auto",
		classForCards: "border-dashed border border-black bg-white p-4 mb-7 rounded-2xl",
		classForCardTitle: "text-center font-bold text-lg md:text-xl lg:text-2xl p-3",
		classForCardTitle_2: "text-md md:text-lg lg:text-xl m-5",
        cssCardTitle_2:"text-md md:text-lg lg:text-xl m-5 text-center",
		classForCardImage: "w-full rounded-full pb-5 object-cover",
		bgImgCss: "relative bg-cover p-2 md:p-3  block  bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload rounded-t-lg leading-tight",
		cardTitle_2: "<span class='w-full text-center BlockTitle xl:py-5 py-10 md:py-10  leading-tight font-extrabold'>Statutory Warning</span>" +
			"<br /> <p class='lg:flex font-semibold text-xl BlockTitle text-center p-4'>This workshop will literally change your whole life!</p>" ,

		cardsArray: [
			{
				cardTitle: '<p class="wrap-text">Which Technologies are in highest Demand in IT Industry?</p>',
				cardTitle_2: '<ul class="list-disc">'+
                        '<li class="wrap-text">Most Popular Frontend Frameworks</li>'+
                        '<li class="wrap-text">Most Popular Backend Programming Language</li>'+
                        '<li class="wrap-text">Most Popular Database</li>'+
                    "</ul>"
			}, {
				cardTitle: '<p class="wrap-text">Roadmap to High Salary Jobs in IT Industry</p>',
				cardTitle_2:  '<ul class="list-disc">'+
                        '<li class="wrap-text">Highest salary making positions?</li>'+
                        '<li class="wrap-text">What are high volume job roles?</li>'+
                        '<li class="wrap-text">From entry level Roadmap to highest salary positions</li>'+
                    "</ul>"
			}, {
				cardTitle: '<p class="wrap-text">Secrets of Impressive Resume</p>',
				cardTitle_2: '<ul class="list-disc">'+
                        '<li class="wrap-text">Common mistakes by candidates that reject their resumes</li>'+
                        '<li class="wrap-text">How to Format the resume?</li>'+
                        '<li class="wrap-text">What makes your resume really impressive?</li>'+
                    "</ul>"
			}, {
				cardTitle: '<p class="wrap-text">How to Crack Interviews in First Attempt?</p>',
				cardTitle_2:  '<ul class="list-disc">'+
                        '<li class="wrap-text">Etiquettes & Manners during Interview</li>'+
                        '<li class="wrap-text">Depth & Breadth of your Knowledge</li>'+
                        '<li class="wrap-text">‘Brahmastra’ to seal the deal</li>'+
                    "</ul>"
			},
		],
	}


	return (
		<main className="flex flex-col justify-between min-h-screen bg-white font-TerminaTest">
			<Technology inputData={content_CourseFees} />
            <AccordionBlock inputData={accordionData} />
		</main>
	);
}


export default HomePage;