import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import LandingPageModal from '@/components/Modal/landingPageModal';

const LeftImgRightContent = (props) => {           
    return (
        <section  id="LeftImgRightcontent" className={props?.inputData?.classForblockWrapper ? props?.inputData?.classForblockWrapper:"block-wrapper "}>
            <div className={props?.inputData?.classForblockTitle ? props?.inputData?.classForblockTitle:'blockTitle '}>
                {props?.inputData?.blockTitle}
            </div>
            <div className='grid gap-9 mt-5 md:mt-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                <div className={props?.inputData?.classForImageWrapper ? props?.inputData?.classForImageWrapper:" image-wrapper "}>
                    <Image
                        src={props?.inputData?.imgSrc}
                        alt={props?.inputData?.imgAlt}
                        width={100}
                        height={100}
                        className={props?.inputData?.classForImage ? props?.inputData?.classForImage:"image-class"}
                    />
                </div>
                <div className={props?.inputData?.classForContentWrap ? props?.inputData?.classForContentWrap:'content-wrapper'}>
                    {props?.inputData?.blockContent}
                </div>
            </div>            
        </section>
    )
}
export default LeftImgRightContent;