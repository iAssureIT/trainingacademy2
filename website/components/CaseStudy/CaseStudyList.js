"use client";
import axios from "axios";
import Swal from "sweetalert2";
import React, { useEffect, useState, useRef } from "react"
import Tab          from "@/components/TabForModels/Tab"
import BgImgRightContent from "@/templates/ContentBlocks/BgImgRightContent/BgImgRightContent";

export default function LandingPage(props) {
    const [caseStudyList, setCaseStudyList] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const slidesContainerRef = useRef(null);

    const [service, setservice]  = useState("All");
    const [ activeTab, changeTab ] = useState('All');
    const [tabData, setTabData] = useState(null);

    const handleTabClick = (dataFromTab) => {
      // Handle the data received from the Tab component
      setTabData(dataFromTab);
      console.log("dataFromTab",dataFromTab)
      console.log("tabData",tabData)
    };
  
  
    // const handlePreviousVideo = () => {
    //     setStartIndex((prevIndex) =>
    //      prevIndex === 0 ? caseStudyList.data.length - 1 : prevIndex - 1      );   
    // };

    const handlePreviousVideo = () => {
        setStartIndex((prevIndex) => {
            const newIndex = prevIndex - 1;
            return newIndex < 0 ? caseStudyList.data.length - 1 : newIndex;
        });
    };
    const handleNextVideo = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % caseStudyList.data.length);

    };

    useEffect(() => {
        const slidesContainer = slidesContainerRef.current;

        if (slidesContainer) {
            const newScrollLeft = startIndex * slidesContainer?.clientWidth;

            // Use smooth scrolling after a short delay
            setTimeout(() => {
                slidesContainer.scrollTo({
                    left: newScrollLeft,
                    behavior: 'smooth',
                });
            }, 50); // Adjust the delay as needed
        }
    }, [startIndex, caseStudyList]);
    useEffect(() => {
      console.log("tabData",tabData)
      axios
            .get("/api/casestudy/case-study-list/"+(tabData ? tabData : props.inputData.service))
            .then(res => {
                console.log("case-study-list -> ", res);
                var Data = res.data;
                if (Data) {
                    setCaseStudyList(res.data);
                } else {

                }
            })
            .catch((error) => {
                Swal.fire(
                    "Data not found",
                    error.message,
                    "error"
                );
            });
    }, [tabData])
      console.log("tabData 2",tabData)
        
    const content_BgImgRightTxt = {
        paraTitle: "<p>Our case studies showcase a suite of services that have driven digital transformation across the sector, highlighting our expertise in building resilient web and mobile applications, modernizing legacy systems, and integrating cutting-edge technologies like AI, Blockchain, and DevOps.</p>" +
        "<br/><p>Discover how iAssureIT is your strategic partner in navigating the digital landscape. Through our proven track record in the BFSI sector, evidenced by our detailed case studies, we empower businesses with scalable and sustainable IT solutions.</p>"+
        "<br/> <p>Engage with our experts today and propel your business towards digital excellence and sustained growth.</p>",
        paraTitleClass: "text-lg md:text-xl lg:text-xl text-justify font-medium",
        bgImgCss: "lazyload",
        pageTitle:"",
        pageTitleCss: "w-full text-center   text-3xl md:text-3xl xl:text-5xl",
        gridColCss:
        "	 my-auto mx-auto text-darkGray content-center  place-content-center  justify-center py-10 px-5  md:pl-6 md:pl-16 lg:pl-0 2xl:pl-0 xxl:pl-40 xxl:px-10",
        // gridCol1Css: "w-1/2 mx-auto",
        gridClass:
        "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center md:grid-cols-2 md:px-10 xl:px-20 2xl:px-32 xxl:px-48 lg:h-full   xl:h-full h-full content-center  md:mt-10 xl:mt-10",
        bannerClass:
        "object-fit  bg-cover bg-no-repeat relative  w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
        image: "/images/specific/case_study/landing_page/iAssureit-Case-Study-Landingpage-3.webp",
        imageCss:
        "mx-auto sm:object-fit my-auto content-center  place-content-center lazyload mt-10",
        imgTagcss: "mx-auto lazyload w-2/3 md:w-full lg:w-3/4 2xl:w-auto",
        // dash: "border-blue-700 mb-5 md:mb-3",
    };
      return (
        <div id={props?.inputData?.id}>


            {props?.inputData?.dash ?
                <div className="w-full mb-4">
                    <ul className="flex flex-wrap place-content-center">
                        <li className={"dash1 " + props.inputData.dash}></li>
                        <li className={"dash2 " + props.inputData.dash}></li>
                        <li className={"dash3 " + props.inputData.dash}></li>
                    </ul>
                </div>
                :
                null
            }
            {
                props?.inputData?.pageTitle ?
                    <div className={props?.inputData?.pageTitleCss}>
                        <h2 className={props?.inputData?.pageTitleCss ? props?.inputData?.pageTitleCss : "block font-extrabold uppercase text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl"} dangerouslySetInnerHTML={{ __html: props?.inputData?.pageTitle }} ></h2>
                    </div>
                    :
                    null
            }
            <Tab  onTabClick={handleTabClick} tab={tabData ? tabData : props.inputData.service} default="All" />
            <BgImgRightContent inputData={content_BgImgRightTxt} />

            <section data-carousel="slide" className={props.inputData?.sectionCss ? props.inputData?.sectionCss : "relative px-10 md:px-20 mb-5 text-center mx-auto justify-evenly  border py-10 bg-light"}>
                {/* {
                    props?.inputData?.pageTitle ?
                        <div className={props?.inputData?.pageTitleCss}>

                            {props?.inputData?.dash ?
                                <div className="w-full mb-4">
                                    <ul className="flex flex-wrap place-content-center">
                                        <li className={"dash1 " + props.inputData.dash}></li>
                                        <li className={"dash2 " + props.inputData.dash}></li>
                                        <li className={"dash3 " + props.inputData.dash}></li>
                                    </ul>
                                </div>
                                :
                                null
                            }
                            <h2 className={props?.inputData?.pageTitleCss ? props?.inputData?.pageTitleCss : "block font-extrabold uppercase text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl"} dangerouslySetInnerHTML={{ __html: props?.inputData?.pageTitle }} ></h2>
                        </div>
                        :
                        null
                } */}
                {props.inputData?.blockContent && (
                    <div className={props.inputData?.classForblockContent}
                        dangerouslySetInnerHTML={{ __html: props.inputData?.blockContent }}></div>
                )}
                <div className="relative max-w-8xl" >
                    <div data-carousel="slide" ref={slidesContainerRef} className={props?.inputData?.CarouselCss ? props?.inputData?.CarouselCss :
                        // "slides-container whitespace-nowrap scrollbar-hide h-auto  flex snap-x snap-mandatory overflow-hidden  space-x-2 rounded scroll-smooth before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0 px-10"}>
                        "slides-container whitespace-nowrap scrollbar-hide lh-auto flex snap-x snap-mandatory overflow-hidden  space-x-2 rounded scroll-smooth before:shrink-0 after:w-[45vw] after:shrink-1 md:before:w-0 md:after:w-0 px-4"} >

                        {


                            caseStudyList?.data?.map((data, index) => (
                                <div key={index} className='flex-none object-cover w-auto h-auto gap-10 my-2 text-left rounded-lg cursor-pointer sm:w-1/2 lg:w-1/3 xl:w-1/3 slide5'>
                                    {/* // <div key={index} className='flex-none object-cover w-auto h-full gap-10 mb-2 text-left rounded-lg cursor-pointer sm:w-1/2 lg:w-1/3 xl:w-1/3 slide5 md:mb-10'> */}
                                    <a
                                        className={"text-sm"}
                                        href={"/case-study/" + data.pageURL + "-" + data?._id}
                                        target="_blank"
                                    ><img
                                            data-carousel-item

                                            src={`${process.env.NEXT_PUBLIC_BASE_URL}/${data?.bannerImage}`}
                                            alt={`Carousel Image ${index}`}
                                            className="flex-auto w-full lg:h-72 h-32 xl:h-60 2xl:h-72 bg-white  p-2 md:p-4 slide rounded-lg cursor-pointer shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                                        />
                                    </a>
                                    <div className='py-4 mx-auto text-xl font-semibold text-center text-darkGray md:text-sm xl:text-xl'>{data?.projectName}</div>
                                </div>
                            ))


                        }
                    </div>

                    <div className={props?.inputData?.prevBtnDivCss ? props?.inputData?.prevBtnDivCss : "absolute top-0 items-center h-full -left-11 md:-left-14 xl:-left-14 flex"}>
                        <button
                            className={props?.inputData?.prevBtnCss ? props?.inputData?.prevBtnCss : "px-2 py-2 rounded-full prev bg-neutral-100 text-neutral-900 group"}
                            aria-label="prev"
                            onClick={handlePreviousVideo}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 transition-all duration-200 ease-linear group-active:-translate-x-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                    </div>
                    <div className={props?.inputData?.nextBtnDivCss ? props?.inputData?.nextBtnDivCss : "absolute top-0 items-center h-full -right-11 md:-right-14 xl:-right-14 flex"}>
                        <button
                            className={props?.inputData?.nextBtnCss ? props?.inputData?.nextBtnCss : "px-2 py-2 rounded-full next bg-neutral-100 text-neutral-900 group"}
                            aria-label="next"
                            onClick={handleNextVideo}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 transition-all duration-200 ease-linear group-active:translate-x-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
};