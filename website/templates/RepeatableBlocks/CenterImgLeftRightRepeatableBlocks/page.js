


const React = require("react");
import Image from "next/image"; // Import the Image component

const CenterImgLeftRightRepeatableBlocks = (props) => {
  var largeImageURL = props?.inputData?.bgImage;
    var smallImageURL = props?.inputData?.smallBGImage;
  return (
    <section className={` ${props.inputData?.classForLeftImageContainer}`}>
      <div
        className={
          props?.inputData?.bgImgCss
            ? props?.inputData?.bgImgCss
            : "relative bg-cover p-12 block shadow-lg  bg-no-repeat  max-w-full  sm:bg-cover bg-center  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload"
        }
        style={{
          "--largeImage-url": `url(${largeImageURL})`,
          "--smallImage-url": `url(${smallImageURL ? smallImageURL : largeImageURL
            })`,
          backgroundSize: "100% 100%",
        }}
      >
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
        {props.inputData?.blockTitle && (
          <h2 className={props.inputData?.classForblockTitle}
            dangerouslySetInnerHTML={{
              __html: props?.inputData?.blockTitle,
            }}></h2>
        )}
        {props.inputData?.blockContent && (
          <div className={props.inputData?.classForblockContent}>{props.inputData?.blockContent}</div>
        )}

        <div className={props.inputData?.classForContainer}>
          <div className={props.inputData?.classForLeftBlockContainer}>
            {props.inputData?.leftBlocks.map((block, index) => (
              <div key={index} className={props.inputData?.classForLeftContentContainer}>
                <div className="grid grid-cols-5 md:grid-cols-4 md:py-5" style={{ justifyContent: "center" }}>
                  {/* <div className={props.inputData?.classForLeftContentinsideContainer}> */}
                    <div className="col-span-4 md:col-span-3 mr-10 md:mr-auto" ><h2 className={props.inputData?.classForRightContenTitleStyle}
                    dangerouslySetInnerHTML={{
                      __html: block.leftTitle,
                    }}>
                      
                    </h2>
                    { block?.leftSubTitle?
                    <h3 className="text-gray-700 text-xs sm:text-base"
                    dangerouslySetInnerHTML={{
                      __html: block.leftSubTitle,
                    }}></h3>
                    :
                    ""
                  }
                  </div>
                  <div
                    className=" order-first md:order-none items-center place-content-center content-center my-auto mx-auto md:ml-3 lg:mx-auto"
                 >
                    <div className=" relative mx-auto bg-white   rounded-full float-right">
                      <img src={block?.img} alt={props.inputData?.imgAlt}  className="mx-auto p-2 md:w-16 lazyload object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={props.inputData?.classForImageContainer}>
            <div className={props.inputData?.classForCardImage}>
              <img src={props?.inputData?.imageSrc} alt={props.inputData?.imgAlt}   className="object-cover mx-auto lazyload"/>
            </div>
          </div>

          <div className={props.inputData?.classForRightBlockContainer}>
            {props.inputData?.rightBlocks.map((block, index) => (
              <div key={index} className={props.inputData?.classForRightContentContainer}>
                <div className="grid grid-cols-5 md:grid-cols-4 md:py-5" style={{  }}>
                <div
                    className="items-center place-content-center content-center my-auto mx-auto  md:mr-3 lg:mx-auto"
                 >
                    <div className=" relative mx-auto bg-white   rounded-full float-left ">
                      <img src={block?.img} alt={props.inputData?.imgAlt} className="mx-auto md:w-16   p-2 lazyload object-cover " />
                    </div>
                  </div>
                  {/* <div className={props.inputData?.classForRightContentinsideContainer}> */}
                  <div className="col-span-4 md:col-span-3 mr-10 md:mr-auto" > <h2 className={props.inputData?.classForLeftContenTitleStyle}
                    dangerouslySetInnerHTML={{
                      __html: block.leftTitle,
                    }}>
                    </h2>
                    {
                      block?.leftSubTitle?

                    <h3 className="text-gray-700 text-xs sm:text-base"
                    dangerouslySetInnerHTML={{
                      __html: block.leftSubTitle,
                    }}></h3>
                    :
                    ""
                  }
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