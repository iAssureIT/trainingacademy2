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
            <div className="h-auto pt-10 md:py-20 lg:py-28">
                <div className="bg-white my-4 mx-3 p-2 md:p-6 md:w-3/4 lg:w-1/2 xl:w-2/4 2xl:w-1/3 md:mx-auto border shadow-[0_3px_10px_rgb(0,0,0,0.2)] " >
                    {/* <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
                        <path fill="currentColor"
                            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                        </path>
                    </svg> */}
                    <img src="/images/videos/check.gif" className="h-52 mx-auto z-4" />
                    <div className="text-center -mt-8">
                        <h3 className="text-3xl md:text-5xl  text-gray-900 font-semibold text-center">Thank You</h3>
                        <p className="text-gray-600 my-2 md:text-2xl">Thank you for your interest, we'll get back to you shortly.</p>
                        <p className=" md:text-xl"> Have a great day!  </p>
                        <button className="my-5 px-1 md:py-3 md:px-1 h-16 md:h-auto  bg-green-500 md:text-center rounded-lg">
                            {/* <i class="fa-brands fa-square-whatsapp"></i> */}
                            <a href={process.env.WHATSUP_GROUP_NAME} className="overflow-auto px-1  md:px-6 text-lg   hover:bg-indigo-500 text-white font-bold py-3">
                            Join the WhatsApp Group for detailed info
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