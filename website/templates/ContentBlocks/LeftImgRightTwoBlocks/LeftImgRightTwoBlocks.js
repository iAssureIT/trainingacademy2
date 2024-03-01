import React from 'react'

const StatementBlock = (props) => {
  return (
    <section className='bg-white'>
        <div id="imgLtContent" className=" mx-auto px-4 sm:px-16  bg-white mt-10 lg:mt-20">
		    <hr className=" mx-auto w-16 h-1 mt-4 bg-RMByellow border-0  "/>
            <div className="mt-3 mb-10 flex justify-center text-3xl sm:text-4xl lg:text-6xl xxl:text-8xl" >
                <h1 className="block  text-lightBlue lg:leading-tight font-extrabold"> {props?.inputData.title1}</h1>
                <h1 className="block text-RMByellow lg:leading-tight font-extrabold">&nbsp; {props?.inputData.title2}</h1>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-12 ">
            	<div className="relative ml-4"> 
					<img className="w-full rounded-md mr-80" src={props?.inputData.image} alt="Image Description" />
					<div className="absolute bottom-0 left-0">
				    </div>
				</div>
                <div>
                    <div className="">
                        <div className="h-auto border-spacing-x-96 rounded  xxl:p-3 p-10 shadow-2xl">
                            <div className="flex flex-1 w-full text-2xl sm:text-2xl lg:text-5xl xxl:text-5xl" >
                                <h1 className="block  text-lightBlue lg:leading-tight font-extrabold">Vision </h1>
                                <h1 className="block text-RMByellow lg:leading-tight font-extrabold">&nbsp; Statement</h1>
                            </div>
                            <div className="w-full">    
                                <div className="mt-5 font-semibold text-xl text-justify xxl:text-3xl overflow-hidden text-darkGray ">
                                    To create a profitable, healthy, and vibrant
                                    <div className="flex flex-wrap">
                                    <div className="block text-RMByellow lg:leading-tight font-extrabold">BUSINESS COMMUNITY &nbsp; </div>
                                    <div>that is </div>
                                    <div className="block text-RMByellow lg:leading-tight font-extrabold">&nbsp; OF ROTARIANS </div>
                                    <div className="flex flex-wrap text-RMByellow lg:leading-tight font-extrabold">FOR ROTARIANS &nbsp;</div>
                                    <div className="flex flex-wrap text-RMByellow lg:leading-tight font-extrabold"> BY ROTARIANS</div>
                                    </div>
                                </div>
                            </div>
                        </div>
    				    {/* <img className="-mt-15 float-right" src="/images/aboutus_4.png" alt="Image" /> */}
                    </div>

                    <div className="mt-10 h-auto border-spacing-x-96 rounded  xxl:p-3 p-10 shadow-xl">
                        <div className="flex flex-1 w-full text-2xl sm:text-2xl lg:text-5xl xxl:text-5xl" >
                            <h1 className="block  text-lightBlue lg:leading-tight font-extrabold">Mission </h1>
                            <h1 className="block text-RMByellow lg:leading-tight font-extrabold">&nbsp; Statement</h1>
                        </div>
                        <div className="w-full">    
                            <p className="mt-5 font-semibold text-xl text-justify xxl:text-3xl overflow-hidden text-darkGray d">
                                Reaching out to maximum number of Rotary Clubs locally, nation wide and internationally to increase the connects that create bonhomie amongst members which ultimately result in a long-lasting business relationship. RMB Pune Business Chapter is committed to this goal.
                            </p>
                        </div>
                    </div>
                </div>
			</div>
		</div>
    </section>
  )
}

export default StatementBlock
