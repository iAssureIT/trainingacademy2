/*==========================================================
  Developer  :  Sarika Ghanwat
  Date       :  13st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

"use client";
import React, { useState } from "react";
import InquiryForm from "@/widgets/InquiryForm/InquiryForm";
import Link from 'next/link';
import StudEnrollModal from '@/components/StudentEnrollment/StudEnrollModal';

const BgImgRightContent = (props) => {
    const [isModalOpen, setModalOpen] = useState(false);
    var largeImageURL = props?.inputData?.bgImage;
    var smallImageURL = props?.inputData?.smallBGImage;
    const data = props?.inputData?.pageTitle;
    return (
        <div className="" id={props?.inputData?.id}>
            {isModalOpen && <StudEnrollModal modalId="StudEnrollModal"/>}
            {!props?.inputData?.singlebgImage ? (
                // <div className={props.inputData?.bannerClass ? props.inputData?.bannerClass : "relative bg-cover p-12 block shadow-lg  bg-no-repeat  max-w-full  sm:bg-cover bg-center lg:h-72 xl:h-96 h-96 "} style={{ backgroundImage: `url(${imageURL})`,backgroundSize:"100% 100%"}}>
                <div
                    className={
                        props?.inputData?.bannerClass
                            ? props?.inputData?.bannerClass + " lazyload "
                            : "relative bg-cover p-12 block shadow-lg  bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload "
                    }
                    style={{
                        "--largeImage-url": `url(${largeImageURL})`,
                        "--smallImage-url": `url(${smallImageURL ? smallImageURL : largeImageURL
                            })`,
                        backgroundSize: "100% 100%",
                    }}
                >
                    {
                        <div>
                            {props?.inputData?.dash ? (
                                <div className="w-full mb-4">
                                    <ul className="place-content-center flex flex-wrap">
                                        <li className={"dash1 " + props.inputData.dash}></li>
                                        <li className={"dash2 " + props.inputData.dash}></li>
                                        <li className={"dash3 " + props.inputData.dash}></li>
                                    </ul>
                                </div>
                            ) : null}
                            {props?.inputData?.pageTitle ? (
                                <div
                                    className={
                                        props?.inputData?.pageTitleCss
                                            ? props?.inputData?.pageTitleCss
                                            : "block font-extrabold uppercase text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl"
                                    }
                                    dangerouslySetInnerHTML={{ __html: data }}
                                ></div>
                            ) : null}
                            {
                                props?.inputData?.blockSubTitle ?
                                    <div className="">
                                        <h3 className={props.inputData.classForblockSubTitle ? props.inputData.classForblockSubTitle : "text-base sm:text-lg "}
                                            dangerouslySetInnerHTML={{ __html: props?.inputData?.blockSubTitle }}>
                                        </h3>
                                    </div>
                                    :
                                    null
                            }
                        </div>
                    }
                    <div
                        className={
                            props?.inputData?.gridClass
                                ? props?.inputData?.gridClass
                                : "grid md:grid-cols-2  lg:grid-cols-2 2xl:grid-cols-3  xl:grid-cols-3 h-auto "
                        }
                    >
                        <div
                            className={
                                props?.inputData?.gridCol1Css
                                    ? props?.inputData?.gridCol1Css
                                    : ""
                            }
                        >
                            {props?.inputData?.imgTpText ? (
                                <div
                                    className={
                                        props?.inputData?.imgTpTextClass
                                            ? props?.inputData?.imgTpTextClass
                                            : "block font-extrabold uppercase text-3xl text-left md:text-2xl lg:text-3xl xxl:text-5xl mt-20  mb-3"
                                    }
                                    dangerouslySetInnerHTML={{
                                        __html: props?.inputData?.imgTpText,
                                    }}
                                ></div>
                            ) : null}
                            {props?.inputData?.image ? (
                                <div
                                    className={
                                        props?.inputData?.imageCss
                                            ? props?.inputData?.imageCss
                                            : " object-fit "
                                    }
                                >
                                    <img
                                        className={
                                            props?.inputData?.imgTagcss
                                                ? props?.inputData?.imgTagcss + " lazyload "
                                                : "h-full w-full lazyload "
                                        }
                                        src={props?.inputData?.image}
                                        alt={props?.inputData?.altImg?props?.inputData?.altImg:"iAssureIT_img "}
                                    />
                                </div>
                            ) : null}
                        </div>
                        <div
                            className={
                                props?.inputData?.gridColCss
                                    ? props?.inputData?.gridColCss
                                    : "text-white col-start-2 xl:col-start-3 xl:col-span-2"
                            }
                        >
                            {props?.inputData?.logo ? (
                                <img
                                    src={props?.inputData?.logo}
                                    className={props?.inputData?.logoClassName + " lazyload "}
                                    alt="logo"
                                />
                            ) : null}
                            {props.inputData.gridImg ? (
                                <div className={props.inputData.gridImg}>
                                    {props?.inputData?.gridIcon
                                        ? props?.inputData?.gridIcon?.map((data, index) => {
                                            return (
                                                <div
                                                    className="flex shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-4 sm:py-3 px-2"
                                                    key={index}
                                                >
                                                    <div>
                                                        <img
                                                            className=" lazyload rounded-sm  border-spacing-x-96 p-0 md:px-0 md:py-0  lg:px-2 lg:py-1 xl:px-3 xl:py-1 "
                                                            src={data.icon}
                                                            alt="icon "
                                                         
                                                         />
                                                    </div>
                                                    <div className=" font-bold leading-5 xxl:text-xl px-2">
                                                        {data.text}
                                                    </div>
                                                </div>
                                            );
                                        })
                                        : null}
                                </div>
                            ) : null}

                            {props?.inputData?.paraTitle ? (
                                <div
                                    className={
                                        props?.inputData?.paraTitleClass
                                            ? props?.inputData?.paraTitleClass
                                            : "block font-extrabold uppercase text-3xl text-left md:text-2xl lg:text-3xl xxl:text-5xl mt-20  mb-3"
                                    }
                                    dangerouslySetInnerHTML={{
                                        __html: props?.inputData?.paraTitle,
                                    }}
                                ></div>
                            ) : // <h1 className={props?.inputData?.paraTitleClass ? props?.inputData?.paraTitleClass :"block font-extrabold uppercase text-3xl text-left md:text-2xl lg:text-3xl xxl:text-5xl mt-20  mb-3"}>{props?.inputData?.paraTitle}</h1>
                                null}
                            {props?.inputData?.para
                                ? <p
                                    className={
                                        props?.inputData?.paraCss
                                            ? props.inputData.paraCss
                                            : " mb-6 text-xl  font-normal  text-justify lg:w-auto"
                                    }
                                    dangerouslySetInnerHTML={{
                                        __html: props?.inputData?.para,
                                    }}>                                    
                                </p>
                                :
                                null
                            }
                            {props.inputData?.h1Txt ? (
                                <h2 className={props.inputData.h1TxtStyle}>
                                    {props.inputData.h1Txt}
                                </h2>
                            ) : null}
                            {props.inputData?.h2Txt ? (
                                <h3 className={props.inputData.h2TxtStyle}>
                                    {props.inputData.h2Txt}
                                </h3>
                            ) : null}
                            {props?.inputData?.para2 ? (
                                <p
                                    className={
                                        props?.inputData?.paraCss2
                                            ? props.inputData.paraCss2
                                            : "mb-6 text-xl  font-normal  text-justify lg:w-auto"
                                    }
                                >
                                    {props?.inputData?.para2}
                                </p>
                            ) : null}
                            {props?.inputData?.urlName ? (
                                <Link href={props?.inputData?.url}><div
                                    className={
                                        props?.inputData?.linkCss
                                            ? props?.inputData?.linkCss
                                            : "text-white hidden"
                                    }
                                 >
                                    
                                        {props?.inputData?.urlName}{" "}
                                        <i className="fa-solid fa-angle-double-right"></i>
                                    
                                </div>
                                </Link>
                            ) : null}
                            {
                            props?.inputData?.modalDisplay
                                ?
                                <div onClick={() => setModalOpen(!isModalOpen)} className={props?.inputData?.modalBtnCss ? props?.inputData?.modalBtnCss : "text-white hidden"} type="button">
                                    {props?.inputData?.modalurlName}{" "}
                                        <i className="fa-solid fa-angle-double-right"></i>
                                </div>
                                :
                                ""
                        }
                            {props?.inputData?.showForm ?
                                <InquiryForm formCss={props?.inputData?.formCss} />
                                :
                                null
                            }
                        </div>
                    </div>
                        {
                            props?.inputData?.modalDisplay1
                                ?
                                <div onClick={() => setModalOpen(!isModalOpen)} className={props?.inputData?.modalBtnCss1 ? props?.inputData?.modalBtnCss1 : "text-white hidden"} type="button"
                                    dangerouslySetInnerHTML={{ __html: props?.inputData?.modalUrlName1 }}>
                                </div>
                                :
                                ""
                        }
                </div>
            ) : (
                <section className="w-full bg-cover">
                    <img
                        className={
                            props?.inputData?.className
                                ? props?.inputData?.className + " lazyload "
                                : "h-96 w-auto mx-auto mt-10 xxl:my-16 pb-10 "
                        }
                        src={props?.inputData?.singlebgImage}
                        alt={props?.inputData?.alt}
                    />
                </section>
            )}
        </div>
    );
};

export default BgImgRightContent;
