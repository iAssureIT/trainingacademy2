"use client";
import React, { useState, useEffect, useRef } from "react";

const MultipleImagesCarousel = (props) => {
  // const [startIndex, setStartIndex] = useState(0);
  // const [selectedVideo, setSelectedVideo] = useState(null);
  // const [isAutoScrolling, setAutoScrolling] = useState(true  );
  // const [direction, setDirection] = useState(props.direction);

  // const slidesContainerRef = useRef(null);
  // const scrollIntervalTime = 1200;
  // const scrollAmount = 100; // Adjust this value to control the scroll speed

  // const handleVideoClick = (video) => {
  //   setSelectedVideo(video);
  // };

  // const startAutoScroll = () => {
  //   if (!isAutoScrolling) {
  //     setAutoScrolling(true);
  //   }
  // };

  // const stopAutoScroll = () => {
  //   setAutoScrolling(false);
  // };

  // const scrollCarousel = () => {
  //   const container = slidesContainerRef.current;
  //   const scrollLeft = container.scrollLeft; // Get the current scrollLeft value
  
  //   if (direction === "right") {
  //     if (scrollLeft >= container.scrollWidth - container.clientWidth) {
  //       container.scrollLeft = 0; // Reset to the beginning
  //     } else {
  //       container.scrollLeft += scrollAmount; // Scroll to the right
  //     }
  //   } else {
  //     if (scrollLeft <= 0) {
  //       container.scrollLeft = container.scrollWidth - container.clientWidth; // Reset to the end
  //     } else {
  //       container.scrollLeft -= scrollAmount; // Scroll to the left
  //     }
  //   }
  // };

  // useEffect(() => {
  //   const interval = setInterval(scrollCarousel, scrollIntervalTime);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <section>
      
      <div className="relative max-w-8xl">
       <div
          
          className="  animate-fade-left animate-infinite animate-duration-1500 animate-delay-[10ms] animate-ease-linear animate-normal slides-container  whitespace-nowrap scrollbar-hide lg:h-72 h-32 flex snap-x snap-mandatory overflow-hidden space-x-2 rounded scroll-smooth before:w-0 after:w-0 before:shrink-0  after:shrink-0 md:before:w-0 md:after:w-0"
        >
          { props.showImages
            ? props.inputData?.images?.map((image, index) => (
                <img                 
                  key={image}
                  src={image}
                  alt={`Carousel Image ${index}`}
                  className={props?.inputData?.slideDirection == "left" ? "slideleft  flex-auto w-1/2 lg:w-1/4 object-cover  h-full py-2 px-1  rounded-lg cursor-pointer lazyload"
                :
                "slideRight flex-auto w-auto lg:w-1/3 object-cover  h-full py-2 px-1  rounded-lg cursor-pointer lazyload"
              }
                 />
              ))
            : null}
        </div>
      </div>
    </section>
  );
};

export default MultipleImagesCarousel;
