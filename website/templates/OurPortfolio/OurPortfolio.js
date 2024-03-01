/*==========================================================
  Developer  :  Priyanka Bhanvase
  Date       :  1st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

"use client";
import React from "react";

const OurPortfolio = (props) => {
  const { inputData } = props;
  const {
    sectionCss,
    dash,
    blockTitle,
    classForblockTitle,
    blockSubTitle,
    classForblockSubTitle,
    btnName,
    urlName,
    btnClass,
    classForNoOfCards,
    cardsArray,
    classForCards,
    classForCardImage,
    classForCardTitle,
    classForcardSubTitle,
  } = inputData;

  return (
    <section className={sectionCss}>
      {dash && (
        <div className="w-full mb-4">
          <ul className="place-content-center flex flex-wrap">
            {[...Array(3)].map((_, index) => (
              <li key={index} className={`dash${index + 1} ${dash}`} />
            ))}
          </ul>
        </div>
      )}
      {blockTitle && (
        <h2
          className={classForblockTitle ? classForblockTitle : "blockTitle"}
          dangerouslySetInnerHTML={{ __html: blockTitle }}
        ></h2>
      )}
      {blockSubTitle && (
        <h3
          className={
            classForblockSubTitle ? classForblockSubTitle : "blockSubTitle"
          }
        >
          {blockSubTitle}
        </h3>
      )}
      {btnName && (
        <div className="px-10 lg:px-20 w-full mb-3 h-10">
          <a href={urlName}>
            <button className={`submitBtn mr-3 ${btnClass}`}>
              {btnName}
              <i className="fa-solid fa-angle-double-right ml-2 w-3"></i>
            </button>
          </a>
        </div>
      )}
      <div className={classForNoOfCards ? classForNoOfCards : "grid grid-cols-3 gap-x-6 md:grid-cols-3 md:gap-x-6 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6"}>
        {cardsArray.map((card, index) => (
          <div className={classForCards} key={index}>
            <div className="block ">
              <div className="relative overflow-hidden bg-cover bg-no-repeat shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                <img
                  alt={card.altImg ? card.altImg : "portfolio"}
                  src={card.cardImage}
                  className={classForCardImage ? classForCardImage + " lazyload" : "w-full lazyload"}
                />
              </div>
            </div>
            {card.cardTitle && (
              <h4 className={`px-2 ${classForCardTitle}`}>
                {card.cardTitle}
              </h4>
            )}
            {card.cardSubTitle && (
              <h5 className={`px-2 ${classForcardSubTitle}`}>
                {card.cardSubTitle}
              </h5>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPortfolio;
