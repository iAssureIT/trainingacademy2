"use client";
import React, { useState, useRef } from "react";

const BannerSmallBlocks = (props) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        const video = videoRef.current;
        console.log("isplay 24", isPlaying);
        if (isPlaying) {
            video.pause();
            setIsPlaying(false);
        } else {
            video.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className={props?.inputData?.bgImgCss || "grid md:z-10 py-5 bg-cover px-5 md:px-12 block bg-no-repeat max-w-full sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)] bg-[image:var(--smallImage-url)]"}
            style={{
                "--largeImage-url": props?.inputData?.bgImage ? `url(${props?.inputData?.bgImage})` : 'none',
                "--smallImage-url": props?.inputData?.smallBGImage ? `url(${props?.inputData?.smallBGImage})` : props?.inputData?.bgImage ? `url(${props?.inputData?.bgImage})` : 'none',
                backgroundSize: "100% 100%",
            }}>
            <div className="mx-1 md:mx-20 lg:mx-16 xl:mx-24 lg:-mt-24 h-auto">
                <div className="grid p-5 block bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl grid-cols-1 lg:grid-cols-4 lg:gap-4">
                    {props.inputData?.blockTitles.map((title, index) => (
                        <div key={index} className="bg-cover min-h-24 md:h-auto px-2 my-5 lg:my-0 py-4 block bg-no-repeat max-w-full sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)] bg-[image:var(--smallImage-url)]"
                            style={{
                                "--largeImage-url": props?.inputData[`bgImage${index + 1}`] ? `url(${props?.inputData[`bgImage${index + 1}`]})` : 'none',
                                "--smallImage-url": props?.inputData[`smallBGImage${index + 1}`] ? `url(${props?.inputData[`smallBGImage${index + 1}`]})` : props?.inputData[`bgImage${index + 1}`] ? `url(${props?.inputData[`bgImage${index + 1}`]})` : 'none',
                                backgroundSize: "100% 100%",
                            }}>
                            <div className="text-sm ml-28 md:ml-10 lg:ml-16 xl:ml-20 pr-5 lg:pr-0 text-right">
                                {title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BannerSmallBlocks;
