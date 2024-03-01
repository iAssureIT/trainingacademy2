/*==========================================================
  Developer  :  Priyaka Bhanvase
  Date       :  1st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

import React from 'react'
import Image from 'next/image'

const RightImgLeftContent = (props) => {
    return (
        <section  id="rightImgLeftContent" className={props?.inputData?.classForblockWrapper ? props?.inputData?.classForblockWrapper:"block-wrapper "}>
            <h1 className={props?.inputData?.classForblockTitle ? props?.inputData?.classForblockTitle:'blockTitle '}>
                {props?.inputData?.blockTitle}
            </h1>
            <div className='grid grid-cols-1 mt-5 gap-9 md:mt-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                <div className={props?.inputData?.classForContentWrap ? props?.inputData?.classForContentWrap:'content-wrapper'}>
                    {props?.inputData?.blockContent}
                </div>
                <div className={props?.inputData?.classForImageWrapper ? props?.inputData?.classForImageWrapper:" image-wrapper "}>
                    <Image
                        src={props?.inputData?.imgSrc}
                        alt={props?.inputData?.imgAlt ? props?.inputData?.imgAlt : "imageDescription"}
                        width={100}
                        height={100}
                        className={props?.inputData?.classForImage ? props?.inputData?.classForImage:"image-class"}
                    />
                </div>
            </div>            
        </section>
    )
}
export default RightImgLeftContent;