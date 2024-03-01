/*==========================================================
  Developer  :  Priyanka Bhanwase
  Date       :  1st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

"use client";
import React from "react";

const CenterContentRepeatableBlocksWithBg = ({ inputData }) => {
  const classForNoOfCards = inputData.classForNoOfCards
    ? inputData.classForNoOfCards
    : "grid grid-cols-3 gap-x-6 md:grid-cols-3 md:gap-x-6 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6";

  return (
    <section className={inputData.sectionCss}>
      <div className="w-full mb-4">
        <ul className="place-content-center flex flex-wrap">
          {[1, 2, 3].map((index) => (
            <li key={index} className={`dash${index} ${inputData.dash}`}></li>
          ))}
        </ul>
      </div>
      {inputData.blockTitle && (
        <h2
          className={
            inputData.classForblockTitle
              ? inputData.classForblockTitle
              : "blockTitle "
          }
          dangerouslySetInnerHTML={{ __html: inputData.blockTitle }}
        ></h2>
      )}
      {inputData.blockContent && (
        <div
          className={
            inputData.classForblockContent
              ? inputData.classForblockContent
              : "content-wrapper"
          }
          dangerouslySetInnerHTML={{ __html: inputData.blockContent }}
        ></div>
      )}
      <div className={classForNoOfCards}>
        {inputData.cardsArray.map((card, index) => (
          <div className={`${inputData.classForCards} `} key={index}>
            <div
              className={card.bgImg ? inputData.bgImgCss : ""}
              style={{
                "--largeImage-url": card.bgImg ? `url(${card.bgImg})` : "none",
                "--smallImage-url": card.smBgImg ? `url(${card.smBgImg})` : card.bgImg ? `url(${card.bgImg})` : "none",
                backgroundSize: "100% 100%",
              }}
            >
              {card.cardImage && (
                <div className="bg-blue-600 py-5 xl:h-32">
                  <div className="relative -top-[50px]">
                    <img
                      alt={card.altImage ? card.altImage : "imageDescription"}
                      src={card.cardImage}
                      className={
                        inputData.classForCardImage
                          ? inputData.classForCardImage +
                            " noAnimation transform-none animate-none lazyload relative"
                          : "lazyload w-full"
                      }
                    />
                  </div>
                  <div id={"rotateBlk" + card.id} className="block relative -top-[50px] z-0">
                    <>
                      <img src="/images/specific/Services/MobileApp/Icons/2.png" alt="smallHexagon" className="rotateCircle2Blk1 block lazyload absolute " />
                      <img src="/images/specific/Services/MobileApp/Icons/2.png" alt="smallHexagon" className="rotateCircleBlk1 absolute block lazyload " />
                    </>
                  </div>
                </div>
              )}
              <div className="p-5">
                {card.cardTitle && <h2 className={inputData.classForCardTitle}>{card.cardTitle}</h2>}
                {card.content && (
                  <div className={card.classForContent ? card.classForContent : "content-wrapper"}>{card.content}</div>
                )}
                {card.cardTitle_2 && (
                  <div className="flex justify-center">
                    <h3
                      className={
                        inputData.classForCardTitle_2
                          ? inputData.classForCardTitle_2
                          : "font-bold text-md text-primary "
                      }
                    >
                      {card.cardTitle_2}
                    </h3>
                  </div>
                )}
                {card.urlName && (
                  <div className={card.linkCss ? card.linkCss : "font-medium text-white hidden"}>
                    <a href={card.url}>{card.urlName}</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CenterContentRepeatableBlocksWithBg;
