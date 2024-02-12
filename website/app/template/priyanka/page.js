import React                  from 'react';
import OurPortfolio           from "@/templates/OurPortfolio/OurPortfolio.js"
import OurTeam                from "@/templates/OurTeam/OurTeam.js"
import RightImgLeftContent    from "@/templates/ContentBlocks/RightImgLeftContent/RightImgLeftContent.js"
import MultipleItemsSlider    from "@/templates/Carousel/Slider/MultipleItemsSlider.js"
import CenterContentRepeatableBlocks   from "@/templates/RepeatableBlocks/CenterContentRepeatableBlocks/CenterContentRepeatableBlocks.js"
import CenterImgCenterContentRepeatableBlocks   from "@/templates/RepeatableBlocks/CenterImgCenterContentRepeatableBlocks/CenterImgCenterContentRepeatableBlocks.js"
import HexagonalBlock from "@/templates/HexagonalBlock/HexagonalBlock.js"
const page = () => {
   const content_OurPortfolio = {
      blockTitle        :" Our Portfolio",
      classForblockTitle:" text-sky-500 w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:py-14 py-10 ",
      classForNoOfCards : "px-10 lg:px-20  max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-6",
      classForCards     : "p-3 bg-white mb-7 rounded-md",
      classForCardTitle : "text-sky-500 text-center font-bold text-xl md:text-xl lg:text-2xl p-3",
      classForCardImage : "w-full rounded-md",
      cardsArray: [
         { cardImage: '/images/generic/Image.webp', altImg: 'portfolio', cardTitle: 'Company-1' },
         { cardImage: '/images/generic/Image.webp', altImg: 'portfolio', cardTitle: 'Company-2' },
         { cardImage: '/images/generic/Image.webp', altImg: 'portfolio', cardTitle: 'Company-3' },
         { cardImage: '/images/generic/Image.webp', altImg: 'portfolio', cardTitle: 'Company-4' },
         { cardImage: '/images/generic/Image.webp', altImg: 'portfolio', cardTitle: 'Company-5' },
         { cardImage: '/images/generic/Image.webp', altImg: 'portfolio', cardTitle: 'Company-6' },
         { cardImage: '/images/generic/Image.webp', altImg: 'portfolio', cardTitle: 'Company-7' },
         { cardImage: '/images/generic/Image.webp', altImg: 'portfolio', cardTitle: 'Company-8' },
      ],
   };
   const content_OurTeam = {
      blockTitle        : "Our Team",
      classForblockTitle: "text-sky-500 w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:py-14 py-10 ",
      classForNoOfCards : "px-10 lg:px-20  max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-6",
      classForCards     : "bg-sky-300 text-white p-8 mb-7 rounded-lg",
      classForCardTitle : "text-center font-bold text-xl md:text-xl lg:text-2xl p-3",
      classForCardTitle_2:"font-bold text-md text-primary dark:text-primary-400",
      classForCardImage : "w-full rounded-full pb-5",
      cardsArray: [
         { cardImage: '/images/generic/User.webp', altImg: 'ourTeam', cardTitle: 'Team Member-1',cardTitle_2:'Asst. Manager' },
         { cardImage: '/images/generic/User.webp', altImg: 'ourTeam', cardTitle: 'Team Member-2',cardTitle_2:'Asst. Manager' },
         { cardImage: '/images/generic/User.webp', altImg: 'ourTeam', cardTitle: 'Team Member-3',cardTitle_2:'Asst. Manager' },
         { cardImage: '/images/generic/User.webp', altImg: 'ourTeam', cardTitle: 'Team Member-4',cardTitle_2:'Asst. Manager' },
         { cardImage: '/images/generic/User.webp', altImg: 'ourTeam', cardTitle: 'Team Member-5',cardTitle_2:'Asst. Manager' },
         { cardImage: '/images/generic/User.webp', altImg: 'ourTeam', cardTitle: 'Team Member-6',cardTitle_2:'Asst. Manager' },
         { cardImage: '/images/generic/User.webp', altImg: 'ourTeam', cardTitle: 'Team Member-7',cardTitle_2:'Asst. Manager' },
         { cardImage: '/images/generic/User.webp', altImg: 'ourTeam', cardTitle: 'Team Member-8',cardTitle_2:'Asst. Manager' },
      ],
   }
   const content_RightImgLeftContent={
      blockTitle          :"Right Image Left Content",
      blockContent        :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imgSrc              :"/images/generic/coming-soon-white.jpg",
      imgAlt              :"ltImgRtcontent",
      classForblockWrapper:"p-10 lg:p-20 h-auto ",
      classForblockTitle  :" text-sky-500 w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl",
      classForImageWrapper:"w-auto object-cover",
      classForContentWrap :"h-auto text-justify my-auto text-lg lg:text-xl",
      classForImage       :"object-cover w-full h-full top-0 left-0 rounded-xl"
   }   
   const content_MultipleItemsSlider = {
      showVideos:true,
      blockTitle:"Video Slider",
      classForblockTitle  :" text-sky-500 w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl",
      videos : [
         {
            video             :"/images/specific/Home/Battery.mp4",
            classForContent   :"h-auto text-justify my-auto text-lg lg:text-xl",
            content           :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
         },
         {
            video             :"/images/specific/Home/Banners/Banner-1.mp4",
            classForContent   :"h-auto text-justify my-auto text-lg lg:text-xl",
            content           :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
         },
         {
            video             :"/images/specific/Home/Battery.mp4",
            classForContent   :"h-auto text-justify my-auto text-lg lg:text-xl",
            content           :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
         },
         {
            video             :"/images/specific/Home/Banners/Banner-1.mp4",
            classForContent   :"h-auto text-justify my-auto text-lg lg:text-xl",
            content           :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
         },
         {
            video             :"/images/specific/Home/Battery.mp4",
            classForContent   :"h-auto text-justify my-auto text-lg lg:text-xl",
            content           :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
         },
         {
            video             :"/images/specific/Home/Banners/Banner-1.mp4",
            classForContent   :"h-auto text-justify my-auto text-lg lg:text-xl",
            content           :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
         },
         {
            video             :"/images/specific/Home/Battery.mp4",
            classForContent   :"h-auto text-justify my-auto text-lg lg:text-xl",
            content           :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
         },
         {
            video             :"/images/specific/Home/Banners/Banner-1.mp4",
            classForContent   :"h-auto text-justify my-auto text-lg lg:text-xl",
            content           :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
         },
         {
            video             :"/images/specific/Home/Battery.mp4",
            classForContent   :"h-auto text-justify my-auto text-lg lg:text-xl",
            content           :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
         }
      ]
   }
   const content_CenterContentRepeatableBlocks = {
      blockTitle        : "Block Title",
      classForblockTitle: "text-sky-500 w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:py-14 py-10 ",
      classForNoOfCards : "px-10 lg:px-20  max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-1 gap-x-4 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6",
      classForCards     : "bg-sky-300 text-white p-10 mb-7 rounded-xl",
      classForCardTitle : "text-center font-bold text-xl md:text-xl lg:text-2xl p-3",
      classForCardTitle_2:"font-bold text-md text-primary dark:text-primary-400 p-5",
      classForCardImage : "w-full p-10",
      classForblockContent   : "px-10 lg:px-20  xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
      blockContent           : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      cardsArray: [
         {  
            cardImage         : '/images/specific/Services/MobileApp/Images/8.webp', 
            altImage          : 'imageDescription',
            cardTitle         : 'Block - 1',
            cardTitle_2       : 'Block subtitle',
            classForContent   : "justify-content h-auto text-justify my-auto text-md lg:text-lg",
            content           : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
         
         },
         {  
            cardImage         : '/images/specific/Services/MobileApp/Images/10.webp', 
            altImage          : 'imageDescription',
            cardTitle         : 'Block - 2',
            cardTitle_2       : 'Block subtitle',
            classForContent   : "justify-content h-auto text-justify my-auto text-md lg:text-lg",
            content           : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
         
         },
         {  
            cardImage         : '/images/specific/Services/MobileApp/Images/5.webp', 
            altImage          : 'imageDescription',
            cardTitle         : 'Block - 3',
            cardTitle_2       : 'Block subtitle',
            classForContent   : "justify-content h-auto text-justify my-auto text-md lg:text-lg",
            content           : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
         
         },
      ],
   }
   
   const content_CenterImgCenterContentRepeatableBlocks = {
      blockTitle        : "Block Title",
      classForblockTitle: "text-sky-500 w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:py-14 py-10 ",
      blockImage        : '/images/generic/Image.webp',
      altImage          : 'imageDescription',
      classForblockImage: "w-full rounded-md  mx-auto max-w-2xl p-10",
      classForNoOfCards : "px-10 lg:px-20 mb-10 max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-1 gap-x-4 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6",
      classForCards     : "bg-sky-300 text-white p-10 mb-7 rounded-xl",
      classForCardTitle : "text-center font-bold text-xl md:text-xl lg:text-2xl p-3",
      classForCardTitle_2:"font-bold text-md text-primary dark:text-primary-400 p-5",
      classForCardImage : "w-full p-10",
      classForblockContent   : "px-10 lg:px-20  h-auto text-justify my-auto text-md lg:text-lg justify-content",
      blockContent           : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      cardsArray: [
         {  
            cardImage         : '/images/specific/Services/MobileApp/Images/8.webp', 
            altImage          : 'imageDescription',
            cardTitle         : 'Block - 1',
            cardTitle_2       : 'Block subtitle',
            classForContent   : "justify-content h-auto text-justify my-auto text-md lg:text-lg",
            content           : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
         },
         {  
            cardImage         : '/images/specific/Services/MobileApp/Images/10.webp', 
            altImage          : 'imageDescription',
            cardTitle         : 'Block - 2',
            cardTitle_2       : 'Block subtitle',
            classForContent   : "justify-content h-auto text-justify my-auto text-md lg:text-lg",
            content           : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
         },
         {  
            cardImage         : '/images/specific/Services/MobileApp/Images/8.webp', 
            altImage          : 'imageDescription',
            cardTitle         : 'Block - 3',
            cardTitle_2       : 'Block subtitle',
            classForContent   : "justify-content h-auto text-justify my-auto text-md lg:text-lg",
            content           : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
         },
      ],
   }
   const hexagons = [1, 2, 3, 4, 5, 6]; // Create an array to represent the hexagons
   const rotating=false;
   return (
      <div className="bg-sky-100 ">
         <OurPortfolio                             inputData={content_OurPortfolio} />
         <OurTeam                                  inputData={content_OurTeam} />
         <RightImgLeftContent                      inputData={content_RightImgLeftContent} />
         <MultipleItemsSlider                      inputData={content_MultipleItemsSlider}  />
         <CenterContentRepeatableBlocks            inputData={content_CenterContentRepeatableBlocks} />
         <CenterImgCenterContentRepeatableBlocks   inputData={content_CenterImgCenterContentRepeatableBlocks} />
         <HexagonalBlock />
      </div>
   )
}

export default page