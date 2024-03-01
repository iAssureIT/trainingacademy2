/*==========================================================
  Developer  :  Sarika Ghanwat
  Date       :  12st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

import React from 'react'

const SpecificationTable = (props) => {
    return (
        <section >           
            <div className="bg-white py-10 lg:py-20 font-TerminaTest">
                <div className="mx-auto max-w-7xl   ">
                    <div className="mx-auto lg:text-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-24">
                        <img className={"object-center mx-auto w-2/3 xl:w-auto"} src={props.inputData.logo} />
                        <h2 className="mt-10 text-center font-extrabold tracking-tight text-black text-2xl sm:text-4xl md:text-5xl">{props.inputData.title}</h2>
                        <div className={props?.inputData?.gridCss?props?.inputData?.gridCss:"grid grid-flow-row-dense grid-cols-2 grid-rows-auto"}>
                        {
                            props.inputData?.SpecificationList
                            ?
                            props.inputData?.SpecificationList.map((data,index)=>{
                                // console.log("data====",data)
                                return(
                                    <div className={props?.inputData?.gridNumCss ?props?.inputData?.gridNumCss:'grid grid-cols-2 text-left py-10'}>
                                            <div className={props?.inputData?.cssForName}>{data.name}</div>
                                            <div className={props?.inputData?.cssForValue}>{data.value}</div>                                
                                    </div>  
                                );
                            })
                            :
                            null
                        }                                                                  
                        </div>
                                
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SpecificationTable;