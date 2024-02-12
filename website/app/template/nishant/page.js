import React from 'react';



import OurClients from "@/templates/OurClients/page"
// import LeftImgRightContentCarousel from "@/templates/LeftImgRightContentCarousel/page"
import LeftImgRightRepeatableBlocks from "@/templates/RepeatableBlocks/LeftImgRightRepeatableBlocks/page"
import CenterImgLeftRightRepeatableBlocks from "@/templates/RepeatableBlocks/CenterImgLeftRightRepeatableBlocks/page"
const page = () => {


   const content_OurClients = {
      blockTitle: "Our Clients",
      classForblockTitle: "text-sky-500 w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:py-14 py-10",
      classForImageContainer: "text-center p-4 md:p-16 shadow-md ",
      blockTitle: " Our Clients",
      classForblockTitle: " text-sky-500 w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:py-14 py-10 ",
      classForblockWrapper: "flex justify-center",
      classForblockContent: "bg-blue-500 rounded-xl p-4 md:p-16 shadow-md",
      classForblockImage: "flex flex-wrap justify-center md:space-x-16",
      classForCardImage: "w-32 h-32 sm:w-48 sm:h-48 rounded-full flex items-center justify-center",
      classForImageStyle: "w-full rounded-full",
      cardsArray: [
         { cardImage: '/images/generic/User.webp', altImg: 'ourTeam', cardTitle: 'Team Member-1', cardTitle_2: 'Asst. Manager' },
         { cardImage: '/images/generic/User.webp', altImg: 'ourTeam', cardTitle: 'Team Member-2', cardTitle_2: 'Asst. Manager' },
         { cardImage: '/images/generic/User.webp', altImg: 'ourTeam', cardTitle: 'Team Member-3', cardTitle_2: 'Asst. Manager' },
         { cardImage: '/images/generic/User.webp', altImg: 'ourTeam', cardTitle: 'Team Member-4', cardTitle_2: 'Asst. Manager' },
         { cardImage: '/images/generic/User.webp', altImg: 'ourTeam', cardTitle: 'Team Member-2', cardTitle_2: 'Asst. Manager' },

      ],
   };


   const content_LeftImgRightRepeatableBlocks = {
      blockTitle: "Block Title",
      classForLeftImageContainer: " text-center p-4 sm:p-8",
      blockTitle: "Block Title",
      classForblockTitle: "text-sky-500 w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:py-14 py-10 ",
      classForblockContent: "px-10 lg:px-20  xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
      blockContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imageSrc: "/images/generic/coming-soon-white.jpg",
      imgAlt: "ltImgRtcontent",
      classForblockContainer: "flex flex-col sm:flex-row p-4",
      classForImageContainer: "w-full sm:w-1/2 flex justify-center items-center mb-4 sm:mb-0",
      classForCardImage: "w-full h-96 sm:w-96 sm:h-96 bg-blue-500 border-8 border-gray relative",
      classForblockSubTitle: "w-full sm:w-1/2 p-4",
      classForSubTitle: "text-2xl font-bold mb-4 p-2",
      classForSubTitlePara: "text-gray-600 p-2",
      classForRightContainer: "w-1/2 p-2",
      classForRightContainer1: "w-100 rounded overflow-hidden shadow-lg m-4 bg-blue-500",
      classForRightinsideContainer: "flex",
      classForRightimageContainer: "bg-white border-8 p-8",

      classForRightimageTextContainer: "w-2/3 p-4 text-left",
      classForRightimageTitleContainer: "font-bold text-xl mb-2",
      classForRightimageTitleContainer: "text-gray-700 text-base",
      imgTitle: "Tilte",
      imgTitleText: "dvssssssssssssssssssssssssssssssssssssssssssssssssssssssss"


   }

   const content_CenterImgLeftRightRepeatableBlocks = {
      blockTitle: "Block Title",
      classForLeftImageContainer: " text-center p-4 sm:p-8",
      blockTitle: "Block Title",
      classForblockTitle: "text-sky-500 w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:py-14 py-10 ",
      classForblockContent: "px-10 lg:px-20  xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
      blockContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imageSrc: "/images/generic/coming-soon-white.jpg",
      imgAlt: "ltImgRtcontent",
      classForblockContainer: "flex flex-col sm:flex-row p-4",
      classForImageContainer: "w-full sm:w-1/3 flex justify-center items-center mb-4 sm:mb-0",
      classForCardImage: "w-72 h-72 sm:w-96 sm:h-96 bg-blue-500 border-8 border-gray relative mx-auto flex justify-center items-center",
      classForblockSubTitle: "w-full sm:w-1/2 p-4",
      classForSubTitle: "text-2xl font-bold mb-4 p-2",
      classForSubTitlePara: "text-gray-600 p-2",
      classForRightContainer: "w-1/2 p-2",
      classForRightContainer1: "w-100 rounded overflow-hidden shadow-lg m-4 bg-blue-500",
      classForRightinsideContainer: "flex",
      classForRightimageContainer: "bg-white border-8 p-8",
      classForContainer: "flex flex-wrap",
      classForLeftBlockContainer: "w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0 p-2",
      classForLeftContentContainer: "w-full rounded overflow-hidden shadow-lg mb-4 bg-blue-500",
      classForLeftContentinsideContainer: "w-2/3 p-4 text-right",
      classForLeftContenTitleStyle: "font-bold text-base sm:text-lg mb-2",
      leftTitle: "Title",
      leftSubTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      classForRightBlockContainer: "w-full sm:w-1/2 lg:w-1/3 p-2",
      classForRightContentContainer: "w-full rounded overflow-hidden shadow-lg mb-4 bg-blue-500",
      classForRightContentinsideContainer: "w-2/3 p-4 text-left",
      classForRightimageTextContainer: "w-2/3 p-4 text-left",
      classForRightimageTitleContainer: "font-bold text-xl mb-2",
      classForRightimageTitleContainer: "text-gray-700 text-base",



   }



   const rotating = false;
   return (
      <div className="bg-sky-100 ">



         <OurClients inputData={content_OurClients} />

         <LeftImgRightRepeatableBlocks inputData={content_LeftImgRightRepeatableBlocks} />
         {/* <CenterImgLeftRightRepeatableBlocks inputData={content_CenterImgLeftRightRepeatableBlocks} /> */}

      </div>
   )
}

export default page