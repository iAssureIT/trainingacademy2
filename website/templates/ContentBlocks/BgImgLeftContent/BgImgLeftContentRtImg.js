/*==========================================================
  Developer  :  Sarika Ghanwat
  Date       :  12st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/
"use client";
import React, { useState, useRef } from "react";
import Link from 'next/link';
import LandingPageModal from '@/components/Modal/landingPageModal';
import InquiryForm from "@/widgets/InquiryForm/InquiryForm";

const BgImgLeftContentRtImg = (props) => {
    const { inputData } = props;
    const largeImageURL = inputData?.bgImage;
    const smallImageURL = inputData?.smallBGImage;
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

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
        <div id={inputData?.id}>
            <div
                className={inputData?.bgImgCss || "bg-cover p-12 block shadow-lg bg-no-repeat max-w-full sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)] bg-[image:var(--smallImage-url)]"}
                style={{
                    "--largeImage-url": largeImageURL ? `url(${largeImageURL})` : 'none',
                    "--smallImage-url": smallImageURL ? `url(${smallImageURL})` : largeImageURL ? `url(${largeImageURL})` : 'none',
                    backgroundSize: "100% 100%",
                }}
            >
                {inputData?.pageTitle &&
                    <div className={inputData?.pageTitleCss}>
                        {inputData?.dash &&
                            <div className="w-full mb-4">
                                <ul className="place-content-center flex flex-wrap">
                                    {[1, 2, 3].map((num) => (
                                        <li key={num} className={`dash${num} ${inputData.dash}`}></li>
                                    ))}
                                </ul>
                            </div>
                        }
                        <p className={inputData?.pageTitleCss || "block font-extrabold uppercase text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl"} dangerouslySetInnerHTML={{ __html: inputData.pageTitle }}></p>
                    </div>
                }
                {inputData?.blockContent &&
                    <div className={inputData?.classForblockContent} dangerouslySetInnerHTML={{ __html: inputData.blockContent }} />
                }
                <div className={inputData?.gridCss || "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 h-full w-full content-center"}>
                    <div className={inputData?.gridSubDivCss || "text-white xs:pl-2 sm:pl-10 lg:pl-20 xl:pl-24 xxl:pl-40 my-auto text-center xs:text-left py-10 sm:py-0"}>
                        {inputData?.logo &&
                            <img className={inputData?.logoCss || "lazyload"} src={inputData.logo} data-src={inputData.logo} alt="logo" />
                        }
                        {inputData?.h1Txt &&
                            <div className={inputData?.h1TxtCss} dangerouslySetInnerHTML={{ __html: inputData.h1Txt }} />
                        }
                        {inputData?.h1TxtLine1 &&
                            <div className={inputData?.h1TxtLine1Css || ""} dangerouslySetInnerHTML={{ __html: inputData.h1TxtLine1 }} />
                        }
                        {inputData?.h1TxtLine2 &&
                            <h2 className={inputData?.h1TxtLine2Css || ""}>{inputData.h1TxtLine2}</h2>
                        }
                        {inputData?.para &&
                            <p className={inputData?.paraCss || "mb-6 text-xl font-normal text-justify lg:w-auto"} dangerouslySetInnerHTML={{ __html: inputData.para }} />
                        }
                        {inputData?.listTitle &&
                            <div className='lg:mt-20 xl:mt-28'>
                                <div className='flex gap-4'>
                                    <div className='bg-white rounded p-2 sm:p-1'>
                                        <img src="/images/specific/Home/Icons/Chassis-icon.webp" className="lazyload" alt="logo" />
                                    </div>
                                    <h2 className="text-3xl mt-2 lg:text-4xl xl:text-4xl font-extrabold text-white">{inputData.listTitle}</h2>
                                </div>
                                <ul className="max-w-md space-y-1 list-disc list-outside pl-20 xs:px-20">
                                    <li className='text-lg sm:text-xl lg:text-4xl mt-2 text-left'>{inputData.listTxt}</li>
                                </ul>
                            </div>
                        }
                        {inputData?.urlName &&
                            <div className={inputData?.linkCss || "text-white hidden"}>
                                <Link href={inputData.url}>{inputData.urlName}<i className={inputData?.linkIconCss || "fa-solid fa-angle-double-right"}></i></Link>
                            </div>
                        }
                        
                        {inputData?.modalDisplay &&
                            <div><LandingPageModal btnTitle=" Let's Talk "modalId="contactFormModal" modalcss="w-48 p-2 mx-auto md:float-left mt-3 text-lg font-bold text-center bg-white text-darkGray border rounded cursor-pointer md:text-xl 2xl:px-2 xl:mt-8 2xl:mt-10 md:w-48 lg:w-44 xl:w-48 2xl:w-44 btn hover:bg-blue-800 hover:text-white" /></div>
                        }
                        {props?.inputData?.imageleftSec
                        ? <div ><img className={props?.inputData?.imageleftSecCss} src={props.inputData.imageleftSec}/></div>
                            :
                            ""
                    }
                    </div>
                    {inputData?.image &&
                        <div className={inputData?.imageCss || 'object-fit'}>
                            <img
                                className={inputData?.imgTagcss || 'h-full w-full lazyload'}
                                src={inputData.image}
                                alt="Banner image"
                                width="100%" height="auto"
                            />
                            {inputData?.imgCaption &&
                                <div className={inputData?.imgCaptionCss}>{inputData.imgCaption}</div>
                            }
                            {inputData?.btn2 &&
                                <div className={inputData?.btn2Css || "text-white hidden"}>
                                    <a href={inputData?.btn2Url}>{inputData?.btn2UrlName} <i className="fa-solid fa-angle-double-right"></i></a>
                                </div>
                            }
                            {inputData?.modalDisplay2 &&
                                <div><LandingPageModal modalId="contactFormModal" modalcss="mx-auto font-bold text-lg md:text-xl p-3 2xl:px-2 text-center border w-3/4 md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4 rounded btn bg-white text-darkGray mt-10 mb-10 md:mt-5 lg:mb-20 lg:mt-0 hover:bg-transparent hover:text-white cursor-pointer" /></div>
                            }
                            
                        </div>
                    }
                    {inputData?.videoUrl &&
                        <div className={inputData?.videoDivCss || "group relative"}>
                            <div className='px-3 lg:px-12'>
                                <video id={"vid"} className={inputData?.videoClass || "xl:mt-10 2xl:mt-0 rounded-xl"} loop autoPlay height="1000" controls muted controlsList="nodownload">
                                    <source src={inputData.videoUrl} type="video/mp4" />
                                </video>
                            </div>                           
                        </div>
                    }
                        {props?.inputData?.showForm && <InquiryForm formId={props?.inputData?.formId}
                         mailId={props?.inputData?.adminEmailId} 
                        subject={props?.inputData?.subject} 
                        mailContent={props?.inputData?.mailContent} 
                        formCss={props.inputData.formCss} 
                        sectionCss={props.inputData.sectionCss}/>}
                        
                </div>
                {inputData?.grid2 &&
                    <div className={inputData?.gridCss || "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 h-full w-full content-center"}>
                        {inputData?.image2 &&
                            <div className={inputData?.imageCss || 'object-fit'}>
                                <img
                                    className={inputData?.imgTagcss || 'h-full w-full lazyload'}
                                    src={inputData?.image2}
                                    alt="iAssureIT-Banner image"
                                />
                            </div>
                        }
                        <div className={inputData?.gridSubDivCss || "text-white xs:pl-2 sm:pl-10 lg:pl-20 xl:pl-24 xxl:pl-40 my-auto text-center xs:text-left py-10 sm:py-0"}>
                            {inputData?.title2 &&
                                <div className={inputData?.h1TxtLine1Css || ""} dangerouslySetInnerHTML={{ __html: inputData.title2 }} />
                            }
                            {inputData?.para2 &&
                                <p className={inputData?.paraCss || "mb-6 text-xl font-normal text-justify lg:w-auto"} dangerouslySetInnerHTML={{ __html: inputData.para2 }} />
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default BgImgLeftContentRtImg;
