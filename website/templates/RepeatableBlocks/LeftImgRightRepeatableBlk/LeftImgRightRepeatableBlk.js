"use client";
import React from 'react'
const LeftRightImgCenterContent = (props) => {
    var largeImageURL = props?.inputData?.sectionBgImg;
    var smallImageURL = props?.inputData?.smallBGImage;
    return (
        <section id={props.inputData?.id} className={props.inputData.sectionClass ? props?.inputData?.sectionClass : "mx-auto text-center p-8 container"}
        style={{
            "--largeImage-url": largeImageURL ? `url(${largeImageURL})` : 'none',
            "--smallImage-url": smallImageURL ? `url(${smallImageURL})` : largeImageURL ? `url(${largeImageURL})` : 'none',
            backgroundSize: "100% 100%",
        }}>
                { props.inputData?.dash?
            <div className="w-full mb-4">
                <ul className="place-content-center flex flex-wrap">
                    <li className={"dash1 " + props.inputData.dash}></li>
                    <li className={"dash2 " + props.inputData.dash}></li>
                    <li className={"dash3 " + props.inputData.dash}></li>
                </ul>
            </div>
            :
            ""
                }
            {
                props?.inputData?.pageTitle ?
                    <h2 className={props.inputData?.pageTitleCss ? props.inputData?.pageTitleCss : "text-3xl font-bold mb-6"}
                        dangerouslySetInnerHTML={{ __html: props?.inputData?.pageTitle }} ></h2>
                    :
                    null
            }
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
            <div className={props?.inputData?.gridCss ? props?.inputData?.gridCss : "grid grid-cols-1 lg:grid-cols-2 gap-10"}>
                <div className={props?.inputData?.gridCol1Css ? props?.inputData?.gridCol1Css : "w-full h-auto relative my-auto "}>
                    <img
                        src={props?.inputData?.bgImage}
                        alt="Big Image"
                        className={props?.inputData?.bgImageCss ? props?.inputData?.bgImageCss + " lazyload " : "w-full h-auto object-cover lazyload "}

                    />
                </div>

                <div className=''>
                    {props.inputData?.repeatedBlocks.map((data, index) => (
                        <div key={index} className={props.inputData?.repeatedBlkCss ? props.inputData?.repeatedBlkCss : ' my-10 flex shadow-xl sm:h-36 md:h-32 py-5'}>
                            <div className={props.inputData?.imgCss ? props.inputData?.imgCss : ' border-gray-500 px-5 md:px-6 my-auto '}>
                                <img
                                    src={data.imageSrc}
                                    alt={`Image ${index}`}
                                    className="lazyload "

                                 />
                            </div>
                            <div className='text-left'>
                                <h2 className={props?.inputData?.titleCss ? props?.inputData?.titleCss : "font-bold text-base sm:text-lg mb-2"}>
                                    {data?.title}
                                </h2>
                                {data?.description ?
                                    <h3 className={props?.inputData?.desCss ? props?.inputData?.desCss : "text-gray-700 text-xs sm:text-base overflow-hidden "}>
                                        {data?.description}
                                    </h3>
                                    :
                                    ""
                                }
                                {props?.readMore
                                    ?
                                    <div className={props?.inputData?.linkCss ? props?.inputData?.linkCss : 'float-right px-4'}><a className=' text-sky-800'>Read More<i className="fa-solid fa-angle-right"></i></a></div>
                                    :
                                    null
                                }
                            </div>

                        </div>
                    )
                    )
                    }
                </div>
            </div>
            {props?.gridImgDisplay
                ?
                <div className="p-4 rounded-lg md:py-8 md:px-8 xxl:py-24 xxl:px-18" id="stats" role="tabpanel" aria-label="stats-tab">
                    <dl className={props?.inputData?.gridDivCss ? props?.inputData?.gridDivCss : "grid max-w-screen-xxl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-4 xl:grid-cols-4 sm:p-8 xxl:p-1 place-items-center"}>
                        {
                            props.inputData.StatisticsList.map((data, index) => {
                                return (
                                    <>
                                        <div id={index} className={props.inputData?.gridSubDivCss ? props.inputData?.gridSubDivCss : "flex flex-col items-center justify-center "}>
                                            {data.icon ? <img src={data.icon} className="mx-auto lazyload " alt={"contactIcon" + index} />
                                                :
                                                null
                                            }
                                            <dt className={props?.inputData?.captionStyle ? props?.inputData?.captionStyle : "mb-4 xxl:mb-8 text-4xl xxl:text-5xl font-extrabold text-center"}>{data.caption}</dt>
                                            <dd className={props?.inputData?.addressStyle ? props?.inputData?.addressStyle : "font-semibold text-center text-2xl xxl:text-3xl"}>{data.address}</dd>
                                        </div>
                                        {/* <div className=" h-[250px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div> */}

                                    </>
                                )
                            })
                        }
                    </dl>
                </div>
                :
                null
            }
            {
                props?.inputData?.para2 ?
                    <div className=" ">
                        <h3 className={props.inputData.cssForPara2 ? props.inputData.cssForPara2 : "text-base sm:text-lg "}>
                            {props?.inputData?.para2}
                        </h3>
                    </div>
                    :
                    null
            }

        </section>
    );
}
export default LeftRightImgCenterContent;