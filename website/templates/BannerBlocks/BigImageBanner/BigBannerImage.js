/*==========================================================
  Developer  :  Sarika Ghanwat
  Date       :  12 Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/
import React from 'react'

export const BigBannerImage = (props) => {
  const imageURL = props.inputData.bgImage;
  return (
    <section id={props.inputData.id}>
      <div className={props?.inputData?.MainCss ? props?.inputData?.MainCss : "container mx-auto px-4"}>
        <div className={props?.inputData?.bgImgCss ? props?.inputData?.bgImgCss : "bg-cover bg-no-repeat"} style={{ backgroundImage: `url(${imageURL})`,backgroundSize: "100% 100%"}}>
          <div className={props?.inputData?.paraCss ? props?.inputData?.paraCss : "absolute bottom-0 right-0 h-8 w-8 text-black text-right"}>{props?.inputData?.para}</div>
        </div>
      </div>
    </section>
  )
}
export default BigBannerImage;