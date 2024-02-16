"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link';
import LandingPageModal from '@/components/Modal/landingPageModal';

const BannerSmallBlocks = (props) => {
    console.log("dd",props);
    var largeImageURL = props?.inputData?.bgImage;
    var largeImageURL1 = props?.inputData?.bgImage1;
    var largeImageURL2 = props?.inputData?.bgImage2;
    var largeImageURL3 = props?.inputData?.bgImage3;
    var largeImageURL4 = props?.inputData?.bgImage4;
    var smallImageURL = props?.inputData?.smallBGImage;
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
                        " grid z-10 py-5 bg-cover px-12 block  bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]"
                }
                style={{
                    '--largeImage-url': `url(${largeImageURL})`,
                    '--smallImage-url': `url(${smallImageURL ? smallImageURL : largeImageURL})`,
                    'backgroundSize': "100% 100%"
                }}

            >  
            <div class="mx-40 -mt-20 h-auto " >        
                <div class="grid p-5 block  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl grid-cols-4 gap-4">
                    <div class="bg-cover px-2 py-4 block bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]" 
                        style={{
                        '--largeImage-url': `url(${largeImageURL1})`,
                        // '--smallImage-url': `url(${smallImageURL ? smallImageURL : largeImageURL})`,
                        'backgroundSize': "100% 100%"
                    }}>
                        <div class="text-white font-xs ml-20">
                            Advanced Skills and Beyond
                        </div>
                    </div>
                    <div class="bg-cover px-2 py-4 block bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]" 
                    style={{
                        '--largeImage-url': `url(${largeImageURL2})`,
                        // '--smallImage-url': `url(${smallImageURL ? smallImageURL : largeImageURL})`,
                        'backgroundSize': "100% 100%"
                    }}> 
                        <div class="text-white font-xs ml-20">
                            Web Technologie Mastery
                        </div>
                    </div>
                    <div class="grid bg-cover px-2 py-4 block  bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]"
                    style={{
                        '--largeImage-url': `url(${largeImageURL3})`,
                        // '--smallImage-url': `url(${smallImageURL ? smallImageURL : largeImageURL})`,
                        'backgroundSize': "100% 100%"
                    }}> 
                        <div class="text-white font-xs ml-20">
                            ReactJS Framework and Beyond
                        </div>
                    </div>
                    <div class="grid bg-cover px-2 py-4 block bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]"
                    style={{
                        '--largeImage-url': `url(${largeImageURL4})`,
                        // '--smallImage-url': `url(${smallImageURL ? smallImageURL : largeImageURL})`,
                        'backgroundSize': "100% 100%"
                    }}> 
                        <div class="text-white font-xs ml-20">
                            NodeJS and Database Development
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BannerSmallBlocks;