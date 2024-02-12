
/*Carousel display multiple text, multiple video and multiple video blocks at a time moving */
"use client"
import { useState, useEffect } from "react";

const MultipleImagesCarousel = (props) => {
  const [startIndex, setStartIndex] = useState(0);

  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    // console.log("handleVideoClick video", video)
    setSelectedVideo(video);
    // console.log("handleVideoClick selectedVideo", selectedVideo)
  };

  const handlePreviousVideo = () => {

    setStartIndex((prevIndex) =>
      prevIndex === 0 ? props.inputData.videos.length - 4 : prevIndex - 1
    );
    const currentIndex = props.inputData.videos.indexOf(selectedVideo);
    const newIndex = (currentIndex - 1 + props.inputData.videos.length) % props.inputData.videos.length;
    setSelectedVideo(props.inputData.videos[newIndex]);
  };

  const handleNextVideo = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % props.inputData.videos.length);
    const currentIndex = props.inputData.videos.indexOf(selectedVideo);
    const newIndex = (currentIndex + 1) % props.inputData.videos.length;
    setSelectedVideo(props.inputData.videos[newIndex]);
  };

  useEffect(() => {
    const conId= props?.inputData?.containerId ? props?.inputData?.containerId :"slides-container"
    const slideId=props?.inputData?.slideId ?props?.inputData?.slideId :"slide"
    const prevBtnId=props?.inputData?.prevId ?props?.inputData?.prevId :"prev"
    const nextBtnId=props?.inputData?.nextId ? props?.inputData?.nextId:"next"

    const slidesContainer = document.querySelector("."+conId);
    const slideWidth = slidesContainer.querySelector("."+slideId)?.clientWidth;
    const prevButton = document.querySelector("."+prevBtnId );
    const nextButton = document.querySelector("."+nextBtnId );
    // console.log("nextButton",props?.inputData?.nextId)

    nextButton.addEventListener("click", () => {
      slidesContainer.scrollLeft += slideWidth;
    });

    prevButton.addEventListener("click", () => {
      slidesContainer.scrollLeft -= slideWidth;
    });
  }, []);
  return (

    <section data-carousel="slide" className={props.inputData?.sectionCss?props.inputData?.sectionCss:"relative px-20 mb-5 text-center xl:px-20 max-w-8xl justify-evenly"}>
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
            <h2 className={props?.inputData?.pageTitleCss ? props?.inputData?.pageTitleCss : "block font-extrabold uppercase text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl"} dangerouslySetInnerHTML={{ __html: props?.inputData?.pageTitle }} ></h2>
          </div>
          :
          null
      }
      {props.inputData?.blockContent && (
        <div className={props.inputData?.classForblockContent}
          dangerouslySetInnerHTML={{ __html: props.inputData?.blockContent }}></div>
      )}
      {/* Selected Video  */}
      {
        props.showVideos ?
          <div className="w-full mb-5 lg:px-20">
            {selectedVideo
              ?
              <div className="w-full rounded-2xl">
                <iframe
                title="Selected Video"
                className="w-full rounded-2xl"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${selectedVideo}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              </div>
              :
              <div className="w-full rounded-2xl">
                <iframe
                title="Default Video"
                className="w-full rounded-2xl"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${props.inputData?.videos[0]}?controls=0`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              </div>
            }
          </div>
          :
          null
      }
      <div className={props.inputData?.carouselDivCss ? props.inputData?.carouselDivCss :"relative max-w-8xl"} >
        {/* <div className="slides-container whitespace-nowrap scrollbar-hide lg:h-72 h-32 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0" > */}
        <div data-carousel="slide" className={props?.inputData?.CarouselCss ? props?.inputData?.CarouselCss : "slides-container whitespace-nowrap scrollbar-hide lg:h-72 h-32 flex snap-x snap-mandatory overflow-hidden  space-x-2 rounded scroll-smooth before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0"} >
          {
            props.showVideos
              ?
              props.inputData.videos?.map((video, index) => (
                <div key={video} className="flex-shrink-0 h-full overflow-hidden rounded slide aspect-square snap-center">
                  <iframe
                title={`Carousel Video ${index}`}
                className="w-full h-full"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${props.inputData?.videos[0]}?controls=0`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
                </div>

              ))
              :
              props.showImages
                ?
                props.inputData?.images?.map((image, index) => (
                 <div className={props?.inputData?.imgWidth? props?.inputData?.imgWidth:'flex-none  w-5/6  sm:w-1/2 lg:w-1/3 xl:w-1/3 h-full object-cover  text-left   gap-10  slide5 rounded-lg cursor-pointer  mb-2 md:mb-10'}> 
                 <img
                    data-carousel-item
                    key={image}
                    src={image.img}
                    alt={`Carousel Image ${index}`}
                    className="flex-auto w-full bg-white  p-2 md:p-4 slide rounded-lg cursor-pointer shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                  />
                  <div className='mx-auto text-darkGray  font-semibold text-sm md:text-sm xl:text-xl text-center mt-2'>{image.caption}</div>
                  </div>
                ))
                :
                props.inputData.textBlock.map((data, index) => (
                  <div key={index} className={props?.inputData?.txtBlkCss ? props?.inputData?.txtBlkCss : "flex-auto object-cover w-full h-full p-4 slide rounded-lg cursor-pointer"}>
                    <div className={props.inputData?.subBlkCss ? props.inputData?.subBlkCss : 'break-all  h-auto p-10 w-full'}
                      dangerouslySetInnerHTML={{ __html: data.content }}></div>
                    <div className={props?.inputData?.autherCss} dangerouslySetInnerHTML={{
                                    __html: data.author,
                                }}></div>
                  </div>

                ))

          }
        </div>

        <div className={props?.inputData?.prevBtnDivCss ? props?.inputData?.prevBtnDivCss : "absolute top-0 items-center  h-full -left-11 md:-left-14 xl:-left-4 flex"}>
          <button  className={props?.inputData?.prevBtnCss ? props?.inputData?.prevBtnCss : "px-2 py-2 rounded-full prev bg-neutral-100 text-neutral-900 group"} aria-label="prev"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 transition-all duration-200 ease-linear group-active:-translate-x-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>

          </button>
        </div>
        <div className={props?.inputData?.nextBtnDivCss ?props?.inputData?.nextBtnDivCss:"absolute top-0 items-center  h-full -right-11 md:-right-14 xl:-right-4 flex"}>
          <button  className={props?.inputData?.nextBtnCss ? props?.inputData?.nextBtnCss : "px-2 py-2 rounded-full next bg-neutral-100 text-neutral-900 group"} aria-label="next"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 transition-all duration-200 ease-linear group-active:translate-x-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MultipleImagesCarousel;
