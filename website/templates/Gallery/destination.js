"use client";
import React, { useEffect } from "react";

const Destination = (props) => {
  var classForNoOfCards = props.inputData.classForNoOfCards
    ? props.inputData.classForNoOfCards
    : "grid  grid-cols-3 gap-x-6 md:grid-cols-3 md:gap-x-6 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6";

  return (
    <section className="bg-white">
      {props?.inputData?.dash ?
        <div className="w-full mb-4">
          <ul className="place-content-center flex flex-wrap">
            <li className={"dash1 " + props.inputData.dash}></li>
            <li className={"dash2 " + props.inputData.dash}></li>
            <li className={"dash3 " + props.inputData.dash}></li>
          </ul>
        </div>
        :
        null
      }
      {
        props?.inputData?.pageTitle ?
          <h2 className={props?.inputData?.pageTitleCss ? props?.inputData?.pageTitleCss : "block font-extrabold uppercase text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl"}
            dangerouslySetInnerHTML={{ __html: props?.inputData?.pageTitle }}>
          </h2>
          :
          null
      }
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
        {props.inputData.cardsArray.map((card, index) => {
          return (
            <div className={props.inputData?.classForCards} key={index}>
              <div className="block ">
                <div className="relative group flex">
                  <div
                    className="flex-container bg-cover bg-no-repeat w-full  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]"
                    style={{
                      backgroundImage: `url(${card.bgImg})`,
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <div className="w-auto">
                      
                      <div>
                        <img
                          src={card?.cardImage2}
                          alt={"cardImg" + index}
                          className={
                            props.inputData?.classForCardImg2
                              ? props.inputData?.classForCardImg2
                              : "w-full"
                          }
                        />

                      </div>
                      <div className={props.inputData?.classForBlkWidth ? props.inputData?.classForBlkWidth : "  text-white md:h-40 lg:h-auto p-4 w-3/5 md:w-3/5 lg:w-2/3 xl:w-3/5 2xl:w-1/2"}>
                        {card?.cardTitle_2 ? (
                          <h3
                            className={
                              props?.inputData?.classForcardTitle_2
                                ? props?.inputData?.classForcardTitle_2
                                : "text-md text-primary dark:text-primary-400 font-bold"
                            }
                          >
                            {card?.cardTitle_2}
                          </h3>
                        ) : null}
                      </div>
                    </div>
                    <div className="w-1/3">
                      <div className="hover:cursor-pointer absolute inset-0 flex items-end justify-end opacity-100 transition-opacity group-hover:opacity-100 ">

                        <div className=" w-1/3 md:w-2/5 lg:w-1/3 bg-blue-800 my-auto  py-auto text-white flex flex-col h-full justify-start items-center">
                          <div className=" p-4 font-semibold text-left text-xs md:text-sm 2xl:text-lg inline-block align-top overflow-y-auto xl:leading-[1.8rem] 2xl:leading-normal">
                            <span className="">{card.cardPara}</span>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Destination;
