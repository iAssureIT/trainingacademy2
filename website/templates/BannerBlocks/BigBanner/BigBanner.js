/*==========================================================
  Developer  :  Priyanka Bhanvase
  Date       :  1st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

import React from 'react'

const Banner = (props) => {
  const imageURL = props.inputData.bgImage;
  return (
    <section id={props.inputData.id} className={props?.inputData?.bgImgCss ? props?.inputData?.bgImgCss : " bg-no-repeat  bg-cover sm:bg-cover bg-center w-full h-[250px] sm:h-[400px]  mb-8 md:h-[600px] lg:h-[700px] xxl:h-[800px]"} style={{ backgroundImage: `url(${imageURL})`, backgroundSize: "100% 100%" }}>
      <div className={props?.inputData?.contentClassName ? props?.inputData?.contentClassName : " py-10	grid lg:grid-cols-2  gap-6 md:gap-0 md:grid-cols-1 lg:text-center text-center "}>
        <div className={props?.inputData?.textSecCss ? props?.inputData?.textSecCss : 'my-4 xs:my-3 md:my-20  lg:my-32 md:px-2 lg:px-5 xl:px-12 xxl:px-20  '}>
          {
            props?.inputData?.heading
              ?
              <div className={props?.inputData?.heading_css ? props?.inputData?.heading_css : "text-white xxl:text-5xl lg:text-7xl md:text-6xl font-extrabold xxl:mt-6 mt-5 text-4xl"} >{props.inputData.heading}</div>
              :
              null
          }
          {
            props?.inputData?.para1
              ?
              <div className={props?.inputData?.paraCss ? props?.inputData?.paraCss : "text-white xxl:text-8xl lg:text-7xl md:text-6xl font-extrabold xxl:mt-6 mt-5 text-4xl"} >{props?.inputData?.para1}</div>
              :
              null
          }
          {
            props?.inputData?.logo
              ?
              <div className={props?.inputData?.logoClassName ? props?.inputData?.logoClassName : 'flex '}>
                <img src={props?.inputData?.logo} />
              </div>
              :
              null
          }
          {
            props?.inputData?.subHeading
              ?
              <div className={props?.inputData?.className ? props?.inputData?.className : "text-white xxl:text-8xl lg:text-7xl md:text-6xl font-extrabold xxl:mt-6 mt-5 text-4xl"} >{props.inputData.subHeading}</div>
              :
              null
          }

          <div className={props?.inputData?.paraCss ? props?.inputData?.paraCss : "text-white xxl:text-8xl lg:text-7xl md:text-6xl font-extrabold xxl:mt-6 mt-5 text-4xl"} >{props.inputData.para}</div>
          <div className={props?.inputData?.linkCss ? props?.inputData?.linkCss : "text-white hidden"}>
            <a href={props?.inputData?.url} >{props?.inputData?.urlName} <i className="fa-solid fa-angle-right"></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}




export default Banner
