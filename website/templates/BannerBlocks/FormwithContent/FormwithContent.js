"use client"
import React            from "react";
import dynamic          from 'next/dynamic';
// import BikeBookingForm  from "@/components/Form/BikeBookingForm.js"

const TestRideForm      = dynamic(() =>import ("@/components/Form/TestRideForm"),{loading:()=><p>Loading...</p>,});
const DealershipForm    = dynamic(() =>import ("@/components/Form/DealershipForm"),{loading:()=><p>Loading...</p>,});
const BikeBookingForm   = dynamic(() =>import('@/components/Form/BikeBookingForm.js'),{loading:()=><p>Loading...</p>,})

    
const FormwithContent = (props) => {
    var largeImageURL  = props?.inputData?.bgImage;
    var smallImageURL = props?.inputData?.smallBGImage;
    // const FormComponent = dynamic(() => import(props.inputData.formComponent), {
    //     ssr: false,
    // });
    return (
        <section className="">
            <div 
                className={
                    props?.inputData?.bannerClass 
                    ? 
                        props?.inputData?.bannerClass
                    :  
                        "relative bg-cover p-12 block shadow-lg  bg-no-repeat  max-w-full  sm:bg-cover bg-center"
                    } 
                style={{
                    '--largeImage-url': `url(${largeImageURL})`,
                    '--smallImage-url': `url(${smallImageURL ? smallImageURL : largeImageURL})`,
                    backgroundSize: "100% 100%"
                }} 
            >
                { 
                    props?.inputData?.pageTitle?
                        <h1 className={props.inputData.pageTitleClass ? props.inputData.pageTitleClass : "block font-extrabold uppercase text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl"}>{props?.inputData?.pageTitle}</h1>
                    :
                        null
                }
                <div className={props?.inputData?.gridClass ? props?.inputData?.gridClass : "lg:flex lg:flex-row-reverse justify-center content-center  place-content-center "}>
                    <div className={props?.inputData?.classGridCol_1 ? props?.inputData?.classGridCol_1 : "w-full mb-10 sm:mb-0"}>
                        {
                            props?.inputData?.title?
                                <h1 className={props?.inputData?.titleClass ? props?.inputData?.titleClass :"block font-extrabold uppercase text-3xl text-left md:text-2xl lg:text-3xl xxl:text-5xl mt-20  mb-3"}>
                                    {props?.inputData?.title}
                                </h1>
                            :
                                null
                        }
                        {
                            props?.inputData?.image
                            ?
                                <div className={props?.inputData?.imageBoxClass ? props?.inputData?.imageBoxClass:' object-fit '}>
                                    <img
                                        className={props?.inputData?.imageClass?props?.inputData?.imageClass:'h-full w-full'}
                                        src={props?.inputData?.image}
                                        alt="form-image"
                                    />
                                </div>
                            :
                                null
                        }
                        {
                            props.inputData.showContent || props.inputData.contentArray?.length>0
                            ?
                                <div className={props.inputData.contentBoxClass}>
                                    {
                                    
                                    props?.inputData.contentArray?.map((content,index)=>{
                                        return(
                                        <div key={index} className={props.inputData.contentClass? props.inputData.contentClass:""}>
                                            {content}
                                        </div>
                                    )})

                                   }
                                </div>
                            :
                                null
                        }
                    </div>
                    <div className={props?.inputData?.classGridCol_2 ? props?.inputData?.classGridCol_2 : " w-full lg:px-10"}>
                        {/* {props?.inputData?.showForm && <FormComponent />} */}
                        {
                            props?.inputData?.showBikeBookingForm
                            ?
                                <BikeBookingForm padding=" "  formClass="p-5 lg:p-10 rounded-lg bg-offWhite " />
                            :
                                null
                        }
                        {
                            props?.inputData?.showTestRideForm
                            ?
                                <TestRideForm padding="  py-10  lg:py-24 px-20 "  formClass="p-5 lg:p-10 mt-5 rounded-lg bg-offWhite " />
                            :
                                null
                        }
                        {
                            props?.inputData?.showDealershipForm
                            ?
                                <DealershipForm padding=" "  formClass="p-5 lg:p-10 rounded-lg bg-offWhite " />
                            :
                                null
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormwithContent;