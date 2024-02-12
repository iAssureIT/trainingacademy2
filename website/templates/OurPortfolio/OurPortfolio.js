
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
  var classForNoOfCards = props.inputData.classForNoOfCards
    ? props.inputData.classForNoOfCards
    : "grid  grid-cols-3 gap-x-6 md:grid-cols-3 md:gap-x-6 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6";
  return (
    <section className={props?.inputData?.sectionCss}>

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
          dangerouslySetInnerHTML={{
            __html: props?.inputData?.blockTitle,
          }}
        ></h2>
      ) : null}
      {props?.inputData?.blockSubTitle ? (
        <h3
          className={
            props?.inputData?.classForblockSubTitle
              ? props?.inputData?.classForblockSubTitle
              : "blockSubTitle "
          }
        >
          {props?.inputData?.blockSubTitle}
        </h3>
      ) : null}
      {props?.inputData?.btnName ?

        <div className=" px-10 lg:px-20 w-full mb-3 h-10 ">
          <a href={props?.inputData?.urlName}>
            <button className={"submitBtn mr-3" + props?.inputData?.btnClass}>{props?.inputData?.btnName}
              <i className="fa-solid fa-angle-double-right ml-2 w-3">
              </i>
            </button>
          </a>
        </div>
        :
        null
      }
      <div className={classForNoOfCards}>
        {props.inputData.cardsArray.map((card, index) => {
          return (
            <div className={props.inputData?.classForCards} key={index}>
              <div className="block">
                <div
                  className={"relative overflow-hidden bg-cover bg-no-repeat shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"}
                >
                  <img
                    alt={card.altImg ? card.altImg : "portfolio"}
                    src={card.cardImage}
                    className={
                      props.inputData?.classForCardImage
                        ? props.inputData?.classForCardImage+" lazyload " 
                        : "w-full lazyload "    

                    }
                  
                  />
                </div>
              </div>
              {card.cardTitle ? (
                <h4 className={"px-2 " + props.inputData?.classForCardTitle}>
                  {card.cardTitle}{" "}
                </h4>
              ) : null}
              {card.cardSubTitle ? (
                <h5 className={"px-2 " + props.inputData?.classForcardSubTitle}>
                  {card.cardSubTitle}{" "}
                </h5>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurPortfolio;
