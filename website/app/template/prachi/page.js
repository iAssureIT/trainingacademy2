import React from "react";
import LeftVideoRightContent from "@/templates/ContentBlocks/LeftVideoRightContent/LeftVideoRightContent";
import LeftContentRightVideo from "@/templates/ContentBlocks/LeftContentRightVideo/LeftContentRightVideo";
import LeftUserImageRightText from "@/templates/Carousel/LeftUserImageRightText/LeftUserImageRightText";
import TopTextImageRepeatBlocks from "@/templates/Carousel/TopTextImageRepeatBlocks/TopTextImageRepeatBlocks";
const page = () => {
  const content_LeftVideoRightContent = {
    block_id: "leftVideoRightContent",
    blockWrapperClasses: "bg-backgroundBlue w-full h-full p-5 lg:p-10",
    blockTitle: "Left Video Right Content",
    blockTitleClasses:
      "text-4xl lg:text-6xl font-black text-titleBlue mx-auto py-5 w-full text-center",
    blockSubWrapperClasses:
      "grid gap-4 lg:gap-10 p-5 lg:p-10 grid-cols-1 lg:grid-cols-2",
    blockContentClasses: "h-auto text-justify my-auto text-lg lg:text-xl",
    blockContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    video_id: "left_video",
    videoClass: "w-full h-full",
    videoUrl: "/images/videos/iAssureIT-Website-banner.mp4",
  };

  const content_LeftContentRightVideo = {
    block_id: "leftContentRightVideo",
    blockWrapperClasses: "bg-backgroundBlue w-full h-full p-5 lg:p-10",
    blockTitle: "Left Content Right Video",
    blockTitleClasses:
      "text-4xl lg:text-6xl font-black text-titleBlue mx-auto py-5 w-full text-center",
    blockSubWrapperClasses:
      "grid gap-4 lg:gap-10 p-5 lg:p-10 grid-cols-1 lg:grid-cols-2 ",
    blockContentClasses: "h-auto text-justify my-auto text-lg lg:text-xl",
    blockContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    video_id: "left_video",
    videoClass: "w-full h-full",
    videoUrl: "/images/videos/iAssureIT-Website-banner.mp4",
  };

  const content_LeftUserImageRightText = {
    block_id: "leftUserImageRightText",
    blockWrapperClasses: "bg-backgroundBlue w-full h-full p-5 lg:p-10",
    blockTitle: "Testimonials",
    blockTitleClasses:
      "text-4xl lg:text-6xl font-black text-titleBlue mx-auto py-5 w-full text-center",
    blockSubWrapperClasses: "grid gap-4 lg:gap-10 p-5 lg:p-10 grid-cols-1 ",
    blockContentClasses: "h-auto text-justify my-auto text-lg lg:text-xl",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/images/generic/profile-woman.jpg",
    name: "User Name",

    onlyBgImage: false,
    showChangeButtons: true,
    autoSlide: true,
    className: "relative",
    // imgWrap: "relative flex items-center justify-center overflow-hidden p-20",
    // imageCss: "object-fit-cover",

    testimonials: [
      {
        image: "/images/specific/generic/noImage.jpg",
        name: "name 1",
        testimonial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        image: "/images/specific/generic/noImage.jpg",
        name: "name 2",
        testimonial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        image: "/images/specific/generic/noImage.jpg",
        name: "name 3",
        testimonial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        image: "/images/specific/generic/noImage.jpg",
        name: "name 4",
        testimonial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
  };

  const content_TopTextImageRepeatBlocks = {
    showChangeButtons: true,
    autoSlide: true,
    blockTitle: "Testimonials",
    classForblockTitle:
      "text-sky-500 w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:py-14 py-10 ",
    classForNoOfCards:
      "px-10 lg:px-20  max-w-8xl text-center justify-evenly grid grid-cols-1 md:grid-cols-1 gap-x-4 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6",
    classForCards: "bg-sky-300 text-white p-10 mb-7 rounded-xl",
    classForCardTitle:
      "text-center font-bold text-xl md:text-xl lg:text-2xl p-3",
    classForCardTitle_2:
      "font-bold text-md text-primary dark:text-primary-400 p-5",
    classForCardImage: " p-2 h-24 w-24 rounded-full",
    classForblockContent:
      "px-10 lg:px-20  xl:pb-14 pb-10 h-auto text-justify my-auto text-md lg:text-lg justify-content",
    blockContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    cardsArray: [
      {
        cardImage: "/images/generic/noImage.jpg",
        altImage: "imageDescription",
        cardTitle: "Block - 1",
        cardTitle_2: "name 1",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        cardImage: "/images/generic/noImage.jpg",
        altImage: "imageDescription",
        cardTitle: "Block - 2",
        cardTitle_2: "name 2",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        cardImage: "/images/generic/noImage.jpg",
        altImage: "imageDescription",
        cardTitle: "Block - 3",
        cardTitle_2: "name 3",
        classForContent:
          "justify-content h-auto text-justify my-auto text-md lg:text-lg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      // {
      //   cardImage: "/images/generic/noImage.jpg",
      //   altImage: "imageDescription",
      //   cardTitle: "Block - 4",
      //   cardTitle_2: "name 4",
      //   classForContent:
      //     "justify-content h-auto text-justify my-auto text-md lg:text-lg",
      //   content:
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      // },
    ],
  };

  return (
    <div>
      <LeftVideoRightContent inputData={content_LeftVideoRightContent} />
      <LeftContentRightVideo inputData={content_LeftContentRightVideo} />
      <LeftUserImageRightText inputData={content_LeftUserImageRightText} />
      <TopTextImageRepeatBlocks inputData={content_TopTextImageRepeatBlocks} />
    </div>
  );
};

export default page;
