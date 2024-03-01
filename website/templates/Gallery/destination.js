import React from "react";

const Destination = ({ inputData }) => {
  const {
    classForNoOfCards = "grid grid-cols-3 gap-x-6 md:grid-cols-3 md:gap-x-6 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6",
    dash,
    pageTitle,
    pageTitleCss,
    blockContent,
    classForblockContent,
    cardsArray,
    classForCards,
    classForCardImg2,
    classForBlkWidth,
    classForcardTitle_2,
  } = inputData;

  return (
    <section className="bg-white">
      {dash && (
        <div className="w-full mb-4">
          <ul className="place-content-center flex flex-wrap">
            {[...Array(3)].map((_, i) => (
              <li key={i} className={`dash${i + 1} ${dash}`}></li>
            ))}
          </ul>
        </div>
      )}
      {pageTitle && (
        <h2
          className={
            pageTitleCss ? pageTitleCss : "block font-extrabold uppercase text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl"
          }
          dangerouslySetInnerHTML={{ __html: pageTitle }}
        ></h2>
      )}
      {blockContent && (
        <div
          className={classForblockContent ? classForblockContent : "content-wrapper"}
          dangerouslySetInnerHTML={{ __html: blockContent }}
        ></div>
      )}
      <div className={classForNoOfCards}>
        {cardsArray.map((card, index) => (
          <div className={classForCards} key={index}>
            <div className="block relative group flex">
              <div
                className="flex-container bg-cover bg-no-repeat w-full lg:bg-[image:var(--largeImage-url)] bg-[image:var(--smallImage-url)]"
                style={{
                  backgroundImage: card.bgImg ? `url(${card.bgImg})` : "none",
                  backgroundSize: "100% 100%",
                }}
              >
                <div className="w-auto">
                  <div>
                    <img
                      src={card.cardImage2}
                      alt={"cardImg" + index}
                      className={classForCardImg2 ? classForCardImg2 : "w-full"}
                    />
                  </div>
                  <div className={classForBlkWidth ? classForBlkWidth : "text-white md:h-40 lg:h-auto p-4 w-3/5 md:w-3/5 lg:w-2/3 xl:w-3/5 2xl:w-1/2"}>
                    {card.cardTitle_2 && (
                      <h3
                        className={
                          classForcardTitle_2
                            ? classForcardTitle_2
                            : "text-md text-primary  font-bold"
                        }
                      >
                        {card.cardTitle_2}
                      </h3>
                    )}
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="hover:cursor-pointer absolute inset-0 flex items-end justify-end opacity-100 transition-opacity group-hover:opacity-100">
                    <div className="w-1/3 md:w-2/5 lg:w-1/3 bg-blue-800 my-auto py-auto text-white flex flex-col h-full justify-start items-center">
                      <div className="p-4 font-semibold text-left text-xs md:text-sm 2xl:text-lg inline-block align-top overflow-y-auto xl:leading-[1.8rem] 2xl:leading-normal">
                        <span>{card.cardPara}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destination;
