"use client";
import React from 'react'
import LeftImgRightContent from '@/templates/ContentBlocks/LeftImgRightContent/LeftImgRightContent';
import LeftRightImgCenterContent from '@/templates/ContentBlocks/LeftRightImgCenterContent/LeftRightImgCenterContent';
// import ContactUs from '@/widgets/Contact-Us/Contact-Us';
// import ContactUs2 from '@/widgets/Contact-Us/ContactUs2';
import  ImageCarousel               from '@/templates/Carousel/ImageCarousel/ImageCarousel';
import TextCarousel                 from '@/templates/Carousel/AllTypeCarousel/Carousel';
const page = (props) => {
    const content_LeftImgRightContent={
        blockTitle          :"Left Image Right Content",
        blockContent        :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgSrc              :"/images/generic/coming-soon-white.jpg",
        imgAlt              :"ltImgRtcontent",
        classForblockWrapper:"p-5 md:p-20 h-auto ",
        classForblockTitle  :"text-center font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl",
        classForImageWrapper:"w-auto object-cover",
        classForContentWrap :"h-auto text-justify my-auto text-lg lg:text-xl",
        classForImage       :"object-cover w-full h-full top-0 left-0 rounded-xl"
    }
    const content_LtRtImgCenterContent={
        blockTitle          :"Left Right Image Center Content",
        blockContent        :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgSrc1              :"/images/generic/noImage.jpg",
        imgAlt1              :"ltImg",
        imgSrc2              :"/images/generic/noImage.jpg",
        imgAlt2              :"RtImg",
        classForblockWrapper:"p-5 md:p-20 h-auto bg-white",
        classForblockTitle  :"text-center font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl",
        classForImageWrapper:"w-auto object-cover",
        classForContentWrap :"h-auto text-justify my-auto text-lg lg:text-xl",
        classForImage       :"object-cover w-full h-full top-0 left-0 rounded-xl"
    }
    const content_ContactUs = {
        blockTitle          :"Contact Us",
        blockContent        :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        classForblockTitle  :"text-center font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl",
        classForContentWrap :"h-auto text-justify my-auto text-lg lg:text-xl mt-10 px-5 sm:px-16 md:px-20",
        locationPath        : `https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1074.5502142114376!2d73.82105751614164!3d18.500458802500418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSiddharth%20Tower%201%2C%20Sangam%20Press%20Road%2C%20Near%20Karishma%20Soc%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%20411029!5e0!3m2!1sen!2sin!4v1687351455565!5m2!1sen!2sin"`,
    }
    const content_ContactUs2 ={
        blockTitle          :"Contact Us",
        blockContent        :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        classForblockTitle  :"text-center font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl",
        classForContentWrap :"h-auto text-justify my-auto text-lg lg:text-xl mt-10 px-5 sm:px-16 md:px-20",
        gridWrapper         :"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 rounded-lg mt-5 md:mt-10 gap-10  ",
        Address :[
            {
              icon    : "fa-solid fa-location-dot",
              address : "Office No.801-804,Siddharth Tower1,Sangam Press Road, Near Karishma Soc, Kothrud, Pune, Maharashtra 411029",
            },
            {
              icon      : "fa-solid fa-mobile-screen",
              address   : "+91(20)25671495/25671496"
            },
            {
              icon    : "fa-regular fa-envelope",
              address : "dgoffice@rotary3131.org dganilparmar2223@gmail.com",
            }
              
          ],
        content         :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        locationPath    : `https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1074.5502142114376!2d73.82105751614164!3d18.500458802500418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSiddharth%20Tower%201%2C%20Sangam%20Press%20Road%2C%20Near%20Karishma%20Soc%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%20411029!5e0!3m2!1sen!2sin!4v1687351455565!5m2!1sen!2sin"`,
    }
    const carouselImages = {
      onlyBgImage         : true,
      showChangeButtons   : true,
      autoSlide           : true,
      className           : "relative",
      imgWrap             : "relative mb-10 flex items-center justify-center overflow-hidden p-20",
      imageCss            : "object-fit-cover",
      images: [
          {
              bgImage: '/images/generic/Image.webp',
          },
          {
              bgImage: '/images/generic/noImage.jpg',
          },
          {
              bgImage: '/images/generic/Image.webp',
          },
          {
              bgImage: '/images/specific/generic/noImage.jpg',

          },
      ],
  }
  const content_carousel2 = {
    videos : [
      "/images/videos/Banner-1.mp4",
      "/images/videos/iAssureIT-Website-banner.mp4",
      "/images/videos/iAssureIT-Website-banner1.mp4",
      "/images/videos/Banner-1.mp4",          
    ],
    images : [
      "/images/generic/5.jpg",
      "/images/generic/6.jpg",
      "/images/generic/7.jpg",
      "/images/generic/2.jpg",
      "/images/generic/5.jpg",
      "/images/generic/Image.webp",
      "/images/generic/Image.webp",
      "/images/generic/Image.webp",
      "/images/generic/Image.webp",
    ],
    txtBlkCss:"w-1/2 lg:w-1/3 object-cover bg-blue-300 gap-10 p-4 slide rounded-lg cursor-pointer",
    textBlock:[
      { content:"1 We are sure to make your dream come true. To make yoWe are sure to make your dream come true. To make yoWe are sure to make your dream come true. To make yoWe are sure to make your dream come true. To make yoWe are sure to make your dream come true. To make yoWe are sure to make your dream come true. To make yoWe are sure to make your dream come true. To make your dream a reality, you need to reach us",
        author:"abc xyz"
      },
      { content:"2 We are sure to make your dream come true. To make your dream a reality, you need to reach us",
        author:"pxw xyz"
      },
      { content:"3 We are sure to make your dream come true. To make your dream a reality, you need to reach us",
        author:"abc xyz"
      },
      { content:"4 We are sure to make your dream come true. To make your dream a reality, you need to reach us",
        author:"pxw xyz"
      },
      { content:"5 We are sure to make your dream come true. To make your dream a reality, you need to reach us",
        author:"abc xyz"
      },
      { content:"6 We are sure to make your dream come true. To make your dream a reality, you need to reach us",
        author:"pxw xyz"
      },
      { content:"We are sure to make your dream come true. To make your dream a reality, you need to reach us",
        author:"abc xyz"
      },
      { content:"7 We are sure to make your dream come true. To make your dream a reality, you need to reach us",
        author:"pxw xyz"
      },
    ]
  }
  return (
    <div className=''>
        <LeftImgRightContent        inputData={content_LeftImgRightContent} />
        <LeftRightImgCenterContent  inputData={content_LtRtImgCenterContent}/>
        {/* <ContactUs              inputData={content_ContactUs} />
        <ContactUs2                 inputData={content_ContactUs2} /> */}
        <ImageCarousel              inputData={carouselImages}/>
        <TextCarousel               inputData={content_carousel2} showVideos={true} showImages={false}/>
    </div>
  )
}

export default page;
