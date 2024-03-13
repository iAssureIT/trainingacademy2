/*==========================================================
  Developer  :  Sarika Ghanwat
  Date       :  13 March 2024
  ------------------------------------
  Reviewed By:  
  Review Date:    
==========================================================*/
"use client";
import React, { useState, useRef } from "react";
import LPStudEnrollModal from '@/components/StudentEnrollment/LandingPageStudEnrollModal';

const BgImgLeftVideoRghtGrid = (props) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const { inputData } = props;
    const largeImageURL = inputData?.bgImage;
    const smallImageURL = inputData?.smallBGImage;


    return (
        <section id={inputData?.id}>
             {isModalOpen && <LPStudEnrollModal modalId="EnrollModal"/>}
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
                    {inputData?.videoUrl &&
                        <div className={inputData?.videoDivCss || "group relative"}>
                            <div className=''>
                                <video id={"vid"} className={inputData?.videoClass || " rounded-xl"} loop autoPlay height="600" controls muted controlsList="nodownload">
                                    <source src={inputData.videoUrl} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    }
                    <div className={inputData?.gridSubDivCss || "text-white xs:pl-2 sm:pl-10 lg:pl-20 xl:pl-24 xxl:pl-40 my-auto text-center xs:text-left py-10 sm:py-0"}>
                        {
                            inputData?.cardsArray.map((data) => {
                                return (
                                    <div className="border-dashed border-2 bg-white text-center inline-block align-middle p-2 md:p-4 lg:p-4 xl:p-8 2xl:p-10 xxl:!p-20 rounded-lg">
                                        <div className={inputData?.gridBlockTitle1Css}>{data?.gridBlockTitle1}</div>
                                        <div className={inputData?.gridBlockTitle2Css}>{data?.gridBlockTitle2 ? data?.gridBlockTitle2 : ""}</div>
                                        <div className={inputData?.gridBlockTitle2Css}>{data?.gridBlockTitle3}</div>
                                    </div>
                                );
                            })
                        }


                    </div>
                </div>
                {
                           inputData?.modalDisplay
                                ?
                                <div onClick={() => setModalOpen(!isModalOpen)} className={inputData?.modalBtnCss ? inputData?.modalBtnCss : "text-white hidden"} type="button">
                                    {inputData?.modalUrlName}{" "}
                                        <i className="fa-solid fa-angle-double-right"></i>
                                </div>
                                :
                                ""
                        }

            </div>
        </section>
    );
};

export default BgImgLeftVideoRghtGrid;
