/*==========================================================
  Developer  :  Prachi Kadam
  Date       :  1st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/
import React from "react";

export const LeftContentRightVideo = (props) => {
  return (
    <section
      id={props?.inputData?.block_id}
      className={props?.inputData?.blockWrapperClasses}
    >
      <div className={props?.inputData?.blockTitleClasses}>
        {props?.inputData?.blockTitle}
      </div>
      <div className={props?.inputData?.blockSubWrapperClasses}>
        <div className={props.inputData.blockContentClasses}>
          {props?.inputData?.blockContent}
        </div>
        <div className="">
          <video
            id={props.inputData.id}
            className={props.inputData.videoClass}
            // autoPlay
            // loop
            // muted
            controls
          >
            <source src={props.inputData.videoUrl} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};
export default LeftContentRightVideo;
