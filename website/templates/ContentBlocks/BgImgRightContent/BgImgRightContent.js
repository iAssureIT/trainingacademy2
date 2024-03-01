/*==========================================================
  Developer  :  Sarika Ghanwat
  Date       :  13st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

"use client";
import React from "react";
import InquiryForm from "@/widgets/InquiryForm/InquiryForm";
import Link from 'next/link';
import LandingPageModal from '@/components/Modal/landingPageModal';

const BgImgRightContent = (props) => {
    const { inputData } = props;
    const { bgImage, smallBGImage, id, bannerClass, singlebgImage, pageTitle, blockSubTitle, imgTpText, image, altImg, logo, gridImg, gridIcon, paraTitle, para, h1Txt, h2Txt, para2, urlName, url, modalDisplay, showForm, className, alt } = inputData;
    const largeImageURL = bgImage;
    const smallImageURL = smallBGImage;

    return (
        <div  id={id} className="bg-white">
            {!singlebgImage ? (
                <div className={bannerClass ? bannerClass + " lazyload" : "relative bg-cover p-12 block shadow-lg bg-no-repeat max-w-full sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)] bg-[image:var(--smallImage-url)] lazyload"} style={{
                    "--largeImage-url": largeImageURL ? `url(${largeImageURL})` : 'none',
                    "--smallImage-url": smallImageURL ? `url(${smallImageURL})` : largeImageURL ? `url(${largeImageURL})` : 'none',
                    backgroundSize: "100% 100%",
                }}>
                    <div>
                        {blockSubTitle && <h3 className={props.inputData.classForblockSubTitle || "text-base sm:text-lg"} dangerouslySetInnerHTML={{ __html: blockSubTitle }} />}
                        {pageTitle && <div className={props.inputData.pageTitleCss || "block font-extrabold uppercase text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl"} dangerouslySetInnerHTML={{ __html: pageTitle }} />}
                    </div>
                    <div className={props.inputData.gridClass || "grid md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 xl:grid-cols-3 h-auto"}>
                        <div className={props.inputData.gridCol1Css || ""}>
                            {imgTpText && <div className={props.inputData.imgTpTextClass || "block font-extrabold uppercase text-3xl text-left md:text-2xl lg:text-3xl xxl:text-5xl mt-20  mb-3"} dangerouslySetInnerHTML={{ __html: imgTpText }} />}
                            {image && <div className={props.inputData.imageCss || "object-fit"}>
                                <img className={props.inputData.imgTagcss || "h-full w-full lazyload"} src={image} alt={altImg || "iAssureIT_img"} />
                            </div>}
                        </div>
                        <div className={props.inputData.gridColCss || "text-white col-start-2 xl:col-start-3 xl:col-span-2"}>
                            {logo && <img src={logo} className={props.inputData.logoClassName || "lazyload"} alt="logo" />}
                            {gridImg && <div className={gridImg}>
                                {gridIcon && gridIcon.map((data, index) => (
                                    <div className="flex shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-4 sm:py-3 px-2" key={index}>
                                        <div>
                                            <img className="lazyload rounded-sm border-spacing-x-96 p-0 md:px-0 md:py-0 lg:px-2 lg:py-1 xl:px-3 xl:py-1" src={data.icon} alt="icon" />
                                        </div>
                                        <div className="font-bold leading-5 xxl:text-xl px-2">{data.text}</div>
                                    </div>
                                ))}
                            </div>}
                            {paraTitle && <div className={props.inputData.paraTitleClass || "block font-extrabold uppercase text-3xl text-left md:text-2xl lg:text-3xl xxl:text-5xl mt-20  mb-3"} dangerouslySetInnerHTML={{ __html: paraTitle }} />}
                            {para && <p className={props.inputData.paraCss || "mb-6 text-xl font-normal text-justify lg:w-auto"} dangerouslySetInnerHTML={{ __html: para }} />}
                            {h1Txt && <h2 className={props.inputData.h1TxtStyle}>{h1Txt}</h2>}
                            {h2Txt && <h3 className={props.inputData.h2TxtStyle}>{h2Txt}</h3>}
                            {para2 && <p className={props.inputData.paraCss2 || "mb-6 text-xl font-normal text-justify lg:w-auto"}>{para2}</p>}
                            {urlName && <Link href={url}><div className={props.inputData.linkCss || "text-white hidden"}>{urlName} <i className="fa-solid fa-angle-double-right"></i></div></Link>}
                            {modalDisplay && <div><LandingPageModal btnTitle="Get In Touch" modalId="contactFormModal" modalcss="w-48 p-2 float-left mt-3 text-lg font-bold text-center bg-white  text-darkGray border rounded cursor-pointer md:text-xl 2xl:px-2 xl:mt-8 2xl:mt-10 md:w-48 lg:w-64 xl:w-48 2xl:w-48 btn hover:bg-blue-800 hover:text-white" /></div>}
                            {showForm && <InquiryForm formCss={props.inputData.formCss} subject={props?.inputData?.subject}/>}
                        </div>
                    </div>
                </div>
            ) : (
                <section className="w-full bg-cover">
                    <img className={className ? className + " lazyload" : "h-96 w-auto mx-auto mt-10 xxl:my-16 pb-10"} src={singlebgImage} alt={alt} />
                </section>
            )}
        </div>
    );
};

export default BgImgRightContent;
