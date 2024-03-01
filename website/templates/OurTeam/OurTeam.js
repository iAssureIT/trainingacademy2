/*==========================================================
  Developer  :  Sarika Ghanwat
  Date       :  1st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

"use client"
import React from 'react'

const OurTeam = (props) => {
   var classForNoOfCards = props.inputData.classForNoOfCards 
                           ? 
                              props.inputData.classForNoOfCards 
                           :
                              "grid  grid-cols-3 gap-x-6 md:grid-cols-3 md:gap-x-6 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6"
   return(
      <section>
         {
            props?.inputData?.blockTitle
            ?
               <h1 className={props?.inputData?.classForblockTitle ? props?.inputData?.classForblockTitle:'blockTitle '}>
                  {props?.inputData?.dash?
              <div className="w-full mb-4">
               <ul className="place-content-center flex flex-wrap">
                     <li className={"dash1 "+props?.inputData?.dash}></li>
                     <li className={"dash2 "+props?.inputData?.dash}></li>
                     <li className={"dash3 "+props?.inputData?.dash}></li>
               </ul>
            </div>
          : null}
          {props?.inputData?.blockTitle}</h1>
            : 
               null
         }
          {
            props?.inputData?.blockSubTitle
            ?
               <h1 className={props?.inputData?.classForblockSubTitle ? props?.inputData?.classForblockSubTitle:'blockSubTitle '}>
                  {props?.inputData?.blockSubTitle}</h1>
            : 
               null
         }
         <div className={classForNoOfCards}>
            {
               props.inputData.cardsArray.map((card,index)=>{
                  return(
                     <div className={props.inputData?.classForCards} key={index}>
                        <div className="block">
                           <div className={"relative overflow-hidden bg-cover bg-no-repeat"}>
                              <img  alt={card.altImg?card.altImg:"ourTeam"} src={card.cardImage} className={props.inputData?.classForCardImage ? props.inputData?.classForCardImage: "w-full"} />
                           </div>
                        </div>
                        {
                           card.cardTitle?
                              <h2 className={"px-2 "+props.inputData?.classForCardTitle}>{card.cardTitle} </h2>
                           :null
                        }
                        {
                           card.cardTitle_2
                           ?
                              <span className='flex justify-center'>
                                 <h3 className={props.inputData.classForCardTitle_2?props.inputData.classForCardTitle_2:"font-bold text-md text-primary dark:text-primary-400"}>{card.cardTitle_2}</h3>
                              </span>
                           :null
                        }
                     </div>
                  )
               })
            }
         </div>
      </section>
   )
}

export default OurTeam