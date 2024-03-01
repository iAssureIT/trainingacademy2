/*==========================================================
  Developer  :  Priyanka Bhanwase
  Date       :  1st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

"use client"
import React from 'react'
const CenterContentRepeatableBlocks = (props) => {
    const MouseOver = (index) => {
        if (index) {
            document.getElementById("rotateBlk" + index).classList.add('animatedCircle1Animation');
            document.getElementById("rotateBlk" + index).classList.remove('animatedCircle');
            document.getElementById("rotateBlk2" + index).classList.add('animatedCircle2Animation');
            document.getElementById("rotateBlk2" + index).classList.remove('animatedCircle2');
        }
    };
    const MouseLeave = (index) => {
        if (index) {
            document.getElementById("rotateBlk" + index).classList.remove('animatedCircle1Animation');
            document.getElementById("rotateBlk" + index).classList.add('animatedCircle');
            document.getElementById("rotateBlk2" + index).classList.remove('animatedCircle2Animation');
            document.getElementById("rotateBlk2" + index).classList.add('animatedCircle2');
        }
    };
    var classForNoOfCards = props.inputData.classForNoOfCards
        ?
        props.inputData.classForNoOfCards
        :
        "grid  grid-cols-3 gap-x-6 md:grid-cols-3 md:gap-x-6 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6"
    return (
        <section className={props?.inputData?.sectionCss}>
            {props?.inputData?.dash ?
                <div className="w-full mb-0 md:mb-4">
                    <ul className="place-content-center flex flex-wrap">
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
                            <div className={props.inputData?.classForCards + " "} key={index}
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
                                    <div className={props?.inputData?.imgDivCss ? props?.inputData?.imgDivCss : " py-5"}>
                                        <div className="relative z-0">
                                            {
                                                card.cardImage
                                                    ?
                                                    <img alt={card.altImage ? card.altImage : "imageDescription"} src={card?.cardImage} className={props?.inputData?.classForCardImage ? props?.inputData?.classForCardImage + " noAnimation transform-none animate-none lazyload " : "lazyload w-full"} />
                                                    :
                                                    null
                                            }
                                            {props.inputData?.displayAnimation === "true"
                                                ?
                                                <div className=" ">
                                                    <>
                                                        <img id={"rotateBlk" + card?.id} src="/images/generic/11.webp" alt="smallHexagon" className="animatedCircle   lazyload absolute " />
                                                        <img id={"rotateBlk2" + card?.id} src="/images/specific/Services/MobileApp/Icons/2.png" alt="smallHexagon" className=" animatedCircle2  lazyload absolute  " />
                                                    </>
                                                </div>
                                                : null
                                            }
                                        </div>
                                    </div>
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
                                                <h3 className={props.inputData.classForCardTitle_2 ? props.inputData.classForCardTitle_2 : "font-bold text-md text-primary "}>{card.cardTitle_2}</h3>
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
                                                            : ""
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
        </section>
    )
}
export default CenterContentRepeatableBlocks