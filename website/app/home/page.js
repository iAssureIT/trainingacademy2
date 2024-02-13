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
        titleDescription:"Frequently Asked Questions (FAQs) for Fullstock ReactJS & NodeJS Training Program",
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
    
    const content_Testimonials = {
        sectionCss: "md:my-5 lg:my-0",
        blockTitle:
          " <span  class='uppercase font-extrabold leading-relaxed' >TESTIMONIALS</span>",
        classForblockTitle: "w-full text-center text-3xl md:text-3xl xl:text-4xl mb-5  my-20",
        classForNoOfCards:
          "px-10 lg:px-32 2xl:px-48 max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-1 gap-x-4 lg:gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-6",
        classForCards:
          " p-3 mb-7 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]",
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
        dash: "border-blue-700 mb-5 lg:mb-0 lg:-mt-12 ",
        cardsArray: [
            {
                cardImage: "",
                altImage: "imageDescription",
                cardTitle: "Akshay Madanepatil",
                classForContent:" breakWord h-[305px] md:h-[305px] lg:h-[305px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                content: `<p>I'm thrilled to share my positive feedback on the training program, and I must say it has been an enriching experience. The incorporation of a "learn with fun" approach made the sessions engaging, ensuring a positive and enjoyable learning environment. </p>`+
                "<p>What stood out for me was the program's problem-oriented methodology, allowing us to practically face challenges and fostering critical thinking for effective solution-building. This unique approach significantly contributed to enhancing my logic and problem-solving skills. The emphasis on concept clarity has been instrumental in enhancing my understanding. </p>"+
                "<p>The unique, multidirectional and assignment oriented focus has made the training exceptionally practical and relevant. Overall, I highly appreciate the program's quality and effectiveness. I feel more confident and equipped with new skills, thanks to this impactful training.</p>",
            },
            {
                cardImage: "",
                altImage: "imageDescription",
                classForContent:" breakWord h-[305px] md:h-[305px] lg:h-[305px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Siddhant Kakade",
                content:`<p>I am writing to provide feedback on the training program conducted by Mr. Ashish Naik over a period of three months. The experience was truly remarkable, and I would like to highlight some key features that made it exceptional.</p>`+

                `<p>Expertise in Software Development Life Cycle: Mr. Naik is an outstanding trainer with extensive expertise in Software Development Life Cycle (SDLC). His depth of knowledge and experience in this domain significantly enriched the training sessions.</p>`+
            
                `<p>Engaging Training Style: Mr. Naik's training methodology is truly captivating. From the very first day, he managed to ignite our energy levels and maintain a high level of engagement throughout the program. His approach to kickstarting the training was both refreshing and effective.</p>`+
            
                `<p>Unique Training Methodology: While the training syllabus may be available elsewhere, Mr. Naik's utilization of the Scientific Method sets his program apart. This innovative approach to training is not commonly found in India and greatly enhances the learning experience.</p>`+
            
                `<p>Positive Atmosphere and Fun Learning: One of the most commendable aspects of Mr. Naik's training is the positivity he instills in his trainees. His manner of communication and ability to make learning enjoyable while ensuring it remains informative is truly commendable.</p>`+
            
                `<p>Holistic Training Approach: In addition to technical skills, Mr. Naik also introduced us to various aspects of the industry, including insights into the USA culture, client handling techniques, mobile-first approach to development, and a comprehensive overview of SDLC. His practical approach to discussing real-world problems and their solutions was invaluable.</p>`+
            
                `<p>Exceptional Trainer: Mr. Naik is undoubtedly a gem of a person and an exceptional trainer. His dedication to providing unparalleled training experiences is evident in every aspect of the program. I believe there is no equivalent training available in the market that matches the quality and depth of learning provided by Mr. Naik.</p>`+
            
                `<p>In conclusion, I am immensely grateful for the opportunity to have participated in Mr. Naik's training program. The knowledge and skills gained during these sessions have been invaluable to my professional development. I highly recommend Mr. Naik's training program to anyone seeking comprehensive and impactful learning experiences.</p>`
            },
            {
                cardImage: "",
                altImage: "imageDescription",
                classForContent:"breakWord h-[305px] md:h-[305px] lg:h-[305px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Rutika Bankar",
                content:`<p>The Training Program has exceeded my expectations in every way. From the comprehensive curriculum to the exceptional instructor and supportive learning environment, this program has truly empowered me with the skills and confidence to excel in this field. One of the most impressive aspects of the program is its well-structured curriculum, which covers a wide range of topics.</p>`+
                `<p>The hands-on projects and real-world examples provided ample opportunities to apply theoretical knowledge to practical solutions, ensuring a deeper understanding of the concepts taught.</p>`+
                `<p>Mr. Naik’s passion for teaching and dedication to student success truly sets this program apart.</p>`+
                `<p>Furthermore, the program fosters a collaborative and inclusive learning environment where participants are encouraged to ask questions, share ideas, and collaborate on projects. This not only enhances the learning experience but also fosters a sense of camaraderie among participants, creating a supportive community that extends beyond the classroom. Overall, I am extremely grateful for the opportunity to be a part of this Training Program and I would highly recommend it to anyone looking to embark on a similar journey.</p>`,
            },
            {
                cardImage: "",
                altImage: "imageDescription",
                classForContent:"breakWord h-[305px] md:h-[305px] lg:h-[305px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Ashwini Kori",
                content:`<p>The training program is particularly good and valuable for us as we must keep ourselves updated about newer technologies in the field. It strengthened my technical skills and proved to be a great learning experience, especially with the practical deigning and planning and learn with fun sessions.</p>`+
                `<p>I really enjoying the course and Mr. Ashish Naik's informal Learn with Fun approach to presenting his material.</p>`+
                `<p>Mr. Ashish Naik sir is a wonderfully engaging presenter, very easy to listen to and the course was just the right mix of theory, practical demonstration.</p>`+
            `<p>The Training Program was presented in an enthusiastic way. The content can be related not only to speech therapy but also to events and situations in daily life. Leaves you with a real feel-good factor. </p>`+
            `<p>Thank you for a great Training Program. Great presentation style with lots of opportunities to ask questions and talk about real life examples which all made for a really enjoyable and informative training program."</p>`+
            `<p>This has more than met my expectations. and “very interesting and useful"</p>`+
            `<p>Over all the training program was excellent! Mr. Ashish Naik sir's energy and enthusiasm were infectious, and you kept us engaged throughout the entire session. I appreciated how you provided practical tips and insights that we could immediately apply to our assignments/work Thank you so much for your dedication to making this training program success and finally Thank you so much for giving the opportunity to work with your team.</p>`,
            },
            {
                cardImage: "",
                altImage: "imageDescription",
                classForContent:"breakWord h-[305px] md:h-[305px] lg:h-[305px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Shubham Ankushe",
                content:`<p>I am absolutely delighted to express my profound gratitude for the transformative three-month training program conducted by Mr. Ashish Naik. The exceptional mastery he exhibited in the Full Stack Development enriched our learning experience with invaluable insights. From day one, Mr. Naik's engaging training style not only captivated our attention but also sparked an energetic and highly participative atmosphere. What truly sets his program apart is the innovative incorporation of the Scientific Method, a rarity in India.</p>`+
                `<p>Under Mr. Naik's guidance, the learning environment became not only informative but also positively enjoyable, seamlessly blending fun with knowledge. The training extended beyond technical skills, covering industry insights, client handling techniques, and mobile-first development approaches. Mr. Naik's dedication as an exceptional trainer is evident, providing unparalleled learning experiences that distinguish themselves in the market.</p>`+
                `<p>Additionally, His exceptional expertise in development and knowledge of cutting-edge technologies, with a focus on CSS animations, was truly insightful. Sir's teaching style made complex concepts accessible, and I now feel confident in implementing these skills in real-world projects. Overall, the training was a valuable and exciting learning experience, thanks to Sir's proficiency in web development and his effective teaching methods. I wholeheartedly recommend his training to those seeking impactful and comprehensive learning experiences.</p>`,
            },
            {
                cardImage: "",
                altImage: "imageDescription",
                classForContent:"breakWord h-[305px] md:h-[305px] lg:h-[305px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Ankit Kumar Rai",
                content:`<p>I am delighted to share my experience with the Advanced Full Stack Development training led by Ashish Naik. His expertise, dedication, and effective communication have been instrumental in my learning journey. The comprehensive curriculum covered all aspects of Full Stack Development, providing a robust foundation for real-world applications. </p>`+
                `<p>The hands-on projects were particularly beneficial, allowing me to bridge the gap between theory and practical implementation seamlessly. His passion for teaching and commitment to student success were evident in every session, creating a positive and encouraging learning atmosphere. His approachability and willingness to address doubts ensured a supportive and enriching experience. </p>`+
                `<p>I can confidently attest that Ashish Naik's training has not only elevated my technical skills but has also instilled a sense of confidence in my ability to excel in the field. Grateful for this transformative learning adventure!</p>`,
            },
            {
                cardImage: "",
                altImage: "imageDescription",
                classForContent:"breakWord h-[305px] md:h-[305px] lg:h-[305px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Abhishek Varma",
                content:`<p>I am pleased to provide feedback on the training conducted by Mr. Ashish Naik sir. The experience was truly remarkable, and I would like to highlight some points : </p>`+
                `<p>“Fun with Learn" Strategy: 
                Mr. Ashish Naik sir training approach is remarkably engaging, blending fun with learning seamlessly. This strategy not only makes the sessions enjoyable but also enhances the retention of crucial information.</p>`+
                `<p>Best Mentoring: 
                His mentoring style stands out as exemplary, offering guidance that goes beyond the ordinary. The personalized attention and support contribute significantly to a positive and productive learning experience.</p>`+
                `<p>Simplifying Hard Concepts: 
                Mr. Naik sir excels in simplifying complex concepts, ensuring that even challenging topics are presented in an accessible and easy-to-understand manner. This ability greatly aids in grasping and applying intricate subject matter.</p>`+
                `<p>Depth Knowledge in Software Development: <p>`+
                `<p>The training sessions are enriched by Mr. Ashish Naik sir profound knowledge in software development. His expertise adds depth to the learning experience, providing valuable insights that are beneficial for practical application.</p>`+
                `<p>Impactful Training: The training sessions conducted by Mr. Naik sir  have had a tangible impact on the skills and capabilities of the participants. The practical and relevant content leaves a lasting impression, fostering growth and development.</p>`+
                `<p>I believe that the positive impact of this training will undoubtedly reflect in our company's success under your leadership.</p>`,
            },
            {
                cardImage: "",
                altImage: "imageDescription",
                classForContent:"breakWord h-[305px] md:h-[305px] lg:h-[305px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Mohit Panjwani",
                content:`<p>I'm really excited and pleased to provide feedback on our Advanced and High level Software Development training program...</p>`+
                `<p>The training program offers well all rounded curriculum that covers all essential parts and topics of software development, from basic concepts to advanced technologies. The training conducted under Mr Ashish Naik sir was very enthusiastic and helped me to achieve more confidence in this field despite of me being from a non technical field. The dedication, expertise and passion of Mr Ashish Naik sir towards the goal of our training program is very impressive, the interacting style was not only informative but also engaging, and the title of learn with fun made it more interesting. The training program was not only about learning software related technologies but also understanding industry standards mainly stress management. Overall the training was highly informative and beneficial and the dedication of Mr Ashish Naik sir towards our growth and development as individuals has been truly inspiring.</p>`,
            },
            {
                cardImage: "",
                altImage: "imageDescription",
                classForContent:"breakWord h-[305px] md:h-[305px] lg:h-[305px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Archana Kadam",
                content:`<p>I am very much delighted to share my experience on the training program provided in iAssureIT. It gives me immense pleasure to show my gratitude to the training that is been provided to me.</p>`+
                `<p>From my personal experience, I can say there is a distinctive difference in the approach of carrying out the training program . Mr.Ashish Naik, our Mentor, has an innate quality to present the most intricate concept in a much simpler form.</p>`+
                `<p>Mr.Naik is highly knowledgeable and experienced and always available to clarify any doubts or queries. The course structure is well organized, and the hands-on projects and assignments helped me gain practical skills. The course also provided valuable insights into the current trends and practices in the web development field. More emphasis is given on practice, which is the key to perform better. </p>`+
                `<p>What stands out about this particular training program is it’s practical approach. Tackling onerous concepts shows Mr.Naik’s in-depth knowledge, which was very helpful for us all in the training program. Each passing day here has built our confidence not only in technical but also in our overall personality. He has influenced us all big time.</p>`+
                `<p>I highly recommend this course for anybody who is looking to step into the field of Web Development. </p>`,
            },
            {
                cardImage: "",
                altImage: "imageDescription",
                classForContent:"breakWord h-[305px] md:h-[305px] lg:h-[305px]  p-3 md:p-9 slide  overflow-auto  justify-content h-auto text-justify my-auto text-xs lg:text-sm p-3 font-[500]",
                cardTitle:"Aniket Pawar",
                content:`<p>I am feeling grateful to share my feedback on the Full Stack Development learning experience under our best and always enthusiastic mentor Mr. Ashish Naik which has been incredibly positive and wonderful.</p>`+ 
                `<p>Ashish Sir's teaching methodology stands out for its unique "Learn with Fun" approach. This not only makes the learning process enjoyable but also enhances retention and understanding. His passion for the subject matter is evident, and his ability to communicate complex concepts in a clear and engaging manner contributes significantly to the overall quality of the training.</p>`+
                `<p>One of the standout aspects of this training is the exposure to essential concepts of Full Stack Development that I haven't encountered in previous learning experiences. Ashish Sir's expertise and ability to delve into these topics in a comprehensive manner have expanded my understanding of web development significantly.</p>`+
                `<p>The overall atmosphere during the training is positive and conducive to learning. The combination of interactive sessions, engaging discussions, and a supportive learning environment fosters a sense of community among participants. This, in turn, enhances the overall learning journey.</p>`,
            },
        ],
      };
  const content_TRAININGPROGRAM = {
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
    classForCardImage: " px-2 rounded-xs  w-16 h-16 my-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mx-auto bg-purple",
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
            <CenterContentRepeatableBlocks inputData={content_TRAININGPROGRAM} />
            <CenterContentRepeatableBlocks inputData={content_Testimonials} />
            <AccordionBlock inputData={accordionData} />
        </div>
    )

}
export default HomePage;
