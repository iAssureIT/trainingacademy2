
import React from "react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
const SmallBannerTxtBtnSec = (props) => {
    var imageURL = props?.inputData?.bgImage;
    return (
        <section id={props.inputData.id} className="mx-0 lg:mx-20">
            {!props?.inputData?.singlebgImage
                ?
                <div className="relative flex items-center justify-center overflow-hidden">
                {/* // <div className={props.inputData?.bannerClass ? props.inputData?.bannerClass : "relative bg-cover p-4 md:p-12 block shadow-lg  bg-no-repeat  max-w-full  sm:bg-cover bg-center lg:h-72 xl:h-96 h-96 "} style={{ backgroundImage: `url(${imageURL})`, backgroundSize: "100% 70%" }}> */}
                    {/* <div className="mx-auto lg:px-4  ">
                        <div className="grid md:grid-cols-3  lg:grid-cols-3 2xl:grid-cols-4  xl:grid-cols-4 h-auto mt-20 sm:mt-20 lg:mt-16">
                            <div className="text-white col-span-1 md:col-start-2 md:col-span-1  lg:col-start-1 lg:col-span-2 xl:col-start-2  mt-20 md:mt-20">
                                {
                                    props.inputData?.logo 
                                    ?
                                        <img src={props?.inputData?.logo} className={props.inputData.logoClassName} />
                                        
                                    :
                                        null
                                }
                                {
                                    props.inputData?.para 
                                    ?
                                        <h4 className={props?.inputData?.paraCss ? props.inputData.paraCss : "mb-6 text-xl  font-normal  text-justify lg:w-auto"}>
                                            {props?.inputData?.para}
                                        </h4>
                                    :
                                        null
                                }
                            </div>
<<<<<<< Updated upstream
                            {
                                props.inputData?.btnText
                                ?
                                    <div className="flex flex-col items-center my-auto -mt-20 md:mt-40">
                                        <button className={props?.inputData?.btnClass ? props?.inputData?.btnClass : "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"}>
                                        {props?.inputData?.btnText}<i class="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </div>
                                :
                                    null
                            }                          
=======
                            <div className="flex flex-col items-center my-auto -mt-20 md:mt-40">
                                <button className={props?.inputData?.btnClass ? props?.inputData?.btnClass : "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"}>
                                    {props?.inputData?.btnText}<i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>

>>>>>>> Stashed changes
                        </div>
                    </div> */}
                    <div>
                     <div className="z-20 relative text-white container mx-auto px-5 py-5">
                        <div className="grid  md:grid-cols-4 2xl:grid-cols-4  gap-4 items-left justify-left lg:px-12 py-2 ">
                           <div className='text-white md:col-span-2 md:col-start-2'>
                              {
                                 props?.inputData?.logo?
                                    <img src={props?.inputData?.logo} className="w-3/4 rounded-t-lg mx-auto md:mx-0" />
                                 :
                                    null
                              }
                              <h1 className="text-xl mt-4 text-center md:text-left">{props?.inputData?.para}</h1>
                           </div>
                           <div className='flex flex-col items-center '>
                              <a 
                                 href="#" 
                                 className={"inline-block no-underline  mt-4 p-4 rounded "+props?.inputData?.btnClass}
                              >
                                 {props?.inputData?.btnText}<i className="fa-solid fa-arrow-right"></i>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="absolute inset-0 h-auto z-10">
                        <img 
                           src={props.inputData.bgImage}
                           alt={props.inputData.bgImage} 
                           className="h-full w-full object-fit-cover" />
                     </div>
                  </div>
                </div>

                :
                <section className="w-full bg-cover">
                    <img className={props?.inputData?.className ? props?.inputData?.className : "h-96 w-auto mx-auto mt-10 xxl:my-16 pb-10"} src={props?.inputData?.singlebgImage} alt={props?.inputData?.alt} />
                </section>

            }
        </section>
    );
};

export default SmallBannerTxtBtnSec;
