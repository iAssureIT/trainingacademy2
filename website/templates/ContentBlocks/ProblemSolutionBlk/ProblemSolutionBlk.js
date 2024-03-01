/*==========================================================
  Developer  :  Sarika Ghanwat
  Date       :  12st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/

"use client";
import React from 'react';

const ProblemSolutionBlk = (props) => {
    const { inputData } = props;
    const { dash, blockTitle, classForblockTitle, grid1Css, img1GridCss, content1Css, title1, title1Css, subTitle1, subTitle1Css, para1, para1Css, grid2Css, content2Css, title2, subTitle2, subTitle3, para2, para3, listData, listCss, img1, img2 } = inputData;

    return (
        <section className='bg-white'>
            {dash &&
                <div className="w-full mb-4 ">
                    <ul className="place-content-center flex flex-wrap">
                        {[...Array(3)].map((_, index) => (
                            <li key={index} className={`dash${index + 1} ${dash}`}></li>
                        ))}
                    </ul>
                </div>
            }
            {blockTitle &&
                <h2 className={classForblockTitle || "blockTitle"} dangerouslySetInnerHTML={{ __html: blockTitle }}
                ></h2>
            }
            <div className={grid1Css}>
                <div className={img1GridCss}>
                    <img alt={"question"} src={img1} className="lazyload xl:h-40"></img>
                </div>
                <div className={content1Css}>
                    {title1 && <h3 className={title1Css}>{title1}</h3>}
                    {subTitle1 && <div className={subTitle1Css}>{subTitle1}</div>}
                    {para1 && <div className={para1Css}>{para1}</div>}
                </div>
            </div>
            <div className={grid2Css}>
                <div className={content2Css}>
                    {title2 && <div className={title1Css}>{title2}</div>}
                    {subTitle2 && <div className={subTitle1Css}>{subTitle2}</div>}
                    {para2 && <div className={para1Css}>{para2}</div>}
                    {subTitle3 && <div className={subTitle1Css}>{subTitle3}</div>}
                    {para3 && <div className={para1Css}>{para3}</div>}
                    {listData &&
                        <ol className={listCss}>
                            {listData.map((data, index) => (
                                <li key={index} className={listCss}>{data}</li>
                            ))}
                        </ol>
                    }
                </div>
                <div className={img1GridCss}>
                    <img src={img2} className="lazyload xl:h-40" alt={"ansImg"}></img>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolutionBlk;
