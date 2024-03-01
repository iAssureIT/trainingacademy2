/*==========================================================
  Developer  :  Sarika Ghanwat
  Date       :  12st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/
"use client"
import React, { useState, useEffect } from 'react';


export const VideoBanner = (props) => {
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVideoData({
        videoUrl: props.inputData?.videoUrl,
        title: 'Banner Video',
      });
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className=''>
      {loading ? (
        <div>
          <img src={"/images/specific/Home/HomeVideoImg.webp"} alt="Banner" className={props.inputData?.class} />
        </div>
      ) : (
        <video id={props.inputData?.id} className={props.inputData?.class} autoPlay loop muted>
          <source src={videoData.videoUrl} type="video/mp4" />
          <track src="captions_en.vtt" kind="captions" srclang="en" label="english_captions"/>
        </video>
      )}

    </div>
  )
}
export default VideoBanner;
