import React from "react";
const CardsBlocks1 = (props) => {
  var largeImageURL = props?.inputData?.bgImage;
  var smallImageURL = props?.inputData?.smallBGImage;
  const data = props?.inputData?.pageTitle;
  var classForNoOfCards = props.inputData.classForNoOfCards
    ? props.inputData.classForNoOfCards
    : "grid  grid-cols-3 gap-x-6 md:grid-cols-3 md:gap-x-6 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6";
  return (
    <section
      className={
        props?.inputData?.bgImgCss
          ? props?.inputData?.bgImgCss + " lazyload "
          : "relative bg-cover p-12 block   bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload "
      }
      style={{
        "--largeImage-url": `url(${largeImageURL})`,
        "--smallImage-url": `url(${
          smallImageURL ? smallImageURL : largeImageURL
        })`,
        backgroundSize: "100% 100%",
      }}
    >
      {
        <div>
          {props?.inputData?.dash ? (
            <div className="w-full mb-4">
              <ul className="place-content-center flex flex-wrap">
                <li className={"dash1 " + props.inputData.dash}></li>
                <li className={"dash2 " + props.inputData.dash}></li>
                <li className={"dash3 " + props.inputData.dash}></li>
              </ul>
            </div>
          ) : null}
          {props?.inputData?.pageTitle ? (
            <div
              className={
                props?.inputData?.pageTitleCss
                  ? props?.inputData?.pageTitleCss
                  : "block font-extrabold uppercase text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl"
              }
              dangerouslySetInnerHTML={{ __html: data }}
            ></div>
          ) : null}
          {props?.inputData?.blockSubTitle ? (
            <div className=" p-6 mb-4">
              <h3
                className={
                  props.inputData.classForblockSubTitle
                    ? props.inputData.classForblockSubTitle
                    : "text-base sm:text-lg "
                }
              >
                {props?.inputData?.blockSubTitle}
              </h3>
            </div>
          ) : null}
        </div>
      }
      <div className={classForNoOfCards}>
        {props.inputData.cardsArray.map((card, index) => {
          return (
            <div
              className={props.inputData?.classForCards}
              key={index}
              style={{
                backgroundImage: `url(${card.bgImg})`,
                backgroundSize: "100% 100%",
              }}
            >
              <div className="block">
                <div
                  className={"relative overflow-hidden bg-cover bg-no-repeat"}
                >
                  {card?.CardDescription ? (
                    <span className={card?.classForCardDescription}>
                      <div className="px-4 mx-auto text-center w-full">
                        {card?.CardDescription}
                      </div>
                    </span>
                  ) : null}
                  {card?.cardImage ? (
                    <img
                      src={card?.cardImage}
                      className={
                        props.inputData?.classForCardImage
                          ? props.inputData?.classForCardImage
                          : "w-full"
                      }
                    />
                  ) : null}
                </div>
              </div>
              {card?.cardTitle ? (
                <div className={"px-2 " + props.inputData?.classForCardTitle}>
                  {card?.cardTitle}{" "}
                </div>
              ) : null}
              {card?.cardImage2 ? (
                <img
                  src={card?.cardImage2}
                  className={
                    card?.classForCardImg2
                      ? card?.classForCardImg2
                      : "w-full rounded-t-lg  py-2"
                  }
                />
              ) : null}
              {card?.cardTitle_2 ? (
                <span className="flex justify-center mt-1">
                  <h6
                    className={
                      props?.inputData?.classForcardTitle_2
                        ? props?.inputData?.classForcardTitle_2
                        : "text-md text-primary  font-bold"
                    }
                  >
                    {card?.cardTitle_2}
                  </h6>
                </span>
              ) : null}
              {card?.cardTitle_3 ? (
                <span className="flex justify-center mt-1">
                  {card?.cardTitle_3_Icon}&nbsp;
                  <h6
                    className={
                      props?.inputData.classForCardTitle_3
                        ? props?.inputData.classForCardTitle_3
                        : "mb-4 text-3xl text-primary  font-bold"
                    }
                  >
                    {card?.cardTitle_3}
                  </h6>
                </span>
              ) : null}
              {card?.cardButton ? (
                <div
                  className={
                    card?.cardButtonColor +
                    " text-2xl font-bold py-5 rounded-b-lg "
                  }
                >
                  <a href={card?.link}> {card?.cardButtonTitle}</a>
                </div>
              ) : null}

              <div className="relative  bg-darkBlue bg-fixed opacity-0  ease-in-out  hover:opacity-70  h-full hover: transition-shadow duration-500">
                <div className="absolute animate-slideInUp left-0 bottom-0 h-auto px-10 py-12 text-left ">
                  <p className="text-3xl text-white ">{card?.cardTitle}</p>
                  <p className="text-lg text-white">{card?.cardsubTitle}</p>
                  <p className="text-xl  text-white">{card?.cardPara}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CardsBlocks1;
