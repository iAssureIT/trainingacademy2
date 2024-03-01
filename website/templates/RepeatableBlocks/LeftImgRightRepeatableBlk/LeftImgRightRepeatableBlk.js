import React from 'react';

const LeftRightImgCenterContent = ({ inputData, readMore, gridImgDisplay }) => {
  const { id, sectionClass, sectionBgImg, smallBGImage, dash, pageTitle, blockSubTitle, gridCss, gridCol1Css, imgCss, titleCss, desCss, linkCss, repeatedBlocks, para2,pageTitleCss,classForblockSubTitle,repeatedBlkCss,cssForPara2,bgImageCss,gridDivCss,gridSubDivCss,captionStyle,addressStyle } = inputData;
  const largeImageURL = sectionBgImg || null;
  const smallImageURL = smallBGImage || largeImageURL || null;

  return (
    <section
      id={id}
      className={sectionClass || "mx-auto text-center p-8 container bg-white"}
      style={{
        "--largeImage-url": largeImageURL ? `url(${largeImageURL})` : 'none',
        "--smallImage-url": smallImageURL ? `url(${smallImageURL})` : 'none',
        backgroundSize: "100% 100%",
      }}
    >
      <div className="w-full mb-4">
        <ul className="place-content-center flex flex-wrap">
          {[1, 2, 3].map((index) => (
            <li key={index} className={`dash${index} ${dash}`}></li>
          ))}
        </ul>
      </div>
      {pageTitle && (
        <h2 className={pageTitleCss || "text-3xl font-bold mb-6"} dangerouslySetInnerHTML={{ __html: pageTitle }}></h2>
      )}
      {blockSubTitle && (
        <div className="">
          <h3 className={classForblockSubTitle || "text-base sm:text-lg "} dangerouslySetInnerHTML={{ __html: blockSubTitle }}></h3>
        </div>
      )}
      <div className={gridCss || "grid grid-cols-1 lg:grid-cols-2 gap-10"}>
        <div className={gridCol1Css || "w-full h-auto relative my-auto "}>
          <img src={inputData?.bgImage} alt="Big Image" className={bgImageCss || "w-full h-auto object-cover lazyload "} width="100%" height="auto" />
        </div>
        <div className=''>
          {repeatedBlocks.map((data, index) => (
            <div key={index} className={repeatedBlkCss || ' my-10 flex shadow-xl sm:h-36 md:h-32 py-5'}>
              <div className={imgCss || ' border-gray-500 px-5 md:px-6 my-auto '}>
                <img src={data.imageSrc} alt={`Image ${index}`} className="lazyload " />
              </div>
              <div className='text-left'>
                <h2 className={titleCss || "font-bold text-base sm:text-lg mb-2"}>{data?.title}</h2>
                {data?.description && (
                  <h3 className={desCss || "text-gray-700 text-xs sm:text-base overflow-hidden "}>{data?.description}</h3>
                )}
                {readMore && (
                  <div className={linkCss || 'float-right px-4'}><a className=' text-sky-800'>Read More<i className="fa-solid fa-angle-right"></i></a></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {gridImgDisplay && (
        <div className="p-4 rounded-lg md:py-8 md:px-8 xxl:py-24 xxl:px-18" id="stats" role="tabpanel" aria-label="stats-tab">
          <dl className={gridDivCss || "grid max-w-screen-xxl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-4 xl:grid-cols-4 sm:p-8 xxl:p-1 place-items-center"}>
            {inputData.StatisticsList.map((data, index) => (
              <div key={index} className={gridSubDivCss || "flex flex-col items-center justify-center "}>
                {data.icon && <img src={data.icon} className="mx-auto lazyload " alt={"contactIcon" + index} />}
                <dt className={captionStyle || "mb-4 xxl:mb-8 text-4xl xxl:text-5xl font-extrabold text-center"}>{data.caption}</dt>
                <dd className={addressStyle || "font-semibold text-center text-2xl xxl:text-3xl"}>{data.address}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
      {para2 && (
        <div className=" ">
          <h3 className={cssForPara2 || "text-base sm:text-lg "}>{para2}</h3>
        </div>
      )}
    </section>
  );
}

export default LeftRightImgCenterContent;
