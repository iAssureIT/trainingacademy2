import React, { useState, useEffect, useRef } from "react";

const MultipleImagesCarousel = (props) => {
    const [startIndex, setStartIndex] = useState(0);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isAutoScrolling, setAutoScrolling] = useState(true);
    const [direction, setDirection] = useState(props.direction);

    const slidesContainerRef = useRef(null);
    const scrollIntervalTime = 1200;
    const scrollAmount = 100; // Adjust this value to control the scroll speed

    const handleVideoClick = (video) => {
        setSelectedVideo(video);
    };

    const startAutoScroll = () => {
        if (!isAutoScrolling) {
            setAutoScrolling(true);
        }
    };

    const stopAutoScroll = () => {
        setAutoScrolling(false);
    };

    const scrollCarousel = () => {
        const container = slidesContainerRef.current;
        const scrollLeft = container.scrollLeft; // Get the current scrollLeft value

        if (direction === "right") {
            if (scrollLeft >= container.scrollWidth - container.clientWidth) {
                container.scrollLeft = 0; // Reset to the beginning
            } else {
                container.scrollLeft += scrollAmount; // Scroll to the right
            }
        } else {
            if (scrollLeft <= 0) {
                container.scrollLeft = container.scrollWidth - container.clientWidth; // Reset to the end
            } else {
                container.scrollLeft -= scrollAmount; // Scroll to the left
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(scrollCarousel, scrollIntervalTime);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <section
            data-carousel="slide"
            className="relative  text-center  max-w-8xl justify-evenly "
            //   onMouseEnter={stopAutoScroll}
            //   onMouseLeave={startAutoScroll}
            onMouseEnter={() => setAutoScrolling(false)}
            onMouseLeave={() => setAutoScrolling(true)}
        >
            {/* Selected Video  */}
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
                                key={props.inputData?.videos[0]}
                                className="w-full"
                                autoPlay
                                loop
                                muted
                            >
                                <source src={props?.inputData?.videos[0]} type="video/mp4" />
                            </video>
                        </div>
                    )}
                </div>
            ) : null}
            <div className="relative max-w-8xl">
                {/* <div className="slides-container whitespace-nowrap scrollbar-hide lg:h-72 h-32 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0" > */}
                <div
                    data-carousel="slide"
                    ref={slidesContainerRef}
                    className="slides-container  whitespace-nowrap scrollbar-hide lg:h-72 h-32 flex snap-x snap-mandatory overflow-hidden space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0"
                >
                    {props.showVideos
                        ? props.inputData.videos?.map((video, index) => (
                            <div
                                key={video}
                                className="flex-shrink-0 h-full overflow-hidden rounded slide aspect-square snap-center"
                            >
                                <video
                                    id="carousel"
                                    className="flex-auto  object-cover w-full h-full py-5 pr-4 rounded-lg cursor-pointer "
                                    loop
                                    muted
                                    onClick={() => handleVideoClick(video)}
                                >
                                    <source src={video} type="video/mp4" />
                                </video>
                            </div>
                        ))
                        : props.showImages
                            ? props.inputData?.images?.map((image, index) => (
                                <img
                                    data-carousel-item
                                    key={image}
                                    src={image}
                                    alt={`Carousel Image ${index}`}
                                    className="flex-auto w-1/2 lg:w-1/3 object-cover  h-full py-2 px-1 slide rounded-lg cursor-pointer"
                                />
                            ))
                            : props.inputData.textBlock.map((data, index) => (
                                <div
                                    key={index}
                                    className={
                                        props?.inputData?.txtBlkCss
                                            ? props?.inputData?.txtBlkCss
                                            : "flex-auto object-cover w-full h-full p-1 slide rounded-lg cursor-pointer"
                                    }
                                >
                                    <div className="break-all w-96 h-auto p-10 w-full">
                                        {data.content}
                                    </div>
                                    <div>{data.author}</div>
                                </div>
                            ))}
                </div>
            </div>
        </section>
    );
};

export default MultipleImagesCarousel;
