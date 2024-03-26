"use client";
import React, { useState, useRef } from "react";

const BannerSmallBlocks = (props) => {
       

    return (
        <div className={props?.inputData?.bgImgCss || "grid md:z-10 py-5 bg-cover px-5 md:px-12 block bg-no-repeat max-w-full sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)] bg-[image:var(--smallImage-url)]"}
            style={{
                "--largeImage-url": props?.inputData?.bgImage ? `url(${props?.inputData?.bgImage})` : 'none',
                "--smallImage-url": props?.inputData?.smallBGImage ? `url(${props?.inputData?.smallBGImage})` : props?.inputData?.bgImage ? `url(${props?.inputData?.bgImage})` : 'none',
                backgroundSize: "100% 100%",
            }}>
                <div className="mx-1 md:mx-20 lg:mx-16 xl:mx-12 2xl:mx-20 lg:-mt-24 h-auto">
                <div className="grid p-5 block bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl grid-cols-1 lg:grid-cols-4 lg:gap-4">
                    {props.inputData?.cardData.map((data, index) => (
                        <div key={index}  className={` flex md:grid md:grid-cols-3 group  rounded-lg min-h-24 md:h-auto px-2 my-5 lg:my-0 py-4    hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]  hover:font-bold hover:text-lg  gap-4 items-center hover:text-white bannerBlocks `}
                            >
                            <div className={` `}><img src={data.img} className={`${data.bgColor} rounded-full p-3  group-hover:fadeIn `} /></div>
                            <div className=" md:col-span-2 text-lg font-bold pr-5 lg:pr-0 text-left ">
                                {data.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="mx-1 md:mx-20 lg:mx-10 xl:mx-10 2xl:mx-12 lg:-mt-24 h-auto">
                <div className="grid p-5  bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl grid-cols-1 lg:grid-cols-4 lg:gap-4">
                    {props.inputData?.cardData.map((data, index) => (
                        <div key={index} className={` rounded-lg min-h-24 md:h-auto px-2 my-5 lg:my-0 py-4    hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]  font-bold  flex gap-4 items-center text-white hover:text-black  ${data.bgColor} `}
                            >
                            <div><img src={data.img} className="ml-1 rounded-full p-3 lg:p-1 xl:p-3 bg-white" draggable="false" /></div>
                            <div className="text-[1rem]  pr-5 lg:pr-0 text-left  font-bold">
                                {data.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default BannerSmallBlocks;
