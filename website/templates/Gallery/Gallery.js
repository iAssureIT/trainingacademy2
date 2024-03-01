import React from 'react'

const Gallery = props => {
   return (
        <section id={"gallery"} className=''>
            {props?.inputData?.dash ?
                <div className="w-full mb-0 md:mb-4">
                    <ul className="place-content-center flex flex-wrap">
                        <li className={"dash1 " + props?.inputData?.dash}></li>
                        <li className={"dash2 " + props?.inputData?.dash}></li>
                        <li className={"dash3 " + props?.inputData?.dash}></li>
                    </ul>
                </div>
                :
                null
            }
            {
                props?.inputData?.blockTitle
                    ?
                    <h2 className={props?.inputData?.classForblockTitle ? props?.inputData?.classForblockTitle : 'blockTitle '}
                        dangerouslySetInnerHTML={{
                            __html: props?.inputData?.blockTitle,
                        }}
                    >
                    </h2>
                    :
                    null
            }
            {
                props?.inputData?.blockContent
                    ?
                    <div className={props?.inputData?.classForblockContent ? props?.inputData?.classForblockContent : 'content-wrapper'}
                        dangerouslySetInnerHTML={{
                            __html: props?.inputData?.blockContent,
                        }}>
                    </div>
                    :
                    null
            }
            <div className={props.inputData?.gridDivCss ? props.inputData?.gridDivCss :"container mx-auto space-y-2 lg:space-y-0 lg:gap-2 grid md:grid-cols-3 md:gap-2 lg:grid-cols-4 "}>
                {
                    props?.inputData?.gallery_data?.map((data) => {
                        return (
                            <div className="rounded bg-gray mx-auto relative w-full">
                                <img className={props?.inputData?.imgCss} src={data.imgUrl} alt="image" />
                                <div className={props?.inputData?.textCss ? props?.inputData?.textCss :'text-center'}>{data.title}</div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Gallery
