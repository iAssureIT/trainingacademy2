"use client";
import React from "react";
import axios from "axios";
import BgImgLeftContentRtImg from "@/templates/ContentBlocks/BgImgLeftContent/BgImgLeftContentRtImg";
import Statistics from "@/templates/StatisticsBlocks/Statistics";
import AddressDetails from "@/widgets/Contact-Us/ContactDetails/AddressDetails";
import ContactUsForm from "@/widgets/Contact-Us/ContactDetails/ContactUsForm";
import Map from "@/widgets/Contact-Us/ContactDetails/Map";
import CustomHead from "@/templates/CustomHead/CustomHead";

const ContactUs = ({data}) => {
    const content_leftContentBgImg = {
        id: "FastTrack_Framework",
        bgImage: "/images/specific/Contact_Us/1.webp",
        smallBGImage: "/images/specific/Contact_Us/bgResponsive.webp",
        logo: "",
        h1Txt: "<h1>CONTACT US</h1>",
        h1TxtCss: " md:-mt-20 2xl:-mt-32  text-5xl md:text-4xl xl:text-6xl 2xl:text-7xl font-extrabold text-center md:text-left content-center  place-content-left  justify-center content-left ",
        bgImgCss:"lazyload object-fit bg-cover bg-no-repeat relative    lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        // bgImgCss: "  py-20 xl:h-[990px] lazyload object-fit bg-cover bg-no-repeat relative  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        // bgImgCss: "h-screen lazyload object-fit bg-cover bg-no-repeat relative  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  md:grid-cols-2     3xl:h-auto px-2 md:px-1 lg:px-20 2xl:px-32 py-10 md:py-20 md:py-auto 2xl:py-32",
        gridSubDivCss: " my-auto text-white  md:pl-6 md:pl-16 lg:pl-20 xl:pl-24 xxl:pl-40",
        image: "/images/specific/Contact_Us/2.webp",
        imageCss: ' mx-auto my-auto object-fit md:w-1/2 lg:w-auto lazyload place-content-bottom object-bottom ',
        imgTagcss: "lazyload      ",
        borderColor: "border-darkBlue",
    }
    const content_Statistics = {
        title: "GET IN TOUCH",
        subTitle: "Give us a call or drop by anything, we endeavor to answer all inquiries within 24 hours on a business day. We will happy to answer your questions.",
        bgImage: "",
        titleCss: "w-full mt-10 md:mt-20 lg:mt-2  text-center text-ceyone_black font-extrabold text-4xl lg:text-5xl ",
        subTitleCss: "text-center text-normal text-xl md:text-2xl xxl:text-3xl mx-5 lg:mx-72 mt-3",
        gridDivCss: "grid max-w-screen-xxl grid-cols-1 gap-8 p-4 mx-auto text-gray-900 lg:grid-cols-3 p-8 xxl:p-1",
        captionStyle: "text-ceyone_black mb-4 mt-5 xxl:mb-8 text-2xl xxl:text-3xl font-extrabold text-center",
        addressStyle: "md:h-20 text-ceyone_black font-normal text-center text-xl xxl:text-2xl ",
        gridSubDivCss: "grid grid-cols-1  items-center justify-center border-r-0 lg:border-r-2 border-gray-200 ",

        imgCss: "mx-auto",
        StatisticsList: [
            { icon: "/images/specific/Contact_Us/3.webp", caption: "HEAD OFFICE", address: "#1B, 2nd Floor, B3, Cerebrum IT Park Kalyani Nagar, Pune, Maharashtra 411014" },
            { icon: "/images/specific/Contact_Us/4.webp", caption: "PHONE", address: "<div><div class='flex place-content-center'><div class='w-14 text-left left'>Sales</div><div class='left'>: +91 8459748828</div></div><div class='flex place-content-center'></div></div>" },
            { icon: "/images/specific/Contact_Us/5.webp", caption: "EMAIL", address: "info@iassureit.com" },
        ],
        borderColor: "border-darkBlue",
        dash: "border-blue-700 mb-5 md:mb-10",
        url: "/about-us",
        urlName: "Read More",
        linkCss: "text-white underline font-bold text-lg md:text-xl mt-3"
    }
    const content_ContactUs = {
        blockTitle: "Contact Us",
        blockContent: "OUR LOCATIONS",
        classForblockTitle: "text-center font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl",
        classForContentWrap: "h-auto text-justify my-auto text-lg lg:text-xl mt-10 px-5 sm:px-16 md:px-20",
        gridWrapper: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 xl:px-60 2xl:px-80 z-0   rounded-lg lg:pt-16 lg:mt-20 gap-3 xl:gap-10 px-10 sm:px-8 md:px-10 2xl:px-32",
        Address: [
            {
                Title: "Pune (INDIA)",
                iconImage: "/images/specific/Contact_Us/3.webp",
                address: "#1B, 2nd Floor, B3, Cerebrum IT Park Kalyani Nagar, Pune, Maharashtra 411014",

            }
        ],
        content: "OUR LOCATIONS",
        locationPath: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.6527976967045!2d73.90869827574598!3d18.54458568255369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c220a4234a03%3A0xaacdd60fadf55f2c!2siAssure%20International%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1696849231056!5m2!1sen!2sin`,

    }
    const content_form = {
        sectionCss: "lg:col-span-2 xl:col-span-3 xl:col-start-1 2xl:col-start-1  lazyload object-fit  bg-cover bg-no-repeat relative  w-full mt-0  md:-mt-20 lg:-mt-52 z-10 md:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]",
        formTitle: "Connect With Us ",
        formTitleCss: "text-darkGray mb-5 text-xl  md:text-xl font-semibold text-center md:text-left md:mt-12",
        formcss: " px-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:shadow-none lg:px-5 pt-10 pb-10 md:pb-32 md:pt-20 xl:px-5 xl:pb-32 xl:pt-20 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 mx-auto",
        btnName: "Send Message",
        btnCss: "float-left flex gap-5 text-sm bg-blue-700 text-white rounded uppercase rounded-full py-3 px-5 font-bold my-auto ",
        bgImage:
            "/images/specific/Contact_Us/Contact_Us_Form_Bg/Contact_Us.webp",
        smallBGImage:
            "",
        bgImgCss:
            " ",
    }
    return (
        <main className="flex flex-col justify-between min-h-screen bg-white font-TerminaTest">
            {/* PB added metaData */}
            <CustomHead
                title={data?data.metaTagTitle:""}
                description={data?data.metaDescription:""}
                keywords={data?data.keywords:""}
                canonicalUrl={data?data.canonicalUrl:""}
            />
            <BgImgLeftContentRtImg inputData={content_leftContentBgImg} />
            <Statistics inputData={content_Statistics} />
            <div id="contactDetails" className={content_ContactUs?.gridWrapper ? content_ContactUs?.gridWrapper : 'gridWrapper'}>
                {/* <AddressDetails
                    Address={content_ContactUs.Address}
                    content={content_ContactUs.content}
                    contentCss="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 md:gap-5 xl:gap-24"
                    addStyle="text-center md:text-left py-3 md:py-0 md:col-span-4 lg:col-span-3 2xl:col-span-4 mt-5 xl:mt-2"
                /> */}
                <ContactUsForm inputData={content_form} />
            </div>z
            <Map
                dash="border-blue-700 mt-10 mb-0 md:-mt-28"
                pageTitle="OUR LOCATION"
                pageTitleCss="mt-10 md:-mt-24 mb-12 text-black w-full text-center font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl"

                mapCss="h-96 "
                locationPath="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.6527976967045!2d73.90869827574598!3d18.54458568255369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c220a4234a03%3A0xaacdd60fadf55f2c!2siAssure%20International%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1696849231056!5m2!1sen!2sin"
            />
        </main>
    )
}; 


//PB added metaData
ContactUs.getInitialProps = async () => {
    // Perform data fetching here (e.g., making API requests)
    var url ='/contact-us'
    const encodedURL = encodeURIComponent(url);
  
    try {
      const response = await axios.get('/api/seodetails/get/url/' + encodedURL);
      const data = response.data; // Access the response data directly
      return { data };
    } catch (error) {
      console.error("Error fetching:", error.message);
      return { data: null, error: error.message }; // Handle the error gracefully
    }
};
export default ContactUs;