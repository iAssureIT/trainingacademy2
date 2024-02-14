"use client";
// import { Metadata } from "next";
import React, { useEffect } from "react";
import axios from "axios";
// import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import MenuBar from "@/templates/HeaderBlocks/MenuBar/MenuBar";
import Footer from "@/templates/FooterBlocks/Footer/Footer.js";
import Footer2 from "@/templates/FooterBlocks/Footer/Footer2";
import MenuBar2 from "@/templates/HeaderBlocks/MenuBar/MenuBar2";
// const inter = Inter({ subsets: ["latin"] });
// import getConfig                       from 'next/config';
import "./globals.css";

// const { publicRuntimeConfig } = getConfig();
// axios.defaults.baseURL = publicRuntimeConfig.API_BASE_URL; // not working

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
console.log("NEXT_PUBLIC_BASE_URL", process.env.NEXT_PUBLIC_BASE_URL)
axios.defaults.headers.post["Content-Type"] = "application/json";
const scrollToTop = () => window.scrollTo(0, 0);
const metadata = {
  title: "iAssure International Technologies Pvt. Ltd.",
  description:
    "iAssure International Technologies Pvt Ltd is a Pune, India based IT Services & Product Development company.",
};
const menuItems = [
  { label: "HOME", link: "/" },
  { label: "ABOUT ME", link: "#about" },
  // {
  //   label: "SERVICES",
  //   link: "/services",
  //   id: "dropdown",
  //   showSubMenu: "true",
  //   subMenu: [
  //     {
  //       id: "1",
  //       submenutitle: "Application Development",
  //       submenutiltleLink: "/service/type1",
  //       img: "/images/specific/MenuImages/iAssureIT-menu-icons/iAssureIT-menu-icon-2.webp",
  //       bigImg: "/images/specific/MenuImages/Application-Development/5.webp",
  //       NestedMenu: [
  //         {
  //           imageSrc:
  //             "/images/specific/MenuImages/Application-Development/1.webp",
  //           title: "Web Development",
  //           link: "/services/web-app-development",
  //           subTypes: [
  //             "Business Portal",
  //             "Web Application",
  //             " Corporate Website ",
  //           ],
  //         },
  //         {
  //           imageSrc:
  //             "/images/specific/MenuImages/Application-Development/2.webp",
  //           title: "Mobile App Development",
  //           link: "/services/mobile-app-development",
  //           subTypes: [
  //             "iOS Native",
  //             "Android Native",
  //             "Hybrid Apps",
  //             "Webview Apps",
  //           ],
  //         },
  //         {
  //           imageSrc:
  //             "/images/specific/MenuImages/Application-Development/3.webp",
  //           title: "eCommerce Online Store Development",
  //           link: "/services/e-comm-online-store-development",
  //           subTypes: [" D2C Store", " Order Management System"],
  //         },
  //         {
  //           imageSrc:
  //             "/images/specific/MenuImages/Application-Development/4.webp",
  //           title: "UI/UX development",
  //           link: "/services/ui-ux-development",
  //           subTypes: [],
  //         },
  //       ],
  //     },
  //     {
  //       id: "2",
  //       submenutitle: "Digital Transformation",
  //       img: "/images/specific/MenuImages/iAssureIT-menu-icons/iAssureIT-menu-icon-3.webp",
  //       bigImg: "/images/specific/MenuImages/Digital-Transformation/5.webp",
  //       NestedMenu: [
  //         {
  //           imageSrc:
  //             "/images/specific/MenuImages/Digital-Transformation/1.webp",
  //           title: "Application Modernization",
  //           link: "/services/application-modernization",
  //           subTypes: [],
  //         },
  //         {
  //           imageSrc:
  //             "/images/specific/MenuImages/Digital-Transformation/2.webp",
  //           title: "Enhance User Digital Experience",
  //           link: "/services/enhance-user-digital-experience",
  //           subTypes: [],
  //         },
  //         {
  //           imageSrc:
  //             "/images/specific/MenuImages/Digital-Transformation/3.webp",
  //           title: "Manual Documents to Digital Asset",
  //           link: "/services/manual-documents-to-digital-assets",
  //           subTypes: [],
  //         },
  //         {
  //           imageSrc:
  //             "/images/specific/MenuImages/Digital-Transformation/4.webp",
  //           title: "Develop Digital Strategy & Digital Applications",
  //           link: "/services/develop-digital-strategy-and-digital-applications",
  //           subTypes: [],
  //         },
  //       ],
  //     },
  //     {
  //       id: "3",
  //       submenutitle: "Robotic Process Automation",
  //       img: "/images/specific/MenuImages/iAssureIT-menu-icons/iAssureIT-menu-icon-5.webp",
  //       bigImg: "/images/specific/MenuImages/Robotic-Process-Automation/4.webp",
  //       NestedMenu: [
  //         {
  //           imageSrc:
  //             "/images/specific/MenuImages/Robotic-Process-Automation/1.webp",
  //           title: "Customer Service Automation",
  //           link: "/services/customer-service-automation",
  //           subTypes: [],
  //         },
  //         {
  //           imageSrc:
  //             "/images/specific/MenuImages/Robotic-Process-Automation/2.webp",
  //           title: "Document Processing & Report Automation",
  //           link: "/services/document-processing-and-report-automation",
  //           subTypes: [],
  //         },
  //         {
  //           imageSrc:
  //             "/images/specific/MenuImages/Robotic-Process-Automation/3.webp",
  //           title: "Data migration & entry",
  //           link: "/services/data-migration-entry",
  //           subTypes: [],
  //         },
  //       ],
  //     },
  //     {
  //       id: "4",
  //       submenutitle: "IT Infrastructure Management",
  //       img: "/images/specific/MenuImages/iAssureIT-menu-icons/iAssureIT-menu-icon-7.webp",
  //       bigImg:
  //         "/images/specific/MenuImages/IT-Infrastructure-Management/3.webp",
  //       NestedMenu: [
  //         {
  //           imageSrc:
  //             "/images/specific/MenuImages/IT-Infrastructure-Management/1.webp",
  //           title: "Infrastructure Architecture & Technology Selection",
  //           link: "/services/infrastructure-architech-selection",
  //           subTypes: [],
  //         },
  //         {
  //           imageSrc:
  //             "/images/specific/MenuImages/IT-Infrastructure-Management/2.webp",
  //           title: "IT Operations Management",
  //           link: "/services/it-operation-mgmt",
  //           subTypes: [],
  //         },
  //       ],
  //     },
  //     {
  //       id: "5",
  //       submenutitle: "Cyber Security",
  //       img: "/images/specific/MenuImages/iAssureIT-menu-icons/iAssureIT-menu-icon-9.webp",
  //       bigImg: "/images/specific/MenuImages/Cyber-Security/4.webp",
  //       NestedMenu: [
  //         {
  //           imageSrc: "/images/specific/MenuImages/Cyber-Security/1.webp",
  //           title: "Application & Information Security",
  //           link: "/services/information-security",
  //           subTypes: [],
  //         },
  //         {
  //           imageSrc: "/images/specific/MenuImages/Cyber-Security/2.webp",
  //           title: "Network Security",
  //           link: "/services/network-security",
  //           subTypes: [],
  //         },
  //         {
  //           imageSrc: "/images/specific/MenuImages/Cyber-Security/3.webp",
  //           title: "Cloud Security",
  //           link: "/services/cloud-security",
  //           subTypes: [],
  //         },
  //       ],
  //     },
  //     {
  //       id: "6",
  //       submenutitle: "Software Testing & QA",
  //       img: "/images/specific/MenuImages/iAssureIT-menu-icons/iAssureIT-menu-icon-11.webp",
  //       bigImg: "/images/specific/MenuImages/Software-Testing-QA/5.webp",
  //       NestedMenu: [
  //         {
  //           imageSrc: "/images/specific/MenuImages/Software-Testing-QA/1.webp",
  //           title: "Manual Testing",
  //           link: "/services/manual-functional-testing",
  //           subTypes: [" UI Testing, Functional Testing, Integration Testing"],
  //         },
  //         {
  //           imageSrc: "/images/specific/MenuImages/Software-Testing-QA/2.webp",
  //           title: "Automation Testing",
  //           link: "/services/automation-testing",
  //           subTypes: [" Unit Tests, Integration Tests, Regression Tests"],
  //         },
  //         {
  //           imageSrc: "/images/specific/MenuImages/Software-Testing-QA/3.webp",
  //           title: "Performance Testing",
  //           link: "/services/performance-testing",
  //           subTypes: [
  //             " Stress Testing",
  //             "Volume Testing",
  //             "Load Testing ",
  //             "Speed Testing ",
  //           ],
  //         },
  //         {
  //           imageSrc: "/images/specific/MenuImages/Software-Testing-QA/4.webp",
  //           title: "Security Testing",
  //           link: "/services/security-testing",
  //           subTypes: [
  //             " Vulnerability Scanning",
  //             "Security Scanning",
  //             "Penetration Testing",
  //             "Security Audit/ Review",
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  { label: "COURSES", link: "#courses" },
  { label: "TESTIMONIALS", link: "#testimonials" },
  { label: "CONTACT", link: "#footer" },
];

