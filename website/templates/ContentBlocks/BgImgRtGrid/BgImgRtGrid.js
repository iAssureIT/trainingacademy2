"use client";
import React, { useState } from "react";
const BgImgRtGrid = (props) => {
  const [bgImg, setBgImg] = useState(props?.inputData?.bgImage);
  const [colorTxt, setcolorTxt] = useState(props?.inputData?.colorTxt);
  const [colorCode, setcolorCode] = useState(props?.inputData?.color);

  const handleChangeColor = (index, img, txt, colorCode) => {
    /// setBgImg(img);
    setcolorTxt(txt);
    console.log("colorCode", colorCode);
    setcolorCode(colorCode);
  };
  return (
    <section id={props?.inputData?.id}>
      <div
        className={
          props?.inputData?.bgImgCss
            ? props?.inputData?.bgImgCss
            : "w-full bg-cover bg-center   h-[180px] sm:h-[200px]  mb-8 md:h-[300px] lg:h-[350px] "
        }
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div
          className={
            props?.inputData?.gridCss
              ? props?.inputData?.gridCss
              : "grid grid-cols-1 md:grid-cols-2  lg:h-full   xl:h-full h-full"
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
                  : "lg:h-64 xl:h-64 w-2/3 p-20 justify-center  items-center bg-slate-50 rounded-lg shadow-2xl text-center"
              }
            >
              <div className="text-left">
                {/* <span className="font-bold text-lg md:text-3xl ">COLORS</span>{" "} */}
                <span
                  className={
                    `${colorCode}` === "white"
                      ? "text-lg sm:text-2xl ml-3 text-gray"
                      : `text-lg sm:text-2xl ml-3 text-${colorCode} `
                  }
                >
                  {" "}
                  {colorTxt}
                </span>
              </div>
              <div
                className={
                  props?.inputData?.colorGridCss
                    ? props?.inputData?.colorGridCss
                    : "grid grid-cols-5"
                }
              >
                {props?.inputData?.colorArr
                  ? props?.inputData?.colorArr.map((data, index) => {
                      console.log("data", data.color, "colorCode", colorCode);
                      // var activeClass = (data.color===colorCode) ? ` border-double border-4 border-${data.color}  ` : "";
                      var activeClass =
                        data.color === colorCode
                          ? ` border-double border-4 border-offWhite`
                          : "";
                      console.log("activeClass", activeClass);
                      return (
                        <div
                          className={
                            `h-15 m-2 w-15 sm:h-10 sm:w-10 md:h-15 md:w-15 rounded-full   shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${data.bgcolor}` +
                            `${activeClass}`
                          }
                          onClick={() =>
                            handleChangeColor(
                              index,
                              data.bgImg,
                              data.colorTxt,
                              data.color
                            )
                          }
                          style={{
                            backgroundImage: `url(${data.bgImg})`,
                            backgroundSize: "100% 100%",
                          }}
                        ></div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BgImgRtGrid;
