"use client";
import React, { useState } from "react";
import BgImgLeftContentRtImg from "@/templates/ContentBlocks/BgImgLeftContent/BgImgLeftContentRtImg";
import LandingPageStudEnrollModal from '@/components/StudentEnrollment/LandingPageStudEnrollModal';

const Block1 = ({ data }) => {
    const content_FirstBlock = {
		id: "Banner_Block",
		h1Txt:
			"<span class='text-2xl lg:text-4xl'>India’s the most Powerful & the most appreciated 3 Hours LIVE Workshop</span><br/><br/><br/><span class='font-bold text-lg md:text-xl lg:text-3xl xl:text-5xl 2xl:text-3xl'>HOW TO GET ENTRY & HIGH SALARY JOB IN IT INDUSTRY?</span><br/><br/><br/><span class='text-2xl lg:text-4xl'>Only for IT Industry Aspirants. Don’t miss this workshop if you want to make a great career in IT Industry</span>",
		bgImgCss:
			"lazyload z-0 object-fit bg-[#6600cc] bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
		h1TxtCss: "mt-10 md:mt-0 3xl:mt-20 text-center",
		gridCss:
            "grid place-content-center h-full content-center",
        gridSubDivCss:"text-white my-auto text-center xs:text-left px-10 py-5",
		
    };
    
    const content_Block2 = {
		id: "Block2",
		h1Txt:
			"<span class='font-bold text-black text-3xl mx-auto'>Who should attend this Workshop?</span><hr class='w-1/5 mx-auto border-blue-400 border'/><br/><br/><ul class='list-disc text-left text-2xl'><li>Engineering Graduates – BE / BTECH / ME / MTECH</li><li>Any Engineering Streams – IT / Comp Sc / Mechanical / Production / Electionics / Electrical / Civil / Chemical etc</li><li>Science Graduates – BSC / BCA / MSC / MCA </li><li>Anyone who wants to enter into IT Industry from other industries</li></ul><br/>",
		bgImgCss:
			"lazyload z-0 object-fit bg-[#ffcc99] bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
		h1TxtCss: "mt-10 md:mt-0 3xl:mt-20",
		gridCss:
            "grids h-full",
        gridSubDivCss:"text-black my-auto text-center xs:text-left px-10 py-5",
		modalId: "UnlockPModal",
		modalDisplay: "true",
		modalUrlName: "Secure Your Seat Now",
		modalBtnCss: "w-fit mx-auto md:mb-10 lg:mb-0 text-white text-center font-bold text-sm py-2 lg:py-3 px-8 lg:px-12 mt-3 lg:mt-5 btn bg-red-600 hover:bg-offWhite hover:text-black cursor-pointer"

    };
    
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className=" s">
            {isModalOpen && <LandingPageStudEnrollModal modalId={"DownloadBrochure"} />}
            <BgImgLeftContentRtImg inputData={content_FirstBlock} />
            <BgImgLeftContentRtImg inputData={content_Block2} />
        </div>
    )
}
export default Block1;