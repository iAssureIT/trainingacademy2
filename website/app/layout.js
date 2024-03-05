"use client";
import React, {$,useEffect } from "react";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "@/templates/FooterBlocks/Footer/Footer.js";
import Footer2 from "@/templates/FooterBlocks/Footer/Footer2";
import MenuBar2 from "@/templates/HeaderBlocks/MenuBar/MenuBar2";
import MenuBar from "@/templates/HeaderBlocks/MenuBar/MenuBar";

import "./globals.css";
import Navbar from "@/templates/HeaderBlocks/MenuBar/MenuTest";
// const { publicRuntimeConfig } = getConfig();
// axios.defaults.baseURL = publicRuntimeConfig.API_BASE_URL; // not working

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
const scrollToTop = () => {window.scrollTo(0, 0), behavior.scrollTo('smooth')};

var currentYear = new Date().getFullYear();

const metadata = {
  title: "iAspire IT Training Academy",
  description:
    "iAssure International Technologies Pvt Ltd is a Pune, India based IT Services & Product Development company.",
};
const menuItems = [
  { label: "HOME", link: "/" },
  { label: "ABOUT", link: "#about" },  
  { label: "COURSES", link: "#course1" },
  { label: "TESTIMONIALS", link: "#testimonials" },
  { label: "CONTACT", link: "#footer" },
];

const menuItemsAfterLogin = [
  { label: "HOME", link: "/" },
  { label: "ABOUT", link: "#about" },  
  { label: "COURSES", link: "#course1" },
  { label: "TESTIMONIALS", link: "#testimonials" },
  { label: "CONTACT", link: "#footer" },
];
const content_Menubar = {
  menuItemsList: menuItems,
  menuItemsAfterLoginList: menuItemsAfterLogin,
  logo: "/images/specific/trainingAcademy/White-Logo.png",
  smallLogo: "/images/specific/trainingAcademy/White-Logo.png",
  navCss:
    "mx-10 lg:mx-10 xl:mx-10 2xl:mx-24 flex flex-wrap items-center justify-between  py-1 ",
  classForLogoLink: "w-2/3 sm:w-1/3 md:w-1/6 lg:w-1/4 xl:w-auto",
  classForLogo: "h-full w-full md:w-full ", 
  showLoginbutton: false,
  customButton: false,
  showSubMenu: true,
  customButtonClass:
    "text-ceyone_blue shadow-xl flex h-5 lg:h-12 items-center bg-white hover:bg-white  focus:ring-4 focus:ring-white font-sm rounded text-xs lg:text-sm py-2 px-2 lg:px-3  float-right  focus:outline-none ",
  customButtonIcon: "",
  customButtonTitle: "Test Ride",
  customButtonTitleClass: "uppercase font-bold text-xs lg:text-sm",
  bgImageCss: "w-full 2xl:w-4/5 xxl:!w-auto h-auto object-cover ",
  bigImageAlt: "BigImage",
  gridCss:
    "grid grid-cols-1  lg:grid-cols-3   xl:grid-cols-3 2xl:grid-cols-3 xxl:!grid-cols-2 gap-10",
  repeatedBlkCss: " shadow-none flex flex-start py-2 text-sm md:py-2 ",
  imgCss:
    "flex-none shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] h-auto hidden lg:block ml-10 my-auto rounded mr-3 md:mr-10 object-cover",
  titleCss: "font-semibold text-sm sm:text-md mb-2 hover:text-gray-500  ",
  desCss: "text-gray-700 text-xs sm:text-base overflow-hidden",
  linkCss: "float-right px-4 text-skyBlue",
};
const footerMenuItems = [
  { label: "Home", link: "/" },
  { label: "About", link: "#about" },
  { label: "Courses", link: "#course1" },
  { label: "Testimonials", link: "#testimonials" },
  { label: "Contact Us", link: "#footer" },
];
const siteMapItems = [  
  {
    label: "Web Technologies Mastery",
    link: "#course1",   
  },
  {
    label: "ReactJS Framework and Beyond",
    link: "#course2",    
  },
  {
    label: "NodeJS and Database Development",
    link: "#course3",    
  },
  {
    label: "Advanced Skills and Beyond",
    link: "#course4",   
  },
];

