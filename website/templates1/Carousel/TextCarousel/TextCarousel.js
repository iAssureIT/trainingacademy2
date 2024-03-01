"use client";
import react from "react";
// import { useState, useEffect } from "react";
// import StarRatings from "react-star-ratings";
// "use client";
import { useState, useEffect } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
// import {
//   Rating,
//   Popover,
//   initTE,
// } from "tw-elements";

// initTE({ Rating, Popover });

// const popoverIcon = document.querySelectorAll('#popover-example [data-te-rating-icon-ref]');

// popoverIcon.forEach((el) => {
//   return new Popover(el, {content: 'Example text', placement: 'top'});
// })

const TextCarousel = (props) => {
  const [testimonialsArray, setTestimonialsArray] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    console.log("handleVideoClick video", video);
    setSelectedVideo(video);
    console.log("handleVideoClick selectedVideo", selectedVideo);
  };

  const handlePreviousVideo = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? props.inputData.videos.length - 4 : prevIndex - 1
    );
    const currentIndex = props.inputData.videos.indexOf(selectedVideo);
    const newIndex =
      (currentIndex - 1 + props.inputData.videos.length) %
      props.inputData.videos.length;
    setSelectedVideo(props.inputData.videos[newIndex]);
  };

  const handleNextVideo = () => {
    setStartIndex(
      (prevIndex) => (prevIndex + 1) % props.inputData.videos.length
    );
    const currentIndex = props.inputData.videos.indexOf(selectedVideo);
    const newIndex = (currentIndex + 1) % props.inputData.videos.length;
    setSelectedVideo(props.inputData.videos[newIndex]);
  };

  useEffect(() => {
    let slideWidth = 374;
    const slidesContainer = document.querySelector(".slides-container");
    if (props?.inputData1?.data?.length > 3) {
      slideWidth = slidesContainer.querySelector(".slide").clientWidth;
      console.log(slideWidth);
      return slideWidth;
    }

    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    nextButton.addEventListener("click", () => {
      slidesContainer.scrollLeft += slideWidth;
    });

    prevButton.addEventListener("click", () => {
      slidesContainer.scrollLeft -= slideWidth;
    });
    console.log("slide", slideWidth);
  }, []);

  return (
    <section
      className={
        "relative px-3 md:px-20 mb-5 text-center xl:px-20 max-w-8xl justify-evenly " +
        props?.inputData?.wrapperCss
      }
    >
      {/* Selected Video  */}
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {props?.inputData?.blockTitle ? (
          <h1
            className={
              props?.inputData?.classForblockTitle
                ? props?.inputData?.classForblockTitle
                : "blockTitle "
            }
          >
            {props?.inputData?.blockTitle}
          </h1>
        ) : null}
        <div className="w-full flex flex-end justify-end ">
          <div className="mx-3 top-0 items-center  h-full -left-4 md:flex">
            <button
              role="button"
              className="px-2 py-2  prev bg-skyBlue text-white group"
              aria-label="prev"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 transition-all duration-200 ease-linear group-active:-translate-x-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </div>
          <div className=" top-0 items-center  h-full -right-4 md:flex">
            <button
              role="button"
              className="px-2 py-2  next bg-skyBlue text-white group"
              aria-label="next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 transition-all duration-200 ease-linear group-active:translate-x-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {props.showVideos ? (
        <div className="w-full mb-5 lg:px-20">
          {selectedVideo ? (
            <div className="w-full">
              <video
                id="selectedVideo"
                key={selectedVideo}
                className="w-full"
                autoPlay
                loop
                muted
              >
                <source src={selectedVideo} type="video/mp4" />
              </video>
            </div>
          ) : (
            <div className="w-full">
              <video
                id="selectedVideo"
                key={props.inputData.videos[0]}
                className="w-full"
                autoPlay
                loop
                muted
              >
                <source src={props.inputData.videos[0]} type="video/mp4" />
              </video>
            </div>
          )}
        </div>
      ) : null}
      <div className="relative max-w-8xl">
        {/* <div className="slides-container whitespace-nowrap scrollbar-hide lg:h-72 h-32 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0" > */}

        <div className="slides-container scrollbar-hide  h-auto flex snap-x snap-mandatory overflow-hidden space-x-7 rounded scroll-smooth before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0">
          {props.showVideos
            ? props.inputData.videos?.map((video, index) => (
                <div
                  key={video}
                  className="flex-shrink-0 h-full overflow-hidden rounded slide aspect-square snap-center"
                >
                  <video
                    id="carousel"
                    className="flex-auto object-cover w-full h-full py-5 pr-4 rounded-lg cursor-pointer"
                    loop
                    muted
                    onClick={() => handleVideoClick(video)}
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              ))
            : props.showImages
            ? props.inputData.images.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Carousel Image ${index}`}
                  className="flex-auto w-full lg:w-1/3 object-cover  h-full p-4 slide rounded-lg cursor-pointer"
                />
              ))
            : Array.isArray(props.inputData.textBlock) &&
              props?.inputData.textBlock.length > 0
            ? props.inputData.textBlock.map((data, index) => (
                <div
                  key={index}
                  className={
                    props?.inputData?.txtBlkCss
                      ? props?.inputData?.txtBlkCss
                      : "flex-none sm:flex-auto slide object-cover w-full h-full p-4 slide rounded-lg cursor-pointer"
                  }
                >
                  <div className="px-10">{/* Additional JSX code */}</div>
                  <div className="break-all h-48 p-3 md:p-5 slide overflow-y-scroll ">
                    {data.testimonial}
                  </div>
                  <div className="px-10">- {data.customerName}</div>
                </div>
              ))
            : "not found"}
        </div>
      </div>
    </section>
  );
};

export default TextCarousel;
