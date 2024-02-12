/*==========================================================
  Developer  :  Sarika Ghanwat
  Date       :  12st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

import React from 'react'

const SmallBannerRtContent = (props) => {
    var largeImageURL = props?.inputData?.bgImage;
    var smallImageURL = props?.inputData?.smallBGImage;

    return (
        <section id="SmallBannerRtContent">
            <div
                className={
                    props?.inputData?.bgImgCss
                        ?
                        props?.inputData?.bgImgCss
                        :
                        "relative bg-cover p-12 block shadow-lg  bg-no-repeat  max-w-full  sm:bg-cover bg-center  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]"
                }
                style={{
                    '--largeImage-url': `url(${largeImageURL})`,
                    '--smallImage-url': `url(${smallImageURL ? smallImageURL : largeImageURL})`,
                    'backgroundSize': "100% 100%"
                }}
            >
                {/* <div className={props?.inputData?.bgImgCss?props?.inputData?.bgImgCss:"w-full bg-cover bg-center   h-[180px] sm:h-[200px]  mb-8 md:h-[300px] lg:h-[350px]  xl:h-[500px] xxl:h-[600px]"} style={{ backgroundImage: `url(${imageURL})`, backgroundSize: "100% 100%" }}> */}
                <div className="grid grid-cols-1 xs:grid-cols-2  lg:h-full   xl:h-full h-full">
                    {
                        props?.inputData?.image
                            ?
                            <div className={props?.inputData?.imageCss ? props?.inputData?.imageCss : ' object-fit '}>
                                <img
                                    className={props?.inputData?.imgTagcss ? props?.inputData?.imgTagcss : 'h-full w-full'}
                                    src={props?.inputData?.image}
                                    alt="Picture of the author"
                                />
                            </div>
                            :
                            null
                    }
                    <div className=' place-content-center flex justify-center '>
                        <h1 className={props?.inputData.titleCss ? props?.inputData.titleCss : "flex justify-center  items-center h-96 my-auto text-bold"}>{props?.inputData.title} </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SmallBannerRtContent;
