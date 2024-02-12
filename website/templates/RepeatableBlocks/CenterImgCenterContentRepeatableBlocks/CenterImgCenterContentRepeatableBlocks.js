/*==========================================================
  Developer  :  Priyanka Bhanwase
  Date       :  1st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

"use client";
import React from "react";

const CenterContentRepeatableBlocks = (props) => {
  var largeImageURL = props?.inputData?.bgImage;
    var smallImageURL = props?.inputData?.smallBGImage;
  var classForNoOfCards = props.inputData.classForNoOfCards
    ? props.inputData.classForNoOfCards
    : "grid  grid-cols-3 gap-x-6 md:grid-cols-3 md:gap-x-6 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6";
  return (
    <section className={props?.inputData?.sectionCss}>
      <div
                className={
                    props?.inputData?.bgImgCss
                        ?
                        props?.inputData?.bgImgCss
                        :
                        "relative bg-cover p-12 block    bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]"
                }
                style={{
                    '--largeImage-url': `url(${largeImageURL})`,
                    '--smallImage-url': `url(${smallImageURL ? smallImageURL : largeImageURL})`,
                     'backgroundSize': "100% 100%"
                }}

            >
      {props?.inputData?.dash ?
        <div className="w-full mb-4">
          <ul className="place-content-center flex flex-wrap">
            <li className={"dash1 " + props?.inputData?.dash}></li>
            <li className={"dash2 " + props?.inputData?.dash}></li>
            <li className={"dash3 " + props?.inputData?.dash}></li>
          </ul>
        </div>
        : null}
      {props?.inputData?.blockTitle ? (
        <h2
          className={
            props?.inputData?.classForblockTitle
              ? props?.inputData?.classForblockTitle
              : "blockTitle "
          }
          dangerouslySetInnerHTML={{ __html: props?.inputData?.blockTitle }}
        >
        </h2>
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
      {
        <div className={"relative overflow-hidden"}>
          <img
            alt={
              props?.inputData?.altImage
                ? props?.inputData?.altImage
                : "blockImage"
            }
            src={props?.inputData?.blockImage}
            className={
              props.inputData?.classForblockImage
                ? props.inputData?.classForblockImage
                : "w-full"
            }
          />
        </div>
      }
      {
        props?.inputData?.cardsArray ?
          <div className={classForNoOfCards}>
            {props?.inputData?.cardsArray?.map((card, index) => {
              return (
                <div className={card?.classForCards} key={index}>
                  <div className="block">
                    <div className={"relative overflow-hidden"}>
                      <img
                        alt={card?.altImage ? card?.altImage : "cardImage"}
                        src={card.cardImage}
                        className={
                          props.inputData?.classForCardImage
                            ? props.inputData?.classForCardImage
                            : "w-full "
                        }
                      />
                    </div>
                  </div>
                  {card.cardTitle ? (
                    <h3 className={"px-2 " + props.inputData?.classForCardTitle}>
                      {card.cardTitle}{" "}
                    </h3>
                  ) : null}
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
                  {card.cardTitle_2 ? (
                    <span className="flex justify-center">
                      <h4
                        className={
                          props.inputData.classForCardTitle_2
                            ? props.inputData.classForCardTitle_2
                            : "font-bold text-md text-primary dark:text-primary-400"
                        }
                      >
                        {card.cardTitle_2}
                      </h4>
                    </span>
                  ) : null}
                </div>
              );
            })}
          </div>
          :
          null
      }
      {
        props?.inputData?.btnName?
        <div className="flex justify-center md:justify-start ">
        <a className={props?.inputData?.btnClass} href={props?.inputData?.btnUrl}>{props?.inputData?.btnName}</a>
        </div>
        :
        null
      }
      </div>
    </section>
  );
};

export default CenterContentRepeatableBlocks;