const content_Footer = {
  bannerClass:
    "relative bg-darkBlueC pt-0 lg:pt-10 block shadow-lg  bg-no-repeat  max-w-full   bg-center  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] bg-[length:100%_100%] md:bg-[length:100%_100%]",
  // bgImage: "/images/specific/Footer/Footer-1.webp",
  // smallBGImage: "/images/specific/Footer/Responsive-Footer-Design.webp",
  bgColor: "bg-ceyone_offWhite",
  logo: "/images/specific/trainingAcademy/White-Logo.png",
  smallLogo: "/images/specific/trainingAcademy/White-Logo.png",
  logoCss: "w-1/2 md:w-1/3 xl:w-2/3  lg:mx-auto   ",
  // icon: "/images/specific/Footer/Footer_Icon.webp",
  titleCss:"text-orangeColor",
  titleCss: "mb-6 text-xl xxl:text-xl font-extrabold  underline  text-light",
  title1: "MENU",
  title2: " COURSES",
  title3: "ADDRESS ",
  // title4: "Our Awards",
  footerList: footerMenuItems,
  sitemapList: siteMapItems,
  // sitemapList1: siteMapItems1,
  addLine1: "# 1B, 2nd Floor, B3",
  addLine2: " Cerebrum IT Park Kalyani Nagar",
  addLine3: "Pune, Maharashtra 411014",
  phone1: "+91 7770003690",
  email1: "info@iaspireit.com",
  fbLink: "https://www.facebook.com/iAspireIT",
  linkedIn:
    "https://www.linkedin.com/company/iaspireit-training-academy",
  instagramLink: "https://www.instagram.com/iaspireit/",
  // telegramLink: "https://www.telegram.com/",
  // twitterLink: "https://twitter.com/iAssure_IT",
  youtubeLink: "https://www.youtube.com/channel/UC_s9iDOZbddFHktYVSqfthQ",
  // whatsup: "https://web.whatsapp.com/",
  iconColor: "text-light",
  // website: '<span class="text-light font-extrabold"> www.iassureit.com</span>',
  // copyrightText:
  //   '<span class="text-light font-normal">Copyright © 2023, iAssureIT All Rights Reserved</span>',
  // footerText:
  //   '<div class="text-light mr-1 mb-3">Designed & Developed By</div> <div class="text-light font-bold left"> <a href="/" target="_blank"> iAssure International Technologies Pvt. Ltd.</a></div>',
  // btnName: "CLICK TO CONTACT",
  // btnUrl: "/contact-us",
  // btnClass:
  //   " text-blue-600 bg-white hover:border hover:border-2 border-blue-300 rounded-full p-2 md:p-3 md:px-4 px-4 text-xs font-bold ",
  contentImg: "/images/specific/Footer/Laurel-wreath.webp",
  classForAwards:
    "relative text-light font-bold bg-cover text-center h-28 md:h-32 py-5 px-10 lg:px-20 xl:px-24 2xl:px-24 text-xs md:text-sm block bg-no-repeat  max-w-full xl:w-3/5 2xl:w-1/4  sm:bg-cover bg-center mb-5",
  awardData: [
    "TOP 50 BRAND FUTURE",
    "COMPANY OF THE YEAR 2018",
    "THE MOST PROMISING IT COMPANY OF 2018",
    "THE MOST INNOVATIVE IT COMPANY  2019",
  ],
};
const content_Footer2 = {
  bgImgCss:
    "relative block shadow-lg  bg-no-repeat  max-w-full   bg-center  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] bg-[length:100%_100%] md:bg-[length:100%_100%]",
  bgImage: "/images/specific/Footer/Footer-2.webp",
  smallBGImage: "/images/specific/Footer/Footer-2.webp",
  copyrightText:'<span class="text-light font-normal">Copyright © ' + currentYear + ', <span class="text-orangeColor hover:text-ftLink "><a href="/" target="_blank" >iAspireIT</a></span> All Rights Reserved</span>',
  footerText:
    '<span class="text-light mr-1 mb-3">Designed & Developed By</span> <span class="  text-orangeColor font-bold left hover:text-ftLink "> <a href="https://iassureit.com/" target="_blank"> iAssure International Technologies Pvt. Ltd.</a></span>',
};
export default function RootLayout({ children }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", process.env.REACT_APP_GOOGLE_ANALYTIC_KEY);
    gtag('config', 'AW-11480106532');
    gtag('event', 'conversion', {'send_to': 'AW-11480106532/hWDtCOXd_4oZEKSMkuIq'});
  }, []);

  return (
    <html lang="en" className='scroll-smooth'  suppressHydrationWarning={true}>
      <head>
        <title>{metadata.title}</title>        
        <link rel="icon" href="/favicon.ico" sizes="any"></link>        
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,500;0,700;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        ></link>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        {/* <meta
          name={metadata.title}
          content="iAssure International Technologies Pvt Ltd is a Pune, India based IT Services & Product Development company."
         /> */}
        <meta
          name="google-site-verification"
          content="V5Z5wlhvCU0Ix_33kkSekq7poDuHk4uK3MuZuN2lzOs"
        />
        <script
          async defer
          src={
            "https://www.googletagmanager.com/gtag/js?id=" +
            process.env.REACT_APP_GOOGLE_ANALYTIC_KEY
          }
        ></script>
        {/* <script src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"></script> */}
        <script defer src="https://cdn.tailwindcss.com" async ></script>
          
        {/* <!-- Google tag (gtag.js) --> */}
        <script async defer src="https://www.googletagmanager.com/gtag/js?id=AW-11480106532"></script>        
       </head>
      <body className={" bg-white"}>
        
        {/* <MenuBar2 inputData={content_Menubar} /> */}
        <MenuBar inputData={content_Menubar} />
{/* <Navbar/> */}
        {children}

        <Footer inputData={content_Footer} />
        <Footer2 inputData={content_Footer2} />

        <div
          onClick={scrollToTop}
          className=" fixed bottom-5 right-5 rounded-full border border-orangeColor hover:border-2 hover:h-9 hover:px-2.5 hover:w-9 px-2 py-1 h-8 w-8 text-white bg-orangeColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]  cursor-pointer"
        >
          <i className="text-white fa-solid fa-arrow-up"></i>
        </div>
      </body>
    </html>
  );
}