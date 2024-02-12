/*==========================================================
  Developer  :  Priyanka Bhanvase And Sarika Ghanwat
  Date       :  30 Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

import React from "react";
import Image from "next/image";

const HexagonGrid = (props) => {
  var imageurl = "/images/generic/10.webp";
  var imageurl1 = "/images/generic/11.webp";
  var largeImageURL = props?.inputData?.bgImage;
  var smallImageURL = props?.inputData?.smallBGImage;
  return (
    <section
      className={
        props?.inputData?.bgImgCss
          ? props?.inputData?.bgImgCss + " lazyload "
          : "relative bg-cover p-6 md:p-2 lg:px-12 lg:-mt-10 block   bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload "
      }
      style={{
        "--largeImage-url": `url(${largeImageURL})`,
        "--smallImage-url": `url(${
          smallImageURL ? smallImageURL : largeImageURL
        })`,
        backgroundSize: "100% 100%",
      }}
    >
      {/* <div className="mx-auto my-auto content-center place-content-center">
				<div className={"border-dashed border-2 absolute rounded-full cursor-pointer h-[600px] w-[600px]	"}>
            <div className="hexcontainer mx-auto my-auto content-center place-content-center">
                <div className="hex absolute pos0 "></div>
                <div className="hex absolute pos1 "></div>
                 <div className="hex absolute pos2 "></div>
                 <div className="hex absolute pos3 animate-spin animate-spin-4s infinite cursor-pointer"></div>

                <div className="hex absolute pos3 hover:animate-spin hover:animate-spin-4s hover:infinite hover:cursor-pointer "></div>
                <div className="hex absolute pos4 "></div>
                <div className="hex absolute pos5 "></div>
                <div className="hex absolute pos6"></div>
            </div>
            </div>
            </div>

            <svg style={{"visibility": "hidden", "position": "absolute"}} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />    
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                    </filter>
                </defs>
            </svg> */}
      {/* <div className="flex justify-around items-center mt-56 mx-auto my-auto content-center place-content-center">
<div className="border-dashed border-4 h-[720px] border-red-500 rounded-full p-10">

	<div className="border-dashed border-4 border-red-500 rounded-full p-10">
		<div className="border-dashed border-4 border-red-500 text-center text-xl text-white font-medium rounded-full p-2">
            <div className="hexcontainer  mx-auto my-auto content-center place-content-center">
                <div className="hex absolute pos0 ">
                    <Image
                        src="/images/generic/10.webp"
                        alt= "imageDescription"
                        width={100}
                        height={100}
                        className="image-class"
                    />
                </div>
                <div className="hex absolute pos1 "></div>
                 <div className="hex absolute pos2 "></div>
                 <div className="hex absolute pos3 animate-spin animate-spin-4s infinite cursor-pointer"></div>

                <div className="hex absolute pos4 "></div>
                <div className="hex absolute pos5 "></div>
                <div className="hex absolute pos6"></div>
            </div>

            <svg style={{"visibility": "hidden", "position": "absolute"}} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />    
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                    </filter>
                </defs>
            </svg>
        </div>
	</div>
</div>
</div>  */}

      <div className="w-full mb-4">
        <ul className="place-content-center flex flex-wrap text-blue-700">
          <li
            className={"dash1 border-blue-600 " + props?.inputData?.dash}
          ></li>
          <li
            className={"dash2 border-blue-700 " + props?.inputData?.dash}
          ></li>
          <li
            className={"dash3 border-blue-700 " + props?.inputData?.dash}
          ></li>
        </ul>
      </div>
      {props?.inputData?.blockTitle ? (
        <h2
          className={
            props?.inputData?.classForblockTitle
              ? props?.inputData?.classForblockTitle
              : "blockTitle "
          }
          dangerouslySetInnerHTML={{ __html: props?.inputData?.blockTitle }}
        ></h2>
      ) : null}
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
              {/* <div className="grid grid-cols-1 md:grid-cols-none hexcontainer  h-auto md:h-[680px] w-[600px] md:w-[680px] relative -ml-[35px] md:ml-auto mx-auto my-auto content-center place-content-center"> */}
              <div className="grid grid-cols-1 md:grid-cols-none hexcontainer  h-auto md:h-[680px] w-[600px] md:w-[680px] relative mx-auto -ml-[16px] sm:-ml-[10px] md:ml-0 lg:ml-10 my-auto content-center place-content-center">
                <div className="hex md:absolute pos0 bg-no-repeat bg-cover bg-center">
                  {/* <div className="absolute top-12 md:top-20 left-16 md:left-20 w-32 text-center mx-auto"> */}
                    {/* <img
                      className="mx-auto"
                      src="/images/specific/Home/WhatWeDo/1.webp"
                    ></img> */}
                    {/* <div className=" text-darkGray  text-md font-semibold">
                      APPLICATION DEVELOPMENT
                    </div> */}
                  {/* </div> */}
                  {/* <div className='absolute top-32 left-20 text-darkGray  text-md font-semibold'>
                                        APPLICATION DEVELOPMENT</div> */}

                  <img src="/images/specific/Home/What-We-Do-Icons/1.webp" alt="smallHexagon" />
                </div>
                <div className="hex md:absolute pos1 bg-no-repeat bg-cover bg-center ">
                  {/* <div className="absolute top-12 md:top-16 left-16 md:left-20 w-32 text-center mx-auto"> */}
                    {/* <img
                      className="mx-auto" 
                      src="/images/specific/Home/WhatWeDo/6.webp"
                    ></img> */}
                    {/* <div className=" text-darkGray  text-md font-semibold">
                      ROBOTIC PROCESS AUTOMATION
                    </div> */}
                  {/* </div> */}
                  <img src="/images/specific/Home/What-We-Do-Icons/2.webp" alt="smallHexagon" />
                </div>
                <div className="hex md:absolute pos2 bg-no-repeat bg-cover bg-center ">
                  {/* <div className="absolute top-12 md:top-20 left-12 md:left-16 w-40 text-center mx-auto"> */}
                    {/* <img
                      className="mx-auto"
                      src="/images/specific/Home/WhatWeDo/2.webp"
                    ></img> */}
                    {/* <div className=" text-darkGray  text-md font-semibold">
                      DIGITAL TRANSFORMATION
                    </div> */}
                  {/* </div> */}
                  {/* <div className='absolute top-32 left-24 text-darkGray  bodyTxt'>DIGITAL TRANSFORMATION</div> */}
                  <img src="/images/specific/Home/What-We-Do-Icons/3.webp" alt="smallHexagon" />
                </div>
                <div className="hex md:absolute pos3 bg-no-repeat bg-cover bg-center  cursor-pointer">
                  {/* <div className="absolute w-40 top-28 font-bold md:top-32 left-12 md:left-16 text-center text-white  bodyTxt">
                    SERVICES
                  </div> */}
                  <img src="/images/specific/Home/What-We-Do-Icons/7.webp" alt="smallHexagon" />
                </div>

                <div className="hex md:absolute pos4 bg-no-repeat bg-cover bg-center ">
                  {/* <div className="absolute top-16 md:top-20 left-16 md:left-20 w-32 text-center mx-auto"> */}
                    {/* <img
                      className="mx-auto"
                      src="/images/specific/Home/WhatWeDo/5.webp"
                    ></img> */}
                    {/* <div className=" text-darkGray  text-md font-semibold">
                      CYBER SECURITY
                    </div> */}
                  {/* </div> */}
                  {/* <div className='absolute top-32 left-20 text-darkGray  text-md font-semibold'>
                                  CYBER SECURITY  </div> */}
                  <img src="/images/specific/Home/What-We-Do-Icons/4.webp" alt="smallHexagon" />
                </div>
                <div className="hex md:absolute pos5 bg-no-repeat bg-cover bg-center ">
                  {/* <div className="absolute top-12 md:top-16 left-12 md:left-16 w-40 text-center mx-auto"> */}
                    {/* <img
                      className="mx-auto"
                      src="/images/specific/Home/WhatWeDo/4.webp"
                    ></img> */}
                    {/* <div className=" text-darkGray  text-md font-semibold">
                      IT INFRASTRUCTURE MANAGEMENT
                    </div> */}
                  {/* </div> */}
                  {/* <div className='absolute top-32 left-20 text-darkGray  text-md font-semibold'>
                                IT INFRASTRUCTURE MANAGEMENT</div> */}
                  <img src="/images/specific/Home/What-We-Do-Icons/5.webp" alt="smallHexagon" />
                </div>
                <div className="hex md:absolute pos6 bg-no-repeat bg-cover bg-center">
                  {/* <div className="absolute top-16 md:top-20 left-16 md:left-20 w-32 text-center mx-auto"> */}
                    {/* <img
                      className="mx-auto"
                      src="/images/specific/Home/WhatWeDo/3.webp"
                    ></img> */}
                    {/* <div className=" text-darkGray  text-md font-semibold">
                      SOFTWARE TESTING & QA
                    </div> */}
                  {/* </div> */}
                  {/* <div className='absolute top-32 left-20 text-darkGray  text-md font-semibold'>
                                    ROBOTIC PROCESS AUTOMATION</div> */}
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
