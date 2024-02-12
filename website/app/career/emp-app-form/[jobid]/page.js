"use client";

import BgImgLeftContentRtImg from "@/templates/ContentBlocks/BgImgLeftContent/BgImgLeftContentRtImg";
import ApplyJobForm from "@/components/Job/ApplyJobForm";
import CustomHead from "@/templates/CustomHead/CustomHead";

export default function EmpAppForm(props,data) {   
    const job_id=props.params.jobid.split("/").pop();
    console.log("job_id ======",job_id);

    const content_Banner = {
        id: "careerPageBanner",
        bgImage: "/images/specific/Career/Images/2.webp",
        smallBGImage: "/images/specific/Career/Responsive-Images/iAssureIT-Career-1.webp",
        logo: "",
        h1Txt: "<h1>CAREER @ <br/>iAssureIT</h1>",
        h1TxtCss: " text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-8xl font-extrabold text-center md:text-left place-content-left justify-center content-left 2xl:!leading-[8rem] ",
         bgImgCss: " py-20 h-auto xl:h-auto md:py-32 xl:py-48 2xl:py-32 lazyload object-fit bg-cover bg-no-repeat relative lg:bg-[image:var(--largeImage-url)] bg-[image:var(--smallImage-url)] ",
        para: "We are creating digital experiences",
        paraCss: " lcamelcase text-normal text-center md:text-left text-sm md:text-3xl lg:text-2xl xl:text-2xl 2xl:text-4xl md:!leading-[2.3rem]",
        gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:grid-cols-2 py-10 md:py-20 lg:py-10 xl:py-0 2xl:py-20 h-auto md:h-full lg:h-full xl:h-full 2xl:h-full ",
        gridSubDivCss: " pb-32 md:pb-10 lg:pb-16 2xl:pb-48 my-auto text-white px-10 md:pl-16 lg:pl-10 xl:pl-12 2xl:pl-24",
        image: "/images/specific/Career/Images/3.webp",
        imageCss: ' w-2/3 xl:w-4/5 2xl:4/5 mx-auto my-auto object-fit lazyload place-content-center object-center ',
        imgTagcss: "lazyload -mt-20 lg:mt-5 2xl:-mt-44 ",
        borderColor: "border-darkBlue",
       }
    return (
        <div >
            <CustomHead
                title={data?data.metaTagTitle:""}
                description={data?data.metaDescription:""}
                keywords={data?data.keywords:""}
                canonicalUrl={data?data.canonicalUrl:""}
            />
            <BgImgLeftContentRtImg inputData={content_Banner} />
            <ApplyJobForm job_id={job_id}/>
        </div>
    )
}

EmpAppForm.getInitialProps = async () => {
    // Perform data fetching here (e.g., making API requests)
    var url ='/career/emp-app-form'
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










