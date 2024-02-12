/*==========================================================
  Developer  :  Priyanka Bhanwase
  Date       :  1st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/
import React from 'react'

const FooterAnimation = (props) => {
   return (
        <div className='video-container'>
            <video loop={true} autoPlay muted className="w-full h-full">
                <source src={props.inputData.videoLink} type="video/mp4" />
            </video>
        </div>
   )
}

export default FooterAnimation