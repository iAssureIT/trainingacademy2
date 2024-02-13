"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link';
import LandingPageModal from '@/components/Modal/landingPageModal';

const BgImgLeftContentRtImg = (props) => {
    var largeImageURL = props?.inputData?.bgImage;
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
        <div id={props?.inputData?.id} >
            {isModalOpen && <LandingPageModal modalId={props?.inputData?.modalId ? props?.inputData?.modalId : "loginModal"} />}
            {/* <div className={props?.inputData?.bgImgCss ? props?.inputData?.bgImgCss : "relative bg-cover p-12 block shadow-lg  bg-no-repeat  max-w-full  sm:bg-cover bg-center "} style={{ backgroundImage: `url(${imageURL})`, backgroundSize: "100% 100%" }}> */}
            <div
                className={
                    props?.inputData?.bgImgCss
                        ?
                        props?.inputData?.bgImgCss
                        :
                        " bg-cover p-12 block  shadow-lg  bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]"
                }
                style={{
                    '--largeImage-url': `url(${largeImageURL})`,
                    '--smallImage-url': `url(${smallImageURL ? smallImageURL : largeImageURL})`,
                    'backgroundSize': "100% 100%"
                }}

            >
                {
                    props?.inputData?.pageTitle ?
                        <div className={props?.inputData?.pageTitleCss}>

                            {props?.inputData?.dash ?
                                <div className="w-full mb-4">
                                    <ul className="place-content-center flex flex-wrap">
                                        <li className={"dash1 " + props.inputData.dash}></li>
                                        <li className={"dash2 " + props.inputData.dash}></li>
                                        <li className={"dash3 " + props.inputData.dash}></li>
                                    </ul>
                                </div>
                                :
                                null
                            }
                            <p className={props?.inputData?.pageTitleCss ? props?.inputData?.pageTitleCss : "block font-extrabold uppercase text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl"} dangerouslySetInnerHTML={{ __html: data }} ></p>
                        </div>
                        :
                        null
                }
                {props.inputData?.blockContent && (
                    <div className={props.inputData?.classForblockContent}
                        dangerouslySetInnerHTML={{ __html: props.inputData?.blockContent }}></div>
                )}


                <div className={props?.inputData?.gridCss ? props?.inputData?.gridCss : " grid grid-cols-1  sm:grid-cols-2  md:grid-cols-2   lg:grid-cols-2 2xl:grid-cols-2  xl:grid-cols-2 h-full w-full content-center "}>
                    <div className={props?.inputData?.gridSubDivCss ? props?.inputData?.gridSubDivCss : "  text-white xs:pl-2 sm:pl-10 lg:pl-20 xl:pl-24 xxl:pl-40 my-auto text-center xs:text-left  py-10 sm:py-0 "}>
                        {
                            props?.inputData?.logo
                                ?
                                <img className={props?.inputData?.logoCss ? props?.inputData?.logoCss + " lazyload " : "lazyload "} src={props?.inputData?.logo} data-src={props?.inputData?.logo} alt="logo " />
                                :
                                null
                        }
                        {
                            props?.inputData?.h1Txt
                                ?
                                <div className={props?.inputData?.h1TxtCss}
                                    dangerouslySetInnerHTML={{
                                        __html: props?.inputData?.h1Txt,
                                    }}></div>
                                :
                                null
                        }
                        {
                            props?.inputData?.h1TxtLine1
                                ?
                                <div className={props?.inputData?.h1TxtLine1Css ? props?.inputData?.h1TxtLine1Css : ""}
                                    dangerouslySetInnerHTML={{
                                        __html: props?.inputData?.h1TxtLine1,
                                    }}></div>
                                :
                                null
                        }
                        {
                            props?.inputData?.h1TxtLine2
                                ?
                                <h2 className={props?.inputData?.h1TxtLine2Css ? props?.inputData?.h1TxtLine2Css : ""}>{props?.inputData?.h1TxtLine2}</h2>
                                :
                                null
                        }
                        {
                            props?.inputData?.para
                                ?
                                <p className={props?.inputData?.paraCss ? props?.inputData?.paraCss : "mb-6 text-xl  font-normal  text-justify lg:w-auto"}
                                    dangerouslySetInnerHTML={{ __html: props?.inputData?.para }} >
                                </p>
                                :
                                null
                        }
                        {
                            props?.inputData?.listTitle
                                ?
                                <div className='lg:mt-20 xl:mt-28'>
                                    <div className='flex  gap-4'>
                                        <div className='bg-white rounded p-2 sm:p-1'>
                                            <img src="/images/specific/Home/Icons/Chassis-icon.webp " className="lazyload " alt="logo" />
                                        </div>
                                        <h2 className="text-3xl  mt-2 lg:text-4xl  xl:text-4xl font-extrabold text-white ">{props?.inputData?.listTitle}</h2>
                                    </div>
                                    <ul className="max-w-md space-y-1 list-disc list-outside pl-20 xs:px-20">
                                        <li className='text-lg sm:text-xl lg:text-4xl mt-2 text-left'>
                                            {props?.inputData?.listTxt}
                                        </li>
                                    </ul>
                                </div>
                                :
                                null
                        }
                        {
                            props?.inputData?.urlName
                                ?
                                <div className={props?.inputData?.linkCss ? props?.inputData?.linkCss : "text-white hidden"}>
                                    <Link href={props?.inputData?.url} >{props?.inputData?.urlName}
                                        <i className={props?.inputData?.linkIconCss ? props?.inputData?.linkIconCss : "fa-solid  fa-angle-double-right"}></i>
                                        {/* <a href={props?.inputData?.url} >{props?.inputData?.urlName} <i className={props?.inputData?.linkIconCss ? props?.inputData?.linkIconCss : "fa-solid  fa-angle-double-right"}></i></a> */}
                                    </Link>
                                </div>
                                :
                                null
                        }
                        {
                            props?.inputData?.modalDisplay
                                ?
                                <div onClick={() => setModalOpen(!isModalOpen)} className={props?.inputData?.modalBtnCss ? props?.inputData?.modalBtnCss : "text-white hidden"} type="button"
                                    dangerouslySetInnerHTML={{ __html: props?.inputData?.modalUrlName }}>
                                </div>
                                :
                                ""
                        }
                    </div>
                    {
                        props?.inputData?.image
                            ?
                            <div className={props?.inputData?.imageCss ? props?.inputData?.imageCss : ' object-fit '}>
                                <img
                                    className={props?.inputData?.imgTagcss ? props?.inputData?.imgTagcss + " lazyload" : 'h-full w-full lazyload'}
                                    src={props?.inputData?.image}
                                    alt="Banner image "

                                />
                                {props?.inputData?.imgCaption
                                    ? <div className={props?.inputData?.imgCaptionCss}>{props?.inputData?.imgCaption}</div>
                                    :
                                    null
                                }
                                {
                                    props?.inputData?.btn2
                                        ?
                                        <div className={props?.inputData?.btn2 ? props?.inputData?.btn2Css : "text-white hidden"}>
                                            <a href={props?.inputData?.btn2Url} >{props?.inputData?.btn2UrlName} <i className="fa-solid  fa-angle-double-right"></i></a>
                                        </div>
                                        :
                                        null
                                }
                                {
                                    props?.inputData?.modalDisplay2
                                        ?
                                        <div onClick={() => setModalOpen(!isModalOpen)} className={props?.inputData?.modalBtnCss2 ? props?.inputData?.modalBtnCss2 : "text-white hidden"} type="button"
                                            dangerouslySetInnerHTML={{ __html: props?.inputData?.modalUrlName2 }}>
                                        </div>
                                        :
                                        ""
                                }
                            </div>
                            :
                            null
                    }
                    {
                        props?.inputData?.videoUrl
                        ? 
                        <div className="group relative">
                            <div className='px-3 lg:px-12  ' style={{}}>
                                <video id={"vid"} className={" xl:mt-10 2xl:mt-0 rounded-xl "} loop autoPlay height="1000" controls muted controlsList="nodownload" >
                                    <source src={props?.inputData?.videoUrl} type="video/mp4" />
                                </video>
                            </div>                            :
                            ""
                            {/* <button className={"btn btn-default absolute top-1/3 left-[50%] md:top-24 md:left-[50%] lg:top-1/4 lg:left-[50%] xl:top-1/3 xl:left-[50%] 2xl:top-1/3 2xl:left-[50%] "} onClick={togglePlay}>
                                {
                                    isPlaying
                                        ?
                                        <i class="fa-solid fa-pause bg-blue-700 rounded p-4 text-white  opacity-100 transition-opacity group-hover:opacity-100 cursor-pointer "></i>
                                        :
                                        <i class="fa-solid fa-play bg-blue-700 rounded p-4 text-white  opacity-100 transition-opacity group-hover:opacity-100 cursor-pointer"></i>
                                }
                            </button> */}
                        </div> 
                        :
                        ""
                    }
                </div>
                {
                    props.inputData?.grid2 ?
                        <div className={props?.inputData?.gridCss ? props?.inputData?.gridCss : " grid grid-cols-1  sm:grid-cols-2  md:grid-cols-2   lg:grid-cols-2 2xl:grid-cols-2  xl:grid-cols-2 h-full w-full content-center "}>
                            {
                                props?.inputData?.image2
                                    ?
                                    <div className={props?.inputData?.imageCss ? props?.inputData?.imageCss : ' object-fit '}>
                                        <img
                                            className={props?.inputData?.imgTagcss ? props?.inputData?.imgTagcss + " lazyload" : 'h-full w-full lazyload'}
                                            src={props?.inputData?.image2}
                                            alt="iAssureIT-Banner image "

                                        />
                                    </div>
                                    :
                                    null
                            }
                            <div className={props?.inputData?.gridSubDivCss ? props?.inputData?.gridSubDivCss : "  text-white xs:pl-2 sm:pl-10 lg:pl-20 xl:pl-24 xxl:pl-40 my-auto text-center xs:text-left  py-10 sm:py-0 "}>
                                {
                                    props?.inputData?.title2
                                        ?
                                        <div className={props?.inputData?.h1TxtLine1Css ? props?.inputData?.h1TxtLine1Css : ""}
                                            dangerouslySetInnerHTML={{
                                                __html: props?.inputData?.title2,
                                            }}></div>
                                        :
                                        null
                                }
                                {/* {
                                    props?.inputData?.para
                                        ?
                                        <p className={props?.inputData?.paraCss ? props?.inputData?.paraCss : "mb-6 text-xl  font-normal  text-justify lg:w-auto"}
                                            dangerouslySetInnerHTML={{ __html: props?.inputData?.para }} >
                                        </p>
                                        :
                                        null
                                } */}
                                {
                                    props?.inputData?.para2
                                        ?
                                        <p className={props?.inputData?.paraCss ? props?.inputData?.paraCss : "mb-6 text-xl  font-normal  text-justify lg:w-auto"}
                                            dangerouslySetInnerHTML={{ __html: props?.inputData?.para2 }} >
                                        </p>
                                        :
                                        null
                                }
                            </div>
                        </div>
                        :
                        null
                }

            </div>
        </div>
    )
}
export default BgImgLeftContentRtImg;