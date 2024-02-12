"use client"

const Autocarousel = (props) => {
    return (
        <div className="relative m-auto w-full  overflow-hidden bg-white before:absolute before:left-0 before:top-0  before:h-full before:w-[100px]  after:content-['']">
            <div className={props.inputData.animationClass ? props.inputData.animationClass : "animate-infinite-slider flex w-[calc(250px*50)] md:w-[calc(250px*100)] overflow-hidden "}>
                {[...Array(10)].map((_, outerIndex) => (

                    props.inputData.images.map((logo, innerIndex) => (
                        <div
                            className="slide flex w-full items-center justify-center"
                            key={innerIndex + outerIndex * props.inputData.images.length}
                        >
                            <img
                                src={logo}
                                alt={`img${innerIndex}`}
                                className="flex-auto w-full object-cover h-full py-2 px-2 slide rounded-lg cursor-pointer"
                            />
                        </div>
                    ))
                ))}

            </div>
        </div>
        // <div className="xl:container mx-auto ">
        //   <div className=" flex items-center min-h-screen justify-center">
        //     <div className="w-[200%] h-20 border-t border-b border-gray-600 overflow-hidden relative">
        //       <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 gap-20 animate ease-linear">
        //         {props.inputData.images.map((i,index) => {
        //           return (
        //             <div className="flex justify-center items-start w-[20rem]">
        //               <img key={index} src={i} />
        //             </div>
        //           );
        //         })}
        //         {props.inputData.images.map((i, ind) => {
        //           return (
        //             <div className="flex justify-center items-start w-[20rem]">
        //               <img key={ind} src={i} />
        //             </div>
        //           );
        //         })}
        //       </div>
        //     </div>
        //   </div>
        // </div>

    );
};
export default Autocarousel;