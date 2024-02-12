/*==========================================================
  Developer  :  Sarika Ghanwat
  Date       :  19 Oct 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

import React from 'react'

const ProblemSolutionBlk = (props) => {
    return (
        <section >
            {props?.inputData?.dash ?
                <div className="w-full mb-4">
                    <ul className="place-content-center flex flex-wrap">
                        <li className={"dash1  " + props?.inputData?.dash}></li>
                        <li className={"dash2 " + props?.inputData?.dash}></li>
                        <li className={"dash3 " + props?.inputData?.dash}></li>
                    </ul>
                </div>
                : null}
            {props?.inputData?.blockTitle ? (
                <h2
                    className={
                        props?.inputData?.classForblockTitle
                            ? props?.inputData?.classForblockTitle
                            : "blockTitle "
                    }
                    dangerouslySetInnerHTML={{
                        __html: props?.inputData?.blockTitle,
                    }}
                ></h2>
            ) : null}
            <div className={props?.inputData?.grid1Css}>
                <div className={props?.inputData?.img1GridCss}>
                    <img alt={"question"} src={props?.inputData?.img1} className="lazyload xl:h-40 "></img>
                </div>
                <div className={props?.inputData?.content1Css}>
                    {
                        props?.inputData?.title1
                            ?
                            <h3 className={props?.inputData?.title1Css}>{props?.inputData?.title1}</h3>
                            :
                            null
                    }
                    {
                        props?.inputData?.subTitle1
                            ?
                            <div className={props?.inputData?.subTitle1Css}>{props?.inputData?.subTitle1}</div>
                            :
                            null
                    }
                    {
                        props?.inputData?.para1
                            ?
                            <div className={props?.inputData?.para1Css}>{props?.inputData?.para1}</div>
                            :
                            null
                    }
                </div>
            </div>
            <div className={props?.inputData?.grid2Css}>

                <div className={props?.inputData?.content2Css}>
                    {
                        props?.inputData?.title2
                            ?
                            <div className={props?.inputData?.title1Css}>{props?.inputData?.title2}</div>
                            :
                            null
                    }
                    {
                        props?.inputData?.subTitle2
                            ?
                            <div className={props?.inputData?.subTitle1Css}>{props?.inputData?.subTitle2}</div>
                            :
                            null
                    }
                    {
                        props?.inputData?.para2
                            ?
                            <div className={props?.inputData?.para1Css}>{props?.inputData?.para2}</div>
                            :
                            null
                    }
                    {
                        props?.inputData?.subTitle3
                            ?
                            <div className={props?.inputData?.subTitle1Css}>{props?.inputData?.subTitle3}</div>
                            :
                            null
                    }
                    {
                        props?.inputData?.para3
                            ?
                            <div className={props?.inputData?.para1Css}>{props?.inputData?.para3}</div>
                            :
                            null
                    }
                    {
                        props?.inputData?.listData
                            ?
                            <ol className={props?.inputData?.listCss} >
                                {props?.inputData?.listData?.map((data, index) => {
                                    return (

                                        <li key={index} className={props?.inputData?.listCss}>{data}</li>

                                    )
                                })
                                }
                            </ol>
                            :
                            null
                    }
                </div>
                <div className={props?.inputData?.img1GridCss}>
                    <img src={props?.inputData?.img2} className="lazyload xl:h-40" alt={"ansImg"}></img>
                </div>
            </div>
        </section>

    )
}
export default ProblemSolutionBlk