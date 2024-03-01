/*==========================================================
  Developer  :  Prachi Kadam
  Date       :  1st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/
"use client";
import { useState, useEffect } from "react";
import React from "react";

const TopTextImageRepeatBlocks = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlideInterval, setAutoSlideInterval] = useState(null);

  const handleNextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % props.inputData.cardsArray.length
    );
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? props.inputData.cardsArray.length - 1 : prevIndex - 1
    );
  };

  const startAutoSlide = () => {
    setAutoSlideInterval(setInterval(handleNextSlide, 3000)); // Change slide every 3 seconds
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
  };

  useEffect(() => {
    if (props.inputData?.autoSlide) {
      startAutoSlide();
      return () => {
        stopAutoSlide();
      };
    }
  }, []);

  var classForNoOfCards = props.inputData.classForNoOfCards
    ? props.inputData.classForNoOfCards
    : "grid  grid-cols-3 gap-x-6 md:grid-cols-3 md:gap-x-6 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6";
  return (
    <section className="bg-backgroundBlue">
      {props?.inputData?.blockTitle ? (
        <h1
          className={
            props?.inputData?.classForblockTitle
              ? props?.inputData?.classForblockTitle
              : "block font-extrabold uppercase text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl"
          }
        >
          {props?.inputData?.dash ? (
            <div className="w-full mb-4">
              <ul className="place-content-center flex flex-wrap">
                <li className={"dash1 " + props.inputData.dash}></li>
                <li className={"dash2 " + props.inputData.dash}></li>
                <li className={"dash3 " + props.inputData.dash}></li>
              </ul>
            </div>
          ) : null}
          {props?.inputData?.blockTitle}
        </h1>
      ) : null}
      {props?.inputData?.blockContent ? (
        <div
          className={
            props?.inputData?.classForblockContent
              ? props?.inputData?.classForblockContent
              : "content-wrapper"
          }
        >
          {props?.inputData?.blockContent}
        </div>
      ) : null}

      <div
        className={
          props.inputData.imgWrap
            ? props.inputData.imgWrap
            : "relative flex items-center justify-center overflow-hidden p-2"
        }
      >
        {props.inputData.showChangeButtons ? (
          <button
            id="ltBtn1"
            aria-label="ltBtn1"
            className="absolute left-0  lg:ml-20 ml-5  bg-white rounded-md lg:rounded-lg shadow-md px-2 lg:px-5 py-1 lg:py-3"
            onClick={handlePrevSlide}
          >
            <i className="fa-solid fa-chevron-left text-xs"></i>
          </button>
        ) : null}
        <div className={classForNoOfCards}>
          {props.inputData.cardsArray.map((card, index) => {
            return (
              <div className={props.inputData?.classForCards} key={index}>
                {card.content ? (
                  <div
                    className={
                      card.classForContent
                        ? card.classForContent
                        : "content-wrapper"
                    }
                  >
                    {card.content}
                  </div>
                ) : null}
                <div className="flex Container p-2">
                  <div className={"flex "}>
                    <img
                      alt={card.altImage ? card.altImage : "imageDescription"}
                      src={card.cardImage}
                      className={
                        props.inputData?.classForCardImage
                          ? props.inputData?.classForCardImage
                          : "w-full"
                      }
                    />
                  </div>
                  <div className="my-auto">
                    {card.cardTitle ? (
                      <span className="flex justify-left not-italic">
                        <h2
                          className={
                            props.inputData.classForCardTitle_2
                              ? props.inputData.classForCardTitle
                              : "font-bold text-md text-primary dark:text-primary-400"
                          }
                        >
                          {card.cardTitle}
                        </h2>
                      </span>
                    ) : null}
                    {card.cardTitle_2 ? (
                      <span className="flex justify-left not-italic">
                        <h3
                          className={
                            props.inputData.classForCardTitle_2
                              ? props.inputData.classForCardTitle_2
                              : "font-bold text-md text-primary dark:text-primary-400"
                          }
                        >
                          {card.cardTitle_2}
                        </h3>
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {props.inputData.showChangeButtons ? (
          <button
            id="ltBtn"
            aria-label="ltBtn"
            className="absolute right-0  lg:mr-20 mr-5 bg-white rounded-md lg:rounded-lg shadow-md px-2 lg:px-5 py-1 lg:py-3 "
            onClick={handleNextSlide}
          >
            <i className="fa-solid fa-chevron-right text-xs"></i>
          </button>
        ) : null}
      </div>
      {props.inputData?.autoSlide ? (
        <div className="flex justify-center mt-4">
          {props.inputData.cardsArray.map((_, index) => (
            <button
              id={"rtBtn" + index}
              aria-label={"rtBtnLb" + index}
              key={index}
              className={`w-4 h-4 rounded-full mx-1 ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default TopTextImageRepeatBlocks;
