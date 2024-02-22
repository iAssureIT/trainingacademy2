/*==========================================================
  Developer  :  Sarika Ghanwat
  Date       :  12st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

import React, { useState, useEffect } from "react";
import InquiryForm from "@/widgets/InquiryForm/InquiryForm";
import Link from 'next/link';
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import StudEnrollModal from '@/components/StudentEnrollment/StudEnrollModal';
const SmallBanner = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  var largeImageURL = props?.inputData?.bgImage;
  var smallImageURL = props?.inputData?.smallBGImage;
  return (
    <section id={props.inputData.id}>
      {isModalOpen && <StudEnrollModal modalId="StudEnrollModal"/>}
      {!props?.inputData?.singlebgImage
        ?
        // <div className={props.inputData?.bgImgCss ? props.inputData?.bgImgCss : " bg-cover p-12 block shadow-lg  bg-no-repeat  max-w-full  sm:bg-cover bg-center lg:h-72 xl:h-96 h-96 "} style={{ backgroundImage: `url(${imageURL})`, backgroundSize: "100% 100%" }}>
        <div
          className={
            props?.inputData?.bgImgCss
              ?
              props?.inputData?.bgImgCss
              :
              "bg-cover p-12 block shadow-lg  bg-no-repeat  max-w-full  sm:bg-cover bg-center lg:h-72 xl:h-96 h-96  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]"
          }
          style={{
            '--largeImage-url': `url(${largeImageURL})`,
            '--smallImage-url': `url(${smallImageURL ? smallImageURL : largeImageURL})`,
            'backgroundSize': "100% 100%"
          }}
        >
          <div className={props?.inputData?.gridCss ? props?.inputData?.gridCss : " grid grid-cols-1  sm:grid-cols-2  md:grid-cols-2   lg:grid-cols-2 2xl:grid-cols-2  xl:grid-cols-2 h-full w-full content-center"}>
            <div className={props.inputData.gridCol1Class ? props.inputData.gridCol1Class : "my-auto  sm:w-auto  text-white ml-5 md:ml-10 lg:ml-10 xl:ml-32 xxl:ml-52 sm:ml-5 py-7 "}>
              {props?.inputData?.title
                ? <h2 className={props.inputData.titleClass ? props.inputData.titleClass : "mb-4 text-xl sm:text-4xl xxl:text-4xl font-bold text-white"}>
                  {props?.inputData?.title}
                </h2>
                :
                null
              }
              {props?.inputData?.subHeading
                ?
                <h4 className={props?.inputData?.subHeadingCss ? props?.inputData?.subHeadingCss : "mb-6 text-xl  font-normal  text-justify lg:w-auto"}>
                  {props?.inputData?.subHeading}
                </h4>
                :
                null
              }
              {
                props?.inputData?.logo
                  ?
                  <div className={props?.inputData?.logoClassName ? props?.inputData?.logoClassName : 'flex '}>
                    <img src={props?.inputData?.logo} data-src={props?.inputData?.logo}  className="lazyload"/>
                  </div>
                  :
                  null
              }
              {props?.inputData?.currentPage ? (
                <Breadcrumb currentPage={props?.inputData?.currentPage} />
              ) : null}
              {props?.inputData?.btnText
                ?
                <button className={props?.inputData?.btnClass}><a href={props?.inputData?.link}>{props?.inputData?.btnText}</a></button>
                :
                null
              }
            </div>
            {
              props?.inputData?.image
                ?
                <div className={props?.inputData?.imageCss ? props?.inputData?.imageCss : ' object-fit '}>
                  <img
                    className={props?.inputData?.imgTagcss ? props?.inputData?.imgTagcss+" lazyload" : 'h-full w-full lazyload'}
                    src={props?.inputData?.image}
                    alt="Picture of the author"  
                    
                  />
                </div>
                :
                null
            }
            {
              props?.inputData?.para
                ?
                <div className={props?.inputData?.paraCss ? props?.inputData?.paraCss : ' '}
                  dangerouslySetInnerHTML={{ __html: props?.inputData?.para }}>
                </div>
                :
                null
            }
            {
                            props?.inputData?.urlName
                                ?
                                <div className={props?.inputData?.linkCss ? props?.inputData?.linkCss : "text-white hidden"}>
                                    <a href={props?.inputData?.url} >{props?.inputData?.urlName} </a>
                                </div>
                                :
                                null
                        }
          </div>
          {
              props?.inputData?.modalDisplay
                  ?
                  <div onClick={() => setModalOpen(!isModalOpen)} className={props?.inputData?.modalBtnCss ? props?.inputData?.modalBtnCss : "text-white hidden"} type="button"
                      dangerouslySetInnerHTML={{ __html: props?.inputData?.modalUrlName }}>
                  </div>
                  :
                  ""
          }
        </div>
        :
        <section className="w-full bg-cover">
          <img className={props?.inputData?.className ? props?.inputData?.className+" lazyload" : "h-96 w-auto mx-auto mt-10 xxl:my-16 pb-10 lazyload"} data-src={props?.inputData?.singlebgImage} alt={props?.inputData?.alt} />
        </section>
      }
    </section>
    // <section id={props?.inputData?.id} >
    //         <div className={props?.inputData?.bgImgCss ? props?.inputData?.bgImgCss : "relative bg-cover p-12 block shadow-lg  bg-no-repeat  max-w-full  sm:bg-cover bg-center lg:h-72 xl:h-96 h-96 "} style={{ backgroundImage: `url(${imageURL})`, backgroundSize: "100% 100%" }}>
    //             <div className={props?.inputData?.gridCss ? props?.inputData?.gridCss : " grid grid-cols-1  sm:grid-cols-2  md:grid-cols-2   lg:grid-cols-2 2xl:grid-cols-2  xl:grid-cols-2 h-full w-full content-center"}>
    //                 </div>
    //                 </div>
    //                 </section>
  );
};

export default SmallBanner;
