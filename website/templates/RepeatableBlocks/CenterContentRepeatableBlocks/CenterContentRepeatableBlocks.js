/*==========================================================
  Developer  :  Priyanka Bhanwase
  Date       :  1st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/


"use client"
import React, { useState, useEffect } from "react";
import StudEnrollModal from '@/components/StudentEnrollment/StudEnrollModal';

const CenterContentRepeatableBlocks = (props) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const MouseOver = (index) => {
        const rotateBlk = document.getElementById("rotateBlk" + index);
        const rotateBlk2 = document.getElementById("rotateBlk2" + index);
    
        if (rotateBlk && rotateBlk2) {
            rotateBlk.classList.add('animatedCircle1Animation');
            rotateBlk.classList.remove('animatedCircle');
            
            rotateBlk2.classList.add('animatedCircle2Animation');
            rotateBlk2.classList.remove('animatedCircle2');
        }
    };
    
    const MouseLeave = (index) => {
        const rotateBlk = document.getElementById("rotateBlk" + index);
        const rotateBlk2 = document.getElementById("rotateBlk2" + index);
    
        if (rotateBlk && rotateBlk2) {
            rotateBlk.classList.remove('animatedCircle1Animation');
            rotateBlk.classList.add('animatedCircle');
            
            rotateBlk2.classList.remove('animatedCircle2Animation');
            rotateBlk2.classList.add('animatedCircle2');
        }
    };
    var classForNoOfCards = props.inputData.classForNoOfCards
        ?
        props.inputData.classForNoOfCards
        :
        "grid  grid-cols-3 gap-x-6 md:grid-cols-3 md:gap-x-6 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6"
    return (
        <section id={props.inputData?.id} className={props?.inputData?.sectionCss}>
            {isModalOpen && <StudEnrollModal modalId="StudEnrollModal"/>}
            {props?.inputData?.dash ?
                <div className="w-full mb-0 md:mb-4">
                    <ul className="flex flex-wrap place-content-center">
                        <li className={"dash1 " + props?.inputData?.dash}></li>
                        <li className={"dash2 " + props?.inputData?.dash}></li>
                        <li className={"dash3 " + props?.inputData?.dash}></li>
                    </ul>
                </div>
                :
                null
            }
            {
                props?.inputData?.blockTitle
                    ?
                    <h2 className={props?.inputData?.classForblockTitle ? props?.inputData?.classForblockTitle : 'blockTitle '}
                        dangerouslySetInnerHTML={{
                            __html: props?.inputData?.blockTitle,
                        }}
                    >
                    </h2>
                    :
                    null
            }
            {
                props?.inputData?.blockContent
                    ?
                    <div className={props?.inputData?.classForblockContent ? props?.inputData?.classForblockContent : 'content-wrapper'}
                        dangerouslySetInnerHTML={{
                            __html: props?.inputData?.blockContent,
                        }}>
                    </div>
                    :
                    null
            }
            <div className={classForNoOfCards}>
                {
                    props.inputData?.cardsArray.map((card, index) => {
                        return (

                            <div id={card?.id} className={props.inputData?.classForCards + " "} key={index}
                                onMouseOver={() => MouseOver(card?.id)}
                                onMouseLeave={() => MouseLeave(card?.id)}
                            >

                                <div
                                    className={
                                        card?.bgImg
                                            ?
                                            props?.inputData?.bgImgCss
                                            :
                                            ""
                                    }                                    
                                    style={{
                                        "--largeImage-url": card?.bgImg ? `url(${card?.bgImg})` : 'none',
                                        "--smallImage-url": card?.smBgImg ? `url(${card?.smBgImg})` : card?.bgImg ? `url(${card?.bgImg})` : 'none',
                                        'backgroundSize': "100% 100%"
                                    }}

                                >
                                    {
                                        card?.cardImage?
                                        
                                            <div className={props?.inputData?.imgDivCss? props?.inputData?.imgDivCss:" py-5"}>
                                                <div className="relative z-0">
                                                    {
                                                        card.cardImage
                                                            ?
                                                            <img loading="lazy" alt={card.altImage ? card.altImage : "imageDescription"} src={card?.cardImage} className={props?.inputData?.classForCardImage ? props?.inputData?.classForCardImage + " noAnimation transform-none animate-none lazyload " : "lazyload w-full"}   />
                                                            :
                                                            null
                                                    }
                                                {   props.inputData?.displayAnimation === "true"
                                                                ?<div  className="">

                                                        {/* <div className={props.inputData?.classForImg ? props.inputData?.classForImg : " overflow-hidden bg-cover bg-no-repeat"}> */}
                                                        
                                                        
                                                                <>
                                                                    <img id={"rotateBlk" + card?.id}  src="/images/generic/11.webp" alt="smallHexagon" className="absolute animatedCircle lazyload "  />
                                                                    <img  id={"rotateBlk2" + card?.id} src="/images/specific/Services/MobileApp/Icons/2.png" alt="smallHexagon" className="absolute animatedCircle2 lazyload" />

                                                                </>
                                                            
                                                    
                                                        {/* </div> */}
                                                    </div>
                                                    : null
                                                    }
                                                </div>
                                            </div>
                                        :null
                                    }
                                    {props?.inputData?.testimonial
                                        ?
                                            <div className="flex object-cover my-2 px-9">
                                                {card.profileImage ? (
                                                <img
                                                    loading="lazy"
                                                    className={"h-24 w-24   rounded-full p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lazyload"}
                                                    src={card.profileImage}
                                                    alt={card.profileImage ? card.altImage : "iassureitProfile" }
                                                />
                                                ) : (
                                                <img
                                                    loading="lazy"
                                                    className="w-24 h-24 rounded-full p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                                                    src="/images/generic/noImage.jpg"
                                                    alt="logo-iassureit"
                                                />
                                                )}
                                                <div className='object-center mx-5 my-auto'>
                                                    <div className="my-2 text-lg font-bold text-left">
                                                    {card.name
                                                        ? card.name
                                                        : ""}
                                                    </div>
                                                    <div className="my-2 text-sm font-bold text-left text-lightGray">
                                                        {card.designation
                                                            ? card.designation
                                                            : ""}

                                                    </div>
                                                </div>
                                            </div>
                                        :null
                                    }

                                    {
                                        card.cardTitle ?
                                            <h2 className={"px-2 " + props.inputData?.classForCardTitle}>{card.cardTitle} </h2>
                                            : null
                                    }
                                    {
                                        card.content
                                            ?
                                            <div className={card.classForContent ? card.classForContent : 'content-wrapper'}
                                            dangerouslySetInnerHTML={{
                                                __html: card?.content,
                                            }}>
                                               
                                            </div>
                                            :
                                            null
                                    }
                                    {
                                        card?.cardTitle_2
                                            ?
                                            <span className='flex justify-center'>
                                                <h3 className={props.inputData.classForCardTitle_2 ? props.inputData.classForCardTitle_2 : "font-bold text-md text-primary dark:text-primary-400"}>{card.cardTitle_2}</h3>
                                            </span>
                                            : null
                                    }
                                    {

                                        card?.urlName
                                            ?
                                            <div >
                                                <a className={card?.linkCss ? card?.linkCss : "font-medium text-white hidden"} href={card?.url} >{card?.urlName} 
                                                {
                                                    props?.inputData?.linkIcon
                                                    ?
                                                    <i className={props?.inputData?.linkIconCss ? props?.inputData?.linkIconCss : "fa-solid  fa-angle-double-right"}></i>
                                                    :""
                                                }
                                                </a>
                                            </div>
                                            :
                                            null
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                props?.inputData?.modalDisplay
                    ?
                    <div onClick={() => setModalOpen(!isModalOpen)} className={props?.inputData?.modalBtnCss ? props?.inputData?.modalBtnCss : "text-white hidden"} 
                        dangerouslySetInnerHTML={{ __html: props?.inputData?.modalUrlName }}>
                    </div>
                    :
                    ""
            }
        </section>
    )
}

export default CenterContentRepeatableBlocks