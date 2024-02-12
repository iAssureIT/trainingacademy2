/*==========================================================
  Developer  :  Priyanka Bhanwase
  Date       :  1st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/
"use client";

import { useState, useEffect } from 'react';

const ImageCarousel = (props) => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [autoSlideInterval, setAutoSlideInterval] = useState(null);

   const handleNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % props.inputData.images.length);
   };

   const handlePrevSlide = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex === 0 ? props.inputData.images.length - 1 : prevIndex - 1
      );
   };

   const startAutoSlide = () => {
      setAutoSlideInterval(setInterval(handleNextSlide, 3000)); // Change slide every 3 seconds
   };

   const stopAutoSlide = () => {
      clearInterval(autoSlideInterval);
   };

   useEffect(() => {
      if(props.inputData?.autoSlide){
         startAutoSlide();
         return () => {
            stopAutoSlide();
         };
      }
   }, []);
   return (
      <section className={props.inputData.className ? props.inputData.className :"relative mx-auto px-4 md:px-10 lg:px-20 xl:px-20 py-24"}>
         <div className="relative flex items-center justify-center overflow-hidden ">
            {
               props.inputData.showChangeButtons
               ?
                  <button
                     className="absolute left-0  lg:ml-20 ml-5  bg-white rounded-md lg:rounded-lg shadow-md px-2 lg:px-5 py-1 lg:py-3"
                     onClick={handlePrevSlide}
                     >
                     <i className="fa-solid fa-chevron-left text-xs"></i>
                  </button>
               :
                  null
            }
            {
               props.inputData.onlyBgImage
               ?
                  <img 
                     src={props.inputData.images[currentIndex].bgImage}
                     alt={props.inputData.images[currentIndex].alt} 
                     className="h-full w-full object-fit-cover" />
               :
                  <div>
                     <div className="z-20 relative text-white  mx-auto px-5 py-5">
                        <div className="grid grid-col-1 md:gap-x-3 lg:gap-x-1 xl:gap-x-2 2xl:gap-x-24 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 items-left justify-left  ">
                           <div  className="fit-object">
                              <img className="md:h-full md:w-full mx-auto" src={props?.inputData?.images[currentIndex].image}/>
                           </div>
                           <div className={props?.inputData?.colCss?props?.inputData?.colCss:'text-white x;col-span-2 col-start-1'}>
                              {
                                 props?.inputData?.images[currentIndex].logo?
                                    <img src={props?.inputData?.images[currentIndex].logo} className="w-3/4 rounded-t-lg xs:mx-auto md:mx-0" />
                                 :
                                    null
                              }
                              <h1 className="text-xl mt-4">
                                 <span
                                    className=""
                                    dangerouslySetInnerHTML={{
                                       __html:props?.inputData?.images[currentIndex].para,
                                    }}
                                 >
                                 </span>    
                              </h1>
                           </div>
                           <div className='flex-col my-auto xs:mx-auto sm:mx-auto '>
                              <a 
                                 href="#" 
                                 className={"inline-block no-underline  mt-4 p-4 rounded "+props?.inputData?.images[currentIndex]?.btnClass}
                              >
                                 <span
                                    className=""
                                    dangerouslySetInnerHTML={{
                                       __html: props?.inputData?.images[currentIndex]?.btnText,
                                    }}
                                 >
                                 </span>                     
                                 <i className="fa-solid fa-arrow-right"></i>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="absolute inset-0 h-auto z-10">
                        <img 
                           src={props.inputData.images[currentIndex].bgImage}
                           alt={props.inputData.images[currentIndex].bgImage} 
                           className="h-full w-full object-fit-cover" />
                     </div>
                  </div>
            }
            {
               props.inputData.showChangeButtons
               ?
                  <button
                     className="absolute right-0  lg:mr-20 mr-5 bg-white rounded-md lg:rounded-lg shadow-md px-2 lg:px-5 py-1 lg:py-3 "
                     onClick={handleNextSlide}
                  >
                     <i className="fa-solid fa-chevron-right text-xs"></i>
                  </button>
               :
                  null
            }
         </div>
         {
            props.inputData?.autoSlide
            ?
               <div className="flex justify-center mt-4">
                  {props.inputData.images.map((_, index) => (
                     <button
                     key={index}
                     className={`w-4 h-4 rounded-full mx-1 ${
                        currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
                     }`}
                     onClick={() => setCurrentIndex(index)}
                     ></button>
                  ))}
               </div>
            :
               null
         }
      </section>

   );
};

export default ImageCarousel;
