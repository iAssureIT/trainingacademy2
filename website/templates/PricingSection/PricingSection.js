import React from 'react'

export const PricingSection = (props) => {
  return (
    <section >
        <div className=" ">
            <div className="mx-auto lg:mt-28 mt-14 ">
                <div className="mx-auto lg:text-center">
                    <img className={"object-center mx-auto w-2/3 xl:w-auto"} src={props.inputData.logo} />
                    <h2 className="mt-5 lg-mt-10 text-center font-extrabold  text-black text-2xl sm:text-4xl md:text-5xl">{props.inputData.title}</h2>
                    <div className={props?.inputData?.gridCss?props?.inputData?.gridCss:"grid grid-flow-row-dense grid-cols-2 grid-rows-auto"}>

                    </div>   
                    <div className='w-2/3 xxl:w-2/4 mx-auto bg-offWhite h-auto rounded-lg mt-40 py-1'>
                        <div className='flex justify-center items-center -mt-40'>
                            <img src={props?.inputData?.imgUrl} alt={props?.inputData?.alt}/>
                        </div>
                        <div className={props?.inputData?.btnGridCss}>
                            <div className>
                                <button className='stdBtn bg-blue text-white priceBtn ' >{props.inputData.btn1}</button>
                            </div>
                            <div>
                                <button className='stdBtn bg-white text-blue priceBtn'>{props.inputData.btn2}</button>
                            </div>
                        </div>
                        <div className={props?.inputData?.txtgridCss}>
                            <div>{props.inputData.btn1}</div>
                            <div><i className="fa fa-inr text-xl" aria-hidden="true"></i> {props?.inputData?.showroomPrice}</div>
                        </div>
                        <div className={props?.inputData?.txtgridCss+" pb-8  border-b-2 border-gray "}>
                            <div>Electric Battery</div>
                            <div><i className="fa fa-inr text-xl" aria-hidden="true"></i> {props?.inputData?.batteryPrice}</div>
                        </div>
                        <div className={props?.inputData?.txtgridCss}>
                            <div>Total Price</div>
                            <div><i className="fa fa-inr text-xl" aria-hidden="true"></i> {props?.inputData?.totalPrice}</div>
                        </div>
                        <div className={props?.inputData?.btnGridCss+" mt-10 pb-20"}>
                            <button className='stdBtn bg-blue text-white priceBtn '>{props.inputData.btn3}</button>
                            <button className='stdBtn bg-white text-blue priceBtn'>{props.inputData.btn4}</button>
                        </div>
                    </div>                         
                </div>
            </div>
        </div>
    </section>
  )
}
export default PricingSection;