import React from 'react'

const RightImgLeftContent = (props) => {
	var fontSize1 = props.inputData?.fontSize1 ? props.inputData?.fontSize1 : " text-3xl sm:text-4xl lg:text-6xl xxl:text-8xl";
	var fontSize2 = props.inputData?.fontSize2 ? props.inputData?.fontSize2 : " text-3xl sm:text-4xl lg:text-6xl xxl:text-8xl";
	return (
		<section className='bg-white mb-10'>
			<div id="rttwoimgLtContent" className=" mx-auto px-4 sm:px-6  bg-white ">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 xl:gap-1  items-center justify-center content-center">
					<div className='lg:pl-12'>
						<h1 className={fontSize1 + " block  text-lightBlue lg:leading-tight font-extrabold"}> {props.inputData.title1}</h1>
						<h1 className={fontSize2 + " text-RMByellow block lg:leading-tight font-extrabold"}>{props.inputData.title2}</h1>
						{
							props?.inputData?.viewmore ?
								<div>
									<p className="mt-5 text-2xl text-justify xxl:mt-16 xxl:text-3xl lg:h-24 xxl:h-40 overflow-hidden text-darkGray  mb-4">{props?.inputData?.para}</p>
									<a href='/about-us' className='cursor-pointer text-right float-right text-skyBlue underline text-xl'>Read More</a>
								</div>
								:
								<p className="mt-5 h-auto text-xl text-justify xxl:mt-16 xxl:text-3xl text-darkGray  mb-4 flex items-center justify-center content-center">{props?.inputData?.para}</p>
						}
					</div>
					<div className=" ">
						<img className="w-full rounded-md " src={props.inputData.image_1 ? props.inputData.image_1 : "/images/generic/noImage.jpg"} alt="Image Description" />
					</div>
					<div className=" ">
						<img className="w-full rounded-md md:mt-20 xl:mt-36" src={props.inputData.image_2 ? props.inputData.image_2 : "/images/generic/noImage.jpg"} alt="Image Description" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default RightImgLeftContent