const menuItemsAfterLogin = [
  { label: "HOME", link: "/" },
  { label: "ABOUT US", link: "/about-us" },
  { label: "BLOGS", link: "/user/blogs" },
  { label: "TESTIMONIALS", link: "/user/testimonials" },
  { label: "TYN", link: "/user/thank-you-notes" },
  // { label: "CASE STUDY", link: "/case-study" },
  { label: "CONTACT", link: "/contact-us" },
];
const content_Menubar = {
  menuItemsList: menuItems,
  menuItemsAfterLoginList: menuItemsAfterLogin,
  logo: "/images/specific/trainingAcademy/iAssureIT-Training-Logo-white.webp",
  smallLogo: "/images/specific/trainingAcademy/iAssureIT-Training-Logo-white.webp",
  navCss:
    "mx-10 lg:mx-10 xl:mx-10 2xl:mx-24 flex flex-wrap items-center justify-between  py-4 ",
  classForLogoLink: "w-2/3 sm:w-1/3 md:w-1/6 lg:w-1/2 lg:w-auto",
  classForLogo: "h-full w-1/3 md:w-full lg:w-1/3 xl:w-1/2 ",
  showLoginbutton: false,
  customButton: false,
  showSubMenu: true,
  customButtonClass:
    "text-ceyone_blue shadow-xl flex h-5 lg:h-12 items-center bg-white hover:bg-white  focus:ring-4 focus:ring-white font-sm rounded text-xs lg:text-sm py-2 px-2 lg:px-3 dark:bg-white float-right dark:hover:bg-white focus:outline-none dark:focus:ring-white",
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
  { label: "About Me", link: "#about" },
  { label: "Courses", link: "#courses" },
  { label: "Testimonials", link: "#testimonials" },
  { label: "Contact Us", link: "#footer" },
  // { label: "Career", link: "/career/career1" },
];
const siteMapItems = [
  
  {
    label: "Web Technologies Mastery",
    link: "#courses",   
  },
  {
    label: "ReactJS Framework and Beyond",
    link: "#courses",    
  },
  {
    label: "NodeJS and Database Development",
    link: "#courses",    
  },
  {
    label: "Advanced Skills and Beyond",
    link: "#courses",   
  },
];



