import React from 'react'

const Statistics = props => {
    return (
        <section id="Statistics">
            <div id="statisticsDiv" className="w-full bg-white">
                <div id="fullWidthContent" className={props?.inputData?.mainCss ? props?.inputData?.mainCss: " bg-no-repeat  max-w-full h-auto bg-cover sm:bg-cover bg-center"} style={{ backgroundImage: `url(${props?.inputData?.bgImage})` }}>
                    <div className={""}>
                    {   props?.inputData?.dash?
                            <div className="w-full mb-4">
                                <ul className="place-content-center flex flex-wrap">
                                    <li className={"dash1 "+props.inputData.dash}></li>
                                    <li className={"dash2 "+props.inputData.dash}></li>
                                    <li className={"dash3 "+props.inputData.dash}></li>
                                </ul>
                            </div>
                            :
                            null
                        }
                          </div>
                         {props?.inputData?.title ? (
              <div
                className={
                  props?.inputData?.titleCss
                    ? props?.inputData?.titleCss
                    : "block font-extrabold uppercase text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl"
                }
                dangerouslySetInnerHTML={{ __html: props?.inputData?.title }}
              ></div>
            ) : null}
                    {
                        props?.inputData?.subTitleCss?
                            <div className={props?.inputData?.subTitleCss}>{props?.inputData?.subTitle}</div>
                            :
                            null
                    }
                    <div className="p-4 rounded-lg md:py-8 md:px-8 xxl:py-24 xxl:px-18" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                        <dl className={props?.inputData?.gridDivCss ? props?.inputData?.gridDivCss : "grid max-w-screen-xxl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-4 xl:grid-cols-4 sm:p-8 xxl:p-1 place-items-center"}>
                            {
                                props?.inputData?.StatisticsList.map((data, index) => {
                                    return (
                                        <div key={index+"Stats"}>
                                            <div  id={index} className={index === 0 || index === 1 ?props.inputData?.gridSubDivCss:"grid grid-cols-1  items-center justify-center"}>
                                                { data.icon ?<img src={data.icon} alt={"contactIcon" + index}  className={props?.inputData?.imgCss}/>
                                                    :
                                                    null
                                                }
                                                <dt className={props?.inputData?.captionStyle ? props?.inputData?.captionStyle : "mb-4 xxl:mb-8 text-4xl xxl:text-5xl font-extrabold text-center"}>{data.caption}</dt>
                                                <dd className={props?.inputData?.addressStyle ? props?.inputData?.addressStyle : "font-semibold text-center text-2xl xxl:text-3xl"}
                                                 dangerouslySetInnerHTML={{ __html: data?.address }}></dd>
                                            </div>
                                         </div>
                                    )
                                })
                            }
                        </dl>
                    </div>
                            
                    <div className={props?.inputData?.timeCss}>{props?.inputData?.time}</div>
                </div>
            </div>
        </section>
    )
}
export default Statistics
