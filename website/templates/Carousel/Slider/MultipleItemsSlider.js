"use client"
import react from 'react';
import { useState, useEffect } from "react";

const MultipleImagesCarousel = (props) => {
  const [startIndex, setStartIndex] = useState(0);

  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    console.log("handleVideoClick video",video)
    setSelectedVideo(video);
    console.log("handleVideoClick selectedVideo",selectedVideo)
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
    const slidesContainer = document.querySelector(".slides-container");
    const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    
    nextButton.addEventListener("click", () => {
      slidesContainer.scrollLeft += slideWidth;
    });
    
    prevButton.addEventListener("click", () => {
      slidesContainer.scrollLeft -= slideWidth;
    });
  }, []);
  return (
    <section id="slider" className="relative px-10 mb-5 text-center xl:px-20 max-w-8xl justify-evenly">
      {/* Selected Video  */}
      <h1 className={props?.inputData?.classForblockTitle ? props?.inputData?.classForblockTitle:'blockTitle '}>
        {props?.inputData?.blockTitle}
      </h1>
      {
        props.inputData.showVideos?
          <div className="w-full my-5">
            {selectedVideo 
            ?
              // <div className="w-full">
              <div className='grid grid-cols-1 mt-5 gap-9 md:mt-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                <video id="selectedVideo" key={selectedVideo.video} className="w-full" autoPlay loop muted>
                  <source src={selectedVideo.video} type="video/mp4" />
                </video>
                <div className={selectedVideo.classForContent ? selectedVideo.classForContent:'content-wrapper'}>
                  {selectedVideo.content}
                </div>
              </div>
            :
              <div className='grid grid-cols-1 mt-5 gap-9 md:mt-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                {/* <div className="w-full"> */}
                <video id="selectedVideo" key={props.inputData.videos[0].video} className="w-full" autoPlay loop muted>
                  <source src={props.inputData.videos[0].video} type="video/mp4" />
                </video>
                <div className={props.inputData.videos[0].classForContent ? props.inputData.videos[0].classForContent:'content-wrapper'}>
                  {props.inputData.videos[0].content}
                </div>
              </div>
            }
          </div>
        :
          null
      }
      <div className="relative max-w-8xl">
        {/* <div className="slides-container whitespace-nowrap scrollbar-hide lg:h-72 h-32 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0" > */}
        <div className="slides-container whitespace-nowrap scrollbar-hide lg:h-72 h-32 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0" >
          {
            props.inputData.showVideos
            ?
              props.inputData.videos?.map((data, index) => (
                <div key={data.video} className="flex-shrink-0 h-full overflow-hidden rounded slide aspect-square snap-center">
                  <video id="carousel" className="flex-auto object-fit object-cover w-full h-full py-5 pr-4 rounded-lg cursor-pointer"  loop muted onClick={() => handleVideoClick(data)}  >
                    <source src={data.video} type="video/mp4"  />
                  </video>
                </div>
              
              ))
            :
              props.inputData.images.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Carousel Image ${index}`}
                  className="flex-auto object-cover w-full h-full p-4 rounded-lg cursor-pointer"
                />
              ))
          }
        </div>

        <div className="absolute top-0 items-center hidden h-full -left-4 md:flex">
          <button role="button" className="px-2 py-2 rounded-full prev bg-neutral-100 text-neutral-900 group" aria-label="prev"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 transition-all duration-200 ease-linear group-active:-translate-x-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>

          </button>
        </div>
        <div className="absolute top-0 items-center hidden h-full -right-4 md:flex">
          <button role="button" className="px-2 py-2 rounded-full next bg-neutral-100 text-neutral-900 group" aria-label="next"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 transition-all duration-200 ease-linear group-active:translate-x-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MultipleImagesCarousel;
