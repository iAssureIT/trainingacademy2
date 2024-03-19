"use client";
import React, { useState, useRef } from "react";
import Link from 'next/link';
import StudEnrollModal from '@/components/StudentEnrollment/StudEnrollModal';
import LPStudEnrollModal from '@/components/StudentEnrollment/LandingPageStudEnrollModal';

const BgImgLeftContentRtImg = (props) => {
    const largeImageURL = props?.inputData?.bgImage;
    const smallImageURL = props?.inputData?.smallBGImage;
    const data = props?.inputData?.pageTitle;
    const [isModalOpen, setModalOpen] = useState(false);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isSecureModalOpen, setSecureModalOpen] = useState(false);

    const togglePlay = () => {
        const video = videoRef.current;
        if (isPlaying) {
            video.pause();
            setIsPlaying(false);
        } else {
            video.play();
            setIsPlaying(true);
        }
    };

    return (
        <div id={props?.inputData?.id}>
            {isModalOpen && <StudEnrollModal modalId={props?.inputData?.modalId || "enrollModal"} />}
            {isSecureModalOpen && <LPStudEnrollModal modalId="EnrollModal"/>}
            <div rel="preload" className={props?.inputData?.bgImgCss || "bg-cover p-12 block shadow-lg bg-no-repeat max-w-full sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)] bg-[image:var(--smallImage-url)]"}
                style={{
                    "--largeImage-url": largeImageURL ? `url(${largeImageURL})` : 'none',
                    "--smallImage-url": smallImageURL ? `url(${smallImageURL})` : largeImageURL ? `url(${largeImageURL})` : 'none',
                    backgroundSize: "100% 100%",
                }}>
                {props?.inputData?.pageTitle && (
                    <div className={props?.inputData?.pageTitleCss}>
                        {props?.inputData?.dash && (
                            <div className="w-full mb-4">
                                <ul className="place-content-center flex flex-wrap">
                                    {[1, 2, 3].map((_, index) => (
                                        <li key={index} className={`dash${index + 1} ${props.inputData.dash}`}></li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <p className={props?.inputData?.pageTitleCss || "block font-extrabold uppercase text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl"} dangerouslySetInnerHTML={{ __html: data }}></p>
                    </div>
                )}
                {props.inputData?.blockContent && (
                    <div className={props.inputData?.classForblockContent} dangerouslySetInnerHTML={{ __html: props.inputData?.blockContent }}></div>
                )}
                <div className={props?.inputData?.gridCss || "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 h-full w-full content-center"}>
                    <div className={props?.inputData?.gridSubDivCss || "text-white xs:pl-2 sm:pl-10 lg:pl-20 xl:pl-24 xxl:pl-40 my-auto text-center xs:text-left py-10 sm:py-0"}>
                        {props?.inputData?.logo && (
                            <img className={`${props?.inputData?.logoCss || ""} lazyload`} src={props?.inputData?.logo} data-src={props?.inputData?.logo} alt="logo" draggable="false"/>
                        )}
                        {props?.inputData?.h1Txt && (
                            <div className={props?.inputData?.h1TxtCss} dangerouslySetInnerHTML={{ __html: props?.inputData?.h1Txt }}></div>
                        )}
                        {props?.inputData?.h1TxtLine1 && (
                            <div className={props?.inputData?.h1TxtLine1Css || ""} dangerouslySetInnerHTML={{ __html: props?.inputData?.h1TxtLine1 }}></div>
                        )}
                        {props?.inputData?.h1TxtLine2 && (
                            <h2 className={props?.inputData?.h1TxtLine2Css || ""}>{props?.inputData?.h1TxtLine2}</h2>
                        )}
                        {props?.inputData?.para && (
                            <p className={props?.inputData?.paraCss || "py-5 mb-6 text-xl font-normal text-justify lg:w-auto"} dangerouslySetInnerHTML={{ __html: props?.inputData?.para }}></p>
                        )}
                        {props?.inputData?.modalDisplayLink && (
                            <div className={props?.inputData?.linkDivCss || ""}>
                                <a className={props?.inputData?.linkCss || ""} href={props?.inputData?.linkUrl}>{props?.inputData?.linkName}</a>
                            </div>
                        )}
                        {props?.inputData?.listTitle && (
                            <div className='lg:mt-20 xl:mt-28'>
                                <div className='flex gap-4'>
                                    <div className='bg-white rounded p-2 sm:p-1'>
                                        <img src="/images/specific/Home/Icons/Chassis-icon.webp" className="lazyload" alt="icon" draggable="false"/>
                                    </div>
                                    <h2 className="text-3xl mt-2 lg:text-4xl xl:text-4xl font-extrabold text-white">{props?.inputData?.listTitle}</h2>
                                </div>
                                <ul className="max-w-md space-y-1 list-disc list-outside pl-20 xs:px-20">
                                    <li className='text-lg sm:text-xl lg:text-4xl mt-2 text-left'>{props?.inputData?.listTxt}</li>
                                </ul>
                            </div>
                        )}
                        {props?.inputData?.urlName && (
                            <div className={props?.inputData?.linkCss || "text-white hidden"}>
                                <Link href={props?.inputData?.url}>{props?.inputData?.urlName}<i className={props?.inputData?.linkIconCss || "fa-solid fa-angle-double-right"}></i></Link>
                            </div>
                        )}
                        {props?.inputData?.modalDisplay && (
                            <div onClick={() => setModalOpen(!isModalOpen)} className={props?.inputData?.modalBtnCss || "text-white hidden"} dangerouslySetInnerHTML={{ __html: props?.inputData?.modalUrlName }}></div>
                        )}

                        {props?.inputData?.secureModalDisplay && (
                            <div onClick={() => setSecureModalOpen(!isSecureModalOpen)} className={props?.inputData?.modalBtnCss || "text-white hidden"} dangerouslySetInnerHTML={{ __html: props?.inputData?.secureModalUrlName }}></div>
                        )}

                    </div>
                    {props?.inputData?.image && (
                        <div className={props?.inputData?.imageCss || 'object-fit'}>
                            {/* <link rel="preload" as="image" href="/images/specific/trainingAcademy/iAssureIT-training-7.webp"></link> */}
                            <img rel="preload" as="image" draggable="false" className={`${props?.inputData?.imgTagcss || 'h-full w-full lazyload'}`} src={props?.inputData?.image} alt="Banner image" />
                            {/* <link rel="preload" href={props?.inputData?.image} as="image"  className={`${props?.inputData?.imgTagcss || 'h-full w-full lazyload'}`}/> */}
                    {props?.inputData?.imgCaption && (
                                <div className={props?.inputData?.imgCaptionCss}>{props?.inputData?.imgCaption}</div>
                            )}
                            {props?.inputData?.btn2 && (
                                <div className={props?.inputData?.btn2Css || "text-white hidden"}>
                                    <a href={props?.inputData?.btn2Url}>{props?.inputData?.btn2UrlName}<i className="fa-solid fa-angle-double-right"></i></a>
                                </div>
                            )}
                            {props?.inputData?.modalDisplay2 && (
                                <div onClick={() => setModalOpen(!isModalOpen)} className={props?.inputData?.modalBtnCss2 || "text-white hidden"} dangerouslySetInnerHTML={{ __html: props?.inputData?.modalUrlName2 }}></div>
                            )}
                        </div>
                    )}
                    {props?.inputData?.videoUrl && (
                        <div className="group relative">
                            <div className='px-3 lg:px-12'>
                                <video ref={videoRef} className="xl:mt-10 2xl:mt-0 rounded-xl" loop autoPlay height="1000" controls muted controlsList="nodownload">
                                    <source src={props?.inputData?.videoUrl} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    )}
                </div>
                {props.inputData?.grid2 && (
                    <div className={props?.inputData?.gridCss || "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 h-full w-full content-center"}>
                        {props?.inputData?.image2 && (
                            <div className={props?.inputData?.imageCss || 'object-fit'}>
                                <img className={`${props?.inputData?.imgTagcss || 'h-full w-full lazyload'}`} src={props?.inputData?.image2} alt="iAssureIT-Banner image" draggable="false" />
                            </div>
                        )}
                        <div className={props?.inputData?.gridSubDivCss || "text-white xs:pl-2 sm:pl-10 lg:pl-20 xl:pl-24 xxl:pl-40 my-auto text-center xs:text-left py-10 sm:py-0"}>
                            {props?.inputData?.title2 && (
                                <div className={props?.inputData?.h1TxtLine1Css || ""} dangerouslySetInnerHTML={{ __html: props?.inputData?.title2 }}></div>
                            )}
                            {props?.inputData?.para2 && (
                                <p className={props?.inputData?.paraCss || "mb-6 text-xl font-normal text-justify lg:w-auto"} dangerouslySetInnerHTML={{ __html: props?.inputData?.para2 }}></p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BgImgLeftContentRtImg;
