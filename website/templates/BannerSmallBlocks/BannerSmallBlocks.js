"use client";
import React, { useState, useRef, useEffect } from "react";

const BannerSmallBlocks = (props) => {
    console.log("dd",props);
    var largeImageURL = props?.inputData?.bgImage;
    var largeImageURL1 = props?.inputData?.bgImage1;
    var largeImageURL2 = props?.inputData?.bgImage2;
    var largeImageURL3 = props?.inputData?.bgImage3;
    var largeImageURL4 = props?.inputData?.bgImage4;
    var smallImageURL = props?.inputData?.smallBGImage;
    var smallImageURL1 = props?.inputData?.smallBGImage1;
    var smallImageURL2 = props?.inputData?.smallBGImage2;
    var smallImageURL3 = props?.inputData?.smallBGImage3;
    var smallImageURL4 = props?.inputData?.smallBGImage4;
    const data = props?.inputData?.pageTitle;
    const [isModalOpen, setModalOpen] = useState(false);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    
    const togglePlay = () => {
        const video = videoRef.current;
        console.log("isplay 24", isPlaying)
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }


    };
    return (
        <div
                className={
                    props?.inputData?.bgImgCss
                        ?
                        props?.inputData?.bgImgCss
                        :
                        " grid  md:z-10 py-5 bg-cover px-5 md:px-12 block  bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]"
                }
                style={{
                    '--largeImage-url': `url(${largeImageURL})`,
                    '--smallImage-url': `url(${smallImageURL ? smallImageURL : largeImageURL})`,
                    'backgroundSize': "100% 100%"
                }}

            >  
            <div class="mx-1 md:mx-20 lg:mx-24 lg:-mt-24 h-auto " >        
                <div class="grid p-5 block bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl grid-cols-1 lg:grid-cols-4 lg:gap-4">
                    <div class="bg-cover min-h-24 md:h-auto px-2 my-5 lg:my-0 py-4 block bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]" 
                        style={{
                        '--largeImage-url': `url(${largeImageURL1})`,
                        '--smallImage-url': `url(${smallImageURL1 ? smallImageURL1 : largeImageURL1})`,
                        'backgroundSize': "100% 100%"
                    }}> 
                        <div class="text-white text-sm ml-28 md:ml-10 lg:ml-16 xl:ml-20 pr-5 lg:pr-0 text-right">
                            Advanced Skills and Beyond
                        </div>
                    </div>
                    <div class="bg-cover min-h-24 md:h-auto px-2 my-5 lg:my-0 py-4 block bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]" 
                    style={{
                        '--largeImage-url': `url(${largeImageURL2})`,
                        '--smallImage-url': `url(${smallImageURL2 ? smallImageURL2 : largeImageURL2})`,
                        'backgroundSize': "100% 100%"
                    }}> 
                        <div class="text-white text-sm ml-28 md:ml-10 lg:ml-16 xl:ml-20 pr-5 lg:pr-0 text-right">
                            Web Technologie Mastery
                        </div>
                    </div>
                    <div class="bg-cover min-h-24 md:h-auto px-2 my-5 lg:my-0 py-4 block  bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]"
                    style={{
                        '--largeImage-url': `url(${largeImageURL3})`,
                        '--smallImage-url': `url(${smallImageURL3 ? smallImageURL3 : largeImageURL3})`,
                        'backgroundSize': "100% 100%"
                    }}> 
                        <div class="text-white text-sm ml-28 md:ml-10 lg:ml-16 xl:ml-20 pr-5 lg:pr-0 text-right">
                            ReactJS Framework and Beyond
                        </div>
                    </div>
                    <div class="bg-cover min-h-24 md:h-auto px-2  my-5 lg:my-0 py-4 block bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]"
                    style={{
                        '--largeImage-url': `url(${largeImageURL4})`,
                        '--smallImage-url': `url(${smallImageURL4 ? smallImageURL4 : largeImageURL4})`,
                        'backgroundSize': "100% 100%"
                    }}> 
                        <div class="text-white text-sm ml-28 md:ml-10 lg:ml-16 xl:ml-20 pr-5 lg:pr-0 text-right">
                            NodeJS and Database Development
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BannerSmallBlocks;