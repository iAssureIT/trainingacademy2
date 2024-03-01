/*==========================================================
  Developer  :  Sarika Ghanwat
  Date       :  1st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

"use client"
import React from 'react'

const Technology = (props) => {
   var classForNoOfCards = props.inputData.classForNoOfCards
      ?
      props.inputData.classForNoOfCards
      :
      "grid  grid-cols-3 gap-x-6 md:grid-cols-3 md:gap-x-6 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6"
   return (
      <section className={props?.inputData?.sectionCss}>
         {props?.inputData?.dash ?
            <div className="w-full mb-4">
               <ul className="flex flex-wrap place-content-center">
                  <li className={"dash1 " + props?.inputData?.dash}></li>
                  <li className={"dash2 " + props?.inputData?.dash}></li>
                  <li className={"dash3 " + props?.inputData?.dash}></li>
               </ul>
            </div>
            : null}
         {
            props?.inputData?.blockTitle
               ?
               <h1 className={props?.inputData?.classForblockTitle ? props?.inputData?.classForblockTitle : 'blockTitle '}
                  dangerouslySetInnerHTML={{ __html: props?.inputData?.blockTitle }} >
               </h1>
               :
               null
         }
         {
            props?.inputData?.blockSubTitle
               ?
               <h1 className={props?.inputData?.classForblockSubTitle ? props?.inputData?.classForblockSubTitle : 'blockSubTitle '}
                  dangerouslySetInnerHTML={{ __html: props?.inputData?.blockSubTitle }} >
               </h1>
               :
               null
         }
         
         {
            props?.inputData?.blockDescription
               ?
               <h1 className={props?.inputData?.classForblockDescription ? props?.inputData?.classForblockDescription : 'blockSubTitle '}
                  dangerouslySetInnerHTML={{ __html: props?.inputData?.blockDescription }} >
               </h1>
               :
               null
         }
         <div className={classForNoOfCards}>
            {
               props.inputData.cardsArray.map((card, index) => {
                  return (
                     <div className={props.inputData?.classForCards} key={index}>
                        <div className="block">
                           <div
                              className={
                                 props?.inputData?.bgImgCss
                                    ?
                                    props?.inputData?.bgImgCss
                                    :
                                    "relative bg-cover p-12 block  object-cover bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload "
                              }
                              style={{ backgroundImage: card.cardImage?`url(${card.cardImage})` : "none",
                               backgroundSize: "100% 100%" }}>
                              {
                                 card.cardTitle ?
                                    <span className='flex justify-center'>
                                       <h3 className={"px-2 " + props.inputData?.classForCardTitle} dangerouslySetInnerHTML={{ __html: card?.cardTitle }} ></h3>
                                    </span>
                                 : null
                              }
                              
                           </div>
                           {
                              card.imageArr?
                                 <div className={'grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 px-3 md:px-5 py-2 md:py-10 mx-auto'}>
                                    {card.imageArr.map((img, index) => {
                                       return (
                                          <img className="mx-auto lazyload" alt={ "technology "+index}   src={img}  />
                                       )
                                    })
                                    }
                                 </div>
                              :null
                           }
                        </div>

                        {
                           card.cardTitle_2
                              ?
                              <span className='flex justify-center'>
                                 <h3 className={props.inputData.classForCardTitle_2 ? props.inputData.classForCardTitle_2 : "font-bold text-md text-primary dark:text-primary-400"} dangerouslySetInnerHTML={{ __html: card?.cardTitle_2 }} ></h3>
                              </span>
                              : null
                        }
                     </div>
                  )
               })
            }
         </div>
         
         {
            props.inputData?.cardTitle_2
               ?
               <span className='flex justify-center'>
                  <span className={props.inputData.classForCardTitle_2 ? props.inputData.classForCardTitle_2 : "font-bold text-md "} dangerouslySetInnerHTML={{ __html: props.inputData?.cardTitle_2 }} ></span>
               </span>
               : null
         }
      </section>
   )
}

export default Technology