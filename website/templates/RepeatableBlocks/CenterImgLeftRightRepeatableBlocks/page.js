const React = require("react");
const CenterImgLeftRightRepeatableBlocks = (props) => {
  const { inputData } = props;
  const largeImageURL = inputData?.bgImage;
  const smallImageURL = inputData?.smallBGImage;
  const defaultImageURL = largeImageURL || 'none';
  
  return (
    <section className={` ${inputData?.classForLeftImageContainer}`}>
      <div
        className={`relative bg-cover p-12 block bg-white bg-no-repeat max-w-full sm:bg-cover bg-center lg:bg-[image:var(--largeImage-url)] bg-[image:var(--smallImage-url)] lazyload ${inputData?.bgImgCss || ''}`}
        style={{
          "--largeImage-url": `url(${defaultImageURL})`,
          "--smallImage-url": `url(${smallImageURL || largeImageURL || 'none'})`,
          backgroundSize: "100% 100%",
        }}
      >
        {inputData?.dash && (
          <div className="w-full mb-4">
            <ul className="place-content-center flex flex-wrap">
              {[...Array(3)].map((_, index) => (
                <li key={index} className={`dash${index + 1} ${inputData.dash}`}></li>
              ))}
            </ul>
          </div>
        )}
        {inputData?.blockTitle && (
          <h2
            className={inputData.classForblockTitle}
            dangerouslySetInnerHTML={{ __html: inputData.blockTitle }}
          ></h2>
        )}
        {inputData?.blockContent && (
          <div className={inputData.classForblockContent}>{inputData.blockContent}</div>
        )}
        <div className={inputData?.classForContainer}>
          <div className={inputData?.classForLeftBlockContainer}>
            {inputData?.leftBlocks.map((block, index) => (
              <div key={index} className={inputData?.classForLeftContentContainer}>
                <div className="grid grid-cols-5 md:grid-cols-4 md:py-5" style={{ justifyContent: "center" }}>
                  <div className="col-span-4 md:col-span-3 mr-10 md:mr-auto">
                    <h2 className={inputData?.classForRightContenTitleStyle} dangerouslySetInnerHTML={{ __html: block.leftTitle }}></h2>
                    {block.leftSubTitle && (
                      <h3 className="text-gray-700 text-xs sm:text-base" dangerouslySetInnerHTML={{ __html: block.leftSubTitle }}></h3>
                    )}
                  </div>
                  <div className="order-first md:order-none items-center place-content-center content-center my-auto mx-auto md:ml-3 lg:mx-auto">
                    <div className="relative mx-auto bg-white rounded-full float-right">
                      <img src={block.img} alt={inputData?.imgAlt} className="mx-auto p-2 md:w-16 lazyload object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={inputData?.classForImageContainer}>
            <div className={inputData?.classForCardImage}>
              <img src={inputData?.imageSrc} alt={inputData?.imgAlt} className="object-cover mx-auto lazyload"/>
            </div>
          </div>
          <div className={inputData?.classForRightBlockContainer}>
            {inputData?.rightBlocks.map((block, index) => (
              <div key={index} className={inputData?.classForRightContentContainer}>
                <div className="grid grid-cols-5 md:grid-cols-4 md:py-5">
                  <div className="items-center place-content-center content-center my-auto mx-auto md:mr-3 lg:mx-auto">
                    <div className="relative mx-auto bg-white rounded-full float-left">
                      <img src={block.img} alt={inputData?.imgAlt} className="mx-auto md:w-16 p-2 lazyload object-cover" />
                    </div>
                  </div>
                  <div className="col-span-4 md:col-span-3 mr-10 md:mr-auto">
                    <h2 className={inputData?.classForLeftContenTitleStyle} dangerouslySetInnerHTML={{ __html: block.leftTitle }}></h2>
                    {block.leftSubTitle && (
                      <h3 className="text-gray-700 text-xs sm:text-base" dangerouslySetInnerHTML={{ __html: block.leftSubTitle }}></h3>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenterImgLeftRightRepeatableBlocks;
