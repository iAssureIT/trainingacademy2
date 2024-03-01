/*==========================================================
  Developer  :  Priyanka Bhanwase
  Date       :  1st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

"use client";
import React from "react";

const CenterContentRepeatableBlocksWithBg = (props) => {
  // const MouseOver = (index) => {
  //   console.log(index);
  //   var test = document
  //     .getElementById("rotateBlk" + index)
  //     .classList.add("animate-rotateblk");
  // };
  // const MouseLeave = (index) => {
  //   console.log(index);
  //   var test = document
  //     .getElementById("rotateBlk" + index)
  //     .classList.remove("animate-rotateblk");
  // };
  var classForNoOfCards = props.inputData.classForNoOfCards
    ? props.inputData.classForNoOfCards
    : "grid  grid-cols-3 gap-x-6 md:grid-cols-3 md:gap-x-6 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6";
  return (
    <section className={props?.inputData?.sectionCss}>
      <div className="w-full mb-4">
        <ul className="place-content-center flex flex-wrap">
          <li className={"dash1 " + props?.inputData?.dash}></li>
          <li className={"dash2 " + props?.inputData?.dash}></li>
          <li className={"dash3 " + props?.inputData?.dash}></li>
        </ul>
      </div>
      {props?.inputData?.blockTitle ? (
        <h2
          className={
            props?.inputData?.classForblockTitle
              ? props?.inputData?.classForblockTitle
              : "blockTitle "
          }
          dangerouslySetInnerHTML={{
            __html: props?.inputData?.blockTitle,
          }}
        ></h2>
      ) : null}
      {props?.inputData?.blockContent ? (
        <div
          className={
            props?.inputData?.classForblockContent
              ? props?.inputData?.classForblockContent
              : "content-wrapper"
          }
          dangerouslySetInnerHTML={{
            __html: props?.inputData?.blockContent,
          }}
        ></div>
      ) : null}
      <div className={classForNoOfCards}>
        {props.inputData?.cardsArray.map((card, index) => {
          return (
            <div
              className={props.inputData?.classForCards + " "}
              key={index}
            // onMouseOver={() => MouseOver(index)}
            // onMouseLeave={() => MouseLeave(index)}
            >
              <div
                className={card?.bgImg ? props?.inputData?.bgImgCss : ""}
                style={{
                  "--largeImage-url": `url(${card?.bgImg})`,
                  "--smallImage-url": `url(${card?.smBgImg ? card?.smBgImg : card?.bgImg
                    })`,
                  backgroundSize: "100% 100%",
                }}
              >
                {card.cardImage ? (
                  <div className="bg-blue-600 py-5 xl:h-32">
                    <div className="relative -top-[50px]">
                      <img
                        alt={card.altImage ? card.altImage : "imageDescription"}
                        src={card?.cardImage}
                        className={
                          props?.inputData?.classForCardImage
                            ? props?.inputData?.classForCardImage +
                            " noAnimation transform-none animate-none lazyload relative"
                            : "lazyload w-full"
                        }
                      />
                    </div>
                    <div id={"rotateBlk" + card?.id} className="block relative -top-[50px] z-0">


                      <>
                        <img src="/images/specific/Services/MobileApp/Icons/2.png" alt="smallHexagon" className="rotateCircle2Blk1 block lazyload absolute " />
                        <img src="/images/specific/Services/MobileApp/Icons/2.png" alt="smallHexagon" className="rotateCircleBlk1 absolute block lazyload " />

                      </>
                    </div>
                  </div>
                ) : null}
                {/* <div className=" bg-blue-700 h-32 w-full">
                  <div
                    id={"rotateBlk" + index}
                    className="block relativeh-60 -mt-40 "
                  >
                    <div
                      className={
                        props.inputData?.classForImg
                          ? props.inputData?.classForImg
                          : " overflow-hidden bg-cover bg-no-repeat mt-20"
                      }
                    >
                      {props.inputData?.displayAnimation === "true" ? (
                        <>
                          {/* <img
                            data-src="/images/generic/11.webp"
                            alt="smallHexagon"
                            className="animatedCircle hidden lg:block lazyload "
                          />
                          <img
                            data-src="/images/specific/Services/MobileApp/Icons/2.png"
                            alt="smallHexagon"
                            className="animatedCircle2 hidden lg:block lazyload "
                          /> */}
                {/*    </>
                      ) : null}
                    </div>
                  </div>
                </div> */}
                <div className="p-5">
                  {card.cardTitle ? (
                    <h2 className={"" + props.inputData?.classForCardTitle}>
                      {card.cardTitle}{" "}
                    </h2>
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
                  {card?.cardTitle_2 ? (
                    <div className="flex justify-center">
                      <h3
                        className={
                          props.inputData.classForCardTitle_2
                            ? props.inputData.classForCardTitle_2
                            : "font-bold text-md text-primary dark:text-primary-400"
                        }
                      >
                        {card.cardTitle_2}
                      </h3>
                    </div>
                  ) : null}
                  {card?.urlName ? (
                    <div
                      className={
                        card?.linkCss
                          ? card?.linkCss
                          : "font-medium text-white hidden"
                      }
                    >
                      <a href={card?.url}>{card?.urlName} </a>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CenterContentRepeatableBlocksWithBg;
