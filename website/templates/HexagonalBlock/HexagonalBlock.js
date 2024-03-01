/*==========================================================
  Developer  :  Priyanka Bhanvase And Sarika Ghanwat
  Date       :  30 Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

import React from "react";
const HexagonGrid = (props) => {  
  var largeImageURL = props?.inputData?.bgImage;
  var smallImageURL = props?.inputData?.smallBGImage;
  const dash = props?.inputData?.dash;
  const blockTitle = props?.inputData?.blockTitle;
  const classForblockTitle = props?.inputData?.classForblockTitle;
  return (
    <section
      className={
        props?.inputData?.bgImgCss
          ? props?.inputData?.bgImgCss + " lazyload "
          : "relative bg-cover p-6 md:p-2 lg:px-12 lg:-mt-10 block   bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload "
      }
      style={{
        "--largeImage-url": largeImageURL ? `url(${largeImageURL})` : 'none',
        "--smallImage-url": smallImageURL ? `url(${smallImageURL})` : largeImageURL ? `url(${largeImageURL})`: 'none', 
        backgroundSize: "100% 100%",
    }}
    >     

<div className="w-full mb-4">
        <ul className="place-content-center flex flex-wrap text-blue-700">
          {[1, 2, 3].map((index) => (
            <li key={index} className={`dash${index} border-blue-700 ${dash}`}></li>
          ))}
        </ul>
      </div>
      {blockTitle && (
        <h2 className={classForblockTitle ? classForblockTitle : "blockTitle"} dangerouslySetInnerHTML={{ __html: blockTitle }}></h2>
      )}
      <div className="container mx-auto md:py-5  ">
        <div className="w-full relative   my-auto mx-auto content-center place-content-center overflow-hidden p-0 md:p-0 lg:p-10 z-0">
          <div
            className={
              " block lg:border-dashed border-2 border-none rounded-full cursor-pointer  mainOuterCircle h-[1510px] md:h-[841px] w-[200px] md:w-[841px] md:p-[50px] my-auto mx-auto content-center place-content-center"
            }
          >
            <img
              src="/images/generic/11.webp"
              alt="smallHexagon"
              className="animatedHexagon hidden lg:block"
            />
            <img
              src="/images/generic/11.webp"
              alt="smallHexagon"
              className="animatedHexagon2 hidden lg:block"
            />
            <div className="mainInnerCircle hidden lg:block">
              <div className="Animatedcircle hidden lg:block"></div>
            </div>
            <div className="absolute ">
              <div className="grid grid-cols-1 md:grid-cols-none hexcontainer  h-auto md:h-[680px] w-[600px] md:w-[680px] relative mx-auto -ml-[16px] sm:-ml-[10px] md:ml-0 lg:ml-10 my-auto content-center place-content-center">
                <div className="hex md:absolute pos0 bg-no-repeat bg-cover bg-center">
                  

                  <img src="/images/specific/Home/What-We-Do-Icons/1.webp" alt="smallHexagon" />
                </div>
                <div className="hex md:absolute pos1 bg-no-repeat bg-cover bg-center ">
                  
                  <img src="/images/specific/Home/What-We-Do-Icons/2.webp" alt="smallHexagon" />
                </div>
                <div className="hex md:absolute pos2 bg-no-repeat bg-cover bg-center ">
                  <img src="/images/specific/Home/What-We-Do-Icons/3.webp" alt="smallHexagon" />
                </div>
                <div className="hex md:absolute pos3 bg-no-repeat bg-cover bg-center  cursor-pointer">
                  
                  <img src="/images/specific/Home/What-We-Do-Icons/7.webp" alt="smallHexagon" />
                </div>

                <div className="hex md:absolute pos4 bg-no-repeat bg-cover bg-center ">
                 
                  <img src="/images/specific/Home/What-We-Do-Icons/4.webp" alt="smallHexagon" />
                </div>
                <div className="hex md:absolute pos5 bg-no-repeat bg-cover bg-center ">
                  
                  <img src="/images/specific/Home/What-We-Do-Icons/5.webp" alt="smallHexagon" />
                </div>
                <div className="hex md:absolute pos6 bg-no-repeat bg-cover bg-center">
                  
                  <img src="/images/specific/Home/What-We-Do-Icons/6.webp" alt="smallHexagon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HexagonGrid;
