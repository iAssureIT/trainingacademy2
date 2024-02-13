"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import VideoBanner from "@/templates/BannerBlocks/VideoBanner/VideoBanner";
import CenterContentRepeatableBlocks from "@/templates/RepeatableBlocks/CenterContentRepeatableBlocks/CenterContentRepeatableBlocks";
import Technology from "@/templates/ContentBlocks/Technology/Technology";
import AccordionBlock from '@/templates/Accordion/AccordionBlock.js'

const HomePage = () => {

    const content_Video = {
        id: "bannerVideo",
        class: "w-full ",
        videoUrl: "/images/videos/latest-web-banners.mp4",
        imgUrl: "/images/specific/Home/HomeVideoImg.webp"
    };
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
        cardsArray: [
            {
                cardImage: "",
                altImage: "imageDescription",
                cardTitle: "Akshay Madanepatil",
                classForContent:" mb-4 breakWord h-[200px] md:h-[200px] lg:h-[200px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                content: `<p>I'm thrilled to share my positive feedback on the training program, and I must say it has been an enriching experience. The incorporation of a "learn with fun" approach made the sessions engaging, ensuring a positive and enjoyable learning environment. </p>`+
                "<br /><p>What stood out for me was the program's problem-oriented methodology, allowing us to practically face challenges and fostering critical thinking for effective solution-building. This unique approach significantly contributed to enhancing my logic and problem-solving skills. The emphasis on concept clarity has been instrumental in enhancing my understanding. </p>"+
                "<br /><p>The unique, multidirectional and assignment oriented focus has made the training exceptionally practical and relevant. Overall, I highly appreciate the program's quality and effectiveness. I feel more confident and equipped with new skills, thanks to this impactful training.</p>",
            },
            {
                cardImage: "",
                altImage: "imageDescription",
                classForContent:" mb-4 breakWord h-[200px] md:h-[200px] lg:h-[200px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Siddhant Kakade",
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
                cardImage: "",
                altImage: "imageDescription",
                classForContent:"mb-4 breakWord h-[200px] md:h-[200px] lg:h-[200px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Rutika Bankar",
                content:`<p>The Training Program has exceeded my expectations in every way. From the comprehensive curriculum to the exceptional instructor and supportive learning environment, this program has truly empowered me with the skills and confidence to excel in this field. One of the most impressive aspects of the program is its well-structured curriculum, which covers a wide range of topics.</p>`+
                `<br /><p>The hands-on projects and real-world examples provided ample opportunities to apply theoretical knowledge to practical solutions, ensuring a deeper understanding of the concepts taught.</p>`+
                `<br /><p>Mr. Naik’s passion for teaching and dedication to student success truly sets this program apart.</p>`+
                `<br /><p>Furthermore, the program fosters a collaborative and inclusive learning environment where participants are encouraged to ask questions, share ideas, and collaborate on projects. This not only enhances the learning experience but also fosters a sense of camaraderie among participants, creating a supportive community that extends beyond the classroom. Overall, I am extremely grateful for the opportunity to be a part of this Training Program and I would highly recommend it to anyone looking to embark on a similar journey.</p>`,
            },
            {
                cardImage: "",
                altImage: "imageDescription",
                classForContent:"mb-4 breakWord h-[200px] md:h-[200px] lg:h-[200px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Ashwini Kori",
                content:`<p>The training program is particularly good and valuable for us as we must keep ourselves updated about newer technologies in the field. It strengthened my technical skills and proved to be a great learning experience, especially with the practical deigning and planning and learn with fun sessions.</p>`+
                `<br /><p>I really enjoying the course and Mr. Ashish Naik's informal Learn with Fun approach to presenting his material.</p>`+
                `<br /><p>Mr. Ashish Naik sir is a wonderfully engaging presenter, very easy to listen to and the course was just the right mix of theory, practical demonstration.</p>`+
                `<br /><p>The Training Program was presented in an enthusiastic way. The content can be related not only to speech therapy but also to events and situations in daily life. Leaves you with a real feel-good factor. </p>`+
                `<br /><p>Thank you for a great Training Program. Great presentation style with lots of opportunities to ask questions and talk about real life examples which all made for a really enjoyable and informative training program."</p>`+
                `<br /><p>This has more than met my expectations. and “very interesting and useful"</p>`+
                `<br /><p>Over all the training program was excellent! Mr. Ashish Naik sir's energy and enthusiasm were infectious, and you kept us engaged throughout the entire session. I appreciated how you provided practical tips and insights that we could immediately apply to our assignments/work Thank you so much for your dedication to making this training program success and finally Thank you so much for giving the opportunity to work with your team.</p>`,
            },
            {
                cardImage: "",
                altImage: "imageDescription",
                classForContent:"mb-4 breakWord h-[200px] md:h-[200px] lg:h-[200px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Shubham Ankushe",
                content:`<p>I am absolutely delighted to express my profound gratitude for the transformative three-month training program conducted by Mr. Ashish Naik. The exceptional mastery he exhibited in the Full Stack Development enriched our learning experience with invaluable insights. From day one, Mr. Naik's engaging training style not only captivated our attention but also sparked an energetic and highly participative atmosphere. What truly sets his program apart is the innovative incorporation of the Scientific Method, a rarity in India.</p>`+
                `<br /><p>Under Mr. Naik's guidance, the learning environment became not only informative but also positively enjoyable, seamlessly blending fun with knowledge. The training extended beyond technical skills, covering industry insights, client handling techniques, and mobile-first development approaches. Mr. Naik's dedication as an exceptional trainer is evident, providing unparalleled learning experiences that distinguish themselves in the market.</p>`+
                `<br /><p>Additionally, His exceptional expertise in development and knowledge of cutting-edge technologies, with a focus on CSS animations, was truly insightful. Sir's teaching style made complex concepts accessible, and I now feel confident in implementing these skills in real-world projects. Overall, the training was a valuable and exciting learning experience, thanks to Sir's proficiency in web development and his effective teaching methods. I wholeheartedly recommend his training to those seeking impactful and comprehensive learning experiences.</p>`,
            },
            {
                cardImage: "",
                altImage: "imageDescription",
                classForContent:"mb-4 breakWord h-[200px] md:h-[200px] lg:h-[200px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Ankit Kumar Rai",
                content:`<p>I am delighted to share my experience with the Advanced Full Stack Development training led by Ashish Naik. His expertise, dedication, and effective communication have been instrumental in my learning journey. The comprehensive curriculum covered all aspects of Full Stack Development, providing a robust foundation for real-world applications. </p>`+
                `<br /><p>The hands-on projects were particularly beneficial, allowing me to bridge the gap between theory and practical implementation seamlessly. His passion for teaching and commitment to student success were evident in every session, creating a positive and encouraging learning atmosphere. His approachability and willingness to address doubts ensured a supportive and enriching experience. </p>`+
                `<br /><p>I can confidently attest that Ashish Naik's training has not only elevated my technical skills but has also instilled a sense of confidence in my ability to excel in the field. Grateful for this transformative learning adventure!</p>`,
            },
            {
                cardImage: "",
                altImage: "imageDescription",
                classForContent:"mb-4 breakWord h-[200px] md:h-[200px] lg:h-[200px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Abhishek Varma",
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
                cardImage: "",
                altImage: "imageDescription",
                classForContent:"mb-4 breakWord h-[200px] md:h-[200px] lg:h-[200px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Mohit Panjwani",
                content:`<p>I'm really excited and pleased to provide feedback on our Advanced and High level Software Development training program...</p>`+
                `<br /><p>The training program offers well all rounded curriculum that covers all essential parts and topics of software development, from basic concepts to advanced technologies. The training conducted under Mr Ashish Naik sir was very enthusiastic and helped me to achieve more confidence in this field despite of me being from a non technical field. The dedication, expertise and passion of Mr Ashish Naik sir towards the goal of our training program is very impressive, the interacting style was not only informative but also engaging, and the title of learn with fun made it more interesting. The training program was not only about learning software related technologies but also understanding industry standards mainly stress management. Overall the training was highly informative and beneficial and the dedication of Mr Ashish Naik sir towards our growth and development as individuals has been truly inspiring.</p>`,
            },
            {
                cardImage: "",
                altImage: "imageDescription",
                classForContent:"mb-4 breakWord h-[200px] md:h-[200px] lg:h-[200px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Archana Kadam",
                content:`<p>I am very much delighted to share my experience on the training program provided in iAssureIT. It gives me immense pleasure to show my gratitude to the training that is been provided to me.</p>`+
                `<br /><p>From my personal experience, I can say there is a distinctive difference in the approach of carrying out the training program . Mr.Ashish Naik, our Mentor, has an innate quality to present the most intricate concept in a much simpler form.</p>`+
                `<br /><p>Mr.Naik is highly knowledgeable and experienced and always available to clarify any doubts or queries. The course structure is well organized, and the hands-on projects and assignments helped me gain practical skills. The course also provided valuable insights into the current trends and practices in the web development field. More emphasis is given on practice, which is the key to perform better. </p>`+
                `<br /><p>What stands out about this particular training program is it’s practical approach. Tackling onerous concepts shows Mr.Naik’s in-depth knowledge, which was very helpful for us all in the training program. Each passing day here has built our confidence not only in technical but also in our overall personality. He has influenced us all big time.</p>`+
                `<br /><p>I highly recommend this course for anybody who is looking to step into the field of Web Development. </p>`,
            },
            {
                cardImage: "",
                altImage: "imageDescription",
                classForContent:"mb-4 breakWord h-[200px] md:h-[200px] lg:h-[200px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Aniket Pawar",
                content:`<p>I am feeling grateful to share my feedback on the Full Stack Development learning experience under our best and always enthusiastic mentor Mr. Ashish Naik which has been incredibly positive and wonderful.</p>`+ 
                `<br /><p>Ashish Sir's teaching methodology stands out for its unique "Learn with Fun" approach. This not only makes the learning process enjoyable but also enhances retention and understanding. His passion for the subject matter is evident, and his ability to communicate complex concepts in a clear and engaging manner contributes significantly to the overall quality of the training.</p>`+
                `<br /><p>One of the standout aspects of this training is the exposure to essential concepts of Full Stack Development that I haven't encountered in previous learning experiences. Ashish Sir's expertise and ability to delve into these topics in a comprehensive manner have expanded my understanding of web development significantly.</p>`+
                `<br /><p>The overall atmosphere during the training is positive and conducive to learning. The combination of interactive sessions, engaging discussions, and a supportive learning environment fosters a sense of community among participants. This, in turn, enhances the overall learning journey.</p>`,
            },
        ],
    };
    const content_TRAININGPROGRAM = {
        sectionCss: "md:my-5 lg:my-0 bg-offWhite",
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
        sectionCss: "md:my-5 lg:my-0 md:my-5 lg:my-0 px-10 lg:px-32 2xl:px-48 max-w-8xl",
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
    const content_CourseFees = {
        sectionCss: "md:my-5 lg:my-20",
        blockTitle: "<span class='font-extrabold uppercase'>COURSE PRICE</span>",
        blockSubTitle: "<span class='font-extrabold'>Unlock Your FullStack Potential: Affordable Fees, Boundless Opportunities</span>",
        classForblockSubTitle: "lg:w-3/4 xl:w-4/5 2xl:w-4/5  mx-auto text-center font-bold text-darkGray mb-10 bodyTxt",
        classForblockDescription:"lg:w-3/4 xl:w-4/5 2xl:w-4/5  mx-auto text-center font-normal text-darkGray mb-10 bodyTxt my-5",
        blockDescription:"<p>Embark on your FullStack journey with our comprehensive courses designed to elevate your skills and propel your career to new heights. With flexible payment options and exclusive discounts, investing in your future has never been more accessible</p>"+
        "<br /><span class='font-bold'>Course Fees Breakdown</span>",
        classForblockTitle: "w-full text-center BlockTitle xl:py-5 py-3 md:py-10  leading-tight",
        classForNoOfCards: "px-10 pb-10 lg:px-20 2xl:px-52 lg:mt-5  max-w-8xl text-center justify-evenly mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-8 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-10 mx-auto",
        classForCards: "mb-7 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]",
        classForCardTitle: "text-white text-center font-bold text-sm md:text-sm lg:text-md p-3",
        classForCardTitle_2: "",
        classForCardImage: "w-full rounded-full pb-5 object-cover",
        bgImgCss: "relative bg-cover p-12 md:p-3  block  bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload bg-skyBlue rounded-t-lg leading-tight",
        cardTitle_2:"<div class='text-center text-lg'><h5 class='font-bold '>Total Investment</h5>"+
        "<br /> <p class='flex font-semibold text-lg'>Regular Price for all 4 Courses   :<i class='fa-solid fa-indian-rupee-sign'></i><span class='font-bold'> 1,80,000</span></p>"+
        "<br /> <p class='flex font-semibold text-lg'>Discounted Price for all 4 Courses:<i class='fa-solid fa-indian-rupee-sign'></i><span class='font-bold'> 1,00,000</span></p>"+
        "<br /><p class='text-xl font-bold text-lightGreen'>Discount of 45% discount</p></div>",
        cardsArray: [

            {
                // cardImage: '/images/specific/trainingAcademy/iAssureIT-training-15.webp',
                cardTitle: '<p>Course 1</p>'+
                '<p class="wrap-text">HTML5, CSS3, JavaScript </p><p>etc</p>',
                // imageArr: []
                cardTitle_2: "<p class='mt-6 text-sm font-semibold text-black'>Regular Price</p>"+
                "<p class='text-lg font-bold text-black'><i class='fa-solid fa-indian-rupee-sign'></i> 30,000</p>"+
                "<p class='text-sm font-semibold text-black mt-3'>Discounted Price</p>"+
                "<p class='text-lg font-bold text-black'><i class='fa-solid fa-indian-rupee-sign'></i> 25,000</p>"+
                "<p class='text-sm mb-6 font-semibold text-lightGreen mt-3'>Discount of 17% discount</p>"
            }, {
                // cardImage: '/images/specific/trainingAcademy/iAssureIT-training-15.webp',
                cardTitle: '<p>Course 2</p>'+
                '<p class="wrap-text">ReactJS, JSON,</p><p> API Integration</p>',
                // imageArr: []
                cardTitle_2: "<p class='mt-6 text-sm font-semibold text-black'>Regular Price</p>"+
                "<p class='text-lg font-bold text-black'><i class='fa-solid fa-indian-rupee-sign'></i> 50,000</p>"+
                "<p class='text-sm font-semibold text-black mt-3'>Discounted Price</p>"+
                "<p class='text-lg font-bold text-black'><i class='fa-solid fa-indian-rupee-sign'></i> 25,000</p>"+
                "<p class='text-sm mb-6 font-semibold text-lightGreen mt-3'>Discount of 50% discount</p>"
            }, {
                // cardImage: '/images/specific/trainingAcademy/iAssureIT-training-15.webp',
                cardTitle: '<p>Course 3</p>'+
                '<p class="wrap-text">NodeJS, MongoDB,</p><p> REST API Development</p>',
                // imageArr: []
                cardTitle_2: "<p class='mt-6 text-sm font-semibold text-black'>Regular Price</p>"+
                "<p class='text-lg font-bold text-black'><i class='fa-solid fa-indian-rupee-sign'></i> 50,000</p>"+
                "<p class='text-sm font-semibold text-black mt-3'>Discounted Price</p>"+
                "<p class='text-lg font-bold text-black'><i class='fa-solid fa-indian-rupee-sign'></i> 25,000</p>"+
                "<p class='text-sm mb-6 font-semibold text-lightGreen mt-3'>Discount of 50% discount</p>"
            }, {
                // cardImage: '/images/specific/trainingAcademy/iAssureIT-training-15.webp',
                cardTitle: '<p>Course 4</p>'+
                '<p class="wrap-text">Advanced Skills in ReactJS,</p><p> NodeJS, etc</p>',
                // imageArr: []
                cardTitle_2: "<p class='mt-6 text-sm font-semibold text-black'>Regular Price</p>"+
                "<p class='text-lg font-bold text-black'><i class='fa-solid fa-indian-rupee-sign'></i> 50,000</p>"+
                "<p class='text-sm font-semibold text-black mt-3'>Discounted Price</p>"+
                "<p class='text-lg font-bold text-black'><i class='fa-solid fa-indian-rupee-sign'></i> 25,000</p>"+
                "<p class='text-sm mb-6 font-semibold text-lightGreen mt-3'>Discount of 50% discount</p>"
            },
        ],
        // dash: "border-blue-700 mb-0  md:mb-0 ",
    }

    
    // "<p>Instalment Plan: Pay in 4 equal instalments for ease of budgeting.</p>"+
    // "<p>One-Time Payment Discount: Avail a further discount by paying the total fees upfront, reducing the total</p>"+
    // "<p>to just Rs 90,000. (Overall Discount of 50% discount)</p>"+

    return (
        <div>
            <CenterContentRepeatableBlocks inputData={content_TRAININGPROGRAM} />
            <Technology inputData={content_CourseFees} />
            {/* <CenterContentRepeatableBlocks inputData={content_ExclusiveBenefits} />
            <CenterContentRepeatableBlocks inputData={content_Testimonials} />
            <AccordionBlock inputData={accordionData} /> */}
        </div>
    )

}
export default HomePage;
