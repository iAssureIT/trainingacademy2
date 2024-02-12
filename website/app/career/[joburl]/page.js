"use client";
import React from "react";
import BgImgLeftContentRtImg from "@/templates/ContentBlocks/BgImgLeftContent/BgImgLeftContentRtImg";
import JobDetailPage from "@/components/Job/JobDatailPage";
import CustomHead from "@/templates/CustomHead/CustomHead";

export default function jobPage( props) {

    const job_id=props.params.joburl.split("-").pop();
    console.log("props.params.blogurl ======",props.params.joburl);
    console.log("job_id ======",job_id);
    const content_Banner = {
        id: "careerPageBanner",
        bgImage: "/images/specific/Career/Images/2.webp",
        smallBGImage: "/images/specific/Career/Responsive-Images/iAssureIT-Career-1.webp",
        logo: "",
        h1Txt: "<h1>CAREER @ <br/>iAssureIT</h1>",
        h1TxtCss: " text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-8xl font-extrabold text-center md:text-left place-content-left justify-center content-left 2xl:!leading-[8rem] ",
        // hTxtLine1: "APPLICATIONS FOR BFSI ",
        // h1TxtLine1Css: " outline-title font-DrukText text-4xl md:text-5xl lg:text-4xl xl:text-6xl 2xl:text-6xl text-left md:text-left place-content-left justify-center content-left md:mb-5 font-[500] ",
        // h1TxtLine2: "Revolutionize Your Business With Scalable App Solutions",
        // h1TxtLine2Css: "font-DrukText lcamelcase text-normal text-left md:text-left text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-4xl md:!leading-[3.1rem] bg-white text-darkGray mx-auto px-auto px-1 inline-block mb-5 mt-3 text-btnBlue",
        bgImgCss: " py-20 h-auto xl:h-auto md:py-32 xl:py-48 2xl:py-32 lazyload object-fit bg-cover bg-no-repeat relative lg:bg-[image:var(--largeImage-url)] bg-[image:var(--smallImage-url)] ",
        para: "We are creating digital experiences",
        paraCss: " lcamelcase text-normal text-center md:text-left text-sm md:text-3xl lg:text-2xl xl:text-2xl 2xl:text-4xl md:!leading-[2.3rem]",
        // gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:grid-cols-2 lg:h-screen xl:h-screen h-screen ",
        gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:grid-cols-2 py-10 md:py-20 lg:py-10 xl:py-0 2xl:py-20 h-auto md:h-full lg:h-full xl:h-full 2xl:h-full ",
        gridSubDivCss: " pb-32 md:pb-10 lg:pb-16 2xl:pb-48 my-auto text-white px-10 md:pl-16 lg:pl-10 xl:pl-12 2xl:pl-24",
        image: "/images/specific/Career/Images/3.webp",
        imageCss: ' w-2/3 xl:w-4/5 2xl:4/5 mx-auto my-auto object-fit lazyload place-content-center object-center ',
        imgTagcss: "lazyload -mt-20 lg:mt-5 2xl:-mt-44 ",
        borderColor: "border-darkBlue",
        // url: "/contact-us/#contactDetails",
        // urlName: "Let's Talk!",
        // linkCss: " w-fit text-btnBlue text-center font-bold text-lg md:text-xl lg:text-sm xl:text-lg 2xl:text-xl py-2 px-10 2xl:px-6 mt-3 lg:mt-10 border rounded btn bg-offWhite hover:bg-offWhite hover:text-black",
        // linkIconCss: "hidden",
        // compId:"contactDetails",

    }
    return (
        <div className="bg-white   border rounded-md">
            
            {/* PB added metatags */}
            {props.data && (
                <CustomHead
                title={props.data?props.data.metaTagTitle:""}
                description={props.data?props.data.metaDescription:""}
                keywords={props.data?props.data.keywords:""}
                canonicalUrl={props.data?props.data.canonicalUrl:""}
                />
            )}
            <BgImgLeftContentRtImg inputData={content_Banner} />
            <JobDetailPage job_id={job_id} />
        </div>
    );
}

jobPage.getInitialProps = async (ctx)=>{
    var joburl = encodeURIComponent(ctx.query.joburl);
 
    console.log("joburl => |"+blogUrl+"|",ctx.query.joburl);
    var url = "/career/"+joburl
    const encodedURL = encodeURIComponent(url);
    try {
        const seoresponse = await axios.get('/api/seodetails/get/url/' + encodedURL);
       var returnData = { 
            joburl:joburl,
            data : seoresponse.data
        };
        return returnData;
    } catch (error) {
        console.error('Error fetching:', error.message);
        return { data: null };
    }
}
