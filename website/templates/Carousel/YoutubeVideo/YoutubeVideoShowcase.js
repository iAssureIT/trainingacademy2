"use client";
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const YoutubeVideoShowcase = (props) => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [selectedTitle, setSelectedVideoTitle] = useState(null);
    const handleVideoSelect = (videoId, videoTitle) => {
        setSelectedVideo(videoId);
        setSelectedVideoTitle(videoTitle)
        console.log("Selected video ID:", videoId);
    };
    const NextArrow = (props) => {
        const { onClick } = props;
        return <button onClick={onClick} className="slick-arrow next-arrow py-3 hidden md:block px-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] absolute top-1/2 md:-right-10 lg:-right-14"><i class="fa-solid fa-angle-right"></i></button>;
    };

    // Custom previous button component
    const PrevArrow = (props) => {
        const { onClick } = props;
        return <button onClick={onClick} className="slick-arrow prev-arrow py-3 hidden md:block px-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] absolute top-1/2 md:-left-10 lg:-left-14"><i class="fa-solid fa-angle-left"></i></button>;
    };
    const videos = [
        { id: "UmAlBXlzRMA", title: "Mobile App Development Expertise - iAssure International Technologies"  },
        { id: "jo0LmGzk8Mo", title: "Experience the power of innovation with the India's Best Mobile App Development Services." },
        { id: "Xqd6BUZXtyE", title: "Unleash Your E-commerce Potential with Our Powerful Solutions! " },
        { id: "jBGT_0ylqx8", title: "Welcome to the Future of BFSI APPLICATION SCALABILITY!" },
        // Add more videos as needed
    ];
    useEffect(() => {
        // Set the selected video to the ID of the first video in the array when the component mounts
        setSelectedVideo(videos[0]?.id);
        setSelectedVideoTitle(videos[0]?.title)
    }, []);
    // Settings for the carousel
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendArrows: (container) => {
            const arrowsContainer = document.querySelector('.slick-track');
            arrowsContainer.appendChild(container);
          },

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section>
            {
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
      }
        
        <div className="px-2 md:px-20 xl:px-20">
            <div className="mx-auto max-w-7xl">
                {/* <h2 className="mb-8 text-3xl text-gray-400">Featured Videos</h2> */}
                {selectedVideo && (
                    <div>
                    <iframe
                        title="Selected Video"
                        className="w-full mb-4 md:px-32 "
                        width="500"
                        height="550"
                        // src={`https://www.youtube.com/embed/${selectedVideo}`}
                        src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=0&mode=opaque&rel=0&autohide=1&showinfo=0&wmode=transparent`} // Dynamically set autoplay
                        // src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&controls=0&rel=0`} // Add rel=0 to hide the share icon
                        frameBorder="0"
                        allowFullScreen
                    // style={{ pointerEvents: 'none' }} // Add this style to prevent the iframe from capturing click events
                    ></iframe>
                    <div className='py-3 text-xl font-bold text-center'>{selectedTitle}</div>
                    </div>
                )}
                <Slider {...settings}>
                    {videos.map((video) => (
                        <div key={video.id} className="relative px-4 mt-10 cursor-pointer " onClick={() => handleVideoSelect(video.id, video.title)}>
                            <iframe
                                title={video.title}
                                className="w-full "
                                width="560"
                                height="220"
                                src={`https://www.youtube.com/embed/${video.id}`}
                                frameBorder="0"
                                allowFullScreen
                                style={{ pointerEvents: 'none' }} // Add this style to prevent the iframe from capturing click events
                            ></iframe><div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] line-clamp-2 px-3 font-bold py-1 rounded-b-lg'>{video.title}</div>
                        </div>
                    ))}
                </Slider>
                
            </div>
        </div>
        </section>
    );
};

export default YoutubeVideoShowcase;
