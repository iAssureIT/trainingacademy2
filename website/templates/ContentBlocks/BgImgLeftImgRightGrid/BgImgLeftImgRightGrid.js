"use client";

import Image from "next/image";
import React, { useState } from "react";
const BgImgLeftImgRtGrid = (props) => {
  var largeImageURL = props?.inputData?.bgImage;
  var smallImageURL = props?.inputData?.smallBGImage;
  const [colorTxt, setcolorTxt] = useState(props?.inputData?.colorTxt);
  const [para, setpara] = useState(props?.inputData?.para);
  const [link, setlink] = useState(props?.inputData?.link);
  const [colorCode, setcolorCode] = useState(props?.inputData?.color);
  const [fgImg, setFgImg] = useState(props?.inputData?.fgImg);
  const [showMe, setShowMe] = useState(false);
  const toggle=()=>{
    setShowMe(!showMe);
  }
  const handleChangeColor = (index, img, txt, colorCode, para, link, fgImg) => {
    /// setBgImg(img);
    setcolorTxt(txt);
    setcolorCode(colorCode);
    setpara(para);
    setlink(link);
    setFgImg(fgImg)
  };
  return (
    <section id={props?.inputData?.id}>
      {/* <div className={props?.inputData?.bgImgCss ? props?.inputData?.bgImgCss : "relative bg-cover p-12 block shadow-lg  bg-no-repeat  max-w-full  sm:bg-cover bg-center "} style={{ backgroundImage: `url(${imageURL})`, backgroundSize: "100% 100%" }}> */}
      <div
        className={
          props?.inputData?.bgImgCss
            ? props?.inputData?.bgImgCss+" lazyload "
            : "relative bg-cover p-12 block shadow-lg  bg-no-repeat  max-w-full  sm:bg-cover bg-center  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] lazyload "
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
        {
          props?.inputData?.pageTitle ?
            <h2 className={props?.inputData?.pageTitleCss ? props?.inputData?.pageTitleCss : "block font-extrabold uppercase text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl"}
              dangerouslySetInnerHTML={{ __html: props?.inputData?.pageTitle }}>
            </h2>
            :
            null
        }
        {
          props?.inputData?.blockContent ?
            <h3 className={props?.inputData?.classForblockContent ? props?.inputData?.classForblockContent : "block font-extrabold uppercase text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl"}
              dangerouslySetInnerHTML={{ __html: props?.inputData?.blockContent }}>
            </h3>
            :
            null
        }
        {
          props?.inputData?.gridCss
          ?
            <div
              className={
                props?.inputData?.gridCss
                  ? props?.inputData?.gridCss
                  : " grid grid-cols-1  sm:grid-cols-2  md:grid-cols-2   lg:grid-cols-2 2xl:grid-cols-2  xl:grid-cols-2 h-full w-full content-center "
              }
            >
              {
                fgImg
                ? 
                  <div
                    className={
                      props?.inputData?.imageCss
                        ? props?.inputData?.imageCss
                        : " object-fit "
                    }
                  >
                    
                    <img
                      className={
                        props?.inputData?.imgTagcss
                          ? props?.inputData?.imgTagcss+" lazyload "
                          : "h-full w-full lazyload "
                      }
                      src={fgImg}
                      alt="Picture of the author"
                    />
                  </div>
                :null
              }
              <div
                className={
                  props?.inputData?.gridSubDivCss
                    ? props?.inputData?.gridSubDivCss
                    : "  text-white xs:pl-2 sm:pl-10 lg:pl-20 xl:pl-24 xxl:pl-40 my-auto text-center xs:text-left  py-10 sm:py-0 "
                }
              >
                <div
                  className={
                    props?.inputData?.contentCss
                      ? props?.inputData?.contentCss
                      : " md:col-start-2 place-content-center flex justify-center  items-center "
                  }
                >
                  <div
                    className={
                      props?.inputData?.contentSubDiv
                        ? props?.inputData?.contentSubDiv
                        : "lg:h-64 xl:h-96 w-full p-10 justify-center  items-center  rounded-lg shadow-2xl text-center"
                    }
                  >
                    <div className="text-left ">
                      {/* <span className="font-bold text-lg md:text-3xl ">COLORS</span>{" "} */}
                      <div
                        className={
                          `${colorCode}` === "white"
                            ? "text-lg sm:text-2xl ml-3 text-gray"
                            : `text-lg sm:text-2xl ml-3 text-${colorCode} `
                        }
                      >
                        {" "}
                        {
                          colorTxt?
                            <p className="text-lg md:text-xl lg:text-2xl xl:text-[28px] 2xl:text-[30px] font-bold text-left leading-normal">{colorTxt}</p>
                          :null
                        }
                        {
                          para?
                            <p className="mt-5 mb-5 text-left text-lg  ">{para}</p>
                          :null
                        }
                        {link
                          ?
                            <a style={{   display: showMe?"block":"none"   }}  className=" mb-2  break-all underline text-lg  " href={link} target="_blank">{link}</a>
                          :null
                        } 
                        {
                            props?.inputData?.urlName
                            ?
                              <div className={props?.inputData?.linkCss ? props?.inputData?.linkCss : "text-white hidden"}>
                                <a onClick={toggle} className="cursor-pointer" >{showMe?"Read less" :props?.inputData?.urlName}
                                  {/* <i className="fa-solid  fa-angle-double-right"></i> */}
                                </a>
                              </div>
                            :null
                          }
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          :null
        }
        <div
          className={
            props?.inputData?.colorGridCss
              ? props?.inputData?.colorGridCss
              : "grid grid-cols-2 md:grid-cols-4 mt-5 w-2/3 md:w-1/2 lg:mb-20 xl:mb-20 mx-auto place-items-center gap-y-4 md:gap-x-20 lg:gap-x-2"
          }
        >
          {props?.inputData?.colorArr
            ? props?.inputData?.colorArr.map((data, index) => {
              // var activeClass = (data.color===colorCode) ? ` border-double border-4 border-${data.color}  ` : "";
              var activeClass =
                data.color === colorCode
                  ? ` border-2 md:border-4 xl:border-8 border-offWhite shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]`
                  : "";
             return (
                <div 
                  key={index}
                  className={
                    `h-24 m-2 w-24 sm:h-24 sm:w-24 relative   md:h-15 md:w-15 lg:p-8 xl:p-16 2xl:p-14 rounded-full   shadow-[rgba(255,28,255,_1.74)_0px_0px_16px] ${data.bgcolor}` +
                    `${activeClass}`                                                   
                  }
                  onClick={() =>
                    handleChangeColor(
                      index,
                      data.bgImg,
                      data.colorTxt,
                      data.color,
                      data.para,
                      data.link,
                      data.fgImg
                    )
                  }
                  
                >
                  <div className="h-20 w-20 xl:h-24 xl:w-24 2xl:h-20 2xl:w-20 bg-no-repeat absolute left-2 top-2 xl:left-4 xl:top-4 lazyload " style={{
                    backgroundImage: `url(${data.bgImg})`,
                    backgroundSize: "100% 100%",
                  }}></div>
                  
                </div>
              );
            })
            : null}
        </div>
      </div>
    </section>
  );
};
export default BgImgLeftImgRtGrid;