const content_Footer = {
  bannerClass:
    "relative bg-darkBlueC pt-0 lg:pt-10 block shadow-lg  bg-no-repeat  max-w-full   bg-center  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] bg-[length:100%_100%] md:bg-[length:100%_100%]",
  // bgImage: "/images/specific/Footer/Footer-1.webp",
  // smallBGImage: "/images/specific/Footer/Responsive-Footer-Design.webp",
  bgColor: "bg-ceyone_offWhite",
  logo: "/images/specific/trainingAcademy/iAssureIT-Training-Logo-white.jpeg",
  smallLogo: "/images/specific/trainingAcademy/iAssureIT-Training-Logo-white.jpeg",
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
  phone1: "+91 9022426944",
  email1: "training@iassureit.com",
  fbLink: "https://www.facebook.com/iAssureIT",
  linkedIn:
    "https://www.linkedin.com/company/iassure-international-technologies-pvt-ltd/?viewAsMember=true",
  // instagramLink: "https://www.instagram.com/",
  // telegramLink: "https://www.telegram.com/",
  twitterLink: "https://twitter.com/iAssure_IT",
  // youtubeLink: "https://www.youtube.com/",
  whatsup: "https://web.whatsapp.com/",
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
  copyrightText:
    '<span class="text-light font-normal">Copyright © <script>document.write(new Date().getFullYear())</script>, <span class="text-orangeColor hover:text-ftLink "><a href="https://iassureit.com/"  target="_blank" >iAssureIT</a></span> All Rights Reserved</span>',
  footerText:
    '<span class="text-light mr-1 mb-3">Designed & Developed By</span> <span class="  text-orangeColor font-bold left hover:text-ftLink "> <a href="/" target="_blank"> iAssure International Technologies Pvt. Ltd.</a></span>',
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
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <title>{metadata.title}</title>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js"
          async
        ></script>
        {/* <script src="lazysizes.min.js" async></script> */}
        <link rel="icon" href="/favicon.ico" sizes="any"></link>
        <link
          href="https://db.onlinewebfonts.com/c/5b0ba2e20d3d7e3fc30b60595f3702c2?family=Druk+Text+Bold+Trial"
          rel="stylesheet"
        ></link>
        <link
          rel="preload"
          fetchPriority="high"
          as="image"
          href="/images/specific/Services/MobileApp/Images/2.webp"
          type="image/webp"
        ></link>

        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,800;0,900;1,300;1,500;1,600;1,700;1,800&family=Open+Sans:ital,wght@0,500;0,700;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" as="style"></link>
         */}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        {/* <script src="//cdn.ckeditor.com/4.6.1/basic/ckeditor.js"></script> */}
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
          async
          src={
            "https://www.googletagmanager.com/gtag/js?id=" +
            process.env.REACT_APP_GOOGLE_ANALYTIC_KEY
          }
        ></script>
        {/* <script src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"></script> */}
        <script src="https://cdn.tailwindcss.com" async></script>
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11480106532"></script>
        
        
      </head>
      <body className={" bg-white"}>
        
        <MenuBar2 inputData={content_Menubar} />

        {children}

        <Footer inputData={content_Footer} />
        <Footer2 inputData={content_Footer2} />

        <div
          onClick={scrollToTop}
          className=" fixed bottom-5 right-5 rounded-full border border-orangeColor hover:border-2 hover:h-9 hover:px-2.5 hover:w-9 px-2 py-1 h-8 w-8 text-white bg-orangeColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]  cursor-pointer"
        >
          <i className="text-white fa-solid fa-angles-up"></i>
        </div>
      </body>
    </html>
  );
}
