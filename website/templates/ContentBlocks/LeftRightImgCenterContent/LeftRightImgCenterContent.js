/*==========================================================
  Developer  :  Sarika Ghanwat
  Date       :  1st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

"use client";
import React from 'react'
import Image from 'next/image'

const LeftRightImgCenterContent = (props) => {
    return (
        <section  id="LeftRightImgCenterContent" className={props?.inputData?.classForblockWrapper ? props?.inputData?.classForblockWrapper:"block-wrapper "}>
            <div className={props?.inputData?.classForblockTitle ? props?.inputData?.classForblockTitle:'blockTitle '}>
                {props?.inputData?.blockTitle}
            </div>
            <div className='grid gap-9 mt-5 md:mt-20 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                <div className={props?.inputData?.classForImageWrapper ? props?.inputData?.classForImageWrapper:" image-wrapper "}>
                    <Image 
                        key={props?.inputData?.imgAlt1}
                        src={props?.inputData?.imgSrc1}
                        alt={props?.inputData?.imgAlt1}
                        width={100}
                        height={100}
                        className={props?.inputData?.classForImage ? props?.inputData?.classForImage:"image-class"}
                    />
                </div>
                <div className={props?.inputData?.classForContentWrap ? props?.inputData?.classForContentWrap:'content-wrapper'}>
                    {props?.inputData?.blockContent}
                </div>
                <div className={props?.inputData?.classForImageWrapper ? props?.inputData?.classForImageWrapper:" image-wrapper "}>
                    <Image
                        src={props?.inputData?.imgSrc2}
                        alt={props?.inputData?.imgAlt2}
                        width={100}
                        height={100}
                        className={props?.inputData?.classForImage ? props?.inputData?.classForImage:"image-class"}
                    />
                </div>
            </div>            
        </section>
    )
}
export default LeftRightImgCenterContent;