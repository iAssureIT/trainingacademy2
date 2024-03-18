"use client";
import React, { useEffect } from "react";
const ThankYouPage = ({ data }) => {

    // useEffect(() => {
    //     const redirectTimeout = setTimeout(() => {
    //         window.location.href = "https://calendly.com/iassureit/discovery-call?back=1&month=2024-01";
    //     }, 4000);

    //     return () => clearTimeout(redirectTimeout);
    // }, []);

    return (
        <main className=" bg-white font-TerminaTest h-full z-4">
            <div className="h-auto pt-10 md:py-20 lg:py-20">
                <div className="bg-white my-4 mx-3 p-2 md:p-6 md:w-3/4 lg:w-1/2 xl:w-2/4 2xl:w-1/3 md:mx-auto border shadow-[0_3px_10px_rgb(0,0,0,0.2)] " >
                   <img src="/images/specific/trainingAcademy/checkMark.webp" className="mx-auto h-20 md:h-auto z-4 -mt-10 md:-mt-20 " />
                    <div className="text-center mt-10">
                        <h3 className="text-5xl md:text-8xl  text-blue-600  text-center font-GreatVibes   ">Thank You!</h3>
                        <p className=" my-5 text-lg md:text-2xl font-bold   "><span>We appreciate your decision to</span><br/> select us as your learning companion. </p>
                        <p className=" md:text-lg"><span>To become a part of our training</span><br/> WhatsApp group, kindly click on the provided link  </p>
                        <button className="my-5 px-1 md:py-1 md:px-2 h-16 md:h-auto  bg-green-500 md:text-center rounded-full hover:bg-blue-500">
                            {/* <i class="fa-brands fa-square-whatsapp"></i> */}
                            <a href={process.env.WHATSUP_GROUP_NAME} className="flex gap-4 overflow-auto px-1  md:px-1 text-lg my-auto  text-white font-semibold ">
                            <i className="fa-brands fa-whatsapp  text-4xl md:text-5xl mx-auto   "></i>
                             <span className="my-auto"> Click here to join the group</span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}



{/* PB added metaData */ }
// export async function generateMetadata({ params }, parent) {
//     try {
//         const apiUrl = process.env.BASEURL;
//         var url = '/thank-you-page'
//         const encodedURL = encodeURIComponent(url);
//         const request = await axios.get(apiUrl + '/api/seodetails/get/url/' + encodedURL);

//         const metaData = request.data;
//         // console.log("generateMetadata metaData", metaData);

//         return {
//             title: {
//                 absolute: metaData?.metaTagTitle,
//             },
//             description: metaData?.metaDescription,
//             alternates: {
//                 canonical: metaData?.canonicalUrl,
//             },
//             keywords: metaData?.keywords,
//         };
//     } catch (error) {
//         console.error('Error fetching metadata:', error);
//     }
// }
export default ThankYouPage;